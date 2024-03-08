/*1*/
function filter(array, callback) {
    let new_array = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            new_array.push(array[i]);
        }
    }
    return new_array;
}

let result = filter([1,2,3,4,15], function(val) {
                return val<10; }); //this filters each value in the array and only allows values that are less than 10
console.log(result); //this should log [1,2,3,4]

/*2*/
result = filter([1,2,3,4,15], function(val) {
            return val<3; }); //only allows values that is less than 3
console.log(result); //this should log [1,2]