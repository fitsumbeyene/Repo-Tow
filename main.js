'use string'

let counter = 0

let username = prompt('What\'\s your name?')

console.log(username, ' is the username.')

let peopleFunc = function() {
  let people = prompt('Do you think Womens Population are higher than Mens?')
  if(people.toLocaleLowerCase() === 'yes'){
     alert('right, Womens Population is higher than Mens.')
  }
  else 
  alert("Wrong, the answer is yes.")
}

peopleFunc()

let personFunc = function() {
  let person = prompt(" man can live a month without water?")
  if(person.toLocaleLowerCase() === 'true'){
    alert("false. a person can not live a month without water.")}
    else
    alert("true, a person can not live a month without water.")  
}
personFunc()

let PigFunc = function() {
  let Pig = prompt("they said, Pig is the smartest animal in the world?.")
  if(Pig.toLocaleLowerCase() === 'yes'){
    alert("right, its good to know yourself.")}
    else
alert("wrong, You don't know yourself!.")
}

PigFunc()

let guyFunc = function() {
  let guy = prompt("can you touch your right ear with your left hand over your head.")
  if(guy.toLocaleLowerCase() === 'yes'){
    alerst("correct, you are full.")
  }
    else
    alert("incorrect, dont afraid to try!.")
}

guyFunc()

let animalFunc = function() {
  let animal = prompt("Cheter is the fastest animal in the world?.")
  if(animal.toLocaleLowerCase() === 'True'){
    alert("true, butt he dosen't know JS.")}
 else
 alert("false, but he is good at html,css,and js.")
}