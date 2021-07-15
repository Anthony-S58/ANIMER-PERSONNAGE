const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;
document.addEventListener('keydown', function(event) {

 if (event.code == 'ArrowUp') {
    
 playerWalk = playerWalk + 1;
 // Votre code ici
 
 if (playerWalk % 2 == 0) {
 player.style.backgroundImage="url(img/5.png)";
 
 } else {player.style.backgroundImage="url(img/6.png)";}

 player.style.top = (player.offsetTop - moveSize) + "px";
 } else if (event.code == 'ArrowRight') {
 playerWalk = playerWalk + 1;
 // Votre code ici
 if (playerWalk % 2 == 0) {
    player.style.backgroundImage="url(img/7.png)";
    
    } else {player.style.backgroundImage="url(img/8.png)";}


 player.style.left = (player.offsetLeft + moveSize) + "px";
 } else if (event.code == 'ArrowDown') {
 playerWalk = playerWalk + 1;
 // Votre code ici
 if (playerWalk % 2 == 0) {
    player.style.backgroundImage="url(img/1.png)";
    
    } else {player.style.backgroundImage="url(img/2.png)";}

 player.style.top = (player.offsetTop + moveSize) + "px";
 } else if (event.code == 'ArrowLeft') {
 playerWalk = playerWalk + 1;
 // Votre code ici
 if (playerWalk % 2 == 0) {
    player.style.backgroundImage="url(img/3.png)";
    
    } else {player.style.backgroundImage="url(img/4.png)";}

 player.style.left = (player.offsetLeft - moveSize) + "px";
 } 
});

const bomb = document.getElementById("bomb");
let explode = document.getElementById("explosion");


document.addEventListener('keydown', function(pose){

    if (pose.code =='Space') {
      bomb.style.backgroundImage="url(img/bomb.png)";
      bomb.style.display="block";
      explode.style.display = "none";
      bomb.style.top = player.style.top;
      bomb.style.left = player.style.left;

      if (setTimeout(function() {
         bomb.style.display="none";
         explode.style.backgroundImage= "url(img/explosion2.png)";
         explode.style.top = bomb.style.top;
         explode.style.left = bomb.style.left;
         explode.style.display = "block";
      },3000));

      if (setTimeout(function() {
         explode.style.display = "none";
       },5000));     
}});




