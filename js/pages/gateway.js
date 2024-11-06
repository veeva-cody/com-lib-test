const addHideActiveSubVideoNavClassToVideoBlockMultiple = (gatewayWrapper) => {
    let videoBlockMultiple = gatewayWrapper.querySelector('.video-player-multiple');
    if (!videoBlockMultiple) return;

    videoBlockMultiple.classList.add('video-player-multiple--hide-active-sub-video-nav');
}

export const initGateway = () => {
    let gatewayWrapper = document.querySelector('#gateway');
    if (!gatewayWrapper) return;

    addHideActiveSubVideoNavClassToVideoBlockMultiple(gatewayWrapper);
}