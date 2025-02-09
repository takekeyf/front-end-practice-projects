/**
 * @type {NodeListOf<HTMLElement>}
 */

const search = document.querySelector( '.search' );
const container = document.querySelector( 'main' );

search.addEventListener( 'keyup', async ( e ) => {
    if ( e.key === 'Enter' ) {
        searchAnime( e.target.value );
    }
} );

function createCard( data ) {
    const card = document.createElement( 'div' );
    card.className = 'container-card';
    let color = '';
    data.score >= 9 ? color = 'green' : data.score >= 8 ? color = 'blue' : color = 'red';

    card.innerHTML =
        `  <div class="front">
            <img src="${ data.images.jpg.image_url }">
            <div class="anime-info">
              <h3>${ data.title.substring( 0, 20 ) }</h3>
             <span class="score ${ color }">${ data.score }</span>
             </div>
            <div class="overview">
               
                <p>${ data.synopsis.trim() }</p>
            </div>

            </div>
            <div class="back">
                <p>“${ data.synopsis.substring( 0, 50 ) }...”</p>
            </div>`;
    card.addEventListener( 'click', () => {
        card.classList.toggle( 'active' );
    }
    );
    return card;

}
async function searchAnime( anime ) {
    const response = await fetch( `https://api.jikan.moe/v4/anime?q=${ anime }&sfw` );
    const data = await response.json();
    const animeData = data.data;
    animeData.forEach( anime => {
        const card = createCard( anime );
        container.innerHTML = '';
        container.appendChild( card );
    } );


}
async function loadAnime() {
    try {
        const response = await fetch( 'https://api.jikan.moe/v4/seasons/now' );
        const data = await response.json();
        const animeData = data.data;
        animeData.forEach( anime => {
            const card = createCard( anime );
            container.appendChild( card );
        } );
    } catch ( error ) { console.log( error ); }


}

window.addEventListener( 'load', loadAnime );
