let parent = document.querySelector(".assign");
let addClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");

let div = document.querySelector(".assign .classes-list div");
let button = document.querySelector(".sort");

let classList = div.children; // new spans added

let theSteps = document.querySelector(".assign .classes-list .the-steps");

let addBtn = document.querySelector(".add")
let removeBtn = document.querySelector(".remove")


//////////////////////////////////////////////////////////////////////////////////////
function add() { // to add nubmer
    let a = addClass.value; // make array and sort values to add one value only to class list
    for (let i = 0; i < 1; i++) {
      if (a === "") { // if no number , continue
        continue;
      } else {
        let span = document.createElement("span");
        span.className=span.innerText; // creat new span
        span.prepend(a); // add the first value the second and so on..
        div.appendChild(span); // add span in div(parent)
      }
    }
    addClass.value = ""; // clear the value after added
}
addClass.addEventListener("keypress", function () { // add number with enter
  if (event.key === "Enter"){
    add();
  }
});
addBtn.addEventListener("click", add); // add number with button




function remove() { //remove number
  for (let i = 0; i < classList.length; i++) {
    if (removeClass.value === classList[i].textContent) {
      classList[i].remove();
    }
  }
  removeClass.value = ""; // clear the value after removed
};
removeClass.addEventListener("keypress", function () { // remove number with enter
  if (event.key === "Enter"){
    remove();
  }
});
removeBtn.addEventListener("click", remove); // remove number with button




button.addEventListener("click",function () { //button to start insertion sort
    let array=[];
    for (let e = 0; e < div.children.length; e++) { //add numbers into array
      array.push(+div.children[e].innerText);
    }
    insertionSort(array); // call The Insertion Sort
})



let insertionSort = function(arr) { ///////////////////////The Insertion Sort //////////////
  let key;
  let j;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i-1;

    while (j>=0 && arr[j] > key) {
      arr[j+1] = arr[j];
      j = j-1;
    }
    arr[j+1] = key;
    let step = document.createElement("div"); // add the steps to show in page
    step.prepend(arr) 
    theSteps.appendChild(step)
  }
};
