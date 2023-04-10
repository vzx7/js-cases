### Алгоритм Кнута-Морриса-Пратта (KMP)

Алгоритм для поиска всех вхождений подстроки в строку за линейное время. Требует предварительной обработки подстроки.

```javascript
function KMPSearch(str, substr) {
  let matches = [];
  let lps = getLPS(substr);
  let i = 0; // индекс строки
  let j = 0; // индекс подстроки
  while (i < str.length) {
    if (str[i] === substr[j]) {
      i++;
      j++;
    }
    if (j === substr.length) {
      matches.push(i - j);
      j = lps[j - 1];
    } else if (i < str.length && str[i] !== substr[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return matches;
}

// функция для получения префикс-функции
function getLPS(substr) {
  let lps = new Array(substr.length).fill(0);
  let len = 0;
  let i = 1;
  while (i < substr.length) {
    if (substr[i] === substr[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}

// пример использования
let str = "hello world";
let substr = "l";
let matches = KMPSearch(str, substr);
console.log(matches); // [2, 3, 9]
```


