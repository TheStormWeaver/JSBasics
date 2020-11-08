function solve(input) {
  let weakgradescount = +input.shift();
  let weakcount = 0;
  let gradesum = 0;
  let gradecount = 0;
  let lasttitle = "";
  let title = input.shift();
  while (title !== "Enough") {
    let grade = +input.shift();
    gradesum += grade;
    gradecount++;
    lasttitle = title

    if (grade <= 4) {
      weakcount++;
    }

    if (weakcount == weakgradescount) {
      break;
    }
    title = input.shift();
  }
  if (title == "Enough") {
    let avg = gradesum / gradecount;
    console.log(`Avarage score: ${avg.toFixed(2)}`);
    console.log(`Number of problems:${gradecount}`);
    console.log(`Last problem: ${lasttitle}`);
  } else {
    console.log(`You need a break, ${weakcount} poor grades.`);
  }
}
solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
