/**
 * @type {NodeListOf<HTMLElement>}
 */

const container = document.querySelector( '.container' );
window.addEventListener( 'keydown', ( e ) => {
    container.innerHTML = `
       <div class="info-label">
             ${ e.key === ' ' ? 'Space' : e.key }<br><small>event.key</small>

        </div>
        <div class="info-label">
            ${ e.keyCode }<br><small>event.keyCode</small>
        </div>
        <div class="info-label">
            ${ e.code }<br><small>event.code</small>
        </div>`;

} );;