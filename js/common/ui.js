
const updateTransparentBgHeightInBlendedBgSection = (section, isTop) => {
    const sectionWithTransparentBg = isTop ? section.querySelector('section:first-of-type') : section.querySelector('section:last-of-type');
    if (!sectionWithTransparentBg) return;

    const computedStyle = getComputedStyle(sectionWithTransparentBg);
    const paddingTop = parseFloat(computedStyle.paddingTop);
    const paddingBottom = parseFloat(computedStyle.paddingBottom);
    const halfHeightExcludingPadding = (sectionWithTransparentBg.clientHeight - paddingTop - paddingBottom) / 2;

    section.style = `--transparent-bg-height: ${halfHeightExcludingPadding}px`;
}

const initBlendedBackgroundHeight = () => {
    const blendedBgWrappers = document.querySelectorAll('.blended-bg');    
    if (!blendedBgWrappers || blendedBgWrappers.length == 0) return;

    blendedBgWrappers.forEach((wrapper) => {
        let isBlendedTop = wrapper.classList.contains('blended-bg--top');
        let isBlendedBottom = wrapper.classList.contains('blended-bg--bottom');
        
        if (isBlendedTop || isBlendedBottom) { 
            let isTop = isBlendedTop ? true : false;
            updateTransparentBgHeightInBlendedBgSection(wrapper, isTop);
            
            window.addEventListener('resize', updateTransparentBgHeightInBlendedBgSection(wrapper, isTop));
        }
    });
}

export const initGenericUI = () => {
    initBlendedBackgroundHeight();
}