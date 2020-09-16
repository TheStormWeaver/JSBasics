function solve(input) {
  let recordseconds = Number(input.shift());
  let meterdistance = Number(input.shift());
  let timeform = Number(input.shift());
  let needswim = meterdistance * timeform;
  let md =(Math.floor(meterdistance / 15)) * 12.5
  let timesum = needswim + md;
  let failtime = timesum - recordseconds;
  let wintime = needswim + md;
  if (recordseconds <= timesum) {
    console.log(`No, he failed! He was ${failtime.toFixed(2)} seconds slower.`)
  } else {
    console.log(`Yes, he succeeded! The new world record is ${wintime.toFixed(2)} seconds.`)
  }
}
