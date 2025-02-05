const clock = document.getElementById("clock");

function showTime() {
  const currentTime = new Date();
  const printTime = `${currentTime.getHours()} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()}`;
  clock.innerText = printTime;
}

//setInterval() refresh the window after every given seconds
setInterval(showTime, 1000);
