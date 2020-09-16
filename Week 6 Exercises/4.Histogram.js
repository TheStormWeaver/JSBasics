function solve(input) {
  let end = +input.shift();
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  for (let i = 0; i <= end; i++) {
    let number = +input.shift();
    if (number < 200) {
      p1++;
    } else if (number >= 200 && number <= 399) {
      p2++;
    } else if (number >= 400 && number <= 599) {
      p3++;
    } else if (number >= 600 && number <= 799) {
      p4++;
    } else if (number >= 800) {
      p5++;
    }
  }
  let p1percent = ((p1 / end)*100).toFixed(2)
  let p2percent = ((p2 / end)*100).toFixed(2)
  let p3percent = ((p3 / end)*100).toFixed(2)
  let p4percent = ((p4 / end)*100).toFixed(2)
  let p5percent = ((p5 / end)*100).toFixed(2)
  console.log(`${p1percent}%`)
  console.log(`${p2percent}%`)
  console.log(`${p3percent}%`)
  console.log(`${p4percent}%`)
  console.log(`${p5percent}%`)
}
solve(["3","1","2","999"])
