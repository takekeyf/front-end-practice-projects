/**
 * @type {NodeListOf<HTMLElement>}
 */
const emojis = document.querySelectorAll( '.emoji' );
const backBtn = document.querySelector( '.btn' );

emojis.forEach( emoji => {
    emoji.addEventListener( 'click', () => {
        initBtn();
        emojis.forEach( emoji => emoji.classList.remove( 'active' ) );
        emoji.classList.add( 'active' );
        backBtn.addEventListener( 'click', () => {
            emoji.classList.remove( 'active' );
            backBtn.textContent = '已提交';
            backBtn.style.backgroundColor = 'gray';


        } );
    } );
} );
function initBtn() {
    backBtn.textContent = '提交';
    backBtn.style.backgroundColor = 'aquamarine';
}