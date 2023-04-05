/**
 * Прокси (Proxy) - это объект, который оборачивает другой объект (целевой объект) и может перехватывать и изменять различные операции с ним. Он предоставляет общий способ для создания ловушек, которые могут перехватывать и обрабатывать доступ к свойствам и методам целевого объекта.

Примеры использования прокси:

    Валидация и фильтрация данных, которые передаются в объект
    Отслеживание изменений в объекте
    Добавление логирования операций с объектом
    Обеспечение доступа к свойствам объекта только для определенных пользователей
    Имитация интерфейсов классов в JavaScri
 */
let target = {
    name: 'John',
    age: 30,
};

let handler = {
    get: function (target, property) {
        console.log(`Getting ${property} property`);
        return target[property];
    },
    set: function (target, property, value) {
        console.log(`Setting ${property} property to ${value}`);
        target[property] = value;
    },
};

let proxy = new Proxy(target, handler);

console.log(proxy.name); // Getting name property, John
proxy.age = 40; // Setting age property to 40
console.log(proxy.age); // Getting age property, 40
