var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: true
});

var page4 = document.querySelector(".pagge4")
var cursor = document.querySelector(".cursor")
var pro = document.querySelector(".pro")

addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.2,
    ease: "back.out"
  })
})

gsap.from(".page4 .round", {
  scale: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    markers: false,
    start: "top 50%",
    end: "top -50%",
    scrub: 2,
  }
});
pro.addEventListener("mouseenter", function () {
  cursor.innerHTML = "view more"
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#6cbbc3",
  })

})
pro.addEventListener("mouseleave", function () {
  cursor.innerHTML = ""
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "255, 255, 255, 0.589",
  })
})

