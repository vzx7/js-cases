// Обычное определение функции
function add (a, b) {
    return a + b;
}

// Определение стрелочной функции
const add = (a, b) => a + b;

{
    const person = {
        name: 'Джон',
        greet: function () {
            console.log(`Привет, меня зовут ${this.name}`);
        }
    }

    person.greet(); // Привет, меня зовут Джон
}

{
    // То же самое с использованием стрелочной функции
    const person = {
        name: 'Джон',
        greet: () => console.log(`Привет, меня зовут ${this.name}`)
    }

    person.greet(); // Привет, меня зовут undefined
}

