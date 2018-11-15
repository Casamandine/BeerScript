#!/usr/bin/env node
const command = require("commander")
const inquirer = require("inquirer")


command 
    .version('0.0.1')
    .description('What\'s my beer command is used to find your beer in the brewery API and it had everythings you want !!')
    .option('-a, --alphabet', 'Search by first letter')
    .parse(process.argv)

if (command.alphabet)
    question = [
        {
            name: "letter",
            input: "input",
            message: "Enter the first letter of your beer",
        }
    ]  
    inquirer.prompt(question).then((answers) => {
        console.log(answers.name)
    });

