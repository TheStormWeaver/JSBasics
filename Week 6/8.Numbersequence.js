function solve(input) {
  let end = +input.shift()
  let max = Number.MIN_SAFE_INTEGER
  let min = Number.MAX_SAFE_INTEGER
  for(let i = 0; i <= end; i++){
    let number = +input.shift()
    if(number > max ){
      max = number
    }
    if(number < min){
      min = number
    }
  }
  console.log(`Max number: ${max}`)
  console.log(`Min number: ${min}`)
}
solve(["5","10","20","304","0","50"])
