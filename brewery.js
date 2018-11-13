const command = require("commander")

command
    .version('0.0..1')
    .option ('-w', '--w', 'helllo world')

command.parse(process.argv)

if(command.world)
    console.log('coucou la monde')

    