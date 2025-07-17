import { ITutorialTab } from './../core/interfaces/stepItem';
// 1. Corregimos la ruta de la interfaz. Debería estar en un archivo general de tutoriales.

const ProductTutorialGifs = {
  // Generales
  productoServicio: 'assets/gifs/GIF-Carga-Producto.gif',
  nombreProducto: 'assets/gifs/datos-contacto.webp',
  claveProducto: 'assets/gifs/datos-contacto.webp',
  asignarProveedor: 'assets/gifs/datos-contacto.webp',
  descripcion: 'assets/gifs/datos-contacto.webp',
  categoria: 'assets/gifs/gifs/datos-contacto.webp',
  // Multimedia
  subirImagen: 'assets/gifs/datos-contacto.webp',
  subirFicha: 'assets/gifs/datos-contacto.webp',
  // Precio
  precioCompra: 'assets/gifs/datos-contacto.webp',
  precioVenta: 'assets/gifs/datos-contacto.webp',
  // Atributos
  rellenarObligatorios: 'assets/gifs/datos-contacto.webp',
  botonAgregarOpcional: 'assets/gifs/products/boton_agregar_opcional.gif',
  seleccionarOpcional: 'assets/gifs/products/seleccionar_opcional.gif',
  asignarValorFinal: 'assets/gifs/products/asignar_valor_final.gif',
  // Relacionados
  buscarRelacionado: 'assets/gifs/datos-contacto.webp',
  configurarRelacion: 'assets/gifs/products/configurar_relacion.gif',
  agregarOpcionales: 'assets/gifs/products/agregar_opcionales.gif',
  // Carga Masiva prayser-landing-test/src/assets/gifs/cargaMasiva/descargar_plantilla.gif
  descargarPlantilla: 'assets/gifs/cargaMasiva/descargar_plantilla.gif',
};

