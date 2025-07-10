export const Card = ({personaje, imagenMostrar}) => {

    return (
        <div className={`card bg-${personaje.color} text-white mx-auto border border-dark`} style={{ maxWidth: '400px' }}>
          <img src={imagenMostrar} className="card-img-top object-fit-cover" alt={personaje.nombre} style={{ height: "600px", objectPosition: "top" }} />
          <div className="card-body">
            <h5 className="card-title">{personaje.nombre}</h5>
            <p className="card-text text-dark fst-italic">"{personaje.frase}"</p>
          </div>
        </div>
    )
}