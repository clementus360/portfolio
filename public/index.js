window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// SCROLL-TRIGGER ANIMATIONS ANIMATIONS HOME

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
        start: '8%',
        end: '74%',
        scrub: 1,
    },
});

let tlMessage = gsap.timeline({
  scrollTrigger: {
      trigger: '.home',
      start: '8%',
      end: '74%',
      scrub: 1,
  },
});

let tlSocial = gsap.timeline({
  scrollTrigger: {
    trigger: '.home',
    start: '0%',
    end: '40%',
    scrub: 1
  }
})

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


ScrollTrigger.matchMedia({
  "(min-width: 480px)": function() {
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
    tlLogo.fromTo('.logo', {clipPath: 'polygon(0 0,100% 0,200% 200%,0 200%)'}, {top: '25vw', clipPath: 'polygon(100% 0,100% 0,200% 200%,100% 200%)'})
    tlMessage.fromTo('.message', {opacity: 1}, {opacity: 0, top: '33vw'})
    tlSocial.fromTo('.homeSocials', {scale: 1, opacity: 1}, {top: '16.4rem', opacity: 0})
    tlImage.fromTo('.image-container', {x:0}, {x: '100vw'})
    tlNav.fromTo('.white-background', {opacity:0}, {opacity: 1})
  }
})



// ADDING AUTOMATIC KEEN-SLIDER CAROUSEL ON SMALL TEXT IN THE TOP-LEFT CORNER OF HOME
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


  // ADDING MANUAL KEEN-SLIDER CAROUSEL ON PROJECTS

  let viewport = window.innerWidth;

  let newslider = new KeenSlider("#my-new-keen-slider", {
    loop: true,
    slides: {
      origin: "center",
      perView: viewport > 480 ? 1.7:1,
      spacing: viewport > 480 ? 150:0
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


  // LISTEN TO CLICKED LINKS AND SCROLL DOWN OR UP APPROPRIATELY

  const home = document.querySelector('.homeLink')
  const about = document.querySelector('.aboutLink')
  const projects = document.querySelector('.projectsLink')
  const contact = document.querySelector('.contactLink')

  homeSection = document.querySelector('.home')
  aboutSection = document.querySelector('.about')
  projectSection = document.querySelector('.projects')

  home.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  })

  about.addEventListener('click', () => {
    window.scrollTo({
      top: 100 * window.innerHeight/100,
      behavior: "smooth"
    });
  })

  projects.addEventListener('click', () => {
    window.scrollTo({
      top: 100 * window.innerHeight/100 + aboutSection.offsetHeight,
      behavior: "smooth"
    });
  })

  contact.addEventListener('click', () => {
    window.scrollTo({
      top: 100 * window.innerHeight/100 + aboutSection.offsetHeight + projectSection.offsetHeight,
      behavior: "smooth"
    });
  })

  // VALIDATE CONTACT FIELDS AND SEND EMAIL REQUEST TO SERVER(NOT PARTICULARLY IN THAT ORDER)
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const message = document.getElementById('message')
  const notice = document.getElementById('alert')
  const submitButton = document.getElementById('submit')
  const form = document.getElementById('contact-form')

  form.addEventListener('submit', e => {
    e.preventDefault()
    submitButton.disabled = true

    notice.innerText = ''
    isValid()
    if (isValid()) {
      let mail = new FormData(form);
      sendMail(mail);
    }
  })

  const sendMail = mail => {
    axios.post('/send', mail).then(res => {
      alert('Email sent successfully')
      name.value = ''
      email.value = ''
      message.value = ''
      submitButton.disabled = false
    }).catch(err => {
      alert('Failed to send email')
      submitButton.disabled = false
    })
  }


  function isValid() {
    let valid = true;

    valid &= fieldValidation(message, isNotEmpty);
    valid &= fieldValidation(email, checkEmail);
    valid &= fieldValidation(name, isNotEmpty);

    if (!valid) {
      submitButton.disabled = false
    }

    return valid;
   }

   function fieldValidation(field, validationFunction) {
    if (field == null) return false

    let isFieldValid = validationFunction(field)
    if (!isFieldValid) {
    field.className = 'placeholder-red';
    } else {
    field.className = '';
    }

    return isFieldValid;

  }

   const checkEmail = (element) => {
    let email = element.value
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!regex.test(String(email).toLowerCase())) {
      notice.innerText = "Email is incorrect"
    }
    return regex.test(String(email).toLowerCase());
  }

   const isNotEmpty = (element) => {
    let value = element.value

    if (value == null || typeof value == 'undefined' ) {
      alertMessage(element)
      return false
    };

    if (!(value.length > 0)) alertMessage(element)

    return (value.length > 0);
   }


   function alertMessage(element) {

    if (element.id == 'name') {
      notice.innerText = "Remember your name"
    }
    else if (element.id == 'message') {
      notice.innerText = "Come on!!! write me something"
    }
   }
