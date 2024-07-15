import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter a sentence",

    }
]);

let words = answer.sentence.trim().split("");


console.log(words);
console.log(`word count: ${(words.length)}`);