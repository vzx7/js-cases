let myMap = new Map();

myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

console.log(myMap.get("key1")); // выведет "value1"
console.log(myMap.has("key2")); // выведет true
console.log(myMap.size); // выведет 3

myMap.forEach(function (value, key) {
    console.log(key + " = " + value);
});

myMap.delete("key3");
console.log(myMap.size); // выведет 2

/// SET

let mySet = new Set();

mySet.add("value1");
mySet.add("value2");
mySet.add("value3");

console.log(mySet.has("value2")); // выведет true
console.log(mySet.size); // выведет 3

mySet.forEach(function (value) {
    console.log(value);
});

mySet.delete("value3");
console.log(mySet.size); // выведет 2
