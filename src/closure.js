/**
 * В этом примере функция outerFunction определяет переменную outerVariable и возвращает вложенную функцию innerFunction, которая имеет доступ к этой переменной, даже после того, как outerFunction завершена свое выполнение.

Функция outerFunction и переменная outerVariable являются замыканием, которое позволяет функции innerFunction сохранять доступ к контексту выполнения outerFunction.
 * @returns 
 */

function outerFunction () {
  let outerVariable = "Hello, world!";

  function innerFunction () {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();

closure(); // Выведет "Hello, world!"

/////////////////////////////////////////////////////////

/**
 * В этом примере функция counter определяет переменную count и возвращает объект с двумя методами increment и decrement, которые увеличивают и уменьшают значение count соответственно.

Обратите внимание, что каждый раз, когда вызывается функция counter, создается новое замыкание со своей собственной переменной count. В результате, когда мы создаем два экземпляра counter (counter1 и counter2), каждый из них имеет свое собственное значение count.

Этот пример демонстрирует, как замыкания могут быть использованы для создания функций с сохранением состояния, которые могут быть использованы в разных контекстах выполнения.
 * @returns 
 */

function counter () {
  let count = 0;

  function increment () {
    count++;
    console.log(count);
  }

  function decrement () {
    count--;
    console.log(count);
  }

  return {
    increment,
    decrement
  };
}


{
  const counter1 = counter();
  const counter2 = counter();

  counter1.increment(); // Выведет 1
  counter1.increment(); // Выведет 2
  counter1.decrement(); // Выведет 1
  counter2.increment(); // Выведет 1
  counter2.increment(); // Выведет 2
}

//////////////////////////////////////////////////////////////

/**
 * В этом примере функция createLogger создает объект логгера с методами addEntry и getEntries. Каждый логгер имеет свой тег (tag) и свой массив записей лога (log). Метод addEntry добавляет запись в лог, а метод getEntries возвращает массив строк с записями лога в формате [tag] timestamp: message.

Когда мы создаем два логгера (logger1 и logger2) с разными тегами, каждый из них имеет свой собственный массив записей лога, но использует одинаковые методы addEntry и getEntries.

Этот пример демонстрирует, как замыкания могут быть использованы для создания объектов с закрытыми переменными, которые могут быть использованы для сохранения и обработки данных внутри функции. Кроме того, он показывает, как замыкания могут быть использованы для создания объектов с одинаковым интерфейсом, но разным состоянием, которые могут быть использованы в разных контекстах выполнения.
 * @param {*} tag 
 * @returns 
 */

function createLogger (tag) {
  const log = [];

  function addEntry (message) {
    const entry = { timestamp: new Date(), message };
    log.push(entry);
  }

  function getEntries () {
    return log.map(entry => `[${tag}] ${entry.timestamp.toISOString()}: ${entry.message}`);
  }

  return { addEntry, getEntries };
}

{
  const logger1 = createLogger('App');
  const logger2 = createLogger('Server');

  logger1.addEntry('App started');
  logger2.addEntry('Server started');
  logger1.addEntry('User logged in');

  console.log(logger1.getEntries());
  console.log(logger2.getEntries());
}

/////////////////////////////////////////////

/**
 * В этом коде есть две ошибки. Первая ошибка заключается в том, что переменная log не определена в глобальной области видимости, поэтому попытка обращения к ней вне функции createLogger приводит к ошибке.

Вторая ошибка заключается в том, что метод push вызывается на переменной log, которая является массивом. Метод push не определен для массивов возвращаемых функцией getEntries, поэтому вызов метода push на массиве log приведет к ошибке.

Эти ошибки могут быть использованы для задачи на собеседовании, где кандидатам будет предложено найти и исправить ошибки в коде.
 * @param {*} tag 
 * @returns 
 */
function createLogger (tag) {
  const log = [];

  function addEntry (message) {
    const entry = { timestamp: new Date(), message };
    log.push(entry);
  }

  function getEntries () {
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

/////////////////////////////////////////////////////////


/**
 * Этот код создает объект obj, который содержит методы increment, decrement и getCount. Методы increment и decrement изменяют значение переменной count, которая находится в замыкании функции createCounter, и возвращают объект obj, чтобы обеспечить возможность выполнения методов цепочкой.

Эта задача может быть использована для оценки понимания кандидатом замыканий и объектов в JavaScript, а также их способности проектировать и реализовывать сложные объекты и методы.
 * @returns 
 */
function createCounter () {
  let count = 0;
  const obj = {
    increment: function () {
      count++;
      return obj;
    },
    decrement: function () {
      count--;
      return obj;
    },
    getCount: function () {
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

///////////////////////////////////////////////////////////////

/**
 * Этот код создает три функции, которые используют замыкания, чтобы создать последовательности чисел и кэшировать результаты.

Функция generateSequence создает функцию, которая возвращает следующее число в последовательности с указанным начальным значением и шагом.

Функция generateFibonacci создает функцию, которая возвращает следующее число в последовательности Фибоначчи.

Функция createCache принимает функцию и возвращает новую функцию, которая кэширует результаты вызовов функции в объекте Map. Если вызов производится с тем же аргументом, что и ранее, функция возвращает закэшированный результат 

вместо повторного выполнения вычислений.

Эта задача может быть использована для оценки понимания кандидатом замыканий, создания функций высшего порядка и их применения для создания сложных объектов и методов.

 * @param {*} start 
 * @param {*} step 
 * @returns 
 */

function generateSequence (start, step) {
  let count = start;
  return function getNext () {
    const current = count;
    count += step;
    return current;
  };
}

function generateFibonacci () {
  let prev = 0;
  let current = 1;
  return function getNext () {
    const result = current;
    current += prev;
    prev = result;
    return result;
  };
}

function createCache (fn) {
  const cache = new Map();
  return function (arg) {
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


////////////////////////////////////////////////////////////////////////////


/**
 * В данном примере функция randomGenerator возвращает объект с методами generate, getMin и getMax. При каждом вызове метода generate генерируется случайное число в заданном диапазоне и запоминаются минимальное и максимальное значения. Методы getMin и getMax позволяют получить соответствующие значения.
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */


function randomGenerator (min, max) {
  let minVal = null;
  let maxVal = null;

  function generate () {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    if (minVal === null || num < minVal) {
      minVal = num;
    }

    if (maxVal === null || num > maxVal) {
      maxVal = num;
    }

    return num;
  }

  function getMin () {
    return minVal;
  }

  function getMax () {
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


