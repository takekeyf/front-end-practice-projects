/**
 * @type {NodeListOf<HTMLElement>}
 */
const magicBtn = document.querySelector( '.btn' );
const boxes = document.querySelector( '.boxes' );

function createBox() {
    const boxSize = 150;
    const boxLineNum = 4;
    for ( let i = 0; i < 16; i++ ) {
        const box = document.createElement( 'div' );
        box.classList.add( 'box' );

        const row = Math.floor( i / boxLineNum );
        const col = i % boxLineNum;

        const x = col * ( boxSize / 10 ) + 'rem';
        const y = row * ( boxSize / 10 ) + 'rem';

        box.style.backgroundPosition = `-${ x } -${ y }`;
        boxes.appendChild( box );

    }
}
createBox();
magicBtn.addEventListener( 'click', () => {
    boxes.classList.toggle( 'split' );

} );
