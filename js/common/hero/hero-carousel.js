import debounce from "lodash-es/debounce";

import { breakpoints } from "../../utils/consts";
import { initFeatureStackCards } from "../cards/feature-stack-card";

const initSlidePropForSlideItems = (originalSlides) => {
    originalSlides.forEach((slide, index) => {
        slide.setAttribute("data-slide-index", index);
    });
};

const createEnoughSlidesForCarousel = (originalSlides) => {
    
    const requiredSlideCount = 10;
    
    if (originalSlides.length >= requiredSlideCount) {
        return originalSlides;
    }

    let filledSlides = [];
    
    while (filledSlides.length < requiredSlideCount) {
        originalSlides.forEach((slide) => {
            let independentSlide = slide.cloneNode(true);
            filledSlides.push(independentSlide);
        });
    }

    return filledSlides;

};

const removeOldSlideStatus = (slideItems) => {
    slideItems.forEach((slide) => {
        const classes = slide.className.split(" ");
        const filteredClasses = classes.filter((className) => !className.startsWith("stack-slide-index_") && className !== "active");

        slide.className = filteredClasses.join(" ");
    });
};

const updateSlideStatusClassBasedOnActiveIndex = (slideItems, activeIndex) => {
    
    // need prev 3 & next 3, 2 items is visible, 1 items act as transition out
    // e.g. from -2, -1, 0, 1, 2
    for (var i = activeIndex - 3; i < activeIndex + 4; i++) {

        var index = i;

        if (i < 0) {
            // e.g. 10 - 2 -> 8
            index = slideItems.length + i;
        } else if (i >= slideItems.length) {
            // e.g. 13 >= 10 -> 3
            index = i % slideItems.length;
        }

        let level = activeIndex - i;
        slideItems[index].classList.add(`stack-slide-index_${level}`);
    
    }

    slideItems[activeIndex].classList.add("active");

};

const initCarouselItems = (featuredStackCarousel, slideItems, activeIndex) => {

    updateSlideStatusClassBasedOnActiveIndex(slideItems, activeIndex);

    // cleanup & add elements
    featuredStackCarousel.innerHTML = "";
    slideItems.forEach((item, i) => {
        featuredStackCarousel.append(item);
    });

};

// get next active index based on direction
const getMoveUpIndex = (activeIndex, slideItems) => {
    var newActive = activeIndex + 1;
    return newActive % slideItems.length;
};

const getMoveDownIndex = (activeIndex, slideItems) => {
    var newActive = activeIndex - 1;
    return newActive < 0 ? slideItems.length - 1 : newActive;
};

// scroll up / down
// direction == 'up' or 'down'
const scrollAnimationBasedOnDirection = (oldActiveIndex, slideItems, direction) => {

    let activeIndex = direction == "down" ? getMoveDownIndex(oldActiveIndex, slideItems) : getMoveUpIndex(oldActiveIndex, slideItems);

    removeOldSlideStatus(slideItems);
    updateSlideStatusClassBasedOnActiveIndex(slideItems, activeIndex);

    return activeIndex;

};

// class: stack-slide-index_-2, stack-slide-index_-1, stack-slide-index_0, stack-slide-index_1, stack-slide-index_2
const initCarouselLogic = (featuredStackCarousel) => {

    // items = data entry point
    const originalSlides = featuredStackCarousel.querySelectorAll(".featured-stack-carousel-item");
    initSlidePropForSlideItems(originalSlides);

    let activeIndex = 0;
    let slideItems = createEnoughSlidesForCarousel(originalSlides);
    let intervalID;

    initCarouselItems(featuredStackCarousel, slideItems, activeIndex);

    // init scroll up animation
    const scrollDirection = "up"; // or 'down';
    
    intervalID = setInterval(() => {
        activeIndex = scrollAnimationBasedOnDirection(activeIndex, slideItems, scrollDirection);
    }, 3000);

    featuredStackCarousel.setAttribute("data-popover-active", false);
    featuredStackCarousel.setAttribute("is-playing", true);

    // play animation
    const playCarouselSlidingAnimation = () => {

        intervalID = setInterval(() => {
            activeIndex = scrollAnimationBasedOnDirection(activeIndex, slideItems, scrollDirection);
        }, 3000);

        featuredStackCarousel.setAttribute("is-playing", true);

        return intervalID;
    
    };

    // pause animation
    const clearCarouselSlidingAnimation = (intervalID) => {
        clearInterval(intervalID);
        featuredStackCarousel.setAttribute("is-playing", false);
    };

    // pause animation to be less distracting when popover is opened
    featuredStackCarousel.addEventListener("popoverActive", () => {
        clearCarouselSlidingAnimation(intervalID);
        featuredStackCarousel.setAttribute("data-popover-active", true);
    });

    featuredStackCarousel.addEventListener("popoverInactive", () => {
        intervalID = playCarouselSlidingAnimation();
        featuredStackCarousel.setAttribute("data-popover-active", false);
    });

    // pause animation on hovering over carousel
    featuredStackCarousel.addEventListener("mouseover", () => {

        if (featuredStackCarousel.getAttribute("data-popover-active") == "true") {
            return;
        }

        clearCarouselSlidingAnimation(intervalID);
    
    });

    featuredStackCarousel.addEventListener("mouseleave", () => {

        if (featuredStackCarousel.getAttribute("data-popover-active") == "true") {
            return;
        }

        intervalID = playCarouselSlidingAnimation();
    
    });

};

const setFeaturedStackCarouselHeightBasedOnActiveSlide = (featuredStackCarousel) => {

    const activeSlide = featuredStackCarousel.querySelector(".featured-stack-carousel-item.active");
    const layoutBreakpoint = breakpoints.lg;
    const carouselHeight = window.innerWidth < layoutBreakpoint ? activeSlide.offsetHeight * (1 + 1 * 0.75) : activeSlide.offsetHeight * 2.5;

    featuredStackCarousel.style.minHeight = `${carouselHeight}px`;

};

const updateFeaturedStackCarouselHeightBasedOnSlides = (featuredStackCarousel) => {

    setFeaturedStackCarouselHeightBasedOnActiveSlide(featuredStackCarousel);

    window.addEventListener("resize", debounce((e) => {
        setFeaturedStackCarouselHeightBasedOnActiveSlide(featuredStackCarousel);
    }, 200));

};

const initFeaturedStackCarousel = (block) => {

    const featuredStackCarousel = block.querySelector(".featured-stack-carousel");

    if (!featuredStackCarousel) return;

    initCarouselLogic(featuredStackCarousel);
    updateFeaturedStackCarouselHeightBasedOnSlides(featuredStackCarousel);

};

export const initHeroLeftAlignedCarousels = () => {

    const heroBlocks = document.querySelectorAll(".hero-left-aligned--carousel");

    if (!heroBlocks || heroBlocks.length <= 0) return;

    heroBlocks.forEach((block, index) => {
        
        if (!block.id) block.id = `hero-left-aligned-carousel-block-${index}`;
        
        initFeaturedStackCarousel(block);
        // init later to ensure unique video-embed id as cards will be cloned in above init carousel step if not enough cards are provided
        initFeatureStackCards(block);
        
    });

};