window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// ON-SCROLL ANIMATIONS HOME

ScrollTrigger.matchMedia({

  // large
  "(min-width: 960px)": function() {
    // setup animations and ScrollTriggers for screens 960px wide or greater...
    // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
  },

  // medium
  "(min-width: 600px) and (max-width: 959px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore.
  },

  // small
  "(max-width: 599px)": function() {
    // The ScrollTriggers created inside these functions are segregated and get
    // reverted/killed when the media query doesn't match anymore.
  },

  // all
  "all": function() {
    // ScrollTriggers created here aren't associated with a particular media query,
    // so they persist.
  }

});

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



  let newslider = new KeenSlider("#my-new-keen-slider", {
    loop: true,
    mode: "free",
    slides: {
      origin: "center",
      perView: 2.2,
      spacing: 50
    },
  })

  const nextButton = document.querySelector('.right-button')
  const previousButton = document.querySelector('.left-button')


  nextButton.addEventListener('click', e => {
    e.preventDefault()
    newslider.next()
  })

  previousButton.addEventListener('click', e => {
    e.preventDefault()
    newslider.prev()
  })
