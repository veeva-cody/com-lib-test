// NOTE: used specifically for modifying the layout so that it fits closer to the figma design without content re-entry
// PLZ remove following functions in future if restruturing on html content is allowed

// specific styles as these pages uses <strong/> as the title instead of normal heading tags, like <h2> <h3>
const initStyleOnPressReleaseResourceContent = () => {
    const pressReleaseContent = document.querySelector(".resource-type-press-release .content-block__content, .resource-type-news-press-release .content-block__content");

    if (!pressReleaseContent) return;

    // avoid first strong element in introduction to be styled as heading
    const introductionHighlightText = pressReleaseContent.querySelector("strong");
    if (introductionHighlightText) introductionHighlightText.classList.add("introduction-highlight-text");
};

// main
export const initResourceContent = () => {
    initStyleOnPressReleaseResourceContent();
};
