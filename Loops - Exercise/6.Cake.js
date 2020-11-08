function solve(input) {
  let length = +input.shift();
  let width = +input.shift();
  let area = length * width;
  let data = input.shift();
  while ("STOP" !== data) {
    let pieces = Number(data);
    area = area - pieces;
    if (area <= 0) {
      let piecesneed = area;
      console.log(
        `No more cake left! You need ${Math.abs(piecesneed)} pieces more.`
      );
      break;
    }
    data = input.shift();
} if(area >= 0){
console.log(`${area} pieces are left.`)
}
}
solve(["10","10","20","20","20","20","21"])
