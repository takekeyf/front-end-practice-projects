/**
 * @type {NodeListOf<HTMLElement>}
 */
// 字符类型定义
const characterSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    digits: '0123456789',
    special: '!@#$%^&*()-_=+[]{}|;:,.<>?/`~'
};
//DOM元素类型定义
const passwordEl = document.getElementById( 'password' );
const lengthEl = document.getElementById( 'length' );
const uppercaseEl = document.getElementById( 'uppercase' );
const lowercaseEl = document.getElementById( 'lowercase' );
const numbersEl = document.getElementById( 'numbers' );
const symbolsEl = document.getElementById( 'symbols' );
const generateBtn = document.getElementById( 'generate' );
const copyBtn = document.getElementById( 'copy' );

// 密码生成函数
function createRandomPassword() {
    const length = lengthEl.value || 12;
    let char = '';
    let hasUpper = uppercaseEl.checked;
    let hasLower = lowercaseEl.checked;
    let hasNumber = numbersEl.checked;
    let hasSymbol = symbolsEl.checked;

    if ( hasUpper ) char += characterSets.uppercase;
    if ( hasLower ) char += characterSets.lowercase;
    if ( hasNumber ) char += characterSets.digits;
    if ( hasSymbol ) char += characterSets.special;

    if ( char.length === 0 ) return '请选择至少一种字符类型';

    let password = '';

    for ( let i = 0; i < length; i++ ) {
        password += char[ Math.floor( Math.random() * char.length ) ];

    }
    return password;
}
//监听
generateBtn.addEventListener( 'click', () => {
    passwordEl.value = createRandomPassword();
} );

copyBtn.addEventListener( 'click', () => {
    passwordEl.select();
    navigator.clipboard.writeText( passwordEl.value )
        .then( () => console.log( '复制成功' ) )
        .catch( err => alert( '复制失败:', err ) );
} );
lengthEl.value = 12;
