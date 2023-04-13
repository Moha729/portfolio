const fs = require('fs')

function readFile(path, format){
    if (format === 'json'){
    const file = fs.readFileSync(path)
    return file
    }
    else if (format === 'text') {
        const file = fs.readFileSync(path).toString()
        return file
    }
    return null
}
    
module.exports = readFile