export const ProductsSteps: ITutorialTab[] = [
  {
    id: 'carga-manual-productos',
    title: 'Carga Manual',
    icon: 'bx bx-package', // Icono para carga manual
    steps: [
      {
        gifUrl: ProductTutorialGifs.productoServicio,
        title: 'Paso 1: Acceder al Módulo de Carga Manual',
        description: `
          <p>Para empezar a agregar un producto uno por uno:</p>
          <ol class="mt-2">
            <li>Dirígete al módulo <strong>"Productos"</strong> en el menú principal de tu sistema.</li>
            <li>Haz clic en <strong>“Agregar nuevo producto”</strong>. Esto abrirá el formulario para que ingreses los datos.</li>
          </ol>
        `,
      },
      {
        gifUrl: ProductTutorialGifs.productoServicio, // Un gif que muestre un resumen del llenado
        title: 'Paso 2: Completar las Secciones Obligatorias',
        description: `
          <p>Llena cuidadosamente cada una de las siguientes secciones con la información de tu producto. Algunas de ellas son obligatorias para poder guardar el producto:</p>
          <div class="mt-3">
            <h5>1. Información General</h5>
            <ul>
              <li><strong>Tipo:</strong> Indica si es un <strong>"Producto"</strong> o <strong>"Servicio"</strong> 
              <li><strong>Nombre:</strong> El nombre principal del producto.</li>
              <li><strong>Código:</strong> Un identificador único para tu control.</li>             
              <li><strong>Código SAT:</strong> Opcional, para temas fiscales (8 caracteres numéricos).</li>
              <li><strong>Proveedor Asociado:</strong> Selecciona a tu proveedor </li>
              <li><strong>Descripción:</strong> Detalles y características del producto.</li>
              <li><strong>Categorías y Subcategorías:</strong> Organiza tu producto con etiquetas personalizadas.</li>
            </ul>
          </div>
          <div class="mt-3">
            <h5>2. Imágenes y Ficha técnica</h5>
            <ul>
              <li><strong>Imágenes:</strong> Sube fotos de tu producto (hasta 15 imágenes, proporción 1:1 recomendada).</li>
              <li><strong>Fichas Técnicas:</strong> Adjunta documentos o imágenes con especificaciones (hasta 5 fichas).</li>
            </ul>
          </div>
          <div class="mt-3">
            <h5>3. Precios</h5>
            <ul>
              <li><strong>Precio de Venta:</strong> El precio al que ofrecerás tu producto a los clientes.</li>
              <li><strong>Costo:</strong> El precio al que adquieres el producto (solo para tu control interno y obligatorio para el precio por defecto).</li>
            </ul>
          </div>
          <div class="mt-3">
            <h5>4. Atributos Dinámicos</h5>
            <ul>
              <li><strong>Atributos Dinámicos:</strong> Añade características especiales como color, tamaño, material, etc. (previamente configurados en el sistema).</li>
            </ul>
          </div>       
          <div class="mt-3">
            <h5>5. Productos Relacionados</h5>
            <ul>
              <li><strong>Asociar Productos:</strong> Vincula este producto con otros de tu catálogo para crear paquetes o sugerir accesorios.</li>
            </ul>
          </div>
        `,
      },
      {
        gifUrl: ProductTutorialGifs.productoServicio,
        title: 'Paso 3: Revisar y Guardar',
        description: `
          <p>Antes de finalizar, asegúrate de que todo esté correcto:</p>
          <ol class="mt-2">
            <li>Verifica que toda la información ingresada sea precisa.</li>
            <li>Presiona <strong>“Guardar”</strong> para registrar el producto en tu catálogo. ¡Listo, tu producto ya está disponible!</li>
          </ol>
        `,
      },
    ],
  },
  {
    id: 'carga-masiva-productos',
    title: 'Carga Masiva',
    icon: 'bx bx-upload', // Icono para carga masiva
    steps: [
      {
        gifUrl: ProductTutorialGifs.descargarPlantilla,
        title: 'Paso 1: Descargar Plantilla',
        description: `
          <p>Esta opción es ideal si necesitas subir muchos productos a la vez.</p>
          <ol class="mt-2">
            <li>Ve a la sección de <strong>"Carga Masiva"</strong> en tu sistema.</li>
            <li>Haz clic en <strong>“Descargar plantilla Excel/CSV”</strong>. ¡Es fundamental que siempre uses la plantilla más reciente para evitar problemas!</li>
          </ol>
        `,
      },
      {
        gifUrl: ProductTutorialGifs.productoServicio,
        title: 'Paso 2: Llenar la Plantilla',
        description: `
          <p>Abre el archivo de Excel/CSV que acabas de descargar. Verás muchas columnas, cada una con una instrucción:</p>
          <div class="mt-3">
            <h5>Campos Obligatorios y Esenciales:</h5>
            <ul>
              <li><strong>Nombre:</strong> El nombre de tu producto/servicio.</li>
              <li><strong>Tipo:</strong> Escribe <strong>"Producto"</strong> o <strong>"Servicio"</strong> (¡sin errores y con la primera letra en mayúscula!).</li>
              <li><strong>Código:</strong> Un identificador único para cada producto. Si ya existe, el sistema actualizará la información.</li>
              <li><strong>Precios:</strong> Para cada lista de precios configurada, debes incluir el <strong>Costo</strong> y el <strong>Precio Final</strong>. El costo es <strong>obligatorio</strong> para el "Precio por Defecto".</li>
            </ul>
            <p><strong>¡Muy Importante!:</strong> Evita borrar o cambiar los nombres de las columnas en la plantilla. El sistema los necesita exactamente así.</p>
          </div>
          <div class="mt-3">
            <h5>Campos Importantes (si aplica):</h5
            <ul>
              <li><strong>Atributos Dinámicos:</strong> Si has configurado características especiales (ej. "Inventario", "Color"), rellena sus valores.</li>
              <li><strong>Imágenes y Fichas Técnicas:</strong> Proporciona URLs públicas (¡no de Google Drive!). <strong>Copia solo el texto de la URL, no como un enlace clicable</strong>, para evitar que el sistema no pueda leerla.</li>
            </ul>
          </div>
          <div class="mt-3">
            <h5>Campos Opcionales:</h5>
            <ul>
              <li><strong>Código SAT:</strong> Si lo tienes, inclúyelo (8 caracteres numéricos).</li>
              <li><strong>Proveedor Asociado:</strong> Si lo deseas, puedes vincularlo usando su ID (próximamente visible).</li>
              <li><strong>Categorías / Subcategorías:</strong> Texto libre para organización.</li>
              <li><strong>Códigos Relacionados:</strong> Para vincular con otros productos existentes. Puedes añadir más columnas con la cabecera "Código Relacionado".</li>
            </ul>
          </div>
        `,
      },
      {
        gifUrl: ProductTutorialGifs.productoServicio,
        title: 'Paso 3: Subir Archivo',
        description: `
          <p>Una vez que hayas llenado y guardado tu plantilla de Excel (formato .xlsx):</p>
          <ol class="mt-2">
            <li>Regresa al sistema, a la sección de <strong>"Carga Masiva"</strong>.</li>
            <li>Selecciona la opción <strong>“Subir archivo”</strong> y carga tu plantilla ya llena.</li>
          </ol>
        `,
      },
      {
        gifUrl: ProductTutorialGifs.productoServicio,
        title: 'Paso 4: Validar Datos',
        description: `
          <p>El sistema comenzará a revisar tu archivo:</p>
          <ol class="mt-2">
            <li><strong>Verificación de Columnas:</strong> Primero, se asegurará de que los nombres de las columnas sean correctos. Si hay un problema, te lo indicará de inmediato.</li>
            <li><strong>Revisión de Registros:</strong> Luego, revisará cada fila para detectar errores (ej. campos obligatorios vacíos, formatos incorrectos).</li>
            <li><strong>Listado de Errores:</strong> Si encuentra errores, te los mostrará en un listado con detalles (mensajes en rojo). Podrás corregirlos en tu plantilla y volver a subirla.</li>
          </ol>
        `,
      },
      {
        gifUrl: ProductTutorialGifs.productoServicio,
        title: 'Paso 5: Confirmar Importación',
        description: `
          <p>Una vez que el sistema no encuentre errores y todo esté listo:</p>
          <ol class="mt-2">
            <li>Haz clic en <strong>“Importar productos”</strong>.</li>
            <li>¡Listo! Tus productos serán cargados automáticamente a tu catálogo en el sistema. Podrás verlos disponibles y listos para usar.</li>
          </ol>
        `,
      },
    ],
  },
];
