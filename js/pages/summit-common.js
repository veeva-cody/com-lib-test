// NPM Modules.
import gsap from 'gsap';
import throttle from 'lodash-es/throttle';
import debounce from 'lodash-es/debounce';

export const initDynamicNav = () => {

    const header = document.querySelector('#veeva-header-nav');
    const adminBar = document.querySelector('#wpadminbar');
    const subNav = document.querySelector('.secondary-navigation');

    if (!header || !subNav) return;

    const threshold = 100;
    let isHidden = false;
    let prevY = 0;
    let adminHeight = 0;

    // if (adminBar) {
    //     adminHeight = adminBar.offsetHeight;
    // }

    // Hide main navigation on scroll.
    window.addEventListener('scroll', throttle(e => {

        const offset = window.scrollY;
        const deltaY = header.offsetHeight;

        // Scrolling down.
        if (offset > threshold && offset > prevY && !isHidden) {

            isHidden = true;
            
            gsap.to(subNav, { y: -deltaY, scale: 1, duration: 0.5, ease: 'power3.inOut' });
            header.classList.add('offscreen');
        
        } else if ((offset < prevY || offset <= threshold) && isHidden) {
            
            isHidden = false;
            
            gsap.to(subNav, { y: 0, scale: 1, duration: 0.5, ease: 'power3.inOut' });
            header.classList.remove('offscreen');
        
        }

        prevY = offset;

    }, 250));

    // Align subNav based on header height.
    window.addEventListener('resize', debounce(e => {
        gsap.set(subNav, { top: (header.offsetHeight + adminHeight) });
    }, 250));

    gsap.set(subNav, { top: (header.offsetHeight + adminHeight) });

};

initDynamicNav();