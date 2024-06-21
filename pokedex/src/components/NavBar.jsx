import { useState } from 'react';
import PropTypes from 'prop-types';

function NavBar ({pokemonList,onPokemonClick}) {
    
    const handlePokemonClick = (index) => {
        const selectedPokemon = pokemonList[index];
        if (selectedPokemon.name.toLowerCase() === 'pikachu') {
          alert('pika pikachu !!!');
         } 
        // else {  alert(`Vous avez sélectionné : ${selectedPokemon.name}`);
        // }
        onPokemonClick(index);
      };
     
    //   {onPreviousClick, onNextClick,showPrevious,showNext}
    // const handlePokemonClick = (index) => {
    //     const selectedPokemon = pokemonList[index];
       
    //     onPokemonClick(index);
    //   };
    return (
        <header>
            <nav>    
                {pokemonList.map((pokemon,index) => (              
                    <button key={index} onClick={() =>handlePokemonClick(index)}>
                    
                    {pokemon.name}
                    </button>
                ))}
               
            {/* {showPrevious && <button onClick={onPreviousClick}>Précédent</button>}
            {showNext && <button onClick={onNextClick}>Suivant</button>} */}
            </nav>
        </header>
    )
}

NavBar.PropTypes = {
    onPreviousClick:PropTypes.func,
    onNextClick:PropTypes.func,
    showPrevious:PropTypes.bool,
    showNext: PropTypes.bool,
}

export default NavBar;