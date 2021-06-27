
 var x= prompt("Enter your Gender");
 document.querySelector('.gender').innerHTML=x.toUpperCase();
 
  


 if(x=="male"|| x=="Male"){

   for(var i=0;i<=5;i++){

      function samad(){ 
     var guessNumber=parseInt(document.getElementById("doll").value);
     var randomNumber=Math.floor(Math.random()*5)+1;  
     
     if(guessNumber==randomNumber){
     document.getElementById("pass").innerHTML="HEY! Man YOU HAVE WON"
     
     }
     else if(guessNumber>5){
        document.getElementById("pass").innerHTML="ENTER VALID NUMBER"
     }
     else{
     document.getElementById("pass").innerHTML="OHH! YOU HAVE LOST Man.Right number is "+randomNumber;
     
  }
}
  

}
 }

else if(x=="Female"||x=="female"){

   for(var i=0;i<=5;i++){

      function samad(){ 
     var guessNumber=parseInt(document.getElementById("doll").value);
     var randomNumber=Math.floor(Math.random()*5)+1;  
     
     if(guessNumber==randomNumber){
     document.getElementById("pass").innerHTML="HEY! Girl YOU HAVE WON"
     
     }
     else if(guessNumber>5){
        document.getElementById("pass").innerHTML="ENTER VALID NUMBER"
     }
     else{
     document.getElementById("pass").innerHTML="OHH! YOU HAVE LOST Sister.Right number is "+randomNumber;
     
  }
}
  

}

}
else{
alert("Enter a valid gender");
}

 
 



     















