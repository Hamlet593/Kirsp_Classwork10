/*Find the square of a number without using the multiplication and division operator
Given an integer, ﬁnd its square without using multiplication and division operator. Also, the use of the power function from any programming language library is not allowed.*/

function findSquare(item){
  let square = 0;
  for(let i = 0; i < item; i++){
    square += item;
  }
  return square;
}
console.log(findSquare(4))