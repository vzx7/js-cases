Двоичные и восьмеричные литералы - это способы записи чисел в JavaScript, которые были добавлены в ECMAScript 2015 (ES6).

Двоичные литералы позволяют представлять числа в двоичной системе счисления. Они начинаются с префикса "0b" или "0B", за которым следуют цифры 0 и 1. Например:
```javascript
let binaryNum = 0b1010; // 10
```

Восьмеричные литералы позволяют представлять числа в восьмеричной системе счисления. Они начинаются с префикса "0" (ноль), за которым следуют цифры от 0 до 7. Например:

```javascript
let octalNum = 0o16; // 14
```

Обратите внимание, что восьмеричные литералы больше не поддерживаются в режиме строгого соответствия ("use strict"), чтобы избежать путаницы с десятичными литералами, начинающимися с нуля.