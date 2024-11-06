import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import throttle from "lodash-es/throttle";
import { createTag, convertToSlug, getElementInViewPercentage, trimPrefix } from "../utils/utils";

const getPageTOCtargets = (pageTOC, pageTOCtargetArea) => {
    // check if required attribute exists
    if (!pageTOC.hasAttribute("data-toc-target-element-selector")) {
        console.error("Need to add `data-toc-target-element-selector` attribute to .page-toc to target elements");
        return false;
    }

    // check if user input is valid
    const targetElementSelector = pageTOC.getAttribute("data-toc-target-element-selector");
    const pageTOCtargets = pageTOCtargetArea.querySelectorAll(targetElementSelector);

    if (!pageTOCtargets || pageTOCtargets.length <= 0) {
        console.error("Your input in `data-toc-target-element-selector` is not valid. The target element that you specified is not found in data-toc-target-area");
        return false;
    }

    return pageTOCtargets;
};

const wrapTargetWithAnchorLink = (target, index) => {
    let anchorID = convertToSlug(target.textContent);
    let clonedHeading = target.cloneNode(true);

    let TOCtarget = createTag(
        "a",
        {
            class: `resources-toc-target resources-toc-target-${index}`,
            id: anchorID,
        },
        clonedHeading
    );

    target.replaceWith(TOCtarget);

    return { anchorID, TOCtarget };
};

const cleanupTOCFieldText = (string) => {
    return trimPrefix(string);
};

const createTOCFieldBasedOnTarget = (target, anchorID) => {
    const tocFieldText = cleanupTOCFieldText(target.textContent);

    const tocField = createTag(
        "a",
        {
            href: `#${anchorID}`,
            class: "page-toc__field",
        },
        tocFieldText
    );

    return tocField;
};

const scrollDesktopActiveTocFieldToVisibleInContainer = (activeItem) => {
    let scrollableContainer = document.querySelector('.page-toc');
    if (!activeItem || !scrollableContainer) return; 

    let idealVisibleAreaBottomEdge = scrollableContainer.clientHeight * 2 / 3;

    if (activeItem.offsetTop > idealVisibleAreaBottomEdge) {
        scrollableContainer.scrollTo({
            top: activeItem.offsetTop,
            behavior: "smooth",
        });
    } else {
        if (scrollableContainer.scrollTop != 0)
            scrollableContainer.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    }
}

const updateTOCfieldActiveStateIfInView = (pageTocTargets, stickyMobileDropdown) => {
    window.addEventListener(
        "scroll",
        throttle((e) => {
            const inViewTargets = [];

            pageTocTargets.forEach((target) => {
                let inViewPerecentage = getElementInViewPercentage(target);
                let isInView = inViewPerecentage <= 1 && inViewPerecentage >= 0;

                if (isInView) {
                    inViewTargets.push({
                        inViewPerecentage,
                        element: target,
                    });
                }
            });
            if (!inViewTargets.length > 0) return;

            // always update state based on the top-most element in viewport
            const topTarget = inViewTargets.reduce((smallest, current) => {
                return current.inViewPercentage < smallest.inViewPercentage ? current : smallest;
            });
            if (!topTarget) return;

            let prevActiveDesktopElement = document.querySelector(".page-toc__field-desktop-wrapper .active");
            let prevActiveMobileElement = stickyMobileDropdown.querySelector(".active");

            let inViewTOCfieldID = topTarget.element.id;
            let inViewTOCdesktopField = document.querySelector(`.page-toc__field-desktop-wrapper [href="#${inViewTOCfieldID}"]`);
            let inViewTOCmobileField = stickyMobileDropdown.querySelector(`[href="#${inViewTOCfieldID}"]`);

            // return if inview element is already active
            if (prevActiveDesktopElement == inViewTOCdesktopField) return;

            // remove old active class
            if (prevActiveDesktopElement) prevActiveDesktopElement.classList.remove("active");
            if (prevActiveMobileElement) prevActiveMobileElement.classList.remove("active");

            // add new active class
            if (inViewTOCdesktopField) inViewTOCdesktopField.classList.add("active");
            if (inViewTOCmobileField) inViewTOCmobileField.classList.add("active");

            // ensure active item is visible in desktop sidebar
            scrollDesktopActiveTocFieldToVisibleInContainer(inViewTOCdesktopField);

            // update mobile display active item
            let mobileWrapperDisplayItem = stickyMobileDropdown.querySelector(".form-dropdown--toc__display-item");
            if (mobileWrapperDisplayItem) mobileWrapperDisplayItem.innerHTML = inViewTOCmobileField.innerHTML.trim();
        }, 200)
    );
};

