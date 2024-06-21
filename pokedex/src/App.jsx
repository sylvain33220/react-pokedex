import { useState } from 'react';
import React from 'react';
import NavBar from './components/NavBar';
import './App.css'
import PokemonCard from './components/PokemonCard'
import { useEffect } from 'react';

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
    useEffect(() => 
        {alert("hello pokemon trainer :)")},[],
    );
    const [pokemonIndex, setPokemonIndex] = useState(0);
    
    const handlePokemonClick = (index) => {  
      pokemonList.name ==="pikachu" ? alert("pika") : setPokemonIndex(index); 
    }
  // const [pokemonIndex,setPokemonIndex] = useState(0);

  // const handlePreviousClick = () => {
  //   pokemonIndex >0 && setPokemonIndex(pokemonIndex -1);
  // }
  // const handleNextClick = () => {
  //   pokemonIndex < pokemonList.length -1 && setPokemonIndex(pokemonIndex +1);
  // }

  return (
    <>
      
      
      <NavBar pokemonList={pokemonList}
              onPokemonClick={handlePokemonClick}
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
