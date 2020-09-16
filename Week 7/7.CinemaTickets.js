function solve(input) {
  let movie = input.shift();
  let students = 0;
  let kids = 0;
  let standards = 0;

  while (movie != "Finish") {
    let totalseats = Number(input.shift());
    let soldseats = 0;
    for (let i = 0; i < totalseats; i++) {
      let currenttype = input.shift();
      if (currenttype === "End") {
        break;
      }
      soldseats++;

      switch (currenttype) {
        case "standard":
          standards++;
          break;
        case "kid":
          kids++;
          break;
        case "student":
         students++;
          break;
      }
    }
    console.log(`${movie} - ${(soldseats/totalseats*100).toFixed(2)}% full.`)
    movie = input.shift();
  }
  let totalsoldseats = kids+standards+students
  console.log(`Total tickets: ${totalsoldseats}`)
  console.log(`${(students/totalsoldseats*100).toFixed(2)}% student tickets.`)
  console.log(`${(standards/totalsoldseats*100).toFixed(2)}% standard tickets.`)
  console.log(`${(kids/totalsoldseats*100).toFixed(2)}% kids tickets.`)

}
solve(["Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish"])
