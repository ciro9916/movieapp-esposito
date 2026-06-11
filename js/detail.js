// prende i parametri dall'url della pagina
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const endpoint = decodeURIComponent(params.get("endpoint"));

const caricaDettagli = async () => {
    // chiamata alla funzione per fare chiamate api, funzione inserita nel file api.js
    const data = await fetchFromTMDB(`/${endpoint}`);
    // se non ci sono dati non restituire niente
    if (!data) return;

    const ele = data;
    // cicla tutti gli elementi finché non trova quello con l'id corrispondente
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].id == parseInt(id)) {
            const item = ele[i];
            // prende il div elemento dall'html e aggiunge la classe per il backdrop
            const elemento = document.getElementById("elemento");
            elemento.classList.add("elemento-backdrop");

            // crea il poster del film/serie
            const poster = document.createElement("img");
            poster.src = `https://image.tmdb.org/t/p/w300${item.poster_path}`;
            poster.classList.add("det-poster");

            // crea la colonna destra con tutte le info
            const info = document.createElement("div");
            info.classList.add("det-info");

            // crea il titolo, funziona sia per film (.title) che per serie (.name)
            const titolo = document.createElement("h1");
            titolo.innerText = item.title || item.name;
            titolo.classList.add("det-titolo");

            // crea la descrizione
            const overview = document.createElement("p");
            overview.innerText = item.overview;
            overview.classList.add("det-overview");

            // crea la griglia per i metadati (voto, anno, stagioni, durata, lingua)
            const meta = document.createElement("div");
            meta.classList.add("det-meta-grid");

            // prende solo l'anno dalla data, le stagioni solo se è una serie, la durata solo se è un film
            const anno = (item.release_date || item.first_air_date || "").split("-")[0];
            const stagioni = item.number_of_seasons ? `${item.number_of_seasons} stagioni` : "";
            const durata = item.runtime ? `${item.runtime} min` : "";
            const voto = item.vote_average.toFixed(1);

            // inserisce le righe dei metadati, stagioni e durata appaiono solo se presenti
            meta.innerHTML = `
                <div class="det-meta-row"><span class="det-label">Voto</span><span>⭐ ${voto}</span></div>
                <div class="det-meta-row"><span class="det-label">Anno</span><span>${anno}</span></div>
                ${stagioni ? `<div class="det-meta-row"><span class="det-label">Stagioni</span><span>${stagioni}</span></div>` : ""}
                ${durata ? `<div class="det-meta-row"><span class="det-label">Durata</span><span>${durata}</span></div>` : ""}
                <div class="det-meta-row"><span class="det-label">Lingua</span><span>${item.original_language.toUpperCase()}</span></div>
            `;

            info.appendChild(titolo);
            info.appendChild(overview);
            // crea un bottone per tornare alla pagina precedente
            const btnBack = document.createElement("button");
            btnBack.innerText = "← Torna indietro";
            btnBack.classList.add("btn-dettagli");
            btnBack.style.width = "200px";
            btnBack.addEventListener("click", () => history.back());
            
            info.appendChild(btnBack);
            info.appendChild(meta);

            // aggiunge poster e info al div principale
            elemento.appendChild(poster);
            elemento.appendChild(info);
        }
    }
};

caricaDettagli();