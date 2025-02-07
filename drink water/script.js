/**
 * @type {NodeListOf<HTMLElement>}
 */
const smallCups = document.querySelectorAll( '.cup.small' );
const bigCup = document.querySelector( '.cup' );
const bigCupWater = bigCup.querySelector( '.water' );
const bigCupPercent = bigCup.querySelector( '.percent' );

smallCups.forEach( ( cup, idx ) => {
    cup.addEventListener( 'click', () => {
        const smallCupWater = cup.querySelector( '.water' );
        smallCupWater.classList.toggle( 'active' );

        let smallCupsActive = Array.from( smallCups ).filter( cup =>
            cup.querySelector( '.water' ).classList.contains( 'active' )
        ).length;

        const smallCupsContent = 250;
        const bigCupContent = 2000;
        const bigCupPercentContent = ( smallCupsActive * smallCupsContent / bigCupContent ) * 100;

        bigCupWater.style.height = `${ bigCupPercentContent }%`;
        bigCupPercent.textContent = `${ bigCupPercentContent }%`;

    } );
} );