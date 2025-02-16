const form = document.querySelector( '.user-form' );
const searchInput = document.querySelector( '.search' );
const main = document.querySelector( '.main' );
const axiosAPI = 'https://api.github.com/users/';
const axiosRepos = '/repos?sort=created';

form.addEventListener( 'keydown', async ( event ) => {
    if ( event.key === 'Enter' ) {
        event.preventDefault();
        const username = searchInput.value.trim();

        if ( !username ) return;

        try {
            main.innerHTML = '<div class="card">Loading...</div>';
            const userInfo = await fetchUserData( username );
            const repos = await fetchUserRepos( username );
            displayUser( userInfo, repos );
        } catch ( error ) {
            main.innerHTML = `<div class="card error">${ error.message }</div>`;
        }
    }
} );

async function fetchUserData( username ) {
    try {
        const response = await axios.get( axiosAPI + username );
        return response.data;
    } catch ( error ) {
        if ( error.response?.status === 404 ) {
            throw new Error( 'User not found' );
        } else if ( error.response?.status === 403 ) {
            throw new Error( 'API Rate limit exceeded' );
        }
        throw new Error( 'Error fetching user data' );
    }
}

async function fetchUserRepos( username ) {
    try {
        const response = await axios.get( axiosAPI + username + axiosRepos );
        return response.data;
    } catch ( error ) {
        if ( error.response?.status === 403 ) {
            throw new Error( 'API Rate limit exceeded' );
        }
        throw new Error( 'Error fetching repositories' );
    }
}

function displayUser( userData, userRepos ) {
    const card = document.createElement( 'div' );
    card.className = 'card';

    card.innerHTML = `
                <img src="${ userData.avatar_url }" class="avatar" alt="Avatar">
                <div class="user">
                    <div class="user-info">
                        <h2>${ userData.name || userData.login }</h2>
                        <p>${ userData.bio || 'No bio available' }</p>
                    </div>
                    <ul>
                        <li>${ userData.followers } <strong>Followers</strong></li>
                        <li>${ userData.following } <strong>Following</strong></li>
                        <li>${ userData.public_repos } <strong>Repos</strong></li>
                    </ul>
                    <div class="repos"></div>
                </div>
            `;

    const reposContainer = card.querySelector( '.repos' );
    userRepos.slice( 0, 12 ).forEach( repo => {
        const repoLink = document.createElement( 'a' );
        repoLink.className = 'repo';
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        repoLink.textContent = repo.name;
        reposContainer.appendChild( repoLink );
    } );

    main.innerHTML = '';
    main.appendChild( card );
}