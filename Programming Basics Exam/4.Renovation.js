/*
Peter decides that he wants to make repairs to his home. His job is to paint the walls in the living room. He knows 
the height and width of a wall. Pesho's living room has 4 walls that are the same size, a certain percentage of
which are occupied by windows and doors that will not be painted. He is not sure if he will succeed
at once, so he asks you to help him calculate if he has any work left for the next day and,
if so, how many square meters does he have to finish, and in case he manages to paint the living room, how much paint does he have left.
keep in mind that one liter of paint paints one square meter of the wall).
Input
The following lines are read from the console:
1. Wall height - integer [0… 100]
2. Wall width - integer [0… 100]
3. Percentage of the total area of ​​the walls that will not be painted - integer [5… 95]
On the following lines until you receive the command "Tired!" or until they are all painted
walls, read one number:
• Liters of paint - integer [0… 100]:
Note: The painting area should be rounded up to the nearest whole number.
Print one of the following lines to the console:
• When receiving the "Tired!" Command:
"{square meters} quadratic m left."
{square meters} is the surface that remains to be painted.
• If there is excess paint left:
"All walls are painted and you have {liters of paint} l
paint left! "
• If after painting all the walls there is no paint left:
"All walls are painted! Great job, Pesho!"
 */
function renovation(input) {
  let wallheight = input.shift();
  let wallwidth = input.shift();
  let unneededrange = input.shift();
  let neededrange = wallheight * wallwidth * 4;
  let unneededsum = (unneededrange / 100) * neededrange;
  let finalrange = neededrange - unneededsum;
  let ispainted = false;
  for (i = 0; i < input.length; i++) {
    let element = input[i];
    if (element == "Tired!") {
      break;
    } else {
      finalrange -= element;
      if (finalrange <= 0) {
        ispainted = true;
        break;
      }
    }
  }
  if (ispainted) {
    if(finalrange == 0){
      console.log(`All walls are painted! Great job, Peter`)
    }else{
      console.log(`All walls are painted and you have ${Math.abs(finalrange)} l paint left`);
    }
  } else {
    console.log(`${Math.abs(finalrange)} quadratic m left`);
  }
}
renovation([3, 5, 10, 2, 3, 4, "Tired!"]);
renovation([2, 3, 25, 6, 7, 8]);
