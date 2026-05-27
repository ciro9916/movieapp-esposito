const params = new URLSearchParams(window.location.search)
const id = params.get("id")

fetch('../movies.json')
  .then(res => res.json())
  .then(movies => {
    const div=document.getElementById("filmSingolo")
         for (let i = 0; i < movies.length; i++) {
            if(id==movies[i].id){
                const titolo=document.createElement("h3")
                titolo.innerText="Titolo : "+movies[i].title
                
                const voto=document.createElement("h4")
                voto.innerText="Voto : "+movies[i].vote_average+"⭐"

                const lingua=document.createElement("h4")
                lingua.innerText="Lingua : "+movies[i].original_language

                const descrizione=document.createElement("h4")
                descrizione.innerText="Descrizione : "+movies[i].overview

                const data=document.createElement("h4")
                data.innerText="Data di rilascio : "+movies[i].release_date


                div.appendChild(titolo)
                div.appendChild(voto)
                div.appendChild(lingua)
                div.appendChild(descrizione)
                div.appendChild(data)

            }
            
        }
  });