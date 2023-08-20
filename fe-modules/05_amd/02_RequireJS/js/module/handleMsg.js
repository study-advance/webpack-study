// 定义有依赖的处理数据模块，指定当前模块名为handle，默认为当前文件名称 `handleMsg`
define('handle', ['dataSource'], function (dataSource) {
    var msg = 'handleMsg.js';
    const showMsg = function () {
        console.log(msg, dataSource.getName());
    };
    return {showMsg};
});