let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

let link = document.querySelector(".link");
let pink = document.querySelector(".color");

let hoverTL = gsap.timeline();
hoverTL.pause();

// from, to, fromTo Tweens
hoverTL.to(pink, {
  width: "calc(100% + 1.3em)",
  ease: "Elastic.easeOut(0.25)",
  duration: 0.4
});
hoverTL.to(pink, {
  width: "2em",
  left: "calc(100% - 1.45em)",
  ease: "Elastic.easeOut(0.4)",
  duration: 0.6
});

link.addEventListener("mouseenter", () => {
  hoverTL.play();
});

link.addEventListener("mouseleave", () => {
  hoverTL.reverse();
});

let tl = gsap.timeline({ease:'power1.in'})
 let __SplitText = new SplitText("#text", {type:"words,chars"})
 let clicked = false
let chars = __SplitText.chars


document.querySelector('#button').addEventListener('click',()=>{
  if(clicked === false){
    clicked = true
    tl.to(chars, {duration: 0.5,opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",   stagger: 0.1,repeat:0})
  tl.to('#button',{width:'50px',duration:0.5})
  tl.to('#w',{y:'0%',duration:0.5})

    
    
    
  }
  else if(clicked === true){
    clicked = false
      tl.to('#w',{y:'100%',duration:0.5})
      tl.to('#button',{width:'135px',duration:0.5})
tl.to(chars, {duration: 0.5, opacity:1, scale:1, y:0, rotationX:0, transformOrigin:"0% 50% -50", stagger: 0.1,repeat:0})
  }



})

 