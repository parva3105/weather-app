const fs = require('fs')
// const book = {
//     title : 'Ego is the Enemy',
//     author : 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON) , SINCE FILE ALREADY WRITTEN

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author);

// const dataBuffer = fs.readFileSync('1-json.json')
// // console.log(dataBuffer.toString()); to LOG STRONG DATA OF JSON FILE
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title);   to PARSE DATA FROM JSON FILE

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
data.name = 'Parva'
data.age = 20
const dataUp = JSON.stringify(data) 
 fs.writeFileSync('1-json.json',dataUp)