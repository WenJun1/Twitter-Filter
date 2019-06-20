
const fs = require('fs')

function savedoc(name, content){
    fs.writeFileSync(name, content);
    console.log('Copied!')
}

module.exports = {
    savedoc
}
