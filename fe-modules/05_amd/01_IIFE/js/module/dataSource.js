// 无依赖的数据提供模块
(function (window) {
    let name = 'dataSource.js'
    function getName() {
        return name;
    }
    window.dataSource = {getName}
})(window);