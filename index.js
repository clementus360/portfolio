window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

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

let tlHomeSize = gsap.timeline({
  scrollTrigger: {
      trigger: '.home',
      start: '0%',
      end: '100%',
      scrub: 1,
  }
});


let tlAbout = gsap.timeline({
  scrollTrigger: {
      trigger: '.about',
      start: '0%',
      end: '150%',
      scrub: 5,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
  }
});

let tlProjects = gsap.timeline({
  scrollTrigger: {
      trigger: '.projects',
      start: '0%',
      end: '150%',
      scrub: true,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
  }
});

let tlContact = gsap.timeline({
  scrollTrigger: {
      trigger: '.contact',
      start: '0%',
      end: '20%',
      scrub: true,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
  }
});

let tlHome = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '600%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
    }
});



tlHomeSize.to('.home', {height: '10vh'})
tlSlidingText.fromTo('.sliding-text', {y:0}, {y:-400})
tlLogo.fromTo('.logo', {scale: 5}, {scale: 1, top: '1.8rem', left: '5rem'})
tlImage.fromTo('.image-container', {x:0}, {x: 1500})
tlNav.fromTo('.white-background', {opacity:0}, {opacity: 1})


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
