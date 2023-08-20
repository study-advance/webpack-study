const moduleB = require('./moduleB')

var log = function (a, b) {
    console.log(moduleB.name, a + b);
}
module.exports = {
    name: 'module-c',
    log
}

