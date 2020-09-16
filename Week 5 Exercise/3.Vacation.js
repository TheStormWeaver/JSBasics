function solve(input) {
  let moneyforvacation = +input.shift();
  let balance = +input.shift();
  let spendcount = 0;
  let days = 0;
  while (balance < moneyforvacation) {
    let command = input.shift();
    let money = +input.shift();
    days++;
    if (command === "save") {
      balance += money;
      spendcount = 0
    } else if (command === "spend") {
      balance -= money;
      spendcount++;
      if (spendcount === 5) {
        break;
      }
      if (balance < 0) {
        balance = 0;
      }
    }
  }
  if (spendcount === 5) {
    console.log(`You can\'t save the money.`);
    console.log(days);
  } else {
    console.log(`You saved the money for ${days} days.`);
  }
}
solve(["2000","1000","spend","1200","save","2000"])
