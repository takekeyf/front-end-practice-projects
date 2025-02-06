/**
 * @type {NodeListOf<HTMLElement>}
 */
const counters = document.querySelectorAll( '.counter' );
const icons = document.querySelectorAll( 'i' );
const btn = document.querySelector( '.btn' );
let isRunning = false;

counters.forEach( ( counter, idx ) => {
    const icon = icons[ idx ];
    let counterValue = 0;
    icon.addEventListener( 'click', () => {
        counterValue++;
        counter.textContent = counterValue;
    }
    );
} );
btn.addEventListener( 'click', () => {
    if ( isRunning ) return;
    isRunning = true;
    btn.disabled = true;



    counters.forEach( ( counter ) => {

        let currentNum = parseInt( Math.ceil( counter.textContent ) );
        let targetNum = parseInt( Math.ceil( counter.getAttribute( 'data-target' ) ) );
        let step = Math.ceil( ( targetNum - currentNum ) / 100 );

        let updateNum = setInterval( () => {
            currentNum += step;
            counter.textContent = currentNum;
            if ( currentNum >= targetNum ) {
                counter.textContent = targetNum;
                clearInterval( updateNum );
                isRunning = false;

                btn.disabled = false;
            }
        }, 10 );
    } );
} );