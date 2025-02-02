const inputs = document.querySelectorAll( '.form-control input' );
const labels = document.querySelectorAll( '.form-control label' );



// 逐个字符分割label
labels.forEach( ( label ) => {
    const text = label.textContent;
    label.innerHTML = '';
    text.split( '' ).forEach( ( char, charIndex ) => {
        const span = document.createElement( 'span' );
        span.textContent = char;
        label.appendChild( span );
    } );
} );



// 激活label的动画效果
function activateLabel( label ) {
    const spans = label.querySelectorAll( 'span' );
    spans.forEach( ( span, index ) => {
        setTimeout( () => {
            span.classList.add( 'active' );
        }, index * 50 );
    } );
}

// 反向遍历label，逐个字符移除active类
function deactivateLabel( label ) {
    const spans = label.querySelectorAll( 'span' );
    Array.from( spans ).reverse().forEach( ( span, index ) => {
        setTimeout( () => {
            span.classList.remove( 'active' );
        }, index * 80 );
    } );
}



// 事件监听
inputs.forEach( ( input, index ) => {
    const label = labels[ index ];

    input.addEventListener( 'focus', () => {

        activateLabel( label );
    } );

    input.addEventListener( 'blur', () => {
        if ( !input.value.trim() ) {
            deactivateLabel( label );
        }

    } );


} );