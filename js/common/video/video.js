import { breakpoints } from "../../utils/consts";
import { createTag, formatTime, getParamValueFromSearchParamsByKey, timeStringToSeconds } from "../../utils/utils";
import { getVideoMainData, getVideoChapterData } from "./api";
import { renderIconsInBlock } from "../icon";

// general init ---
const initVideoPlayerID = () => {

    const videoMultipleModules = document.querySelectorAll(".video-player-module");
    if (!videoMultipleModules || !videoMultipleModules.length > 0) return;

    videoMultipleModules.forEach((module, index) => {
        
        const parentBlock = module.closest("section");

        if (!parentBlock) return;

        const blockId = parentBlock.id;
        const videoPlayer = module.querySelector(".wistia_embed");
        
        if (!blockId) console.error("Need to assign unique id for video player block to function properly");
        if (blockId && videoPlayer) videoPlayer.id = `${blockId}-wistia-embed`;

    });

};

// Video Nav Height UI related ---
const videoModuleLayoutConfig = {
    breakpoints: {
        chapters: breakpoints.lg,
        multiple: breakpoints.xl,
    },
};

const convertVideoNavHeightBasedOnVideo = (video, videoNav, layoutBreakpoint) => {

    if (window.innerWidth < layoutBreakpoint) {
        videoNav.style.maxHeight = "none";
        return;
    }

    let videoHeight = video.offsetHeight;
    videoNav.style.maxHeight = `${videoHeight}px`;

};

const syncVideoNavHeightBasedOnVideo = (video, videoNav, moduleType) => {

    const layoutBreakpoint = videoModuleLayoutConfig["breakpoints"][moduleType];
    if (!layoutBreakpoint) return;

    convertVideoNavHeightBasedOnVideo(video, videoNav, layoutBreakpoint);

    window.addEventListener("resize", () => {
        convertVideoNavHeightBasedOnVideo(video, videoNav, layoutBreakpoint);
    });

};

const getVideoModuleType = (videoPlayerModule) => {

    if (!videoPlayerModule) return;

    if (videoPlayerModule.classList.contains("video-player-module--chapters")) {
        return "chapters";
    }

    if (videoPlayerModule.classList.contains("video-player-module--multiple")) {
        return "multiple";
    }

    return "";

};

const initVideoModuleUI = () => {

    const videoMultipleModules = document.querySelectorAll(".video-player-module");
    if (!videoMultipleModules || !videoMultipleModules.length > 0) return;

    videoMultipleModules.forEach((module) => {

        const videoWrapper = module.querySelector(".video-player-module__video");
        const videoNavWrapper = module.querySelector(".video-player-module__video-nav");
        const moduleType = getVideoModuleType(module);

        if (videoWrapper && videoNavWrapper && moduleType) {
            syncVideoNavHeightBasedOnVideo(videoWrapper, videoNavWrapper, moduleType);
        }

    });

};

const dispatchResizeEventToTriggerNavHeightSync = () => {
    window.dispatchEvent(new Event("resize"));
};

