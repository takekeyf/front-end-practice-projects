/**
 * @type {NodeListOf<HTMLElement>}
 */
const openBtn = document.querySelector( '.open-btn' );
const closeBtn = document.querySelector( '.close-btn' );
const redNav = document.querySelector( '.nav-red' );
const blackNav = document.querySelector( '.nav-black' );
const whiteNav = document.querySelector( '.nav-white' );

openBtn.addEventListener( 'click', () => {
    blackNav.classList.add( 'visible' );
    setTimeout( () => {
        redNav.classList.add( 'visible' );
    }, 150 );
    setTimeout( () => {
        whiteNav.classList.add( 'visible' );
    }, 300 );
} );
closeBtn.addEventListener( 'click', () => {
    whiteNav.classList.remove( 'visible' );
    setTimeout( () => { redNav.classList.remove( 'visible' ); }, 150 );
    setTimeout( () => { blackNav.classList.remove( 'visible' ); }, 300 );
} );