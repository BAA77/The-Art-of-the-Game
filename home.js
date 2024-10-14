// menu toggle
const menuBtn = document.querySelector("#menu-span");
    let menuSwith = false;

menuBtn.addEventListener("click", () => {
    if (menuSwith == false) {
        menuSwith = true;
        menuBtn.textContent = "Close";
        document.querySelector("#header-nav").style.right = "0%";
    } else {
        menuSwith = false;
        menuBtn.textContent = "Menu";
        document.querySelector("#header-nav").style.right = "-60%";
    }
});

document.addEventListener("click", (e) => {
    if (e.target != document.querySelector("#header-nav") && e.target != menuBtn) {
        menuSwith = false;
        menuBtn.textContent = "Menu";
        document.querySelector("#header-nav").style.right = "-60%";
    }
});

// hero page carousel
let carouselNext = document.getElementById("carousel-nxt");
let carouselPrev = document.getElementById("carousel-prev");
let heroCarousel = document.querySelector(".hero-carousel");
let carouselList = document.querySelector(".hero-carousel-list");
let carouselThumbnail = document.querySelector(".hero-carousel-thumbnail");

carouselNext.onclick = function () {
    showSlider("next");
}

carouselPrev.onclick = function () {
    showSlider("prev")
}

let timeRunning = 2000;
let timeAutoNext = 10000;
let runTimeOut;
let timeAutoRun;
runAutoRun = setTimeout(() => {
    carouselNext.click();
}, timeAutoNext)

function showSlider(type) {
    let itemSlider = document.querySelectorAll(".hero-carouse-item");
    let itemThumbnail = document.querySelectorAll(".hero-thumbnail-item");

    if (type === "next") {
        carouselList.appendChild(itemSlider[0]);
        carouselThumbnail.appendChild(itemThumbnail[0]);
        heroCarousel.classList.add("next");
    } else {
        let positionLastItem = itemSlider.length - 1;
        carouselList.prepend(itemSlider[positionLastItem]);
        carouselThumbnail.prepend(itemThumbnail[positionLastItem]);
        heroCarousel.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        heroCarousel.classList.remove("next");
        heroCarousel.classList.remove("prev");
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        carouselNext.click();
    }, timeAutoNext)

}

// header background appearance
window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    let aboutSection = document.querySelector(".about");

    if (aboutSection.getBoundingClientRect().top <= header.getBoundingClientRect().bottom) {
        header.classList.add("header-background");
    } else {
        header.classList.remove("header-background");
    }
});

// about company animation
window.addEventListener("scroll", () => {
    let imgAnimation = document.querySelector(".img-2");
    let showContent = document.querySelector(".about");

    if (imgAnimation.getBoundingClientRect().bottom <= window.innerHeight) {
        imgAnimation.classList.add("about-animate");
    } else {
        imgAnimation.classList.remove("about-animate");
    }

    if (showContent.getBoundingClientRect().top + 80 <= window.innerHeight) {
        showContent.classList.add("show-a-content");
    } else {
        showContent.classList.remove("show-a-content");
    }
});

// services hover effect
let serviceHBtnv = [...document.querySelectorAll(".service-btn")];
let serviceImg = [...document.querySelectorAll(".service-img")];
serviceHBtnv.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
        serviceImg[index].style.filter = "brightness(90%)";
        serviceImg[index].style.transform = "scale(1.02)";
    })
    
    element.addEventListener("mouseout", () => {
        serviceImg[index].style.filter = "brightness(65%)";
        serviceImg[index].style.transform = "scale(1)";
    })
});

// section reveal animation
window.addEventListener("scroll", () => {
    let showContent = document.querySelector(".amp-success");
    let reavealAnimation = document.querySelectorAll(".reveal-animation");
        reavealAnimation = [...reavealAnimation];

    if (showContent.getBoundingClientRect().top + 80 <= window.innerHeight) {
        showContent.classList.add("show-a-content");
    } else {
        showContent.classList.remove("show-a-content");
    }
    
    reavealAnimation.forEach((e) => {
        if (e.getBoundingClientRect().top + 80 <= window.innerHeight) {
            e.classList.add("show-a-content");
        } else {
            e.classList.remove("show-a-content");
        }
    })
});

// company icon appearance
window.addEventListener("scroll", () => {
    let compName = document.querySelector("#company-name");
    let header = document.querySelector(".header");

    if (compName.getBoundingClientRect().bottom <= header.getBoundingClientRect().bottom) {
        document.querySelector("#img-icon").style.visibility = "visible";
    } else {
        document.querySelector("#img-icon").style.visibility = "hidden";
    }
});

// service features control
let fContentDom = document.querySelector(".features-content-wrap");
let prevFBtn = document.querySelector(".left-features-btn");
let nextFBtn = document.querySelector(".right-features-btn");
let disc = [...document.querySelectorAll(".disc")];
let discIndex = 0;

function moveDisc(diskI) {
    discIndex += diskI;

    for (let i of disc) {
        i.classList.remove("active-disc");
    }
    disc[discIndex].classList.add("active-disc");
};

disc[discIndex].classList.add("active-disc");
nextFBtn.addEventListener("click", () => {
    let fContent = document.querySelectorAll(".features-content");

    if (discIndex < disc.length - 1) {
        moveDisc(1);
    } else {
        discIndex = -1;
        moveDisc(1);
    }

    fContentDom.appendChild(fContent[0]);
    fContentDom.classList.add("next");
    fContentDom.classList.remove("prev");
});

prevFBtn.addEventListener("click", () => {
    let fContent = document.querySelectorAll(".features-content");

    if (discIndex == 0) {
        discIndex = disc.length;
        moveDisc(-1);
    } else {
        moveDisc(-1);
    }

    fContentDom.prepend(fContent[fContent.length-1]);
    fContentDom.classList.remove("next");
    fContentDom.classList.add("prev");
});