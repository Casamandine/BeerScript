#!/usr/bin/env node
const command = require("commander")
const inquirer = require("inquirer")
const axios = require("axios")

bieres = {}

command 
    .version('0.0.1')
    .description('What\'s my beer command is used to find your beer in the brewery API and it had everythings you want !!')
    .option('-i, --id [value]', 'Search by id of the beer')
    .option('-r, --random', 'Get data of a random beer')
    .parse(process.argv)

if (command.id) {
    arg = process.argv.slice(3)
    axios.get('https://sandbox-api.brewerydb.com/v2/beer/' + arg + '/?key=0dc57b04be75a141664eb685134e5c7d/')
        .then((test) => {
            bieres = test.data.data
            console.log(bieres.name)
        })
        .catch('ERREUR : la bière avec l\'id ' + arg + ', n\'est pas dans la base de donnée')
}
else if (command.random) {
    axios.get('https://sandbox-api.brewerydb.com/v2/beer/random/?key=0dc57b04be75a141664eb685134e5c7d/')
    .then((response) => {
        bieres['name'] = response.data[0].name[0]
        console.log(bieres)
    })
}
