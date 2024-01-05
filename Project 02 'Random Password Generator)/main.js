let passwordBox = document.getElementById("password");
let btn = document.getElementById("btn");
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = "&~#{[|`^@]}=+-_<>:;?,§!µ*";
let allChars = uppercase +lowercase + number +symbol;
let lenth = 10
btn.onclick = function (){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (lenth > password.length ){
        password += allChars[Math.floor(Math.random() * allChars.length)];
        // password += uppercase[Math.floor(Math.random() * lowercase.length)];

    }
    passwordBox.value = password;
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}