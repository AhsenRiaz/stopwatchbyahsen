// // function timer(){
// //     document.write("running...");
// // }
// // setInterval(timer,1000);


// var count = 0;
// var interval;
// function timer (){
//     count++;
//     console.log(count);
// }
// interval = setInterval(timer,1000);

// setTimeout(function(){
//     clearInterval(interval)
// },5000)


var min=0;
var sec=0;
var msec=0;

var minhtml = document.getElementById("min");
var sechtml = document.getElementById("sec");
var msechtml = document.getElementById("msec");

var interval;

function timer(){
    msec++;
    msechtml.innerHTML = msec;
    if(msec >=100){
        sec++;
        sechtml.innerHTML = sec;
        msec = 0
    }
    else if (sec>=60){
        min++;
        sec = 0
        minhtml.innerHTML = min++;
        
    }
}
function start(){
 interval = setInterval(timer,10);
}
function stop(){
    clearInterval(interval);
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minhtml.innerHTML =min ;
    sechtml.innerHTML =sec  ;
    msechtml.innerHTML =msec ;
    stop();
}
function disable(){
    var disabled = document.getElementById("start").disabled=true;
}

function visible(){
    var visible = document.getElementById("start").disabled=false;
}

