/**
 * @type {NodeListOf<HTMLElement>}
 */

const chevrons = document.querySelectorAll( '.faq-toggle .fa-chevron-down' );
const times = document.querySelectorAll( '.faq-toggle .fa-times' );
const faqs = document.querySelectorAll( '.faq' );
chevrons.forEach( ( chevron, idx ) => {
    chevron.addEventListener( 'click', () => {
        faqs[ idx ].classList.add( 'active' );
    } );

} );
times.forEach( ( time, idx ) => {
    time.addEventListener( 'click', () => {
        faqs[ idx ].classList.remove( 'active' );
    } );

} );