export function recFind(array, e) {
  if (array.length === 0) return -1;
  if (array[array.length-1] === e) return array.length - 1;
  array.pop();
  return find(array, e);
}
