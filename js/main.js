$(document).ready(function () {

var clickEvent = false;
var count = 0;
var co = $('#myCarousel').children();

count = co[0].childElementCount - 1;

$('#myCarousel').carousel({

interval: 4000

}).on('click', '.list-group li', function () {

clickEvent = true;

$('.list-group li').removeClass('active');

$(this).addClass('active');

}).on('slid.bs.carousel', function (e) {

if (!clickEvent) {

var current = $('.list-group li.active');

var current1 = $('.list-group-item lactive');

current.removeClass('active').next().addClass('active');

current1.removeClass('active').next().addClass('active');

var id = parseInt(current.data('slide-to'));

if (count == id) {

$('.list-group li').first().addClass('active');

console.log($('.list-group li').first());

}

if (count == id) {

$('.list-group-item').first().addClass('active');

}

}

clickEvent = false;

});

})