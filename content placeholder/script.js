/**
 * @type {NodeListOf<HTMLElement>}
 */
const cardHeaderImg = document.querySelector( '.card-header' );
const cardContent = document.querySelector( '.card-content' );
const cardTitle = document.querySelector( '.card-title' );
const cardExcerpt = document.querySelector( '.card-excerpt' );
const author = document.querySelector( '.author' );
const profileImg = document.querySelector( '.profile-img' );
const authorName = document.getElementById( 'name' );
const authorDate = document.getElementById( 'date' );

const animated_bgs = document.querySelectorAll( '.animated-bg' );
const animated_bg_texts = document.querySelectorAll( '.animated-bg-text' );

function updateContent() {
    cardHeaderImg.innerHTML = `<img src="/img/content-placeholder/img-001.png">`;
    cardTitle.innerHTML = `银河铁道之夜`;
    cardExcerpt.innerHTML = `虽然是素昧平生，
    但自己愿意将身上所有吃用的东西，
    全部送给她，帮她分担痛苦和忧伤。
    只要捕鸟人能得到真正的幸福，
    自己甚至可以代替他捕捉白鹭，
    哪怕要站上一百年。`;
    profileImg.innerHTML = `<img src="/img/content-placeholder/img-002.png">`;
    authorName.innerHTML = `里见灯花`;
    authorDate.innerHTML = `Oct 08,1999`;


}

function removeLoading() {
    animated_bgs.forEach( ( bg ) => bg.classList.remove( 'animated-bg' ) );
    animated_bg_texts.forEach( ( bg ) => bg.classList.remove( 'animated-bg-text' ) );
}
window.addEventListener( 'click', () => {
    updateContent();
    removeLoading();
} );