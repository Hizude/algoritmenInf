const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#resetBtn');
const newArrBtn = document.querySelector('#newArrBtn');
const lenRange = document.querySelector('#range_arrlen');
const canvas = document.querySelector('#canvas');
let len = 20;
let speed = 10;
let generatedArray = [];
let generatedArrayDivs = [];
generateArray(len);
update_delay = 0;

pauseBtn.addEventListener('click', () => {
  alert('not working')
})

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

newArrBtn.addEventListener('click', () => {
  reset();
})

startBtn.addEventListener("click", () => {
  bubbleSort(generatedArray, generatedArrayDivs);
})

// SORTING ALGORITHMS
// function bubbleSort(arr, arrDivs) {
//   let len = arr.length;
//   let nCompleted = 0;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (arr[j] > arr[j + 1]){
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         let tempDiv = arrDivs[j].style.height;
//         arrDivs[j].style.height = arrDivs[j + 1].style.height;
//         arrDivs[j + 1].style.height = tempDiv;
//       }
//     }
//     nCompleted = nCompleted + 1;
//     arrDivs[len-nCompleted].style.backgroundColor = 'green';
//   } 
//   return arr;
//   };

// below: make animation with timer

  function bubbleSort(arr, arrDivs) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      setTimeout(function(){
        arrDivs[j].style.backgroundColor = 'yellow';
      }, update_delay+=speed)
      if (arr[j] > arr[j + 1]){
        setTimeout(function(){
          arrDivs[j].style.backgroundColor = 'red';
          arrDivs[j+1].style.backgroundColor = 'red';
        }, update_delay+=speed)
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        updateHeight(arrDivs[j], arrDivs[j+1]);
      }
      setTimeout(function(){
        arrDivs[j].style.backgroundColor = 'blue';
      }, update_delay+=speed);
    }
  } 
  return arr;
  };

// function updateHeight(div1, div2){
//   setTimeout(function(){
//     let tempDiv = div1.style.height;
//     div1.style.height = div2.style.height;
//     div2.style.height = tempDiv;
//   }, update_delay+=speed);
// }

function updateHeight(div1, div2){
  setTimeout(function(){
    let tempDiv = div1.style.height;
    div1.style.height = div2.style.height;
    div2.style.height = tempDiv;
  }, update_delay+=speed);
}