const codes = document.querySelectorAll( '.code' );
let targetCode = 345878;
function checkCode() {
    const codeInfo = document.querySelector( '.info' );
    const arrayCode = Array.from( codes ).map( code => code.value );
    if ( arrayCode.every( c => c ) ) {
        const enteredCode = parseInt( arrayCode.join( '' ) );
        if ( enteredCode === targetCode ) {
            codeInfo.textContent = '输入正确';
            codeInfo.classList.add( 'active' );
        } else {
            codeInfo.textContent = '输入错误';
            codeInfo.classList.add( 'active' );
            setTimeout( () => {
                codeInfo.classList.remove( 'active' );
            }, 2000 );
        }
    } else {
        codeInfo.classList.remove( 'active' );
    }
}

codes.forEach( ( code, idx ) => {
    code.addEventListener( 'input', ( e ) => {
        let value = e.target.value.replace( /\D/g, '' );
        value = value.slice( 0, 1 );
        e.target.value = value;
        if ( value && idx < codes.length - 1 ) {
            codes[ idx + 1 ].focus();
        }
        checkCode();

    } );
    code.addEventListener( 'keydown', ( e ) => {
        if ( !e.target.value && e.key === 'Backspace' && idx > 0 ) {
            codes[ idx - 1 ].focus();

        }
    } );
    codes[ 0 ].addEventListener( 'paste', ( e ) => {
        e.preventDefault();
        const paste = e.clipboardData.getData( 'text' ).replace( /\D/g, '' );
        paste.split( '' ).forEach( ( char, idx ) => {
            codes[ idx ].value = char;

        } );

        checkCode();
    } );

} );