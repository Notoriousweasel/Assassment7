const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results
// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

console.log('Results for the tiny array');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


perf.start();                     
doublerAppend(smallArray);
 resultsAppend = perf.stop();  

perf.start();
doublerInsert(smallArray);
 resultsInsert = perf.stop();

console.log('Results for the small array');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


perf.start();
doublerAppend(mediumArray);
resultsAppend = perf.stop();

perf.start();
doublerInsert(mediumArray);
resultsInsert = perf.stop();

console.log('Results for medium array');
console.log('insert', resultsInsert.preciseWords);
console.log('append', resultsAppend.preciseWords);


perf.start();                     
doublerAppend(largeArray);
 resultsAppend = perf.stop();  

perf.start();
doublerInsert(largeArray);
 resultsInsert = perf.stop();

console.log('Results for the large array');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


perf.start();                     
doublerAppend(extraLargeArray);
 resultsAppend = perf.stop();  

perf.start();
doublerInsert(extraLargeArray);
 resultsInsert = perf.stop();

console.log('Results for the extra large array');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// Results for the tiny array
// insert 40.6 μs
// append 102.6 μs
// Results for the small array
// insert 13.9 μs
// append 13.8 μs
// Results for medium array
// insert 150.5 μs
// append 43.8 μs
// Results for the large array
// insert 12.6904 ms
// append 397.2 μs
// Results for the extra large array
// insert 1.3520304 s
// append 4.2905 ms
