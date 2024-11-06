import debounce from "lodash-es/debounce";

import { scrollActiveTablistItemToCenter } from "./tabs";

// Carousel Indicators -------
const getCarouselIntervalTiming = (carouselEl) => {
    const defaultCarouselTiming = 8500;

    const customCarouselTiming = carouselEl.hasAttribute('data-slide-interval') ? carouselEl.getAttribute('data-slide-interval') : false;
    const customTimingAsNumber = parseInt(customCarouselTiming);
    const isCustomTimingValid = !isNaN(customTimingAsNumber);

    return isCustomTimingValid ? customTimingAsNumber : defaultCarouselTiming;
}

const initCarouselIndicatorProgressBarAndCarouselTiming = (carouselEl) => {

    if (!carouselEl) return;

    const carouselIndicators = carouselEl.querySelectorAll(".carousel-indicators button span");

    // each slide's time, default boostrap setting carousel here doesn't slide automatically so it'll move based on setting here
    const carouselSlideTiming = getCarouselIntervalTiming(carouselEl);

    // for viewing duration in html template & debugging
    if (!carouselEl.hasAttribute('data-slide-interval')) {
        carouselEl.setAttribute('data-slide-interval', carouselSlideTiming);
    }

    const animationIntervalTotal = 200;   // for smoother animation
    const progressBarTimePerPercent = carouselSlideTiming / animationIntervalTotal;

    // disabled default timing here as progress bar + slide animation is controlled by fillCarouselIndicator() function
    const carousel = new bootstrap.Carousel(carouselEl, {
        interval: false, 
    });
    
    let intervalID;
    
    fillCarouselIndicator(1);

    carouselEl.addEventListener("slide.bs.carousel", (e) => {
        let index = e.to;
        fillCarouselIndicator(++index);
    });

    function fillCarouselIndicator() {

        let i = 0;
        
        for (const carouselIndicator of carouselIndicators) {
            carouselIndicator.style.transform = `scaleX(0)`;
        }

        clearInterval(intervalID);
        carousel.pause();

        // e.g. 200 frame/fraction as animationIntervalTotal -> 0.5
        let calculatedPercentRatio = 100 / animationIntervalTotal;

        intervalID = setInterval(() => {
            
            i++;

            let scaleAmount = i * calculatedPercentRatio;
            
            carouselEl.querySelector(".carousel-indicators .active span").style.transform = `scaleX(${scaleAmount}%)`

            if (i >= animationIntervalTotal) {
                // i = 0; -> just in case
                carousel.next();
            }

        // update carousel timing per percentage
        }, progressBarTimePerPercent);

        // Reset progress styles when a tab is clicked
        carouselEl.querySelectorAll(".carousel-indicators button span").forEach((span) => {
            span.style.transform = `scaleX(0)`;
        });

    }

};

// init carousel indicators based on number of carousel slides
const initCarouselIndicatorsBasedOnSlideCount = (carouselSlides, carouselIndicatorWrapper, carouselID) => {
    carouselSlides.forEach((_, slideIndex) => {

        let btnStateProperties = slideIndex == 0 ? `class="active" aria-current="true"` : "";
        let carouselButtonHTML = `<button 
                type="button" ${btnStateProperties} 
                data-bs-target="#${carouselID}" 
                data-bs-slide-to="${slideIndex}" 
                aria-label="${carouselID} slide ${slideIndex + 1}">
                    <span></span>
                </button>`;

        carouselIndicatorWrapper.innerHTML += carouselButtonHTML;
    
    });
};

// Tablist -------
// init tablist bootstrap properties
const initCarouselLinkedTablistBootstrapProperties = (carouselTablist, carouselID) => {
    
    const tabButtons = carouselTablist.querySelectorAll(".nav-pills .nav-link");
    
    tabButtons.forEach((tabButton, i) => {

        tabButton.setAttribute("data-bs-toggle", "pill");
        tabButton.setAttribute("type", "button");
        tabButton.setAttribute("role", "tab");
        tabButton.setAttribute("aria-controls", `${carouselID} Slide ${i + 1}`);

        if (!i == 0) {
            tabButton.setAttribute("aria-selected", "false");
        }

    });

};

