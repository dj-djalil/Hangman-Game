//letters 
const letters='abcdefghijklmnopqrstuvwxyz';
//letters from array
let arrayLetters=Array.from(letters);
// console.log(arrayLetters)

// select letters container
let lettersContainer=document.getElementsByClassName("letters")[0];
// console.log(lettersContainer);

//Generate letters
arrayLetters.forEach(letter => {
let span= document.createElement("span");
// let spanContent=document.createTextNode(letter);
//span.appendChild(spanContent);
   
   span.textContent=letter;
//span.classList.add("letter-box");
   span.className="letter-box"
   lettersContainer.appendChild(span);
//    console.log(letter)
});
 

//Object of word + categorie
const words={
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Algeria", "Moroco"]

} 

//get Random Proprtie 
let arrayProperty= Object.keys(words),
randomNumber=Math.floor(Math.random()*arrayProperty.length),
randomPropName=arrayProperty[randomNumber],
randomPropValue=words[randomPropName];

 let randomValueNumber= Math.floor(Math.random()*randomPropValue.length),
  randomValue=randomPropValue[randomValueNumber];
   console.log(randomValue);

// set categoie info
  let categorie=document.querySelector(".category span");
   categorie.textContent=`${randomPropName}`;


// lettres guess 
let letter_guess=document.querySelector(".letters-guess");
//console.log(letter_guess)
let arrayLettersGuess=Array.from(randomValue.toLowerCase());
// console.log(arrayLettersGuess)

//create span depend on the word 
arrayLettersGuess.forEach(letter => {
    let span=document.createElement("span");
     
    if(letter===' '){
        span.className="with-space"
         
    }
     letter_guess.appendChild(span);
});

//select guess span
let spans=document.querySelectorAll(".letters-guess span");

// handling click event 
 
 let wrongCase=0,
 trueCase=0;
 wordGeuss='';
document.addEventListener('click',(e)=>{
    let wrongLetter=false;
    if(e.target.className==="letter-box"){
        e.target.classList.add("clicked");
        let letterClicked=e.target.textContent.toLowerCase();

        arrayLettersGuess.forEach((letterGuess,i) => {
            if(letterClicked==letterGuess){
                 spans[i].textContent=letterClicked;
                 wrongLetter=true;
                 trueCase++;
            }
        })
         
        if(!wrongLetter){
            wrongCase++;
            document.getElementById("fail").play();
            switch (wrongCase) {
               case 1:document.querySelector('.hangman-draw .the-draw').style.display="block";
                                
                     break;
                case 2:document.querySelector('.hangman-draw .the-stand').style.display="block";
                                
                     break;
                case 3:document.querySelector('.hangman-draw .the-hang').style.display="block";
                                
                     break;
                        
                case 4:document.querySelector('.hangman-draw .the-rope').style.display="block";
                                
                    break;
                case 5:document.querySelector('.hangman-draw .the-man .head').style.display="block";
                                
                    break;
                case 6:document.querySelector('.hangman-draw .the-man .body').style.display="block";
                                
                    break; 
                    
                case 7:document.querySelector('.hangman-draw .the-man .hands').style.display="block";
                                
                    break; 
                case 8:document.querySelector('.hangman-draw .the-man .legs').style.display="block", 
                endGame("end");
                                
                    break;    
                       }

        }else{
            document.getElementById("success").play();      
        }
        if(trueCase==randomValue.length){
            endGame("congratulation")
        }
    }
});
   
             
function endGame(type){
    lettersContainer.classList.add("finished");
    let div =document.createElement("div");
    let  divContent;
    
    if(type=="end"){
    divContent=document.createTextNode(`Game over the word is ${randomValue}`);
    div.className="popup";
    }
    else {
    divContent=document.createTextNode(`Congratulation `);
    div.className="congratulation";
    
    }
    div.appendChild(divContent);
    document.body.appendChild(div);
}

 
   
     

