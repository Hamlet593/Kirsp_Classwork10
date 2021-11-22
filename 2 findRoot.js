/*Find the square root of a number using a binary search. Given a positive number, return the square root of it.
If the number is not a perfect square, return the floor of its square root.*/

function findRoot(item){
  if(item === 0 || item === 1) return item;
  let root = item / 2;
  while(item < root * root){
    root /= 2;
  }
  return Math.ceil(root);
}

console.log(findRoot(9))
console.log(findRoot(12))
console.log(findRoot(16))