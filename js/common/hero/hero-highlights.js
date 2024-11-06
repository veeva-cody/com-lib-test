export const initHeroHighlights = () => {

    const blocks = document.querySelectorAll(".hero-highlights");

    if (!blocks || blocks.length === 0) return;

    blocks.forEach((block) => {
        // NOTE: default layout is 3-col
        const cardWrapper = block.querySelector('.hero-highlights__cards');
        if (!cardWrapper) return;

        if (cardWrapper.children.length % 4 === 0) {
            block.classList.add("hero-highlights--grid-4-up");
            return;
        }

        if (cardWrapper.children.length % 2 === 0) {
            block.classList.add("hero-highlights--grid-2-up");
        }
    });

};