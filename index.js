const quickSortBtn = document.querySelector('#quickSort');
const insertionSortBtn = document.querySelector('#insertionSort');
const selectionSortBtn = document.querySelector('#selectionSort');
const bubbleSortBtn = document.querySelector('#bubbleSort');
const startBtn = document.querySelector('#startBtn');
const placeholderBtn = document.querySelector('#placeholderBtn');
const newArrBtn = document.querySelector('#newArrBtn');
const lenRange = document.querySelector('#range_arrlen');
const canvas = document.querySelector('#canvas');

let selectedAlgo = '';
let len = document.querySelector('#range_arrlen').value;
let speed = 5;
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

bubbleSortBtn.addEventListener('click', () => {
  selectedAlgo = '';
  selectedAlgo += bubbleSortBtn.innerHTML;
})

selectionSortBtn.addEventListener('click', () => {
  selectedAlgo = '';
  selectedAlgo += selectionSortBtn.innerHTML;
})

insertionSortBtn.addEventListener('click', () => {
  selectedAlgo = '';
  selectedAlgo += insertionSortBtn.innerHTML;
})

quickSortBtn.addEventListener('click', () => {
  selectedAlgo = '';
  selectedAlgo += quickSortBtn.innerHTML;
})

startBtn.addEventListener("click", () => {
  switch(selectedAlgo){
    case "Bubble Sort":
      bubbleSort(generatedArray, generatedArrayDivs);
      break;
      
    case "Selection Sort":
      selectionSort(generatedArray, generatedArrayDivs);
      break;
      
    case "Insertion Sort":
      insertionSort(generatedArray, generatedArrayDivs);
      break;
      
    case "Quick Sort":
      quickSort(generatedArray, 0, generatedArray.length, generatedArrayDivs);
      break;
      
    default:
      // add tailwindcss popup
      alert('No algorithm selected!');
  }
})

placeholderBtn.addEventListener('click', () => {
  // 
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

function insertionSort(arr, arrDivs) {
  let len = arr.length;
      for (let i = 1; i < len; i++) {
          updateColor(arrDivs[i-1], 'green');
          let current = arr[i];
          updateColor(arrDivs[i], 'yellow');
          let j = i-1; 
          while ((j > -1) && (current < arr[j])) {
            arr[j + 1] = arr[j];
            updateColor(arrDivs[j+1], 'yellow');
            updateColor(arrDivs[j], 'yellow');
            updateColor(arrDivs[j+1], 'red');
            updateColor(arrDivs[j], 'red');
            swap(arrDivs[j + 1], arrDivs[j])
            updateColor(arrDivs[j+1], 'green');
            updateColor(arrDivs[j], 'green');
            j--;
          }
          arr[j + 1] = current;
      }
  return arr;
}

function quickSort(arr, start, end, arrDivs){
  if (start < end){
    let j = partition(arr, start, end, arrDivs);
    updateColor(arrDivs[j], 'green');
    quickSort(arr, start, j, arrDivs);
    quickSort(arr, j+1, end, arrDivs);
  }
  return arr;
}

function partition(arr, start, end, arrDivs){
  let pivot = arr[start];
  let i = start;
  let j = end;
  while(i < j){
    do{
      i++;
    } while(arr[i] <= pivot)
    do{
      j--
    } while(arr[j] > pivot)
    if (i < j){
      updateColor(arrDivs[i], 'yellow');
      updateColor(arrDivs[j], 'yellow');
      updateColor(arrDivs[i], 'red');
      updateColor(arrDivs[j], 'red');
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      swap(arrDivs[i], arrDivs[j]);
      updateColor(arrDivs[i], 'blue');
      updateColor(arrDivs[j], 'blue');
    }
  }
  updateColor(arrDivs[start], 'yellow');
  updateColor(arrDivs[j], 'yellow');
  updateColor(arrDivs[start], 'red');
  updateColor(arrDivs[j], 'red');
  let temp = arr[start];
  arr[start] = arr[j];
  arr[j] = temp;
  swap(arrDivs[start], arrDivs[j]);
  updateColor(arrDivs[start], 'blue');
  updateColor(arrDivs[j], 'blue');
  return j;
}

// now-------------------

