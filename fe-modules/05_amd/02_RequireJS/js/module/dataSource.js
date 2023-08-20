// 无依赖的数据提供模块
define(function (require, factory) {
    let name = 'dataSource.js'
    function getName() {
        return name;
    }
    return {getName};
});
