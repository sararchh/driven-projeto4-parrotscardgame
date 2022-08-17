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

let cards = 0;

while (cards % 2 !== 0 || cards == 0 || cards < 4 || cards > 14) {
  cards = prompt("Digite a quantidade de cartas para jogar novamente: (somente pares)");
  cardsArray.push(cards);
}

const list = document.querySelector('ul');

let indice = 0;
while (cardsArray[cardsArray.length - 1] > indice) {
  list.innerHTML = list.innerHTML + `
  <li class="card-flipper">
    <div class="front">
      <img src="./assets/front.png" alt="papagaio verde">
    </div>
    <div class="back">
       <img src=${imageArray[indice]} />
     </div>
  </li>
  `;
  indice = indice + 1;
}