const sliders = document.querySelectorAll( '.slider' );
const body = document.querySelector( 'body' );
const leftBtn = document.querySelector( '.left' );
const rightBtn = document.querySelector( '.right' );

let activeSlide = 0;

function setBackImg( num ) {
    body.style.backgroundImage = sliders[ num ].style.backgroundImage;
}

function setActiveSlide( num ) {
    sliders.forEach( slider => slider.classList.remove( 'active' ) );
    sliders[ num ].classList.add( 'active' );
}

window.onload = function () {
    if ( sliders.length === 0 ) {
        console.error( 'No sliders found in DOM' );
        return;
    }

    setActiveSlide( activeSlide );
    setBackImg( activeSlide );

    leftBtn.addEventListener( 'click', () => {
        activeSlide = ( activeSlide - 1 + sliders.length ) % sliders.length;
        setActiveSlide( activeSlide );
        setBackImg( activeSlide );
    } );

    rightBtn.addEventListener( 'click', () => {
        activeSlide = ( activeSlide + 1 ) % sliders.length;
        setActiveSlide( activeSlide );
        setBackImg( activeSlide );
    } );
};