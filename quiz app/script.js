const questions = [
    {
        question: "《进击的巨人》中艾伦·耶格尔可以变成什么巨人？",
        a: "进击的巨人",
        b: "超大型巨人",
        c: "铠之巨人",
        d: "女巨人",
        correct: "a"
    },
    {
        question: "以下哪个是《鬼灭之刃》中灶门祢豆子的血鬼术？",
        a: "水之呼吸",
        b: "爆血",
        c: "雷之呼吸",
        d: "虫之呼吸",
        correct: "b"
    },
    {
        question: "《刀剑神域》主角桐人的标志性武器是？",
        a: "阐释者",
        b: "誓约胜利之剑",
        c: "洞爷湖",
        d: "斩月",
        correct: "a"
    },
    {
        question: "《魔法少女小圆》中QB的真实身份是？",
        a: "时间管理者",
        b: "宇宙生命体",
        c: "魔法师",
        d: "异世界魔王",
        correct: "b"
    },
    {
        question: "以下哪个动画公司制作了《CLANNAD》？",
        a: "京都动画",
        b: "骨头社",
        c: "ufotable",
        d: "Production I.G",
        correct: "a"
    }
];


const questionEl = document.querySelector( 'h2' );
const answersEl = document.querySelectorAll( '#a_text, #b_text, #c_text, #d_text' );
const submitBtn = document.getElementById( 'submit' );

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const q = questions[ currentQuestion ];
    document.querySelector( 'h2' ).textContent = q.question;

    document.getElementById( 'a_text' ).textContent = q.a;
    document.getElementById( 'b_text' ).textContent = q.b;
    document.getElementById( 'c_text' ).textContent = q.c;
    document.getElementById( 'd_text' ).textContent = q.d;
}

function showResult() {
    const quizContainer = document.querySelector( '.quiz-container' );
    quizContainer.innerHTML = `
    <h2>测试结果</h2>
    <div class="result" style="font-size: 3rem; margin-top: 2rem;">
      正确答对：${ score }/${ questions.length }
    </div>
  `;
    submitBtn.textContent = '重载';
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    const quizContainer = document.querySelector( '.quiz-container' );
    quizContainer.innerHTML = `
    <h2>问题</h2>
    <ul>
      ${ [ 'a', 'b', 'c', 'd' ].map( id => `
        <li>
          <input type="radio" id="${ id }" class="answer" name="answer">
          <label for="${ id }" id="${ id }_text"></label>
        </li>
      `).join( '' ) }
    </ul>
  `;
    loadQuestion();
    submitBtn.textContent = '提交';
}

submitBtn.addEventListener( 'click', () => {
    if ( currentQuestion < questions.length ) {
        const selected = document.querySelector( 'input[name="answer"]:checked' );

        if ( !selected ) return alert( '请选择一个答案' );

        if ( selected.id === questions[ currentQuestion ].correct ) {
            score++;
        }

        currentQuestion++;

        if ( currentQuestion < questions.length ) {
            loadQuestion();
            document.querySelectorAll( 'input[name="answer"]' ).forEach( input => input.checked = false );
        } else {
            showResult();
        }
    } else {
        resetQuiz();
    }
} );

// 初始化加载第一题
loadQuestion();