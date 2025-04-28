// -________________________________________ navbar _____________________________________________

function showBtn(){
    document.querySelector(".side-bar").style.display = "flex";
}
function closeBtn(){
    document.querySelector(".side-bar").style.display = "none";
}

// --------------------------------------- PAGE 7 SLIDER CODE --------------------------------------------------

const carousel = document.querySelector(".carousel");

firstImg = carousel.querySelectorAll("img")[0]; //new and important
arrowIcons = document.querySelectorAll(".slider i");

let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;



const showHideIcons = () => {
    //showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
   icon.addEventListener("click", () => {     
    let firstImgWidth = firstImg.clientWidth + 10; //getting first img width & adding 5 margin value
    // if clicked icon is left, reduce width value from carousel scroll left else add to it.                                
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; 
        setTimeout(() =>  showHideIcons(), 60) // calling showHideIcons after 60ms                                                                          
    })                                                                  
    });                                                                            
 //    if else instead of ternary :                                                                            
                //    if(icon.id == "left") {                                                                    
                //     carousel.scrollLeft -= firstImgWidth;                                                                 
                //    }else {          
                //      carousel.scrollLeft += firstImgWidth;    
                //    }                                                    
                                
const autoSlide = () => {
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 10;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(positionDiff > firstImgWidth / 3) {
        carousel.scrollLeft += valDifference;
    }else {
        carousel.scrollLeft -= positionDiff;
    }

    console.log(valDifference)
    console.log(positionDiff)
}

const dragStart = (e) => {
    //updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) => {
    //scrolling image/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX ||  e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("touchstart", dragStart)

carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("touchmove", dragging)

carousel.addEventListener("mouseup", dragStop)
carousel.addEventListener("mouseleave", dragStop)
carousel.addEventListener("touchend", dragStop)

// --------------------------------------- PAGE 7 SLIDER CODE ENDS --------------------------------------------------

// window.addEventListener('scroll', slide) 

//   function slide (){
//     const bottle = document.querySelector('.bottle-cap');
//     const bottlePosition = bottle.getBoundingClientRect().top; // Get the position of the bottle on the screen
//     console.log(bottlePosition, "bottleposition")
//     console.log(window.innerHeight * 0.8, "windowinnerheight")

//     // If the bottle is within the viewport (adjust the trigger position)
//     if (bottlePosition < window.innerHeight * 0.8) {
//     //   bottle.classList.add('opened');
//     bottle.style = "top:20px"
//     } else {
//       bottle.classList.remove('opened');
//     }
//   };
// // -------------------------------------------------------------------------------
//   window.addEventListener('mousedown', pg2slide) 
//   window.addEventListener('mousedown', pg4slide) 
//   function pg2slide(){
//     const sidePoints = document.querySelectorAll(".forSlideIn");
//     // const sideh1 = document.getElementsByClassName("p4-start-div-h1");
//     // const sideh1Top = sideh1.getBoundingClientRect().top
//     for(var i=0; i<sidePoints.length; i++){
//         const sidePointsTop = sidePoints.getBoundingClientRect().top;

//         if(sidePointsTop < window.innerHeight - 150){
//             sidePoints[i].classList.add(active)
//         }else{
//             sidePoints[i].classList.remove(active) 
//         }

//     }
//     // if( sideh1Top < window.innerHeight - 150){
//     //     sideh1.classList.remove(h11)
//     // }else{
//     //     sideh1.classList.add(h11)
//     // }
    
//   }
//   function pg4slide(){

//     const sideh1 = document.getElementsByClassName("p4-start-div-h1");
//     const sideh1Top = sideh1.getBoundingClientRect().top
   
//     if( sideh1Top < window.innerHeight - 150){
//         sideh1.classList.remove(h11)
//     }else{
//         sideh1.classList.add(h11)
//     }
    
//   }
  
addEventListener("scroll", myFunction)
let aboutPage = document.getElementById("page-2-about");

function myFunction(){
    let screenView = aboutPage.getBoundingClientRect().top;
    console.log(screenView)

    if(screenView <= 737 ){
        document.getElementById("normal-bot-cap").style.top = "10px";
        document.getElementById("normal-bot-cap").style.opacity = "0";
        document.getElementById("content").style.scale = "1";
        document.getElementById("flying-bot-cap").style.zIndex = "3";
        document.getElementById("flying-bot-cap").style.top = "-60px";;
        document.getElementById("bot-without-cap").style.bottom = "-160%"
        document.getElementById("bottle").style.bottom = "-160%";
        document.getElementById("circle").style = "width:450px; height:450px";
        document.getElementById("bot-without-cap").style.opacity = "1";
        document.getElementById("flying-bot-cap").style.opacity = "1";
    }

    if(screenView <= 300 ){
        document.getElementById("normal-bot-cap").style.top = "190%";
        document.getElementById("normal-bot-cap").style.opacity = "1";
        document.getElementById("content").style.scale = "1";
        document.getElementById("flying-bot-cap").style.zIndex = "3";
        document.getElementById("flying-bot-cap").style.top = "190%";;
        document.getElementById("bot-without-cap").style.bottom = "-265%"
        document.getElementById("bottle").style.bottom = "-265%";
        document.getElementById("bottle").style.width = "250px";
        document.getElementById("bottle").style.left = "80px"
        document.getElementById("bot-without-cap").style.opacity = "0";
        document.getElementById("circle").style = "width:450px; height:450px";
        document.getElementById("normal-bot-cap").style.opacity = "0";
        document.getElementById("flying-bot-cap").style.opacity = "0";
    }

    if(screenView <= 50 ){
        document.getElementById("bot-without-cap").style.bottom = "-265%"
        document.getElementById("bottle").style.bottom = "-305%";
        document.getElementById("normal-bot-cap").style.opacity = "0";
        document.getElementById("flying-bot-cap").style.opacity = "0";
        document.getElementById("bottle").style.rotate = "0deg";
        document.getElementById("bottle").style.zIndex = "9";

    }

    if(screenView <= -200 ){
        document.getElementById("bottle").style.bottom = "-340%";
        document.getElementById("bottle").style.rotate = "25deg";
        document.getElementById("bottle").style.left = "400px";
        document.getElementById("normal-bot-cap").style.opacity = "0";
        document.getElementById("flying-bot-cap").style.opacity = "0";
        document.getElementById("bottle").style.zIndex = "9";

    }

    if(screenView <= -700 ){
        document.getElementById("bottle").style.bottom = "-380%";
        document.getElementById("bottle").style.rotate = "0deg";
        document.getElementById("bottle").style.left = "90px";
        document.getElementById("normal-bot-cap").style.opacity = "0";
        document.getElementById("flying-bot-cap").style.opacity = "0";
        document.getElementById("bottle").style.zIndex = "9";

    }

    if(screenView <= -910 ){
        document.getElementById("bottle").style.bottom = "-500%";
        document.getElementById("bottle").style.rotate = "35deg";
        document.getElementById("bottle").style.left = "150px";
        document.getElementById("normal-bot-cap").style.opacity = "0";
        document.getElementById("flying-bot-cap").style.opacity = "0";
        document.getElementById("bottle").style.zIndex = "-1";
        document.getElementById("p4-circle").style.zIndex = "-2";
        document.getElementById("p4-circle").style.scale = "1.5";
        document.getElementById("water-splash").style.zIndex = "20"

    }
}