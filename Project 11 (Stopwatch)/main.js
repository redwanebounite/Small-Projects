let displayWatch = document.getElementById("displaywatch");
let [Seconds,minutes,hrs] = [0,0,0];
let timer = null
function stopwatch(){
    Seconds++;
    if(Seconds == "60"){
        Seconds = "0";
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hrs++
        }
    }
    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = Seconds < 10 ? "0" + Seconds : Seconds;
    displayWatch.innerHTML =h + ":" + m + ":" + s;
}
function watchStart(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000)
}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [Seconds,minutes,hrs] = [0,0,0];
    displayWatch.innerHTML = "00:00:00"
}
