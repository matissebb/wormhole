console.log("This file is connected");

window.onload = function(){    
function showBox(){
    $('.info-window').toggleClass('hidden');

}
$('.info-button').click(showBox);
$('.info-window').click(showBox);

}

// let myImg = document.getElementById("specks");

// function isTouchDevice(){
//     try{
//         document.createEvent("TouchEvent");
//         return true;

//     } catch (e) {
//         return false;
//     }
// }

// const move  = (e) =>{

//     try{
//         var x = !isTouchDevice() ? e.pageX : e.touches
//         [0].pageX;
//         var y = !isTouchDevice() ? e.pageX : e.touches
//         [0].pageY;
//     }
//     catch(e){}
//     myDiv.style.left= x + "px";
//     myImg.style.top= y   + "px";

// };

// document.addEventListener("mousemove", (e) => {
//     move(e);
// });

// document.addEventListener("touchmove", (e) => {
//     move(e);
// })