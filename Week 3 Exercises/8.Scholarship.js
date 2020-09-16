function solve(input) {
  let salary = +input.shift();
  let grades = +input.shift();
  let minsalary = +input.shift();
  let socialscholarship = 0;
  let gradesscholarship = 0;
  if (salary < minsalary) {
    if (grades > 4.50) {
      socialscholarship = minsalary * 0.35
    }
  }
  if (grades >= 5.5) {
    gradesscholarship = grades * 25
  }
  if (socialscholarship > gradesscholarship) {
    console.log(`You get a Social scholarship ${Math.floor(socialscholarship)} BGN`)
  } else if (gradesscholarship > socialscholarship) {
    console.log(`You get a scholarship for excellent results ${Math.floor(gradesscholarship)} BGN`)
  } else {
    console.log(`You cannot get a scholarship!`)
  }
}
solve(["480.00","4.60","450.00"])
