let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};
function supportsWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height === 2);
    };
    webP.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4WAoAAAAQAAAAFAAAQUxQSCgAAAAQU0lFAAABAAEAAEwEQAA3AA/vvYPAAAAA==";
}

function handleScrollAndResize() {
    var productSection = document.getElementById('product');
    var desktopImage = document.querySelector('.desktopImage');
    var screenshot = document.querySelector('.screenshot');
    var rect = productSection.getBoundingClientRect();

    // Position screenshot 10px below desktopImage
    var desktopImageRect = desktopImage.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top > 0) { // above the product section
        desktopImage.style.position = 'absolute';
        desktopImage.style.top = '50vh';
        desktopImage.style.transform = 'translateY(-50%)';
        desktopImage.style.bottom = '';
    } else if (rect.bottom < window.innerHeight) { // below the product section
        desktopImage.style.position = 'absolute';
        desktopImage.style.bottom = '50vh';
        desktopImage.style.top = '';
        desktopImage.style.transform = 'translateY(50%)';
    } else { // in the product section
        desktopImage.style.position = 'fixed';
        desktopImage.style.top = '50%';
        desktopImage.style.transform = 'translateY(-50%)';
        desktopImage.style.bottom = '';
    }

    var offset = desktopImageRect.height * 0.1;
    screenshot.style.top = (desktopImageRect.top + offset) + 'px';

    // Calculate scroll percentage
    const scrollTop = window.scrollY;
    const sectionTop = productSection.offsetTop;
    const sectionHeight = productSection.scrollHeight;
    const scrollPercentage = (scrollTop - sectionTop) / (sectionHeight - window.innerHeight);
    const screenshotImage = document.getElementById('mainScreenshot');

    supportsWebP(function(support) {
        const extension = support ? 'webp' : 'png';
        if (scrollPercentage < 0.15) {
            screenshotImage.src = `/images/screenshots/Screenshot 1.${extension}`;
        } else if (scrollPercentage < 0.2) {
            screenshotImage.src = `/images/screenshots/Screenshot 2.${extension}`;
        } else if (scrollPercentage < 0.3) {
            screenshotImage.src = `/images/screenshots/Screenshot 3.${extension}`;
        } else if (scrollPercentage < 0.5) {
            screenshotImage.src = `/images/screenshots/Screenshot 4.${extension}`;
        } else if (scrollPercentage < 0.55) {
            screenshotImage.src = `/images/screenshots/Screenshot 5.${extension}`;
        } else if (scrollPercentage < 0.6) {
            screenshotImage.src = `/images/screenshots/Screenshot 6.${extension}`;
        } else if (scrollPercentage < 0.7) {
            screenshotImage.src = `/images/screenshots/Screenshot 7.${extension}`;
        } else if (scrollPercentage < 0.82) {
            screenshotImage.src = `/images/screenshots/Screenshot 8.${extension}`;
        } else if (scrollPercentage < 0.92) {
            screenshotImage.src = `/images/screenshots/Screenshot 9.${extension}`;
        } else if (scrollPercentage < 0.96) {
            screenshotImage.src = `/images/screenshots/Screenshot 10.${extension}`;
        }
    });
}


// Add event listeners for scroll and resize
document.addEventListener('scroll', handleScrollAndResize);
window.addEventListener('resize', handleScrollAndResize);

