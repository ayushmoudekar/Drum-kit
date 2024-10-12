
for(let i = 0 ; i < document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     
    let innerHtml = this.innerHTML;
    makeSound(innerHtml)
    buttonAnimation(innerHtml);

    });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key)
  buttonAnimation(event.key)
});

function makeSound(key){
    switch (key) {
        case "Sa":
            var tom1 = new Audio("sounds/thin.WAV");
            tom1.play();
            
            break;
            case "Re":
                var tom2 = new Audio("sounds/clap.WAV");
                tom2.play();
                
                break;
           
        
            case "Ga":
            var tom3 = new Audio("sounds/cowbell.WAV");
            tom3.play();
            
            break;
     
            case "Ma":
            var tom4= new Audio("sounds/classic.WAV");
            tom4.play();
            
            break;

            case "Pa":
            var snare = new Audio("sounds/snare.WAV");
            snare.play();
            
            break;
            case "Da":
            var crash = new Audio("sounds/openhat.WAV");
            crash.play();
            
            break;
          
             case "Ni":
             var kick = new Audio("sounds/hardclap.WAV");
             kick.play();    
             break;
        
                    default:
                        console.log("Default Case");
            break;
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
    
}

