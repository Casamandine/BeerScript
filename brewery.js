#!/usr/bin/env node
const command = require("commander")
const inquirer = require("requirer")
const axios = require("axios")

breweries={}

command
    .version('0.0.1')
    .option('-i, --id[value]', 'Search by first letter')
    .parse(process.argv)

if(command.id){
    arg=process.argv.slice(1)
    console.log(arg)
    axios.get('https://sandbox-api.brewerydb.com/v2/brewery/'+arg+'/?key=0dc57b04be75a141664eb685134e5c7d')
        .then((response)=>{
            breweries = response.data.data
            console.log(response)
        })
        .catch('ERREUR : l\'id'+arg+'n\est pas dans la base de donnée')
}



    