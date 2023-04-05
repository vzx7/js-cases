const name = 'John';
const age = 25;

// использование шаблонной строки
const message = `Привет, меня зовут ${name} и мне ${age} лет!`;

console.log(message); // "Привет, меня зовут John и мне 25 лет!"



const multiLineMessage = `
  Привет, я многострочная шаблонная строка!
  Я могу содержать в себе выражения в фигурных скобках ${1 + 1}.
  И я могу быть очень длинной, но это не проблема для меня.
`;

console.log(multiLineMessage);
