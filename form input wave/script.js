const inputs = document.querySelectorAll( '.form-control input' );
const labels = document.querySelectorAll( '.form-control label' );

// 初始化：检查输入框是否有内容
function initLabels() {
    inputs.forEach( ( input, index ) => {
        if ( input.value.trim() ) {
            activateLabel( labels[ index ] );
        }
    } );
}

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

// 初始化执行
initLabels();

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

// 修改检查逻辑：仅在输入为空且失去焦点时复原
function checkDeactivate( label, input ) {
    if ( !input.value.trim() && document.activeElement !== input ) {
        deactivateLabel( label );
    }
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

    input.addEventListener( 'blur', () => checkDeactivate( label, input ) );
    input.addEventListener( 'input', () => {
        if ( input.value.trim() ) {
            activateLabel( label );
        } else {
            checkDeactivate( label, input );
        }
    } );
} );