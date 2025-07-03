import { Component, computed, Signal, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ITutorialTab, StepItem } from '../../core/interfaces/stepItem';
import { QuotesSteps } from '../../data/quotes-steps';
import { ProductsSteps } from '../../data/products-steps';
import { FormatosSteps } from '../../data/formatos-steps';

@Component({
  selector: 'app-tutorials-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink // Mantén RouterLink si lo usas en el HTML. Si no, quítalo.
  ],
  templateUrl: './tutorials-page.component.html',
  styleUrls: ['./tutorials-page.component.css']
})
export class TutorialsPageComponent implements OnInit {

  // --- Definición de los Tutoriales Principales ---
  readonly tutorials: { id: string; title: string; icon: string; data: ITutorialTab[] }[] = [
    {
      id: 'crear-quote',
      title: 'Crear Cotización',
      icon: 'bx bx-receipt',
      data: QuotesSteps, // Asumo que QuotesSteps también es un ITutorialTab[] (probablemente con un solo elemento)
    },
    {
      id: 'dar-alta-producto',
      title: 'Agregar Producto | Servicio',
      icon: 'bx bx-package',
      data: ProductsSteps, // ESTE ES EL QUE TIENE MÚLTIPLES ELEMENTOS (Carga Manual, Carga Masiva)
    },
    {
      id: 'crear-formato',
      title: 'Crear Formato',
      icon: 'bx bx-layout',
      data: FormatosSteps, // Asumo que FormatosSteps también es un ITutorialTab[] (probablemente con un solo elemento)
    },
  ];

  // --- Estado Global de la Página de Tutoriales ---
  modalTitle = signal<string>('Guía de Ayuda');

  // ID del tutorial principal actualmente seleccionado en el sidebar
  private readonly _activeTutorialId = signal<string>('');
  readonly activeTutorialId: Signal<string> = this._activeTutorialId.asReadonly();

  // Índice de la SUB-PESTAÑA activa dentro del tutorial principal (ej. "Carga Manual" vs "Carga Masiva")
  private readonly _activeSubTabTutorialIndex = signal<number>(0);
  readonly activeSubTabTutorialIndex: Signal<number> = this._activeSubTabTutorialIndex.asReadonly();


  // Índice del paso actual dentro de la SUB-PESTAÑA activa
  private readonly _currentStepIndex = signal<number>(0);
  readonly currentStepIndex: Signal<number> = this._currentStepIndex.asReadonly();


  // --- Computed Signals para Acceso Simplificado ---

  // Obtiene la definición completa del tutorial principal activo (ej. el objeto para "Dar de Alta Producto")
  readonly currentTutorialDefinition = computed(() => {
    const tutorialDef = this.tutorials.find(t => t.id === this.activeTutorialId());
    // console.log('Computed: currentTutorialDefinition', tutorialDef); // Debug
    return tutorialDef;
  });

  // Obtiene el ARRAY DE SUB-PESTAÑAS (ITutorialTab[]) para el tutorial principal activo (ej. [Carga Manual, Carga Masiva])
  readonly currentTutorialSubTabs: Signal<ITutorialTab[]> = computed(() => {
    const def = this.currentTutorialDefinition();
    const subTabs = def ? def.data : [];
    // console.log('Computed: currentTutorialSubTabs', subTabs); // Debug
    return subTabs;
  });

  // Obtiene la SUB-PESTAÑA (ITutorialTab) activa dentro del tutorial principal (ej. el objeto "Carga Manual")
  readonly activeSubTabTutorial: Signal<ITutorialTab | null> = computed(() => {
    const subTabs = this.currentTutorialSubTabs();
    const index = this.activeSubTabTutorialIndex();
    const activeTab = (subTabs.length > 0 && index >= 0 && index < subTabs.length) ? subTabs[index] : null;
    // console.log('Computed: activeSubTabTutorial', activeTab); // Debug
    return activeTab;
  });

  // Obtiene el array de StepItem[] (los pasos) para la SUB-PESTAÑA activa
  readonly currentStepItems: Signal<StepItem[]> = computed(() => {
    const activeTab = this.activeSubTabTutorial();
    const steps = (activeTab && activeTab.steps) ? activeTab.steps : [];
    // console.log('Computed: currentStepItems (actual steps for active sub-tab)', steps); // Debug
    return steps;
  });

  // Obtiene el StepItem actual que debe mostrarse
  readonly currentStepContent: Signal<StepItem | null> = computed(() => {
    const steps = this.currentStepItems();
    const index = this.currentStepIndex();
    const item = (steps.length > 0 && index >= 0 && index < steps.length) ? steps[index] : null;
    // console.log('Computed: currentStepContent', item); // Debug
    return item;
  });

  // El número total de pasos para la SUB-PESTAÑA activa
  readonly totalSteps: Signal<number> = computed(() => {
    const total = this.currentStepItems().length;
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
   * Establece el tutorial principal activo (desde el sidebar) y reinicia todo el estado de sub-pestañas y pasos.
   * @param id El ID del tutorial principal a activar.
   */
  setActiveTutorial(id: string) {
    console.log('Action: setActiveTutorial (main tab)', id); // Debug
    this._activeTutorialId.set(id);
    this._activeSubTabTutorialIndex.set(0); // Resetear a la primera sub-pestaña
    this._currentStepIndex.set(0); // Resetear a la primera paso
    if (this.sidebarOpen()) {
        this.toggleSidebar(false);
    }
  }

  /**
   * Selecciona una sub-pestaña específica dentro del tutorial principal activo.
   * @param index El índice de la sub-pestaña a activar.
   */
  selectSubTab(index: number) {
    console.log('Action: selectSubTab', index); // Debug
    this._activeSubTabTutorialIndex.set(index);
    this._currentStepIndex.set(0); // Resetear a la primera paso de la nueva sub-pestaña
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