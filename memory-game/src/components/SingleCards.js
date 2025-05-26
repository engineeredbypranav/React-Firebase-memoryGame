import React from 'react'
import './SingleCards.css'
import { useState } from 'react'

export default function SingleCards({cardImages}) {

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const shuffleCards = () => {
          const shuffledcards =  [...cardImages, ...cardImages].sort(() => Math.random()-0.5)
          .map((card) => ({...card, id : Math.random() }))
          setCards(shuffledcards)
          setTurns(0)
          alert("Button clicked")
          
        }     
  return (
    <div>
       <button onClick = {shuffleCards}>New Game</button> 
    <div className="card-grid">
    {cards.map((card)=> (
    
        <div className="card">
          <img src={card.src} className="front" alt="front card" />
          <img src = "/img/cover.png" className="back" alt="back card" />
        </div>
        
    
    ))}
    </div>
    </div>
  )
}
