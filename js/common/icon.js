const updateIconStyle = (icon) => {
    icon.style = `--icon: url('/wp-content/themes/veeva2015/assets/svg/icons/${ icon.dataset.icon }.svg')`;
    icon.classList.add('ready');
}

export const renderIcons = () => {
    const icons = document.querySelectorAll('.veeva-2024 span.icon');
    icons.forEach(icon => updateIconStyle(icon));
};

export const renderIconsInBlock = (block) => {
    if (!block) {
        console.warn('Block for renderIconsInBlock() is not found. ')
        return;
    }
    const icons = block.querySelectorAll('span.icon');

    icons.forEach(icon => updateIconStyle(icon));
}