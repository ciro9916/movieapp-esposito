/*const stampaSerie = async () => {
    const series = await fetchFromTMDB('/tv/popular');
    const serieDiv = document.getElementById("serie");

    for (let i = 0; i < series.length; i++) {
        const divEsterno = document.createElement("div");
        const divSerie = document.createElement("div");

        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + series[i].poster_path;
        img.style.width = "250px";
        img.style.height = "375px";
        img.style.objectFit = "cover";

        const titolo = document.createElement("p");
        titolo.innerText = "Titolo : " + series[i].name;

        const voto = document.createElement("p");
        voto.innerText = "Voto : " + series[i].vote_average + "⭐";

        const lingua = document.createElement("p");
        lingua.innerText = "Lingua : " + series[i].original_language;

        const data = document.createElement("p");
        data.innerText = "Prima puntata : " + series[i].first_air_date;

        divSerie.appendChild(titolo);
        divSerie.appendChild(voto);
        divSerie.appendChild(lingua);
        divSerie.appendChild(data);
        divSerie.classList.add("schedaINT");
        divSerie.style.display = "none";

        divEsterno.appendChild(img);
        divEsterno.appendChild(divSerie);
        divEsterno.classList.add("film");
        divEsterno.style.minWidth = "250px";

        divEsterno.addEventListener("click", () => {
            if (divSerie.style.display === "none") {
                divSerie.style.display = "flex";
                divEsterno.style.minWidth = "550px";
                divEsterno.classList.add("aperta");
            } else {
                divSerie.style.display = "none";
                divEsterno.style.minWidth = "250px";
                divEsterno.classList.remove("aperta");
            }
        });

        serieDiv.appendChild(divEsterno);
    }
};
*/



const stampaSerieTv = async () => {
    const data = await fetchFromTMDB('/tv/popular');
    if (!data) return;

    const serie = data; 
    const serieDiv = document.getElementById("serie"); 

    for (let i = 0; i < serie.length; i++) {
        const divEsterno = document.createElement("div");
        divEsterno.classList.add("film");

        const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + serie[i].poster_path;

        const divFilm = document.createElement("div");
        divFilm.classList.add("schedaINT");

        const titolo = document.createElement("p");
        // Corretto: per le serie TV si usa .name
        titolo.innerText = serie[i].name; 
        titolo.classList.add("film-titolo");

        const voto = document.createElement("p");
        voto.innerText = "⭐ " + serie[i].vote_average.toFixed(1);
        voto.classList.add("film-voto");

        const lingua = document.createElement("p");
        lingua.innerText = "🌐 " + serie[i].original_language.toUpperCase();
        lingua.classList.add("film-lingua");

        const dataUscita = document.createElement("p");
        // Corretto: per le serie TV si usa .first_air_date
        dataUscita.innerText = "📅 " + serie[i].first_air_date; 
        dataUscita.classList.add("film-data");

        const overview = document.createElement("p");
        overview.innerText = serie[i].overview;
        overview.classList.add("film-overview");
        const righe = serie[i].overview.length < 30 ? 3 : 6;
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

        serieDiv.appendChild(divEsterno); 
    }
};

stampaSerieTv();

