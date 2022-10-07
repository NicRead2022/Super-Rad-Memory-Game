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
let userSelection = []
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
 
  if(userSelection[0].textContent === userSelection[1].textContent){
    alert("MATCH")
    userSelection.length = 0
    
  } else{
    alert("NOT A MATCH")
    //refactored following code to be a function instead of hard code
    R0C0.textContent = 1
    R0C1.textContent = 2
    R1C0.textContent = 3
    R1C1.textContent = 4
    R2C0.textContent = 5
    R2C1.textContent = 6
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

const userSelect = (selection) => {
userSelection.push(selection)

}

