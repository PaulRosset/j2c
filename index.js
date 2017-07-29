#!/usr/bin/env node

const program = require('commander')
const fs = require('fs')
const Convert = require('./Api/main')
const chalk = require('chalk')
const _ = require('lodash')

program
    .version('1.0.0')
    .usage('--json [file.json] --csv [file.csv] -f obj')
    .option('--json [file.json]', 'Your entry file, must be a json file.')
    .option('--csv [file.csv]', 'The csv file that will be saved. (If not existing , will create it)')
    .option('-f, --first', 'Specify the name of the object at the first position (default = obj)')
    .parse(process.argv);

let argc = program.parse(process.argv)
if (argc.rawArgs.length <= 2 || argc.rawArgs.length > 8) {
    console.log(chalk.red('  \n  Provide good argument'))
    program.outputHelp()
} else {
    const conv = new Convert()
    const {json, csv} = program
    const first = program.args[0] || undefined
    fs.readFile(json, 'utf8', (err, data) => {
        if (err) {
            console.log(chalk.red('The file that you have provided isn\'t valid.'))
            return false
        }
        console.time(chalk.green('Written in'))
        const jsonData = JSON.parse(data)
        conv.convert(jsonData, first)
        fs.writeFile(csv, _.join(['Key,Value\n', ...conv.tab], ''), (err) => {
            if (err) {
                console.log(chalk.red('Error when writing file.'))
                return false
            }
            console.timeEnd(chalk.green('Written in'))
            console.log(chalk.green(`File ${chalk.cyan(csv)} has been saved !`))
            console.log(chalk.green(`Location of the file : ${chalk.cyan(__dirname + '/' + csv)}`))
        })
    })
}