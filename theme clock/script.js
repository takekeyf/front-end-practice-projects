/**
 * @type {NodeListOf<HTMLElement>}
 */
const toggle = document.querySelector( '.toggle' );
const hourEl = document.querySelector( '.hour' );
const minuteEl = document.querySelector( '.minute' );
const secondEl = document.querySelector( '.second' );
const timeEl = document.querySelector( '.time' );
const dateEl = document.querySelector( '.date' );

toggle.addEventListener( 'click', ( e ) => {

    const html = document.querySelector( 'html' );
    html.classList.toggle( 'dark' );
    toggle.innerHTML = html.classList.contains( 'dark' ) ? 'Light mode' : 'Dark mode';
} );

const days = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];
const months = [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' ];

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = days[ now.getDay() ];
    const month = months[ now.getMonth() ];
    const date = now.getDate();
    const empm = hours >= 12 ? 'PM' : 'AM';

    //让秒针追赶上数字时钟的秒针
    let secondDeg = seconds * ( 360 / 60 );
    //先让分针追赶上数字时钟的分针，再缓慢移动，1s移动0.1度
    let minuteDeg = minutes * 6 + seconds * ( 360 / 60 / 60 );
    //先让时针追赶上数字时钟的时针，再缓慢移动，1分钟移动0.5度
    let hourDeg = hours * 30 + minutes * ( 360 / 12 / 60 );

    // 更新时钟显示
    secondEl.style.transform = `translate(-50%, -100%) rotate(${ secondDeg }deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${ minuteDeg }deg)`;
    hourEl.style.transform = `translate(-50%, -100%) rotate(${ hourDeg }deg)`;

    // 更新日期显示
    dateEl.innerHTML = `${ day }, ${ month } <span class="circle">${ date }</span>`;
    timeEl.innerHTML = `${ hours }:${ minutes.toString().padStart( 2, '0' ) } ${ empm }`;


}
updateClock();
setInterval( updateClock, 1000 );