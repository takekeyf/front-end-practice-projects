/**
 * @type {NodeListOf<HTMLElement>}
 */
const loveMeImg = document.querySelector( '.love-me-img' );
const loveMe = document.querySelector( '.love-me' );
const countNum = document.querySelector( '.number' );
let count = 0;

loveMeImg.addEventListener( 'dblclick', ( e ) => {
    creatHeart( e );
    count++;
    countNum.textContent = count;
} );
function creatHeart( e ) {
    const heart = document.createElement( 'i' );
    heart.classList.add( 'fas', 'fa-heart' );
    const x = e.clientX;
    const y = e.clientY;
    const rect = e.target.getBoundingClientRect();
    const xInside = x - rect.left;
    const yInside = y - rect.top;
    console.log( xInside, yInside );
    heart.style.top = `${ yInside }px`;
    heart.style.left = `${ xInside }px`;
    loveMe.appendChild( heart );

}