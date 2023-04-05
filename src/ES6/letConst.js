// Использование ключевого слова var
var x = 10;
if (true) {
    var x = 20;
}
console.log(x); // 20

// Использование ключевого слова let
let y = 10;
if (true) {
    let y = 20;
}
console.log(y); // 10

// Использование ключевого слова const
const z = 10;
// Нельзя изменить значение константы
// z = 20; // Ошибка: "Assignment to constant variable."
