const fill = document.querySelector( '.fill' );
const empties = document.querySelectorAll( '.empty' );

fill.addEventListener( 'dragstart', dragStart );
fill.addEventListener( 'dragend', dragEnd );

for ( const empty of empties ) {
    empty.addEventListener( 'dragover', dragOver );
    empty.addEventListener( 'dragenter', dragEnter );
    empty.addEventListener( 'dragleave', dragLeave );
    empty.addEventListener( 'drop', dragDrop );
}
function dragStart( e ) {
    this.classList.add( 'hold' );
    setTimeout( () => {
        this.classList.add( 'invisible' );

    }, 0 );

}

function dragEnd() {
    this.classList.remove( 'invisible' );
    this.classList.remove( 'hold' );
    this.classList.remove( 'hovered' );

}

function dragOver( e ) {
    e.preventDefault();
}

function dragEnter( e ) {
    e.preventDefault();
    this.classList.add( 'hovered' );
}

function dragLeave() {
    this.classList.remove( 'hovered' );

}

function dragDrop( e ) {
    e.preventDefault();
    this.appendChild( fill );
}