const os = require('os')

console.log('Operating system: ', os.platform())

console.log('Arch of processor: ', os.arch())

console.log('Info about processor: ', os.cpus())


console.log('Free memory: ', os.freemem())

console.log('Total memory: ', os.totalmem())

console.log('Home directory: ', os.homedir())

console.log('Time of working: ', os.uptime())