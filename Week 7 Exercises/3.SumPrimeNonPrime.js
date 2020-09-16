function solve(input) {
  let number = input.shift();
  let primesum = 0;
  let nonprimesum = 0;
  while (number !== "stop") {
    number = Number(number);
    let isprime = true;
    if (number < 0) {
      console.log(`Number is negative.`);
    } else {
      for (let digit = 2; digit < number; digit++) {
        if (number % digit === 0) {
          isprime = false;
          break;
        }
      }
      if (isprime) {
        primesum += number;
      } else {
        nonprimesum += number;
      }
    }
    number = input.shift();
  }
  console.log(`Sum of all prime numbers is: ${primesum}`);
  console.log(`Sum of all non prime numbers is: ${nonprimesum}`);
}
solve(["3", "9","0","7","19","4","stop"])
