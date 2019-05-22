var ball = document.querySelector(".ball");
var top_p = 0;
var left_p = 0;
var first=document.querySelector("#first");

function stadiumout(){
    alert("serhedi asdiz");
}





document.body.addEventListener("keydown", function (ev) {
    //sol
    if (ev.which == 37 ) {
        if(left_p>0){

            left_p -= 40;
        }else{
            stadiumout()
        }

    }
    //yuxari
    if (ev.which == 38) {
       if(top_p>0){

           top_p -= 40;
       }else{
        stadiumout()
    }


    }
    //sag
    if (ev.which == 39) {
        if(left_p < 465) {

            left_p += 40;
        }else{
            stadiumout()
        }

    }

    //ashagi
    if (ev.which == 40) {
        if(top_p<480){

            top_p += 40;
        }else{
            stadiumout()
        }
    }


    
    

console.log(ball)
   
    ball.style.left = left_p + "px";
    ball.style.top = top_p + "px";
})
