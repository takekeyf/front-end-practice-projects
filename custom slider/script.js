/**
 * @type {NodeListOf<HTMLElement>}
 */
const info = document.querySelector( '.info-panel' );
const slider = document.getElementById( 'custom-slider' );

info.textContent = slider.value;
slider.addEventListener( 'input', ( e ) => {
    info.textContent = e.target.value;
} );