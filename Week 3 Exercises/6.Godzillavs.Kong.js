function solve(input) {
  let budget = Number(input.shift());
  let statist = Number(input.shift());
  let clothingcost = Number(input.shift());
  let direktorsum = 0.10 * budget 
  let obleklosum = statist * clothingcost
  let adiitionalbudget = 0
  let enougbudget = 0
  if (statist >= 150){
    otstupka = obleklosum * 0.10
    obleklosum -= otstupka
  }
  let filmsum = direktorsum + obleklosum
  if (budget >= filmsum){
    additionalbudget = budget- filmsum
    console.log(`Action!
  Wingard starts filming with ${additionalbudget.toFixed(2)} leva left.`)
  } else {
    enougbudget = filmsum - budget
    console.log(`Not enough money!
  Wingard needs ${enougbudget.toFixed(2)} leva more.`)
  }
  }
solve(["20000","120","55.6"])
