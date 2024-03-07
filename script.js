const display = document.querySelector('.display')
const seconddisplay = document.querySelector('.seconddisplay')
let calculation = ""
function appendanumber(n){
    display.value += n
}
function deleteall(){
    display.value = ""
    seconddisplay.value = ""
    calculation = ""
}
function deleteonenumber(){
    display.value = display.value.slice(0, -1)
    calculation = calculation.slice(0,-1)
}
function plus(){
    seconddisplay.value += display.value+"+"
    calculation += display.value+"+"
    display.value = ""
}
function minus(){
    seconddisplay.value += display.value+"-"
    calculation += display.value+"-"
    display.value = ""
}
function multiply(){
    seconddisplay.value += display.value+"x"
    calculation += display.value+"*"
    display.value = ""
}
function divide(){
    seconddisplay.value += display.value+"÷"
    calculation += display.value+"/"
    display.value = ""
}
function equals(){
    display.value = eval(calculation+display.value)
    seconddisplay.value = ""
    calculation = ""
}