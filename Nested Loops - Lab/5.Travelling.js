function solve(input) {
  while(true){
    let destination = input.shift()
    if(destination == "End"){
      break
    }
    let budget = +input.shift()
    let sum = 0
    while(sum < budget){
      let savedmoney = +input.shift()
      sum+= savedmoney
    }
    console.log(`Going to ${destination}!`)
  }
}
solve(["Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End"])
