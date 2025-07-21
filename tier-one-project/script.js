const BASE_URL = 'https://www.omdbapi.com/';
const API_KEY = '32aeaeeb';

let watchlist = [];
let current_movies = [];

document.addEventListener("DOMContentLoaded", ()=>{
    const searchInput = document.getElementById('movieInput');
    const searchBtn = document.getElementById('movieSearchBtn');
    const movieGrid = document.getElementById('movieGrid');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            getMovies(searchInput.value);
        });
        searchInput.addEventListener('keypress', (e) => {
            if(e.key==='Enter'){
                getMovies(searchInput.value);
            }
            
        });
    }

    if (movieGrid){
        displayMovies([]);
    }
    
    if (document.getElementById('listGrid')) {
        displayMovieWatchlist();
    }

    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', submitContact);
    }
});

// Get detailed movies from API
async function getMovies(query, page=1) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                s: query,
                page: page,
                type: 'movie' 
            }
        });

        if (response.data.Response === 'True') {
            current_movies = response.data.Search
            displayMovies(response.data.Search);
        }
    } catch (err) {
        console.error('Error fetching movie details:', err);
    }
}

function addMovie(imdbID){
    const movie = current_movies.find(m => m.imdbID === imdbID);
    watchlist = JSON.parse(localStorage.getItem('movieWatchList') || '[]');
    watchlist.push(movie)
    localStorage.setItem('movieWatchList', JSON.stringify(watchlist))
    displayMovieWatchlist()
}

function deleteMovie(imdbID){
    const movie = current_movies.find(m => m.imdbID === imdbID);
    watchlist = JSON.parse(localStorage.getItem('movieWatchList') || '[]');
    watchlist.splice(movie, 1)
    localStorage.setItem('movieWatchList', JSON.stringify(watchlist))
    displayMovieWatchlist()
}



// Display movies in grid
function displayMovies(movies) {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = movies.map(movie => `
        <div class="movie-card" id="movie-${movie.imdbID}">
            <img 
                src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x400?text=No+Poster'}" 
                alt="${movie.Title}"
                class="movie-poster"
            />
            <div class="movie-info">
                <div class="movie-title">${movie.Title}</div>
                <div class="movie-year">${movie.Year}</div>
                <div class="movie-type">${movie.Type}</div>
                <div class="movie-add"><button id="addMovieBtn" type="button" onclick="addMovie('${movie.imdbID}')"><span>&#43;</span></button></div>
            </div>
        </div>
    `).join('');
}

// display in watchlist
function displayMovieWatchlist() {
    let list_movies = JSON.parse(localStorage.getItem('movieWatchList') || '[]');
    console.log(list_movies)
    const listGrid = document.getElementById('listGrid');
    if (!listGrid) return;
    listGrid.innerHTML = list_movies.map(movie => `
        <div class="list-card" id="movie-${movie.imdbID}">
            <img 
                src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x400?text=No+Poster'}" 
                alt="${movie.Title}"
                class="list-poster"
            />
            <div class="list-info">
                <div class="list-title">${movie.Title}</div>
                <div class="list-year">${movie.Year}</div>
                <div class="list-type">${movie.Type}</div>
                <div class="list-remove"><button type="button" onclick="deleteMovie('${movie.imdbID}')"><span>&minus;</span></button></div>
            </div>
        </div>
    `).join('');
}

function submitContact() {
    let nameInput = document.getElementById("nameInput")
    let yearInput = document.getElementById("yearInput")
    const name = nameInput.value.trim()
    const year = yearInput.value.trim()
    localStorage.setItem('movieName', name);
    localStorage.setItem('movieYear', year);
}


