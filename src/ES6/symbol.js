const sym1 = Symbol();
const sym2 = Symbol("mySymbol");

console.log(typeof sym1); // "symbol"
console.log(typeof sym2); // "symbol"

const obj = {
    [sym1]: "value1",
    [sym2]: "value2"
};

console.log(obj[sym1]); // "value1"
console.log(obj[sym2]); // "value2"
