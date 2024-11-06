// Problem 1:
const sumArray = (arr: number[]): number => {
  let totalSum = 0;
  arr.forEach((elem: number) => (totalSum += elem));
  return totalSum;
};
// const result = sumArray([1, 2, 3, 4, 5, 6]);
// console.log(result)
