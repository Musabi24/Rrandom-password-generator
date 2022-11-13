const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
,"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",
";","<",">",".","?",
"/"];
 
 let Btn = document.getElementById("btn")
 let Btn1 = document.getElementById("btn1")
 let password = " "
 let password1 =" "
 function generatePassword(){
    Btn.textContent =" "
    Btn1.textContent =" "
    for (let i = 0; i < 15; i++) { 
     let randomNumber = Math.floor(Math.random()*characters.length)
     let randomNumber1 = Math.floor(Math.random()*characters.length)
     password= characters[randomNumber]
     password1= characters[randomNumber1]
     Btn.textContent += password
     Btn1.textContent += password1
    }
 }
 inputEl = document.getElementById("input-el")
 function copyPassword(){
     inputEl.value = Btn.textContent
 }
 
 function copypassword1(){
     inputEl.value = Btn1.textContent
 }


  
 