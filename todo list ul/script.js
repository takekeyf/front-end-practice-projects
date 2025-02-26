/**
 * @type {NodeListOf<HTMLElement>}
 */
const input = document.querySelector( '#todo-input' );
const listContainer = document.querySelector( 'ul' );

input.addEventListener( 'keydown', ( e ) => {
    if ( e.key === 'Enter' ) {
        e.preventDefault();
        addTask( input.value );
        input.value = '';

    }
} );




function addTask( value ) {
    const li = document.createElement( 'li' );
    li.textContent = value.toString();
    //将后面的元素插入到前面的元素前面
    listContainer.insertBefore( li, listContainer.firstChild );

}

