/**
 * @type {NodeListOf<HTMLElement>}
 */
const container = document.querySelector( '.container' );
const pokemonAPI = 'https://pokeapi.co/api/v2/';

const typeColorMap = {
    fire: '#feb306', water: '#60c8ff', grass: '#98fb98', electric: '#ffd700',
    ice: '#b8d7ff', fighting: '#c8a868', poison: '#a8a878', ground: '#e0c578',
    flying: '#cba13c', psychic: '#f8d03f', bug: '#a2bf2d', rock: '#b6b6a5',
    ghost: '#7b574d', dragon: '#753926', dark: '#4a2c27', steel: '#b7a98e',
    fairy: '#ffb9b9'
};
async function getPokemon() {
    try {
        const response = await fetch( `${ pokemonAPI }pokemon?limit=1000` );
        const { results } = await response.json();
        results.forEach( async ( pokemon ) => {
            const detailResponse = await fetch( pokemon.url );
            const pokemonData = await detailResponse.json();
            console.log( pokemonData );
            createPokemonCard( pokemonData );

        } );

    } catch ( error ) {
        console.error( '获取宝可梦列表失败:', error );

    }






}
function hexToRgb( hex ) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
    return result ? {
        r: parseInt( result[ 1 ], 16 ),
        g: parseInt( result[ 2 ], 16 ),
        b: parseInt( result[ 3 ], 16 )
    } : null;
}
function getContrastColor( hexColor ) {
    const rgb = hexToRgb( hexColor );
    if ( !rgb ) return '#000000'; // 默认黑色
    const brightness = ( rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 ) / 255;
    return brightness > 0.5 ? '#000000' : '#ffffff';
}

function createPokemonCard( pokemon ) {
    const card = document.createElement( 'div' );
    card.classList.add( 'card' );
    const primaryType = pokemon.types[ 0 ]?.type?.name || 'unknown';
    const backgroundColor = typeColorMap[ primaryType ] || '#f0f0f0';
    card.style.backgroundColor = backgroundColor;

    const textColor = getContrastColor( backgroundColor );
    card.style.color = textColor;

    card.innerHTML = `
    <div class="img-container">
        <img src="${ pokemon.sprites.other[ 'official-artwork' ].front_default }" alt="${ pokemon.name }">

    </div>
    <div class="pokemon-info">
        <h2 class="pokemon-name">${ pokemon.name }</h2>
        <p class="pokemon-id">id:${ pokemon.id.toString().padStart( 4, '0' ) }</p>
        <p class="pokemon-type">type:${ pokemon.types.map( type => type.type.name ).join( ', ' ) }</p>

    </div>
    `;

    container.appendChild( card );

}
getPokemon();