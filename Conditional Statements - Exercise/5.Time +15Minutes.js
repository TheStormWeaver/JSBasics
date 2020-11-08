function solve(input) {
let hours = Number(input.shift());
let minutes = Number(input.shift());
minutes+= hours * 60
minutes+= + 15
let lh = Math.floor(minutes / 60) 
let fm = minutes - lh * 60
if (lh >= 24){
  lh -=24
}
if (fm < 10) {
  console.log(`${lh}:0${fm}`)
} else {
  console.log(`${lh}:${fm}`)
}
}
solve(["1","46"])
