// TOP: ハンバーガーメニュー
function openNav() {
    const nav = document.querySelector(".l-header__nav");
    nav.classList.toggle("c-nav__active");
};

// Price: slick
$('.l-main2__slick').slick({
    dots: true,
    infinite: true,
    arrows: false
});

// Q&A: アコーディオン
$(function () {
    $(".l-main2__aco-title").on("click", function () {
        $(this).next().slideToggle(200);
        $(this).toggleClass("open", 200);
    });
});

