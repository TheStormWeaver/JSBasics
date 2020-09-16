function solve(input) {
  let string = input.shift()
  let totalsum = 0
  for(let i = 0; i < string.length; i++ ){
    let char = string[i]
    switch(char){
      case"a":
      totalsum += 1
      break
      case"e":
      totalsum += 2
      break
      case"i":
      totalsum += 3
      break
      case"o":
      totalsum += 4
      break
      case"u":
      totalsum += 5
      break

    }
  }
  console.log(totalsum)
}
solve(["beer"])
