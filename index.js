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
        end: '100%',
        scrub: 1,
    },
});

let tlNav = gsap.timeline({
  scrollTrigger: {
      trigger: '.home',
      start: '0%',
      end: '100%',
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

let tlAboutTitlein = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '40%',
        scrub: 1,
    },
});

let tlAboutTitleout = gsap.timeline({
  scrollTrigger: {
      trigger: '.about',
      start: '10%',
      end: '100%',
      scrub: 1,
  },
});

let tlAboutTextin = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '60%',
        scrub: 1, 
    },
});

let tlAboutTextout = gsap.timeline({
  scrollTrigger: {
      trigger: '.about',
      start: '30%',
      end: '100%',
      scrub: 1, 
  },
});

let tlAboutImagein = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

let tlAboutImageout = gsap.timeline({
  scrollTrigger: {
      trigger: '.about',
      start: '40%',
      end: '100%',
      scrub: 1,
  },
});

let tlHomeSize = gsap.timeline({
  scrollTrigger: {
      trigger: '.home',
      start: '0%',
      end: '200%',
      scrub: 1,
  }
});

let tlHome = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '300%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
    }
});


tlHomeSize.fromTo('.home', {height: '100vh'}, {height: '10vh'})
tlSlidingText.fromTo('.sliding-text', {y:0}, {y:-400})
tlLogo.fromTo('.logo', {scale: 5}, {scale: 1, top: '1.8rem', left: '5rem'})
tlImage.fromTo('.image-container', {x:0}, {x: 1500})
tlNav.fromTo('.white-background', {opacity:0}, {opacity: 1})


// ON-SCROLL ANIMATIONS ABOUT PAGE
tlAboutTitlein.fromTo('.about-title', {opacity: -5, y:500}, {opacity: 1, y:0})
tlAboutTextin.fromTo('.about-text', {opacity: -5, y:500}, {opacity: 1, y:0})
tlAboutImagein.fromTo('.about-image', {opacity: -5, y:1200}, {opacity: 1, y:0})

tlAboutTitleout.fromTo('.about-title', {opacity: 1, y:0}, {opacity: -5, y:-500})
tlAboutTextout.fromTo('.about-text', {opacity: 1, y:0}, {opacity: -5, y:-500})
tlAboutImageout.fromTo('.about-image', {opacity: 1, y:0}, {opacity: -5, y:-1200})


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