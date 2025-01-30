/**
 * @type {NodeListOf<HTMLElement>}
 */
const bg = document.querySelector( '.bg' );
const loadingText = document.querySelector( '.loading' );
let progress = 0;
const loading = setInterval( () => {
    progress++;
    if ( progress > 100 ) {

        clearInterval( loading );
        bg.style.filter = 'blur(10px)';
        bg.style.transition = 'filter 1s ease';

        bg.style.filter = 'blur(0px)';


    } else {
        loadingText.innerText = `${ progress }%`;
        bg.style.filter = `blur(${ progress * 0.1 }px)`;
    }

}, 30 );