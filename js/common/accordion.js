// keep accordion expand state when clicking on other items
const checkIfAccordionShouldAlwaysOpen = (accordionSection) => {

    // accordionSection = '.accordion-block__section'
    if (!accordionSection) return false;

    return accordionSection.hasAttribute("data-accordion-always-open") ? true : false;

};

const initToggleAccordionActiveClassOnWrapper = (section) => {

    const shouldAccordionAlwaysOpen = checkIfAccordionShouldAlwaysOpen(section);
    const accordionButtons = section.querySelectorAll(".accordion-button");

    accordionButtons.forEach((button) => {
        
        const parentAccordionItem = button.closest(".accordion-item");
        
        if (parentAccordionItem) {
            button.addEventListener("click", () => {
                
                parentAccordionItem.classList.toggle("active");

                if (shouldAccordionAlwaysOpen) return;

                const inactiveButtons = [...accordionButtons].filter((inactiveButton) => inactiveButton !== button);

                inactiveButtons.forEach((inactiveButton) => {
                    const inactiveAccordionItem = inactiveButton.closest(".accordion-item");
                    if (inactiveAccordionItem) {
                        inactiveAccordionItem.classList.remove("active");
                    }
                });

            });
        }

    });

};

const initActiveClassInAccordionBlocks = () => {

    const params = new URLSearchParams(window.location.search);
    const anchor = params.get('anchor');

    if (!!anchor) {
        
        // Open the drawer referenced in the anchor, if it exists.

        const item = document.getElementById(anchor);
        if (!item) return;

        const button = item.querySelector('.accordion-button');
        if (!button) return;

        const drawer = button.closest('.accordion-drawer');
        if (drawer && !drawer.classList.contains('accordion-drawer--disabled')) button.click();

        // Scroll item into view.
        const offset = 76;
        const y = item.getBoundingClientRect().top + window.scrollY - offset - 20;

        window.scrollTo({ top: y, behavior: 'smooth' });

    } else {

        // No anchor. Open the first item in each accordion block.

        const accordionBlocks = document.querySelectorAll(".accordion-block");
    
        if (!accordionBlocks || !accordionBlocks.length > 0) return;
    
        accordionBlocks.forEach((block) => {
            const isClosedState = block.hasAttribute('data-default-all-accordion-closed');
        
            const target = block.querySelector(".accordion-button");
            if (!target || isClosedState) return;
    
            const accordionDrawer = target.closest(".accordion-drawer");
            if (accordionDrawer && !accordionDrawer.classList.contains("accordion-drawer--disabled")) target.click();
        
        });

    }

};

const initAccordionItemBootstrapProperties = (accordionItem, accordionItemIndex, accordionID, block) => {

    let accordionItemBodyID = `${accordionID}-accordionItem-${accordionItemIndex}`;
    const accordionCollapse = accordionItem.querySelector(".accordion-collapse");
    const accordionSection = block.querySelector(".accordion-block__section");
    const shouldAccordionAlwaysOpen = checkIfAccordionShouldAlwaysOpen(accordionSection);

    if (accordionCollapse) {

        accordionCollapse.id = accordionItemBodyID;

        // only display 1 accodion item at a time, collapse other inactive ones
        if (!shouldAccordionAlwaysOpen) {
            accordionCollapse.setAttribute("data-bs-parent", `#${accordionID}`);
        }

    }

    const accordionButton = accordionItem.querySelector(".accordion-button");
    
    if (accordionButton) {
        accordionButton.setAttribute("data-bs-target", `#${accordionItemBodyID}`);
        accordionButton.setAttribute("aria-controls", `#${accordionItemBodyID}`);
    }

};

// important: rely on this to init bootstrap accordion properties
const initAccordionBootstrapProperties = () => {

    const accordionBlocks = document.querySelectorAll(".accordion-block");
    
    if (!accordionBlocks || !accordionBlocks.length > 0) return;

    accordionBlocks.forEach((block, blcokIndex) => {
        
        let blockID = `accordion-block-${blcokIndex + 1}`;

        // if the block has its own id, we can use that, if not define one
        if (block.id) {
            blockID = block.id;
        } else {
            block.id = blockID;
        }

        const accordions = block.querySelectorAll(".accordion");
        
        accordions.forEach((accordion, accordionIndex) => {
            
            let accordionID = `${blockID}-accordion-${accordionIndex + 1}`;
            accordion.id = accordionID;

            const accordionItems = accordion.querySelectorAll(".accordion-item");
            
            accordionItems.forEach((accordionItem, accordionItemIndex) => {
                initAccordionItemBootstrapProperties(accordionItem, accordionItemIndex, accordionID, block);
            });

        });

    });

};

// Accordions need to be living within `.accordion-block` for assigning unique ids to elements for toggle functionality to work properly
export const initAccordions = () => {

    // init bootstap accordion related properties so we don't need to add it manually
    initAccordionBootstrapProperties();

    const accordionSections = document.querySelectorAll(".accordion-block__section.accordion-block__section--active");
    if (!accordionSections || !accordionSections.length > 0) return;

    accordionSections.forEach((section) => {
        initToggleAccordionActiveClassOnWrapper(section);
    });

    initActiveClassInAccordionBlocks();

};