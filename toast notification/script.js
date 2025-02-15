/**
 * @type {NodeListOf<HTMLElement>}
 */
// script.js 完整代码
const showBtn = document.querySelector( '.show-button' );
let num = 0;
showBtn.addEventListener( 'click', () => {
    creatToast();
} );

function creatToast() {
    const toast = document.createElement( 'div' );
    const container = document.querySelector( '.toast-container' );
    toast.className = 'toast show';
    toast.innerHTML =
        `<div class="notification-content">欧嗨哟,sakura${ num }</div>
       
        <i class="fa-solid fa-xmark close-icon"></i>`;
    toast.querySelector( '.close-icon' ).addEventListener( 'click', () => {
        removeToast( toast );
    } );
    setTimeout( () => {
        removeToast( toast );
    }, 5000 );

    num++;
    container.insertBefore( toast, container.firstChild );
    updateToastPosition();
}
function removeToast( toast ) {
    toast.classList.add( 'hide' );
    toast.classList.remove( 'show' );
    toast.addEventListener( 'transitionend', () => {
        toast.remove();
        updateToastPosition();
    } );


}
function updateToastPosition() {
    const totals = document.querySelectorAll( '.toast' );
    totals.forEach( ( toast, index ) => {
        const offest = index * 80;
        toast.style.bottom = `${ offest }px`;
    } );
}