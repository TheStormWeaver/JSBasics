function solve(input) {
  let number = +input.shift()
  if (number >= -100 && number <= 100 && number != 0){
    console.log("Yes")
  } else {
    console.log("No")
  }
}
solve(["-25"])
