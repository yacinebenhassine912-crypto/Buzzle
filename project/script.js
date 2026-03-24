function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input === "mit2021" || input === "MIT2021") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("desktop").style.display = "block";
  } else {
    document.getElementById("errorMsg").innerText = "Wrong password";
  }
}

function openApp(app) {
  const overlay = document.getElementById("overlay");
  const windowBox = document.getElementById("window");
  const image = document.getElementById("windowImage");

  if (app === "app1") image.src = "images/window1.png";
  if (app === "app2") image.src = "images/window2.png";
  if (app === "app3") image.src = "images/window3.png";
  if (app === "app4") image.src = "images/window4.png";

  overlay.style.display = "block";
  windowBox.style.display = "block";
}

function closeApp() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("window").style.display = "none";
}