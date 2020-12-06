const util = require('./util.js');

let argv = process.argv;
console.log('[debug log] <main.js> argv:', argv);
let slicedArgv = argv.slice(2);
console.log('[debug log] <main.js> slicedArgv:', slicedArgv);
const result = util.convertToSnakeCase(slicedArgv);
console.log('result:', result, '!');
