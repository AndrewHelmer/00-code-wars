function find_average(array) {
  let sum = array.reduce((accumalator, currentValue) => accumalator + currentValue,0);
  return sum/array.length
  }