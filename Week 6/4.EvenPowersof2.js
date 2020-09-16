function solve(input){
  let n =+input.shift()
  let current = 1
  for(let i = 0; i <= n; i += 2){
    console.log(current)
    current = current * 4
  }
}
solve(["2"])
