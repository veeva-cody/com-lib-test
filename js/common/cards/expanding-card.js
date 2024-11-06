// features card expandable logic
const initToggleActiveClassOnFeatureCards = (section) => {

    const featureCards = section.querySelectorAll(".expanding-card");
    if (!featureCards.length > 0) return;

    featureCards.forEach((card) => {
        card.addEventListener("click", () => {

            card.classList.remove("card-collapse");

            const inactiveCards = [...featureCards].filter((inactiveCard) => inactiveCard !== card);

            inactiveCards.forEach((inactiveCard) => {
                if (!inactiveCard.classList.contains("card-collapse")) inactiveCard.classList.add("card-collapse");
            });

        });
    });

};

const initInitialActiveStateOnFeatureCards = (section) => {

    const featureCards = section.querySelectorAll(".expanding-card");
    if (!featureCards.length > 0) return;

    featureCards.forEach((card, i) => {
        if (i != 0) card.classList.add("card-collapse");
    });

};

export const initFeatureCards = () => {

    const featureCardsSection = document.querySelectorAll(".expanding-card-wrapper");
    if (!featureCardsSection || !featureCardsSection.length > 0) return;

    featureCardsSection.forEach((section) => {
        initToggleActiveClassOnFeatureCards(section);
        initInitialActiveStateOnFeatureCards(section);
    });

};