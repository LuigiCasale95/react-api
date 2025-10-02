import ComponentCard from "./Component/ComponentCard"
import { useState, useEffect } from "react"

export default function MyMain() {

    const [actor, setActor] = useState([])

    function useActorApi() {
        axios.get ("https://lanciweb.github.io/demo/api/actors/")
            .then((res) => setActor(res.data))
            .catch(error => console.log(error)
            
        )
    }
    console.log(actor);

    useEffect(() => {
        useActorApi()
    }
, []);


    return (
        <main>
            <div className="container">

                <h1>Attrici famose</h1>

                <div className="row">
                   <ComponentCard></ComponentCard>
                </div>


            </div>
        </main>
        )
}