function updateClock() {
  const now = new Date();

  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][now.getDay()];
  const month = now.toLocaleString("default", { month: "long" });
  const day = now.getDate();
  const year = now.getFullYear();

  const timeString = `${formatTimeComponent(hours)}:${formatTimeComponent(
    minutes
  )}:${formatTimeComponent(seconds)}`;
  const dateString = `${dayOfWeek}, ${month} ${day} ${year}`;

  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

function formatTimeComponent(component) {
  return component < 10 ? `0${component}` : component;
}

updateClock();
setInterval(updateClock, 1000);
