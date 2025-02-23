// Runs JavaScript inside the browser when the page loads.
// Extracts all elements' selectors (CSS, ID, Class, etc.) for future automation.

window.addEventListener('DOMContentLoaded', () => {
    console.log('Injecting JavaScript...');

    let elements = document.querySelectorAll('*');
    let accessors = [];

    elements.forEach(el => {
        let path = el.tagName.toLowerCase();
        if (el.id) path += `#${el.id}`;
        if (el.className) path += `.${el.className.split(' ').join('.')}`;
        accessors.push(path);
    });

    console.log('Extracted Selectors:', accessors);
});