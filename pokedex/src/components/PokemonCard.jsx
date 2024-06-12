import PropTypes from 'prop-types';

function PokemonCard ({pokemon}) {
   
    // const pokemon = {name : "mew"};
    return(
        <div>
            <figure>
               {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>????</p>}
                <h2>{pokemon.name}</h2>
            </figure>
        </div>
    ) 
}

PokemonCard.propTypes = {
    pokemon : PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc:PropTypes.string
    })
}

export default PokemonCard;    