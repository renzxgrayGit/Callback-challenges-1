/* Foreach */
/* Create a function called foreach where the following code would work the way described below. 
Submit your assignment by attaching JS file. */
// 1.
/* function foreach(array, callback) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

let result = foreach([1,2,3,4,5], function(num) {
                return num*2; });
console.log(result); */ //this should log [2,4,6,8,10]

// 2.
/* function foreach(array, callback) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

result = foreach([1,2,3,"v88", "training"], function(val) { 
            if(typeof(val) === 'number') { 
        return 0;
    }
    else {
        return val;
    }
});
console.log(result); */ //this should log [0,0,0,"v88","training"];

// 3.
/* function foreach(array, callback) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

result = foreach([1,2,3,"hello"], function(val) { 
            return typeof(val); });
console.log(result); */ //this should log ["number", "number", "number", "string"];


/* Filter */
/* Create a function called filter where it filters out any value in the array 
that doesn't meet the condition as specified in the callback function.  For example, */
/*1*/
/* function filter(array, callback) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

let result = filter([1,2,3,4,15], function(val) {
                return val < 10; }); //this filters each value in the array and only allows values that are less than 10
console.log(result); */ //this should log [1,2,3,4]

/*2*/
/* function filter(array, callback) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

let result = filter([1,2,3,4,15], function(val) {
                return val < 3; }); //only allows values that is less than 3
console.log(result); */ //this should log [1,2]


/* Reject */
/* Create a function called reject that acts the opposite of the filter function. For example, 
have it reject any value in the array that meets the requirement specified in the callback function. For example, */
/*1*/
/* function reject(array, callback) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(!callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

let result = reject([1,2,3,4,15], function(val) { 
                return val<10; }); //rejects any value that is less than 10
console.log(result); */ //this should log [15]

/*2*/
/* function reject(array, callback) {
    let result = [];
    for(let i = 0; i < array.length; i++) {
        if(!callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

let result = reject([1,2,3,4,15], function(val) { 
                return val < 3; }); //rejects any value that is less than 3
console.log(result); */ //this should log [3,4,15]