$(document).ready(function(){
   // cache the window object
   $window = $(window);

   /* Scroll Magic Controller */
   var controller = new ScrollMagic.Controller();

   /* FadeOut Header Caption */
   var fadeout_tween = TweenMax.to('#headercaption', 1,{ opacity: 0 });
   new ScrollMagic.Scene({
      triggerElement: '#headercaption',
      triggerHook: '.2',
      reverse: true
    })
    .setTween(fadeout_tween)
    .addTo(controller); 

   // Pin Timeline - 1984
    new ScrollMagic.Scene({
      triggerElement: "#timelinediv", // point of execution
      duration: 1600, // $(window).height() - 100, // pin element for the window height - 1
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#timelinediv", {pushFollowers: false})
    .addTo(controller); // the element we want to pin*/

   // Pin Timeline - 2010
   new ScrollMagic.Scene({
      triggerElement: "#timelinediv10", // point of execution
      duration: 3050, // $(window).height() - 100, // pin element for the window height - 1
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#timelinediv10", {pushFollowers: false})
    .addTo(controller); // the element we want to pin

   // Pin Timeline - 2011
   new ScrollMagic.Scene({
      triggerElement: "#timelinediv11", // point of execution
      duration: 3800, // $(window).height() - 100, // pin element for the window height - 1
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#timelinediv11", {pushFollowers: false})
    .addTo(controller); // the element we want to pin

   // Pin Timeline - 2012
   new ScrollMagic.Scene({
      triggerElement: "#timelinediv12", // point of execution
      duration: 4210, // $(window).height() - 100, // pin element for the window height - 1
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#timelinediv12", {pushFollowers: false})
    .addTo(controller); // the element we want to pin

   // Pin Timeline - 2014
   new ScrollMagic.Scene({
      triggerElement: "#timelinediv14", // point of execution
      duration: 4210, // $(window).height() - 100, // pin element for the window height - 1
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#timelinediv14", {pushFollowers: false})
    .addTo(controller); // the element we want to pin

   // Pin Timeline - 2015
   new ScrollMagic.Scene({
      triggerElement: "#timelinediv15", // point of execution
      duration: 4210, // $(window).height() - 100, // pin element for the window height - 1
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("#timelinediv15", {pushFollowers: false})
    .addTo(controller); // the element we want to pin

   /* FadeOut 1984 Images */
   var fadeout_one = TweenMax.to('#left84fade1', 3,{ opacity: .5});
   new ScrollMagic.Scene({
      triggerElement: '#left84fade1',
      triggerHook: '0.5',
      reverse: true
    })
    .setTween(fadeout_one)
    .addTo(controller); 

   var fadeout_two = TweenMax.to('#right84fade1', 2, { opacity: .5, delay: .5});
   new ScrollMagic.Scene({
      triggerElement: '#right84fade1',
      triggerHook: '0',
      reverse: true
    })
    .setTween(fadeout_two)
    .addTo(controller); 

   /* FadeOut 2010 Images */
   var fadeout_one = TweenMax.to('#left10fade1', 2,{ opacity: .5});
   new ScrollMagic.Scene({
      triggerElement: '#left10fade1',
      triggerHook: '.5',
      reverse: true
    })
    .setTween(fadeout_one)
    .addTo(controller); 

   var fadeout_three = TweenMax.to('#right10fade1', 3, { opacity: .3, delay: .5 });
   new ScrollMagic.Scene({
      triggerElement: '#right10fade1',
      triggerHook: '.5',
      reverse: true
    })
    .setTween(fadeout_three)
    .addTo(controller); 

   var fadeout_four = TweenMax.to('#middle10fade1', 3, { opacity: .3, delay: .5 });
   new ScrollMagic.Scene({
      triggerElement: '#middle10fade1',
      triggerHook: '.5',
      reverse: true
    })
    .setTween(fadeout_four)
    .addTo(controller); 
  
}); 