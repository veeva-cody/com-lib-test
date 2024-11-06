export const initHeroCenterStack = () => {

    const heroCenterStacks = document.querySelectorAll('.veeva-2024 .hero-center-stack');
    if (!heroCenterStacks || !heroCenterStacks.length) return

    heroCenterStacks.forEach(block => {

        const blockContent = block.querySelector('.hero-center-stack__cards');
        if (!blockContent) return

        const cardsWrap = block.querySelector('.hero-center-stack__cards-wrap')
        if (!cardsWrap) return

        const cards = cardsWrap.querySelectorAll('.hero-center-stack__card')
        const cardsCount = cards?.length
        if (!cardsCount) return

        // set the animation speed based on the number of cards
        const minCardsCount = 4
        const baseSpeed = 30
        const calculatedSpeed = (cardsCount / minCardsCount) * baseSpeed
        cardsWrap.style.animationDuration = `${calculatedSpeed}s`

        // add a deep clone of .hero-center-stack__cards-wrap to its parent for the scrolling animation
        const clone = cardsWrap.cloneNode(true);
        blockContent.append(clone);

        // initialize animation now that the elements have been prepped
        [cardsWrap, clone].forEach((element) => { element.classList.add('init') })
    });
    
};