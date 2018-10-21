/*
    @func getMiddle
    @param {array} arr
    @return {array}
    @desc - get the middle item of an array
            if even number of elements, return the middle TWO items
            
    @example - getMiddle([1,2,3); // [2]
               getMiddle([1,2,3,4]); // [2,3]
*/
console.log("------getMiddle---------");

function getMiddle(arr){
    if(arr.length % 2 === 0){
        mid1 = arr[Math.floor((arr.length-1) / 2)]
        mid2 = arr[Math.ceil((arr.length-1) / 2)]
        return `[${mid1},${mid2}]`
    }
    else return `[${arr[(arr.length-1)/2]}]`
}
console.log(getMiddle([1,2,3]));

/*
    @func addToMiddle
    @param {array} arr
    @param {anything} element
    @return {array}
    @desc - add element to the middle of array
            if odd number of elements, add after middle
            
    @example - addToMiddle([1,2,3,4,5], 0); // [1,2,0,3];
               addToMiddle([1,2,3,4], 0); // [1,2,0,3,4]
*/
function addToMiddle(arr,element){
    let mid = 0
    mid = (arr.length % 2 === 0) ? arr.length / 2 : Math.ceil(arr.length / 2)
    let arr2 = []
    
    for(let i=0;i<arr.length;i++){
        if(i===mid){
            arr2.push(element)
            
        }
        arr2.push(arr[i])
    }
    return arr2
    
}
console.log(addToMiddle([1,2,3,4,5,6,7], 0));

/*
    @func hasAtSymbol
    @param {string} email
    @return {boolean}
    @desc - return true if '@' present in string
    @example - hasAtSymbol('taq@karim.com'); // true
               hasAtSymbol('foobar'); // false
*/

/*
    @func capitalize
    @param {string} str
    @returns {string}
    
    @desc - capitalize the FIRST letter of string
    @example - capitalize('taq'); // 'Taq'
               capitalize('Taq'); // 'Taq'
*/

/*
    @func isAllUpperCased
    @param {string} str
    @returns {boolean}
    
    @desc - return true if all caps else false
    @example isAllUpperCased('TAQ'); // true
             isAllUpperCased('tAq'); // false
*/

/*
    @func capitalizeEachWord
    @param {string} str
    @returns {string}
    
    @desc - returns string with each WORD capitalized
    @example - capitalizeEachWord('the cow jumped over the fence')
               // 'The Cow Jumped Over The Fence'
*/

/*
    @func capitalizeEachWordWithExceptions
    @param {string} str
    @param {array} exceptions
    @returns {string}
    
    @desc - returns string with each WORD capitalized EXCEPT the exceptions
    @example - capitalizeEachWord(
                'the cow and a fox went on the trip', 
                ['the', 'and', 'a', 'on']
               )
               // 'The Cow and a Fox Went on the Trip'
*/

/*
    @func findAtMentions
    @param {string} tweet
    @returns {array}
    
    @desc - returns array with all the @mentions
    @example - 
        findAtMentions('@the_taqquikarim @someOtherGuy @etc this was a cool event @foobar')
        // ['the_taqquikarim', 'someOtherGuy', 'etc', 'foobar']
*/

/*
    @func roundToN
    @param {number} num
    @param {number} decimalPlaces
    @returns {number}
    
    @desc - rounds to the decimalPlaces
    @example - roundToN(1123.1234, 3); // 1123.123
*/
/*
    @func addArrays
    @param {array} arrays
    @returns {array}
    
    @desc - adds arrays together
    @example - addArrays([
        [1,2,3],
        [4,5],
        [6,7,8,9]
    ]); // [1,2,3,4,5,6,7,8,9]
*/


