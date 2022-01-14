const cover = document.querySelector('#intro');

const intro = anime.timeline();
const tl = anime.timeline({
    autoplay: false,
});

intro.add({
    targets: "#intro",
    scaleX: [0, 1],
    duration: 1200,
    easing: "easeInOutExpo"
})
.add({
    targets: "#intro .cover",
    scaleY: [0.998, 0],
    duration: 1200,
    easing: "easeInOutExpo",
})
.add({
    targets: "#intro .bg",
    scale: [1.2, 1],
    duration: 1200,
    easing: "easeInOutExpo",
}, '-=1200')

anime({
    targets: "#intro .title p",
    translateY: [150, 0],
    duration: 1500,
    opacity:[0, 1] ,
    delay: (el, i) => 1000 + 30 * i,
    easing: "easeInOutExpo"
})



tl.add({
    targets: ".post .cover",
    scaleY: [1, 0],
    duration: 1200,
    delay: (el, i) => 1000 + 30 * i,
    easing: "easeInOutExpo"
})
.add({
    targets: "#showcase .title p",
    translateY: [150, 0],
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
    easing: "easeInOutExpo"
}, '-=1200')
.add({
    targets: "header",
    opacity: [0, 1],
    duration: 1200,
    easing: "easeInOutExpo"
}, '-=1200')

cover.addEventListener("click", e => {
    anime({
        targets: ".bottom",
        scaleY: [1, 20],
        duration: 1000,
        easing: "easeInOutExpo"
    }).finished.then(() => {
        cover.style.display = "none"
        document.querySelector('.bottom').style.display = "none"
    })
    tl.play();

})



