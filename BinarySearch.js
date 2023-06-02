function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let sortedArray = [2, 4, 7, 10, 14, 16, 20, 23, 25];
let targetElement = 14;
let result = binarySearch(sortedArray, targetElement);

if (result === -1) {
  console.log("Element not found in the array.");
} else {
  console.log("Element found at index", result);
}
