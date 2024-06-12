import { useState } from 'react';
import PropTypes from 'prop-types';

function NavBar ({pokemonList,onPokemonClick}) {
    //   {onPreviousClick, onNextClick,showPrevious,showNext}
    
    return (
        <header>
            <nav>    
                {pokemonList.map((pokemon,index) => (
                    <button key={index} onClick={() =>onPokemonClick(index)}>
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