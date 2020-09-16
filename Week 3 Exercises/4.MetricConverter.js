function solve(input) {
let num = Number(input.shift())
let startm = input.shift()
let endm = input.shift()
if (startm == "mm"){
  num /= 1000
} else if (startm == 'cm'){
  num /= 100
}  
if (endm == 'mm'){
  num *= 1000
} else if (endm == "cm"){
  num *= 100
}
console.log(num.toFixed(3))
}
solve(["12","mm","n"])
