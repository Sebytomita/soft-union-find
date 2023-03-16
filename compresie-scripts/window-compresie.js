const codeEditor = document.getElementById('code');
const runButton = document.getElementById('run');
const pauseButton = document.getElementById('pause');
const vectorTable = document.getElementById('vector');

let running = false;
let paused = false;
let currentLine = 0;
let lines, code;


runButton.addEventListener('click', () => {
  console.log("run");
  // Check if the code is already running
  if (running) {
    return;
  }


  // Get the code from the code editor
  code = codeEditor.value;

  // Split the code into individual lines
  lines = code.split('\n');

  // Start executing the code
  runButton.disabled = true;
  pauseButton.disabled = false;
  running = true;
  paused = false;
  currentLine = currentLine;
  executeLine(code, lines);
});

pauseButton.addEventListener('click', () => {
  console.log("pause");
  // Check if the code is already paused
  if (paused) {
    return;
  }
  // Pause the execution of the code
  pauseButton.disabled = true;
  runButton.disabled = false;
  paused = true;
  running = false;

  //when paused it remains highlighted
  const line = lines[currentLine];
  // Highlight the current line in the textbox
  const codeEditor = document.getElementById('code');
  const startIndex = code.indexOf(line);
  const endIndex = startIndex + line.length;
  codeEditor.setSelectionRange(startIndex, endIndex);
  codeEditor.focus();
});

function executeLine(code, lines) {
  // Check if the code has finished executing or if we are paused
  if (!running || paused) {
    return;
  }

  // Get the current line of code
  const line = lines[currentLine];
  console.log(line);

  // Highlight the current line in the textbox
  const codeEditor = document.getElementById('code');
  const startIndex = code.indexOf(line);
  const endIndex = startIndex + line.length;
  codeEditor.setSelectionRange(startIndex, endIndex);
  codeEditor.focus();

  // Update the vector display with the current values of the tata array
  //updateVectorDisplay(tata);

  // If we are not paused, schedule the next line to be executed
  // after a short delay
  if (!paused) {
    setTimeout(executeNextLine, 800);
  }
}

function executeNextLine() {
  if (paused) {
    return;
  }

  // Move on to the next line
  currentLine++;
  console.log(lines.length);

  // If there are more lines to execute, schedule the next line to be executed
  if (currentLine < lines.length) {
    executeLine(code, lines);
  } else {
    // If there are no more lines, stop running
    currentLine = 0;
    running = false;
    runButton.disabled = false;
  }
}

/*
function updateVectorDisplay() {
  // Clear the current vector display
  vectorTable.querySelectorAll('tr').forEach((tr) => tr.remove());

  // Use the tata array defined in the second script
  const vector = window.tata;

  if (vector === undefined) {
    // Do not try to access properties of undefined
    return;
  }

  if (Array.isArray(vector)) {
    // Append a row for each element in the vector
    for (const element of vector) {
      vectorTable.insertAdjacentHTML('beforeend', `<tr><td>${element}</td></tr>`);
    }
  } else {
    // Append a single row if the vector is not an array
    vectorTable.insertAdjacentHTML('beforeend', `<tr><td>${vector}</td></tr>`);
  }
}
*/

codeEditor.value = `
  cin>>n;
  for(i=1;i<=n;i++)
  {
    cin>>x;
    cout<<find_c(x)<<' ';
  }   
  int find_c(int x)
  {      
    int r=x;
    while(tata[r]!=r)
        r=tata[r];
    while (tata[x]!= x)
    {
        tata[x]=r;
        x=tata[x];
    }
    return r;
  }     
`;

codeEditor.readOnly = true;
//console.log(codeEditor);



