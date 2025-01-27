/**
 * @type {NodeListOf<HTMLElement>}
 */
document.querySelectorAll( '.pannel' ).forEach( pannel => {
    pannel.addEventListener( 'click', () => {
        let isActive = pannel.classList.contains( "active" );
        document.querySelectorAll( '.pannel' ).forEach( p => {
            p.classList.remove( 'active' );
            p.style.transition = 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)';
        } );
        if ( !isActive ) {
            pannel.classList.add( 'active' );
            pannel.style.transition = "all 500ms cubic-bezier(0.4, 0, 0.2, 1)";
        } else {
            pannel.style.transition = "all 600ms cubic-bezier(0.4, 0, 0.2, 1)";
        }
    } );
} )





