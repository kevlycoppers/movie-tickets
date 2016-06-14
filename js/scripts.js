// BUSINESS LOGIC //
function Ticket(time, age) {
  this.time = time;
  this.age = age;
}








// USER INTERFACE LOGIC //
$(function() {
  $("#dark-knight-tickets").submit(function(event) {
    event.preventDefault();

    var darkKnightShowtime = $("#dark-knight-showtime").val();
    var darkKnightAge = $("#dark-knight-age").val();

    var darkKnightTicket = new Ticket(darkKnightShowtime, darkKnightAge);

    $("#body-fade").fadeOut();
    $("#image-one").show();
    $(".movie").text("Dark Knight")
    $(".age").text(darkKnightTicket.age);
    $(".time").text(darkKnightTicket.time);
    $(".order").fadeIn();

  });

  $("#toy-story-tickets").submit(function(event) {
    event.preventDefault();

    var toyStoryShowtime = $("#toy-story-showtime").val();
    var toyStoryAge = $("#toy-story-age").val();

    var toyStoryTicket = new Ticket(toyStoryShowtime, toyStoryAge);

    $("#body-fade").fadeOut();
    $("#image-two").show();
    $(".movie").text("Toy Story")
    $(".age").text(toyStoryTicket.age);
    $(".time").text(toyStoryTicket.time);
    $(".order").fadeIn();
  });

  $("#pulp-fiction-tickets").submit(function(event) {
    event.preventDefault();

    var pulpFictionShowtime = $("#pulp-fiction-showtime").val();
    var pulpFictionAge = $("#pulp-fiction-age").val();

    if (pulpFictionAge = "Youth") {
      $("#body-fade").fadeOut();
      $("#not-old-enough").fadeIn();
    }
    else {
      var pulpFictionTicket = new Ticket(pulpFictionShowtime, pulpFictionAge);
      $("#body-fade").fadeOut();
      $("#image-three").show();
      $(".movie").text("Pulp Fiction")
      $(".age").text(pulpFictionTicket.age);
      $(".time").text(pulpFictionTicket.time);
      $(".order").fadeIn();
    }
  });
});
