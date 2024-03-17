/*
import {ExtPay} from './ExtPay.js'
function openExtensionPay(){
    const extpay = ExtPay('ceres-cart')
    extpay.openPaymentPage();
}

var button = document.getElementById("extensionPayButton");
button.addEventListener("click", openExtensionPay);
*/ 

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

