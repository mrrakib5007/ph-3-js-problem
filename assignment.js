// Problem 01 ==================================================

function cubeNumber(number) {
    const numberType = typeof number;
    const errorMassage = "Oops!! Your input is not number";

    if(numberType === "number"){
        let result = Math.pow(number, 3);
        return result;
    } 
    return errorMassage;
}

const output1    = cubeNumber(5);
console.log('Problem 01: Your Number Cube is: ', output1);


// Problem 02 ==================================================

function matchFinder(string1, string2) {
    const string1Type = typeof string1;
    const string2Type = typeof string2;
    let errorMassage = "";

    if(string1 !== '' && string2 !== ''){
        if(string1Type == 'string' && string2Type == 'string'){
        
            if(string1.includes(string2)){
                return true;
            } else {
                return false;
            }

        } else {
            errorMassage = "Invalid input!!";
            return errorMassage;
        }
        
    } else {
        errorMassage = "String1 or String2 is invalid!!";
        return errorMassage;
    }
}

const output2    = matchFinder('Rakib Hossen', 'Hossen');
console.log('Problem 02: String Match Result: ', output2);


// Problem 03 ==================================================


function sortMaker(arr) {
    let resultArray = [];
    let firstElement = arr[0];
    let secondElement = arr[1];
    let errorMassage = "";

    if(firstElement > 0 && secondElement > 0){
        if(firstElement === secondElement){
            errorMassage = "equal";
            return errorMassage;
    
        }else if(firstElement > secondElement){
            resultArray.push(firstElement, secondElement);
            return resultArray;
    
        }else {
            resultArray.push(secondElement, firstElement);
            return resultArray;
        }
    }else {
        errorMassage = "Invalid Input";
        return errorMassage;
    }
}

const myArray    = [5, 10];
const output3    = sortMaker(myArray);
console.log('Problem 03: Sort Maker Result: ', output3);



// Problem 04 ==================================================

function findAddress(obj) {
    let myStreet    = obj.street;
    let myHouse     = obj.house;
    let mySociety   = obj.society;

    if(myStreet == undefined){
        myStreet = '__';
    }
    if(myHouse == undefined) {
        myHouse = '__';
    }
    if (mySociety == undefined){
        mySociety = '__';
    }

    let myFullAddress   = myStreet + ', ' + myHouse + ', ' + mySociety;
    return myFullAddress;
}

const myAddress  = {
    street: 10, 
    // house: '15A', 
    society: 'Earth Perfect'
};
const output4    = findAddress(myAddress);
console.log('Problem 04: Find Address Result: ', output4);


// Problem 05 ==================================================

function canPay(changeArray, totalDue) {
    let myTotalMoney = 0;
    let errorMassage = "";

    if(changeArray.length === 0){
        errorMassage = "Sorry!! Your Pocket is empty";
        return errorMassage;

    }else {
        for(let i = 0; i < changeArray.length; i++){
            myTotalMoney = myTotalMoney + changeArray[i];
        }
        
        if(myTotalMoney >= totalDue){
            return true;
        }else {
            return false;
        }
    }
}


let takaIHave       = [256];
let potatoPrice     = 10;

const output5  = canPay(takaIHave, potatoPrice);
console.log('Problem 05: Can I buy a Potato Chips?: ', output5);





