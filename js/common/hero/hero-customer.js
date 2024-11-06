import { breakpoints } from "../../utils/consts";

const heroCustomerCardsLayoutBreakpoint = breakpoints.md;

const updateHeroCustomerColorBackgroundHeight = (customerImageCards,heroCustomerSection) => {
    let singleCardHeight = customerImageCards[0].offsetHeight;

    let targetColorBackgroundHeight =
        window.innerWidth >= heroCustomerCardsLayoutBreakpoint
            ? `calc(100% - ${singleCardHeight}px / 2)`
            : `calc(100% - ${singleCardHeight}px * 1.5)`;
    
    heroCustomerSection.style.setProperty('--colored-background-height', targetColorBackgroundHeight);
}

const initHeroCustomerCards = (heroCustomerSection) => {
    const customerCardSection = heroCustomerSection.querySelector('.hero-customer__cards');
    if (!customerCardSection) return;   
    
    const customerImageCards = customerCardSection.querySelectorAll('.customer-image-card')
    if (!customerImageCards || customerImageCards.length == 0) return;  

    updateHeroCustomerColorBackgroundHeight(customerImageCards, heroCustomerSection);
    
    window.addEventListener("resize", (e) => {
        updateHeroCustomerColorBackgroundHeight(customerImageCards, heroCustomerSection);
    });
}

export const initHeroCustomer = () => {
    const heroCustomerSections = document.querySelectorAll('.hero-customer');
    if (!heroCustomerSections || heroCustomerSections.length == 0) return;

    heroCustomerSections.forEach(section => {
        initHeroCustomerCards(section);
    });
}