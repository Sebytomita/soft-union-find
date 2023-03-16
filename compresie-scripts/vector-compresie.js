function displayVector() {
  let vectorElem = document.getElementById("vector");
  vectorElem.innerHTML = "";
  let row = document.createElement("div");
  row.classList.add("vector-row");
  for (let i = 1; i <= tata.length - 1; i++) {
    let column = document.createElement("div");
    column.classList.add("vector-column");
    let box = document.createElement("div");
    box.classList.add("vector-box");
    box.innerHTML = tata[i];
    if (xx === 1) {
      if (i === rad[1]) {
        box.style.backgroundColor = "orange";
      }
      else {
        box.style.backgroundColor = "#386692";
      }
    }
    else {
      if (i === unire[1]) {
        box.style.backgroundColor = "orange";
      }
      else {
        box.style.backgroundColor = "#386692";
      }
    }

    column.appendChild(box);
    let index = document.createElement("div");
    index.classList.add("vector-index");
    index.innerHTML = i;
    index.style.textAlign = "center";
    index.style.marginLeft = "2px";  // Adjust as desired
    column.appendChild(index);
    row.appendChild(column);
  }
  vectorElem.appendChild(row);
}

function displayVector_rad(x) {
  let vectorElem = document.getElementById("vector");
  vectorElem.innerHTML = "";
  let row = document.createElement("div");
  row.classList.add("vector-row");
  for (let i = 1; i <= tata.length - 1; i++) {
    let column = document.createElement("div");
    column.classList.add("vector-column");
    let box = document.createElement("div");
    box.classList.add("vector-box");
    box.innerHTML = tata[i];
    if (i === x) {
      box.style.backgroundColor = "red";
    } else {
      box.style.backgroundColor = "#386692";
    }
    column.appendChild(box);
    let index = document.createElement("div");
    index.classList.add("vector-index");
    index.innerHTML = i;
    index.style.textAlign = "center";
    index.style.marginLeft = "2px";  // Adjust as desired
    column.appendChild(index);
    row.appendChild(column);
  }
  vectorElem.appendChild(row);
  console.log(x);
}

function displayRad() {
  let vectorElem = document.getElementById("rad");
  vectorElem.innerHTML = "";
  let row = document.createElement("div");
  row.classList.add("rad-row");
  for (let i = 1; i <= rad.length - 1; i++) {
    let column = document.createElement("div");
    column.classList.add("rad-column");
    let box = document.createElement("div");
    box.classList.add("rad-box");
    box.innerHTML = rad[i];
    //color
    box.style.backgroundColor = "#386692";
    column.appendChild(box);
    let index = document.createElement("div");
    index.classList.add("rad-index");
    if (i == 1)
      index.innerHTML = 'r';
    if (i == 2)
      index.innerHTML = 'tata[r]';
    index.style.textAlign = "center";
    index.style.marginLeft = "2px";  // Adjust as desired
    column.appendChild(index);
    row.appendChild(column);
  }
  vectorElem.appendChild(row);
}

function displayUnire() {
  let vectorElem = document.getElementById("unire");
  vectorElem.innerHTML = "";
  let row = document.createElement("div");
  row.classList.add("unire-row");
  for (let i = 1; i <= unire.length - 1; i++) {
    let column = document.createElement("div");
    column.classList.add("unire-column");
    let box = document.createElement("div");
    box.classList.add("unire-box");
    box.innerHTML = unire[i];
    //color
    box.style.backgroundColor = "#386692";
    column.appendChild(box);
    let index = document.createElement("div");
    index.classList.add("unire-index");
    if (i == 1)
      index.innerHTML = 'x';
    if (i == 2)
      index.innerHTML = 'tata(x)';
    index.style.textAlign = "center";
    index.style.marginLeft = "2px";  // Adjust as desired
    column.appendChild(index);
    row.appendChild(column);
  }
  vectorElem.appendChild(row);
}

// Initialize tata vector with 25 numbers
let tata = [0, 1, 8, 12, 12, 9, 19, 23, 8, 23, 16, 21, 12, 5, 7, 21, 17, 8, 17, 1, 12, 1, 11, 17, 1, 20];

