const spanText = document.querySelectorAll('.login-container > form > section > main > article > div > span');
const inputText = document.querySelectorAll('.login-container > form > section > main > article > div > input');
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

var text = new Text();
text.sortText();

for(let i = 0; i < inputText.length; i++){
    inputText[i].addEventListener('input', function(){
        text.erase(i);
    });
    inputText[i].addEventListener('input', function(){
        text.update(i);
    });
}
