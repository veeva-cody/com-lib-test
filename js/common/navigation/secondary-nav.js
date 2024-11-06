import { breakpoints } from '../../utils/consts';
import { createTag } from "../../utils/utils";

// update subnav active class based on current url vs link.href
const setSubnavLinkActiveClass = (navItems) => {

    const currentUrlPathname = new URL(window.location.href).pathname;
    
    navItems.forEach((item) => {
        
        if (item.tagName == "A" && item.href && item.href.trim() !== "") {
            
            const linkPathname = new URL(item.href, window.location.origin).pathname;
            
            if (linkPathname === currentUrlPathname) {
                item.classList.add("active");
            }

        }

        if (item.tagName == "DIV" && item.classList.contains("dropdown")) {
            
            let dropdownLinks = item.querySelectorAll("a");
            
            if (dropdownLinks.length > 0) {
                setSubnavLinkActiveClass(dropdownLinks);
            }

        }

    });

};

const convertTodropdownOptionClass = (link) => {

    if (!link.classList.contains("dropdown-item")) {
        link.classList.add("dropdown-item");
    }

    link.classList.remove("dropdown-toggle");
    link.classList.replace("d-none", "d-block");
    link.classList.replace("d-md-block", "d-md-none");
    link.classList.replace("d-lg-block", "d-lg-none");
    link.classList.replace("d-xl-block", "d-xl-none");
    link.classList.replace("d-xxl-block", "d-xxl-none");

    return link;

};

const filterResponsiveClassFromNavItem = (item) => {
    if (!item.classList) return [];
    return Array.from(item.classList).filter((className) => className.startsWith("d-"));
};

// update the display text in dropdown to be the current active item
const updateMobileDropdownDisplayIfLinkActive = (clonedLink, dropdownOptionLink, originalNavItem, secondaryNav) => {

    if (!clonedLink.classList.contains("active")) return false;

    const dropdownDisplay = secondaryNav.querySelector(".secondary-navigation__mobile-display-item");
    const dropdownDisplayMobileText = createTag(
        "h6",
        {
            class: "mobile",
        },
        clonedLink.innerText
    );

    let mobileClassArray = filterResponsiveClassFromNavItem(dropdownOptionLink);

    mobileClassArray.forEach((mobileClass) => {
        dropdownDisplayMobileText.classList.add(mobileClass);
    });

    const dropdownDisplayDesktopText = dropdownDisplay.querySelector(".desktop");
    
    if (dropdownDisplayDesktopText) {
        
        let desktopClassArray = filterResponsiveClassFromNavItem(originalNavItem);
        
        desktopClassArray.forEach((desktopClass) => {
            dropdownDisplayDesktopText.classList.add(desktopClass);
        });

    }

    dropdownDisplay.append(dropdownDisplayMobileText);

    return true;

};

