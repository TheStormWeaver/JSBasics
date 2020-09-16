function solve(input){
  let age = +input.shift()
  let washingprice = +input.shift()
  let toyprice = +input.shift()
  let money4years = 0
  let toyyears = 0
  let money = 0
  for(let i = 1; i <= age; i++){
    if(i %2 == 0){
      money4years++
    }else{
      toyyears++
    }
  }
  for(let i = 1;i<= money4years;i++){
    money += 10 * i
  }
  money += (toyyears * toyprice) - money4years
  let dif = Math.abs(washingprice - money)
  if(money >= washingprice){
    console.log(`Yes! ${dif.toFixed(2)}`)
  }else{
    console.log(`No! ${dif.toFixed(2)}`)
  }
}
solve(["10","170","6"])
