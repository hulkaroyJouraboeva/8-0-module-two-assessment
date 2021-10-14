const dropdown = document.querySelector('select');

fetch(`https://ghibliapi.herokuapp.com/films/`)
.then((response) => response.json())
.then((movieData) => {
    movieData.forEach(movie => {
        const option = document.createElement('option');
        option.setAttribute('value', movie.title);
        option.textContent = movie.title;
        dropdown.append(option);
        console.log(dropdown);
    });
})