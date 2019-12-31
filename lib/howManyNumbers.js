

// input sum of value and desired number of digits

//return all 3 digit numbers where
    // the digits are ascendings
    // AND the digits add to 10

// return an array of numbers that work

// number of answers

// lowest

//highest




function findAll(sum, digits) {

    let results = [];
    let final = [];
    let count = 0;

    let startNum = 1;
    for (i=1; i< digits; i++){
        startNum *= 10;
    }
    let endNum = Math.ceil(sum/digits)*1.2*startNum;

    for (let i = startNum; i < endNum; i++){
        if(isAscending(i)===false){
            continue;
        }
        let stringNumArr = i.toString().split('');
        let numArr = getNumArr(stringNumArr);

     

        let value = numArr.reduce((a, b) => a + b, 0);
        if (value === sum){
            results.push(i);
            count += 1;
        }

    }

    if (count === 0){
        return [];
    }
    final[0] = count;
    final[1] = results[0].toString();
    final[2] = results[results.length-1].toString();
    return final;
    
}

function isAscending(num){
    let string = num.toString();
    let arr = string.split('');

    for(let i = 0; i < arr.length; i++){
        if(i !== arr.length-1){
            if(arr[i] > arr[i+1]){
                return false;
            }

        }
        if(arr[i] > arr[i+1]){
            return false;
        }
        }
        return true;

}

function getNumArr(stringArr){
    let numArr = [];
    for(let i = 0; i < stringArr.length; i++){
        numArr.push(parseInt(stringArr[i],10));
    }
    return numArr;
}



module.exports = findAll;