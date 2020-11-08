function solve(input) {
  let jury = +input.shift();
  let currentline = input.shift();
  let allavaragegrades = 0;
  let totalpresintations = 0;
  while (currentline != "Finish") {
    let presentation = currentline;
    let sumofgrades = 0;
    for (let step = 1; step <= jury; step++) {
      let currentjurygrade = +input.shift();
      sumofgrades += currentjurygrade;
    }
    let avaragegrade = sumofgrades / jury;
    console.log(`${presentation} - ${avaragegrade.toFixed(2)}.`);
    allavaragegrades += avaragegrade;
    totalpresintations++;
    currentline = input.shift();
  }
  let totalaverage = allavaragegrades / totalpresintations
  console.log(`Student's final assessment is ${totalaverage.toFixed(2)}.`)
}
solve(["2", "White-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"])
