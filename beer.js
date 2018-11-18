#!/usr/bin/env node
const command = require("commander")
const inquirer = require("inquirer")
const axios = require("axios")
const key = "/?key=0dc57b04be75a141664eb685134e5c7d"
const fs = require("fs")

function createSave(content) {
    inquirer.prompt(questionsSave)
    .then((answer) => {
        fileName = String(answer.saveQuest)
        fs.appendFile(fileName + ".txt", content, function (err) {
            if (err) throw err;
            console.log('Save file creation succesful')
          });
          
    })
    .catch((erreur) => {
        erreur = 'ERREUR : Création échouée'
        console.log(erreur)
        process.exit()
    })
}

function updateSave(content) {
    inquirer.prompt(questionsSave)
    .then((answer) => {
        fileName = String(answer.saveQuest)
        fs.appendFile(fileName + '.txt', content, function (err) {
            if (err) throw err;
            console.log('Save file update succesful')
        })
    })
    .catch((erreur) => {
        erreur = 'ERREUR : Update échouée'
        console.log(erreur)
        process.exit()
    })
}

function deleteSave() {
    inquirer.prompt(questionsSave)
    .then((answer) => {
        fileName = String(answer.saveQuest)
        fs.unlink(fileName + '.txt', function (err) {
            if (err) throw err;
            console.log('Save file delete succesful')
        })
    })
    .catch((erreur) => {
        erreur = 'ERREUR : Delete échouée'
        console.log(erreur)
        process.exit()
    })
}

let beer = {}
const valuesSaveOption = ['create', 'update', 'delete']
const questions = [{ type: 'list', name: 'saveOption', message: 'Choose save option :', choices: valuesSaveOption}]
const questionsSave = [{ type: 'input', name: 'saveQuest', message: 'Choose file name for the save without extension file : '}]



command 
    .version('0.0.1')
    .description('What\'s my beer command is used to find your beer in the brewery API and it has everything you want !!')
    .option('-i, --id [value]', 'Search by id of the beer')
    .option('-r, --random [value]', 'Get data of a random beer')
    .option('-s, --save', 'Create / delete / update a saveBeer file')
    .parse(process.argv)

if (command.id) {
    arg = process.argv[3]

    axios.get('https://sandbox-api.brewerydb.com/v2/beer/' + arg + key)
    .then((response) => {
        beer['Id'] = response.data.data.id         
        beer['Name'] = response.data.data.name         
        beer['Alcohol_by_volume'] = response.data.data.abv
        //beer['Description'] = response.data.data.description
        
        console.log(beer)

        if (process.argv[4] == '-s')
        
            inquirer.prompt(questions)
            .then((response) => {
                let beerText = JSON.stringify(beer)
                if (response.saveOption == valuesSaveOption[0])
                    createSave(beerText)
                else if (response.saveOption == valuesSaveOption[1])
                    updateSave(beerText)
                else if (response.saveOption == valuesSaveOption[2])
                    deleteSave()
            })
            .catch((erreur) => {
                erreur = "ERREUR : sauvegarde echouee"
                console.log(erreur)
                process.exit()
            })
    })
    .catch((erreur) => {
        erreur = 'ERREUR : la bière avec l\'id ' + arg + ', n\'est pas dans la base de donnée'
        console.log(erreur)
        process.exit()
    })
}
else if (command.random) {
    arg = process.argv.slice(3)

    if (process.argv.length > 4)
        process.exit();

    for (x = 0; x < arg; x++) {
        axios.get('https://sandbox-api.brewerydb.com/v2/beer/random' + key)
        .then((response) => {

            beer['Id'] = response.data.data.id         
            beer['Name'] = response.data.data.name         
            beer['Alcohol_by_volume'] = response.data.data.abv  

            console.log(beer)
        })
        .catch((erreur) => {
            erreur = "ERREUR : reesayez"
            console.log(erreur)
        })
    }
}

