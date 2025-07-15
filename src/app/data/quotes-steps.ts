import { ITutorialTab } from './../core/interfaces/stepItem';

const CotizacionTutorialGifs = {
  // Gifs representativos para cada paso (estos serían los que subirías a tus assets)
  botonAgregarCotizacion: 'assets/gifs/cotizaciones/agregar_cotizacion.gif', 
  llenarDatosContacto: 'assets/gifs/cotizaciones/llenar_datos_contacto.gif',
  confirmarCreacion: 'assets/gifs/cotizaciones/llenar_datos_contacto.gif', 
  navegarAConceptos: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif', 
  abrirModalConceptos: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif',
  seleccionarYAgregarConcepto: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif',
  finalizarCotizacion: 'assets/gifs/cotizaciones/navegar_a_conceptos.gif',
  guardarCambios:         'assets/gifs/cotizaciones/guardar_cambios.gif',
  generarCotizacion:      'assets/gifs/cotizaciones/generar_cotizacion.gif',
};

export const QuotesSteps: ITutorialTab[] = [
  {
    id: 'creacion-cotizacion',
    title: 'COTIZACIÓN',
    icon:  'bx bx-receipt',
    steps: [
      {
        gifUrl: CotizacionTutorialGifs.botonAgregarCotizacion,
        title: 'Paso 1: Crear una nueva cotización',
        description: `
          <h6>Paso 1: Crear una nueva cotización</h6>
          <p>Tienes dos maneras de iniciar la cotización:</p>
          <ul>
            <li class="mx-2">○ <strong>Desde el menú lateral izquierdo</strong></li>
            <li class="mx-2">&nbsp;&nbsp;Ve a <strong>Cotizaciones</strong></li>
            <li class="mx-2">&nbsp;&nbsp;Haz clic en el botón verde <strong>Agregar cotización</strong></li>
            <li class="mx-2">○ <strong>Desde el acceso directo</strong></li>
            <li class="mx-2">&nbsp;&nbsp;Pulsa el botón <strong>verde</strong> con el signo de pesos, <strong>Cotizar</strong> en la barra superior derecha</li>
          </ul>
          <p>Cualquiera de las dos opciones te abrirá el formulario para comenzar tu nueva cotización.</p>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.llenarDatosContacto,
        title: 'Paso 2: Llenar los datos básicos y de contacto',
        description: `
          <p>En el formulario de “nueva cotización”, ingresa la información siguiente:</p>
          <ul>
            <li class="mx-2"><strong>Datos del cliente recurrente</strong></li>
          </ul>
          <ul>
            <li class="mx-2">○ Buscar/seleccionar cliente previamente registrado</li>
            <li class="mx-2">○ Si lo requieres también puedes agregar un cliente desde esta sección, usando el botón redondo con un “+”</li>
          </ul>
          <ul>
            <li class="mx-2"><strong>Información de contacto (requerida)</strong></li>
            <li class="mx-2">○ Nombre de contacto* </li>
            <li class="mx-2">○ Teléfono: incluye el número con código de país.</li>
            <li class="mx-2">○ Correo electrónico.</li>
          </ul>
          <ul>
            <li class="mx-2"><strong>Datos generales y observaciones (Opcional)</strong></li>
            <li class="mx-2">○ Formato *: selecciona el diseño deseado para la cotización.</li>
            <li class="mx-2">○ Etiquetas o Tags: Esta opción es para añadir etiquetas para organizar y filtrar tus cotizaciones.</li>
            <li class="mx-2">○ Observaciones: Aquí puedes agregar cualquier nota o comentario relevante.</li>
          </ul>
          <ul>
            <li class="mx-2">○ Dar clic en el botón verde <strong>guardar</strong>.</li>
            <li class="mx-2"><em>* Los campos marcados con asterisco son obligatorios.</em></li>
          </ul>
          <ul>
            <li class="mx-2">○ Guardar la cotización. El sistema creará la cotización y le asignará automáticamente un folio único (por ejemplo, “020725-Y1JJ3”).</li>
            <li class="mx-2">○ Serás redirigido de forma automática a la pantalla de edición de la cotización recién creada.</li>
          </ul>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.navegarAConceptos,
        title: 'Paso 3: Agregar Conceptos (productos o servicios)',
        description: `
          <p>En la barra de navegación superior, asegúrate de estar en <strong>Oportunidad</strong> (suele abrirse por defecto al editar).</p>
          <p>Abre la sección <strong>“Conceptos”</strong> (ícono del carrito de compra), que está en el menú lateral izquierdo.</p>
          <p>Haz clic en el botón verde <strong>Explorar Conceptos</strong> en la parte superior derecha del panel de conceptos.</p>
          <p>Aparecerá la ventana emergente en donde <strong>Seleccionas el concepto</strong>.</p>
          <p>Utiliza el campo <strong>Buscar concepto</strong> para encontrar rápidamente el producto o servicio que necesitas.</p>
          <p>Para añadir el concepto debes dar click en el botón verde <strong>+</strong>. Así el producto pasará a la parte derecha de la ventana, ahí podrás modificar la cantidad de productos o servicios.</p>
          <p>Da click en <strong>Aceptar</strong> en la parte inferior derecha.</p>
          <h6>Paso 4: Guardar cambios</h6>
          <p>Para registrar todas las modificaciones, pulsa el botón verde <strong>Guardar</strong> en la parte inferior de la pantalla.</p>
          <p><strong>Ajustes (opcional)</strong><br>
          Con los conceptos ya incorporados, puedes:</p>
          <ul>
            <li class="mx-2">Cambiar la imagen que se mostrará en la cotización.</li>
            <li class="mx-2">Seleccionar lista de precios.</li>
            <li class="mx-2">Modificar cantidad.</li>
            <li class="mx-2">Aplicar un impuesto.</li>
            <li class="mx-2">Modificar la descripción.</li>
            <li class="mx-2">Adjuntar la ficha técnica.</li>
            <li class="mx-2">Aplicar Cargos.</li>
            <li class="mx-2">Aplicar descuentos.</li>
            <li class="mx-2">Aplicar un precio personalizado.</li>
          </ul>
        `,
      },
      {
        gifUrl: CotizacionTutorialGifs.generarCotizacion,
        title: 'Paso 4: Generar cotización, compartir, enviar o descargar',
        description: `
          <p>Da click en las siguientes opciones:</p>
          <ul>
            <li class="mx-2">Generar PDF:<strong>Descarga la cotización en formato PDF</strong></li>
            <li class="mx-2">Compartir en linea(WhatsApp, correo, link) <strong>Comparte el link</strong> <em>LA PALABRA CLAVE ES REQUERIDA PARA INGRESAR</em></li>
          </ul>
          <p>Con estos pasos, tu cotización quedará completamente actualizada y lista para enviarse o compartirse.</p>
        `,
      },
    ],
  },
];