// Scroll actions ---
const scrollCurrentItemToVisibleInContainer = (scrollableContainer, currentItem) => {

    let topEdge = 12;
    
    if (currentItem.offsetTop > topEdge) {
        scrollableContainer.scrollTo({
            top: currentItem.offsetTop,
            behavior: "smooth",
        });
    } else {
        scrollableContainer.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

};

const scrollElementIntoViewIfNeeded = (el) => {

    const rect = el.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (!isVisible) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

};

// Remove Wistia default caching on video progress in local storage
const removeWistiaVideoProgressLocalStorageCache = (wistiaID) => {
    localStorage.removeItem(`wistia-video-progress-${wistiaID}`);
};

// Main video ---
const addDisplayVideoInfo = (block, videoData, wistiaVideoTitle) => {

    const videoContainer = block.querySelector(".video-player-module__video");
    const videoInfo = createTag("div", {
        class: "video-player-module__video-info",
    });
    const titleText = videoData.title ? videoData.title : wistiaVideoTitle;
    const descriptionText = videoData.description ? videoData.description : "";
    const descriptionHTML = descriptionText.length > 0 ? `<p>${descriptionText}</p>` : "";
    const videoInfoHTML = `
        <h5> ${titleText} </h5>
        ${descriptionHTML}
    `;

    videoInfo.innerHTML = videoInfoHTML;
    videoContainer.append(videoInfo);

};

// Chapter List ---
const updateMobileDisplayChapterToolActiveItem = (block, currentItem) => {

    const chapterToolTitle = block.querySelector(".chapter-tool .chapter-tool__title");
    const chapterToolItemsWrapper = block.querySelector(".chapter-tool__items");
    
    if (!chapterToolTitle) return;

    let chapterToolActiveMobileItem = chapterToolTitle.querySelector(".chapter-item-mobile-wrapper");

    if (!chapterToolActiveMobileItem) {

        chapterToolActiveMobileItem = createTag("div", { class: "chapter-item-mobile-wrapper show" });
        chapterToolTitle.append(chapterToolActiveMobileItem);

        // init toggle visibility on mobile
        chapterToolActiveMobileItem.addEventListener("click", () => {
            // default expanded list
            chapterToolItemsWrapper.classList.toggle("mobile-hidden");
            chapterToolActiveMobileItem.classList.toggle("show");
        });
    } else {
        chapterToolActiveMobileItem.innerHTML = "";
    }

    const mobileActiveItem = createTag(
        "div",
        {
            class: [...currentItem.classList].join(" "),
        },
        currentItem.innerHTML
    );

    chapterToolActiveMobileItem.append(mobileActiveItem);

};

const toggleChapterToolItemActiveClass = (chapterTool, index, block) => {

    const activeItem = chapterTool.querySelector(".chapter-item.active");
    
    if (activeItem) activeItem.classList.remove("active");

    const chapterToolItems = chapterTool.querySelectorAll(".chapter-item");
    const currentItem = chapterToolItems[index];
    
    if (currentItem) currentItem.classList.add("active");

    // update mobile display active item
    updateMobileDisplayChapterToolActiveItem(block, currentItem);

};

// Chapter List
// DOC: https://docs.wistia.com/docs/javascript-player-api#betweentimes
// NOTE: 'crosstime' event doesn't work when the video is moved backward so cannot use that
const updateChapterActiveClassBasedOnVideoProgress = (chapterListData, wistiaID, block) => {

    window._wq = window._wq || [];

    // need assign ID specifically to ensure that id is unique, as we can have videos of same wistia ID on the same page
    const blockId = block.id;
    const videoId = `${blockId}-wistia-embed`;

    _wq.push({
        id: videoId,
        onReady: function (video) {

            const chapterTool = block.querySelector(`#${blockId}-wistia-${wistiaID}-timestamp-list`);
            const chapterToolItems = chapterTool.querySelectorAll(".chapter-item");
            const scrollableContainer = chapterTool.closest(".chapter-tool__items");

            // init chapter tool item active class
            let currentActiveIndex = 0;
            toggleChapterToolItemActiveClass(chapterTool, currentActiveIndex, block);

            // track progress
            chapterListData.forEach((chapter, index) => {

                let startTime = Number(chapter.time);
                let endTime = index == chapterListData.length - 1 ? video.duration() : Number(chapterListData[index + 1].time);

                video.bind("betweentimes", startTime, endTime, function (withinInterval) {
                    if (withinInterval) {

                        // update chapter tool item active class
                        let currentActiveIndex = index;
                        toggleChapterToolItemActiveClass(chapterTool, currentActiveIndex, block);

                        // need to scroll up for viewing the active item
                        let currentItem = chapterToolItems[index];
                        scrollCurrentItemToVisibleInContainer(scrollableContainer, currentItem);

                    }
                });

            });

            // go to specific time if it's passed in param at ?time=X:XX (minutes:seconds)
            const targetTime = getParamValueFromSearchParamsByKey('time');
            if (targetTime) {
                let timeInSeconds = timeStringToSeconds(targetTime);
                if (timeInSeconds) video.time(timeInSeconds + 0.9);
            }
        },
    });

};

const processChapterListData = (chapterListData) => {

    if (!chapterListData) {
        return [];
    }

    const processedData = chapterListData.filter((chapter) => chapter.deleted == "false" && chapter.time && chapter.time.length > 0 && chapter.title && chapter.title.length > 0);
    processedData.sort((a, b) => a.time - b.time);

    return processedData;
};

const initChapterVideoNav = (block, wistiaID, chapterListData, customClass = "") => {

    const chapterVideoNavWrapper = block.querySelector(".chapter-tool__items");
    if (!chapterVideoNavWrapper) return;
    
    const blockId = block.id;
    const isDarkMode = chapterVideoNavWrapper.classList.contains("chapter-tool__items--dark");
    const darkLightModeClass = isDarkMode ? "dark" : "light";
    const chapterVideoNavContent = createTag("div", {
        class: `chapter-tool__items-content ${customClass}`,
        id: `${blockId}-wistia-${wistiaID}-timestamp-list`,
    });

    if (chapterListData.length == 0) {

        let noChapterItem = `
            <div class="chapter-item chapter-item--${darkLightModeClass} active">
                <h6 class="text-center"> No Chapters </h6>
            </div>`;
        
        chapterVideoNavContent.innerHTML = noChapterItem;

    } else {

        chapterListData.forEach((chapter, index) => {

            let isActiveClass = index == 0 ? "active" : ""; // init active for 1st item

            // Skip the current iteration if no title/time is specified
            if (!chapter?.time || !chapter?.title) return;

            let chapterTimestamp = formatTime(chapter.time);
            let chapterHref = `#wistia_${wistiaID}?time=${chapter.time}`;
            let chapterToolItem = `
                <a class="chapter-item chapter-item--${darkLightModeClass} ${isActiveClass}" href="${chapterHref}">
                    <div> <span> ${chapterTimestamp} </span> </div>
                    <h6> ${chapter.title} </h6>
                </a>`;

            chapterVideoNavContent.innerHTML += chapterToolItem;
        
        });
    }

    chapterVideoNavWrapper.append(chapterVideoNavContent);

    return chapterListData;

};

// Sub Video Nav ---
const createSubVideoNavTitle = (cmsVideoListData, wistiaVideoData) => {

    if (cmsVideoListData?.title) return `<h6> ${cmsVideoListData.title} </h6>`;
    if (wistiaVideoData?.name) return `<h6> ${wistiaVideoData?.name} </h6>`;

    return "";

};

const createSubVideoNavDescription = (cmsVideoDescription) => {
    return cmsVideoDescription?.description ? `<p> ${cmsVideoDescription.description} </p>` : "";
};

const createSubVideoNav = (cmsVideoData, wistiaVideoData, isDarkMode = false, wistiaFallbackImage, customClass = "", isBottomSubNav = false) => {

    const darkLightModeClass = isDarkMode ? "dark" : "light";
    let time = isBottomSubNav ? formatTime(wistiaVideoData.duration) : "";
    let resourceChip = `
        <div class="resource-chip resource-chip--light">
            <div class="resource-chip__icon">
                <span class="icon" data-icon="play-filled-2"></span>
            </div>
            ${time}
        </div>`;

    // use custom image assignedc by cms, or else use default one from wistia
    // resize image to increase loading speed
    let resizeResolution = isBottomSubNav ? 800 : 300;

    let resizedWistiaImage = wistiaFallbackImage.length > 0 ? `${wistiaFallbackImage}?image_resize=${resizeResolution}`: '';
    let imgSrc = cmsVideoData?.image ? cmsVideoData.image : resizedWistiaImage;

    let title = createSubVideoNavTitle(cmsVideoData, wistiaVideoData);
    let description = createSubVideoNavDescription(cmsVideoData);

    let subNavTypeClass = isBottomSubNav ? `sub-video-nav--below sub-video-nav--below--${darkLightModeClass}` : `sub-video-nav--stacked sub-video-nav--stacked--${darkLightModeClass}`;
    let subVideoNav = createTag("div", {
        class: `sub-video-nav ${subNavTypeClass} ${customClass}`,
        "data-wistia-id": cmsVideoData.wistiaID,
    });

    let noImageFallbackClass = imgSrc.length == 0 ? "sub-video-nav__thumbnail--not-available" : "";

    subVideoNav.innerHTML = `
        <div class="sub-video-nav__thumbnail ${noImageFallbackClass}">
            <img src="${imgSrc}" alt="" />
        </div>
        <div class="sub-video-nav__content">
            ${isBottomSubNav ? resourceChip : ""}
            ${title}
            ${description}
        </div>
    `;

    return subVideoNav;

};

const autoplaySubNavVideoInList = (block, wistiaID) => {

    window._wq = window._wq || [];

    // need assign ID specifically to ensure that id is unique, as we can have videos of same wistia ID on the same page
    const blockId = block.id;
    const videoId = `${blockId}-wistia-embed`;

    _wq.push({
        id: videoId,
        onReady: function (video) {

            const subNavItems = block.querySelectorAll(".sub-video-nav");

            video.bind("end", function () {

                let currentIndex = [...subNavItems].findIndex((item) => item.getAttribute("data-wistia-id") === wistiaID);
                let nextVideoIndex = currentIndex == subNavItems.length - 1 ? 0 : currentIndex + 1;

                // autoplay if not last video in playlist
                if (nextVideoIndex != 0) {
                    subNavItems[nextVideoIndex].click();
                }

            });

        },
    });

};

// Switch video functionality ---
const toggleChapterListDisplay = (block, blockId, activeWistiaID) => {

    const currentChapterList = block.querySelector(".chapter-tool__items-content.active");
    currentChapterList.classList.remove("active");

    const activeChapterList = block.querySelector(`#${blockId}-wistia-${activeWistiaID}-timestamp-list`);
    activeChapterList.classList.add("active");

};

const toggleVideoElement = (block, blockId, activeWistiaID) => {

    // NOTE: as wistia switch video via link will hardcode width & height of player that causes ui bug, cannot use the url method stated in their documentation
    const mainVideoWrapper = block.querySelector(".video-player-module__wistia-wrapper");
    const mainVideo = mainVideoWrapper.querySelector(".wistia_embed");
    const wistiaEmbedId = `${blockId}-wistia-embed`;

    // need to have `wistia_responsive_padding` & `wistia_responsive_wrapper` assigned in .video-player-module__wistia-wrapper for ui to work properly
    // resumable=false is used to stop caching video progress in browser as it may affect the go to specific time function
    const newVideo = createTag("div", {
        id: wistiaEmbedId,
        class: `wistia_embed wistia_async_${activeWistiaID} autoPlay=true resumable=false`,
        style: "height:100%; width:100%;",
    });

    mainVideo.replaceWith(newVideo);

    // flag to not scroll to video if it's initial load on page by param
    let isInitialLoad = block.classList.contains('ready') ? false : true;

    // ensure video is always visible in viewpoint
    if (!isInitialLoad) scrollElementIntoViewIfNeeded(mainVideoWrapper);

};

const toggleRecommendedVideoItem = (block, subVideoNav) => {

    const hiddenSubVideoNav = block.querySelector(".sub-video-nav.hide");
    
    hiddenSubVideoNav.classList.remove("hide");
    subVideoNav.classList.add("hide");

};

const toggleVideoInfo = (block, subVideoNav) => {

    const infoContainer = block.querySelector(".video-player-module__video-info");
    
    if (!infoContainer) return;

    const infoTitle = infoContainer.querySelector("h5");
    const infoDescription = infoContainer.querySelector("p");
    const videoTitle = subVideoNav.querySelector("h6");
    const videoDescription = subVideoNav.querySelector("p");

    if (infoTitle && videoTitle) infoTitle.innerText = videoTitle.innerText;
    if (infoDescription && videoDescription) infoDescription.innerText = videoDescription.innerText;

};

const updateNoChapterClassOnVideoPlayerModule = (block, addClass = true) => {
    const videoModuleChapterToolWrapper = block.querySelector('.video-player-module--chapters');
    
    if (addClass) {
        videoModuleChapterToolWrapper.classList.add("video-player-module--chapters--no-chapters");
    } else {
        videoModuleChapterToolWrapper.classList.remove("video-player-module--chapters--no-chapters");
    }
}

const toggleVideoDisplayForRecommendVideoNav = (block, subVideoNav, isChapterListOn, chapterListData = null, wistiaID) => {

    const blockId = block.id;
    const activeWistiaID = subVideoNav.getAttribute("data-wistia-id"); // clicked active one
    const oldActiveNav = block.querySelector(".sub-video-nav.hide");
    const oldActiveWistiaID = oldActiveNav.getAttribute("data-wistia-id");

    toggleVideoElement(block, blockId, activeWistiaID);
    toggleVideoInfo(block, subVideoNav);
    toggleRecommendedVideoItem(block, subVideoNav);

    if (chapterListData) {

        toggleChapterListDisplay(block, blockId, activeWistiaID);

        let shouldAddNoChapterClass = chapterListData.length == 0 || !isChapterListOn;
        updateNoChapterClassOnVideoPlayerModule(block, shouldAddNoChapterClass);

        // reinit chapter progress tracking
        updateChapterActiveClassBasedOnVideoProgress(chapterListData, wistiaID, block);

    }

    // to ensure video start from fresh when switched video
    removeWistiaVideoProgressLocalStorageCache(oldActiveWistiaID);

};

const toggleVideoDisplayForVideoSubNav = (block, subVideoNav, wistiaID) => {

    const blockId = block.id;
    const activeWistiaID = subVideoNav.getAttribute("data-wistia-id"); // clicked active one
    const oldActiveNav = block.querySelector(".sub-video-nav.active");
    const oldActiveWistiaID = oldActiveNav.getAttribute("data-wistia-id");

    // update active class
    oldActiveNav.classList.remove("active");
    subVideoNav.classList.add("active");

    toggleVideoElement(block, blockId, activeWistiaID);
    toggleVideoInfo(block, subVideoNav);
    autoplaySubNavVideoInList(block, wistiaID);

    // to ensure video start from fresh when switched video
    removeWistiaVideoProgressLocalStorageCache(oldActiveWistiaID);

};

// init sub video nav
const initChapterVideoRecommended = (block, cmsVideoData, wistiaVideoData, isChapterListOn = false, chapterListData = null, currentIndex, wistiaFallbackImage) => {

    const recommendSubVideoNav = block.querySelector(".sub-video-nav-wrapper--recommended");
    const recommendVideosWrapper = block.querySelector(".sub-video-nav-wrapper__content");

    if (!recommendSubVideoNav || !recommendVideosWrapper) return;

    const isDarkMode = recommendSubVideoNav.classList.contains("sub-video-nav-wrapper--dark");
    let customClass = currentIndex == 0 ? "hide" : "";
    let isBottomSubNav = true;
    let subVideoNav = createSubVideoNav(cmsVideoData, wistiaVideoData, isDarkMode, wistiaFallbackImage, customClass, isBottomSubNav);

    recommendVideosWrapper.append(subVideoNav);
    subVideoNav.addEventListener("click", () => {
        toggleVideoDisplayForRecommendVideoNav(block, subVideoNav, isChapterListOn, chapterListData, cmsVideoData.wistiaID);
    });

};

const initVideoSubNavItem = (block, cmsVideoData, wistiaVideoData, currentIndex) => {

    const videoSubNavWrapper = block.querySelector(".sub-video-nav-wrapper");
    const videoSubNavContent = block.querySelector(".sub-video-nav-wrapper__content");

    if (!videoSubNavWrapper || !videoSubNavContent) return;

    const isDarkMode = videoSubNavWrapper.classList.contains("sub-video-nav-wrapper--dark");
    const wistiaID = cmsVideoData.wistiaID;
    let customClass = currentIndex == 0 ? "active" : "";
    let thumnailImgUrl = wistiaVideoData.thumbnail.url;
    let wistiaFallbackImage = thumnailImgUrl.replace(/\?.*$/, "");
    let subVideoNavItem = createSubVideoNav(cmsVideoData, wistiaVideoData, isDarkMode, wistiaFallbackImage, customClass);

    videoSubNavContent.append(subVideoNavItem);
    subVideoNavItem.addEventListener("click", () => {
        toggleVideoDisplayForVideoSubNav(block, subVideoNavItem, wistiaID);
    });

};

const initChapterVideoPlayerUI = (videoListData, block, displayVideoInfo, displayChapterList) => {

    // add class to center video if there's no chapter list
    const videoPlayerModule = block.querySelector(".video-player-module");
    const recommendedVideoSection = block.querySelector(".sub-video-nav-wrapper--recommended");

    if (!displayChapterList) {
        videoPlayerModule.classList.add("video-player-module--center-video");

        // center video nav, 2 columns layout
        if (recommendedVideoSection) recommendedVideoSection.classList.add("sub-video-nav-wrapper--center");

        // 3 columns layout
        if (recommendedVideoSection && videoListData.length >= 4) {
            recommendedVideoSection.classList.add("sub-video-nav-wrapper--3-col");
        }
    }

    // init video block inner elements
    videoListData.forEach((videoData, index) => {

        let videoNavActiveClass = index == 0 ? "active" : "";
        const { wistiaID, cmsVideoData, wistiaChapterData, wistiaMainData } = videoData;
        let chapterListData = null;

        if (displayChapterList) {

            // Initialize chapter list (side control)
            const rawChapterListData = wistiaChapterData.plugin?.chapters?.chapterList;

            chapterListData = processChapterListData(rawChapterListData);

            initChapterVideoNav(block, wistiaID, chapterListData, videoNavActiveClass);

            // init first video setting
            if (index == 0) {
                // init progress tracking for current video on updating active chapter
                updateChapterActiveClassBasedOnVideoProgress(chapterListData, wistiaID, block);
                removeWistiaVideoProgressLocalStorageCache(wistiaID);

                // if chapterlist is not on / there's no chapter items, hide chapter section & center video
                if (videoData.hasChapterList == "false" || chapterListData.length == 0) { 
                    updateNoChapterClassOnVideoPlayerModule(block, true);
                }
            }

        }

        if (index == 0 && displayVideoInfo) { 
            addDisplayVideoInfo(block, cmsVideoData, wistiaMainData?.name);
        }

        // Initialize recommended video items (bottom)
        let wistiaFallbackImage = wistiaChapterData?.unalteredStillImageAsset?.url || wistiaMainData?.thumbnail?.url || '';
        let wistiaFallbackImagePath = wistiaFallbackImage.replace(/\?.*$/, "");
        let isChapterListOn = videoData.hasChapterList == "true"

        initChapterVideoRecommended(block, cmsVideoData, wistiaMainData, isChapterListOn, chapterListData, index, wistiaFallbackImagePath);

    });

};

const intVideoPlayerWithTabs = () => {
    const blocks = document.querySelectorAll('.video-player-tabs');
    if (!blocks || blocks.length === 0) return;

    const layoutBreakpoint = videoModuleLayoutConfig["breakpoints"]['multiple'];

    blocks.forEach((block) => {
        const tabButtons = block.querySelectorAll('.tablist-link');
        if (!tabButtons || tabButtons.length == 0) return;
        
        tabButtons.forEach((tabButton) => {
            tabButton.addEventListener('shown.bs.tab', function (event) {
                let targetTab = event.target; // newly activated tab
                if (!targetTab) return;
                
                let tabContentSelector = targetTab.getAttribute('data-bs-target');
                if (!tabContentSelector) return;

                let tabContent = block.querySelector(tabContentSelector);
                if (!tabContent) return;

                let video = tabContent.querySelector(".video-player-module__video");
                let videoNav = tabContent.querySelector(".video-player-module__video-nav");

                if (video && videoNav) {
                    convertVideoNavHeightBasedOnVideo(video, videoNav, layoutBreakpoint);
                }
            })
        });
    });
};

const reorderVideoListBasedOnPageParam = (block) => {
    let wistiaID = getParamValueFromSearchParamsByKey('wistia-id');
    if (!wistiaID) return;

    const targetMainVideoControl = block.querySelector(`[data-wistia-id="${wistiaID}"]`);
    if (!targetMainVideoControl) return;

    // click target video control directly to make it display as main video
    targetMainVideoControl.click();

    // disable autoplay when first landed on page with param
    const mainVideo = block.querySelector(`.wistia_embed`);
    if (mainVideo) mainVideo.classList.remove('autoPlay=true');
}

// Exports
// init player block with specific player type
export const initVideoChapterPlayerBlock = async (blockId, cmsVideoListData, displayVideoInfo = false) => {

    if (!blockId || blockId.length <= 0) {
        console.error(`Fail to init: Need to put valid block ID to veevaLib.initVideoChapterPlayerBlock() function`);
        return;
    }

    const block = document.querySelector(`#${blockId}`);

    if (!block) {
        console.error(`Fail to init: Couldn\'t find block with id: "${blockId}"`);
        return;
    }

    // get wistia video data from APIs
    const videoListData = [];

    for (let index = 0; index < cmsVideoListData.length; index++) {

        const videoData = cmsVideoListData[index];
        let wistiaID = videoData.wistiaID;

        try {

            // Fetch chapter data and main data for the current item
            const [wistiaChapterData, wistiaMainData] = await Promise.all([getVideoChapterData(wistiaID), getVideoMainData(wistiaID)]);
            const hasChapterList = wistiaChapterData?.plugin?.chapters?.on ? wistiaChapterData?.plugin?.chapters?.on : "false";

            const wistiaVideoData = {
                wistiaID,
                hasChapterList,
                cmsVideoData: videoData,
                wistiaChapterData,
                wistiaMainData,
            };

            videoListData.push(wistiaVideoData);

        } catch (error) {
            console.error("Error fetching or processing video data:", error);
        }

    }

    // only always show chapters column on vault basics 
    const alwaysShowChapterColumn = block.classList.contains("video-player-chapters--always-show-chapters");

    // if every video has chapters, display the chapter list, else hide it & center video
    const displayChapterList = alwaysShowChapterColumn ? true : videoListData.every((data) => data.hasChapterList == "true");

    initChapterVideoPlayerUI(videoListData, block, displayVideoInfo, displayChapterList);

    // sync chapter list height with video player if chapter list exists
    if (displayChapterList) dispatchResizeEventToTriggerNavHeightSync();

    // page param as ?wistia-id=xxxxxxx
    reorderVideoListBasedOnPageParam(block);

    renderIconsInBlock(block);

    // display loaded block content & hide spinning circle
    block.classList.add('ready');

};

export const initVideoMultiplePlayerBlock = async (blockId, cmsVideoListData, displayVideoInfo = false) => {

    const block = document.querySelector(`#${blockId}`);
    
    if (!block) {
        console.error(`Fail to init: Couldn\'t find block with id: '${blockId}`);
        return;
    }

    for (let index = 0; index < cmsVideoListData.length; index++) {

        const cmsVideoData = cmsVideoListData[index];
        let wistiaID = cmsVideoData.wistiaID;

        try {

            const wistiaMainData = await getVideoMainData(wistiaID);
            initVideoSubNavItem(block, cmsVideoData, wistiaMainData, index);

            if (index == 0 && displayVideoInfo) {
                addDisplayVideoInfo(block, cmsVideoData, wistiaMainData?.name);
            }

        } catch (error) {
            console.error("Error fetching or processing video data:", error);
        }

    }

    dispatchResizeEventToTriggerNavHeightSync();

};

// init player block general
export const initVideoBlocks = () => {
    initVideoPlayerID();
    initVideoModuleUI();

    intVideoPlayerWithTabs();
};