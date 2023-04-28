
$('#sec').animate({width:"100%"},1000)
$('#sec').animate({height:"100vh"},1000,()=>{
  $('.main').fadeIn(1000)
})

function time() {
  let currentTime = new Date().getTime();
  // console.log(currentTime);

  let eventTime = new Date(2023, 12, 26).getTime();
  // console.log(eventTime);

  let remTime = eventTime - currentTime;
  // console.log(remTime);

  let sec = Math.floor(remTime / 1000);
  let min = Math.floor(sec / 60);
  let hour = Math.floor(min / 60);
  let day = Math.floor(hour / 24) - 30;
  sec %= 60;
  min %= 60;
  hour %= 24;
  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  hour = hour < 10 ? "0" + hour : hour;

  $("#second").text(sec + " s");
  $("#min").text(min + " m");
  $("#hour").text(hour + " h");
  $("#days").text(day + " d");

  setTimeout(time, 1000);
}
time();

(function () {
  let char = 100;
  $("textarea").keyup(function () {
    let length = $(this).val().length;
    let max = char - length;
    if (max >= 0){
      $('form span').text(`${max} Character Remaining`)
      $('form button').removeAttr(`disabled`)
    }else {
      $('form span').text(`thats too much`)
      $('form button').attr(`disabled`,`disabled`)
    }
  });
})();

$(".open").click(function () {
  $(".side").animate({ width: "toggle" }, 500);
  if ($(".main").css("marginLeft") === "0px") {
    $(".main").animate({ marginLeft: "250px" }, 500);
  } else {
    $(".main").animate({ marginLeft: "0px" }, 500);
  }
});

$(".exit").click(() => {
  $(".side").animate({ width: "toggle" }, 500);
  $(".main").animate({ marginLeft: "0px" }, 500);
});

$("h3").click(function () {
  $(this).next().slideToggle(500);
  $("div .con").not($(this).next()).slideUp(500);
});


