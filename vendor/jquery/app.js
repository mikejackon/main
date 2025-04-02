function makeTimer() {
    var a = new Date("10 April 2019 9:56:00 GMT+01:00");
    a = Date.parse(a) / 1e3;
    var e = new Date,
        s = a - (e = Date.parse(e) / 1e3),
        n = Math.floor(s / 86400),
        r = Math.floor((s - 86400 * n) / 3600),
        t = Math.floor((s - 86400 * n - 3600 * r) / 60),
        o = Math.floor(s - 86400 * n - 3600 * r - 60 * t);
    r < "10" && (r = "0" + r), t < "10" && (t = "0" + t), o < "10" && (o = "0" + o), $("#days").html(n + "<br><span>Days</span>"), $("#hours").html(r + "<br><span>Hours</span>"), $("#minutes").html(t + "<br><span>Minutes</span>"), $("#seconds").html(o + "<br><span>Seconds</span>")
}
setInterval(function() {
    makeTimer()
}, 1e3);

$(".sc-roll").click(function() {
    $('html, body').animate({
        scrollTop: $("#formscrl").offset().top
    }, 500);
});