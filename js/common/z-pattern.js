const duplicateImageSectionForZpatternUI = () => {

    const allImagePositionChangeZpatternBlocks = document.querySelectorAll(".z-pattern-products, .z-pattern-stats");
    
    if (!allImagePositionChangeZpatternBlocks) return;

    allImagePositionChangeZpatternBlocks.forEach((block) => {

        let imageSection = block.querySelector(".z-pattern__image");
        let targetSection = block.querySelector(".z-pattern__wrapper");

        if (!imageSection || !targetSection) return;

        let desktopImageSection = imageSection.cloneNode(true);

        desktopImageSection.classList.add("z-pattern__image--desktop");
        imageSection.classList.add("z-pattern__image--mobile");
        targetSection.appendChild(desktopImageSection);
    
    });

};

export const initZpattern = () => {
    duplicateImageSectionForZpatternUI();
};