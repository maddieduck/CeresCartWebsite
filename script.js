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
function handleScrollAndResize() {
    var productSection = document.getElementById('product');
    var desktopImage = document.querySelector('.desktopImage');
    var screenshot = document.querySelector('.screenshot');
    var rect = productSection.getBoundingClientRect();

    // Position screenshot 10px below desktopImage
    var desktopImageRect = desktopImage.getBoundingClientRect();

    // Check if the section is in the viewport
    if (rect.top > 0 ) { //above the product section
        desktopImage.style.position = 'absolute'; 
        desktopImage.style.top = '50vh'; 
        desktopImage.style.transform = 'translateY(-50%)'; 
        desktopImage.style.bottom = ''; 
    }else if(rect.bottom < window.innerHeight){ //below the product section
        desktopImage.style.position = 'absolute'; 
        desktopImage.style.bottom = '50vh'; 
        desktopImage.style.top =  ''; 
        desktopImage.style.transform = 'translateY(50%)'; 
    } else { //in the product section 
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
    const screenshotImage = document.getElementById('screenshot');
    //console.log('screen percent scroll', scrollPercentage)
    if (scrollPercentage < 0.15) {
        screenshotImage.src = '/images/Screenshot 1.png';
    } else if (scrollPercentage < 0.2) {
        screenshotImage.src = '/images/Screenshot 2.png';
    } else if (scrollPercentage < 0.3) {
        screenshotImage.src = '/images/Screenshot 3.png';
    } else if (scrollPercentage < 0.5) {
        screenshotImage.src = '/images/Screenshot 4.png';
    } else if (scrollPercentage < 0.55) {
        screenshotImage.src = '/images/Screenshot 5.png';
    } else if (scrollPercentage < 0.6) {
        screenshotImage.src = '/images/Screenshot 6.png';
    } else if (scrollPercentage < 0.7) {
        screenshotImage.src = '/images/Screenshot 7.png';
    } else if (scrollPercentage < 0.8) {
        screenshotImage.src = '/images/Screenshot 8.png';
    } else if (scrollPercentage < 0.95) {
        screenshotImage.src = '/images/Screenshot 9.png';
    }   
}

// Add event listeners for scroll and resize
document.addEventListener('scroll', handleScrollAndResize);
window.addEventListener('resize', handleScrollAndResize);

