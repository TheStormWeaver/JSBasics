function solve(input) {
  let num1 = +input.shift()
  let num2 = +input.shift()
  let min = Math.min(num1,num2)
  let max = Math.max(num1,num2)
  let magicnumber = +input.shift()
  let combos = 0
  for(let row = min; row <= max;row++){
      for(let col= min;col <= max; col++){
          combos++
          if(row+col === magicnumber){
              console.log(`Combination N:${combos} (${row} + ${col} = ${magicnumber})`)
              return
          }
      }
  }
  console.log(`${combos} combinations - neither equals ${magicnumber}`)
}
solve(["1","10","5"])
