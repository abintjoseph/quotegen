const quoteText = document.querySelector('.quote'),
quoteBtn = document.querySelector("button"),
author = document.querySelector('.name'),
SoundBtn = document.querySelector('.sound'),
CopyBtn = document.querySelector('.copy'),
whatsApp = document.querySelector('.twitter');

//My Api-ninja key
const KEY="JYYDMXy6NrGhiFIxxPzgfA==OvXfBxIhDmjc0mLd"

const category = 'happiness';
const Url = `https://api.api-ninjas.com/v1/quotes`;

//random quotes
function randomQuote()
{
    quoteBtn.innerText ="Loading Quote..."

fetch(Url,{
    method:'GET',
    headers:{
        'X-Api-Key': KEY
        }
}).then(res => res.json()).then(result =>{
    const firstQuote = result[0].category;
quoteText.innerText= result[0].quote;
author.innerText = result[0].author;
quoteBtn.innerText ="New Quote"

})

}

quoteBtn.addEventListener('click',randomQuote);

SoundBtn.addEventListener('click',()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`+" "+'said by'+`${author.innerText}`);

    speechSynthesis.speak(utterance);
    
});
CopyBtn.addEventListener('click',() =>{
    
navigator.clipboard.writeText(`${quoteText.innerText}`);
});


