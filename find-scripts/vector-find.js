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
    if (i === unire[1]) {
      box.style.backgroundColor = "orange";
    }
    else {
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

// Function to update tata and unire vector
function updateUnire() {
  ///the 3 images
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');

  /// 25
  if (pasul == 1) {
    unire[1] = 25;
    unire[2] = 20;
    displayVector();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      unire[1] = 20;
      unire[2] = 12;
      displayVector();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      unire[1] = 12;
      unire[2] = 12;
      displayVector();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      displayVector_rad(12);
    }, 4500);

    setTimeout(() => {
      unire[1] = 7;
      unire[2] = 23;
      displayVector();
      displayUnire();
    }, 6000);

    setTimeout(() => {
      find_button.disabled = false;
    }, 6000);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 6000);

    //displayVector_rad(20);
  }

  /// 7
  if (pasul == 2) {
    unire[1] = 7;
    unire[2] = 23;
    displayVector();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      unire[1] = 23;
      unire[2] = 17;
      displayVector();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      unire[1] = 17;
      unire[2] = 8;
      displayVector();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      unire[1] = 8;
      unire[2] = 8;
      displayVector();
      displayUnire();
    }, 5000);

    setTimeout(() => {
      displayVector_rad(8);
    }, 6000);

    setTimeout(() => {
      unire[1] = 13;
      unire[2] = 5;
      displayVector();
      displayUnire();
    }, 7500);

    setTimeout(() => {
      find_button.disabled = false;
    }, 7500);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 7500);

    //displayVector_rad(17);
  }

  /// 13
  if (pasul == 3) {
    unire[1] = 13;
    unire[2] = 5;
    displayVector();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      unire[1] = 5;
      unire[2] = 9;
      displayVector();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      unire[1] = 9;
      unire[2] = 23;
      displayVector();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      unire[1] = 23;
      unire[2] = 17;
      displayVector();
      displayUnire();
    }, 5000);

    setTimeout(() => {
      unire[1] = 17;
      unire[2] = 8;
      displayVector();
      displayUnire();
    }, 6500);

    setTimeout(() => {
      unire[1] = 8;
      unire[2] = 8;
      displayVector();
      displayUnire();
    }, 8000);

    setTimeout(() => {
      displayVector_rad(8);
    }, 9000);

    setTimeout(() => {
      unire[1] = 16;
      unire[2] = 17;
      displayVector();
      displayUnire();
    }, 10500);

    setTimeout(() => {
      find_button.disabled = false;
    }, 10500);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 10500);

    //displayVector_rad(17);
  }

  /// 16
  if (pasul == 4) {
    unire[1] = 16;
    unire[2] = 17;
    displayVector();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      unire[1] = 17;
      unire[2] = 8;
      displayVector();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      unire[1] = 8;
      unire[2] = 8;
      displayVector();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      displayVector_rad(8);
    }, 4500);

    setTimeout(() => {
      unire[1] = 6;
      unire[2] = 19;
      displayVector();
      displayUnire();
    }, 6000);

    setTimeout(() => {
      find_button.disabled = false;
    }, 6000);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 6000);

    //displayVector_rad(17);
  }

  /// 6
  if (pasul == 5) {
    unire[1] = 6;
    unire[2] = 19;
    displayVector();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      unire[1] = 19;
      unire[2] = 1;
      displayVector();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      unire[1] = 1;
      unire[2] = 1;
      displayVector();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      displayVector_rad(1);
    }, 4500);

    setTimeout(() => {
      unire[1] = 24;
      unire[2] = 1;
      displayVector();
      displayUnire();
    }, 6000);

    setTimeout(() => {
      find_button.disabled = false;
    }, 6000);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 6000);

    //displayVector_rad(19);
  }

  /// 24
  if (pasul == 6) {
    unire[1] = 24;
    unire[2] = 1;
    displayVector();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      unire[1] = 1;
      unire[2] = 1;
      displayVector();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      displayVector_rad(1);
    }, 3000);

    setTimeout(() => {
      unire[1] = 22;
      unire[2] = 11;
      displayVector();
      displayUnire();
    }, 4500);

    setTimeout(() => {
      find_button.disabled = false;
    }, 4500);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 4500);

    //displayVector_rad(24);
  }

  /// 22
  if (pasul == 7) {
    unire[1] = 22;
    unire[2] = 11;
    displayVector();
    displayUnire();
    find_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      unire[1] = 11;
      unire[2] = 21;
      displayVector();
      displayUnire();
    }, 2000);

    setTimeout(() => {
      unire[1] = 21;
      unire[2] = 1;
      displayVector();
      displayUnire();
    }, 3500);

    setTimeout(() => {
      unire[1] = 1;
      unire[2] = 1;
      displayVector();
      displayUnire();
    }, 5000);

    setTimeout(() => {
      displayVector_rad(1);
    }, 6000);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 7000);

    //displayVector_rad(21);
  }

  pasul++;

  displayVector();
  displayUnire();
}

// Function to reset tata and unire vector
function resetUnire() {
  pasul = 1;
  let tata = [0, 1, 8, 12, 12, 9, 19, 23, 8, 23, 16, 21, 12, 5, 7, 21, 17, 8, 17, 1, 12, 1, 11, 17, 1, 20];
  unire = [];
  unire[1] = 25;
  unire[2] = 20;
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');
  image1.src = './images/Union/union4.png';
  image2.src = './images/Union/union15.png';
  image3.src = './images/Union/union22.png';
  displayVector()
  displayUnire();
  find_button.disabled = false;
}

// Display initial tata vector
displayVector();
// Display initial unire vector
displayUnire();