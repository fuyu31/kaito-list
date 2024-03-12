$(document).ready(function () {
  // Password form functionality
  $("#submit-password").click(function () {
    var enteredPassword = $("#password").val();
    var correctPassword = "kaito"; // Replace with your actual password

    if (enteredPassword === correctPassword) {
      // Correct password, add class to body
      $(".bodyshow").addClass("show");
      // Hide the password form
      $("#password-form").hide();
      // Clear the password input
      $("#password").val("");
      // Hide the incorrect password message
      $("#password-message").hide();
    } else {
      // Incorrect password, show error message
      $("#password-message").show();
    }
  });
});

$(document).ready(function () {
  $(".name-list").click(function () {
    $(".name-list").removeClass("highlight");
    $(this).addClass("highlight");

    var index = $(this).index();

    $(".imp-lists li").removeClass("highlight");
    $(".imp-lists li").eq(index).addClass("highlight");
  });

  $(".imp-lists li").click(function () {
    $(this).removeClass("highlight");
  });
});

$(function () {
  $("#js-pagetop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#js-pagetop").fadeIn(300).css("display", "flex");
    } else {
      $("#js-pagetop").fadeOut(300);
    }
  });
});

