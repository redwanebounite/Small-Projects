let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(() => {
    let currenTime = new Date();
    hrs.innerHTML = currenTime.getHours()
    min.innerHTML = currenTime.getMinutes()
    sec.innerHTML = currenTime.getSeconds()
    if(currenTime.getSeconds()< "10"){
        sec.innerHTML = `0${currenTime.getSeconds()}`
    }
    if(currenTime.getMinutes()< "10"){
        min.innerHTML = `0${currenTime.getMinutes()}`
    }
    if(currenTime.getHours()< "10"){
        hrs.innerHTML = `0${currenTime.getHours()}`
    }
}, 1000)
