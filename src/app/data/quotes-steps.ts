import { ITutorialTab } from './../core/interfaces/stepItem';

// const CotizacionTutorialGifs = {
//   // Gifs representativos para cada paso (estos serían los que subirías a tus assets)
//   botonAgregarCotizacion: 'assets/gifs/cotizaciones/agregar_cotizacion.gif', // Gif de la primera imagen
//   llenarDatosContacto: 'assets/gifs/cotizaciones/llenar_datos_contacto.gif',
//   confirmarCreacion: 'assets/gifs/cotizaciones/llenar_datos_contacto.gif', // Gif de la segunda imagen
//   // confirmarCreacion: 'assets/gifs/cotizaciones/confirmar_creacion.gif', // Gif que muestra el guardado inicial
//   navegarAConceptos: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif', // Gif de la tercera imagen, mostrando la navegación a Conceptos
//   // abrirModalConceptos: 'assets/gifs/cotizaciones/abrir_modal_conceptos.gif', // Gif de la cuarta imagen, mostrando el click en "Nuevo Producto | Servicio"
//   abrirModalConceptos: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif',
//   // seleccionarYAgregarConcepto:'assets/gifs/cotizaciones/seleccionar_agregar_concepto.gif', // Gif de la quinta imagen, mostrando la selección y agregar
//   seleccionarYAgregarConcepto:
//     'assets/gifs/cotizaciones/navegar_a_conceptos.gif',
//   // finalizarCotizacion: 'assets/gifs/cotizaciones/finalizar_cotizacion.gif', // Gif que muestra la cotización con conceptos y las opciones finales
//   finalizarCotizacion: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif'
// };
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
        title: 'Paso 1: Crear una nueva cotización',
        description: `
          <p>Tienes dos maneras de iniciar la cotización:</p>
          <ol class="mt-2">
            <li>1. Desde el menú lateral izquierdo:</li>
          </ol>
          <ul class="mt-2">
            <li class="mx-2">○ Ve a <strong>Cotizaciones</strong></li>
            <li class="mx-2">○ Haz clic en el botón verde <strong>Agregar cotización</strong></li>
          </ul>
          <ol class="mt-2">
            <li>2. Desde el acceso directo:</li>
          </ol>
          <ul class="mt-2">
            <li class="mx-2">○ <strong>Pulsa el botón Cotizar</strong> en la barra superior derecha</li>
          </ul>
          <p class="mt-2"><em>*Cualquiera de las dos opciones te abrirá el formulario para comenzar tu nueva cotización.</em></p>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.llenarDatosContacto,
        title: 'Paso 2: Llenar los datos básicos y de contacto',
        description: `
          <p>En el formulario de “nueva cotización”, ingresa la información siguiente:</p>
          <h5 class="mt-2">1. <strong>Datos del cliente recurrente</strong></h5>
          <ul>
            <li class="mx-2">○ <strong>Buscar/seleccionar cliente:</strong> usa el buscador o el desplegable para asociar la cotización a un cliente existente.</li>
            <li class="mx-2">○ <strong>Si el cliente ya está dado de alta:</strong> te aparecerá una ficha con los datos guardados anteriormente.</li>
            <li class="mx-2">○ <strong>Seleccionar:</strong> Da clic en el botón verde.</li>
            <li class="mx-2">○ Puedes modificar o agregar datos u observaciones. En caso de que uno o más de los campos tenga un error la plataforma no te dejará guardar.</li>
          </ul>
          <h5 class="mt-2">2. <strong>Información de contacto o contacto nuevo</strong></h5>
          <ul>
            <li class="mx-2">○ <strong>Nombre de contacto*:</strong> Escribe el nombre de la persona a quien va dirigida la cotización.</li>
            <li class="mx-2">○ <strong>Teléfono:</strong> Incluye el número con código de país.</li>
            <li class="mx-2">○ <strong>Correo electrónico:</strong> Introduce la dirección de email del contacto.</li>
          </ul>
          <h5 class="mt-2">3. <strong>Datos generales y observaciones</strong></h5>
          <ul>
            <li class="mx-2">○ <strong>Formato*:</strong> selecciona el diseño deseado para la cotización.</li>
            <li class="mx-2">○ <strong>Etiquetas o Tags:</strong> opción para añadir etiquetas que ayuden a organizar y filtrar tus cotizaciones.</li>
            <li class="mx-2">○ <strong>Observaciones:</strong> cualquier nota o comentario relevante.</li>
          </ul>
          <p class="mt-2"><strong>Dar clic en el botón verde Guardar.</strong></p>
          <p class="mt-2"><em>* Los campos marcados con asterisco son obligatorios.</em></p>
        `
      },
      {
        gifUrl: CotizacionTutorialGifs.confirmarCreacion,
        title: 'Paso 3: Guardar la cotización',
        description: `
          <p class="mt-2><strong>Una vez completados los datos básicos:</strong></p>
          <ol class="mt-2">
            <li class="mx-2">○ Desplázate hasta el final del formulario y haz clic en el <strong>botón verde Guardar.</strong></li>
            <li class="mx-2">○ <strong>El sistema creará la cotización y le asignará automáticamente un folio único</strong> (por ejemplo, “020725-Y1JJ3”).</li>
            <li class="mx-2">○ <strong>Serás redirigido automáticamente a la pantalla de edición</strong> de la cotización recién creada.</li>
          </ol>
          <p class="mt-2><em>Así tendrás tu cotización registrada y lista para continuar con los siguientes pasos.</em></p>
        `
      },
      {
        gifUrl: CotizacionTutorialGifs.navegarAConceptos,
        title: 'Paso 4: Agregar productos o servicios (Conceptos)',
        description: `
          <p class="mt-2><strong>Ahora que la cotización está creada, añade los conceptos que la componen:</strong></p>
          <ol class="mt-2">
            <li class="mx-2">○ <strong>En la barra de navegación superior, asegúrate de estar en Oportunidad</strong> (se abre por defecto al editar).</li>
            <li class="mx-2">○ <strong>Abre la sección Conceptos</strong> (ícono del carrito de compra) en el menú lateral izquierdo.</li>
            <li class="mx-2">○ <strong>Revisa el panel de conceptos</strong>: al principio, estará vacío y podrás comenzar a añadir productos o servicios.</li>
          </ol>
          <p class="mt-2><em>Los siguientes pasos te guiarán para incorporar cada Concepto a tu cotización.</em></p>
        `
      },
      {
        gifUrl: CotizacionTutorialGifs.abrirModalConceptos,
        title: 'Paso 5: Seleccionar conceptos del catálogo',
        description: `
          <p><strong>Para buscar y añadir productos o servicios a tu cotización:</strong></p>
          <ol class="mt-2">
            <li class="mx-2">1. Haz clic en el botón verde <strong>Explorar Conceptos </strong>en la parte superior del panel de conceptos.</li>
            <li class="mx-2">2. Aparecerá la ventana emergente en donde <strong>Seleccionas el concepto. </strong></li>
            <li class="mx-2">3. <strong>Usa el campo Buscar concepto</strong> para localizar rápidamente lo que necesitas.</li>
            <li class="mx-2">4. <strong>Haz clic en el botón verde +</strong> para añadirlo.
              <ul class="mt-2">
                <li class="mx-2">○ <strong>El producto se moverá al lado derecho</strong>, donde podrás modificar cantidad.</li>
              </ul>
            </li>
            <li class="mx-2">○ <strong>Finalizar:</strong>
              <ul class="mt-2">
                <li class="mx-2">○ <strong>Haz clic en Aceptar</strong> para confirmar.</li>
                <li class="mx-2">○ <strong>Los conceptos seleccionados aparecerán listados</strong> en la sección Conceptos.</li>
              </ul>
            </li>
          </ol>
        `
      },
      // {
      //   gifUrl: CotizacionTutorialGifs.seleccionarYAgregarConcepto,
      //   title: 'Paso 6: Agregar Conceptos a la Cotización',
      //   description: `
      //     <h4>Paso 6: Agregar Conceptos a la Cotización</h4>
      //     <p><strong>Ya que estás en la ventana para Seleccionar concepto:</strong></p>
      //     <h5>1. <strong>Agregar producto o servicio</strong></h5>
      //     <ul>
      //       <li>○ <strong>Ubica el producto</strong> en la lista izquierda.</li>
      //       <li>○ <strong>Haz clic en Agregar</strong>.</li>
      //     </ul>
      //     <h5>2. <strong>Confirmar selección</strong></h5>
      //     <ul>
      //       <li>○ <strong>El producto se moverá a la derecha</strong>.</li>
      //       <li>○ <strong>Repite el proceso</strong> para cada producto o servicio.</li>
      //     </ul>
      //     <h5>3. <strong>Finalizar</strong></h5>
      //     <ul>
      //       <li>○ <strong>Haz clic en Aceptar</strong> para cerrar la ventana.</li>
      //     </ul>
      //     <p>Los conceptos elegidos aparecerán listados en la sección Conceptos de tu cotización.</p>
      //   `
      // },
      {
        gifUrl: CotizacionTutorialGifs.finalizarCotizacion,
        title: 'Paso 6: Realizar ajustes finales y guardar la cotización',
        description: `
          <p><strong>Con los conceptos ya incorporados, completa estos pasos:</strong></p>
          <ol class="mt-2">
            <li><strong>○ Ajustar cantidades y precios:</strong>
              <ul>
                <li>○ <strong>Modifica directamente las cantidades o precios</strong> en la tabla de conceptos si es necesario.</li>
              </ul>
            </li>
            <li><strong>○ Aplicar impuestos:</strong>
              <ul>
                <li>○ <strong>Haz clic en Aplicar impuestos</strong> si corresponde por normativa o cliente.</li>
              </ul>
            </li>
            <li><strong>○ Revisar montos:</strong>
              <ul>
                <li>○ <strong>Verifica los valores mostrados</strong> en la barra inferior:</li>
                <ul>
                  <li>Subtotal</li>
                  <li>Impuestos</li>
                  <li>Monto total</li>
                  <li>Utilidad</li>
                </ul>
              </ul>
            </li>
            <li><strong>○ Guardar cambios:</strong>
              <ul>
                <li>○ <strong>Haz clic en Guardar</strong> en la parte inferior para registrar todo.</li>
              </ul>
            </li>
            <li><strong>○ Más opciones:</strong>
              <ul>
                <li>○ <strong>Usa las funciones adicionales:</strong></li>
                <ul>
                  <li>Generar PDF</li>
                  <li>Compartir</li>
                  <li>Priorizar</li>
                  <li>Duplicar</li>
                </ul>
              </ul>
            </li>
          </ol>
          <p>Con estos pasos, tu cotización estará lista para enviarse o compartirse.</p>
        `
      }
    ]
  }
];


