import { DragDropModule, CdkDragDrop, moveItemInArray  } from '@angular/cdk/drag-drop';
import { Component, ViewChild, ElementRef, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

import interact from 'interactjs';

interface CanvasElement {
  id: string;
  type: 'text' | 'image';
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  text?: string;
  src?: string;
  alt?: string;
}
@Component({
  selector: 'app-contructor-landing-pages',
  standalone: true,
  imports: [CommonModule, DragDropModule ],
  templateUrl: './contructor-landing-pages.component.html',
  styleUrl: './contructor-landing-pages.component.css'
})
export class ContructorLandingPagesComponent   {
 @ViewChild('canvasContainer') canvasContainer!: ElementRef<HTMLDivElement>;

  private elementsData: Record<string, CanvasElement> = {};
  
  public layers: CanvasElement[] = [];
  public jsonOutput = 'Aquí se mostrarán los datos...';

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}


  /**
   * Crea un nuevo elemento y lo añade al canvas.
   */
  createElement(type: 'text' | 'image'): void {
    const canvas = this.canvasContainer.nativeElement;
    const id = `${type}-${Date.now()}`;
    const element = document.createElement('div');
    element.id = id;
    element.className = 'draggable-element';

    const initialData: CanvasElement = {
      id: id,
      type: type,
      x: 50,
      y: 50,
      width: 200,
      height: 100,
      zIndex: Object.keys(this.elementsData).length + 1
    };

    if (type === 'text') {
      element.contentEditable = 'true';
      element.textContent = 'Texto editable...';
      initialData.text = element.textContent;
    } else if (type === 'image') {
      const img = document.createElement('img');
      img.src = 'https://picsum.photos/200/300';
      img.alt = 'Imagen de marcador';
      element.appendChild(img);
      initialData.src = img.src;
      initialData.alt = img.alt;
    }

    element.style.width = `${initialData.width}px`;
    element.style.height = `${initialData.height}px`;
    element.style.transform = `translate(${initialData.x}px, ${initialData.y}px)`;
    element.style.zIndex = `${initialData.zIndex}`;

    this.elementsData[id] = initialData;
    canvas.appendChild(element);
    this.makeInteractive(element);
    this.updateLayersArray();

    if (type === 'text') {
      element.addEventListener('input', (e) => {
        const target = e.target as HTMLDivElement;
        this.elementsData[id].text = target.textContent || '';
      });
    }
  }

  /**
   * Aplica la funcionalidad de arrastrar y redimensionar a un elemento.
   */
  private makeInteractive(element: HTMLElement): void {
    interact(element)
      .draggable({
        listeners: {
          start: (event: Interact.DragEvent) => {
            this.ngZone.run(() => {
              const target = event.target as HTMLElement;
              this.bringToFront(target.id);
            });
          },
          move: (event: Interact.DragEvent) => {
            const target = event.target as HTMLElement;
            const data = this.elementsData[target.id];
            data.x += event.dx;
            data.y += event.dy;
            target.style.transform = `translate(${data.x}px, ${data.y}px)`;
          }
        },
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({ restriction: 'parent', endOnly: true })
        ]
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        listeners: {
          move: (event: Interact.ResizeEvent) => {
            const target = event.target as HTMLElement;
            const data = this.elementsData[target.id];
            
            data.width = event.rect.width;
            data.height = event.rect.height;
            target.style.width = `${data.width}px`;
            target.style.height = `${data.height}px`;

            data.x += event.deltaRect?.left ?? 0;
            data.y += event.deltaRect?.top ?? 0;
            target.style.transform = `translate(${data.x}px, ${data.y}px)`;
          }
        },
        inertia: true
      });
  }

  /**
   * Mueve un elemento al frente (zIndex más alto).
   */
  private bringToFront(elementId: string): void {
    const maxZ = Math.max(0, ...Object.values(this.elementsData).map(d => d.zIndex));
    if (this.elementsData[elementId].zIndex <= maxZ) {
        this.elementsData[elementId].zIndex = maxZ + 1;
        const domEl = document.getElementById(elementId);
        if (domEl) domEl.style.zIndex = `${maxZ + 1}`;
        this.updateLayersArray();
    }
  }

  /**
   * Actualiza el array de capas, ordenándolo por zIndex para mostrarlo en la UI.
   */
  private updateLayersArray(): void {
    this.layers = Object.values(this.elementsData).sort((a, b) => b.zIndex - a.zIndex);
    this.cdr.detectChanges();
  }

  /**
   * Maneja el evento de soltar una capa para reordenarla.
   */
  dropLayer(event: CdkDragDrop<CanvasElement[]>): void {
    // moveItemInArray espera el array de datos, que está en this.layers
    moveItemInArray(this.layers, event.previousIndex, event.currentIndex);
    
    // Reasigna el zIndex a todos los elementos basado en el nuevo orden.
    const totalLayers = this.layers.length;
    this.layers.forEach((layer, index) => {
      const newZIndex = totalLayers - index;
      this.elementsData[layer.id].zIndex = newZIndex;
      
      // Actualiza el zIndex en el DOM.
      const domElement = document.getElementById(layer.id);
      if (domElement) {
        domElement.style.zIndex = `${newZIndex}`;
      }
    });

    this.updateLayersArray();
  }

  /**
   * Obtiene los datos actuales del canvas y los formatea como JSON.
   */
  getCanvasData(): void {
    const dataArray = Object.values(this.elementsData);
    this.jsonOutput = JSON.stringify(dataArray, null, 2);
  }
}

