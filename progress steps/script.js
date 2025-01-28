// 获取dom元素
const progress = document.getElementById( 'progress' );
const circles = document.querySelectorAll( '.circle' );
const next = document.getElementById( "next" );
const prev = document.getElementById( "prev" );

let currentIndex = 0;

function updateCircle() {
    circles.forEach( ( circle, index ) => {
        circle.classList.toggle( 'active', index <= currentIndex );
    } );

}
function updateProgress() {
    const totalSteps = circles.length;
    const percent = ( currentIndex / ( totalSteps - 1 ) ) * 100;
    progress.style.width = `${ percent }%`;
}
next.addEventListener( 'click', () => {
    currentIndex++;

    updateCircle();
    updateProgress();
    prev.disabled = currentIndex === 0;
    next.disabled = currentIndex === circles.length - 1;

}

);
prev.addEventListener( "click", () => {
    currentIndex--;
    next.disabled = currentIndex === circles.length - 1;
    prev.disabled = currentIndex === 0;

    updateCircle();
    updateProgress();

} );