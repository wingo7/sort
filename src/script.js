function insertionSort(array) {
  let i = 1;
  let j;
  while (i < array.length) {
    j = i;
    while (j>0 && (array[j-1] > array[j])) {
      let tmp = array[j];
      array[j] = array[j-1];
      array[j-1] = tmp;
      j--;
    }
    i++;
  }
  return array;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);

  const leftPart = array.slice(0, middle);
  const rightPart = array.slice(middle);

  return merge(mergeSort(leftPart), mergeSort(rightPart));
}

function merge(left, right) {
  let array = [], li = 0, ri = 0;
  while (li < left.length && ri < right.length) {
    if (left[li] < right[ri]) {
      array.push(left[li]);
      li++;
    } else {
      array.push(right[ri]);
      ri++;
    }
  }
  return array.concat(left.slice(li)).concat(right.slice(ri));
}