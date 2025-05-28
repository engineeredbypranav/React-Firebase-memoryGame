
import { useState } from 'react';
import './App.css';
import SingleCards from './components/SingleCards.js'

const cardsImages = [
  {"src" : "/img/helmet-1.png"},
  {"src" : "/img/potion-1.png"},
  {"src" : "/img/ring-1.png"},
  {"src" : "/img/scroll-1.png"},
  {"src" : "/img/shield-1.png"},
  {"src" : "/img/sword-1.png"}
]

function App() {

  


  return (
    <div className="App">
      <h1>Magic Match</h1>
      

    <SingleCards key = {cardsImages.id} cardImages = {cardsImages} />

      
    </div>
  );
}

export default App;
