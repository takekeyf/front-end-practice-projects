const addBtn = document.querySelector( '.add' );
const container = document.querySelector( '.container' );
addBtn.addEventListener( 'click', addNote );

function addNote() {
    const note = document.createElement( 'div' );
    note.classList.add( 'note' );
    note.innerHTML = `
    <div class="tools">
        <button class="edit-btn"><i class="fas fa-edit"></i></button>
        <button class="save-btn"><i class="fas fa-save"></i></button>
        <button class="delete-btn"><i class="fas fa-trash"></i></button>

    </div>
    <div class="hidden main"></div>
    <textarea  class="text"></textarea>
    `;
    container.appendChild( note );

    const editBtn = note.querySelector( '.edit-btn' );
    const saveBtn = note.querySelector( '.save-btn' );
    const deleteBtn = note.querySelector( '.delete-btn' );
    const textarea = note.querySelector( 'textarea' );
    const main = note.querySelector( '.main' );

    deleteBtn.addEventListener( 'click', () => {

        note.classList.add( 'fade-out' );
        setTimeout( () => note.remove(), 500 );

    } );
    saveBtn.addEventListener( 'click', () => {
        const textContent = textarea.value;
        const blob = new Blob( [ textContent ], { type: 'text/plain' } );
        const url = URL.createObjectURL( blob );
        const a = document.createElement( 'a' );
        a.href = url;
        a.download = 'note.md';
        a.click();

        a.revokeObjectURL( url );

    } );
    editBtn.addEventListener( 'click', () => {
        if ( textarea.classList.contains( 'hidden' ) ) {
            textarea.classList.remove( 'hidden' );
            main.classList.add( 'hidden' );
        } else {
            const hideText = textarea.value;
            const htmlText = marked.parse( hideText );
            main.innerHTML = htmlText;
            textarea.classList.add( 'hidden' );
            main.classList.remove( 'hidden' );
        }


    } );

}
