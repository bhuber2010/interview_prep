export function reverseArray(list) {
    if(list.length <= 1) return list;
    var end = [list.shift()];
    var start = [list.pop()];
    return start.concat(reverseArray(list)).concat(end);
}

export function reverseArray2(list) {
  reverse(array, i, j) {
    if (i < j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      reverse(array, ++i, --j);
    }
  }
  return reverse(list, 0, list.length - 1)
}

console.log(reverseArray([1, 2, 3, 'd']));
