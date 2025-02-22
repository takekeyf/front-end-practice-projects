/**
 * @type {NodeListOf<HTMLElement>}
 */
function initBlurControl() {
    const input = document.getElementById( 'input1' );
    const back = document.querySelector( '.back' );
    const config = {
        maxBlur: 20,
        minBlur: 0,
        maxChar: 20,
        transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    };
    back.computedStyleMap.transition = `filter${ config.transition }`;
    updateBlur();
    [ 'input', 'change', 'paste' ].forEach( event => {
        input.addEventListener( event, updateBlur );
    } );
    function updateBlur() {
        const currentLength = Math.min( input.value.length, config.maxChar );
        const blurProgress = currentLength / config.maxChar;
        const blurValue = config.maxBlur - ( blurProgress * config.maxBlur );
        back.style.filter = `blur(${ Math.max( config.minBlur, blurValue ) }px)`;
    }
}
document.addEventListener( 'DOMContentLoaded', initBlurControl );