import React, { useState } from "react";
import peso1 from "./imagenes/peso1.jpg";
import peso2 from "./imagenes/peso2.jpg";
import manzanaImg from "./imagenes/manzana.png";
import pizzaImg from "./imagenes/pizza.png";
import brocoliImg from "./imagenes/brocoli.jpg";
import refrescoImg from "./imagenes/refresco.png";
import zanahoriaImg from "./imagenes/zanahoria.png";
import hamburguesaImg from "./imagenes/hamburguesa.png";
import "./JuanitoStyle.scss";

const Juanito = () => {
  const [peso, setPeso] = useState(30); // Peso inicial de Juanito ajustado a 30 kg
  const [buenosHabitos, setBuenosHabitos] = useState([]);
  const [malosHabitos, setMalosHabitos] = useState([]);
  const [puntos, setPuntos] = useState(0); // Estado para los puntos
  const [mostrarInstrucciones, setMostrarInstrucciones] = useState(true); // Estado para mostrar instrucciones
  const [estadoFinal, setEstadoFinal] = useState(null); // Estado para indicar si se ganó o perdió

  // Aquí se asignan las imágenes importadas a cada alimento
  const alimentos = [
    { nombre: "Manzana", saludable: true, imagen: manzanaImg },
    { nombre: "Pizza", saludable: false, imagen: pizzaImg },
    { nombre: "Brócoli", saludable: true, imagen: brocoliImg },
    { nombre: "Refresco", saludable: false, imagen: refrescoImg },
    { nombre: "Zanahoria", saludable: true, imagen: zanahoriaImg },
    { nombre: "Hamburguesa", saludable: false, imagen: hamburguesaImg },
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

  // Ajustar el umbral de peso para cambiar la imagen de Juanito
  const obtenerImagenJuanito = () => {
    return peso > 32 ? peso1 : peso2; // Cambia la imagen si Juanito pesa más de 32 kg
  };

  const obtenerClaseJuanito = () => {
    return peso > 32 ? "subir" : "bajar"; // Cambia la clase si Juanito pesa más de 32 kg
  };

  // Ajustar la visualización del progreso para que nunca baje de 25 kg
  const obtenerProgresoPeso = () => {
    const minPeso = 25;  // Peso mínimo ajustado para niños
    const maxPeso = 40;  // Peso máximo ajustado para niños
    const pesoVisual = Math.max(peso, minPeso);  // Asegura que el peso visual nunca sea menor que 25
    const porcentaje = ((pesoVisual - minPeso) / (maxPeso - minPeso)) * 100;

    return `${Math.max(porcentaje, 10)}%`;  // Asegura que el ancho mínimo de la barra sea del 10%
  };

  // Sistema de puntos y peso, con validaciones para ganar o perder
  const seleccionarAlimento = (alimento) => {
    if (estadoFinal) return; // Si ya se ganó o perdió, detener el juego

    if (alimento.saludable) {
      setPeso((prevPeso) => Math.max(prevPeso - 1, 25));  // Evita bajar de 25 kg
      const buenHabito = obtenerHábitoAleatorio(listaBuenosHabitos);
      setBuenosHabitos((prevHabitos) => [...prevHabitos, buenHabito]);
      setPuntos((prevPuntos) => {
        const nuevosPuntos = Math.min(prevPuntos + 10, 100); // No permitir que los puntos excedan 100
        verificarEstadoFinal(nuevosPuntos, peso - 1); // Verificar el estado final después del cambio de peso
        return nuevosPuntos;
      });
    } else {
      setPeso((prevPeso) => Math.min(prevPeso + 2, 40));  // Evita subir de 40 kg
      const malHabito = obtenerHábitoAleatorio(listaMalosHabitos);
      setMalosHabitos((prevHabitos) => [...prevHabitos, malHabito]);
      setPuntos((prevPuntos) => {
        const nuevosPuntos = Math.max(prevPuntos - 5, 0); // Restar puntos, sin permitir que sea menor que 0
        verificarEstadoFinal(nuevosPuntos, peso + 2); // Verificar el estado final después del cambio de peso
        return nuevosPuntos;
      });
    }
  };

  // Función para verificar si el jugador gana o pierde
  const verificarEstadoFinal = (puntos, pesoActual) => {
    if (puntos === 100 && pesoActual >= 25 && pesoActual <= 33) {
      setEstadoFinal("¡Ganaste! Tienes 100 puntos y has mantenido a Juanito en un peso saludable (25-33 kg).");
    } else if (pesoActual >= 40) {
      setEstadoFinal("¡Perdiste! Juanito ha alcanzado un peso de 40 kg. La obesidad es un problema grave.");
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

  // Pantalla de instrucciones
  const pantallaInstrucciones = (
    <div className="instrucciones-container">
      <h2>¡Bienvenido a Juanito!</h2>
      <p>
        En este juego, debes ayudar a Juanito a mantenerse sano y fuerte. Arrastra los alimentos
        hacia Juanito, y cada uno de ellos afectará su peso y sus hábitos:
      </p>
      <ul>
        <li><strong>Comida saludable</strong>: Sumarás puntos y Juanito perderá peso de manera saludable.</li>
        <li><strong>Comida chatarra</strong>: Perderás puntos y Juanito ganará peso.</li>
      </ul>
      <p>¡Intenta que Juanito mantenga un peso saludable y que aprenda buenos hábitos!</p>
      <button onClick={() => setMostrarInstrucciones(false)} className="boton-iniciar">
        Comenzar Juego
      </button>
    </div>
  );

  // Mostrar pantalla de instrucciones al inicio
  if (mostrarInstrucciones) {
    return pantallaInstrucciones;
  }

  // Mostrar mensaje de victoria o derrota
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

      <div
        className="juanito-status"
        onDrop={handleDrop}
        onDragOver={allowDrop}
      >
        <div className="juanito-container-delimited">
          <img
            className={obtenerClaseJuanito()}
            src={obtenerImagenJuanito()}
            alt="Juanito"
          />
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: obtenerProgresoPeso() }}>
            Peso de Juanito: {peso < 25 ? 25 : peso} kg {/* Asegura que el texto muestre 25 kg mínimo */}
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
  
        {/* Separación visual */}
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
