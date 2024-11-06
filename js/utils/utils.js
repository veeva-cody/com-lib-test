import { breakpoints } from './consts';

export const createTag = (tag, attributes, html) => {

    const el = document.createElement(tag);
    
    if (html) {
        if (html instanceof HTMLElement || html instanceof SVGElement) {
            el.append(html);
        } else {
            el.insertAdjacentHTML("beforeend", html);
        }
    }

    if (attributes) {
        Object.entries(attributes).forEach(([key, val]) => {
            el.setAttribute(key, val);
        });
    }

    return el;

};

// format time from secs into hour:min:sec format
export const formatTime = (timeInSeconds) => {

    // Calculate hours, minutes, and seconds
    let hours = Math.floor(timeInSeconds / 3600);
    let remainingSeconds = timeInSeconds % 3600;
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = Math.floor(remainingSeconds % 60);

    // Add leading zeros if necessary
    let formattedHours = hours == "0" ? "" : hours + ":";
    let formattedMinutes = minutes < 10 && formattedHours !== "" ? "0" + minutes : minutes;
    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Construct the formatted time string
    return formattedHours + formattedMinutes + ":" + formattedSeconds;

};

// equalize the heights of elements to match the tallest element
export const equalizeHeights = (elements) => {

    let tallestHeight = 0;
    
    elements.forEach(element => {
        const height = element.clientHeight;
        if (height > tallestHeight) tallestHeight = height;
    });

    elements.forEach(element => {
        element.style.height = `${tallestHeight}px`;
    });

};

// reset the heights of elements to auto
export const resetHeights = (elements) => {
    elements.forEach(element => {
        element.style.height = 'auto';
    });
};

export const getBreakpoint = (size) => {
    
    const breakpoint = breakpoints[size]
    
    if (!breakpoint) {
        console.log('Invalid size passed to getBreakpoint util. Valid sizes are: xs, sm, md, lg, xl, xxl, xxxl')
        return undefined
    }
    
    return breakpoint
};

export const convertToSlug = (text) => {
    // Remove the initial number and any leading whitespace
    const trimmedText = text.replace(/^\d+\)\s*/, '');
    
    // Convert to lowercase and replace non-alphanumeric characters with hyphens
    return trimmedText.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
}

// by Top or Bottom
export const getElementInViewPercentage = (element, isTop = true) => {
    let rectProperty = isTop ? 'top' : 'bottom';
    let elementRect = element.getBoundingClientRect();
    let elementRectDimension = elementRect[rectProperty];
    let tocInViewPerecentage = elementRectDimension / window.innerHeight;

    return tocInViewPerecentage;
};

export const trimPrefix = (str) => {
    // ^\d+\)\s* matches the beginning digits followed by ')' and optional whitespace
    return str.replace(/^\d+\)\s*/, '');
}

export const getParamValueFromSearchParamsByKey = (key) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get(key);

    return paramValue ? paramValue : false;
}


function isValidTimeFormat(timeString) {
    // Matches format "X:YY" where X is one or more digits and YY is two digits
    const regex = /^\d+:\d{1,2}$/; 
    return regex.test(timeString);
}

export const timeStringToSeconds = (timeString) => {
    if (!isValidTimeFormat(timeString)) return false; 

    const [minutes, seconds] = timeString.split(':').map(Number);
    return (minutes * 60) + seconds;
}
