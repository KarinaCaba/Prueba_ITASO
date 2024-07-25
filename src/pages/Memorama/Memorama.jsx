import React, { useState, useEffect } from "react";
import "./Memorama.scss";
import { useDocumentTitle } from "../../hooks/setdocumenttitle";

const Memorama = () => {
  useDocumentTitle("Memorama - ITASO");
  const [icons, setIcons] = useState([]);
  const [selections, setSelections] = useState([]);
  const [board, setBoard] = useState([]);
  const cardCount = 20; 
    
  useEffect(() => {
    loadIcons();
  }, []);

  useEffect(() => {
    if (selections.length === 2) {
      const [firstCardId, secondCardId] = selections;
      const firstCard = board.find(card => card.id === firstCardId);
      const secondCard = board.find(card => card.id === secondCardId);

      if (firstCard.iconIndex === secondCard.iconIndex) {
        setBoard(prevBoard =>
          prevBoard.map(card =>
            card.id === firstCardId || card.id === secondCardId
              ? { ...card, matched: true }
              : card
          )
        );
      } else {

        setTimeout(() => {
          setBoard(prevBoard =>
            prevBoard.map(card =>
              card.id === firstCardId || card.id === secondCardId
                ? { ...card, flipped: false }
                : card
            )
          );
        }, 1000);
      }
      setSelections([]);
    }
  }, [selections, board]);

  const loadIcons = () => {
    const newIcons = Array.from({ length: 54 }, (_, index) => (
      <img src={`/assets/memorama/cartas/${index + 1}.png`} alt={`icon ${index + 1}`} />
    ));
    setIcons(newIcons);
  };

  const generateBoard = (level) => {
    let nums = [];
    if (level === 'l1') {
      nums = [2, 3, 5, 7, 11, 12, 13, 14, 16, 17, 19, 23, 24];
    } else if (level === 'l2') {
      nums = [0, 1, 4, 6, 8, 9, 10, 15, 18, 20, 21, 22, 25, 26];
    } else {
      nums = [...Array(27).keys()]; 
    }

    const shuffledNums = shuffle(nums.concat(nums)); 
    const newBoard = shuffledNums.map((num, index) => ({
      id: index + 1,
      iconIndex: num,
      flipped: false,
      matched: false,
    }));
    setBoard(newBoard);
    setSelections([]);
  };

  const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  const selectCard = (cardId) => {
    const selectedCard = board.find(card => card.id === cardId);
    if (selectedCard.flipped || selectedCard.matched || selections.length === 2) {
      return;
    }

    setBoard(prevBoard =>
      prevBoard.map(card =>
        card.id === cardId ? { ...card, flipped: true } : card
      )
    );
    setSelections([...selections, cardId]);
  };

  return (
    <div>
      <div className="board"> 
        {board.map(card => (
          <div
            className="card" 
            key={card.id}
            onClick={() => selectCard(card.id)}
            style={{ transform: card.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
          >
            <div className="side rear" id={`rear${card.id}`}> 
              {card.flipped || card.matched ? icons[card.iconIndex] : null}
            </div>
            <div className="side front"> 
              <img src="/assets/memorama/cartas/REVERSO.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex-container">
        <div className="newgame-button" onClick={() => generateBoard('l1')}>Nivel 1</div>
        <div className="newgame-button" onClick={() => generateBoard('l2')}>Nivel 2</div>
        <div className="newgame-button" onClick={() => generateBoard('l3')}>Nivel 3</div>
      </div>
    </div>
  );
};

export default Memorama;
