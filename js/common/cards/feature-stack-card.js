import { initPopoverVideoOnWistiaVideoCards } from "../video/popoverVideo";

const initWistiaVideoPopoverFeatureStackCard = (block) => {

    const wistiaVideoCards = block.querySelectorAll(".js-wistia-feature-stack-card");
    
    if (!wistiaVideoCards || !wistiaVideoCards.length > 0) return;

    initPopoverVideoOnWistiaVideoCards(wistiaVideoCards);

};

export const initFeatureStackCards = (block) => {
    initWistiaVideoPopoverFeatureStackCard(block);
};