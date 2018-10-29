//  'use string'
//  let people = prompt('Do you think Womens Population are higher than Mens?')
// if(people.toLowerCase() === 'yes' ||
// people.toUpperCase() === 'YES' ||
//  people.toLowerCase() === 'y' ||
//  people.toUpperCase() === 'Y'){
//   alert(people + ', acordind to the statistics Womens Population is more higher than Mens.')
  
//  }else {
//   alert(people  + ', Wrong, the answer is yes.')
// }
// let person = prompt(" can a man live a month without   water?")
// if(person.toLowerCase() === 'yes' || person.toUpperCase() === 'YES' ||person.toLowerCase() === 'y' ||person.toUpperCase === 'Y' ){
//   alert(person + ',is inccorrect, a person can not live without water.') 
  
// } 
//   else{
//   alert(person + ', correct. a person can not live without water.')
// }

// let pig = prompt("they say, Pig is the smartest animal in the world?.")
// if((pig.toLowerCase() === 'yes') ||(pig.toUpperCase() === 'YES') ||(pig.toLowerCase() === 'y') ||(pig.toUpperCase() ==='Y' )){
// alert(pig + " is incorrect. You don\'t know yourself!.") 

// }
// else if ((pig.toLowerCase() === 'no') ||(pig.toUpperCase() === 'NO') ||(pig.toLowerCase() === 'n') ||(pig.toUpperCase() ==='N' )){
  
// alert(pig + " is correct. good to know yourself." )
// }

// // else{
//   // alert("gfgfgfg")
//   // alert("you should put either yes or no")
// // }


// let guy = prompt('can you touch your right ear with your left hand over your head')
//  if(guy.toLowerCase() === 'yes' ||
//  guy.toUpperCase() === 'YES' ||
//  guy.toLowerCase() === 'y' ||
//  guy.toUpperCase() === 'Y' ){
//   alerst(guy + ", is correct, you are full.")
  
//   }
// else{
//   alert(guy + 'is incorrect, don\'t afraid to try!.')
// }
// let animal = prompt ("is Cheter the fastest animal in the world?.")
//  if(animal.toLowerCase() === 'yes' ||
//  animal.toUpperCase() === 'YES' ||
//  animal.toLowerCase() === 'y' ||
//  animal.toUpperCase() === 'Y' ){
// alert(animal + ' is the fastest animal in the world . butt he dosen\'t know JS.')

//  }
//   else{
//  alert(animal + 'is not correct. cheter is the fastest animal in the world.')
//   }
// /
// }
//    let international = prompt('1elephanat,2lion,3giraf,4buffalo.')
    
//    if(i) === 5) {
//    alert('sorry, you are incorrect. try again.')
// }
//  else if(international.toLowerCase()=== '1elephant'){
//  alert('good job! this are the four biggest animals in the world' + internationalArray[1] + '1elephanat'+',' + internationalArray[2] + internationalArray[3]  + ', and ' + internationalarray[4] + ',' )
//  counter++ 
// break 
//  }
//  else if(international.toLowerCase() === 'lion'){
//    alert('sgood job! this are the four biggest animals in the world' + (internationlaArray[2]  + internationalarray[3] 'and ' + 'and ' internationalArray[4]
//    break++
//   }  
//    else if (international.toLowerCase() === 'jirafe')
//  alert('good job! this are the four biggest animals in the world' + internationalArray[3] +  'and ' + internationalArra[4]
//  break++

//    (internationalArray.toLowerCase()  === 'buffalo') 
//      alert('good job! this are the four biggest animals in the world' + (internationalArra[2] + 'and '(internationalArra[3] + internationalArra[1]           'more chances.')
//    }
//  console.log('Index is now', i)
//   console.log(internationalArray[i]) 
// }
let languageArray = ['English', 'French', 'Italian', 'Spanglish']

// /let languagesspokenFunc = function() 
 for(let i = 0; i < languageArray.length; i++){
     let languagesspoken = prompt('How many languages does Hannah speak?')
if((languageArray.length -1) - (i) === 0) {
    alert('Sorry, you\'re out of chances. Move on to the next question.')
   }
 else if(languagesspoken === '4') {
  alert('Great job! Hannah speaks ' + languageArray.length + ' languages.')
   counter++
      // i = languageArray.length
  } else if(languagesspoken < '4') {
   alert('Sorry, that\'s too few. You have ' + ((languageArray.length -1) - (i)) + ' more chances.'
    )
  } else if(languagesspoken > '4') {
    alert('Sorry, that\'s too many. You have ' + ((languageArray.length -1) - (i)) + ' more chances.'
       )
   }
  // console.log('Index is now', i)
  //  console.log(languageArray[i])  }
 }
//  languagesspokenFunc()

// let languagesspoken2Func = function() {
  //  for(let i = 0; i < 6; i++){
   let languagesspoken = prompt('Can you name one of the four languages that Hannah speaks?')
    if(i === 5) {
     alert('Sorry, you\'re out of chances. Move on to the next question.')
    }
    else if(languagesspoken.toLowerCase() === 'english') {
    alert('Great job! Hannah speaks ' + languageArray[0] + '. She also speaks ' + languageArray[1] +', ' + languageArray[2] +' and ' + languageArray[3] + '.')
      counter++
    break
  } else if(languagesspoken.toLowerCase() === 'french') {
   alert('Great job! Hannah speaks ' + languageArray[1] + '. She also speaks ' + languageArray[0] +', ' + languageArray[2] +' and ' + languageArray[3] + '.')
      counter++
    break
    } else if(languagesspoken.toLowerCase() === 'italian') {
     alert('Great job! Hannah speaks ' + languageArray[2] + '. She also speaks ' + languageArray[0] +', ' + languageArray[1] +' and ' + languageArray[3] + '.')
    counter++
      break
  } else if(languagesspoken.toLowerCase() === 'spanglish') {
    alert('Great job! Hannah speaks ' + languageArray[3] + '. She also speaks ' + languageArray[0] +', ' + languageArray[1] +' and ' + languageArray[2] + '.')
    counter++
         break
  } else if(languagesspoken !== languageArray[i]) {
alert('Sorry, that\'s not a language Hannah speaks. You have ' + ((languageArray.length + 1) - (i) + ' more chances.'))
 }
  

 let goodjobFunc = function() {
   let goodjob = confirm('Good Job ' + username + '! You got ' + counter + ' out of 7 questions correct.')

  console.log(goodjob, 'Quiz is completed.')
  
}

