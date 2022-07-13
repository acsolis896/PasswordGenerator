const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("firstPassword")
let secondPasswordEl = document.getElementById("secondPassword")
const generateButton = document.getElementById("generateButton")

function generate() {
    for (i=0; i < characters.length; i++) {
        const randomIndexOne = Math.floor(Math.random()* characters.length)
        const randomIndexTwo = Math.floor(Math.random()* characters.length)

    
        firstPasswordEl.textContent = characters[randomIndexOne] + getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()
        
        secondPasswordEl.textContent = characters[randomIndexTwo] + getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()+ getRandom()
    }
   
}

function getRandom() {
    let randomCharacter = Math.floor(Math.random()* characters.length)
    return characters[randomCharacter]
}

getRandom()
// function generate() {
//     for (i=0; i < characters.length; i++) {
//         let randomIndex = Math.floor(Math.random()* characters.length);
//         return characters[randomIndex]
//     }
// }

