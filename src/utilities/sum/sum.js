function sumCosts(arrayOfCosts) {
  let sum = 0;
  arrayOfCosts.forEach(element => {
    sum += element;
  });
  return sum;
}

export default sumCosts;
