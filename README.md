# CRUD Películas

**CRUD Películas** es una aplicación web que permite a los usuarios añadir, editar, eliminar y buscar películas. Utilizando HTML, CSS y JavaScript, esta aplicación proporciona una interfaz intuitiva para gestionar una lista de películas y visualizar los cambios en tiempo real en la pantalla.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Archivo `db.json`](#archivo-dbjson)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción

CRUD Películas es una aplicación para gestionar una colección de películas. Permite a los usuarios:

- **Añadir nuevas películas** con un título, género, actores principales y puntuación.
- **Editar películas existentes** para actualizar la información.
- **Eliminar películas** de la lista.
- **Buscar películas** por título, género, actores o puntuación.
- Ver todos los cambios en tiempo real en la interfaz de usuario.

La aplicación está construida utilizando tecnologías web estándar: HTML, CSS y JavaScript.

## Características

- Interfaz de usuario sencilla y amigable.
- Formularios para añadir y editar películas.
- Funcionalidad de eliminación con confirmación.
- Búsqueda de películas por título, género, actores o puntuación.
- Actualización dinámica de la lista de películas sin recargar la página.

## Tecnologías Utilizadas

- **HTML**: Estructura básica de la página y formularios.
- **CSS**: Estilo y diseño de la interfaz de usuario.
- **JavaScript**: Funcionalidad para añadir, editar, eliminar, buscar y mostrar películas en la pantalla.
- **json-server**: Simulación de un servidor para manejar las operaciones CRUD con `db.json`.

## Instalación

Para ejecutar el proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/crud-peliculas.git

2. **Navega a la carpeta del proyecto**:
   ```bash
   cd crud-peliculas

3. **Instala las dependencias**:
    ```bash
    npm install

4. **Inicia el servidor de simulación de base de datos**:
    ```bash
    npm run api

5. **Abre el archivo index.html en tu navegador**:
    ```bash
    index.html



## Uso

    1. **Añadir película**:
    Rellena el formulario de añadir película con el título, año, género, actores y puntuación de la película.
    Haz clic en el botón "Añadir Película" para agregarla a la lista.

    2. **Editar película**:
    - Haz clic en el botón "Editar" en la película que deseas modificar, arriba de la página aparecera el formulario para modificar.
    - Actualiza los campos y guarda los cambios.

    3. **Eliminar película**:
    - Haz clic en el botón "Eliminar" junto a la película que deseas eliminar.
    - Confirma la eliminación en el cuadro de diálogo.

    4. **Buscar película**:
    - Utiliza el formulario de búsqueda para filtrar películas por título, género, actores o puntuación.
    - La lista de películas se actualizará automáticamente para mostrar los resultados de la búsqueda.

    5. **Visualización de las películas**:
    - La lista de películas se actualizará automáticamente para reflejar los cambios realizados.

## Estructura del Proyecto
Aquí se muestra la estructura del proyecto:

![Estructura del Proyecto](https://raw.githubusercontent.com/juanvprada/PracticandoCRUD/main/assets/images/Estructura.JPG)


    




