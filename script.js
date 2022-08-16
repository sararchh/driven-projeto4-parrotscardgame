function askLetters() {
  let num = 0;

  do {
    num = prompt("Digite a quantidade de cards para jogar (somente pares)");
  } while (num % 2 !== 0 || num == 0 || num < 4 || num > 14);


}

askLetters();