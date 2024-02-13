const arr = [9, 10, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      let left = arr[j];
      let right = arr[j + 1];
      if (left > right) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
//console.log(bubbleSort(arr));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; //2
    let j = i - 1; // 0
    while (j >= 0 && key < arr[j]) {
      // while(0>=0 && 2<3)
      arr[j + 1] = arr[j]; // arr[1] = arr[0]  ==> [3,3,1]
      j = j - 1; // -1
    }
    arr[j + 1] = key; // arr[0] = 2 ==> [2,3,1]
  }
  return arr;
}
//console.log(insertionSort([3, 2, 1]));

function merge(left, right) {
  let sortedArray = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

//console.log(mergeSort(arr));

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
console.log(quickSort(arr));
