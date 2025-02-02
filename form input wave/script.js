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



// 激活label（保持原有逻辑）
function activateLabel( label ) {
    const spans = label.querySelectorAll( 'span' );
    spans.forEach( ( span, index ) => {
        setTimeout( () => {
            span.classList.add( 'active' );
        }, index * 50 );
    } );
}

// 改为反向遍历
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
        labels.forEach( ( otherLabel, otherIndex ) => {
            if ( otherIndex !== index ) {
                // 仅当其他输入框为空时关闭其label
                if ( !inputs[ otherIndex ].value.trim() ) {
                    deactivateLabel( otherLabel );
                }
            }
        } );
        activateLabel( label );
    } );

    input.addEventListener( 'blur', () => {
        if ( !input.value.trim() ) {
            deactivateLabel( label );
        }

    } );
    if ( input.value.trim() ) {
        activateLabel( label );
    }

} );