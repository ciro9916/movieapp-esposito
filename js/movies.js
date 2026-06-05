const stampaFilm = async () => {
    const movies = await fetchFromTMDB('/movie/popular');
    const filmDiv = document.getElementById("film");

    for (let i = 0; i < movies.length; i++) {
        const divEsterno = document.createElement("div");
        const divFilm = document.createElement("div");

        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + movies[i].poster_path;
        img.style.width = "250px";
        img.style.height = "375px";
        img.style.objectFit = "cover";

        const titolo = document.createElement("p");
        titolo.innerText = "Titolo : " + movies[i].title;

        const voto = document.createElement("p");
        voto.innerText = "Voto : " + movies[i].vote_average + "⭐";

        const lingua = document.createElement("p");
        lingua.innerText = "Lingua : " + movies[i].original_language;

        const data = document.createElement("p");
        data.innerText = "Data di rilascio : " + movies[i].release_date;

        divFilm.appendChild(titolo);
        divFilm.appendChild(voto);
        divFilm.appendChild(lingua);
        divFilm.appendChild(data);
        divFilm.classList.add("schedaINT");
        divFilm.style.display = "none";

        divEsterno.appendChild(img);
        divEsterno.appendChild(divFilm);
        divEsterno.classList.add("film");
        divEsterno.style.minWidth = "250px";

        divEsterno.addEventListener("click", () => {
            if (divFilm.style.display === "none") {
                divFilm.style.display = "flex";
                divEsterno.style.minWidth = "550px";
                divEsterno.classList.add("aperta");
            } else {
                divFilm.style.display = "none";
                divEsterno.style.minWidth = "250px";
                divEsterno.classList.remove("aperta");
            }
        });

        filmDiv.appendChild(divEsterno);
    }
};

stampaFilm();