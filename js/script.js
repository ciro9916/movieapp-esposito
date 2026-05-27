
/*fetch('../movies.json')
  .then(res => res.json())
  .then(movies => {
    const filmDiv = document.getElementById("film");
    for (let i = 0; i < movies.length-3; i++) {
      const divv=document.createElement("div")  
      const link=document.createElement("a")
      const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + movies[i].poster_path;
        //img.src="img/misterio.jpg"
        img.style.width = "250px";
        img.style.height = "auto"; 
        link.href = "film.html?id=" + movies[i].id     
        const rating=document.createElement("div")
        divv.classList.add("film")
        link.appendChild(img)
        divv.appendChild(link)
        filmDiv.appendChild(divv);
    }
  });

*/


const chiamataApi =async () =>{
    const risposta = await fetch("movies.json")
     if (!risposta.ok) {
        throw new Error("Errore nella chiamata")
    }
    const dati = await risposta.json()
     return dati
}
const stampaFilm = async () =>{
    const movies=await chiamataApi()
    const filmDiv = document.getElementById("film");
    for (let i = 0; i < movies.length-3; i++) {
      const divv=document.createElement("div")  
      const link=document.createElement("a")
      const img = document.createElement("img");
        img.src = "https://image.tmdb.org/t/p/w500" + movies[i].poster_path;
        //img.src="img/misterio.jpg"
        img.style.width = "250px";
        img.style.height = "auto"; 
        link.href = "film.html?id=" + movies[i].id     
        const rating=document.createElement("div")
        divv.classList.add("film")
        link.appendChild(img)
        divv.appendChild(link)
        filmDiv.appendChild(divv);
    }
}

stampaFilm()
