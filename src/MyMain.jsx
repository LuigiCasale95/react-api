import ComponentCard from "./Component/ComponentCard"
import { useState, useEffect } from "react"

export default function MyMain() {

    const [actor, setActor] = useState([]) /* setto l'useState */

    function useActorApi() {
        // eslint-disable-next-line no-undef
        axios.get ("https://lanciweb.github.io/demo/api/actors/") /* collego la API tramite l'axios */
        .then((res) => setActor(res.data)) /* setto il valore dell'api e lo collego a actor tramite il setActor */
        .catch(error => console.log(error) //variabile in caso di errore
        
    )
}
useEffect(() => { /* tramite use effect avvio la stampa (la funzione useActorApi) all'avvio della pagina */
    useActorApi()
}
, []);// essendo questo valore vuoto la lista si aggionerà soltanto all'apertura della pagina, altrimenti si modificherebbe ad ogni aggiornamento dell'elemento selezionato 



    return (
        <main>
            <div className="container">

                <h1 className="text-center">Attori famosi</h1>

{/*                 <button className="p-2" onClick={useActorApi}>Attori Famosi</button>
 */}                <div className="row d-flex justify-content-center">

                    {actor.map((attore) => ( /* Ciclo actor(contenente il valore della API) con il map */
                        <ComponentCard  /* Richiamo il componente card */
                        key={attore.id}/* Assegno i valore delle props tramite il valore del API ovvero actor */
                        src={attore.image}
                        nome={attore.name}
                        anno={attore.birth_year}
                        biografia={attore.biography}
                        nazionalita={attore.nationality}
                        riconoscimenti={attore.awards}
                        ></ComponentCard>

                    ))}
                </div>


            </div>
        </main>
        )
}