
// 使用立即执行函数
(function ($) {
    var name = 'module-b'

    function show() {
        console.log(name);
        $("div").css("background-color", "yellow");
    }
    window.ModuleB = {
        animate: show
    }
})(jQuery);
