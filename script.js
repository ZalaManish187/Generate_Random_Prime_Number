const primeGen = document.getElementById("prime");

function primeNum() {
  let start = document.getElementById("start").value;
  let second = document.getElementById("second").value;
  let length = document.getElementById("count").value;
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
  while (length > randomPrime.length) {
    randomPrime.push(number[Math.floor(Math.random() * number.length)]);
  }
  primeGen.value = randomPrime.join("");
}

primeNum();
