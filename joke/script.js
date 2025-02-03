/**
 * @type {NodeListOf<HTMLElement>}
 */
const joke = document.getElementById( "joke" );
const jokeBtn = document.getElementById( "jokeBtn" );

jokeBtn.addEventListener( "click", generateJoke );
generateJoke();


async function generateJoke() {
    try {
        const config = { headers: { 'Accept': 'application/json' } };
        const response = await fetch( 'https://icanhazdadjoke.com', config );
        const data = await response.json();
        joke.textContent = data.joke;
    } catch ( error ) {
        joke.textContent = "No Net";
        console.error( error );
    }
}