// Initialize r vector
let rad = [];
rad[1] = 25;
rad[2] = 20;

// Initialize unire vector with 2 numbers
let unire = [];
unire[1] = 25;
unire[2] = 20;

// initialize pasul
let pasul = 1;

// find_button and reset_button
let find_button = document.getElementById("find");
let reset_button = document.getElementById("reset");

// x-rad
let x = -1;

// xx-
let xx = -1;

// Function to update tata and unire vector
function updateUnire() {
  ///the 3 images
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');


  /// 25
  if (pasul == 1) {
    xx = 1;
    rad[1] = 25;
    rad[2] = 20;
    displayVector();
    displayRad();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      rad[1] = 20;
      rad[2] = 12;
      displayVector();
      displayRad();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      rad[1] = 12;
      rad[2] = 12;
      displayVector();
      displayRad();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      displayVector_rad(12);
    }, 4500);

    setTimeout(() => {
      displayVector_rad(0);
      xx = 2;
      unire[1] = 25;
      unire[2] = 12;
      displayVector();
      displayRad();
      displayUnire();
    }, 6000);

    setTimeout(() => {
      tata[25] = 12;
      displayVector();
      displayRad();
      displayUnire();
    }, 7500);

    setTimeout(() => {
      image1.src = './images/Compresie/compresie1.png';
    }, 8500);

    setTimeout(() => {
      xx = 1;
      rad[1] = 7;
      rad[2] = 23;
      unire[1] = 7;
      unire[2] = 23;
      displayVector();
      displayRad();
      displayUnire();
    }, 10000);

    setTimeout(() => {
      find_button.disabled = false;
    }, 10000);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 10000);

    //displayVector_rad(20);
  }

  /// 7
  if (pasul == 2) {
    xx = 1;
    rad[1] = 7;
    rad[2] = 23;
    displayVector();
    displayRad();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      rad[1] = 23;
      rad[2] = 17;
      displayVector();
      displayRad();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      rad[1] = 17;
      rad[2] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      rad[1] = 8;
      rad[2] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 5000);

    setTimeout(() => {
      displayVector_rad(8);
    }, 6000);

    setTimeout(() => {
      displayVector_rad(0);
      xx = 2;
      unire[1] = 7;
      unire[2] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 7500);

    setTimeout(() => {
      tata[7] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 9000);

    setTimeout(() => {
      image2.src = './images/Compresie/compresie2.png';
    }, 10000);

    setTimeout(() => {
      xx = 1;
      rad[1] = 9;
      rad[2] = 23;
      unire[1] = 9;
      unire[2] = 23;
      displayVector();
      displayRad();
      displayUnire();
    }, 11500);

    setTimeout(() => {
      find_button.disabled = false;
    }, 11500);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 11500);

    //displayVector_rad(17);
  }

  /// 13
  if (pasul == 3) {
    xx = 1;
    rad[1] = 9;
    rad[2] = 23;
    displayVector();
    displayRad();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      rad[1] = 23;
      rad[2] = 17;
      displayVector();
      displayRad();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      rad[1] = 17;
      rad[2] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      rad[1] = 8;
      rad[2] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 5000);

    setTimeout(() => {
      displayVector_rad(8);
    }, 6000);

    setTimeout(() => {
      displayVector_rad(0);
      xx = 2;
      unire[1] = 9;
      unire[2] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 7500);

    setTimeout(() => {
      tata[9] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 9000);

    setTimeout(() => {
      image2.src = './images/Compresie/compresie3.png';
    }, 10000);

    setTimeout(() => {
      xx = 1;
      rad[1] = 16;
      rad[2] = 17;
      unire[1] = 16;
      unire[2] = 17;
      displayVector();
      displayRad();
      displayUnire();
    }, 11500);

    setTimeout(() => {
      find_button.disabled = false;
    }, 11500);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 11500);

    //displayVector_rad(17);
  }

  /// 16
  if (pasul == 4) {
    xx = 1;
    rad[1] = 16;
    rad[2] = 17;
    displayVector();
    displayRad();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      rad[1] = 17;
      rad[2] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      rad[1] = 8;
      rad[2] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      displayVector_rad(8);
    }, 4500);

    setTimeout(() => {
      displayVector_rad(0);
      xx = 2;
      unire[1] = 16;
      unire[2] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 6000);

    setTimeout(() => {
      tata[16] = 8;
      displayVector();
      displayRad();
      displayUnire();
    }, 7500);

    setTimeout(() => {
      image2.src = './images/Compresie/compresie4.png';
    }, 8500);

    setTimeout(() => {
      xx = 1;
      rad[1] = 6;
      rad[2] = 19;
      unire[1] = 6;
      unire[2] = 19;
      displayVector();
      displayRad();
      displayUnire();
    }, 10000);

    setTimeout(() => {
      find_button.disabled = false;
    }, 10000);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 10000);

    //displayVector_rad(17);
  }

  /// 6
  if (pasul == 5) {
    xx = 1;
    rad[1] = 6;
    rad[2] = 19;
    displayVector();
    displayRad();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      rad[1] = 19;
      rad[2] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      rad[1] = 1;
      rad[2] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      displayVector_rad(1);
    }, 4500);

    setTimeout(() => {
      displayVector_rad(0);
      xx = 2;
      unire[1] = 6;
      unire[2] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 6000);

    setTimeout(() => {
      tata[6] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 7500);

    setTimeout(() => {
      image3.src = './images/Compresie/compresie5.png';
    }, 8500);

    setTimeout(() => {
      xx = 1;
      rad[1] = 24;
      rad[2] = 1;
      unire[1] = 24;
      unire[2] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 10000);

    setTimeout(() => {
      find_button.disabled = false;
    }, 10000);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 10000);

    //displayVector_rad(19);
  }

  /// 24
  if (pasul == 6) {
    xx = 1;
    rad[1] = 24;
    rad[2] = 1;
    displayVector();
    displayRad();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      rad[1] = 1;
      rad[2] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      displayVector_rad(1);
    }, 3000);

    setTimeout(() => {
      displayVector_rad(0);
      xx = 2;
      unire[1] = 24;
      unire[2] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 4500);

    setTimeout(() => {
      tata[24] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 6000);

    setTimeout(() => {
      image3.src = './images/Compresie/compresie6.png';
    }, 7000);

    setTimeout(() => {
      xx = 1;
      rad[1] = 11;
      rad[2] = 21;
      unire[1] = 11;
      unire[2] = 21;
      displayVector();
      displayRad();
      displayUnire();
    }, 8500);

    setTimeout(() => {
      find_button.disabled = false;
    }, 8500);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 8500);

    //displayVector_rad(24);
  }

  /// 11
  if (pasul == 7) {
    xx = 1;
    rad[1] = 11;
    rad[2] = 21;
    displayVector();
    displayRad();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      rad[1] = 21;
      rad[2] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      rad[1] = 1;
      rad[2] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      displayVector_rad(1);
    }, 4500);

    setTimeout(() => {
      displayVector_rad(0);
      xx = 2;
      unire[1] = 11;
      unire[2] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 6000);

    setTimeout(() => {
      tata[11] = 1;
      displayVector();
      displayRad();
      displayUnire();
    }, 7500);

    setTimeout(() => {
      image3.src = './images/Compresie/compresie7.png';
    }, 8500);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 8500);

    //displayVector_rad(21);
  }

  pasul++;

  displayVector();
  displayRad();
  displayUnire();
}

// Function to reset tata and unire vector
function resetUnire() {
  pasul = 1;
  tata = [0, 1, 8, 12, 12, 9, 19, 23, 8, 23, 16, 21, 12, 5, 7, 21, 17, 8, 17, 1, 12, 1, 11, 17, 1, 20];
  rad = [];
  rad[1] = 25;
  rad[2] = 20;
  unire = [];
  unire[1] = 25;
  unire[2] = 20;
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');
  image1.src = './images/Union/union4.png';
  image2.src = './images/Union/union15.png';
  image3.src = './images/Union/union22.png';
  displayVector();
  displayRad();
  displayUnire();
  find_button.disabled = false;
}

// Display initial tata vector
displayVector();
// Display initial rad vector
displayRad();
// Display initial unire vector
displayUnire();