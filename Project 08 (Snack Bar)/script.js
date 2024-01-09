let toastBox = document.getElementById("toastbox");
let successMsg = '<i class="fa-solid fa-square-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix The Error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Check Again';
function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if (msg.includes('Error')) {
        toast.classList.add('error')
    }
    if (msg.includes("Invalid")) {
        toast.classList.add("invalid")
    }
    setTimeout(function(){
        toast.remove();
    },4000)
}