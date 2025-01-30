/**
 * @type {NodeListOf<HTMLElement>}
 */
const openBtn = document.querySelector( '.btn' );
const search = document.querySelector( '.search' );
openBtn.addEventListener( 'click', () => {
    search.classList.toggle( 'active' );

} );