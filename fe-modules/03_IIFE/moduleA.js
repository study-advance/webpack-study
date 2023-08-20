
// 使用立即执行函数
(function () {
    var name = 'module-a'

    function log() {
        console.log(name);
    }
    function sum(a, b) {
        return a + b;
    }
    window.ModuleA = {
        log,
        sum
    }
})();
