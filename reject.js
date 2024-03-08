function reject(array, callback) {
    let new_array = [];
    for(let i = 0; i < array.length; i++) {
        if(!callback(array[i])) {
            new_array.push(array[i])
        }
    }
    return new_array;
}

/*1*/
let result = reject([1,2,3,4,15], function(val) {
                return val<10; }); //rejects any value that is less than 10
console.log(result); //this should log [15]

/*2*/
result = reject([1,2,3,4,15], function(val) {
            return val<3; }); //rejects any value that is less than 3
console.log(result); //this should log [3,4,15]