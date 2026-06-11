const stampaSerieTvPopolare = async () => {
    const endpoint = '/tv/popular';
    // chiamata alla funzione per fare chiamate api, funzione inserita nel file api.js
    const data = await fetchFromTMDB(endpoint);
    // se non ci sono dati non restituire niente
    if (!data) return;

    const serie = data; 
    // prende il div serie dall'html
    const serieDiv = document.getElementById("serie"); 

    // cicla tutte le serie
    for (let i = 0; i < serie.length; i++) {
        // crea un div esterno in cui metteremo tutto
        const divEsterno = document.createElement("div");
        divEsterno.classList.add("film");

        const img = document.createElement("img");
        img.src = BASE_URL_IMG + serie[i].poster_path;

        // crea ora il div per la card
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
        dataUscita.innerText = "📅 " + serie[i].first_air_date; 
        dataUscita.classList.add("film-data");

        // crea un bottone per portarmi alla pagina dei dettagli
        const btnDettagli = document.createElement("button");
        btnDettagli.innerText = "Dettagli";
        btnDettagli.classList.add("btn-dettagli");
        btnDettagli.addEventListener("click", (e) => {
            e.stopPropagation(); 
            window.location.href = `dettagli.html?id=${serie[i].id}&endpoint=${encodeURIComponent(endpoint)}`;
        });

        const overview = document.createElement("p");
        overview.innerText = serie[i].overview;
        overview.classList.add("film-overview");
        const righe = serie[i].overview.length < 30 ? 3 : 6;
        overview.style.webkitLineClamp = righe;

        // nel div della card mette tutto
        divFilm.appendChild(titolo);
        divFilm.appendChild(voto);
        divFilm.appendChild(lingua);
        divFilm.appendChild(dataUscita);
        
        divFilm.appendChild(btnDettagli);
        divFilm.appendChild(overview);
       
        divEsterno.appendChild(img);
        divEsterno.appendChild(divFilm);
        // qui se sono sull'immagine con il mouse mi mostra la scheda
        divEsterno.addEventListener("mouseenter", () => {
            divFilm.style.display = "flex";
        });
        // qui invece se ci esco torna normale
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
       
        serieDiv.appendChild(divEsterno); 
    }
};

stampaSerieTvPopolare();