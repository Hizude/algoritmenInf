const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const newArrBtn = document.querySelector('#newArrBtn');
const lenRange = document.querySelector('#range_arrlen');
const canvas = document.querySelector('#canvas');
let len = 100;
generateArray(len);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function reset(){
  let elements = document.querySelectorAll('.el');
  elements.forEach(element => {
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
    div.classList.add('el', 'w-1/3')
    canvas.appendChild(div);
  }
}

lenRange.addEventListener('input', (e) => {
  len = e.target.value;
  reset();
})

newArrBtn.addEventListener('click', () => {
  reset();
})


// SORTING ALGORITHMS
arr = [2, 5, 3, 62, 4, 88, 42, 68, 24, 44, 54, 11, 12, 51, 41, 84, 10, 32, 14, 51, 35, 62, 62, 21, 21, 74, 34, 32, 13, 57, 88, 53, 33, 4, 68, 1, 5, 77, 3, 78, 23, 24];

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
          if (arr[j] > arr[j + 1]) {
              let tmp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = tmp;
          }
      }
  }
  return arr;
};