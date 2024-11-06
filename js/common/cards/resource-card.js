import { initPopoverVideoOnWistiaVideoCards } from "../video/popoverVideo";
import { equalizeHeights, resetHeights, getBreakpoint } from "../../utils/utils";
import debounce from "lodash-es/debounce";

const initWistiaVideoPopoverResourceCard = () => {

    const wistiaVideoCards = document.querySelectorAll(".js-wistia-resource-card");
    if (!wistiaVideoCards || !wistiaVideoCards.length > 0) return;

    initPopoverVideoOnWistiaVideoCards(wistiaVideoCards);

};

// add in support for handling 4 - 6 cards, default handles 6 cards
const addFeaturedResourceCardsWrapperClass = (cardsWrapper) => {
    if (!cardsWrapper) return;

    const featuredCardCount = cardsWrapper.children.length;
    if (featuredCardCount == 0) return;

    cardsWrapper.classList.add(`resource-block__cards--featured--${featuredCardCount}`);
}

const initFeaturedResourceCards = (cardsWrapper) => {
    if (!cardsWrapper) return;

    // clone logo for mobile layout here to avoid double entry
    const featuredCards = cardsWrapper.querySelectorAll(".resource-card");
    if (!featuredCards || !featuredCards.length > 0) return;

    featuredCards.forEach((card) => {

        if (!card.classList.contains("resource-card--mobile-show-logo")) return;

        const logo = card.querySelector(".resource-card--featured__logo");
        const mediaWrapper = card.querySelector(".resource-card__media");
        
        if (!logo) return;

        const mobileLogo = logo.cloneNode(true);
        
        mobileLogo.classList.add("resource-card--featured__logo--mobile");
        mediaWrapper.appendChild(mobileLogo);
    
    });

    // equalize the heights of heading elements
    const setFeaturedResourceCardHeadingHeights = () => {

        const featuredResourceBlocks = document.querySelectorAll(".resource-block__cards--featured");

        featuredResourceBlocks.forEach((block) => {
            
            const blockHeadings = block.querySelectorAll(".resource-card__text h5");
            const row2Headings = [...blockHeadings].filter((_, index) => index === 1 || index === 2);
            const row3Headings = [...blockHeadings].filter((_, index) => index > 2);
            
            if (!blockHeadings?.length || !row2Headings?.length || !row3Headings?.length) return;

            const isMd = window.matchMedia(`
                (min-width: ${getBreakpoint("md")}px) and
                (max-width: ${getBreakpoint("lg") - 1}px)`).matches;

            resetHeights(blockHeadings);

            if (isMd) {
                equalizeHeights(row2Headings);
                equalizeHeights(row3Headings);
            }

        });

    };

    setFeaturedResourceCardHeadingHeights();

    window.addEventListener("resize", debounce((e) => {
        setFeaturedResourceCardHeadingHeights();
    }, 250));

};

const initFeaturedResourceCardsBlock = () => {
    const featuredCardsWrappers = document.querySelectorAll('.resource-block__cards--featured');
    if (!featuredCardsWrappers || featuredCardsWrappers.length == 0) return;

    featuredCardsWrappers.forEach((cardsWrapper) => {
        initFeaturedResourceCards(cardsWrapper); 
        addFeaturedResourceCardsWrapperClass(cardsWrapper);
    })
}

const initGriddedResourceCards = () => {

    const griddedCardContainers = document.querySelectorAll(".resource-block__cards.resource-block__cards--gridded");

    if (!griddedCardContainers || griddedCardContainers.length === 0) return;

    griddedCardContainers.forEach((container) => {
        if (container.children.length % 3 === 0) {
            container.classList.add("resource-block__cards--gridded-3-up");
        }
    });

};

const initResourceBlockUniqueIds = () => {

    const resourceBlocks = document.querySelectorAll(".resource-block-cards, .resource-block-featured, .resource-block-gridded-5, .resource-block-listed");

    if (!resourceBlocks || !resourceBlocks.length > 0) return;

    resourceBlocks.forEach((block, index) => {
        if (!block.id) {
            block.id = `resource-block-${index}`;
        }
    });

};

export const initResourceCards = () => {
    initResourceBlockUniqueIds();
    initWistiaVideoPopoverResourceCard();
    initFeaturedResourceCardsBlock();
    initGriddedResourceCards();
};