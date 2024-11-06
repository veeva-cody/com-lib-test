export const initSummitAgendaLoadingAnimation = () => {
    let summitAgendaWrapper = document.querySelector('.summit-agenda #agenda-wrapper');

    if (!summitAgendaWrapper) return;

    summitAgendaWrapper.classList.add('ready');
}