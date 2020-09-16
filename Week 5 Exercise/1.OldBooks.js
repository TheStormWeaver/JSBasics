function solve(input) {
  let booktosearch = input.shift();
  let countofbooks = +input.shift();
  let isfound = false
  let counter = 0;
  while (countofbooks > counter) {
    let currentbook = input.shift();
    if (currentbook === booktosearch) {
        isfound = true
        break
    }
    counter++
  }
  if(isfound){
      console.log(`You checked ${counter} books and found it.`)
  } else {
      console.log("The book you search is not here!")
      console.log(`You checked ${countofbooks} books.`)
  } 
}
solve(["Troy","8","Stronger","Life Style","Troy"])
