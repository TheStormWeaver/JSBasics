function solve(input) {
  let floors = +input.shift();
  let count = +input.shift();
  for (let row = floors; row >= 1; row--) {
    let result = "";
    let type = "";
    if (row % 2 == 0) {
      type = "O";
    } else {
      type = "A";
    }
    if(row == floors){
      type = "L"  
    }
    for (let col = 0; col < count; col++) {
      result += `${type}${row}${col} `;
    }
    console.log(result);
  }
}
solve(["6","4"])