const linkTablistStateWithCarousel = (carouselTablist, carouselIndicatorWrapper, carousel) => {

    const tabButtons = carouselTablist.querySelectorAll(".nav-pills .nav-link");
    const carouselIndicators = carouselIndicatorWrapper.querySelectorAll("button");

    initCarouselLinkedTablistBootstrapProperties(carouselTablist);

    // click tab -> click carousel indicator -> move slide
    tabButtons.forEach((tabButton, index) => {
        tabButton.addEventListener("click", () => {
            if (carouselIndicators[index]) carouselIndicators[index].click();
        });
    });

    // carousel slide automatically -> update tablist status
    carousel.addEventListener("slide.bs.carousel", (e) => {

        let activeIndex = e.to;

        // center active tab on smaller screen
        scrollActiveTablistItemToCenter(carouselTablist, tabButtons[activeIndex]);

        // update tablist active state
        tabButtons.forEach((tabButton) => { tabButton.classList.remove("active"); });
        tabButtons[activeIndex].classList.add("active");

    });

};

// Carousel -------
const updateCarouselSlideHeightsBasedOnTallestSlide = (carousel) => {

    function updateCarouselSlideHeights(slideItems) {
        
        var maxHeight = 0;
        
        slideItems.forEach((slide) => {
            
            // ensure it's using height generated from original css for comparison
            slide.style.height = "";

            if (slide.clientHeight > maxHeight) {
                maxHeight = slide.clientHeight;
            }

        });

        slideItems.forEach((slide) => {
            slide.style.height = `${maxHeight}px`;
        });

    }

    const slideItems = carousel.querySelectorAll(".carousel-item");
    if (!slideItems || slideItems.length <= 0) return;

    // ensure the layout is loaded, then start calculating tallest one
    updateCarouselSlideHeights(slideItems);

    // remove debounce if get flagged that content gets cropped during resizing
    window.addEventListener("resize", debounce((e) => {
        updateCarouselSlideHeights(slideItems);
    }, 200));

};

const initCarouselBootstrapProperties = () => {

    const carousels = document.querySelectorAll(".carousel");
    if (!carousels || !carousels.length > 0) return;

    carousels.forEach((carousel, carouselIndex) => {
        
        let carouselID = `carousel-${carouselIndex + 1}`;

        // if the block has its own id, we can use that, if not define one
        if (carousel.id) {
            carouselID = carousel.id;
        } else {
            carousel.id = carouselID;
        }

        // init carousel indicators based on the numbers of slides
        const carouselSlides = carousel.querySelectorAll(".carousel-item");
        if (!carouselSlides || carouselSlides.length <= 0) return;

        // carousel style update
        carouselSlides[0].classList.add("active");
        const slideTotal = carouselSlides.length;
        carousel.setAttribute("style", `--slide-count: ${slideTotal}`);

        // if there's only 1 slide, no need to geneate carousel indicators
        if (slideTotal == 1) return;

        // init carousel indicators
        const carouselIndicatorWrapper = carousel.querySelector(".carousel-indicators");
        initCarouselIndicatorsBasedOnSlideCount(carouselSlides, carouselIndicatorWrapper, carouselID);

        // init carousel progress bar & update carousel timing here
        initCarouselIndicatorProgressBarAndCarouselTiming(carousel, carouselID);

        // update carousel slides' height based on the tallest one
        updateCarouselSlideHeightsBasedOnTallestSlide(carousel);

        // check if tablist exists & bind tablist action accordingly
        const carouselBlock = carousel.closest(".quote-tabs");
        if (!carouselBlock) return;

        const carouselTablist = carouselBlock.querySelector(".tablist");
        
        if (carouselTablist) {
            linkTablistStateWithCarousel(carouselTablist, carouselIndicatorWrapper, carousel);
        }

    });

};

export const initCarousels = () => {
    initCarouselBootstrapProperties();
};