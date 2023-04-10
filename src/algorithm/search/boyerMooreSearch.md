### Алгоритм Бойера-Мура (Boyer-Moore)

```javascript
function boyerMoore(text, pattern) {
  const patternLength = pattern.length;
  const textLength = text.length;

  // Создаем таблицу смещений
  const shifts = new Array(256).fill(patternLength);
  for (let i = 0; i < patternLength - 1; i++) {
    shifts[pattern.charCodeAt(i)] = patternLength - i - 1;
  }

  // Ищем вхождения
  let i = patternLength - 1;
  while (i < textLength) {
    let j = patternLength - 1;
    while (text.charAt(i) === pattern.charAt(j)) {
      if (j === 0) {
        return i;
      }
      i--;
      j--;
    }
    i += Math.max(shifts[text.charCodeAt(i)], patternLength - j);
  }

  return -1;
}
```
В этом коде мы сначала создаем таблицу смещений для подстроки pattern, которая определяет, насколько мы можем сдвинуть подстроку, если встретим несоответствие с символом в тексте. Затем мы проходим по тексту и сравниваем символы с подстрокой справа налево. Если мы находим несоответствие, мы используем таблицу смещений, чтобы сдвинуть подстроку на максимально возможное количество позиций и продолжить поиск. Если мы находим подстроку, мы возвращаем индекс, с которого она начинается в тексте. Если мы доходим до конца текста и не находим подстроку, мы возвращаем -1.
