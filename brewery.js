#!/usr/bin/env node
const order = require("commander")

order
    .version('0.0.1')
    .option ('-w, --world', 'helllo world')

order.parse(process.argv)

if (order.world)
    console.log('coucou la monde')

    