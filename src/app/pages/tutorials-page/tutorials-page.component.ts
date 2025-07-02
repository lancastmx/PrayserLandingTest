import { Component, computed, Signal, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Importamos las interfaces
import { ITutorialTab, StepItem } from '../../core/interfaces/stepItem';

// Importamos los datos de los tutoriales
// Asumimos que cada uno de estos es un 'ITutorialTab[]' con al menos un elemento
import { QuotesSteps } from '../../data/quotes-steps';
import { ProductsSteps } from '../../data/products-steps';
import { FormatosSteps } from '../../data/formatos-steps';

@Component({
  selector: 'app-tutorials-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink // Mantén RouterLink si lo usas en el HTML para el logo o enlaces. Si no, quítalo.
  ],
  templateUrl: './tutorials-page.component.html',
  styleUrls: ['./tutorials-page.component.css']
})
export class TutorialsPageComponent implements OnInit {

  // --- Definición de los Tutoriales Principales ---
  readonly tutorials: { id: string; title: string; icon: string; data: ITutorialTab[] }[] = [
    {
      id: 'crear-quote',
      title: 'Crear Quote',
      icon: 'bx bx-receipt',
      data: QuotesSteps,
    },
    {
      id: 'dar-alta-producto',
      title: 'Dar de Alta Producto',
      icon: 'bx bx-package',
      data: ProductsSteps,
    },
    {
      id: 'crear-formato',
      title: 'Crear Formato',
      icon: 'bx bx-layout',
      data: FormatosSteps,
    },
  ];

  // --- Estado Global de la Página de Tutoriales ---
  modalTitle = signal<string>('Guía de Ayuda');

  // ID del tutorial principal actualmente seleccionado en el sidebar
  private readonly _activeTutorialId = signal<string>(''); // Inicializamos vacío y lo seteamos en ngOnInit
  readonly activeTutorialId: Signal<string> = this._activeTutorialId.asReadonly();

  // --- Estado del Paso Actual dentro del Tutorial Activo ---
  private readonly _currentStepIndex = signal<number>(0);
  readonly currentStepIndex: Signal<number> = this._currentStepIndex.asReadonly();


  // --- Computed Signals para Acceso Simplificado ---

  // Obtiene la definición completa del tutorial principal activo
  readonly currentTutorialDefinition = computed(() => {
    const tutorialDef = this.tutorials.find(t => t.id === this.activeTutorialId());
    // console.log('Computed: currentTutorialDefinition', tutorialDef); // Debug
    return tutorialDef;
  });

  // Obtiene el array de StepItem[] del tutorial activo (ej. los pasos de "Crear Quote")
  // Asume que data[0] es la ITutorialTab relevante.
  readonly currentTutorialSteps: Signal<StepItem[]> = computed(() => {
    const def = this.currentTutorialDefinition();
    const steps = (def && def.data.length > 0 && def.data[0].steps) ? def.data[0].steps : [];
    // console.log('Computed: currentTutorialSteps (all steps)', steps); // Debug
    return steps;
  });

  // Obtiene el StepItem actual que debe mostrarse
  readonly currentStepItem: Signal<StepItem | null> = computed(() => {
    const steps = this.currentTutorialSteps();
    const index = this.currentStepIndex();
    const item = (steps.length > 0 && index >= 0 && index < steps.length) ? steps[index] : null;
    // console.log('Computed: currentStepItem', item, 'Index:', index, 'Total steps:', steps.length); // Debug
    return item;
  });

  // El número total de pasos para el tutorial activo
  readonly totalSteps: Signal<number> = computed(() => {
    const total = this.currentTutorialSteps().length;
    // console.log('Computed: totalSteps', total); // Debug
    return total;
  });

  // --- Signals para el estado de los botones de navegación ---
  readonly isFirstStep: Signal<boolean> = computed(() => this.currentStepIndex() === 0);
  readonly isLastStep: Signal<boolean> = computed(() => this.currentStepIndex() === this.totalSteps() - 1);


  // --- Sidebar para móvil ---
  sidebarOpen = signal(false);
  toggleSidebar(show?: boolean) {
    this.sidebarOpen.set(show ?? !this.sidebarOpen());
  }

  // --- Métodos de Navegación ---

  ngOnInit(): void {
    // Inicializa el tutorial activo al cargar la página
    if (this.tutorials.length > 0 && this.tutorials[0].id) {
      this.setActiveTutorial(this.tutorials[0].id);
    } else {
      console.warn("No hay tutoriales cargados para mostrar.");
    }
  }

  /**
   * Establece el tutorial principal activo y reinicia el índice del paso.
   * @param id El ID del tutorial a activar.
   */
  setActiveTutorial(id: string) {
    // console.log('Action: setActiveTutorial', id); // Debug
    this._activeTutorialId.set(id);
    this._currentStepIndex.set(0); // Siempre reiniciar el paso al cambiar de tutorial
    if (this.sidebarOpen()) {
        this.toggleSidebar(false); // Cierra el sidebar si está abierto en móvil
    }
  }

  /**
   * Avanza al siguiente paso del tutorial activo.
   */
  nextStep() {
    // console.log('Action: nextStep. Current index:', this.currentStepIndex(), 'Total steps:', this.totalSteps()); // Debug
    if (this.currentStepIndex() < this.totalSteps() - 1) {
      this._currentStepIndex.update(idx => idx + 1);
    }
  }

  /**
   * Retrocede al paso anterior del tutorial activo.
   */
  prevStep() {
    // console.log('Action: prevStep. Current index:', this.currentStepIndex()); // Debug
    if (this.currentStepIndex() > 0) {
      this._currentStepIndex.update(idx => idx - 1);
    }
  }
}