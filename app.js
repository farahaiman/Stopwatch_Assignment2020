var time =0;
var running = 0;
function startPause(){
    if(running == 0){
          running = 1;
          increment();
          document.getElementById('start').innetHTML = "Pause";
          document.getElementById('startPause').style.backgroundColor ="transparent";
          document.getElementById('startPause').style.borderColor = "black";
    } 
    else{
        running = 0 ; 
        document.getElementById('start').innetHTML = "Resume";
        document.getElementById('startPause').style.backgroundColor ="transparent";
        document.getElementById('startPause').style.borderColor = "black";
    }
}
function reset(){
    running = 0;
    document.getElementById('start').innertHTML = "Resume";
    document.getElementById("output").innerHTML = "0:00:00:00"
    document.getElementById('startPause').style.backgroundColor ="aqua";
    document.getElementById('startPause').style.borderColor = "black";
}
function increment(){
if(running == 1){
    setTimeout(function(){
        time++;
        var mins  = Math.floor(time/10/60);
        var secs  = Math.floor(time/10%60);
        var hours = Math.floor(time/10/60/60);
        var tenth = time%10;
        if(mins < 10){
            mins = "0" + mins;
        }
        if(secs < 10){
            secs = "0" + secs;
        }
        document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenth + "0";
        increment();
    },100)  
}
}