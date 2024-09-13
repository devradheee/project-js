const myText = document.createElementById("myText");
const mySubmit = document.createElementById("mySubmit");
const resultElement = document.createElementById("resultElement");

let age;
mySubmit.onclick = function(){
   age = myText.value;
   age = Number(age);

   if(age >= 100){
    resultElement.textcontent = 'you are TOO OLD to enter this site.';
   }
   else if(age == 0){
    resultElement.textcontent = 'You can not enter. You were just born.';
   }
   else if(age >= 18){
    resultElement.textcontent = 'You are old enough to enter this site.';
   }
   else if(age < 0){
    resultElement.textcontent = 'Your age can not be below 0';
   }
   else{
    resultElement.textcontent = 'you must be 18+ to enter this site.'
   }
}


