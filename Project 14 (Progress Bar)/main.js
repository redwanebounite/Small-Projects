let number = document.getElementById("number")
let counter = 0;
number.innerHTML = ""
setInterval(function() {
    if(counter== 65 ){
        clearInterval(counter);
    }else {
        counter+=1;
    number.innerHTML = counter + "%"
    }
},30)