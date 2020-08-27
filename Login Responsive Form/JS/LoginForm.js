//select html elements
const loginForm = document.querySelector('.login-container > form');
const spanText = document.querySelectorAll('.login-container > form > section > main > article > div > span');
const inputText = document.querySelectorAll('.login-container > form > section > main > article > div > input');

//==============================================================

//form class
var Form = function(){
    this.ePreventDefault = function(e){
        e.preventDefault();
    }
}

//==============================================================

//text class
var Text = function(){
    let text = Array.from(spanText);
    this.sortText = function(){
        text.forEach((e)=>{
            console.log(e.dataset.inputText);
            e.innerHTML=e.dataset.inputText;
        });
    }

    this.erase = function(i){
        spanText[i].innerHTML='';
    }

    this.update = function(i){
        if(inputText[i].value.length==0){
            spanText[i].innerHTML=spanText[i].dataset.inputText;
        }
    }
}
//==============================================================

//init the login actions
function initLoginForm(){

    //instanciate text class
    const text = new Text();
    text.sortText();
    
    for(let i = 0; i < inputText.length; i++){
        inputText[i].addEventListener('input', function(){
            text.erase(i);
        });
        inputText[i].addEventListener('input', function(){
            text.update(i);
        });
    }

    //instanciate form class
    const form = new Form();

    function ePreventDefault(e){
        form.ePreventDefault(e);
    }
    loginForm.addEventListener('submit', ePreventDefault);

}
initLoginForm();


