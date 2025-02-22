/**
 * @type {NodeListOf<HTMLElement>}
 */
const homeBtn = document.querySelector( '.fa-home' );
const workBtn = document.querySelector( '.fa-box' );
const bolgBtn = document.querySelector( '.fa-book' );
const aboutBtn = document.querySelector( '.fa-user' );

const imgs = document.querySelectorAll( '.content img' );

const buttons = [ homeBtn, workBtn, bolgBtn, aboutBtn ];
buttons.forEach( ( btn, idx ) => {
    btn.addEventListener( 'click', () => {
        imgs.forEach( img => img.classList.remove( 'active' ) );
        imgs[ idx ].classList.add( 'active' );
    } );
} );