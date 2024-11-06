// Reference: https://stackoverflow.com/questions/76653564/open-bootstrap-5-modal-will-shift-the-header-and-background-to-the-right
export const initModalIntegrationFix = () => {
    const modal = document.querySelector(".veeva-2024 .modal");
    if (!modal) return;

    // target all shifting elements
    const main = document.querySelector("main.veeva-2024");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const alertBanner = document.querySelector(".veeva-2024 .alert-banner");
    const secondaryNav = document.querySelector("#secondary-navigation");

    const shiftingElements = [header, main, footer, alertBanner, secondaryNav];

    shiftingElements.forEach((element) => {
        if (element) {
            // add this class to allow elements to be targeted by bootstrap 5 for adding `padding-right` to shifting elements
            element.classList.add("is-fixed");
        }
    });
};
