const quickSortBtn = document.querySelector('#quickSort');
const insertionSortBtn = document.querySelector('#insertionSort');
const selectionSortBtn = document.querySelector('#selectionSort');
const bubbleSortBtn = document.querySelector('#bubbleSort');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#resetBtn');
const newArrBtn = document.querySelector('#newArrBtn');
const lenRange = document.querySelector('#range_arrlen');
const canvas = document.querySelector('#canvas');
let len = 100;
let speed = 1;
let generatedArray = [];
let generatedArrayDivs = [];
generateArray(len);
update_delay = 0;


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function reset(){
  let elements = document.querySelectorAll('.el');
  elements.forEach(element => {
    generatedArray.pop(element.offsetHeight);
    generatedArrayDivs.pop(element)
    element.remove();
  });
  generateArray(len);
}

function generateArray(len){
  for (let i = 0; i < len; i++) {
    let div = document.createElement("div");
    div.style.height = (`${getRandomInt(500)}px`);
    div.style.margin = "0px 0.5px";
    div.style.backgroundColor = "blue";
    div.classList.add('el', 'w-1/3');
    canvas.appendChild(div);
    generatedArrayDivs.push(div);
    generatedArray.push(div.offsetHeight);
  }
}

lenRange.addEventListener('input', (e) => {
  len = e.target.value;
  reset();
})


selectionSortBtn.addEventListener('click', () => {
  selectionSort(generatedArray, generatedArrayDivs);
})

bubbleSortBtn.addEventListener('click', () => {
  bubbleSort(generatedArray, generatedArrayDivs);
})

startBtn.addEventListener("click", () => {
  
})

pauseBtn.addEventListener('click', () => {
  
})

newArrBtn.addEventListener('click', () => {
  reset();
})


// SORTING ALGORITHMS
function swap(div1, div2){
  setTimeout(function(){
    let tempDiv = div1.style.height;
    div1.style.height = div2.style.height;
    div2.style.height = tempDiv;
  }, update_delay+=speed);
}

function updateColor(div, color){
  setTimeout(function(){
    div.style.backgroundColor = color;
  }, update_delay+=speed);
}

function bubbleSort(arr, arrDivs) {
  let len = arr.length;
  let nSorted = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len-nSorted; j++) {
      updateColor(arrDivs[j], 'yellow');
      if (arr[j] > arr[j + 1]){
        updateColor(arrDivs[j], 'red');
        updateColor(arrDivs[j + 1], 'red');
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap(arrDivs[j], arrDivs[j+1]);
      }
      updateColor(arrDivs[j], 'blue');
    }
    nSorted++;
    updateColor(arrDivs[len-nSorted], 'green');
  } 
  return arr;
  };

// -----------------
function selectionSort(arr, arrDivs) { 
  let len = arr.length;
  let nSorted = 0;
  for(let i = 0; i < len; i++) {
    let min = i;
    for(let j = 0 + nSorted; j < len; j++){
      updateColor(arrDivs[j], 'yellow');
      if(arr[j] < arr[min]) {
        updateColor(arrDivs[min], 'blue');
        min=j; 
        updateColor(arrDivs[min], 'red');
      }
      updateColor(arrDivs[j], 'blue');
      updateColor(arrDivs[min], 'red');
    }
    updateColor(arrDivs[min], 'blue');
      if (min != i) {
        let temp = arr[i]; 
        arr[i] = arr[min];
        arr[min] = temp;   
        swap(arrDivs[i], arrDivs[min]);
      }
      updateColor(arrDivs[nSorted], 'green')
      nSorted++;
  }
  return arr;
}