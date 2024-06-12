

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
export default PokemonCard;    