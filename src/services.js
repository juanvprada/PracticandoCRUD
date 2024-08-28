// --------------UTILIDADES GENERALES--------------- //
const apiUrl = "http://localhost:3000/peliculas";


// --------------CREATE--------------- //

// Función para crear película
async function createFilm(event) {
    event.preventDefault();

    const newFilm = {
        title: document.getElementById('titleField').value,
        genre: document.getElementById('genreField').value,
        main_figures: document.getElementById('actorsField').value,
        film_rating: parseInt(document.getElementById('ratingField').value),
        trailer: document.getElementById('trailerField').value
    };

    const response = await fetch(apiUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFilm)
    });

    if (response.ok) {
        alert("La película se ha añadido correctamente a tu lista");
        document.getElementById('formFilm').reset();
        loadFilms();
    }
}
document.getElementById('formFilm').addEventListener('submit', createFilm);


// --------------READ--------------- //

// Función para conseguir todas las películas del db.json
async function getFilms() {
    const response = await fetch(apiUrl, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
}

// Función para crear el HTML de una película
function createFilmHtml(film) {
    return `
        <article class="filmItem" data-id="${film.id}">
            <p class="titleField"><strong class="campo">Título:</strong> <span class="filmField">${film.title}</span></p>
            <p class="genreField"><strong class="campo">Género:</strong> <span class="filmField">${film.genre}</span></p>
            <p class="main_figuresField"><strong class="campo">Actores:</strong> <span class="filmField">${film.main_figures}</span></p>
            <p class="film_ratingField"><strong class="campo">Puntuación:</strong> <span class="filmField">${film.film_rating}</span></p>
            <div class="buttons">
                <button class="edit">Editar</button>
                <button class="delete">Borrar</button>
            </div>
            <a class="trailers" href="${film.trailer}" target="_blank">Ver trailer</a>
        </article>
    `;
}

// Función para pintar en pantalla todas las películas del db.json
async function printFilms() {
    const films = await getFilms();
    document.getElementById('content').innerHTML = films.map(createFilmHtml).join('');


    films.forEach(film => {
        const filmElement = document.getElementById('content').querySelector(`.filmItem[data-id='${film.id}']`);

        // Aquí añadimos la clase tienesQueVerla a las películas que tengan valoración 10
        if (film.film_rating === 10) {
            filmElement.classList.add('tienesQueVerla');
        }

        addEventListeners(filmElement, film); //Llamamos a la función que agrega eventListeners a cada película
    });
}

// Función para cargar todas las películas
async function loadFilms() {
    const allfilms = await getFilms();
    printFilms(allfilms);
}


// --------------UPDATE--------------- //

// Función para rellenar el formulario de edicióon cuando se pulsa el botón editar
function populateEditForm(film) {
    document.getElementById('editFilmId').value = film.id;
    document.getElementById('editTitleField').value = film.title;
    document.getElementById('editGenreField').value = film.genre;
    document.getElementById('editActorsField').value = film.main_figures;
    document.getElementById('editRatingField').value = film.film_rating;
    document.getElementById('editTrailerField').value = film.trailer;
    document.getElementById('editFilmForm').style.display = 'block';
}

// Función para actualizar la película modificada
async function updateFilm(event) {
    event.preventDefault();
    const id = document.getElementById('editFilmId').value;

    const updatedFilm = {
        title: document.getElementById('editTitleField').value,
        genre: document.getElementById('editGenreField').value,
        main_figures: document.getElementById('editActorsField').value,
        film_rating: parseInt(document.getElementById('editRatingField').value),
        trailer: document.getElementById('editTrailerField').value
    };

    await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedFilm)
    });

    document.getElementById('editFilmForm').style.display = 'none';
    loadFilms(); // Recargar la lista de películas después de la actualización
}
document.getElementById('editFilmForm').addEventListener('submit', updateFilm);
document.querySelector('.noActualizar').addEventListener('click', closeEditForm);


// --------------DELETE--------------- //
async function deleteFilm(id) {
    const confirmDeletion = confirm("¿Realmente deseas eliminar esta película?");

    if (confirmDeletion) {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            alert("La película se ha eliminado de tu lista");
            loadFilms(); // Recargar la lista de películas después de eliminar una
        } else {
            alert("Hubo un problema al eliminar la película. Inténtalo de nuevo.");
        }
    }
}

// Función para que se oculte el formulario de editar
function closeEditForm() {
    editFilmForm.style.display = 'none';
}

// --------------EVENT LISTENERS--------------- //
function addEventListeners(htmlFilm, film) {
    htmlFilm.querySelector('.edit').addEventListener('click', () => populateEditForm(film));
    htmlFilm.querySelector('.delete').addEventListener('click', () => deleteFilm(film.id));
}

// --------------CARGADOR DE PELÍCULAS--------------- //
loadFilms();




// Función para BUSCAR películas
async function searchFilms(event) {
    event.preventDefault();

    const searchTerm = document.getElementById('searchField').value.toLowerCase();
    const films = await getFilms();

    // Filtramos las películas cuyo título,género,actores o puntuación coincidan con el término de búsqueda
    const filteredFilms = films.filter(film =>
        film.title.toLowerCase().includes(searchTerm) ||
        film.genre.toLowerCase().includes(searchTerm) ||
        film.main_figures.toLowerCase().includes(searchTerm) ||
        film.film_rating.toString().includes(searchTerm)
    );

    // Mostrar solo las películas filtradas
    document.getElementById('content').innerHTML = filteredFilms.map(createFilmHtml).join('');

    // Añadir event listeners a las películas filtradas
    filteredFilms.forEach(film => {
        const filmElement = document.getElementById('content').querySelector(`.filmItem[data-id='${film.id}']`);
        addEventListeners(filmElement, film);  //Aquí llamamos a la función addEventListener para poder editar o eliminar en las películas encontradas
    });
}

document.getElementById('searchForm').addEventListener('submit', searchFilms);