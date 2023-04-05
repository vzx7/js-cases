/**
 * Итераторы - это механизм перебора элементов коллекции (например, массива) по одному. Итератор предоставляет метод next(), который возвращает следующий элемент коллекции и флаг, указывающий, была ли коллекция перебрана полностью.
 */
{
    const arr = [1, 2, 3];
    const iterator = arr[Symbol.iterator]();

    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.next()); // { value: 2, done: false }
    console.log(iterator.next()); // { value: 3, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }
}


/**
 * return(): метод вызывается, чтобы завершить итерацию и возвратить определенное значение.
 */
{
    const arr = [1, 2, 3];
    const iterator = arr[Symbol.iterator]();

    console.log(iterator.next()); // { value: 1, done: false }
    console.log(iterator.return()); // { value: undefined, done: true }
    console.log(iterator.next()); // { value: undefined, done: true }
}

/**
 * throw(): метод вызывается, чтобы сгенерировать ошибку в итераторе.
 */

{
    function* generateSequence () {
        try {
            yield 1;
            yield 2;
            yield 3;
        } catch (e) {
            console.log(e.message);
        }
    }

    const generator = generateSequence();

    console.log(generator.next()); // { value: 1, done: false }
    console.log(generator.throw(new Error('Something went wrong'))); // logs "Something went wrong"
    console.log(generator.next()); // { value: undefined, done: true }

}

/**
 * Symbol.iterator: это свойство объекта, которое возвращает сам итератор.
 */

{
    const arr = [1, 2, 3];
    const iterator = arr[Symbol.iterator]();

    console.log(iterator[Symbol.iterator]() === iterator); // true
}
/**
 * Кроме того, итераторы могут быть определены для пользовательских объектов и классов. Для этого нужно определить метод Symbol.iterator в объекте или классе, который должен возвращать объект итератора с методом next().
 */
{
    const myObject = {
        data: [1, 2, 3],
        [Symbol.iterator] () {
            let index = 0;
            return {
                next: () => {
                    if (index < this.data.length) {
                        return { value: this.data[index++], done: false };
                    } else {
                        return { done: true };
                    }
                }
            };
        }
    };

    for (let item of myObject) {
        console.log(item);
    }
    // Output:
    // 1
    // 2
    // 3

}

/**
 * Метод entries() возвращает итератор, который перебирает массив вместе с его ключами.
 */
{
    const arr = ['a', 'b', 'c'];
    const iterator = arr.entries();

    for (let [index, value] of iterator) {
        console.log(`${index}: ${value}`);
    }
    // Output:
    // 0: a
    // 1: b
    // 2: c
}

/**
 * Метод keys() возвращает итератор, который перебирает индексы элементов массива.
 */
{
    const arr = ['a', 'b', 'c'];
    const iterator = arr.keys();

    for (let key of iterator) {
        console.log(key);
    }
    // Output:
    // 0
    // 1
    // 2

}

/**
 * Метод values() возвращает итератор, который перебирает значения элементов массива.
 */
{
    const arr = ['a', 'b', 'c'];
    const iterator = arr.values();

    for (let value of iterator) {
        console.log(value);
    }
    // Output:
    // a
    // b
    // c

}


