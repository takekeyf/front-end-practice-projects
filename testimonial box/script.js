/**
 * @type {NodeListOf<HTMLElement>}
 */
const philosophyBookReviews = [
    {
        comment: "海德格尔的《存在与时间》彻底颠覆了我对'存在'的认知——我们不是'拥有'时间，而是'成为'时间本身。那把未完成的锤子，原来早已道破此在与世界的纠缠。",
        userImg: "/img/testimonial-box/img-001.png",
        date: "2023-08-20",
        name: "John Doe"
    },
    {
        comment: "当查拉图斯特拉从山上走下，他携带的不是真理而是疑问。《查拉图斯特拉如是说》像一面棱镜，尼采让我们看见：所谓超人，不过是不断超越自己的过程。",
        userImg: "/img/testimonial-box/img-002.png",
        date: "2023-07-15",
        name: "Jane Smith"
    },
    {
        comment: "柏拉图用洞穴寓言击中了认知的软肋，《理想国》里哲人王的困境至今无解：当我们挣脱锁链直面太阳，该如何向穴中人描述光明？",
        userImg: "/img/testimonial-box/img-003.png",
        date: "2023-06-02",
        name: "Alice Johnson"
    },
    {
        comment: "《道德经》的'反者道之动'像宇宙呼吸的韵律。读罢方知：最深邃的哲学从不论证，它只是温柔地掀开世界帷幕的一角。",
        userImg: "/img/testimonial-box/img-004.png",
        date: "2023-05-18",
        name: "Bob Brown"
    },
    {
        comment: "马可·奥勒留在《沉思录》中雕刻时光：'宇宙是流变，生活即意见'。这位皇帝哲学家在戎马间写下的箴言，让斯多葛主义有了温度。",
        userImg: "/img/testimonial-box/img-005.png",
        date: "2023-04-09",
        name: "Charlie Davis"
    }
];
let currentIndex = 0;
const bar = document.querySelector( '.progress-bar' );
function loadComment() {
    const C = philosophyBookReviews[ currentIndex ];
    document.querySelector( '.text' ).textContent = C.comment;
    document.querySelector( '.user-img' ).src = C.userImg;
    document.querySelector( '.date' ).textContent = C.date;
    document.querySelector( '.user-name' ).textContent = C.name;

}
function toggleComment() {
    loadComment();
    currentIndex = ( currentIndex + 1 ) % philosophyBookReviews.length;
    setTimeout( toggleComment, 5000 );



}
toggleComment();