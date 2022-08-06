
let translate = document.querySelector("#translate")
let textInput = document.querySelector("#text-input")
let textOutput = document.querySelector("#text-output")



translate.addEventListener("click", function(){
    textOutput.innerText = 'gibberish ' + textInput.value
    console.log(textOutput.innerHTML) 
})
