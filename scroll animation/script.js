/**
 * @type {NodeListOf<HTMLElement>}
 */
const container = document.querySelectorAll( '.container' );
window.addEventListener( 'scroll', scrollUpdate );
function scrollUpdate() {
    const scrollH = window.innerHeight;
    container.forEach( item => {
        let itemH = item.getBoundingClientRect().top;
        if ( itemH < scrollH * ( 4 / 5 ) && !item.classList.contains( 'active' ) ) {
            item.classList.add( 'active' );
        } else if ( itemH > scrollH * ( 3 / 5 ) && item.classList.contains( 'active' ) ) {
            item.classList.remove( 'active' );
        }

    } );
};