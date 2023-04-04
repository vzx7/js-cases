/**
 * function currying
 * 
 * Простое каррирование - это когда функция принимает один аргумент и возвращает новую функцию, которая ожидает оставшиеся аргументы.
 */

function add (a) {
    return function (b) {
        return a + b;
    }
}

const addFive = add(5);
console.log(addFive(3)); // Output: 8

/**
 * Каррирование с фиксированным количеством аргументов - это когда мы хотим создать новую функцию, которая имеет фиксированное количество аргументов, и каждый раз, когда мы вызываем эту функцию, она ожидает только оставшиеся аргументы.
 */

function multiply (a, b) {
    return function (c) {
        return a * b * c;
    }
}

const multiplyBySix = multiply(2, 3);
console.log(multiplyBySix(4)); // Output: 24


/**
 * Каррирование с переменным количеством аргументов - это когда мы хотим создать новую функцию, которая может принимать переменное количество аргументов.
 */

function sum (a) {
    let currentSum = a;

    function innerSum (b) {
        currentSum += b;
        return innerSum;
    }

    innerSum.toString = function () {
        return currentSum;
    }

    return innerSum;
}

console.log(sum(1)(2)(3)(4)(5)); // Output: 15


/**
 * Автокаррирование - это каррирование функции, которая может принимать любое количество аргументов.
 */


function add () {
    const args = Array.from(arguments);
    const sum = args.reduce((acc, val) => acc + val, 0);

    const inner = function () {
        const innerArgs = Array.from(arguments);
        const innerSum = innerArgs.reduce((acc, val) => acc + val, 0);
        return add(sum + innerSum);
    };

    inner.valueOf = function () {
        return sum;
    }

    return inner;
}

console.log(add(1, 2, 3)(4, 5)(6)(7, 8, 9) + 10); // Output: 55
