// pause animation to be less distracting when popover video is opened
const initFeaturedStackCardPopoverCustomEventEmit = (video, card) => {

    const featuredStackCarousel = card.closest(".featured-stack-carousel");
    if (!featuredStackCarousel) return;

    video.bind("popovershow", () => {
        featuredStackCarousel.dispatchEvent(new CustomEvent("popoverActive", {}));
    });

    video.bind("popoverhide", () => {
        featuredStackCarousel.dispatchEvent(new CustomEvent("popoverInactive", {}));
    });

};

// ** need to init unqiue block id before use to ensure video has unique id, or else it may behave weirdly
export const initPopoverVideoOnWistiaVideoCards = (wistiaVideoCards) => {
    wistiaVideoCards.forEach((card, index) => {

        const wistiaVideoID = card.getAttribute("data-wistia-video-id");
        if (!wistiaVideoID || !wistiaVideoID.length > 0) return;

        // need to have this element to ensure the video is rendered in ui
        const wistiaVideoPreviewElement = card.querySelector(".video.wistia-video");
        if (!wistiaVideoPreviewElement) return;

        // pointer-events is set to `none` to show video thumbnail preview without triggering popover twice
        wistiaVideoPreviewElement.classList.add("wistia_embed", "popover=true", "popoverContent=thumbnail", `wistia_async_${wistiaVideoID}`);

        // need to assign unique id to avoid error
        let videoEmbed = card.querySelector(".wistia_embed");
        let block = card.closest("section");
        let cardId = `${block.id}-card-${index}-wistia-embed-${wistiaVideoID}`;
        
        videoEmbed.id = cardId;

        card.addEventListener("click", () => {
            if (window._wq) {
                window._wq.push({
                    id: cardId,
                    options: {
                        popover: true,
                        playButton: "true",
                    },
                    onReady: (video) => {
                        initFeaturedStackCardPopoverCustomEventEmit(video, card);

                        video.play();
                    },
                });
            }
        });

    });
};