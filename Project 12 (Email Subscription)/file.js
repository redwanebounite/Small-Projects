
const scriptURL = 'https://script.google.com/macros/s/AKfycby8n3Urxv2X7ml6owCkpHdP4xv_ebScTVqaachR43RhLoeXUVbbhJGdcQoalSiQLEQA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank You For Subscribing!";
        setTimeout(function(){
            msg.innerHTML = " ";
        },1500)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})