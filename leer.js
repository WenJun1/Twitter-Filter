
const fs = require('fs')

function leerfichero(ruta){
    return fs.readFileSync(ruta)
}

module.exports = {
    leerfichero
}