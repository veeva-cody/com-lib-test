// Setup region selector dropdown.
const dropdown        = document.getElementById('select-region');
const toggle          = dropdown.querySelector('.dropdown-toggle');
const toggleText      = toggle.querySelector('h6');
const items           = dropdown.getElementsByClassName('dropdown-item');
const iframeContainer = document.getElementById('iframe-container');

for (let item of items) {
    item.addEventListener('click', e => {
        
        // Update the active label.
        toggle.classList.add('filled');
        toggleText.innerHTML = e.target.innerHTML;

        // Reset the iframe container.
        iframeContainer.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '800px';

        // React based on the value selected.
        switch (e.target.dataset.value) {
            case 'usa':
                iframe.setAttribute('src', 'https://go.veeva.com/l/28972/2024-01-24/9pl6hj');
                break;
            case 'canada':
                iframe.setAttribute('src', 'https://go.veeva.com/l/28972/2024-01-26/9plchn');
                break;
            case 'europe':
                iframe.setAttribute('src', 'https://go.veeva.com/l/28972/2024-01-26/9plchv');
                break;
            case 'other':
                iframe.setAttribute('src', 'https://go.veeva.com/l/28972/2024-01-26/9plcjy');
                break;
            default:
                break;
        }

        iframeContainer.appendChild(iframe);

    });
}