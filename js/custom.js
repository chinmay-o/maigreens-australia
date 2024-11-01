
function productScroll() {

  $('html, body').animate({
    scrollTop: $("#product-section-content").offset().top - 240
  }, 1000);
}

function aboutScroll() {

  $('html, body').animate({
    scrollTop: $("#about-section-content").offset().top - 240
  }, 1000);
}

function contactScroll() {

  $('html, body').animate({
    scrollTop: $("#contact-section-content").offset().top - 240
  }, 1000);
}
