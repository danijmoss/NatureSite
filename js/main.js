document.addEventListener("DOMContentLoaded", () => {
  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax();
  // position where the images will scroll to during animation
  timeline
    .to("#sixth", 6, { y: -700 })
    .to("#fifth", 6, { y: -500 }, "-=6")
    .to("#fourth", 6, { y: -400 }, "-=6")
    .to("#third", 6, { y: -300 }, "-=6")
    .to("#second", 6, { y: -200 }, "-=6")
    .to("#first", 6, { y: -100 }, "-=6")
    .to(".content, .blur", 6, { top: "0%" }, "-=6")
    .to(".title, nav, .footer-wrapper", 6, { y: -600 }, "-=6");

  let scene = new ScrollMagic.Scene({
    triggerElement: ".section", // starts at section element
    duration: "200%", // makes animation smooth
    triggerHook: 0 // starts the animation at the top of the screen
  })
    .setTween(timeline)
    .setPin(".section")
    .addTo(controller);
});
