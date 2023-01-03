let textarea = document.getElementById('text-area');
let typedText = document.querySelector('.typedtext p');
// let inputField = document.querySelector('#text-area')
// let text = document.querySelector('.typedtext p');
let time = document.querySelector('#time span b');
let speed = document.querySelector('#speed span b');
let para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non corrupti quidem culpa, minus nemo praesentium enim eaque accusantium debitis quasi et natus possimus fuga neque impedit reprehenderit expedita sed?"
let start = document.getElementById('start');

let timer,
maxTime=60,
timeLeft  =maxTime;
let charIndex =istyping=timeElapsed=0;
let characterTyped=0;
// let no_words=1;
 
function paragraph(){
    para.split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typedText.innerHTML+=spanTag;
    });
    document.addEventListener('keydown',()=>
    textarea.focus());
    typedText.addEventListener('click',()=>
    textarea.focus());
}


function speedChecking(){
    characterTyped++;
    const characters = typedText.querySelectorAll('span');
    let typedchar = textarea.value.split("")[charIndex];
    // speed.innerText = parseInt( no_words);
    if(!istyping){

        timer = setInterval(initTimer,1000);
        istyping=true;
    }
        // console.log(typedchar);
        if(typedchar==null){
            
          charIndex--;
          characters[charIndex].classList.remove('correct','incorrect');
        }
        else{
            
            if(characters[charIndex].innerText===typedchar){
                characters[charIndex].classList.add('correct');
                
            }
           
            else{
                // no_mistakes++;
                characters[charIndex].classList.add('incorrect');
            }
            charIndex++;
        }
        characters.forEach(span=>span.classList.remove('active'));
        characters[charIndex].classList.add('active');
    }
    function initTimer(){
        if(timeLeft>0){
            timeLeft--;
            timeElapsed++;
            time.innerText=timeLeft;
        }
        else{
            clearInterval(timer);
            textarea.disabled=true;
        }
        s = Math.round((((characterTyped /5)/timeElapsed)*60));
        speed.textContent = s;
    }
    
paragraph();
textarea.addEventListener('input',speedChecking);
// start.addEve
ntListener('click',speedChecking);
