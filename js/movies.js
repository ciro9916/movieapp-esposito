const stampaFilmPopolare = async () => {
    const endpoint = '/movie/popular';
    const data = await fetchFromTMDB(endpoint);
    if (!data) return;

    const movies = data;
    const filmDiv = document.getElementById("film");

    for (let i = 0; i < movies.length; i++) {
        const divEsterno = document.createElement("div");
        divEsterno.classList.add("film");

        const img = document.createElement("img");
        img.src = BASE_URL_IMG + movies[i].poster_path;

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
        
        const btnDettagli = document.createElement("button");
        btnDettagli.innerText = "Dettagli";
        btnDettagli.classList.add("btn-dettagli");
        btnDettagli.addEventListener("click", (e) => {
            e.stopPropagation(); 
            window.location.href = `dettagli.html?id=${movies[i].id}&endpoint=${encodeURIComponent(endpoint)}`;
        });

        const overview = document.createElement("p");
        overview.innerText = movies[i].overview;
        overview.classList.add("film-overview");
        const righe = movies[i].overview.length < 30 ? 3 : 6;
        overview.style.webkitLineClamp = righe;


        divFilm.appendChild(titolo);
        divFilm.appendChild(voto);
        divFilm.appendChild(lingua);
        divFilm.appendChild(dataUscita);
        divFilm.appendChild(btnDettagli);
        divFilm.appendChild(overview);

        divEsterno.appendChild(img);
        divEsterno.appendChild(divFilm);

        divEsterno.addEventListener("mouseenter", () => {
            divFilm.style.display = "flex";
        });

        divEsterno.addEventListener("mouseleave", () => {
            divFilm.style.display = "none";
        });

        // solo mobile
        divEsterno.addEventListener("touchstart", (e) => {
            e.preventDefault();
            if (divFilm.style.display === "flex") {
                divFilm.style.display = "none";
            } else {
                document.querySelectorAll(".schedaINT").forEach(s => s.style.display = "none");
                divFilm.style.display = "flex";
            }
        });

        filmDiv.appendChild(divEsterno);
    }
};


stampaFilmPopolare();