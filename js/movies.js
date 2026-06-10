const stampaFilmPopolare = async () => {
    const data = await fetchFromTMDB('/movie/popular');
    if (!data) return;

    const movies = data;
    const filmDiv = document.getElementById("film");

    for (let i = 0; i < movies.length; i++) {
        const divEsterno = document.createElement("div");
        divEsterno.classList.add("film");

        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + movies[i].poster_path;

        const divFilm = document.createElement("div");
        divFilm.classList.add("schedaINT");

        const titolo = document.createElement("p");
        titolo.innerText = movies[i].title;
        titolo.classList.add("film-titolo");

        const voto = document.createElement("p");
        voto.innerText = "⭐ " + movies[i].vote_average.toFixed(1);
        voto.classList.add("film-voto");

        const lingua = document.createElement("p");
        lingua.innerText = "🌐 " + movies[i].original_language.toUpperCase();
        lingua.classList.add("film-lingua");

        const dataUscita = document.createElement("p");
        dataUscita.innerText = "📅 " + movies[i].release_date;
        dataUscita.classList.add("film-data");

        const overview = document.createElement("p");
        overview.innerText = movies[i].overview;
        overview.classList.add("film-overview");
        const righe = movies[i].overview.length < 30 ? 3 : 6;
        overview.style.webkitLineClamp = righe;


        divFilm.appendChild(titolo);
        divFilm.appendChild(voto);
        divFilm.appendChild(lingua);
        divFilm.appendChild(dataUscita);
        divFilm.appendChild(overview);

        divEsterno.appendChild(img);
        divEsterno.appendChild(divFilm);

        divEsterno.addEventListener("mouseenter", () => {
            divFilm.style.display = "flex";
        });

        divEsterno.addEventListener("mouseleave", () => {
            divFilm.style.display = "none";
        });

        filmDiv.appendChild(divEsterno);
    }
};


stampaFilmPopolare();