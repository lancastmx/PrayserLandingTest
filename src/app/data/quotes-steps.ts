import { ITutorialTab } from './../core/interfaces/stepItem';

const CotizacionTutorialGifs = {
  // Gifs representativos para cada paso (estos serían los que subirías a tus assets)
  botonAgregarCotizacion: 'assets/gifs/cotizaciones/agregar_cotizacion.gif', // Gif de la primera imagen
  llenarDatosContacto: 'assets/gifs/cotizaciones/llenar_datos_contacto.gif',
  confirmarCreacion: 'assets/gifs/cotizaciones/llenar_datos_contacto.gif', // Gif de la segunda imagen
  // confirmarCreacion: 'assets/gifs/cotizaciones/confirmar_creacion.gif', // Gif que muestra el guardado inicial
  navegarAConceptos: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif', // Gif de la tercera imagen, mostrando la navegación a Conceptos
  // abrirModalConceptos: 'assets/gifs/cotizaciones/abrir_modal_conceptos.gif', // Gif de la cuarta imagen, mostrando el click en "Nuevo Producto | Servicio"
  abrirModalConceptos: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif',
  // seleccionarYAgregarConcepto:'assets/gifs/cotizaciones/seleccionar_agregar_concepto.gif', // Gif de la quinta imagen, mostrando la selección y agregar
  seleccionarYAgregarConcepto:
    'assets/gifs/cotizaciones/navegar_a_conceptos.gif',
  // finalizarCotizacion: 'assets/gifs/cotizaciones/finalizar_cotizacion.gif', // Gif que muestra la cotización con conceptos y las opciones finales
  finalizarCotizacion: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif'
};

