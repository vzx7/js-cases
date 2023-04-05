/**
 * 
 * Reflect - это встроенный объект в JavaScript, который предоставляет набор методов для операций метапрограммирования, таких как создание прокси-объектов, перехват вызовов методов, установка свойств и т.д. Он является частью стандарта ECMAScript 6 и является альтернативой для глобальных функций, таких как Object.defineProperty() и Object.setPrototypeOf().

Некоторые методы Reflect:

    Reflect.apply(target, thisArgument, argumentsList): Вызывает функцию target с thisArgument в качестве this и argumentsList в качестве аргументов.
    Reflect.construct(target, argumentsList, newTarget): Создает новый экземпляр target с аргументами argumentsList и, если указан, прототипом newTarget.
    Reflect.defineProperty(target, propertyKey, attributes): Определяет свойство с именем propertyKey в объекте target с атрибутами attributes.
    Reflect.get(target, propertyKey, receiver): Возвращает значение свойства с именем propertyKey из объекта target или его прототипа, если оно доступно. Если receiver определен, то значение свойства this будет установлено на receiver.
    Reflect.set(target, propertyKey, value, receiver): Устанавливает значение свойства с именем propertyKey в объекте target. Если свойство не существует, оно будет создано. Если receiver определен, то значение свойства this будет установлено на receiver.
    Reflect.has(target, propertyKey): Возвращает true, если объект target имеет свойство с именем propertyKey, в противном случае - false.
    Reflect.deleteProperty(target, propertyKey): Удаляет свойство с именем propertyKey из объекта target.
    Reflect.getPrototypeOf(target): Возвращает прототип объекта target.
    Reflect.setPrototypeOf(target, prototype): Устанавливает прототип объекта target на prototype.
 */
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

const jane = new Person("Jane");
const john = Reflect.construct(Employee, ["John", "Manager"], Person);
console.log(jane instanceof Person); // true
console.log(jane instanceof Employee); // false
console.log(john instanceof Person); // true
console.log(john instanceof Employee); // true
