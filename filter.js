
function filter(word){
    return word.toString().split('\n')
}


function research(lines, word){
    return lines.filter(function(list){
        return list.toLowerCase().indexOf(word.toLowerCase()) > -1
    })
}

module.exports = {
    filter,
    research
}