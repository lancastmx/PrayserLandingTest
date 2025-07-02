import { ITutorialTab } from '../core/interfaces/stepItem';
const FormatosTutorialGifs = {
  // Gifs representativos para cada paso (tendrías que crear estos assets)
  accederFormatos: 'assets/gifs/datos-contacto.webp', // Gif de la primera imagen
  botonAgregarFormatos: 'assets/gifs/formatos/boton_agregar_formatos.gif', // Gif de la primera imagen
  seleccionarPlantilla: 'assets/gifs/formatos/seleccionar_plantilla.gif', // Gif de la segunda imagen (modal)
  configurarInformacion: 'assets/gifs/formatos/configurar_informacion.gif', // Gif de la tercera imagen (pestaña Información)
  configurarMultimedia: 'assets/gifs/formatos/configurar_multimedia.gif', // Gif de la cuarta imagen (pestaña Multimedia)
  configurarAvanzado: 'assets/gifs/formatos/configurar_avanzado.gif', // Gif de la quinta imagen (pestaña Avanzado)
  guardarFormato: 'assets/gifs/formatos/guardar_formato.gif', // Gif mostrando el click en Guardar
};

export const FormatosSteps: ITutorialTab[] = [
  {
    id: 'gestion-formatos',
    title: 'Gestión de Formatos',
    icon: 'bx bx-layout', // Icono para formatos (ej: un layout o diseño)
    steps: [
      {
        gifUrl: FormatosTutorialGifs.accederFormatos,
        title: 'Paso 1: Acceder al Módulo de Formatos',
        description: `
          <p>Para gestionar o crear nuevos formatos para tus documentos (cotizaciones, facturas, etc.):</p>
          <ol class="mt-2">
            <li>En el menú de navegación lateral, expande la sección <strong>"Mis Plantillas"</strong>.</li>
            <li>Haz clic en <strong>"Formatos"</strong>. Esto te llevará a la tabla donde se listan todos tus formatos existentes.</li>
          </ol>
        `,
      },
      {
        gifUrl: FormatosTutorialGifs.botonAgregarFormatos,
        title: 'Paso 2: Iniciar la Creación de un Nuevo Formato',
        description: `
          <p>Para añadir un nuevo diseño de formato a tu catálogo:</p>
          <ol class="mt-2">
            <li>En la pantalla principal de "Formatos", haz clic en el botón verde <strong>“Agregar Formatos”</strong>, ubicado en la parte superior derecha de la tabla.</li>
            <li>Se abrirá una ventana emergente (modal) con las plantillas disponibles.</li>
          </ol>
        `,
      },
      {
        gifUrl: FormatosTutorialGifs.seleccionarPlantilla,
        title: 'Paso 3: Seleccionar una Plantilla Base',
        description: `
          <p>En la ventana <strong>"CREAR FORMATOS"</strong>, elige el diseño inicial para tu nuevo formato:</p>
          <ol class="mt-2">
            <li>Explora las opciones de plantillas visuales disponibles (ej. Aqua, Forest, Sunset).</li>
            <li>Haz clic en la tarjeta de la plantilla que deseas utilizar como base.</li>
            <li>Al seleccionar una plantilla, el sistema te redirigirá a la pantalla de edición detallada del formato.</li>
          </ol>
        `,
      },
      {
        gifUrl: FormatosTutorialGifs.configurarInformacion,
        title: 'Paso 4: Configurar la Información General del Formato',
        description: `
          <p>Una vez en la pantalla de edición del formato, te encontrarás en la pestaña <strong>"Información"</strong>. Aquí puedes definir los datos esenciales:</p>
          <div class="mt-3">
            <h5>Opciones Principales</h5>
            <ul>
              <li><strong>Activar / Desactivar Formato:</strong> Usa el interruptor para habilitar o deshabilitar este formato en tu sistema.</li>
              <li><strong>Nombre del Formato*:</strong> Asigna un nombre único y descriptivo a tu formato (campo obligatorio).</li>
            </ul>
          </div>
          <div class="mt-3">
            <h5>Configuración de Cotización</h5>
            <ul>
              <li><strong>Mostrar Nº Cotización:</strong> Activa/desactiva la visibilidad del número de folio en el documento.</li>
              <li><strong>Prefijo Folio*:</strong> Define el prefijo que acompañará el número de folio de las quotes que usen este formato (ej. "COT-", "INV-").</li>
            </ul>
          </div>
          <div class="mt-3">
            <h5>Redes Sociales</h5>
            <ul>
              <li><strong>Mostrar Redes Sociales:</strong> Activa/desactiva la visualización de tus enlaces de redes sociales en el formato.</li>
              <li><strong>URL de Facebook / X / LinkedIn:</strong> Ingresa las URLs completas de tus perfiles de redes sociales.</li>
            </ul>
          </div>
          <p><strong>Previsualización:</strong> A la derecha, verás cómo tus cambios afectan el diseño de la plantilla en tiempo real. Siempre puedes hacer clic en <strong>“Previsualizar”</strong> para una vista más detallada.</p>
        `,
      },
      {
        gifUrl: FormatosTutorialGifs.configurarMultimedia,
        title: 'Paso 5: Añadir Elementos Multimedia (Logos y Marcas de Agua)',
        description: `
          <p>Dirígete a la pestaña <strong>"Multimedia"</strong> para personalizar los elementos visuales de tu formato:</p>
          <div class="mt-3">
            <h5>Configuración de Logotipo</h5>
            <ul>
              <li><strong>Mostrar Logotipo(s):</strong> Activa/desactiva la visibilidad del logotipo en el formato.</li>
              <li><strong>Tipo:</strong> Selecciona si tu logotipo será una <strong>"Imagen"</strong> o un <strong>"Texto"</strong>.</li>
              <li><strong>Área de Carga:</strong> Si seleccionas "Imagen", arrastra y suelta tu archivo de imagen o haz clic para seleccionarlo. (Sugerencia: Max 100kb, proporción 1:1).</li>
            </ul>
          </div>
          <div class="mt-3">
            <h5>Configuración de Marca de Agua</h5>
            <ul>
              <li><strong>Mostrar Marca de Agua:</strong> Activa/desactiva la visibilidad de una marca de agua en el formato.</li>
              <li><strong>Tipo:</strong> Selecciona si tu marca de agua será una <strong>"Imagen"</strong> o un <strong>"Texto"</strong>.</li>
              <li><strong>Área de Carga:</strong> Si seleccionas "Imagen", arrastra y suelta tu archivo de imagen o haz clic para seleccionarlo. (Sugerencia: Max 100kb, proporción 1:1).</li>
            </ul>
          </div>
          <p><strong>Previsualización:</strong> Observa los cambios en el panel derecho a medida que añades o modificas tus elementos multimedia.</p>
        `,
      },
      {
        gifUrl: FormatosTutorialGifs.configurarAvanzado,
        title: 'Paso 6: Ajustes Avanzados del Formato',
        description: `
          <p>Explora la pestaña <strong>"Avanzado"</strong> para afinar el diseño y la presentación de tu formato:</p>
          <div class="mt-3">
            <h5>Diseño y Estilo</h5>
            <ul>
              <li><strong>Ajustar Alineación:</strong> Controla la alineación de elementos clave como el logo y el folio en tu formato.</li>
              <li><strong>Ajustar Colores:</strong> Personaliza la paleta de colores principal, secundaria y terciaria de la plantilla utilizando los selectores.</li>
              <li><strong>Ajustar Opacidad:</strong> Regula la transparencia de ciertos elementos del diseño.</li>
            </ul>
          </div>
          <div class="mt-3">
            <h5>Visibilidad de Conceptos</h5>
            <ul>
              <li><strong>Mostrar Imagen de Producto:</strong> Activa/desactiva si las imágenes de tus productos aparecerán en el formato.</li>
              <li><strong>Mostrar Imagen de Servicio:</strong> Activa/desactiva si las imágenes de tus servicios aparecerán en el formato.</li>
              <li><strong>Agrupar por Tipo:</strong> Organiza los ítems de la cotización agrupándolos por "Producto" o "Servicio".</li>
            </ul>
          </div>
          <p><strong>Previsualización:</strong> Cada ajuste que realices se reflejará instantáneamente en el previsualizador, permitiéndote ver el resultado final.</p>
        `,
      },
      {
        gifUrl: FormatosTutorialGifs.guardarFormato,
        title: 'Paso 7: Guardar el Formato Personalizado',
        description: `
          <p>Una vez que hayas configurado todos los aspectos de tu formato:</p>
          <ol class="mt-2">
            <li>Revisa cuidadosamente todos los ajustes para asegurar que el formato cumpla con tus expectativas.</li>
            <li>Haz clic en el botón verde <strong>“Guardar”</strong>, ubicado en la parte superior derecha del área de previsualización.</li>
            <li>¡Listo! Tu nuevo formato personalizado ha sido guardado y ya está disponible para ser utilizado en tus Quotes y otros documentos.</li>
          </ol>
        `,
      },
    ],
  },
];
