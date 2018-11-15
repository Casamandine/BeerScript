#!/usr/bin/env node

data = {
    nbBrewery = [],
    country = []
}


const blessed = require('blessed')
const contrib = require('blessed-contrib')
let screen = blessed.screen()
line = contrib.line(
        { style:
           { line: "yellow",
           text: "green",
           baseline: "black"},
           xLabelPadding: 3,
           xPadding: 5,
           label: 'Number of brewery per country'}),
        data = {
         nbBrewery: [],
         country: []
        }
   screen.append(line)
   line.setData([data])

   screen.key(['escape', 'q', 'C-c'], function(ch, key) {
     return process.exit(0);
   });

   screen.render()