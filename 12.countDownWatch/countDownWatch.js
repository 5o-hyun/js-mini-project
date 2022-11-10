const insertDays = document.querySelector(".days");
const insertHours = document.querySelector(".hours");
const insertMins = document.querySelector(".mins");
const insertSecs = document.querySelector(".secs");

function CountDownTimer(dt, id) {
  var endDate = new Date(dt);
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var nowDate = new Date();
    var distance = endDate - nowDate;
    if (distance < 0) {
      clearInterval(timer);
      alert("타임딜이 종료되었습니다.");
      return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    insertDays.textContent = days;
    insertHours.textContent = hours;
    insertMins.textContent = minutes;
    insertSecs.textContent = seconds;
  }
  timer = setInterval(showRemaining, 1000);
}
CountDownTimer("12/30/2022 11:30:00", "timeDeal");
