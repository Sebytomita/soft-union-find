var cont = 0;

document.getElementById('example-button').onclick = function () {
  var element = document.getElementById("example-window");
  cont++;
  if (cont % 2 == 1) {
    element.classList.add("window-example-1");
  }
  else {
    element.classList.remove("window-example-1");
  }

}

document.getElementById('close-button').onclick = function () {
  var element = document.getElementById("example-window");
  cont = 0;
  element.classList.remove("window-example-1");


}