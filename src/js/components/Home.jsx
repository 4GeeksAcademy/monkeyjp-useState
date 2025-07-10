import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card";

// Un estado representa información que cambia con el tiempo dentro de un componente. Ejemplos:

// Un contador.

// Un array de tareas (to-do list).

// El resultado de una búsqueda.

// Información traída desde una API.

// const Home = () => {
//   const [numero, setNumero] = useState(0);

// numero: valor actual
// setNumero: función para actualizar ese valor
// 0: valor inicial

//   return (
//     <div className="text-center mt-5">
//       <h2>Contador: {numero}</h2>
//       <button className="btn btn-success me-2" onClick={() => setNumero(numero + 1)}>Aumentar</button>
//       <button className="btn btn-danger" onClick={() => setNumero(numero - 1)}>Disminuir</button>
//     </div>
//   );
// }

//create your first component
const Home = () => {

  const fondoNormal = "https://images.alphacoders.com/220/thumb-1920-220403.jpg";
  const fondoHalloween = "https://variety.com/wp-content/uploads/2021/10/Treehouse-of-Horror-XXXII-photo-edit-e1633367961184.png?w=1000&h=563&crop=1";

  const personajes = {
    homero: {
      nombre: "Homero Simpson",
      frase: "¡D'oh!",
      imagenNormal:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
      imagenHalloween:
        "https://preview.redd.it/i-drew-homer-simpson-as-the-trapper-v0-szwqf1v3ie6f1.png?width=640&crop=smart&auto=webp&s=b71ad98f0e7fe3e991198cd1b90e9c212bf27f46",
      color: "warning"
    },
    lisa: {
      nombre: "Lisa Simpson",
      frase: "¡Si alguien me necesita, estaré en mi habitación!",
      imagenNormal:
        "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
      imagenHalloween:
        "https://mystickermania.com/cdn/stickers/simpsons-stickers/lizard-queen-lisa-512x512.png",
      color: "info"
    },
    bart: {
      nombre: "Bart Simpson",
      frase: "¡Ay caramba!",
      imagenNormal:
        "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
      imagenHalloween:
        "https://pngimg.com/d/simpsons_PNG47.png",
      color: "danger"
    }
  };

  const [personajeActual, setPersonajeActual] = useState("homero");
  const [modoHalloween, setModoHalloween] = useState(false);

  const personaje = personajes[personajeActual];

  const imagenMostrar = modoHalloween
    ? personaje.imagenHalloween
    : personaje.imagenNormal;


  return (
    <div
      className="application"
      style={{
        backgroundImage: `url(${modoHalloween ? fondoHalloween : fondoNormal})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        height: "100vh"
      }}

    >

      <div className="container pt-4 text-center " >
        <h2 className={`${modoHalloween ? "text-light" : "text-dark"}`}>Selecciona un personaje</h2>
        <div className="mb-3">
          <button className="btn btn-primary me-2" onClick={() => setPersonajeActual("homero")}>Homero</button>
          <button className="btn btn-info me-2" onClick={() => setPersonajeActual("lisa")}>Lisa</button>
          <button className="btn btn-danger" onClick={() => setPersonajeActual("bart")}>Bart</button>
        </div>

        <button
          className={`btn ${modoHalloween ? "btn-outline-light" : "btn-outline-dark"} mb-4`}
          onClick={() => setModoHalloween(!modoHalloween)}
        >
          {modoHalloween ? "Desactivar Modo Halloween" : "Activar Modo Halloween 🎃"}
        </button>

        <Card personaje={personaje} imagenMostrar={imagenMostrar} />

      </div>
    </div>


  );
};

export default Home;