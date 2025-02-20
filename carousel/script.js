const imgs = document.querySelectorAll( '.img-content img' );
const imgContent = document.querySelector( '.img-content' );
const prevBtn = document.querySelector( '.left-btn' );
const nextBtn = document.querySelector( '.right-btn' );

let idx = 0;
let interval = setInterval( autoRun, 2000 );

function autoRun() {
    idx++;
    changeImg();
}

function changeImg() {
    if ( idx > imgs.length - 1 ) {
        idx = 0;
    } else if ( idx < 0 ) {
        idx = imgs.length - 1;
    }
    imgContent.style.transform = `translateX( -${ idx * 500 }px )`;
}

function resetInterval() {
    clearInterval( interval );
    interval = setInterval( autoRun, 2000 );
}

prevBtn.addEventListener( 'click', () => {
    idx--;
    changeImg();
    resetInterval();
} );

nextBtn.addEventListener( 'click', () => {
    idx++;
    changeImg();
    resetInterval();
} );