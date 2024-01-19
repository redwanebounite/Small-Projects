const api_url = "https://api.quotable.io/random";
let quote = document.querySelector("blockquote");
let author = document.querySelector("span");
async function getQuote() {
    const response = await fetch(api_url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;


    console.log(data);
}
getQuote(api_url);

function tweet() {
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} ---by : ${author.innerHTML}`, "tweet window" , "width=700 , height=400")
}