/**
 * @type {NodeListOf<HTMLElement>}
 */
const openBtn = document.getElementById( 'open' );
const closeBtn = document.getElementById( 'close' );
const container = document.querySelector( '.container' );
const nav = document.querySelector( '.navigation' );
function openNav() {
    container.classList.toggle( 'rote-container' );
    nav.classList.toggle( 'active' );
}
function closeNav() {
    container.classList.remove( 'rote-container' );
    nav.classList.remove( 'active' );

}
openBtn.addEventListener( 'click', openNav );
closeBtn.addEventListener( 'click', closeNav );