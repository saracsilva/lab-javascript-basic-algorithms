// Iteration 1: Names and Input
//
console.log("I'm ready!");
const hacker1 = "Leonardo";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Sara";
console.log(`The navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals
/* - `The driver has the longest name, it has XX characters.` or <br>
	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
	  - `Wow, you both have equally long names, XX characters!`.*/

function longestName(name1, name2) {
  if (name1.length > name2.length) {
    console.log(
      `The driver has the longest name, it has ${name1.length} characters.`
    );
  } else if (name1.length < name2.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${name2.length} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${name1.length} characters!`
    );
  }
}
longestName(hacker1, hacker2);
// Iteration 3: Loops
