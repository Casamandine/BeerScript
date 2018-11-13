#!/usr/bin/env node
const command = require("commander")

command 
    .version('0.0.1')
    .option('-w, --world', 'hello ta mere')

command.parse(process.argv)

if (command.world)
    console.log('hello world')

