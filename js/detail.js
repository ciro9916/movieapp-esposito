const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const endpoint = decodeURIComponent(params.get("endpoint"));

const caricaDettagli = async () => {
    const data = await fetchFromTMDB(`/${endpoint}`);
    if (!data) return;

    const ele = data;
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].id == parseInt(id)) {
            const item = ele[i];
            const elemento = document.getElementById("elemento");
            elemento.classList.add("elemento-backdrop");

            // Poster
            const poster = document.createElement("img");
            poster.src = `https://image.tmdb.org/t/p/w300${item.poster_path}`;
            poster.classList.add("det-poster");

            // Colonna destra
            const info = document.createElement("div");
            info.classList.add("det-info");

            const titolo = document.createElement("h1");
            titolo.innerText = item.title || item.name;
            titolo.classList.add("det-titolo");

            const overview = document.createElement("p");
            overview.innerText = item.overview;
            overview.classList.add("det-overview");

            // Riga metadati
            const meta = document.createElement("div");
            meta.classList.add("det-meta-grid");

            const anno = (item.release_date || item.first_air_date || "").split("-")[0];
            const stagioni = item.number_of_seasons ? `${item.number_of_seasons} stagioni` : "";
            const durata = item.runtime ? `${item.runtime} min` : "";
            const voto = item.vote_average.toFixed(1);

            meta.innerHTML = `
                <div class="det-meta-row"><span class="det-label">Voto</span><span>⭐ ${voto}</span></div>
                <div class="det-meta-row"><span class="det-label">Anno</span><span>${anno}</span></div>
                ${stagioni ? `<div class="det-meta-row"><span class="det-label">Stagioni</span><span>${stagioni}</span></div>` : ""}
                ${durata ? `<div class="det-meta-row"><span class="det-label">Durata</span><span>${durata}</span></div>` : ""}
                <div class="det-meta-row"><span class="det-label">Lingua</span><span>${item.original_language.toUpperCase()}</span></div>
            `;

            info.appendChild(titolo);
            info.appendChild(overview);
            const btnBack = document.createElement("button");
            btnBack.innerText = "← Torna indietro";
            btnBack.classList.add("btn-dettagli");
            btnBack.style.width = "200px";
            btnBack.addEventListener("click", () => history.back());
            
            info.appendChild(btnBack);
            info.appendChild(meta);

            elemento.appendChild(poster);
            elemento.appendChild(info);
        }
    }
};

caricaDettagli();