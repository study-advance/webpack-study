// 定义有依赖的处理数据模块
define(function (require, exports, module) {
    var msg = 'handleMsg.js';
    // 同步引入
    var dataSource = require('./dataSource');
    // require.async('./dataSource', function(m){})

    const showMsg = function () {
        console.log(msg, dataSource.getName());
    };
    module.exports = {showMsg}
});