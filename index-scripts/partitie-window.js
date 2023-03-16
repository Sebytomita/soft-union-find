
var cont = 0;

document.getElementById('partitie-popup').onclick = function {
  var element = document.getElementById("partitie-window");
  cont++;
  if (cont % 2 == 1) {
    element.classList.add("window-partitie-1");
  }
  else {
    element.classList.remove("window-partitie-1");
  }

}

console.log("a");
