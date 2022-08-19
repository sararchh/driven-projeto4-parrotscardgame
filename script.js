let contador = 0;

let firstCard;
let secondCard;

let cardsMatch = [];

let cardsArray = [];
let imageArray = [
  "./assets/explodyparrot.gif",
  "./assets/bobrossparrot.gif",
  "./assets/fiestaparrot.gif",
  "./assets/metalparrot.gif",
  "./assets/revertitparrot.gif",
  "./assets/tripletsparrot.gif",
  "./assets/unicornparrot.gif"
];

let qtdCards = 0;
while (qtdCards % 2 !== 0 || qtdCards == 0 || qtdCards < 4 || qtdCards > 14) {
  qtdCards = prompt("Digite a quantidade de cartas para jogar: (somente pares)");
}

for (let i = 0; i < qtdCards / 2; i++) {
  cardsArray.push(imageArray[i]);
  cardsArray.push(imageArray[i]);
}

const listUl = document.querySelector('ul');

function comparador() {
  return Math.random() - 0.5;
}

cardsArray.sort(comparador);

for (let indice = 0; cardsArray.length > indice; indice++) {

  let item = `
  <li class="memory-card" onclick="activeCard(this)">
    <div class="front-face">
      <img src="./assets/front.png" alt="papagaio verde">
    </div>
    <div class="back-face">
       <img src=${cardsArray[indice]} />
     </div>
  </li>
  `;

  listUl.innerHTML = listUl.innerHTML + item;
}


function activeCard(cardSelected) {

  cardSelected.classList.add('flip');

  if (!firstCard) {
    firstCard = cardSelected; // se firstCard for false, vai receber o item que cliquei
  } else {
    let firstSrc = firstCard.childNodes[3].children[0].src; //busco o src de firstCard
    let currentSrc = cardSelected.childNodes[3].children[0].src; //busco o src do card clicado

    if (firstSrc !== currentSrc) {
      timerClick = setTimeout(() => {
        cardSelected.classList.remove('flip');
        firstCard.classList.remove('flip');

        firstCard = undefined;
      }, 1000);
    } else {
      cardsMatch.push(firstSrc);
      cardsMatch.push(currentSrc);
      firstCard = undefined;
    }
  }

  contador++;  
  checkEndGame();
}

function checkEndGame() {
  const checkCard = document.querySelectorAll('.flip');

  setTimeout(()=>{
  if (checkCard.length == cardsArray.length) {
      alert(`Você ganhou em ${contador} jogadas!`);
    }
  }, 1000);
}


