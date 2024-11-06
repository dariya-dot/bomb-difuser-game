let timerElemet=document.getElementById("countdown")
let wire1Element=document.getElementById("wire1")
let wire2Element=document.getElementById("wire2")
let wire3Element=document.getElementById("wire3")
let wire4Element=document.getElementById("wire4")
let bombElement=document.getElementById("bomb")
let defuseButtonElement=document.getElementById("defuseButton")
let statusElement=document.getElementById("status")

let counter=10;
let iswire2cuted=false
 let timerid=setInterval(function(){
    counter=counter-1
    timerElemet.textContent=counter
    if(counter === 0 ){
        timerElemet.textContent="Boom"
        clearInterval(timerid);
        bombElement.style.backgroundImage="url('https://shorturl.at/5PylJ')"
    }
    
},1000)


wire1Element.addEventListener('click',function(){
    wire1Element.style.width="50%";
    wire2Element.style.width="80%";
    wire3Element.style.width="80%";
    wire4Element.style.width="80%";
    iswire2cuted=false
    console.log("clicked")
})
wire2Element.addEventListener('click', function green(){
    wire2Element.style.width="50%";
    wire1Element.style.width="80%";
    wire3Element.style.width="80%";
    wire4Element.style.width="80%";
    iswire2cuted=true
    console.log("clicked")
})
wire3Element.addEventListener('click',function(){
    wire3Element.style.width="50%";
    wire1Element.style.width="80%";
    wire2Element.style.width="80%";
    wire4Element.style.width="80%";
     iswire2cuted=false
    console.log("clicked")
})
wire4Element.addEventListener('click',function(){
    wire4Element.style.width="50%";
    wire1Element.style.width="80%";
    wire2Element.style.width="80%";
    wire3Element.style.width="80%";
    iswire2cuted=false
    console.log("clicked")
})

defuseButtonElement.onclick=function(){
    if( counter>=1 && iswire2cuted ){
        bombElement.style.backgroundImage="url('https://shorturl.at/pqG5o')"
        timerElemet.textContent="Bomb defused"
        clearInterval(timerid);
        statusElement.textContent="you did it"
    }
    else{
        statusElement.textContent="Plese cut the green wire and click on the button"
    }
}
 
