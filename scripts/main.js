$(document).ready(function () {
    // 漢堡按鈕開關
    $('#nav-icon3').on('click', function (e) {
        e.stopPropagation(); // 阻止事件向上傳遞
        $(this).toggleClass('open');
        $('#mobile-menu').toggleClass('active');
    });

    // 測試連結是否能被偵測到
    $('#mobile-menu a').on('click', function () {
        console.log("連結被點擊了，正在跳轉...");
        // 不需要寫任何 toggle，讓瀏覽器執行預設的跳轉動作
    });
});