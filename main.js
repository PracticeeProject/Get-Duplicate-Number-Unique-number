// ---------------------------------
// কিভাবে Duplicate সংখ্যা বের করবো ।
// ---------------------------------

const nuumbers = [1,3,2,9,7,2,6,5,9,1,7];

duplicateNumber = nuumbers.filter(function(value,index,array){
    return array.indexOf(value) !== index;
    
});

console.log(duplicateNumber);

// ---------------------------------------
// কিভাবে প্রতিটি সংখ্যা একটি করে বের করবো ।
// ---------------------------------------

const numbers = [1,3,2,9,7,2,6,5,9,1,7];

uniqueNumber = numbers.filter(function(value,index,array){
    return array.indexOf(value) === index;
    
});

console.log(uniqueNumber);

