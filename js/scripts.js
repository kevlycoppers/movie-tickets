// BUSINESS LOGIC //
var darkKnight = "The Dark Knight"
var toyStory = "Toy Story"
var pulpFiction = "Pulp Fiction"
var youthPrice = "$7.50"
var seniorPrice = "$7.00"
var adultPrice = "$9.50"

function Ticket(time, age, movie, number) {
  this.time = time;
  this.age = age;
  this.movie = movie;
  this.number = number;
}

var total = function(price, number) {
  return price * number;
}

Ticket.prototype.ticketPrice = function() {
  return "Your " + this.number + " " + this.age + " ticket(s) for the " + this.time + " showing of " + this.movie + " will come to a total of $"
}






// USER INTERFACE LOGIC //
$(function() {
  $("#dark-knight-tickets").submit(function(event) {
    event.preventDefault();

    var darkKnightShowtime = $("#dark-knight-showtime").val();
    var darkKnightAge = $("#dark-knight-age").val();
    var darkKnightNumber = parseInt($("#dark-knight-number").val());
    var price;
    if (darkKnightAge === "Youth") {
      var price = 7.50;
    } else if (darkKnightAge === "Senior") {
      var price = 7.00;
    } else {
      var price = 9.50;
    }
    price = total(price, darkKnightNumber);
    var darkKnightTicket = new Ticket(darkKnightShowtime, darkKnightAge, darkKnight, darkKnightNumber);


    $("#body-fade").fadeOut();
    $("#image-one").show();
    $(".order-msg").append(darkKnightTicket.ticketPrice());
    $(".order-msg").append(price);
    $(".order").fadeIn();

  });

  $("#toy-story-tickets").submit(function(event) {
    event.preventDefault();

    var toyStoryShowtime = $("#toy-story-showtime").val();
    var toyStoryAge = $("#toy-story-age").val();
    var toyStoryNumber = parseInt($("#toy-story-number").val());
    var price;
    if (toyStoryAge === "Youth") {
      var price = 7.50;
    } else if (toyStoryAge === "Senior") {
      var price = 7.00;
    } else {
      var price = 9.50;
    }
    price = total(price, toyStoryNumber);

    var toyStoryTicket = new Ticket(toyStoryShowtime, toyStoryAge, toyStory, toyStoryNumber);

    $("#body-fade").fadeOut();
    $("#image-two").show();
    $(".order-msg").text(toyStoryTicket.ticketPrice());
    $(".order-msg").append(price);
    $(".order").fadeIn();
  });

  $("#pulp-fiction-tickets").submit(function(event) {
    event.preventDefault();

    var pulpFictionShowtime = $("#pulp-fiction-showtime").val();
    var pulpFictionAge = $("#pulp-fiction-age").val();
    var pulpFictionNumber = parseInt($("#pulp-fiction-number").val());
    var price;
    if (pulpFictionAge === "Youth") {
      var price = 7.50;
    } else if (pulpFictionAge === "Senior") {
      var price = 7.00;
    } else {
      var price = 9.50;
    }
    price = total(price, pulpFictionNumber);

    if (pulpFictionAge === "Youth") {
      $("#body-fade").fadeOut();
      $("#not-old-enough").fadeIn();
    }
    else {
      var pulpFictionTicket = new Ticket(pulpFictionShowtime, pulpFictionAge, pulpFiction, pulpFictionNumber);
      $("#body-fade").fadeOut();
      $("#image-three").show();
      $(".order-msg").text(pulpFictionTicket.ticketPrice());
      $(".order-msg").append(price);
      $(".order").fadeIn();
    }
  });
});
