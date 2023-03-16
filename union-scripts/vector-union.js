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

// Initialize unire vector with 2 numbers
let unire = [];
unire[1] = 20;
unire[2] = 25;

// initialize pasul
let pasul = 1;

// union-button
let union_button = document.getElementById("union");

// Function to update tata and unire vector
function updateUnire() {
  ///the 3 images
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');

  /// 1
  if (pasul == 1) {

    tata[25] = 20;
    unire[1] = 12;
    unire[2] = 3;
    image1.src = './images/Union/union1.png';

  }
  if (pasul == 2) {
    tata[3] = 12;
    unire[1] = 3;
    unire[2] = 4;
    image1.src = './images/Union/union2.png';
  }
  if (pasul == 3) {
    tata[4] = 12;
    unire[1] = 4;
    unire[2] = 25;
    image1.src = './images/Union/union3.png';
  }
  if (pasul == 4) {
    tata[20] = 12;
    unire[1] = 7;
    unire[2] = 14;
    image1.src = './images/Union/union4.png';
  }
  /// 2
  if (pasul == 5) {
    tata[14] = 7;
    unire[1] = 17;
    unire[2] = 18;
    image2.src = './images/Union/union5.png';
  }
  if (pasul == 6) {
    tata[18] = 17;
    unire[1] = 16;
    unire[2] = 10;
    image2.src = './images/Union/union6.png';
  }
  if (pasul == 7) {
    tata[10] = 16;
    unire[1] = 5;
    unire[2] = 13;
    image2.src = './images/Union/union7.png';
  }
  if (pasul == 8) {
    tata[13] = 5;
    unire[1] = 23;
    unire[2] = 14;
    image2.src = './images/Union/union8.png';
  }
  if (pasul == 9) {
    tata[7] = 23;
    unire[1] = 9;
    unire[2] = 5;
    image2.src = './images/Union/union9.png';
  }
  if (pasul == 10) {
    tata[5] = 9;
    unire[1] = 7;
    unire[2] = 13;
    image2.src = './images/Union/union10.png';
  }
  if (pasul == 11) {
    tata[9] = 23;
    unire[1] = 18;
    unire[2] = 9;
    image2.src = './images/Union/union11.png';
  }
  if (pasul == 12) {
    tata[23] = 17;
    unire[1] = 8;
    unire[2] = 2;
    image2.src = './images/Union/union12.png';
  }
  if (pasul == 13) {
    tata[2] = 8;
    unire[1] = 17;
    unire[2] = 10;
    image2.src = './images/Union/union13.png';
  }
  if (pasul == 14) {
    tata[16] = 17;
    unire[1] = 2;
    unire[2] = 10;
    image2.src = './images/Union/union14.png';
  }
  if (pasul == 15) {
    tata[17] = 8;
    unire[1] = 19;
    unire[2] = 6;
    image2.src = './images/Union/union15.png';
  }
  /// 3
  if (pasul == 16) {
    tata[6] = 19;
    unire[1] = 1;
    unire[2] = 6;
    image3.src = './images/Union/union16.png';
  }
  if (pasul == 17) {
    tata[19] = 1;
    unire[1] = 21;
    unire[2] = 15;
    image3.src = './images/Union/union17.png';
  }
  if (pasul == 18) {
    tata[15] = 21;
    unire[1] = 11;
    unire[2] = 22;
    image3.src = './images/Union/union18.png';
  }
  if (pasul == 19) {
    tata[22] = 11;
    unire[1] = 15;
    unire[2] = 11;
    image3.src = './images/Union/union19.png';
  }
  if (pasul == 20) {
    tata[11] = 21;
    unire[1] = 1;
    unire[2] = 24;
    image3.src = './images/Union/union20.png';
  }
  if (pasul == 21) {
    tata[24] = 1;
    unire[1] = 24;
    unire[2] = 22;
    image3.src = './images/Union/union21.png';
  }
  if (pasul == 22) {
    tata[21] = 1;
    unire[1] = 0;
    unire[2] = 0;
    image3.src = './images/Union/union22.png';
    union_button.disabled = true;

  }

  pasul++;

  displayVector();
  displayUnire();
}

// Function to reset tata and unire vector
function resetUnire() {
  pasul = 1;
  tata = [];
  for (let i = 1; i <= 25; i++) {
    tata[i] = i;
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
  union_button.disabled = false;
  displayVector()
  displayUnire();
}

// Display initial tata vector
displayVector();
// Display initial unire vector
displayUnire();