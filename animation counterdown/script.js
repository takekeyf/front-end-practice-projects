const nums = document.querySelectorAll( ".counter span" );
const replayBtn = document.querySelector( '#replay' );  // Corrected line
const h3 = document.querySelector( 'h3' );
const h1 = document.querySelector( 'h1' );

function counterDown() {

    h1.classList.remove( 'show', 'hide' );
    nums.forEach( num => num.classList.remove( 'in' ) );

    nums.forEach( ( num, idx ) => {
        setTimeout( () => {
            num.classList.add( 'in' );
        }, idx * 1000 );
    } );

    setTimeout( () => {
        h1.classList.add( 'show' );

    }, nums.length * 1000 );
}

replayBtn.addEventListener( 'click', counterDown );
counterDown();
