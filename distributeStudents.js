function sortCustom(a, b){return a-b}

function distributeStudents(males, females){
  let arrOutput = [], maxLength = 0;
  
    males = males.sort(sortCustom);
    females = females.sort(sortCustom);

  if(males.length > females.length) {
    maxLength = males.length;
  } else {
    maxLength = females.length;
  }

  for(let i = 0; i < maxLength; i++) {
    let subArr = [];
    if(males[i] != undefined) {
      subArr.push(males[i]);
    } else {
      subArr.push(null);
    }
    if(females[i] != undefined) {
      subArr.push(females[i]);
    } else {
      subArr.push(null);
    }
    
    arrOutput.push(subArr);
 
  }

  return arrOutput;
}