export const QuotesSteps: ITutorialTab[] = [
  {
    id: 'creacion-cotizacion',
    title: 'Creación de Cotizaciones',
    icon: 'bx bx-receipt', // Icono para cotizaciones (ej: un recibo o documento)
    steps: [
      
      {
        gifUrl: CotizacionTutorialGifs.botonAgregarCotizacion,
        title: 'Paso 1: Iniciar una Nueva Cotización',
        description: `
          <p>Tienes dos formas de comenzar a crear una nueva cotización:</p><ol class=\"mt-2\"><li><strong>Desde el menú lateral izquierdo:</strong> Navega a la sección <strong>\"Cotizaciones\"</strong> para ver el listado, y luego haz clic en el botón verde <strong>“Agregar Cotización”</strong>.</li><li><strong>Desde el acceso directo superior:</strong> Si prefieres ir directamente a la creación, puedes hacer clic en el botón <strong>“Cotizar”</strong> ubicado en la parte superior de la pantalla.</li></ol><p>Ambas opciones te llevarán al formulario para comenzar a construir tu nueva cotización.</p>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.llenarDatosContacto,
        title: 'Paso 2: Rellenar Datos Básicos y de Contacto',
        description: `
          <div>
  <p>En el formulario de nueva cotización, completa la siguiente información:</p><div class="mt-3"><h5>1. Datos del Cliente</h5><ul><li><strong>Buscar/Seleccionar Cliente:</strong> Utiliza el campo de búsqueda o el desplegable para asociar esta cotización a un cliente existente en tu base de datos. Si el cliente ya está registrado, algunos campos se rellenarán automáticamente.</li></ul></div><div class="mt-3"><h5>2. Información de Contacto</h5><ul><li><strong class="text-obligatorio">Nombre de Contacto*:</strong> Ingresa el nombre de la persona a quien va dirigida la cotización (campo obligatorio).</li><li><strong>Número de Teléfono:</strong> Proporciona un número de contacto, incluyendo el código de país.</li><li><strong>Email de Contacto:</strong> Introduce la dirección de correo electrónico del contacto.</li></ul></div><div class="mt-3"><h5>3. Datos Generales y Observaciones</h5><ul><li><strong class="text-obligatorio">Formato*:</strong> Selecciona el formato deseado para la cotización (campo obligatorio).</li><li><strong class="text-opcional">Etiquetas:</strong> Opcionalmente, asigna etiquetas para organizar y filtrar tus cotizaciones.</li><li><strong class="text-opcional">Observaciones:</strong> Añade cualquier nota o comentario relevante para esta cotización.</li></ul></div>
</div>
        `,
      },
      
      {
        gifUrl: CotizacionTutorialGifs.confirmarCreacion,
        title: 'Paso 3: Guardar Datos Iniciales de la Cotización',
        description: `
          <p>Una vez que hayas completado los campos básicos:</p>
          <ol class="mt-2">
            <li>En la parte inferior del formulario, haz clic en el botón verde <strong>“Guardar”</strong>.</li>
            <li>Esto creará la cotización en el sistema y se le asignará un número de folio único (ej. "020725-Y1JJ3").</li>
            <li>Serás redirigido automáticamente a la vista de edición de la cotización recién creada.</li>
          </ol>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.navegarAConceptos,
        title: 'Paso 4: Añadir Productos o Servicios (Conceptos)',
        description: `
          <p>Ahora que la cotización ha sido creada, es momento de agregar los ítems que la componen:</p>
          <ol class="mt-2">
            <li>En la barra de navegación horizontal superior, asegúrate de estar en la pestaña <strong>"Oportunidad"</strong> (generalmente es la predeterminada al editar).</li>
            <li>En el submenú vertical de la izquierda, selecciona la opción <strong>"Conceptos"</strong>.</li>
            <li>En el panel central, verás que aún no hay conceptos agregados.</li>
          </ol>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.abrirModalConceptos,
        title: 'Paso 5: Seleccionar Conceptos del Catálogo',
        description: `
          <p>Para buscar y añadir los productos o servicios:</p>
          <ol class="mt-2">
            <li>Haz clic en el botón verde <strong>“Nuevo Producto | Servicio”</strong> o <strong>“Explorar Conceptos”</strong> ubicado en la parte superior del panel de conceptos.</li>
            <li>Se abrirá una ventana emergente (modal) titulada <strong>"SELECCIONAR CONCEPTO"</strong>.</li>
            <li>Utiliza la barra de <strong>"Buscar Concepto"</strong> para encontrar rápidamente el ítem que deseas.</li>
          </ol>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.seleccionarYAgregarConcepto,
        title: 'Paso 6: Agregar Conceptos a la Cotización',
        description: `
          <p>Dentro del modal "SELECCIONAR CONCEPTO":</p>
          <ol class="mt-2">
            <li>Una vez que encuentres el producto o servicio en la lista de la izquierda, haz clic en el botón verde <strong>“Agregar”</strong> junto a él.</li>
            <li>El concepto se moverá al panel derecho del modal, confirmando que ha sido seleccionado para la cotización.</li>
            <li>Repite este paso para todos los productos y/o servicios que desees incluir.</li>
            <li>Cuando hayas terminado de seleccionar, haz clic en el botón verde <strong>“Aceptar”</strong> en la parte inferior derecha del modal.</li>
            <li>Los conceptos seleccionados ahora aparecerán listados en la sección "Conceptos" de tu cotización.</li>
          </ol>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.finalizarCotizacion,
        title: 'Paso 7: Ajustes Finales y Guardar Cotización',
        description: `
          <p>Con los conceptos ya agregados, puedes realizar los últimos ajustes:</p>
          <ol class="mt-2">
            <li><strong>Ajustar Cantidades/Precios:</strong> Si es necesario, edita las cantidades de los productos o sus precios directamente en la tabla de conceptos (aunque no se ve en los Gifs, es una funcionalidad esperada).</li>
            <li><strong>Aplicar Impuestos:</strong> Haz clic en el botón <strong>"Aplicar impuestos"</strong> si corresponde.</li>
            <li><strong>Revisar Montos:</strong> Verifica el "Monto Total", "Subtotal", "Impuestos" y "Utilidad" en la barra inferior.</li>
            <li><strong>Guardar Cambios:</strong> Para registrar todas las modificaciones, haz clic en el botón verde <strong>“Guardar”</strong> en la parte inferior de la pantalla.</li>
            <li><strong>Acciones Adicionales:</strong> Utiliza las opciones como <strong>"Generar PDF"</strong>, <strong>"Compartir"</strong>, <strong>"Priorizar"</strong> o <strong>"Duplicar"</strong> según tus necesidades.</li>
          </ol>
        `,
      },
    ],
  },
];
