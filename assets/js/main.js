
// gsap

gsap.from(`.nav`,{duration:2, y:'-100%',ease:`bounce`});
gsap.from(`.nav_Item`, {duration:2, opacity:0,stagger:0.5});




// glide js
const config={
    type: "carousel",
    perView:4  ,
    breakpoints: {
        650: {
          perView: 2
        }
    }

};

new Glide('.glide', config).mount();


// aos js
AOS.init();



// Granim js

var granimInstance = new Granim({
  element: '#canvas-interactive',
  name: 'interactive-gradient',
  elToSetClassOn: '.canvas-interactive-wrapper',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  stateTransitionSpeed: 1000,
  states : {
      "default-state": {
          gradients: [
            ['#ff9966', '#ff5e62'],
            ['#00F260', '#0575E6'],
            ['#e1eec3', '#f05053']
          ],
          transitionSpeed: 1000
      },
      "violet-state": {
          gradients: [
            ['#ff9966', '#ff5e62'],
            ['#00F260', '#0575E6'],
            ['#e1eec3', '#f05053']
          ],
          transitionSpeed: 1000
      },
      "orange-state": {
          gradients: [ ['#FF4E50', '#F9D423'] ],
          loop: false
      }
  }
});

// With jQuery
$('#default-state-cta').on('click', function(event) {
  event.preventDefault();
  granimInstance.changeState('default-state');
  setClass('#default-state-cta')
});
$('#violet-state-cta').on('click', function(event) {
  event.preventDefault();
  granimInstance.changeState('violet-state');
  setClass('#violet-state-cta')
});
$('#orange-state-cta').on('click', function(event) {
  event.preventDefault();
  granimInstance.changeState('orange-state');
  setClass('#orange-state-cta')
});

function setClass(element) {
  $('.canvas-interactive-wrapper a').removeClass('active');
  $(element).addClass('active');
};





//using lightbox


lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'positionFromTop':300,
  'fitImagesInViewport': true
})
