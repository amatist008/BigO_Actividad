const data = Array.from({ length: 1_000_000 }, (_, i) => i);

//O(n)
const lineal= (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
};

console.time("Linear Search");
lineal(data, 999999);
console.timeEnd("Linear Search");

//////o (log n)
const binaria = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

console.time("Binary Search");
binaria(data, 999999);
console.timeEnd("Binary Search");