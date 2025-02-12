/**
 * @type {NodeListOf<HTMLElement>}
 */
const canvas = document.querySelector( '.canvas' );
const ctx = canvas.getContext( '2d' );
const lineWidth = document.querySelector( '.size' );
const inputColor = document.querySelector( '.colors' );
const increaseBtn = document.querySelector( '.increase' );
const decreaseBtn = document.querySelector( '.decrease' );
const clearBtn = document.querySelector( '.quit' );
canvas.width = 600;
canvas.height = 600;

let size = parseInt( lineWidth.textContent ) || 10;
let color = '#000';
inputColor.value = color;
let isPress = false;
let lastX = 0;
let lastY = 0;


canvas.addEventListener( 'mousedown', mouseStart );
canvas.addEventListener( 'mousemove', mouseMove );
canvas.addEventListener( 'mouseup', mouseEnd );
canvas.addEventListener( 'mouseout', mouseEnd );

increaseBtn.addEventListener( 'click', increaseSize );
decreaseBtn.addEventListener( 'click', decreaseSize );
inputColor.addEventListener( 'change', changeColor );
clearBtn.addEventListener( 'click', clearCanvas );


function mouseStart( e ) {
    isPress = true;
    [ lastX, lastY ] = [ e.offsetX, e.offsetY ];
    ctx.moveTo( lastX, lastY );
    ctx.beginPath();
    ctx.lineWidth = size;
    ctx.strokeStyle = color;

}
function mouseMove( e ) {
    if ( !isPress ) return;
    ctx.lineTo( e.offsetX, e.offsetY );
    ctx.stroke();

    [ lastX, lastY ] = [ e.offsetX, e.offsetY ];
}

function mouseEnd( e ) {
    isPress = false;
    ctx.closePath();
}
function increaseSize() {
    size = Math.min( 50, size + 1 );

    lineWidth.textContent = size;



}
function decreaseSize() {
    size = Math.max( 0, size - 1 );

    lineWidth.textContent = size;

}
function changeColor( e ) {
    color = e.target.value;
}
function clearCanvas() {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
}


