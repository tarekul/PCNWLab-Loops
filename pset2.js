/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/
removeNegatives = (arr) =>{
    const arrCopy = arr.slice(0)
    for(i=0;i<arr.length;i++){
        if(arr[i] < 0){arrCopy[i] = arr[i] * -1 }
        else{ arrCopy[i] = arr[i]}
        
    }
    return arrCopy
}
console.log("removeNegatives");

console.log(removeNegatives([-3,-2,1,2,3,-4]))
/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
function findVal(arr,val){
    for(index of arr){
        if(val == arr[index]) return index
    }
    return -1
}

console.log(findVal([1,2,3,4], 3))

/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/
function removeOdds(arr){
    const arr2 = []
    for(index in arr){
        if(arr[index] % 2 == 0) arr2.push(arr[index])
    }
    return arr2
}

console.log(removeOdds([1,2,3,4]));
console.log("------addSquares-------");

/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
function addSquares(arr){
    arr2 = [...arr]
    for(let i=0;i<arr.length;i++){
        arr2.push(arr[i] ** 2)
    }
    return arr2
}

console.log(addSquares([1,2,3,4]));

/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/
function doubleify(arr){
    arr2 = []
    for(i in arr){
        arr2.push(arr[i])
        arr2.push(arr[i] ** 2)
        arr2.push("space")
    }
    return arr2
}
console.log(doubleify([1,2,3,4]));

/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99 
*/

function findMax(arr){
    let hold = arr[i]
    for(i in arr){
        i++
        if(hold < arr[i]) hold = arr[i]
    }
    return hold
}
console.log(findMax([1,2,3,99,4]));


function findMax2(arr){
    return arr.sort()[arr.length-1]
}
console.log(findMax2([1,2,3,99,4]));
