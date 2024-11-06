// NPM Modules.
import gsap from 'gsap';
import throttle from 'lodash-es/throttle';

/*
 * There should only be one Alert Banner per page.
 *
 * Additional banners won't initialize.
 */
export const initAlertBanner = () => {

    const banner = document.querySelector('.alert-banner');
    const footer = document.querySelector('footer');

    if (!banner) return;

    const threshold = { top: 100, bottom: 0 };
    let isHidden = true;

    gsap.set(banner, { autoAlpha: 0 });
    window.addEventListener('scroll', throttle(e => {

        const offset = window.scrollY;
        threshold.bottom = (document.body.scrollHeight - window.innerHeight);

        if (footer) {
            threshold.bottom -= footer.offsetHeight;
        }
        
        if (offset > threshold.top && offset < threshold.bottom && isHidden) {
            isHidden = false;
            gsap.to(banner, { autoAlpha: 1, duration: 0.5, ease: 'power3.inOut' });
        } else if ((offset <= threshold.top || offset >= threshold.bottom) && !isHidden) {
            isHidden = true;
            gsap.to(banner, { autoAlpha: 0, duration: 0.5, ease: 'power3.inOut' });
        }

    }, 250));

};