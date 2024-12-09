import React, { useState } from "react";
import peso1 from "./imagenes/Juan1.jpg";
import peso2 from "./imagenes/Juan2.jpg";
import peso3 from "./imagenes/Juan3.jpg";

import pizzaImg from "./imagenes/pizza.png";

import refrescoImg from "./imagenes/refresco.png";
import zanahoriaImg from "./imagenes/zanahoria.png";
import hamburguesaImg from "./imagenes/hamburguesa.png";
// Alimentos de origen animal
import carneImg from "./imagenes/carne.png";

import fileteImg from "./imagenes/filete.png";
import huevoImg from "./imagenes/huevo.png";
import polloImg from "./imagenes/pollo.png";
import quesoImg from "./imagenes/queso.png";
import salchichaImg from "./imagenes/salchicha.png";
// Cereales
import arrozImg from "./imagenes/arroz.png";
import panImg from "./imagenes/pan.png";
import papaImg from "./imagenes/papa.png";
import pastaImg from "./imagenes/pasta.png";
import sopaPastaImg from "./imagenes/sopaPasta.png";
// Frutas y verduras
import apioImg from "./imagenes/apio.png";
import brocoliImg from "./imagenes/brocoli.png";
import chilesImg from "./imagenes/chiles.png";
import coctelImg from "./imagenes/coctel.png";
import ensaladaImg from "./imagenes/ensalada.png";
import jitomateImg from "./imagenes/jitomate.png";
import mangoImg from "./imagenes/mango.png";
import manzanaImg from "./imagenes/manzana.png";
import naranjaImg from "./imagenes/naranja.png";
import papayaImg from "./imagenes/papaya.png";
import platanoImg from "./imagenes/platano.png";
import sandiaImg from "./imagenes/sandia.png";
import uvasImg from "./imagenes/uvas.png";




// Leguminosas
import aceiteImg from "./imagenes/aceite.png";
import legumbresImg from "./imagenes/legumbres.png";


import "./JuanitoStyle.scss";

