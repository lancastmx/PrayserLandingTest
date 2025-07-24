import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LandingElement } from '../models/landing-page.models';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class CanvasService {
  /**
   * BehaviorSubject para mantener el estado de la lista de elementos.
   * Es privado para controlar cómo se emiten los cambios.
   */
  private _elements = new BehaviorSubject<LandingElement[]>([]);
  
  /**
   * Observable público para que los componentes se suscriban a los cambios
   * en la lista de elementos.
   */
  public readonly elements$ = this._elements.asObservable();

  /**
   * Crea un nuevo elemento, le asigna un ID y zIndex, y lo añade al estado.
   * @param elem - El objeto del elemento a crear, sin id ni zIndex.
   */
  create(elem: Omit<LandingElement, 'id' | 'zIndex'>): void {
    const id = uuid();
    const currentElements = this._elements.value;
    const zIndex = currentElements.length;

    // Se crea el nuevo elemento. TypeScript puede inferir el tipo correcto
    // del discriminated union 'LandingElement' sin necesidad de un cast.
    const newElement = { ...elem, id, zIndex } as LandingElement;

    this._elements.next([...currentElements, newElement]);
  }

  /**
   * Actualiza las propiedades de un elemento existente.
   * @param id - El ID del elemento a actualizar.
   * @param changes - Un objeto con las propiedades a cambiar.
   */
  update(id: string, changes: Partial<Omit<LandingElement, 'id'>>): void {
    const currentElements = this._elements.value;

    const updatedElements = currentElements.map(el => {
      if (el.id === id) {
        if (changes.type && changes.type !== el.type) {
          console.warn(`Se intentó cambiar el tipo del elemento de '${el.type}' a '${changes.type}'. Esta acción no está permitida.`);
          return el;
        }
        // Only allow changes that match the element's type
        switch (el.type) {
          case 'header':
            return { ...el, ...(changes as Partial<Extract<LandingElement, { type: 'header' }>>) };
          case 'text':
            return { ...el, ...(changes as Partial<Extract<LandingElement, { type: 'text' }>>) };
          case 'image':
            return { ...el, ...(changes as Partial<Extract<LandingElement, { type: 'image' }>>) };
          case 'button':
            return { ...el, ...(changes as Partial<Extract<LandingElement, { type: 'button' }>>) };
          case 'divider':
            return { ...el, ...(changes as Partial<Extract<LandingElement, { type: 'divider' }>>) };
          default:
            return el;
        }
      }
      return el;
    });

    this._elements.next(updatedElements as LandingElement[]);
  }

  /**
   * Elimina un elemento de la lista por su ID.
   * @param id - El ID del elemento a eliminar.
   */
  delete(id: string): void {
    const filteredElements = this._elements.value.filter(el => el.id !== id);
    this._elements.next(filteredElements);
  }

  /**
   * Limpia todos los elementos del canvas.
   */
  clear(): void {
    this._elements.next([]);
  }
}
