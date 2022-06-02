function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');


    
function fadeOut(){
    
    setTimeout(loader(), 2000);
}

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
}

// let loginForm = document.querySelector('.login-form-container');
// let loginBtn = document.querySelector('#login-btn');

// loginBtn.onclick = () => {
//     loginForm.classList.toggle('active');
// }

// document.querySelector('#close-login-btn').onclick = () => {
//     loginForm.classList.remove('active');
// }

// Cart Events
// const cartContainer = document.querySelector('.cart-container');
// const cartBtn = document.querySelector('#cart-btn');
// const closeCartBtn = document.querySelector('.cart-close');

// cartBtn.onclick = () => {
//     cartContainer.classList.toggle('active');
// }

// closeCartBtn.onclick = () => {
//     cartContainer.classList.remove('active');
// }

window.onscroll = () => {

    searchForm.classList.remove('active');

    if(window.pageYOffset > 80) {
        document.querySelector('.header .header-2').classList.add('active');

    }else {
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeOut();
}

window.addEventListener('DOMContentLoaded', fadeOut);

// Scroll top js
window.addEventListener('scroll', () => {
    const scroll = document.querySelector('.back-top');
    scroll.classList.toggle('active', window.scrollY > 500);
})

document.querySelector('.back-top').addEventListener('click', scrollTop);

function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

window.onload = () => {
    if(window.pageYOffset > 80) {
        document.querySelector('.header .header-2').classList.add('active');

    }else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}



// Swiper slider home js
var swiper = new Swiper(".books-slider", {
    spaceBetween: 5,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Swiper slider featured 
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// Swiper slider arrivals 
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Swiper slider reviews
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// // Swiper slider blogs
 var swiper = new Swiper(".blogs-slider", {
     spaceBetween: 10,
     grabCursor: true,
    loop: true,
    centeredSlides: true,
     autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

