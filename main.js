//! Task 1
let array = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
let votedCount = array.reduce((accumulator, currentValue) => {
    if (currentValue.voted) {
        return accumulator + 1; 
    } else {
        return accumulator; 
    }
}, 0); 
console.log(votedCount); 



//! Task 2
let wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
let priceCounter = wishlist.reduce((accumulator, product)=>{
    return accumulator + product.price
}, 0)
console.log(priceCounter);


//! Task 3
function findUzunSoz(str) {
    let words = str.split(' ');
    let uzunSozLength = 0;
    let uzunSozIndex = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > uzunSozLength) {
            uzunSozLength = words[i].length;
            uzunSozIndex = i;
        }
    }
    return words[uzunSozIndex];
}

let str = 'Web Development Tutorial';
console.log(findUzunSoz(str)); 



//! Task 4
function capitalizeWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    console.log(words);
    let result = words.join(' ');
    
    return result;
}
console.log(capitalizeWords('js string exercises')); 



//! Task 5
function truncate(str, numWords) {
    let words = str.split(' ');
    let truncatedWords = words.slice(0, numWords);
    let result = truncatedWords.join(' ');
    return result;
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); 

