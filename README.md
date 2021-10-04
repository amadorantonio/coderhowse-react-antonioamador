# Tony's Bikes

Tony's Bikes es una tienda en línea de bicicletas de diferentes tamaños y varias gamas.

Cuenta con:
    - Lista completa de productos en el Home de la aplicación
    - Lista de productos por categoría (Adultos, Urbanas, Infantiles)
    - Detalle del producto
    - Selección de cantidad a comprar de cada producto, las reglas de cantidad, se basan en el stock disponible
        - No se puede seleccionar un mayor número del stock disponible
        - No se puede seleccionar un número menor a uno
        - El botón de comprar se deshabilita si no hay stock
    - Icono de carrito de compras con cantidad de productos agregados (no funcional por el momento)

# Instalación

    1. Descarga o clona el respositorio
    2. En la raíz del proyecto, teclea el comando "npm install" desde terminal
    3. Ejecuta el proyecto con el comando "npm start"

# Dependencias

    - bootstrap: cómo framework de estilos
    - bootstrap-icons: cómo paquete de íconos
    - react-bootstrap: cómo framework de maquetado
    - react-router-dom: cómo gestor de la navegación

# Aplicación en funcionamiento

    - Gif: 

# Resumen y Notas

    - Se decidió usar bootstrap cómo framework de estilos, maquetado e íconos, ya que se tuvo problemas con material UI, en éspecífico con los estilos, ya que no cargaban de manera adecuada. Además que se tiene mayor experiencia con bootstrap.
    - La tienda de bicicletas es un proyecto real, pero el core es el agendamiento de citas para mantenimiento
    - Se decidió realizar "pages" cómo contenedores principales de los componentes, las rutas sólo mandan a pages, no a componentes
    - La estructura del árbol de componentes esta basada en desafíos anteriores
    - La aplicación consume dos archivos json, uno para mostrar los menús dinámicamente y otro que contiene los productos

# Autor
    - Juan Antonio Amador Barajas
    - 2021, Curso de React en CODERHOUSE
    - Guanajuato, México