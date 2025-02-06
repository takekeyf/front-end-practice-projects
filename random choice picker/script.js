const textarea = document.getElementById( 'textarea' );
const tags = document.getElementById( 'tags' );
const btn = document.getElementById( 'btn' );
let isRunning = false;

textarea.addEventListener( 'keydown', ( e ) => {
    const tagsArray = e.target.value;
    const tagsArraySplit = tagsArray.split( ',' )
        .filter( tag => tag.trim() !== '' )
        .map( tag => tag.trim() );
    let tagsContent = '';
    tagsArraySplit.forEach( tag => {
        tagsContent += `<span class="tag">${ tag }</span>`;

    } );
    tags.innerHTML = tagsContent;
} );

btn.addEventListener( 'click', () => {
    if ( isRunning ) return;
    isRunning = true;
    btn.disabled = true;
    const tagElements = tags.querySelectorAll( '.tag' );

    const highlightArray = setInterval( () => {
        const randTag = tagElements[ Math.floor( Math.random() * tagElements.length ) ];
        tagElements.forEach( tag => tag.classList.remove( 'highlight' ) );
        randTag.classList.add( 'highlight' );
    }, 100 );
    setTimeout( () => {
        clearInterval( highlightArray );
        const randTag = tagElements[ Math.floor( Math.random() * tagElements.length ) ];
        isRunning = false;
        btn.disabled = false;
        tagElements.forEach( tag => tag.classList.remove( 'highlight' ) );
        randTag.classList.add( 'highlight' );

    }, 1000 );


} );