// ON-START ANIMATIONS
gsap.from('.image', {x: -200})
gsap.from('.logo', {x: 200})



// ON-SCROLL ANIMATIONS HOME

let tlSlidingText = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

let tlLogo = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

let tlImage = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: 1,
    },
});

let tlAboutTitle = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '50%',
        scrub: 1,
    },
});

let tlAboutText = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

let tlAboutImage = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '90%',
        scrub: 1,
    },
});

let tlHome = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '200%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
    }
});

tlSlidingText.fromTo('.sliding-text', {y:0}, {y:-400})
tlLogo.fromTo('.logo', {scale: 5}, {scale: 1, top: '1.8rem', left: '5rem'})
tlImage.fromTo('.image-container', {x:0}, {x: 1500})


// ON-SCROLL ANIMATIONS ABOUT PAGE
tlAboutTitle.fromTo('.about-title', {x:-500}, {x:0})
tlAboutText.fromTo('.about-text', {x:-500}, {x:0})
tlAboutImage.fromTo('.about-image', {x:1200}, {x:0})


// SLIDER ANIMATION
var slider = new KeenSlider(
    "#my-keen-slider",
    {
      loop: true,
      vertical: true,
      spacing: 10,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )