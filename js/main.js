document.addEventListener("DOMContentLoaded", () => {
  let controller = new ScrollMagic.Controller();

  let timeline = new TimelineMax();
  timeline.to("#sixth", 6, { y: -700 });

  let scene = new ScrollMagic.Scene({
    triggerElement: ".section", // starts at section element
    duration: "200%", // makes animation smooth
    triggerHook: 0 // starts the animation at the top of the screen
  })
    .setTween(timeline)
    .setPin(".section")
    .addTo(controller);
});
