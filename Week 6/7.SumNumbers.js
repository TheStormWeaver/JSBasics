function solve(input) {
  let n = +input.shift()
  let sum = 0
  for(let i = 1;i <= n;i++){
    let num = +input.shift()
    sum += num
  }
  console.log(sum)
}
solve(["2","10","20"])
