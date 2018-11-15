#!/usr/bin/env node
const command = require("commander")
const inquirer = require("requirer")
const axios = require("axios")
const key = "/?key=0dc57b04be75a141664eb685134e5c7d"
let loc = {}

brewery={}

command
    .version('0.0.1')
    .option('-i, --id [value]', 'Search by first letter')
    .parse(process.argv)

if(command.id){
    arg = process.argv.slice(3)
    axios.get('https://sandbox-api.brewerydb.com/v2/brewery/'+ arg + key)
        .then((response) => {
            brewery['Name']= response.data.data.name
            return axios.get('https://sandbox-api.brewerydb.com/v2/brewery/'+arg+'/locations'+ key) 
        })
        .then((response) => {
            let length = response.data.data.length
            for(x=0; x < length; x++){
                brewery['Locality'] = response.data.data[x].locality
                brewery['Region'] = response.data.data[x].region
            }  
            console.log(brewery)        
        })
        .catch('ERREUR : l\'id'+arg+'n\'est pas dans la base de donnée')
}



    