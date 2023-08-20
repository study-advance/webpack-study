(function () {
    // 注册配置和声明模块
    requirejs.config({
        baseUrl: 'js/',  // 基础路径
        paths: {  // 配置路径
            dataSource: './module/dataSource',
            handle: './module/handleMsg'
        }
    });

    // 加载模块
    requirejs(['handle'], function (handleMsg) {
        handleMsg.showMsg();
    });
})();