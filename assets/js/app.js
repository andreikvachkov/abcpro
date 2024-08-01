document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('.toggle__submenu');

    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            event.preventDefault();

            var submenu = this.nextElementSibling;

            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                document.querySelectorAll('.submenu').forEach(function (sub) {
                    sub.style.display = 'none';
                });
                submenu.style.display = 'block';
            }
        });
    });
    document.addEventListener('click', function (event) {
        var isClickInside = document.querySelector('.header__wrap nav ul li.has__child').contains(event.target);
        if (!isClickInside) {
            document.querySelectorAll('.submenu').forEach(function (sub) {
                sub.style.display = 'none';
            });
        }
    });
});

// 
function openPopup() {
    $('.popup').addClass('active');
    $('body').addClass('no-scroll');
}

function closePopup() {
    $('.popup').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.popupclose').on('click', closePopup);

$('.open__popup').on('click', openPopup);

// 

const reviews__swiper = new Swiper('.reviews__swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 20,

    navigation: {
        nextEl: '.reviews__button__next',
        prevEl: '.reviews__button__prev',
    },
});


// 

jQuery(document).ready(function ($) {
    function YouTubeGetID(url) {
        url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
    }

    $('.reviews-video__content__link').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var link = $(this).attr('href')
        var id = YouTubeGetID(link)
        var thisw = $(this).outerWidth()
        var thish = $(this).outerHeight()
        $(this).append('<iframe width="' + thisw + '" height="' + thish + '" src="https://www.youtube.com/embed/' + id + '?autoplay=1&enablejsapi=1&" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    })
});

// 

const swiper = new Swiper('.reviews-video__swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 20,

    navigation: {
        nextEl: '.reviews-video__button__next',
        prevEl: '.reviews-video__button__prev',
    },
});

// 


function updateProgressBar(input) {
    const container = input.closest('.calculator__filter__container');
    const resultSpan = container.querySelector('.result .result-value');
    const progress = container.querySelector('.slider .progress');

    const value = parseInt(input.value);
    const max = parseInt(input.max);

    resultSpan.textContent = value;

    progress.style.width = ((value / max) * 100) + '%';
}

document.querySelectorAll('.range-input input').forEach(input => {
    updateProgressBar(input);

    input.addEventListener('input', () => {
        updateProgressBar(input);
    });
});


// 

function openCity(evt, cityName, element) {
    var i, tabcontent, tablinks;

    var container = element.closest('.tab-container');

    tabcontent = container.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = container.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    container.querySelector("#" + cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}


// 

const front__swiper = new Swiper('.front__swiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 20,

    pagination: {
        el: '.front__swiper__pagination',
    },

    navigation: {
        nextEl: '.front__swiper__next',
        prevEl: '.front__swiper__prev',
    },
});


// 


function toggleDropdown(dropdownId) {
    document.getElementById(dropdownId).classList.toggle("show");
}


// 


const product__swiper__thumbnail = new Swiper(".product__swiper__thumbnail", {
    slidesPerView: 5,
    spaceBetween: 12,
})
const product__swiper__main = new Swiper('.product__swiper__main', {
    loop: false,
    spaceBetween: 20,
    navigation: {
        nextEl: ".product__swiper__next",
        prevEl: ".product__swiper__prev",
    },
    pagination: {
        el: '.product__swiper__pagination',
    },
    thumbs: {
        swiper: product__swiper__thumbnail,
    },
})