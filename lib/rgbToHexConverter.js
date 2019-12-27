
function rgbToHex(r, g, b){

let r2 = convertNum(r);
let g2 = convertNum(g);
let b2 = convertNum(b);


return r2+g2+b2;

}

function convertNum(num){

    if(num > 255){
        num=255;
    }

    if(num < 0){
        num=0;
    }
    
    let hexStr = num.toString(16);
    hexStr = hexStr.toUpperCase();

    if(hexStr.length < 2){
        hexStr = '0'+hexStr;
    }

    return hexStr;
    
}







module.exports = rgbToHex;