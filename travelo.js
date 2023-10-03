let slides = document.querySelectorAll(".contentss");
let nav_ele = document.querySelectorAll(".nav-ele")
let nav_bar = document.querySelector(".navbar")
let sections = document.querySelectorAll('section')
let fa_search = document.querySelector(".fa-search");
let fa_bars = document.querySelector(".fa-bars");
let search = document.querySelector(".search-bar")
let a = -1;
let s = -0;

let f = () => {
    // slides.forEach(Element => {
    //     Element.style.left = `${a * 100}`
    // })
    a++;
    if (a < slides.length) {
        slides[a].style.marginLeft = `-100%`;
    }
    if (a == slides.length - 1) {
        slides.forEach(slide => {
            slide.style.marginLeft = "0";

        });

        a = -1
    }

}
setInterval(f, a <= 3 ? 3000 : 10)




nav_ele.forEach(element => {

    element.addEventListener('click', () => {
        nav_ele.forEach(elements => {
            elements.classList.remove('active');
        });
        element.classList.add('active');

    })
});



//  this code is likely part of a larger script that monitors the user's scroll position and updates the "active" state of navigation links based on which section of the webpage is currently in view
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight
        let id = section.getAttribute('id')
        if (top >= offset && top < offset + height) {
            nav_ele.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active')
            })
        };
    });
}


// scroll reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 10,

});
ScrollReveal().reveal('.contents, .heading, .box', { origin: 'top' })

ScrollReveal().reveal('.images,.stick', { origin: 'left' })

ScrollReveal().reveal('.forms', { origin: 'right' })


fa_search.addEventListener('click', () => {
    search.classList.add('active')
    fa_search.style.color = "white"

})
document.querySelector(".close").addEventListener('click', () => {
    search.classList.remove('active')
    fa_search.style.color = "yellow"
})
fa_bars.addEventListener('click', () => {
    nav_bar.classList.add('active')

    if (fa_bars.classList.contains('fa-bars')) {
        console.log("clicked")
        fa_bars.classList.remove('fa-bars')
        fa_bars.classList.add('fa-times')
    }
    else if (fa_bars.classList.contains('fa-times')) {
        nav_bar.classList.remove('active')
        console.log("clicked2")
        fa_bars.classList.remove('fa-times')
        fa_bars.classList.add('fa-bars')
    }

})
