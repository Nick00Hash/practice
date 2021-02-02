const fs = require('fs')
const { parse } = require('path')

const dataBuffer = fs.readFileSync('1-json.json')
const dataString = dataBuffer.toString()
const parsedData = JSON.parse(dataBuffer)
console.log(dataString)

console.log(parsedData, 'parsed-data')

const newName = (name) => {
  parsedData.name = name
}

const newAge = (age) => {
  parsedData.age = age
}

newName('tracy')
newAge(42)

const stringy = JSON.stringify(parsedData)

console.log(parsedData)
console.log(stringy)