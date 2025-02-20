const square = document.querySelector( '.square' );
const gridNums = 10;
const gridGap = 5;

function calcGridSize( cubeWidth, gap ) {
    return ( cubeWidth - ( gridNums - 1 ) * gap ) / gridNums;
}
function getRandomColor() {
    return '#' + Math.floor( Math.random() * 16777215 ).toString( 16 ).padStart( 6, '0' );
}
function createGrids() {
    const cubeSize = square.clientWidth;

    const gridSize = calcGridSize( cubeSize, gridGap );

    for ( let i = 0; i < gridNums ** 2; i++ ) {
        const grid = document.createElement( 'div' );
        Object.assign( ( grid.style ), {
            width: `${ gridSize }px`,
            height: `${ gridSize }px`,
            backgroundColor: '#fff',


        } );
        grid.addEventListener( 'mouseover', function () {
            this.style.background = getRandomColor();
        } );
        square.appendChild( grid );

    }

}
createGrids();