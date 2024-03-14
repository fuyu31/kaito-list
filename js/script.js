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


// 名前の配列
const names = [
  "冬幸", "ZARA", "慎二", "晃大", "沙也加", "善三郎", "恵理子", "Take", "克己",
  "成貴", "ほりちゃん", "恵美", "おじいちゃん", "おばあちゃん", "アキファ",
  "キャメロン", "ファリダ", "ロブ兄", "あけみん", "美織", "はると"
];

// 新しいul要素を作成
const list = document.createElement("ul");
list.classList.add("name-lists");

// 各名前でli要素を生成し、ulに追加
names.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.classList.add("name-list");
  const div = document.createElement("div");
  div.classList.add("name");
  div.textContent = name;
  listItem.appendChild(div);
  list.appendChild(listItem);
});

// 生成したリストをコンテナに追加
document.getElementById("nameListContainer").appendChild(list);


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

