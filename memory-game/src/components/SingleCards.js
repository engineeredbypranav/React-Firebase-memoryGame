import React, { useCallback } from 'react'
import './SingleCards.css'
import { useState, useEffect } from 'react'

export default function SingleCards({cardImages}) {
  //States
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

  //Shuffle cards Logic
    const shuffleCards = () => {
          const shuffledcards =  [...cardImages, ...cardImages].sort(() => Math.random()-0.5)
          .map((card) => ({...card, id : Math.random() }))
          setCards(shuffledcards)
          setTurns(0)
          alert("Button clicked")
          
        }     
  // Card Click (User Choice) logic

    const handleClick = (card) => {
      if (card === choiceOne) return
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
      
    }

  // Card Comparision Logic
    const compareCards = useCallback ( (cardOne, cardTwo) => {
      if (cardOne.src === cardTwo.src) {
        console.log("Match")
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === cardOne.src) {
              return {...card, matched : true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      }
      else {
        alert("Try Again")
        console.log("Not a Match")
        resetTurn()
      }
    },[])
    
  //  UseEffect to fire comparecards logic
   useEffect(() => {
     if (choiceOne && choiceTwo) {
        compareCards(choiceOne, choiceTwo)
      }
   }, [choiceOne, choiceTwo , compareCards])
  
  

    // Reset Logic 

    const resetTurn = () => {
      setChoiceOne(null)
      setChoiceTwo(null)
      setTurns(prevTurns => prevTurns + 1)
    }

  return (
    <div>
       <button onClick = {shuffleCards}>New Game</button> 
       <button>Turns: {turns}</button>
    <div className="card-grid">
    {cards.map((card)=> (
    
        <div className="card" key={card.id}>
          <img src={card.src} className="front" alt="front card" />
          <img src = "/img/cover.png" onClick={() => handleClick(card)} className="back" alt="back card" />
        </div>
        
    
    ))}
    </div>
    </div>
  )
}
