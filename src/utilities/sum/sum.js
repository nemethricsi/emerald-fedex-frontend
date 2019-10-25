'use strict';

function sumCosts(arrayOfCosts) {
  console.log(arrayOfCosts);
  let sum = 0;
  arrayOfCosts.forEach(element => {
    sum += element;
  });
  return sum;
}

export default sumCosts;
