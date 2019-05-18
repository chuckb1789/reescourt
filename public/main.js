$(function() {
    $('.preload').fadeOut(2000, function() {
        $('.content').fadeIn(1000);
    });
});

var images = ['./mtn1.jpg', './mtn2.jpg'];

var count = 0;

function mountains() {
  count++
  if (count % 2 == 0) {
    $('#mtn').attr("src", images[0]);
  } else {
    $('#mtn').attr("src", images[1]);
  }
};

function mountainImages() {
  setInterval(mountains, 100);
}

mountainImages();
