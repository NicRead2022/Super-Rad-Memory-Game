// const gameGrid = 
// I need to name the gameGrid
// I need to assign each box a name
// I need to assign each box 'click' event Listener
// I need to assign the box a function once the click occurs
// when the function happens I need a picture of the wizard to appear



const cardHP ={
  text: "Harry Potter"
}
const cardHG ={
  text: "Hermione Granger"
}
const cardRW ={
  text : "Ron Weasley"
}


const rowA = [cardHP,cardHG]
const rowB = [cardHG,cardRW]
const rowC = [cardHP,cardRW]
const table = [rowA, rowB, rowC]
const userSelection = []
const test = table[2][1].text
console.log (table)
console.log (test)

let R0C0 = document.getElementById("0,0")
let R0C1 = document.getElementById("0,1")
let R1C0 = document.getElementById("1,0")
let R1C1 = document.getElementById("1,1")
let R2C0 = document.getElementById("2,0")
let R2C1 = document.getElementById("2,1")

const checkMatch = () => {
if(userSelection.length >= 2){
  console.log(userSelection[0].textContent, userSelection[1].textContent)
  if(userSelection[0].textContent === userSelection[1].textContent){
    alert("match")
    userSelection.length = 0
    console.log(userSelection)
  } else{
    alert("doesnt match")
    userSelection[0].textContent = ""
    userSelection[1].textContent = ""
    userSelection.length = 0
  }

}
}


function myReveal00(){
  R0C0.textContent = table[0][0].text
  userSelect(R0C0)
  checkMatch()
 
  
}
function myReveal01(){
  R0C1.textContent = table[0][1].text
  userSelect(R0C1)
  checkMatch()

}
function myReveal10(){
  R1C0.textContent = table[1][0].text
  userSelect(R1C0)
  checkMatch()

}
function myReveal11(){
  R1C1.textContent = table[1][1].text
  userSelect(R1C1)
  checkMatch()
  
} 
function myReveal20(){
  R2C0.textContent = table[2][0].text
  userSelect(R2C0)
  checkMatch()

}
function myReveal21(){
  R2C1.textContent = table[2][1].text
  userSelect(R2C1)
  checkMatch()

}

const userSelect = (el) => {
userSelection.push(el)

}

