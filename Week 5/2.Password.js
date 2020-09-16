function solve(input) {
  let username = input.shift()
  let userpassword = input.shift()
  let pass = input.shift()
  while (!(pass == userpassword)) {
    pass = input.shift()
  }
  console.log(`Welcome ${username}!`)
}
solve(["Nakov","1234","pass","1324","1234"])
