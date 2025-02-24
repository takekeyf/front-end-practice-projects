const input = document.getElementById( 'filter' );
const result = document.getElementById( 'result' );
let listItems = []; // 修正拼写错误

async function getData() {
    const response = await fetch( 'https://randomuser.me/api?results=50' );
    const data = await response.json();
    const { results } = data;
    result.innerHTML = '';
    listItems = []; // 重置数组

    results.forEach( ( user ) => {
        const li = document.createElement( 'li' );
        listItems.push( li );
        li.innerHTML = `
            <img src="${ user.picture.large }">
            <div class="user-info">
                <h4>${ user.name.first } ${ user.name.last }</h4>
                <small>${ user.location.city }</small>
            </div>
        `;
        result.appendChild( li );
    } );
}

function filterData( searchTerm ) {
    const lowerTerm = searchTerm.toLowerCase();
    listItems.forEach( item => {
        const name = item.querySelector( 'h4' ).textContent.toLowerCase();
        const city = item.querySelector( 'small' ).textContent.toLowerCase();
        const match = name.includes( lowerTerm ) || city.includes( lowerTerm );
        item.classList.toggle( 'hide', !match );
    } );
}

// 添加事件监听
input.addEventListener( 'input', ( e ) => {
    filterData( e.target.value );
} );

getData();