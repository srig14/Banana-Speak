const txtInput = document.querySelector("#txt-input")
const txtOutput = document.querySelector("#txt-output")
const translate = document.querySelector("#translate")

const url = "https://api.funtranslations.com/translate/minion.json"

function getUrlTranslation(text){
    return url + '?' + 'text=' + text
}

translate.addEventListener("click", function(){
    let inputText = txtInput.value
    console.log(inputText)
    fetch(getUrlTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            txtOutput.innerText = json.contents.translated
        })
})