const Juanito = () => {
  const [mostrarVideo, setMostrarVideo] = useState(true); // Estado para controlar el video
  const [puntos, setPuntos] = useState(34); // Estado para los puntos
  const [mostrarBonus, setMostrarBonus] = useState(false); // Controlar cuándo mostrar el anuncio de bonus
  const [buenosHabitos, setBuenosHabitos] = useState([]);
  const [malosHabitos, setMalosHabitos] = useState([]);
  const [mostrarInstrucciones, setMostrarInstrucciones] = useState(true); // Estado para mostrar instrucciones
  const [estadoFinal, setEstadoFinal] = useState(null); // Estado para indicar si se ganó o perdió
  const [rachaSaludable, setRachaSaludable] = useState(0); // Contador para la racha saludable
  

 
  // Aquí se asignan las imágenes importadas a cada alimento
 /* const alimentos = [
    { nombre: "Manzana", saludable: true, imagen: manzanaImg },
    { nombre: "Pizza", saludable: false, imagen: pizzaImg },
    { nombre: "Brócoli", saludable: true, imagen: brocoliImg },
    { nombre: "Refresco", saludable: false, imagen: refrescoImg },
    { nombre: "Zanahoria", saludable: true, imagen: zanahoriaImg },
    { nombre: "Hamburguesa", saludable: false, imagen: hamburguesaImg },
  ];*/

  const alimentos = [
    { nombre: "Manzana", saludable: true, imagen: manzanaImg, puntos: 10 },
    { nombre: "Pizza", saludable: false, imagen: pizzaImg, puntos: -5 },
    { nombre: "Brócoli", saludable: true, imagen: brocoliImg, puntos: 15 },
    { nombre: "Refresco", saludable: false, imagen: refrescoImg, puntos: -10 },
    { nombre: "Zanahoria", saludable: true, imagen: zanahoriaImg, puntos: 12 },
    { nombre: "Hamburguesa", saludable: false, imagen: hamburguesaImg, puntos: -7 },
    
      // Alimentos de origen animal
      { nombre: "Carne", saludable: true, imagen: carneImg, puntos: 10 },
     
      { nombre: "Filete", saludable: true, imagen: fileteImg, puntos: 15 },
      { nombre: "Huevo", saludable: true, imagen: huevoImg, puntos: 10 },
      { nombre: "Pollo", saludable: true, imagen: polloImg, puntos: 12 },
      { nombre: "Queso", saludable: false, imagen: quesoImg, puntos: -7 },
      { nombre: "Salchicha", saludable: false, imagen: salchichaImg, puntos: -10 },
    
      // Cereales
      { nombre: "Arroz", saludable: true, imagen: arrozImg, puntos: 8 },
      { nombre: "Pan", saludable: false, imagen: panImg, puntos: -5 },
      { nombre: "Papa", saludable: true, imagen: papaImg, puntos: 10 },
      { nombre: "Pasta", saludable: false, imagen: pastaImg, puntos: -7 },
      { nombre: "Sopa de Pasta", saludable: false, imagen: sopaPastaImg, puntos: -5 },
    
      // Frutas y verduras
      { nombre: "Apio", saludable: true, imagen: apioImg, puntos: 10 },
      { nombre: "Brócoli", saludable: true, imagen: brocoliImg, puntos: 15 },
      { nombre: "Chiles", saludable: true, imagen: chilesImg, puntos: 10 },
      { nombre: "Coctel", saludable: true, imagen: coctelImg, puntos: 10 },
      { nombre: "Ensalada", saludable: true, imagen: ensaladaImg, puntos: 20 },
      { nombre: "Jitomate", saludable: true, imagen: jitomateImg, puntos: 10 },
      { nombre: "Mango", saludable: true, imagen: mangoImg, puntos: 12 },
      { nombre: "Manzana", saludable: true, imagen: manzanaImg, puntos: 8 },
      { nombre: "Naranja", saludable: true, imagen: naranjaImg, puntos: 10 },
      { nombre: "Papaya", saludable: true, imagen: papayaImg, puntos: 8 },
      { nombre: "Plátano", saludable: true, imagen: platanoImg, puntos: 12 },
      { nombre: "Sandía", saludable: true, imagen: sandiaImg, puntos: 10 },
      { nombre: "Uvas", saludable: true, imagen: uvasImg, puntos: 10 },
      { nombre: "Zanahoria", saludable: true, imagen: zanahoriaImg, puntos: 10 },
    
      // Leguminosas
      { nombre: "Aceite", saludable: false, imagen: aceiteImg, puntos: -5 },
      { nombre: "Legumbres", saludable: true, imagen: legumbresImg, puntos: 15 },
  ];
  

// Listas de buenos y malos hábitos
const listaBuenosHabitos = [
  "Jugar al aire libre",
  "Comer frutas y verduras",
  "Beber suficiente agua",
  "Dormir temprano",
  "Lavarse las manos antes de comer",
  "Ayudar en casa",
  "Leer un libro cada día",
  "Hacer ejercicio jugando",
  "Desayunar todos los días",
  "Compartir con amigos",
  "Practicar algún deporte",
  "Usar protector solar",
  "Organizar los juguetes después de jugar",
  "Sonreír y ser amable",
  "Hacer pausas para descansar cuando estudias",
  "Mantener la habitación ordenada",
  "Escuchar a los demás cuando hablan",
  "Ayudar a cuidar mascotas",
  "Comer despacio y disfrutar la comida",
  "Cepillarse los dientes después de cada comida"
];

const listaMalosHabitos = [
  "Ver mucha televisión",
  "No comer frutas y verduras",
  "Saltarse el desayuno",
  "Beber refrescos en lugar de agua",
  "No hacer ejercicio",
  "Jugar demasiado tiempo con videojuegos",
  "Dormir tarde",
  "No lavarse las manos antes de comer",
  "Comer golosinas en exceso",
  "Olvidar cepillarse los dientes",
  "Comer comida rápida con frecuencia",
  "No ayudar en las tareas del hogar",
  "No compartir con los amigos",
  "Comer demasiadas papas fritas",
  "Pasar mucho tiempo frente a la computadora",
  "No recoger los juguetes después de jugar",
  "Saltarse la merienda saludable",
  "Comer frente a la televisión",
  "Comer demasiado rápido",
  "Usar el celular durante las comidas"
];



  // Función para manejar el reinicio del juego
const reiniciarJuego = () => {
  setPuntos(34); // Restablecer los puntos iniciales
  setMostrarBonus(false); // Ocultar el bonus
  setBuenosHabitos([]); // Limpiar la lista de buenos hábitos
  setMalosHabitos([]); // Limpiar la lista de malos hábitos
  setEstadoFinal(null); // Restablecer el estado final
  setRachaSaludable(0); // Reiniciar la racha saludable
  setMostrarVideo(false); // Asegurarse de que el video no vuelva a aparecer
  setMostrarInstrucciones(false); // Comenzar directamente el juego
};

  // Función para manejar el final del video
const manejarVideoTerminado = () => {
  setMostrarVideo(false);
  setMostrarInstrucciones(true); // Mostrar las instrucciones después del video
};

// Función para iniciar el juego después de las instrucciones
const comenzarJuego = () => {
  setMostrarInstrucciones(false);
};

// Función para obtener un hábito aleatorio de las listas
const obtenerHábitoAleatorio = (listaHabitos) => {
  const indiceAleatorio = Math.floor(Math.random() * listaHabitos.length);
  return listaHabitos[indiceAleatorio];
};

const activarBonus = () => {
  setPuntos((prevPuntos) => Math.min(prevPuntos + 20, 100)); // Dar 20 puntos extra como bonus
  setMostrarBonus(true); // Mostrar el anuncio del bonus

  // Ocultar el mensaje después de 3 segundos
  setTimeout(() => {
    setMostrarBonus(false);
  }, 3000);
};

const obtenerColorBarra = () => {
  if (puntos <= 33) return "rojo";
  if (puntos > 33 && puntos <= 66) return "naranja";
  return "verde";
};

const obtenerProgresoPuntos = () => {
  const porcentaje = (puntos / 100) * 100;
  return `${Math.max(porcentaje, 10)}%`;
};


const renderizarBuenosHabitos = () => {
  return buenosHabitos.map((habito, index) => (
    <li key={index} className="buen-habito">
      {habito}
    </li>
  ));
};

const renderizarMalosHabitos = () => {
  return malosHabitos.map((habito, index) => (
    <li key={index} className="mal-habito">
      {habito}
    </li>
  ));
};
// Función para seleccionar un alimento y ajustar los puntos de Juanito
const seleccionarAlimento = (alimento) => {
  if (estadoFinal) return; // Si ya se ganó o perdió, detener el juego

  if (alimento.saludable) {
    const buenHabito = obtenerHábitoAleatorio(listaBuenosHabitos);
    setBuenosHabitos((prevHabitos) => [...prevHabitos, buenHabito]);

    // Aumentar la racha y comprobar si alcanza 3
    setRachaSaludable((prevRacha) => {
      const nuevaRacha = prevRacha + 1;
      if (nuevaRacha === 3) {
        // Se alcanzó la racha de 3, dar bonus de puntos
        activarBonus(); // Llamar a la función para activar el bonus
        return 0; // Reiniciar la racha después del bonus
      }
      return nuevaRacha;
    });

    setPuntos((prevPuntos) => {
      const nuevosPuntos = Math.min(prevPuntos + alimento.puntos, 100); // Suma los puntos específicos del alimento
      verificarEstadoFinal(nuevosPuntos);
      return nuevosPuntos;
    });
  } else {
    // Resetear racha si se elige comida chatarra
    setRachaSaludable(0);

    const malHabito = obtenerHábitoAleatorio(listaMalosHabitos);
    setMalosHabitos((prevHabitos) => [...prevHabitos, malHabito]);
    setPuntos((prevPuntos) => {
      const nuevosPuntos = Math.max(prevPuntos + alimento.puntos, 0); // Resta los puntos específicos del alimento
      verificarEstadoFinal(nuevosPuntos);
      return nuevosPuntos;
    });
  }
};

// Función para verificar si el jugador gana o pierde
const verificarEstadoFinal = (puntosActuales) => {
  if (puntosActuales === 100) {
    setEstadoFinal("¡Ganaste! Has alcanzado 100 puntos, ¡Juanito está lleno de energía y buenos hábitos!");
  } else if (puntosActuales === 0) {
    setEstadoFinal("¡Oh no! Juanito perdió toda su energía. Ayúdalo a recuperar sus buenos hábitos y vuelve a intentarlo.");
  }
};

const saltarVideo = () => {
  setMostrarVideo(false);
  setMostrarInstrucciones(true);
};

const handleDrop = (event) => {
  event.preventDefault();
  const alimentoNombre = event.dataTransfer.getData("alimento");
  const alimento = alimentos.find((item) => item.nombre === alimentoNombre);
  seleccionarAlimento(alimento);
};

const allowDrop = (event) => {
  event.preventDefault();
};

const handleDragStart = (event, alimento) => {
  event.dataTransfer.setData("alimento", alimento.nombre);
};

const obtenerImagenJuanito = () => {
  if (puntos >= 61) return peso3; // De 61 a 100 puntos: con energía (peso3)
  if (puntos >= 34) return peso1; // De 34 a 60 puntos: estado base (peso1)
  return peso2; // De 0 a 33 puntos: sin energía (peso2)
};

// Renderizado condicional del contenido
if (mostrarVideo) {
  return (
    <div className="video-container">
      <video
        src="assets/videos/InstruccionesJUAN.mp4"
        autoPlay
        controls
        onEnded={manejarVideoTerminado}
        className="video-instrucciones"
      />
      {/* Botón para saltar el video */}
      <div className="boton-saltar-contenedor">
        <button onClick={saltarVideo} className="boton-saltar-video">
          Saltar Video
        </button>
      </div>
    </div>
  );
}


if (mostrarInstrucciones) {
  return (
    <div className="instrucciones-container">
      <h2>¡Bienvenido a Juanito!</h2>
      <p>
        En este juego, debes ayudar a Juanito a mantenerse sano y fuerte.
        Arrastra los alimentos hacia Juanito, y cada uno de ellos afectará su
        energía y sus hábitos:
      </p>
      <ul>
        <li>
          <strong>Comida saludable:</strong> Sumarás puntos y mejorarás la energía de Juanito.
        </li>
        <li>
          <strong>Comida chatarra:</strong> Perderás puntos y disminuirás su energía.
        </li>
      </ul>
      <p>Ganas el juego si logras que Juanito alcance 100 puntos de energía.</p>
      <button onClick={comenzarJuego} className="boton-iniciar">
        Comenzar Juego
      </button>
    </div>
  );
}

if (estadoFinal) {
  return (
    <div className="estado-final-container">
      <h2>{estadoFinal}</h2>
      <button onClick={reiniciarJuego} className="boton-reiniciar">
        Reiniciar Juego
      </button>
    </div>
  );
}

return (
  <div className="juanito-container">
    <h1>¡Cuidado, Juanito! ¿Qué vas a comer?</h1>

    {/* Mostrar el puntaje */}
    <div className="puntos-container">
      <h2>Puntos: {puntos}</h2>
    </div>

    {/* Mostrar el anuncio de bonus si la racha saludable se activa */}
    {mostrarBonus && (
      <div className="bonus-anuncio">
        <h2>¡Racha Saludable! +20 Puntos de Bonus</h2>
      </div>
    )}

    {/* Contenedor de Juanito y barra de progreso */}
    <div
      className="juanito-status"
      onDrop={handleDrop}
      onDragOver={allowDrop}
    >
      <div className="juanito-container-delimited">
        <img
          className="subir"
          src={obtenerImagenJuanito()}
          alt="Juanito"
        />
      </div>
      <div className="progress-bar">
        <div
          className={`progress ${obtenerColorBarra()}`}
          style={{ width: obtenerProgresoPuntos() }}
        ></div>
      </div>
    </div>

    {/* Contenedor de alimentos y hábitos */}
    <div className="alimentos-habitos">
      {/* Comida chatarra */}
      <div className="comida-chatarra">
        <h3>Antojos de Juanito</h3>
        {alimentos
          .filter((alimento) => !alimento.saludable)
          .map((alimento, index) => (
            <img
              key={index}
              src={alimento.imagen}
              alt={alimento.nombre}
              className="img-alimento"
              draggable="true"
              onDragStart={(event) => handleDragStart(event, alimento)}
            />
          ))}
      </div>

      {/* Comida saludable */}
      <div className="comida-saludable">
        <h3>Energía para Juanito</h3>
        {alimentos
          .filter((alimento) => alimento.saludable)
          .map((alimento, index) => (
            <img
              key={index}
              src={alimento.imagen}
              alt={alimento.nombre}
              className="img-alimento"
              draggable="true"
              onDragStart={(event) => handleDragStart(event, alimento)}
            />
          ))}
      </div>

      {/* Separador */}
      <div className="columna-separacion"></div>

      {/* Hábitos malos */}
      <div className="malos-habitos">
        <h3>Descargas de energía:</h3>
        <ul>{renderizarMalosHabitos()}</ul>
      </div>

      {/* Hábitos buenos */}
      <div className="buenos-habitos">
        <h3>Cargas de energía:</h3>
        <ul>{renderizarBuenosHabitos()}</ul>
      </div>
    </div>

    {/* Estado final del juego */}
    {estadoFinal && (
      <div className="estado-final-container">
        <h2>{estadoFinal}</h2>
        <button onClick={reiniciarJuego} className="boton-reiniciar">
          Reiniciar Juego
        </button>
      </div>
    )}
  </div>
);


  
};

export default Juanito;