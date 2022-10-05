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
// 3.1 Print all the characters of the driver's name, separated by a space and [in capitals]
let driversName = ``;
let navigatorsName = ` `;
for (let counter = 0; counter < hacker1.length; counter += 1) {
  driversName += hacker1[counter] + ` `;
}
console.log(driversName.toUpperCase());
//3.2 Print all the characters of the navigator's name, in reverse order.
for (let counter = hacker2.length - 1; counter >= 0; counter -= 1) {
  navigatorsName += hacker2[counter] + ` `;
}
console.log(navigatorsName);

function orderName(name1, name2) {
  if (name1 === name2) {
    console.log(`What?! You both have the same name?`);
  } else if (name1 < name2) {
    console.log(`The driver's name goes first.`);
  } else {
    console.log(`Yo, the navigator goes first definitely.`);
  }
}
orderName(hacker1, hacker2);
//### Bonus Time!

//#### Bonus 1:
let string1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante ut urna tincidunt volutpat. Nunc eget justo felis. Praesent ultrices nisl vel mi facilisis, eget commodo velit blandit. Vestibulum urna lorem, congue lobortis nisi nec, consequat facilisis elit. Curabitur ut libero massa. Curabitur varius ex nulla, in tristique sapien volutpat eget. Sed velit odio, volutpat quis tincidunt vitae, faucibus id orci. Donec interdum pharetra condimentum. Phasellus laoreet tincidunt metus ultrices mollis. Fusce ac facilisis mi, posuere tempor neque. Morbi nec felis et neque fringilla tincidunt. Morbi lacinia accumsan ex, at pharetra ipsum hendrerit sed. Quisque pellentesque tincidunt odio in finibus. Duis ornare varius erat eu posuere. Cras mattis sapien eget est scelerisque vulputate. Maecenas accumsan diam quis risus imperdiet lobortis. Etiam nibh odio, elementum vel velit sit amet, dictum congue risus. Aliquam turpis libero, mattis vitae massa vel, scelerisque condimentum risus. Aenean vestibulum dapibus dolor ut porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed rhoncus sed metus vel tempor. Duis viverra a metus eu ultrices. Aenean rhoncus sodales libero, rhoncus vulputate arcu vulputate eget.";

function WordCount(str) {
  console.log(`The text has ${str.split(" ").length} words`);
}

WordCount(string1);

function etCount(string) {
  let count = 0;
  for (let words = 0; words < string.split(" ").length; words += 1) {
    if (string.split(" ")[words] === "et") {
      count += 1;
    }
  }
  console.log(count);
}
etCount(string1);
//#### Bonus 2:

let phraseToCheck = "Amor, Roma";
function checkPhrase(phrase) {
  phraseReverse = ``;
  originalPhrase = ``;
  for (let i = 0; i < phrase.length; i += 1) {
    if (
      phrase[i] === ` ` ||
      phrase[i] === `!` ||
      phrase[i] === `,` ||
      phrase[i] === `.`
    ) {
      continue;
    } else {
      originalPhrase += phrase[i];
    }
  }

  for (let j = phrase.length - 1; j >= 0; j -= 1) {
    if (
      phrase[j] === ` ` ||
      phrase[j] === `!` ||
      phrase[j] === `,` ||
      phrase[j] === `.`
    ) {
      continue;
    } else {
      phraseReverse += phrase[j];
    }
  }

  if (originalPhrase.toUpperCase() === phraseReverse.toUpperCase()) {
    console.log("yesss, it is a Palindrome");
  } else {
    console.log("No, it is not a Palindrome");
  }
}
checkPhrase(phraseToCheck);
