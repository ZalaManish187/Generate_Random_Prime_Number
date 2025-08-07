const primeGen = document.getElementById("prime");
const primeJoin = document.getElementById("primeJoin");

function primeNum() {
  let start = document.getElementById("start").value;
  let second = document.getElementById("second").value;
  let length = 5;

  let number = [];
  for (let i = start; i < second; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      number.push(i);
    }
  }

  let randomPrime = [];
  while (randomPrime.length < length) {
    let randomIndex = Math.floor(Math.random() * number.length);

    randomPrime.push(number[randomIndex]);
  }

  primeGen.value = randomPrime;
  primeJoin.value = randomPrime.join("");
}

primeNum();
