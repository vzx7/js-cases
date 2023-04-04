function outerFunction() {
  let outerVariable = "Hello, world!";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();

closure(); // Выведет "Hello, world!"


function counter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment,
    decrement
  };
}

const counter1 = counter();
const counter2 = counter();

counter1.increment(); // Выведет 1
counter1.increment(); // Выведет 2
counter1.decrement(); // Выведет 1
counter2.increment(); // Выведет 1
counter2.increment(); // Выведет 2


function createLogger(tag) {
  const log = [];

  function addEntry(message) {
    const entry = { timestamp: new Date(), message };
    log.push(entry);
  }

  function getEntries() {
    return log.map(entry => `[${tag}] ${entry.timestamp.toISOString()}: ${entry.message}`);
  }

  return { addEntry, getEntries };
}

const logger1 = createLogger('App');
const logger2 = createLogger('Server');

logger1.addEntry('App started');
logger2.addEntry('Server started');
logger1.addEntry('User logged in');

console.log(logger1.getEntries());
console.log(logger2.getEntries());


function createLogger(tag) {
  const log = [];

  function addEntry(message) {
    const entry = { timestamp: new Date(), message };
    log.push(entry);
  }

  function getEntries() {
    return log.map(entry => `[${tag}] ${entry.timestamp.toISOString()}: ${entry.message}`);
  }

  return { addEntry, getEntries };
}

const logger1 = createLogger('App');
const logger2 = createLogger('Server');

logger1.addEntry('App started');
logger2.addEntry('Server started');
logger1.addEntry('User logged in');

console.log(logger1.getEntries());
console.log(logger2.getEntries());

// Ошибка: переменная log не определена
log.push('test');


function createCounter() {
  let count = 0;
  const obj = {
    increment: function() {
      count++;
      return obj;
    },
    decrement: function() {
      count--;
      return obj;
    },
    getCount: function() {
      return count;
    }
  };
  return obj;
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment().increment().decrement();
counter2.increment().decrement().increment().increment();

console.log(counter1.getCount()); // Ожидаемый результат: 1
console.log(counter2.getCount()); // Ожидаемый результат: 2



function generateSequence(start, step) {
  let count = start;
  return function getNext() {
    const current = count;
    count += step;
    return current;
  };
}

function generateFibonacci() {
  let prev = 0;
  let current = 1;
  return function getNext() {
    const result = current;
    current += prev;
    prev = result;
    return result;
  };
}

function createCache(fn) {
  const cache = new Map();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

const getNextFrom1 = generateSequence(1, 2);
const getNextFibonacci = generateFibonacci();
const getCachedFibonacci = createCache(getNextFibonacci);

console.log(getNextFrom1()); // Ожидаемый результат: 1
console.log(getNextFrom1()); // Ожидаемый результат: 3
console.log(getCachedFibonacci(5)); // Ожидаемый результат: 5
console.log(getCachedFibonacci(5)); // Ожидаемый результат: 5
console.log(getNextFibonacci()); // Ожидаемый результат: 8
console.log(getNextFibonacci()); // Ожидаемый результат: 13
console.log(getCachedFibonacci(4)); // Ожидаемый результат: 3


function outer() {
  let a = 10;
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a + b + c);
  }
  return inner;
}

let closureFunc = outer();
closureFunc();


function createCounter() {
  let count = 0;
  
  function increment() {
    count++;
    console.log(count);
  }
  
  function decrement() {
    count--;
    console.log(count);
  }
  
  return {
    increment,
    decrement
  };
}

const counter = createCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1


function randomGenerator(min, max) {
  let minVal = null;
  let maxVal = null;

  function generate() {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    if (minVal === null || num < minVal) {
      minVal = num;
    }

    if (maxVal === null || num > maxVal) {
      maxVal = num;
    }

    return num;
  }

  function getMin() {
    return minVal;
  }

  function getMax() {
    return maxVal;
  }

  return {
    generate,
    getMin,
    getMax
  };
}

const random = randomGenerator(0, 100);

console.log(random.generate()); // случайное число в диапазоне от 0 до 100
console.log(random.generate()); // еще одно случайное число в диапазоне от 0 до 100
console.log(random.getMin()); // минимальное число, которое было сгенерировано
console.log(random.getMax()); // максимальное число, которое было сгенерировано


