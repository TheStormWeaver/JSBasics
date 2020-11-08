function solve(input) {
  let first = +input.shift();
  let second = +input.shift();
  let line = "";
  for (let i = 1; i <= first; i++) {
    for (let j = 1; j <= first; j++) {
      for (let k = 1; k <= second; k++) {
        for (let m = 1; m <= second; m++) {
          for (let n = 1; n <= first; n++) {
            if (n > i && n > j) {
              let symbol1 = String.fromCharCode(k + 96);
              let symbol2 = String.fromCharCode(m + 96);
              line += `${i}${j}${symbol1}${symbol2}${n} `;
            }
          }
        }
      }
    }
  }
  console.log(line)
}
solve(["2","4"])
