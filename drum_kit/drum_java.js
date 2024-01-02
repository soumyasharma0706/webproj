function afterclick(){
    alert("hello");
}

var drum_item=document.querySelectorAll(".head");
const n=drum_item.length;
for(var i=0;i<n;i++){
    drum_item[i].addEventListener("click",function(){
        producesound(this.innerText);
    });    
}
function producesound(event){
    if (event=="w"){
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        Animation_12(".w");
        
    }
    if (event=="a"){
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        Animation_12(".a");
    }
    if (event=="s"){
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        Animation_12(".s");
    }
    if (event=="d"){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        Animation_12(".d"); 
    }
    if (event=="j"){
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        Animation_12(".j");
    }
    if (event=="k"){
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        Animation_12(".k");
    }
    if (event=="l"){
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        Animation_12(".l");
    }
    
}

function Animation_12(evt){
    var but=document.querySelector(evt);
    but.classList.add("pressed");
    setTimeout(() => {
        but.classList.remove("pressed")
    }, 700);
    
}