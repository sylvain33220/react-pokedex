import { useState } from 'react';
import React from 'react';
import NavBar from './components/NavBar';
import './App.css'
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  
  const [pokemonIndex,setPokemonIndex] = useState(0);

  const handlePreviousClick = () => {
    pokemonIndex >0 && setPokemonIndex(pokemonIndex -1);
  }
  const handleNextClick = () => {
    pokemonIndex < pokemonList.length -1 && setPokemonIndex(pokemonIndex +1);
  }

  return (
    <>
      <NavBar
          onPreviousClick={handlePreviousClick}
          onNextClick={handleNextClick}
          showPrevious={true}
          showNext={true}    
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      {/* <div>
        <button onClick={handlePreviousClick} >Précedent</button>
        <buton onClick={handleNextClick}>Suivant</buton>
      </div> */}
      
    </>
  )
}

export default App;
