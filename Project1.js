function solve(input) {
  let tourneycount = +input.shift()
  let currentline = +input.shift()
  let price = 0
  for(tour = 1; tour <= tourneycount;tour++){
    currentline = input.shift()
    while(currentline != "Finish"){
      if(currentline == "win"){
        price += 20
      }
      currentline = input.shift()
    }
    if(price >= 40){
      price *= 1.1
    }
    if(currentline ==="Finish"){
      continue
    }
   
  }

}
solve([
"2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish",
]);
