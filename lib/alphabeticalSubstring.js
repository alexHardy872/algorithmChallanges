
function longest(str) {
    if(str === ''){
        return '';
    }
    const alpha = "abcdefghijklmnopqrstuvwxyz";

    let stringArray = str.split('');
    let longestArr = [stringArray[0]];

    for (let i = 0 ; i < stringArray.length; i++){
        let tempArr = [];
        tempArr.push(stringArray[i]);
        for(let j=i; j < stringArray.length; j++){
            if(alpha.indexOf(stringArray[j]) <= alpha.indexOf(stringArray[j+1])){
                tempArr.push(stringArray[j+1]);
            }
            else{
                break;
            }
        }
        if (tempArr.length > longestArr.length){
            longestArr = tempArr;
        }
    }
    return longestArr.join('');
  }


module.exports = longest;