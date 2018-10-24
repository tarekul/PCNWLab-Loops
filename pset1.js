/*
    @func average
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            find average of all numbers
    @example - average([1,2,3,4]); // 2.5
*/
console.log("------average function--------");

average = (arr) =>{
    let sum = 0
    arr.forEach((element) => sum += element)
    return sum/arr.length
}

console.log(average([1,2,3,4]));

average2 = (arr) => {
    let arr2 = arr.reduce((acc,element) => {
        return acc += element
    },0)
   return arr2/arr.length
}
console.log(average2([1,2,3,4]));


/*
    @func squareEach
    @param {array} arr
    @returns {array}
    @desc - square each value in array
    @example - squareEach([1,2,3,4]); // [1,4,9,16]
*/
console.log("------squareEach function--------");
function squareEach(arr){
    return arr.map((element,index) => arr[index] ** 2)
}
console.log(squareEach([1,2,3,4]));

squareEach2 = (arr) =>{
    return arr.reduce((acc,element) =>{
        return acc.concat(element ** 2)
    },[])
}
console.log(squareEach2([5,6,7,8]));


console.log("------averageSquare function--------");
/*
    @func averageSquare
    @param {array} arr
    @returns {numnber}
    @desc - loop through arr and 
            square each element
            find the average of the 
            SQUARES of each element in this array
    @example - 
        // turn [1,2,3,4] to [1,4,9,16]
        // then find the averate of the array to the right
        averageSquare([1,2,3,4); // 7.5
*/
function averageSquare(arr){
    return average(squareEach(arr))
}

console.log(averageSquare([1,2,3,4]))


console.log("------negateArr-------------");

/*
    @func negateArr
    @param {array} arr
    @returns {array}
    @desc - negate each item in array
    @example
        negateArr([1,2,3,4]); // [-1,-2,-3,-4]
*/
function negateArr(arr){
    // for(i=0;i<arr.length;i++){
    //     arr[i] = -1 * arr[i]
    // }

    const negArr = arr.map((ele,index) => {
         return -1 * ele; });
    return negArr;
}
console.log(negateArr([1,2,3,4]));

function negateArr2(arr){
    return arr.reduce((acc,element) => {
        return element > 0 ? acc.concat(element * -1) : acc.concat(element)
    },[])
}

console.log(negateArr2([5,-6,7,-8]));

console.log("-------reverseArr-------");

/*
    @func reverseArr
    @param {array} arr
    @returns {array}
    @desc - reverse an array
    @example - reverseArr([1,2,3,4]); // [4,3,2,1]
*/
function reverseArr(arr){
    // arrCopy = []
    // for(i=arr.length-1;i>=0;i--){
    //     arrCopy.push(arr[i])
    // }
    // return arrCopy

    const arrCopy = arr.map((element,index) => { return arr[arr.length -1 - index] })
    return arrCopy
}

function reverseArr2(arr){
    return arr.reduce((acc,elem,index) => {
        return acc.concat(arr[arr.length - 1 -index])
    },[])
}

console.log(reverseArr([1,2,3,4]));
console.log(reverseArr2([5,6,7,8]));


console.log("-------negateBack----");
/*
    @func negateBackwards
    @param {array} arr
    @returns {array}
    @desc - reverse AND negate array
    @example
        negateBackwards([1,2,3,4]); // [-4, -3, -2, -1]
*/
function negateBackwards(arr){
    return negateArr(reverseArr(arr))
}

console.log(negateBackwards([1,2,3,4]));
