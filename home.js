console.log("Shaheema")
//variable........................
//age=prompt("How old are you???");
// document.getElementById("id1").innerHTML=age;

//functions with arguments.....................

//var city=prompt("Where do u live??");

     //create function
// function getCity(mycity){
//     var result="I live in " + mycity;
//     console.log(result);

//       age= document.getElementById("id1").innerHTML;
// }
   //call the function


function getAge(myage){
    var ageresult="IM " + myage +" old";
    console.log(ageresult);

}
// getCity(city);

//challenge 1

function getAgdays(){
    var dob=prompt("State ur birth year");
    var date=new Date();
    var year=date.getFullYear();
    var days=( year-dob)*365;
    console.log(date);
    console.log(year);
    console.log(days);

    var para=document.createElement("p");
    var node=document.createTextNode("You are "+ days + " days old");
    para.appendChild(node);
    para.setAttribute('id','parahraaph')
    var loc=document.getElementById("location");
    loc.appendChild(para);
} 

getAge(age);
function reset(){
    //document.remove("p");
    document.getElementById("parahraaph").remove();
}

// challenge 2
 function generateFace(){
     var img=document.createElement("img");
     img.setAttribute('src','img/user-img.jpg');
     //img.src="img/user-img.jpg";
     var loc=document.getElementById("face");
     loc.appendChild(img);

 }


 //challenge 3

 function rpsGame(myChoice){
     console.log(myChoice.id);
     humanChoice=myChoice.id;
    compChoice=intToString(getRandomNum());
    //console.log(compChoice);
    result=decideWinner(humanChoice,compChoice);
    //console.log(result);
    message=getMessage(result);
    console.log(message);
    rpsFrontEnd( humanChoice,compChoice,message);
 }

 //get random numbers
 function getRandomNum(){
     return Math.floor(Math.random() * 3); 
 }

 //map the random number to an array of element so that each element can be denoted by a particular number
 function intToString(number){
    var elements=['rock','paper','scissor'];
    return elements[number];
 }

 //function to generate results
 function decideWinner(human,computer){
     var combo={
         'rock':{'rock':0.5, 'paper':0, 'scissor':1},
         'paper':{'rock':1, 'paper':0.5, 'scissor':0},
         'scissor':{'rock':0, 'paper':1, 'scissor':0.5}
        }
        humanscore =combo[human][computer];
        computerscore=combo[computer][human];

    return [humanscore,computerscore];  
 }

 //fuction to generate maessage and its display color
 //inside the bracket we have specified the return statement of the decide winner function which will eventually map in to reslts
 function getMessage([humanscore,computerscore]){
     if(humanscore===1){
         return msg={'message':'You Win','color':'green'};
     }else if(humanscore===0){
        return msg={'message':'You Lost','color':'red'};
     }else{
        return msg={'message':'its a draw','color':'yellow'};
     }
 }

 //function to show the front end animation
 function rpsFrontEnd( yourChoiceid,compChoiceid,msg){
     //create and object which has all the images
     var images={
         'rock': document.getElementById("rock").src,
         'paper':document.getElementById("paper").src,
         'scissor':document.getElementById("scissor").src
     }

     //once u click on an image all the images must be removed before displaying results
     document.getElementById("rock").remove();
     document.getElementById("paper").remove();
     document.getElementById("scissor").remove();

     //create divs for each chumanchoice,computer choice and message box
     var humandiv=document.createElement("div");
     var compdiv=document.createElement("div");
     var msgdiv=document.createElement("div");

     humandiv.innerHTML="<img src='" + images[yourChoiceid] +"' height='200px' widhth='150px' style='box-shadow: 0px 10px 50px green'>";
     compdiv.innerHTML="<img src='" + images[compChoiceid] +"' height='200px' widhth='150px' style='box-shadow: 0px 10px 50px red'>";
     msgdiv.innerHTML="<h2 style='color:"+msg['color']+" padding:10px'>"+msg['message']+"</h2>";

     document.getElementById("imgbox").appendChild(humandiv);
     document.getElementById("imgbox").appendChild(compdiv);
     document.getElementById("imgbox").appendChild( msgdiv);



    }

//challenge 4

    //instead of using onclick for the button we can use a query selector and event listener click

    /// --------------document.querySelector("#hit").addEventListener('click', blackJack);
   
   
    function blackJackHit() {
       
          blackJackvar={
            'you':{ 'scoreSpan':'#myscore','div':'#MYscore','score':0 },
            'dealer':{ 'dealSpan':'#dealerscore','div':'#DEALscore','score':0 },
            'card':['2', '3', '4', '5', '6', '7', '8', '9', '10','K','J','Q','A'],//array
            'cardscore':{'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
            }
            //create object to access data fro the object blackJacjvar
            //the problem--->was not able to use var,cont,let to define the the below variable
             me=blackJackvar['you'];
             deal=blackJackvar['dealer'];
            hitsound=new Audio('sounds/swish.m4a');

            card=genCards();
            console.log(card);
            showCard(me);
            myscore=updatescore(me);
            console.log(myscore);
      
   }
   //to randomlly generate images
   function genCards(){
    randomnumber= Math.floor(Math.random() * 13); 
    return blackJackvar['card'][randomnumber];

   }

  //by giving a parameter active we can make this function for both the hit and stand button
   function showCard(active){
       var image= document.createElement("img");
       //image.src='images/2.png';
       image.src=`images/${card}.png`;//new
       var imagelocation=document.querySelector(active['div']);
       imagelocation.appendChild(image);
       hitsound.play();
   }

   function blackJackdeal(){
       // clock on the deal button-->remove card from human side
       console.log("hi");
       var allimg=document.querySelector("#MYscore").querySelectorAll('img');
       var alldealimg=document.querySelector("#DEALscore").querySelectorAll('img')
    //    allimg[0].remove();---->to remove one image at a time

    //to remove all the images at the same time
       for(i=0; i < allimg.length; i++){
        allimg[i].remove();
       }
       for(i=0; i < alldealimg.length; i++){
        alldealimg[i].remove();
       }

   }

   function updatescore(activePlayer){
       //return activePlayer['score'] +=blackJackvar['cardscore'][card];
       return activePlayer['score']=activePlayer['score']+1;
       
   }

   function showscore(activePlayer){

   }
   
    

    

