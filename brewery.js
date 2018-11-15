#!/usr/bin/env node
const command = require("commander")
const inquirer = require("requirer")
const axios = require("axios")
const key = "/?key=0dc57b04be75a141664eb685134e5c7d"

brewery={}

command
    .version('0.0.1')
    .option('-i, --id [value]', 'Search by first letter')
    .option('-r, --random', 'Get data of a random brewery')
    .parse(process.argv)

if(command.id){
    arg = process.argv.slice(3)
    axios.get('https://sandbox-api.brewerydb.com/v2/brewery/'+ arg + key)
        .then((response) => {
            brewery['Name']= response.data.data.name
            brewery['Site_Web'] = response.data.data.website
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
        .catch((erreur) =>{
            erreur = 'ERREUR : l\'id'+ arg + 'ne fais pas partis de l\API'
            console.log(erreur)
        })     

}
else if(command.random){
    axios.get('https://sandbox-api.brewerydb.com/v2/brewery/random'+key)
    .then((response) => {
        brewery['Name'] = response.data.data.name
        console.log(brewery)
    })
    .catch((erreur) => {
        erreur = 'ERREUR : le random n\a pas fonctionné'
        console.log(erreur)
    })
}



    