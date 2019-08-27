var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1 + 1);


var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2 + 1);



// Verification for dice 1

switch(randomNumber1){
  case 1:
    document.lastElementChild.lastElementChild.children[1].children[2].firstElementChild.setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.lastElementChild.lastElementChild.children[1].children[2].firstElementChild.setAttribute("src","images/dice2.png");
    break;
  case 3:
    document.lastElementChild.lastElementChild.children[1].children[2].firstElementChild.setAttribute("src","images/dice3.png");
    break;
  case 4:
    document.lastElementChild.lastElementChild.children[1].children[2].firstElementChild.setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.lastElementChild.lastElementChild.children[1].children[2].firstElementChild.setAttribute("src","images/dice5.png");
    break;
  case 6:
    document.lastElementChild.lastElementChild.children[1].children[2].firstElementChild.setAttribute("src","images/dice6.png");
    break;
}

// Verification for dice 2

switch(randomNumber2){
  case 1:
    document.lastElementChild.lastElementChild.children[1].children[3].firstElementChild.setAttribute("src","images/dice1.png");
    break;
  case 2:
    document.lastElementChild.lastElementChild.children[1].children[3].firstElementChild.setAttribute("src","images/dice2.png");
    break;
  case 3:
    document.lastElementChild.lastElementChild.children[1].children[3].firstElementChild.setAttribute("src","images/dice3.png");
    break;
  case 4:
    document.lastElementChild.lastElementChild.children[1].children[3].firstElementChild.setAttribute("src","images/dice4.png");
    break;
  case 5:
    document.lastElementChild.lastElementChild.children[1].children[3].firstElementChild.setAttribute("src","images/dice5.png");
    break;
  case 6:
    document.lastElementChild.lastElementChild.children[1].children[3].firstElementChild.setAttribute("src","images/dice6.png");
    break;
}

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "<i class='fas fa-flag flag'></i> PLAYER 1 WINS!";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = " PLAYER 2 WINS! <i class='fas fa-flag flag'></i>";

}else{
  document.querySelector("h1").innerHTML = " <i class='fas fa-flag flag'></i> DRAW! <i class='fas fa-flag flag'></i>";
}
