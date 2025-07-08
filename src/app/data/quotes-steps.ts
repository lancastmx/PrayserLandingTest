import { ITutorialTab } from './../core/interfaces/stepItem';

const CotizacionTutorialGifs = {
  // Gifs representativos para cada paso (estos serían los que subirías a tus assets)
  botonAgregarCotizacion: 'assets/gifs/cotizaciones/agregar_cotizacion.gif', 
  llenarDatosContacto: 'assets/gifs/cotizaciones/llenar_datos_contacto.gif',
  confirmarCreacion: 'assets/gifs/cotizaciones/llenar_datos_contacto.gif', 
  navegarAConceptos: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif', 
  abrirModalConceptos: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif',
  seleccionarYAgregarConcepto: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif',
  finalizarCotizacion: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif'
};

export const QuotesSteps: ITutorialTab[] = [
  {
    id: 'creacion-cotizacion',
    title: 'Creación de Cotizaciones',
    icon: 'bx bx-receipt', 
    steps: [
      {
        gifUrl: CotizacionTutorialGifs.botonAgregarCotizacion,
        title: 'Paso 1: Iniciar y Completar Datos Básicos de la Cotización',
        description: `
          <p>Comienza tu cotización y rellena la información principal.</p>
          <h6><strong>1. Inicia una Nueva Cotización:</strong></h6>
          <ul>
            <li class="mx-2">○ Desde el <strong>menú lateral izquierdo</strong>: Ve a <strong>Cotizaciones</strong> y haz clic en <strong>Agregar cotización</strong>.</li>
            <li class="mx-2">○ Desde el <strong>acceso directo</strong>: Pulsa el botón <strong>Cotizar</strong> en la <strong>barra superior derecha.</strong>.</li>
          </ul>
          <p><em>*Cualquiera de las dos opciones te abrirá el formulario.</em></p>

          <h6>2. Formulario de <strong>nueva cotización</strong></strong></h6>
          <p class="mt-2">Opcionalmente, selecciona un cliente existente o crea uno nuevo.</p>
          <ul>
          <ol class="mx-2">
            
            <li class="mx-2">○  Selecciona un cliente previamente registrado.</li>
            <li class="mx-2">○ Si el cliente no existe, haz clic en <strong> boton + </strong> y completa los campos requeridos.</li>
          </ol>
            <ol class="mx-2">
              <p>Crea nuevo contacto:</p>
              <li class="mx-2"><strong>○  Nombre*</strong></li>
              <li class="mx-2"><strong>○  Teléfono</strong></li>
              <li class="mx-2"><strong>○  Correo electrónico</strong></li>
            </ol>
          </ul>

          <p class="mt-2">3. Completa los Datos de la Cotización.<strong>(Opcional)</strong></p>
          <ol>
           <li class="mx-2">○ Selecciona el Formato de cotización</li>
           <li class="mx-2">○ Añade Etiquetas o Tags</li>
           <li class="mx-2">○ Selecciona o agrega Observaciones.</li>
          </ol>
          <p class="mt-4">4. Haz clic en el botón verde <strong>Guardar.</strong></p>
          <p class="mt-2">5. Confirmación y Redirección:El sistema asignará un folio único y te redirigirá a la pantalla de edición.</p>
          <p><em>Tu cotización estará registrada y lista para el siguiente paso.</em></p>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.navegarAConceptos,
        title: 'Paso 2: Añadir Productos o Servicios (Conceptos)',
        description: `
          <p>Ahora que la cotización está creada, añade los productos o servicios que la componen.</p>
          <h6><strong>1. Accede a la Sección Conceptos:</strong></h6>
          <ul>
            <li class="mx-2">○ En la barra superior, asegúrate de estar en **Oportunidad**.</li>
            <li class="mx-2">○ Abre la sección **Conceptos** (ícono del carrito de compra) en el menú lateral izquierdo.</li>
          </ul>
          <h6><strong>2. Selecciona Conceptos del Catálogo:</strong></h6>
          <ul>
            <li class="mx-2">○ Haz clic en el botón verde **Explorar Conceptos**.</li>
            <li class="mx-2">○ En la ventana emergente, usa **Buscar concepto** para encontrar el producto/servicio.</li>
            <li class="mx-2">○ Haz clic en el botón verde **+** para añadirlo; podrás modificar la cantidad en el lado derecho.</li>
          </ul>
          <h6><strong>3. Finaliza la Selección de Conceptos:</strong></h6>
          <ul>
            <li class="mx-2">○ Cuando hayas añadido todos los conceptos, pulsa el botón **Aceptar**.</li>
            <li class="mx-2">○ Los conceptos elegidos aparecerán listados en la sección Conceptos de tu cotización.</li>
          </ul>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.finalizarCotizacion,
        title: 'Paso 3: Realizar Ajustes Finales y Guardar la Cotización',
        description: `
          <p>Con los conceptos ya incorporados, completa estos pasos finales antes de terminar.</p>
          <h6><strong>1. Ajusta Cantidades y Precios:</strong></h6>
          <ul>
            <li class="mx-2">○ Modifica directamente las cantidades o precios en la tabla de conceptos si es necesario.</li>
          </ul>
          <h6><strong>2. Aplica Impuestos:</strong></h6>
          <ul>
            <li class="mx-2">○ Haz clic en **Aplicar impuestos** si corresponde.</li>
          </ul>
          <h6><strong>3. Revisa los Montos:</strong></h6>
          <ul>
            <li class="mx-2">○ Verifica que los valores en la barra inferior sean correctos: **Subtotal**, **Impuestos**, **Monto total**, **Utilidad**.</li>
          </ul>
          <h6><strong>4. Guarda los Cambios:</strong></h6>
          <ul>
            <li class="mx-2">○ Para registrar todas las modificaciones, pulsa el botón verde **Guardar** en la parte inferior.</li>
          </ul>
          <h6><strong>5. Más Opciones (Opcional):</strong></h6>
          <ul>
            <li class="mx-2">○ Usa funciones adicionales como **Generar PDF**, **Compartir**, **Priorizar** o **Duplicar**.</li>
          </ul>
          <p><em>*Con estos pasos, tu cotización estará lista para enviarse o compartirse.</em></p>
        `,
      },
    ],
  },
];