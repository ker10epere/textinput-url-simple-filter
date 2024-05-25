const fs = require('fs')
const path = require('path')

const inputText = fs.readFileSync(path.join(__dirname, 'input.txt'),'utf8')

const urls = inputText.split('\n').filter(v=> v.includes('https')).join("\n")
const output = inputText.split('\n').filter(v=> !v.includes('https')).join("\n")

fs.writeFileSync(path.join(__dirname,'urls.txt'),urls,'utf8' )
fs.writeFileSync(path.join(__dirname,'output.txt'),output,'utf8' )
console.log('Done!')
