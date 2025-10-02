import ComponentCard from "./Component/ComponentCard"
import { useState, useEffect } from "react"

export default function MyMain() {

    const [actor, setActor] = useState([])

    function useActorApi() {
        // eslint-disable-next-line no-undef
        axios.get ("https://lanciweb.github.io/demo/api/actors/")
        .then((res) => setActor(res.data))
        .catch(error => console.log(error)
        
    )
}
useEffect(() => {
    useActorApi()
}
, []);



    return (
        <main>
            <div className="container">

                <h1>Attori famosi</h1>

{/*                 <button className="p-2" onClick={useActorApi}>Attori Famosi</button>
 */}                <div className="row">

                    {actor.map((attore) => (
                        <ComponentCard
                        key={attore.id}
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