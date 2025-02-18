/**
 * @type {NodeListOf<HTMLElement>}
 */
const toggles = document.querySelectorAll( '.toggle' );
let MAX_SELECTED = 2;
let selected = [];

function handleCheckBoxChange() {
    if ( this.checked ) {
        selected.push( this );
    } else {
        selected = selected.filter( item => item !== this );
    }

    if ( selected.length > MAX_SELECTED ) {
        const oldSelected = selected.shift();
        oldSelected.checked = false;


    }
}
toggles.forEach( toggle => toggle.addEventListener( 'change', handleCheckBoxChange ) );