#!/usr/bin/env node
const order = require("commander")
const inquirer = require("requirer")


order
    .version('0.0.1')
    .description('Brewery is a command is used to find your brewery in the brewery API and it had everythings you want !!')
    .option('-a, --letter', 'Search by first letter')
    .parse(process.argv)

order.parse(process.argv)

if (order.letter)
    inquirer.prompt([{
        name: "first_letter",
        input: "input",
        message: "Enter the first letter to discover a brewery"
    }]).then((answers) => {
        console.log(answers.name)
    })


    