const initMobileMenuStruture = (secondaryNav) => {

    const navItems = secondaryNav.querySelectorAll(`.secondary-navigation__desktop-menulist .dropdown-item`);
    const dropdownMenu = secondaryNav.querySelector(".secondary-navigation__mobile-menulist");
    const dropdownMenuOptionWrapper = document.querySelector(".secondary-navigation__mobile-dropdown-menu .dropdown-menu-content");

    // Note: disabled temporarily to allow assign active class manually instead of automatically add active class based on url
    // setSubnavLinkActiveClass(navItems);

    const addDropdownOptionLinkBasedOnOriginalNavItem = (originalNavItem) => {

        if (originalNavItem.tagName === "A") {
            
            let clonedLink = originalNavItem.cloneNode(true);
            let dropdownOptionLink = convertTodropdownOptionClass(clonedLink);
            let isLinkActive = updateMobileDropdownDisplayIfLinkActive(clonedLink, dropdownOptionLink, originalNavItem, secondaryNav);

            if (isLinkActive) return;

            dropdownMenuOptionWrapper.append(dropdownOptionLink);

        }

        if (originalNavItem.tagName === "DIV") {

            const navSubLinks = originalNavItem.querySelectorAll("a");
            const displayControlClasses = filterResponsiveClassFromNavItem(originalNavItem);
            const hasActiveItemInDropdown = originalNavItem.querySelector(".active");

            navSubLinks.forEach((subLink, index) => {

                let subLinkClass = index === 0 ? "dropdown-item--with-submenu" : "dropdown-item--indented";

                if (hasActiveItemInDropdown && index == 0) {
                    subLink.classList.add("subnav-active");
                }

                let clonedLink = subLink.cloneNode(true);
                
                [...displayControlClasses].forEach((className) => {
                    clonedLink.classList.add(className);
                });

                let dropdownOptionLink = convertTodropdownOptionClass(clonedLink);
                dropdownOptionLink.classList.add(subLinkClass);

                updateMobileDropdownDisplayIfLinkActive(clonedLink, dropdownOptionLink, originalNavItem, secondaryNav);

                // append active link with submenu as well to look less awkward
                dropdownMenuOptionWrapper.append(dropdownOptionLink);

            });

        }

    };

    // maxiumu display items will be 5 including the dropdown menu
    const lgScreenContentMaxLimit = 5;
    const mdScreenContentMaxLimit = 3;

    // if more than 5 items
    if (navItems.length > lgScreenContentMaxLimit) {

        // show dropdown at all times
        dropdownMenu.classList.add("d-block");

        navItems.forEach((item, index) => {
            
            // init desktop navItem style
            item.classList.add("d-none");

            // always maximum show 5 items only including the dropdown menu
            if (index < lgScreenContentMaxLimit - 1) {
                if (index == lgScreenContentMaxLimit - 2) {
                    item.classList.add("d-xxl-block");
                } else if (index > 1) {
                    item.classList.add("d-xl-block");
                } else {
                    item.classList.add("d-lg-block");
                }
            }

            addDropdownOptionLinkBasedOnOriginalNavItem(item, dropdownMenuOptionWrapper);

        });

        return;

    }

    // if more than 3 nav items, max 5 items
    if (navItems.length > mdScreenContentMaxLimit) {

        dropdownMenu.classList.add("d-block", "d-xxl-none");

        navItems.forEach((item, index) => {

            item.classList.add("d-none");

            if (index > mdScreenContentMaxLimit - 1) {
                item.classList.add("d-xxl-block");
            } else if (index > 1) {
                item.classList.add("d-xl-block");
            } else {
                item.classList.add("d-lg-block");
            }

            addDropdownOptionLinkBasedOnOriginalNavItem(item, dropdownMenuOptionWrapper);

        });

        return;

    }

    // less than or equal to 3 items only
    dropdownMenu.classList.add("d-block", "d-lg-none");
    navItems.forEach((item) => {
        item.classList.add("d-none", "d-lg-block"); // init desktop navlink style
        addDropdownOptionLinkBasedOnOriginalNavItem(item, dropdownMenuOptionWrapper);
    });

};

const bindToggleBackdropWithElement = (element) => {
    element.addEventListener("click", () => {
        const backdrop = document.querySelector(".secondary-navigation__backdrop");
        if (backdrop) backdrop.classList.toggle("active");
    });
};

const initBackdropWithSecondaryNav = (secondaryNav) => {

    const backdrop = document.querySelector(".secondary-navigation__backdrop");
    const dropdownMenuButton = secondaryNav.querySelector(".secondary-navigation__mobile-display-item");
    
    if (!backdrop || !dropdownMenuButton) return;

    bindToggleBackdropWithElement(backdrop);
    bindToggleBackdropWithElement(dropdownMenuButton);

    // when hide mobile dropdown, hide backdrop
    const mobileDropdown = secondaryNav.querySelector("#secondary-navigation__mobile-dropdown");

    mobileDropdown.addEventListener("hide.bs.dropdown", () => {
        backdrop.classList.remove("active");
    });

};

// only hover show dropdown on large screen
const initDropdownHoverEffect = (secondaryNav) => {

    const dropdowns = secondaryNav.querySelectorAll(".dropdown");
    const lgBreakpoint = breakpoints.lg;

    dropdowns.forEach((dropdown) => {

        const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");

        dropdown.addEventListener("mouseenter", () => {
            if (window.innerWidth > lgBreakpoint) {
                dropdownToggle.classList.add("show");
                dropdownMenu.classList.add("show");
            }
        });

        dropdown.addEventListener("mouseleave", () => {
            if (window.innerWidth > lgBreakpoint) {
                dropdownToggle.classList.remove("show");
                dropdownMenu.classList.remove("show");
            }
        });

    });

};

export const initSecondaryNav = () => {

    const secondaryNav = document.querySelector("#secondary-navigation");
    if (!secondaryNav) return;

    initMobileMenuStruture(secondaryNav);
    initDropdownHoverEffect(secondaryNav);
    initBackdropWithSecondaryNav(secondaryNav);

    secondaryNav.classList.add("ready");

};