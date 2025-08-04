const arr1 = [1, 2, 3, 5, 9];
const arr2 = [4, 6, 7, 8];

const merged = [...arr1, ...arr2].sort((a, b) => a - b);

console.log(merged);
