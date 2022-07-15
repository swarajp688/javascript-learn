console.log('hello world');
//currying
const sum = function(a){
    return function(b){
        if(b === undefined){
            return a;
        }
        return sum(a+b);
    }
}
// es6
// const add = a => b => b ? sum(a+b) : a;
console.log(sum(1)(2)(3)());