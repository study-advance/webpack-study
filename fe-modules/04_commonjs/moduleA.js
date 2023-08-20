
var name = 'module-a'
var math = function (a, b) {
    return a + b;
}
module.exports = {
    name,
    math
}

// exports = {name, math} // 不可使用当前语句替换上面的变量导出

