// 无依赖的数据提供模块
define(function (require, exports, module) {
    let name = 'dataSource.js'
    function getName() {
        return name;
    }
    // 通过 exports 对外提供接口
    exports.getName = getName
    // 或者通过 module.exports 提供整个接口，
    //  module.exports = {getName}
});