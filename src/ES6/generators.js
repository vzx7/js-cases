{
    function* generateSequence () {
        yield 1;
        yield 2;
        yield 3;
    }

    const generator = generateSequence();

    console.log(generator.next()); // { value: 1, done: false }
    console.log(generator.next()); // { value: 2, done: false }
    console.log(generator.next()); // { value: 3, done: false }
    console.log(generator.next()); // { value: undefined, done: true }
}

/**
 *     return(): этот метод позволяет завершить    выполнение генератора и возвратить значение из генератора. Вызов метода return() приводит к завершению работы генератора и возвращению значения, переданного в качестве аргумента методу return().

    throw(): этот метод позволяет выбросить исключение внутри генератора. Вызов метода throw() приводит к генерации исключения внутри генератора и перехвату его в ближайшем блоке try...catch внутри генератора.
 */

{
    function* myGenerator () {
        try {
            yield 1;
            yield 2;
            yield 3;
        } catch (error) {
            console.log('Caught error:', error);
        }
    }

    const gen = myGenerator();
    console.log(gen.next()); // { value: 1, done: false }
    console.log(gen.return(4)); // { value: 4, done: true }
    console.log(gen.next()); // { value: undefined, done: true }

    const gen2 = myGenerator();
    console.log(gen2.next()); // { value: 1, done: false }
    console.log(gen2.throw(new Error('Something went wrong.'))); // Caught error: Error: Something went wrong.
    console.log(gen2.next()); // { value: undefined, done: true }

}