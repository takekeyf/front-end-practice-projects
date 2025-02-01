/**
 * @type {NodeListOf<HTMLElement>}
 */
const container = document.querySelector( '.container' );

const leftSplits = document.querySelectorAll( '.split.left' );
const rightSplits = document.querySelectorAll( '.split.right' );


leftSplits.forEach( ( split ) => {
    split.addEventListener( 'mouseenter', () => {
        container.classList.add( 'left-active' );
    } );
    split.addEventListener( 'mouseleave', () => {
        container.classList.remove( 'left-active' );
    } );
} );

rightSplits.forEach( ( split ) => {
    split.addEventListener( 'mouseenter', () => {
        container.classList.add( 'right-active' );
    } );
    split.addEventListener( 'mouseleave', () => {
        container.classList.remove( 'right-active' );
    } );
} );