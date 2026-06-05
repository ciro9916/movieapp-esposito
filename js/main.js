
const stampaFilm = async () => {
    const data = await fetchFromTMDB('/trending/movie/week');
    
    if (!data) return; 
    const movies = data; 
    const filmDiv = document.getElementById("film");

   for (let i = 0; i < movies.length; i++) {
    const divEsterno = document.createElement("div");
    const divFilm = document.createElement("div");

    const img = document.createElement("img");
    img.src = "https://image.tmdb.org/t/p/w500" + movies[i].poster_path;
    img.style.width = "180px";
    img.style.height = "100%";
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
    divEsterno.style.minWidth = "180px";

    divEsterno.addEventListener("click", () => {
    if (divFilm.style.display === "none") {
        divEsterno.style.minWidth = "450px";
        divFilm.style.display = "flex";
        divEsterno.classList.add("aperta");
    } else {
        divEsterno.style.minWidth = "180px";
        divFilm.style.display = "none";
        divEsterno.classList.remove("aperta");
    }
   });

    filmDiv.appendChild(divEsterno);
}
};

const stampaSerieTv = async () => {
    const data = await fetchFromTMDB('/trending/tv/week');
    
    if (!data) return; 
    const series = data; 
    const filmDiv = document.getElementById("serie");

   for (let i = 0; i < series.length; i++) {
    const divEsterno = document.createElement("div");
    const divFilm = document.createElement("div");

    const img = document.createElement("img");
    img.src = "https://image.tmdb.org/t/p/w500" + series[i].poster_path;
    img.style.width = "180px";
    img.style.height = "100%";
    img.style.objectFit = "cover";

    const titolo = document.createElement("p");
    titolo.innerText = "Titolo : " + series[i].title;

    const voto = document.createElement("p");
    voto.innerText = "Voto : " + series[i].vote_average + "⭐";

    const lingua = document.createElement("p");
    lingua.innerText = "Lingua : " + series[i].original_language;

    const data = document.createElement("p");
    data.innerText = "Data di rilascio : " + series[i].release_date;

    divFilm.appendChild(titolo);
    divFilm.appendChild(voto);
    divFilm.appendChild(lingua);
    divFilm.appendChild(data);
    divFilm.classList.add("schedaINT");
    divFilm.style.display = "none";

    divEsterno.appendChild(img);
    divEsterno.appendChild(divFilm);
    divEsterno.classList.add("film");
    divEsterno.style.minWidth = "180px";

    divEsterno.addEventListener("click", () => {
    if (divFilm.style.display === "none") {
        divEsterno.style.minWidth = "450px";
        divFilm.style.display = "flex";
        divEsterno.classList.add("aperta");
    } else {
        divEsterno.style.minWidth = "180px";
        divFilm.style.display = "none";
        divEsterno.classList.remove("aperta");
    }
   });

    filmDiv.appendChild(divEsterno);
}
};

stampaFilm();
stampaSerieTv();


