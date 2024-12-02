import React, { useState } from "react";
import peso1 from "./imagenes/Juan1.jpg";
import peso2 from "./imagenes/Juan2.jpg";
import peso3 from "./imagenes/Juan3.jpg";
import manzanaImg from "./imagenes/manzana.png";
import pizzaImg from "./imagenes/pizza.png";
import brocoliImg from "./imagenes/brocoli.jpg";
import refrescoImg from "./imagenes/refresco.png";
import zanahoriaImg from "./imagenes/zanahoria.png";
import hamburguesaImg from "./imagenes/hamburguesa.png";
import "./JuanitoStyle.scss";

const Juanito = () => {
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
  ];
  

  // Listas de buenos y malos hábitos
  const listaBuenosHabitos = [
    "Buen Hábito: Jugar al aire libre",
    "Buen Hábito: Comer frutas y verduras",
    "Buen Hábito: Beber suficiente agua",
    "Buen Hábito: Dormir temprano",
    "Buen Hábito: Lavarse las manos antes de comer",
    "Buen Hábito: Ayudar en casa",
    "Buen Hábito: Leer un libro cada día",
    "Buen Hábito: Hacer ejercicio jugando",
    "Buen Hábito: Desayunar todos los días",
    "Buen Hábito: Compartir con amigos",
    "Buen Hábito: Practicar algún deporte",
    "Buen Hábito: Usar protector solar",
    "Buen Hábito: Organizar los juguetes después de jugar",
    "Buen Hábito: Sonreír y ser amable",
    "Buen Hábito: Hacer pausas para descansar cuando estudias",
    "Buen Hábito: Mantener la habitación ordenada",
    "Buen Hábito: Escuchar a los demás cuando hablan",
    "Buen Hábito: Ayudar a cuidar mascotas",
    "Buen Hábito: Comer despacio y disfrutar la comida",
    "Buen Hábito: Cepillarse los dientes después de cada comida"
  ];
  
  const listaMalosHabitos = [
    "Mal Hábito: Ver mucha televisión",
    "Mal Hábito: No comer frutas y verduras",
    "Mal Hábito: Saltarse el desayuno",
    "Mal Hábito: Beber refrescos en lugar de agua",
    "Mal Hábito: No hacer ejercicio",
    "Mal Hábito: Jugar demasiado tiempo con videojuegos",
    "Mal Hábito: Dormir tarde",
    "Mal Hábito: No lavarse las manos antes de comer",
    "Mal Hábito: Comer golosinas en exceso",
    "Mal Hábito: Olvidar cepillarse los dientes",
    "Mal Hábito: Comer comida rápida con frecuencia",
    "Mal Hábito: No ayudar en las tareas del hogar",
    "Mal Hábito: No compartir con los amigos",
    "Mal Hábito: Comer demasiadas papas fritas",
    "Mal Hábito: Pasar mucho tiempo frente a la computadora",
    "Mal Hábito: No recoger los juguetes después de jugar",
    "Mal Hábito: Saltarse la merienda saludable",
    "Mal Hábito: Comer frente a la televisión",
    "Mal Hábito: Comer demasiado rápido",
    "Mal Hábito: Usar el celular durante las comidas"
  ];



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
  } else if (puntosActuales === 0){
    setEstadoFinal("¡Oh no! Juanito perdió toda su energía. Ayúdalo a recuperar sus buenos hábitos y vuelve a intentarlo.")
  }
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
  return peso2;                   // De 0 a 33 puntos: sin energía (peso2)
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

const pantallaInstrucciones = (
  <div className="instrucciones-container">
    <h2>¡Bienvenido a Juanito!</h2>
    <p>
      En este juego, debes ayudar a Juanito a mantenerse sano y fuerte. Arrastra los alimentos hacia Juanito, y cada uno de ellos afectará su energía y sus hábitos:
    </p>
    <ul>
      <li><strong>Comida saludable</strong>: Sumarás puntos y mejorarás la energía de Juanito.</li>
      <li><strong>Comida chatarra</strong>: Perderás puntos y disminuirás su energía.</li>
    </ul>
    <p>
      Ganas el juego si logras que Juanito alcance 100 puntos de energía.
    </p>
    <button onClick={() => setMostrarInstrucciones(false)} className="boton-iniciar">
      Comenzar Juego
    </button>
  </div>
);

if (mostrarInstrucciones) {
  return pantallaInstrucciones;
}

if (estadoFinal) {
  return (
    <div className="estado-final-container">
      <h2>{estadoFinal}</h2>
      <button onClick={() => window.location.reload()} className="boton-reiniciar">
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
  
      <div
        className="juanito-status"
        onDrop={handleDrop}
        onDragOver={allowDrop}
      >
        <div className="juanito-container-delimited">
          <img
            className="subir"
            src={obtenerImagenJuanito()} // Usa las imágenes en función de los puntos si quieres variar visualmente
            alt="Juanito"
          />
        </div>
        <div className="progress-bar">
          <div className={`progress ${obtenerColorBarra()}`} style={{ width: obtenerProgresoPuntos() }}>
          </div>
        </div>
      </div>
  
      <div className="alimentos-habitos">
        <div className="comida-chatarra">
          <h3>Comida Chatarra</h3>
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
  
        <div className="comida-saludable">
          <h3>Comida Saludable</h3>
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
  
        <div className="columna-separacion"></div>
  
        <div className="malos-habitos">
          <h3>Malos Hábitos:</h3>
          <ul>{renderizarMalosHabitos()}</ul>
        </div>
  
        <div className="buenos-habitos">
          <h3>Buenos Hábitos:</h3>
          <ul>{renderizarBuenosHabitos()}</ul>
        </div>
      </div>
    </div>
  );
  
};

export default Juanito;


