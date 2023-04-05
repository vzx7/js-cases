/** Инициализация свойств объекта с помощью переменных */

const x = 10;
const y = 20;

const point = { x, y }; // то же самое, что { x: x, y: y }


/** Вычисляемые имена свойств объекта */

const propName = 'foo';
const obj = { [propName]: 'bar' }; // то же самое, что { foo: 'bar' }

/**  Короткая запись методов объекта */
{
    const obj = {
        foo () {
            console.log('bar');
        }
    };

}

/** Короткая запись вычисляемых методов объекта */

{
    const obj = {
        ['foo' + 'bar'] () {
            console.log('baz');
        }
    };
}

/** Распространение объектов */

const obj1 = { foo: 'bar' };
const obj2 = { ...obj1, baz: 'qux' }; // то же самое, что { foo: 'bar', baz: 'qux' }

/** Остаточные параметры */

function foo ({ a, b, ...rest }) {
    console.log(a, b, rest);
}

foo({ a: 1, b: 2, c: 3, d: 4 }); // 1 2 { c: 3, d: 4 }

