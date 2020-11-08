function solve(input) {
  let opentabs = +input.shift()
  let salary = +input.shift()
  let facebook = 150
  let instagram = 100
  let reddit = 50
  for(let tab = 1; tab <= opentabs;tab++){
    let currenttab = input.shift()
    if(salary <= 0){
      break
    }
    if(currenttab === "Facebook"){
      salary -= facebook
    }else if(currenttab === "Instagram"){
      salary -= instagram
    }else if(currenttab === "Reddit"){
      salary -= reddit
    }
  }
  if(salary > 0){
    console.log(`${salary}`)
  }else{
    console.log(`You have lost your salary.`)
}
}
solve(["10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook"])
