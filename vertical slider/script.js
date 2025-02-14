/**
 * @type {NodeListOf<HTMLElement>}
 */

const leftSlider = document.querySelector( '.left-slider' );
const rightSlider = document.querySelector( '.right-slider' );
const upButton = document.querySelector( '.up-button' );
const downButton = document.querySelector( '.down-button' );
const slidesLength = rightSlider.querySelectorAll( 'div' ).length;
let activeSlideIndex = 0;
const sliderContainer = document.querySelector( '.container' );
leftSlider.style.top = `-${ ( slidesLength - 1 ) * 100 }vh`;
upButton.addEventListener( 'click', () => changeSlide( 'up' ) );
downButton.addEventListener( 'click', () => changeSlide( 'down' ) );

function changeSlide( direction ) {
    const sliderHeight = sliderContainer.clientHeight;
    activeSlideIndex = direction === 'up' ? activeSlideIndex + 1 : activeSlideIndex - 1;
    if ( activeSlideIndex < 0 ) {
        activeSlideIndex = 0;

    } else if ( activeSlideIndex > slidesLength - 1 ) {
        activeSlideIndex = slidesLength - 1;

    }
    rightSlider.style.transform = `translateY(-${ activeSlideIndex * sliderHeight }px)`;
    leftSlider.style.transform = `translateY(${ activeSlideIndex * sliderHeight }px)`;



}