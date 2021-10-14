const dropdown = document.querySelector('select');
const info = document.querySelector('#display-info');

fetch(`https://ghibliapi.herokuapp.com/films/`)
.then((response) => response.json())
.then((movieData) => {
    movieData.forEach(movie => {
        const option = document.createElement('option');
        option.setAttribute('value', movie.title);
        option.textContent = movie.title;
        dropdown.append(option);
    });

    dropdown.addEventListener('change', (event) => {
        movieData.forEach((movie) => {

            if (event.target.value === movie.title) {
                info.textContent = '';
                const h3 = document.createElement('h3');
                info.prepend(h3);
                h3.textContent = movie.title;

                const p1 = document.createElement('p');
                info.append(p1);
                p1.textContent = movie.release_date;

                const p2 = document.createElement('p');
                info.append(p2);
                p2.textContent = movie.description;
            }
        })
    })


})