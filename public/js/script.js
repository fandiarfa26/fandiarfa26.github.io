function darkMode(val) {
  var aMoon = document.getElementById('a_moon');
  var aSun = document.getElementById('a_sun');
  if (val) {
    aMoon.style.display = "none";
    aSun.style.display = "inline";
    localStorage.theme = "dark";
  }else{
    aMoon.style.display = "inline";
    aSun.style.display = "none";
    localStorage.theme = "light";
  }
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

window.addEventListener('load', (event) => {
  document.getElementById('loading').classList.add('opacity-0');
  setTimeout(function(){
      document.getElementById('loading').classList.add('hidden');
  }, 1000);
});

var myFullpage = new fullpage('#fullpage', {
  anchors:['intro', 'skill', 'journey', 'portfolio', 'contactme'],
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 1000,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  });


var journey = new Vue({
  el: '#journeyPage',
  data: {
    tabActive: 0,
  }
});

var portfolio = new Vue({
  el: '#portfolioPage',
  data: {
    slides: [
      {
        id: 1,
        img: 'images/samarindafood.png',
        title: 'Samarinda Food App',
        description: 'A mobile-based application for food delivery provided by UMKT in the city of Samarinda. Samarinda Food has the tagline "tasty, healthy, halal".',
        link: 'https://samarindafood.com/'
      },
      {
        id: 2,
        img: 'images/muse.png',
        title: 'Muse Akademi',
        description: 'A website that provides online courses based on live streaming and interactive multimedia for skill development.',
        link: 'https://museakademi.com/'
      },
      {
        id: 3,
        img: 'images/locahubie.png',
        title: 'Locahubie',
        description: 'An online store platform that sells the most complete and cheapest local products in Indonesia.',
        link: 'https://locahubie.com/'
      },
      {
        id: 4,
        img: 'images/idbookstore.png',
        title: 'Idbookstore',
        description: 'The first digital book publisher platform in Indonesia that uses interactive media and provides a digital book market for doing business.',
        link: 'http://idbookstore.id/'
      },
      {
        id: 5,
        img: 'images/dlium.png',
        title: 'Web Profile DLI',
        description: 'A web company profile from PUIPT Disruptive Learning Innovation, State University of Malang.',
        link: 'http://dli.um.ac.id/'
      },
    ]
  },
  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  }
});

var navbottom = new Vue({
  el: '#navbottom',
  data: {
    showSocial: false,
    showMenu: false
  }
});