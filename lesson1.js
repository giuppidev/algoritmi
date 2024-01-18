const array = [];

for (let i = 0; i < 100; i++) {
  array.push(i + 1);
}
const numToBeFound = 26;

function search(arr, num) {
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === num) {
      return i;
    }
  }
  return null;
}

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length;
  let count = 1;

  while (start < end) {
    console.log("count:", count);
    count++;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      return mid;
    }

    if (num < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
}

function binarySearchImproved(arr, num) {
  let start = 0;
  let end = arr.length;

  return recursiveBinarySearch(arr, num, start, end);
}

function recursiveBinarySearch(arr, num, start, end) {
  if (start > end) {
    return null;
  }
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === num) {
    return mid;
  }

  if (num < arr[mid]) {
    return recursiveBinarySearch(arr, num, start, mid - 1);
  } else {
    return recursiveBinarySearch(arr, num, mid + 1, end);
  }
}

console.log(binarySearchImproved(array, numToBeFound));
