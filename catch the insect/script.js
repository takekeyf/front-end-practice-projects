// script.js
let currentBugType = 'bug1';
let score = 0;
let timeLeft = 60;
let gameTimer;
let gameActive = false;

// 页面元素
const screens = document.querySelectorAll( '.screen' );
const startBtn = document.querySelector( '#start-btn' );
const bugOptions = document.querySelectorAll( '.bug-option' );
const gameArea = document.querySelector( '#game-area' );
const messageOverlay = document.querySelector( '#message-overlay' );
const messageText = document.querySelector( '#message-text' );
const scoreElement = document.querySelector( '#score' );
const timerElement = document.querySelector( '#timer' );

// 游戏控制函数
function switchScreen( from, to ) {
    screens[ from ].classList.remove( 'active' );
    screens[ to ].classList.add( 'active' );
}

function createBug() {
    const bug = document.createElement( 'img' );
    bug.src = `images/${ currentBugType }.png`;
    bug.className = 'bug';
    bug.style.width = '50px';
    bug.style.position = 'absolute';

    // 随机位置和旋转
    const x = Math.random() * ( gameArea.offsetWidth - 50 );
    const y = Math.random() * ( gameArea.offsetHeight - 50 );
    const rotate = Math.random() * 360;

    bug.style.left = `${ x }px`;
    bug.style.top = `${ y }px`;
    bug.style.transform = `rotate(${ rotate }deg)`;

    // 添加随机移动
    setTimeout( () => {
        if ( gameActive ) {
            const newX = Math.random() * ( gameArea.offsetWidth - 50 );
            const newY = Math.random() * ( gameArea.offsetHeight - 50 );
            bug.style.transition = 'left 2s, top 2s';
            bug.style.left = `${ newX }px`;
            bug.style.top = `${ newY }px`;
        }
    }, Math.random() * 2000 + 1000 );

    gameArea.appendChild( bug );
}

function startGame() {
    gameActive = true;
    score = 0;
    scoreElement.textContent = score;

    // 清空游戏区域
    gameArea.innerHTML = '';

    // 生成初始虫子
    for ( let i = 0; i < 5; i++ ) {
        createBug();
    }

    // 设置计时器
    gameTimer = setInterval( () => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if ( timeLeft <= 0 ) {
            endGame();
        }
    }, 1000 );
}

function endGame() {
    gameActive = false;
    clearInterval( gameTimer );

    // 显示结束消息
    showMessage( '游戏结束', `你的得分是: ${ score }`, '再玩一次' );
}

function showMessage( title, message, buttonText ) {
    const messageBox = document.querySelector( '.message-box' );
    messageBox.innerHTML = `
        <h2>${ title }</h2>
        <p>${ message }</p>
        <button id="message-btn">${ buttonText }</button>
    `;

    document.getElementById( 'message-btn' ).addEventListener( 'click', () => {
        messageOverlay.style.display = 'none';
        if ( !gameActive ) {
            resetGame();
        }
    } );

    messageOverlay.style.display = 'flex';
}

function resetGame() {
    timeLeft = 60;
    score = 0;
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;
    switchScreen( 2, 0 );
}

// 事件监听
startBtn.addEventListener( 'click', () => switchScreen( 0, 1 ) );

bugOptions.forEach( option => {
    option.addEventListener( 'click', ( e ) => {
        currentBugType = e.target.dataset.type || e.target.parentElement.dataset.type;
        switchScreen( 1, 2 );
        showMessage( '准备开始', '点击按钮开始游戏！', '开始' );
    } );
} );

// 动态元素点击处理
gameArea.addEventListener( 'click', ( e ) => {
    if ( e.target.classList.contains( 'bug' ) && gameActive ) {
        // 移除被点击的虫子
        e.target.remove();
        score += 10;
        scoreElement.textContent = score;

        // 生成新虫子（数量随机1-3个）
        const newBugs = Math.floor( Math.random() * 3 ) + 1;
        for ( let i = 0; i < newBugs; i++ ) {
            createBug();
        }
    }
} );