$(document).ready(function() {
    $("p").each(function() {
        var contentLength = $(this).text().length;
        if (contentLength > 100) {
            $(this).addClass("highlight");
        }
    });
});
