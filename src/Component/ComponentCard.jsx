export default function ComponentCard(props) {

    const {name, birth_year,image, nationality, biography, awards } = props.attore;

    return (

        <div className="card text-center m-2 p-1 cardActor" style={{width: "18rem"}}>
            <img src={image} className="card-img-top imgActor" alt={name} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h5 className="card-title">Nato il {birth_year}</h5>
                    <h5 className="card-title">Nazionalità: {nationality}</h5>

                    <p className="card-text">BIOGRAFIA: {biography} </p>
                    <p className="riconoscimenti ">RICONOSCIMENTI: <br /> {awards} </p>
                </div>
            </div>


    )
}