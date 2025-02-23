const codes = document.querySelectorAll( '.code' );
let targetCode = 235789;

// 输入验证和焦点转移
codes.forEach( ( code, index ) => {
    code.addEventListener( 'input', ( e ) => {
        // 清除非数字字符并限制长度
        let value = e.target.value.replace( /\D/g, '' );
        value = value.slice( 0, 1 );
        e.target.value = value;

        // 自动跳转下一个输入框
        if ( value && index < codes.length - 1 ) {
            codes[ index + 1 ].focus();
        }

        checkCode(); // 实时验证
    } );

    // 处理退格键
    code.addEventListener( 'keydown', ( e ) => {
        if ( e.key === 'Backspace' && !e.target.value && index > 0 ) {
            codes[ index - 1 ].focus();
        }
    } );
} );

// 处理粘贴操作
codes[ 0 ].addEventListener( 'paste', ( e ) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData( 'text' ).replace( /\D/g, '' );
    pasteData.split( '' ).slice( 0, codes.length ).forEach( ( char, i ) => {
        codes[ i ].value = char;
    } );
    codes[ codes.length - 1 ].focus();
    checkCode();
} );

// 验证函数
function checkCode() {
    const info = document.querySelector( '.info' );
    const codeArray = Array.from( codes ).map( input => input.value );

    // 验证条件
    if ( codeArray.every( c => c ) ) { // 所有输入框已填
        const enteredCode = parseInt( codeArray.join( '' ) );

        if ( enteredCode === targetCode ) {
            info.textContent = '输入正确';
            info.classList.add( 'active' );
        } else {
            info.textContent = '验证码错误，请重新输入';
            info.classList.add( 'active' );
            setTimeout( () => info.classList.remove( 'active' ), 2000 );
        }
    } else {
        info.classList.remove( 'active' );
    }
}