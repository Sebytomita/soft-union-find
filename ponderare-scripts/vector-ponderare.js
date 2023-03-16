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
    if (i === unire[1] || i === unire[2]) {
      box.style.backgroundColor = "orange";
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
}

function displayHeight() {
  let vectorElem = document.getElementById("height");
  vectorElem.innerHTML = "";
  let row = document.createElement("div");
  row.classList.add("height-row");
  for (let i = 1; i <= height.length - 1; i++) {
    let column = document.createElement("div");
    column.classList.add("height-column");
    let box = document.createElement("div");
    box.classList.add("height-box");
    box.innerHTML = height[i];
    if (i === x)
      box.style.backgroundColor = "red";
    else
      if (i === unire[1] || i === unire[2]) {
        box.style.backgroundColor = "orange";
      } else {
        box.style.backgroundColor = "#386692";
      }
    column.appendChild(box);
    let index = document.createElement("div");
    index.classList.add("height-index");
    index.innerHTML = i;
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
    box.style.backgroundColor = "#386692";
    column.appendChild(box);
    let index = document.createElement("div");
    index.classList.add("unire-index");
    if (i == 1)
      index.innerHTML = 'x';
    if (i == 2)
      index.innerHTML = 'y';
    index.style.textAlign = "center";
    index.style.marginLeft = "2px";  // Adjust as desired
    column.appendChild(index);
    row.appendChild(column);
  }
  vectorElem.appendChild(row);
}

/////
// Initialize tata vector with 25 numbers
let tata = [];
for (let i = 1; i <= 25; i++) {
  tata[i] = i;
}

// Initialize height vector with 25 numbers
let height = [];
for (let i = 1; i <= 25; i++) {
  height[i] = 1;
}

// Initialize unire vector with 2 numbers
let unire = [];
unire[1] = 20;
unire[2] = 25;

// initialize pasul
let pasul = 1;

// union_button and reset_button
let union_button = document.getElementById("union");
let reset_button = document.getElementById("reset");

// x-height change
let x = -1;

// Function to update tata and unire vector
function updateUnire() {
  ///the 3 images
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');

  /// 1
  if (pasul == 1) {

    tata[25] = 20;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 20;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[20] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 12;
      unire[2] = 3;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image1.src = './images/Ponderare/ponderare1.png';
  }

  if (pasul == 2) {
    tata[3] = 12;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 12;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[12] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 3;
      unire[2] = 4;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image1.src = './images/Ponderare/ponderare2.png';
  }

  if (pasul == 3) {
    tata[4] = 12;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 12;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[12] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 4;
      unire[2] = 25;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image1.src = './images/Ponderare/ponderare3.png';
  }

  if (pasul == 4) {
    tata[20] = 12;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 12;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[12] = 3;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 7;
      unire[2] = 14;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image1.src = './images/Ponderare/ponderare4.png';
  }

  /// 2
  if (pasul == 5) {
    tata[14] = 7;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 7;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[7] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 17;
      unire[2] = 18;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare5.png';
  }
  if (pasul == 6) {
    tata[18] = 17;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 17;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[17] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 16;
      unire[2] = 10;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare6.png';
  }
  if (pasul == 7) {
    tata[10] = 16;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 16;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[16] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 5;
      unire[2] = 13;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare7.png';
  }
  if (pasul == 8) {
    tata[13] = 5;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 5;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[5] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 23;
      unire[2] = 14;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare8.png';
  }
  if (pasul == 9) {
    tata[23] = 7;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 7;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[7] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 9;
      unire[2] = 5;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare9.png';
  }
  if (pasul == 10) {
    tata[9] = 5;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 5;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[5] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 7;
      unire[2] = 13;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare10.png';
  }
  if (pasul == 11) {
    tata[5] = 7;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 7;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[7] = 3;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 18;
      unire[2] = 9;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare11.png';
  }
  if (pasul == 12) {
    tata[17] = 7;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 7;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[7] = 3;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 8;
      unire[2] = 2;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare12.png';
  }
  if (pasul == 13) {
    tata[2] = 8;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 8;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[8] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 17;
      unire[2] = 10;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare13.png';
  }
  if (pasul == 14) {
    tata[16] = 7;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 7;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[7] = 3;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 2;
      unire[2] = 10;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare14.png';
  }
  if (pasul == 15) {
    tata[8] = 7;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 7;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[7] = 3;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 19;
      unire[2] = 6;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image2.src = './images/Ponderare/ponderare15.png';
  }

  /// 3
  if (pasul == 16) {
    tata[6] = 19;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 19;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[19] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 1;
      unire[2] = 6;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image3.src = './images/Ponderare/ponderare16.png';
  }
  if (pasul == 17) {
    tata[1] = 19;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 19;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[19] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 21;
      unire[2] = 15;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image3.src = './images/Ponderare/ponderare17.png';
  }
  if (pasul == 18) {
    tata[15] = 21;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 21;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[21] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 11;
      unire[2] = 22;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image3.src = './images/Ponderare/ponderare18.png';
  }
  if (pasul == 19) {
    tata[22] = 11;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 11;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[11] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 15;
      unire[2] = 11;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image3.src = './images/Ponderare/ponderare19.png';
  }
  if (pasul == 20) {
    tata[11] = 21;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 21;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[21] = 3;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 1;
      unire[2] = 24;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image3.src = './images/Ponderare/ponderare20.png';
  }
  if (pasul == 21) {
    tata[24] = 19;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 19;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[19] = 2;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 24;
      unire[2] = 22;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      union_button.disabled = false;
      reset_button.disabled = false;
    }, 2000);
    image3.src = './images/Ponderare/ponderare21.png';
  }
  if (pasul == 22) {
    tata[19] = 21;
    union_button.disabled = true;
    reset_button.disabled = true;

    setTimeout(() => {
      x = 21;
      displayHeight();
    }, 500);

    setTimeout(() => {
      height[21] = 3;
      displayHeight();
    }, 1000);

    setTimeout(() => {
      x = 0;
      unire[1] = 0;
      unire[2] = 0;
      displayUnire();
      displayVector();
      displayHeight();
    }, 1500);

    setTimeout(() => {
      reset_button.disabled = false;
    }, 2000);
    image3.src = './images/Ponderare/ponderare22.png';
  }

  pasul++;

  displayVector();
  displayHeight();
  displayUnire();
}

// Function to reset tata and unire vector
function resetUnire() {
  union_button.disabled = false;
  pasul = 1;
  tata = [];
  for (let i = 1; i <= 25; i++) {
    tata[i] = i;
  }
  height = [];
  for (let i = 1; i <= 25; i++) {
    height[i] = 1;
  }
  unire = [];
  unire[1] = 20;
  unire[2] = 25;
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');
  image1.src = './images/Union/union-st1.png';
  image2.src = './images/Union/union-st2.png';
  image3.src = './images/Union/union-st3.png';
  displayVector();
  displayHeight();
  displayUnire();
}

// Display initial tata vector
displayVector();
// Display initial height vector
displayHeight();
// Display initial unire vector
displayUnire();