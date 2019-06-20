
const { leerfichero } = require('./leer');

const { filter, research } = require('./filter');
const { savedoc } = require('./finder');

const WORD = 'cras';
const usertext = leerfichero('./input.txt')
const lines = filter(usertext)
const result  = research(lines, WORD)

savedoc('./output.txt', result.join('\n'))