const initTOCMobileWrapperActionOnScroll = (tocMobileWrapper) => {
    gsap.registerPlugin(ScrollTrigger);

    const tocContentArea = document.querySelector("[data-toc-target-area]");
    if (!tocContentArea || !tocMobileWrapper) return;

    // start sticky animation
    const startStickyTimeline = gsap.timeline({ paused: true });
    startStickyTimeline.set(tocMobileWrapper, {
        yPercent: 5,
        xPercent: -50,
    });
    startStickyTimeline.to(tocMobileWrapper, {
        autoAlpha: 1,
        yPercent: 0,
        duration: 0.3,
        ease: "power3.inOut",
        pointerEvents: "auto",
    });

    // end sticky animation
    const endStickyTimeline = gsap.timeline({ paused: true });
    endStickyTimeline.to(tocMobileWrapper, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power3.inOut",
    });

    const startMobileDropdownSticky = () => {
        if (!isStickyToBottom) {
            startStickyTimeline.progress(0).play();
            isStickyToBottom = true;
        }
    };

    const endMobileDropdownSticky = () => {
        if (isStickyToBottom) {
            endStickyTimeline.progress(0).play();
            isStickyToBottom = false;
        }
    };

    // track if it's at bottom or not
    let isStickyToBottom = false;

    // show mobile dropdown when in content area
    ScrollTrigger.create({
        // markers: true,
        trigger: "[data-toc-target-area]",
        start: "top+=100px top",
        end: "bottom-=200px center",
        onEnter: () => startMobileDropdownSticky(),
        onEnterBack: () => startMobileDropdownSticky(),
        onLeave: () => endMobileDropdownSticky(),
        onLeaveBack: () => endMobileDropdownSticky(),
    });
};

const initTOCmobileWrapper = (pageTocFields) => {
    const tocMobileWrapper = document.querySelector(".page-toc__field-mobile-wrapper");

    if (!tocMobileWrapper) return;

    const tocMobileDropdownDisplayItem = tocMobileWrapper.querySelector(".form-dropdown--toc__display-item");
    const tocMobileDropdownMenu = tocMobileWrapper.querySelector(".dropdown-menu");

    if (!tocMobileDropdownDisplayItem || !tocMobileDropdownMenu) return;

    pageTocFields.forEach((tocField, index) => {
        let mobileDropdownItemContent = /* html */ `
            <span> Section ${index + 1}: </span> 
            ${tocField.innerText}
        `;

        let anchorID = new URL(tocField?.href)?.hash;
        let mobileDropdownItem = createTag(
            "a",
            {
                href: `${anchorID}`,
                class: "dropdown-item",
            },
            mobileDropdownItemContent
        );
        tocMobileDropdownMenu.append(mobileDropdownItem);

        if (index == 0) {
            tocMobileDropdownDisplayItem.innerHTML = mobileDropdownItemContent;
        }
    });

    // cloned mobile wrapper to root level so that it can appear to bottom of the screen
    // cannot reuse the same element as it'll look empty when scrolling too fast
    const revealTocMobileWrapper = tocMobileWrapper.cloneNode(true);
    revealTocMobileWrapper.classList.add("page-toc__field-mobile-wrapper--fixed-bottom");

    const main = document.querySelector("main.veeva-2024");
    if (main) main.append(revealTocMobileWrapper);

    initTOCMobileWrapperActionOnScroll(revealTocMobileWrapper);

    return revealTocMobileWrapper;
};

const addTOCfields = (pageTOC, pageTOCtargets) => {
    const tocFieldWrapper = pageTOC.querySelector(".page-toc__field-desktop-wrapper");
    const pageTocTargets = [];
    const pageTocFields = [];

    pageTOCtargets.forEach((target, index) => {
        // wrap <a> around page-toc target
        let { anchorID, TOCtarget } = wrapTargetWithAnchorLink(target, index);

        // add toc field automatically based on targets
        let tocField = createTOCFieldBasedOnTarget(target, anchorID);
        tocFieldWrapper.append(tocField);

        // store array of toc targets to update active state based on scroll position later
        pageTocTargets.push(TOCtarget);

        // for init mobile dropdown later
        pageTocFields.push(tocField);
    });

    // create mobile dropdown wrapper
    // note: there'll be 2 mobile dropdowns, 1 is the static position dropdown, 1 is sticky to viewport bottom
    const stickyMobileDropdown = initTOCmobileWrapper(pageTocFields);

    // update toc field active state based on scroll position
    // only update the sticky one, as when static one is in view, the 1st item is always active
    updateTOCfieldActiveStateIfInView(pageTocTargets, stickyMobileDropdown);
};

export const initTableOfContentInResourcePage = () => {
    const pageTOC = document.querySelector(".page-toc");
    const pageTOCtargetArea = document.querySelector("[data-toc-target-area]");
    if (!pageTOC || !pageTOCtargetArea) return;

    const pageTOCtargets = getPageTOCtargets(pageTOC, pageTOCtargetArea);
    if (!pageTOCtargets) return;

    addTOCfields(pageTOC, pageTOCtargets);
};
