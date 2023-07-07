import React from "react";
import { Link } from "react-router-dom";
import "./Memorama.scss";
import rally1 from "../Ers/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-163 (1).jpg";
import rally2 from "../Ers/VI_Rally_Bienestar_Integral_ITASO-MX_RS_2205-64.jpg";
import { team } from "../../Data";
import { useState } from 'react';
import { start } from 'react';
import { end } from 'react';
import { swal } from 'react';


function Memorama() {
  const [icons, setIcons] = useState([]);
  const [selections, setSelections] = useState([]);
  const cardCount = 10;

  function loadIcons() {
    setIcons([
      '<img src = "../../../media/03-juegos/02-memorama/images/cartas/1.png">',
      // ... rest of the icons
    ]);
  }

  function generateBoard(level) {
    let nums = [];
    if (level === 'l1') {
      nums = [2, 3, 5, 7, 11, 12, 13, 14, 16, 17, 19, 23, 24];
    } else if (level === 'l2') {
      nums = [0, 1, 4, 6, 8, 9, 10, 15, 18, 20, 21, 22, 25, 26];
    } else {
      nums = Array.from({ length: 27 }, (_, i) => i);
    }

    let ranNums = [];
    let a = nums.length;
    let b = 0;
    while (a--) {
      b = Math.floor(Math.random() * (a + 1));
      ranNums.push(nums[b]);
      nums.splice(b, 1);
    }

    loadIcons();
    setSelections([]);

    let board = document.getElementById('board');
    let cards = [];

    for (let i = 1; i < (cardCount / 2) + 1; i++) {
      cards.push(
        <div className="card-area" onClick={() => selectCard(i)}>
          <div className="card" id={`card${i}`}>
            <div className="side rear" id={`rear${i}`}>
              {icons[ranNums[i]]}
            </div>
            <div className="side front">
              <img src="../../../media/03-juegos/02-memorama/images/cartas/REVERSO.png" />
            </div>
          </div>
        </div>
      );

      cards.push(
        <div className="card-area" onClick={() => selectCard(i + 27)}>
          <div className="card" id={`card${i + 27}`}>
            <div className="side rear" id={`rear${i + 27}`}>
              {icons[ranNums[i] + 27]}
            </div>
            <div className="side front">
              <img src="../../../media/03-juegos/02-memorama/images/cartas/REVERSO.png" />
            </div>
          </div>
        </div>
      );
    }

    cards.sort(() => Math.random() - 0.5);
    board.innerHTML = cards.join(' ');

    start = new Date().getTime();
  }

  function selectCard(i) {
    let card = document.getElementById(`card${i}`);
    if (card.style.transform !== 'rotateY(180deg)') {
      card.style.transform = 'rotateY(180deg)';
      setSelections(prevSelections => [...prevSelections, i]);
    }
    if (selections.length === 2) {
      deselect(selections);
      setSelections([]);
    }
  }

  function deselect(selections) {
    setTimeout(() => {
      let rear1 = document.getElementById(`rear${selections[0]}`);
      let rear2 = document.getElementById(`rear${selections[1]}`);

      if (selections[0] + 27 === selections[1] || selections[0] === selections[1] + 27) {
        rear1.style.background = 'plum';
        rear2.style.background = 'plum';
        console.log('saca es putooooo');
      } else {
        let card1 = document.getElementById(`card${selections[0]}`);
        let card2 = document.getElementById(`card${selections[1]}`);
        card1.style.transform = 'rotateY(0deg)';
        card2.style.transform = 'rotateY(0deg)';
      }

      if (verifyWin()) {
        let string = `Has encontrado todas las cartas. \nTe has tardado `;
        let time = ((end - start) / 1000).toFixed(1);
        if (time > 60) {
          string += `${time / 60} minutos`;
        } else {
          string += `${time} segundos`;
        }
        swal.fire({
          title: '¡Has ganado!',
          text: string,
          icon: 'success'
        });
      }
    }, 1000);
  }

  function verifyWin() {
    for (let i = 1; i <= cardCount / 2; i++) {
      let rear = document.getElementById(`rear${i}`);
      if (rear.style.background !== 'plum') {
        return false;
      }
    }
    end = new Date().getTime();
    return true;
  }

  return (
    <div>
      {/* Header navbar */}
      <div className="Header">
        <div className="Logo">
          <a href="../../../index.html">
            <img src="../../../media/general/logo.png" alt="" />
          </a>
        </div>
        <div className="Options">
          <a href="#">Mas información</a>
          <a href="#">Vida saludable</a>
          <a href="#">Calculadora</a>
        </div>
        <div className="Menu">
          <a href="../../08-cuenta/cuenta.html">Cuenta</a>
          <a href="#">Menú</a>
        </div>
      </div>

      <div id="board"></div>

      <div className="flex-container">
        <div className="newgame-button" onClick={() => generateBoard('l1')}>
          Nivel 1
        </div>
        <div className="newgame-button" onClick={() => generateBoard('l2')}>
          Nivel 2
        </div>
        <div className="newgame-button" onClick={() => generateBoard('l3')}>
          Nivel 3
        </div>
      </div>
    </div>
  );
}

export default Memorama;

