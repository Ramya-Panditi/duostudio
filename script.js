function scrolling(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
scrolling();

var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove",(dets)=>{
   cursor.style.left = dets.x + 20+ "px";
   cursor.style.top = dets.y + 20 + "px";
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",

        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1",{
    x:-90,
    duration:1
},"anim");
tl.to(".page1 h2",{
    x:90,
    duration:1
},"anim");
tl.to(".page1 video",{
    width:"80%"
    
})
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -90%",
        
        end: "top -127%",
        scrub: 4
    }
})
tl2.to(".main",{
    backgroundColor:"#fff",
    color:"#000000;"
})
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -290%",
        end: "top -300%",
        scrub: 4
    }
})
tl3.to(".main",{
    backgroundColor:"#0F0D0D",
})

var boxes = document.querySelectorAll(".box");
boxes.forEach(function(element){
    element.addEventListener("mouseenter",()=>{
        var bg_img  = element.getAttribute("data-image");
        cursor.style.width = "300px";
        cursor.style.height = "250px";
        cursor.style.borderRadius = "0";
        // cursor.style.mixBlendMode = "none";
        cursor.style.backgroundImage = `url(${bg_img})`;
        
    })
    element.addEventListener("mouseleave",()=>{
     
        cursor.style.width = "20px";
        cursor.style.height = "20px";
        cursor.style.borderRadius = "50%";
        cursor.style.backgroundImage = "none";
    })

})
var tab = document.querySelector(".tab-switch");
var nav = document.querySelectorAll('#nav h4');
nav.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        tab.style.display = "block";   
        tab.style.opacity = 1;
    })
    e.addEventListener("mouseleave",()=>{
        tab.style.display = "none";   
        tab.style.opacity = 0;
    })
})