// Assume that a "#" is treated as a backspace in a string
// the string "aba#c" is actually abc"... the task is to process a string with "#" symbols


function inputString(string){
if(string === ''){
    return '';
}

// if(isJustHashes(string) === true){
//     return '';
// }

let stringSplitArray = string.split('');
let workingArray = [];
let stringSplitIterator = 0;

while (stringSplitIterator < stringSplitArray.length){
    if(stringSplitArray[stringSplitIterator] === '#'){
        if(workingArray.length){
            workingArray.pop();
        }
    }
    else{
        workingArray.push(stringSplitArray[stringSplitIterator])
    }
    stringSplitIterator += 1;
}




return workingArray.join('');

};



// function isJustHashes(s){
//     let Arr = s.split('');
//     for (let i = 0 ; i < Arr.length; i++){
//         if (Arr[i] === "#"){
//             continue;
//         }
//         else{
//             return false;
//         }
//     }
//     return true
// }



module.exports = inputString;