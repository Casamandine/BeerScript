#!/usr/bin/env node

const axios = require('axios');

axios.get('https://sandbox-api.brewerydb.com/v2/?key=0dc57b04be75a141664eb685134e5c7d')
    .then((test) => {
        console.log(test)
    })
