$(".product-colors span").click(function () {
    $(".product-colors span").removeClass("active");
    $(this).addClass("active");

    $(".active").css("border-color", $(this).attr("data-color"))
    $(".content h1").css("color", $(this).attr("data-color"));
    $(".content h2").css("color", $(this).attr("data-color"));
    $(".container .details button").css("background", $(this).attr("data-color"));

    $(".container .imageBox").css("background", $(this).attr("data-bg"));
    $(".container .imageBox").css("background-size", $(this).attr("bg-size"));
    $(".imageBox img").attr('src', $(this).attr("data-image"));
});