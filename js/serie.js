const stampaSerie = async () => {
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

stampaSerie();