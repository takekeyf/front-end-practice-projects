/**
 * @type {NodeListOf<HTMLElement>}
 */
const autoText = document.querySelector( 'h3' );
let idx = 1;
let speed = 200;
const text = 'We Love Programming!';
writeText();
function writeText() {
    autoText.innerHTML = text.slice( 0, idx );
    idx++;
    if ( idx > text.length ) {
        idx = 1;
    }
    setTimeout( writeText, speed );
}