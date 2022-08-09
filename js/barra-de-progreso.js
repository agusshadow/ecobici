let progressbar = document.querySelector(".progress");

function scrollProgressBar() {
  let scrollTop = document.documentElement.scrollTop;

  let scrollHeight = document.documentElement.scrollHeight;

  let clientHeight = document.documentElement.clientHeight;

  let windowHeight = scrollHeight - clientHeight;
  let porcentaje = (scrollTop / windowHeight) * 100;

  progressbar.style.width = porcentaje + "%";
}

window.addEventListener("scroll", scrollProgressBar);
