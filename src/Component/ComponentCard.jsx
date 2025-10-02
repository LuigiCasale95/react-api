export default function ComponentCard(props) {

    const {nome, anno, src, nazionalita, biografia, riconoscimenti } = props;

    return (

        <div className="card text-center m-2 p-1 cardActor" style={{width: "18rem"}}>
            <img src={src} className="card-img-top imgActor" alt={nome} />
                <div className="card-body">
                    <h4 className="card-title">{nome}</h4>
                    <h5 className="card-title">Nato il {anno}</h5>
                    <h5 className="card-title">Nazionalità: {nazionalita}</h5>

                    <p className="card-text">BIOGRAFIA: {biografia} </p>
                    <p className="riconoscimenti ">RICONOSCIMENTI: <br /> {riconoscimenti} </p>
                </div>
            </div>


    )
}