// 定义有依赖的处理数据模块
(function (window, dataSource) {
    var msg = 'handleMsg.js'
    const showMsg = function () {
        console.log(msg, dataSource.getName());
    }
    window.handleMsg = {
        showMsg
    }
})(window, dataSource);