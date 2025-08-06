const primeGen = document.getElementById("prime");
const length = 5;

function primeNum() {
  let start = document.getElementById("start").value;
  let second = document.getElementById("second").value;
  let number = [];
  for (let i = start; i <= second; i++) {
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
    randomPrime.push(number[Math.floor(Math.random() * number.length)]);
  }
  primeGen.value = randomPrime.join("\n");
}

primeNum();
