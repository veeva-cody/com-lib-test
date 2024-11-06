// Calculate the scroll position to center the active nav item
export const scrollActiveTablistItemToCenter = (tablist, link) => {

    let scrollLeft = link.offsetLeft - (tablist.offsetWidth - link.offsetWidth) / 2;
    
    tablist.scrollLeft = scrollLeft;
    tablist.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
    });

};

export const initTablistScrollToActiveItem = (tablist) => {
    
    const tabLinks = tablist.querySelectorAll(".nav-pills .nav-link");

    tabLinks.forEach((link) => {
        link.addEventListener("click", () => {
            // Calculate the scroll position to center the active nav item
            scrollActiveTablistItemToCenter(tablist, link);
        });
    });

};

const initActiveStateInTablist = (tablist) => {
    
    const tabLinks = tablist.querySelectorAll(".nav-pills .nav-link");
    
    if (!tabLinks) return;

    tabLinks[0].classList.add("active");
    tabLinks[0].setAttribute("aria-selected", "true");

};

const initTablistProperties = (tablist, tablistIndex) => {
    
    let tablistID = `tablist-${tablistIndex + 1}`;

    // if the tablist has its own id, we can use that, if not define one
    if (tablist.id) {
        tablistID = tablist.id;
    } else {
        tablist.id = tablistID;
    }

    // for styling
    const tablistItems = tablist.querySelectorAll(".nav-pills .nav-link");
    const numberOfTabs = tablistItems.length;
    
    tablist.setAttribute("style", `--number-of-tabs: ${numberOfTabs};`);
    
    const innerTabsWrapper = tablist.querySelector(".nav-pills");
    innerTabsWrapper.setAttribute("style", `--number-of-tabs: ${numberOfTabs};`);

    // for bootstrap properties that we don't need to copy manually
    tablistItems.forEach((tablink, index) => {
    
        tablink.setAttribute("aria-selected", "false");
        tablink.setAttribute("data-bs-toggle", "pill");
        tablink.setAttribute("type", "button");
        tablink.setAttribute("role", "tab");

        if (!tablink.getAttribute("aria-controls")) tablink.setAttribute("aria-controls", `${tablistID} item ${index + 1}`);
    
    });

};

const initTabBlockProperties = (tabBlock, tabBlockIndex) => {
    
    const tablist = tabBlock.querySelector(".tablist");
    if (!tablist) return;

    const tablistItems = tablist.querySelectorAll(".tablist-link");
    const tabContent = tabBlock.querySelector(".tab-content");
    const tabContentItems = tabContent.querySelectorAll(".tab-pane");

    tabContentItems.forEach((tabContentItem, tabIndex) => {

        tabContentItem.classList.add("fade");
        tabContentItem.setAttribute("role", "tabpanel");
        tabContentItem.setAttribute("tabindex", "0");

        let tabBlockId = tabBlock.id ? tabBlock.id : `tab-block-${tabBlockIndex}`;
        let tabContentId = tabContentItem.id ? tabContentItem.id : `${tabBlockId}-pills-${tabIndex + 1}`;

        tabContentItem.id = tabContentId;
        tabContentItem.setAttribute("aria-labelledby", `${tabContentId}-tab`);

        let correspondingTablistItem = tablistItems[tabIndex];
        
        if (correspondingTablistItem) {
            correspondingTablistItem.setAttribute("data-bs-target", `#${tabContentId}`);
        }

    });

};

const initActiveStateInTabBlockContent = (tabBlock) => {
    
    const tabContent = tabBlock.querySelector(".tab-content");  
    if (!tabContent) return;

    const tabContentItems = tabContent.querySelectorAll(".tab-pane");
    if (!tabContentItems) return;

    tabContentItems[0].classList.add("active", "show");

};

const initTablistClientLogo = () => {

    // used png for now as client only provides with png files
    const logos = document.querySelectorAll(".logo-svg[data-logo]");

    // for keeping original logo color & change to white on hover
    logos.forEach((logo) => {
        logo.style = `--logo-url: url('/wp-content/themes/veeva2015/assets/logos/color/${logo.dataset.logo}.png');`;
        logo.classList.add("ready");
    });

};

// main
export const initTablist = () => {
    
    initTablistClientLogo();
    
    const tablists = document.querySelectorAll(".tablist");
    if (!tablists || !tablists.length > 0) return;

    tablists.forEach((tablist, index) => {
        initTablistProperties(tablist, index);
        initTablistScrollToActiveItem(tablist);
        initActiveStateInTablist(tablist);
    });

};

export const initTabBlocks = () => {

    const tabBlocks = document.querySelectorAll(".tab-block");
    
    if (!tabBlocks || !tabBlocks.length > 0) return;

    tabBlocks.forEach((tabBlock, index) => {
        initTabBlockProperties(tabBlock, index);
        initActiveStateInTabBlockContent(tabBlock);
    });
    
};
