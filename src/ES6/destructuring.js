/** Деструктурирование массива */
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3


/** Деструктурирование объекта */
{
    const obj = { name: 'John', age: 30 };
    const { name, age } = obj;

    console.log(name); // John
    console.log(age); // 30
}

/** Деструктурирование объекта с использованием псевдонимов */
{
    const obj = { name: 'John', age: 30 };
    const { name: fullName, age: years } = obj;

    console.log(fullName); // John
    console.log(years); // 30
}

/**  Деструктурирование объекта с использованием значений по умолчанию */

{
    const obj = { name: 'John' };
    const { name, age = 30 } = obj;

    console.log(name); // John
    console.log(age); // 30
}

/** Деструктурирование вложенных объектов и массивов */
{
    const obj = {
        name: 'John',
        age: 30,
        address: {
            city: 'New York',
            country: 'USA'
        },
        hobbies: ['reading', 'traveling']
    };

    const { name, address: { city }, hobbies: [hobby1, hobby2] } = obj;

    console.log(name); // John
    console.log(city); // New York
    console.log(hobby1); // reading
    console.log(hobby2); // traveling
}


