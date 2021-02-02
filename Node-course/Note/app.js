const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
  command: 'add',
  describe: 'Adding the note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove the note',
  handler: function () {
    console.log('Remove the note')
  }
})

yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler: function () {
    console.log('List the notes')
  }
})

yargs.command({
  command: 'read',
  describe: 'Read the notes',
  handler: function () {
    console.log('Reading the notes')
  }
})

console.log(yargs.argv)