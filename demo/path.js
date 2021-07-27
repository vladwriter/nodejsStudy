const path = require('path')

console.log('Filename: ', path.basename(__filename))
console.log('Directory name: ', path.dirname(__filename))

console.log('Parse: ', path.parse(__filename))

console.log(path.join(__dirname, 'server', 'index.html'))