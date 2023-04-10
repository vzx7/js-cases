### Линейный поиск
```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Пример использования
const myArr = [1, 2, 3, 4, 5];
const targetValue = 3;
const index = linearSearch(myArr, targetValue); // Вернет 2
```

В этом примере функция linearSearch принимает два аргумента: массив, в котором нужно найти элемент, и значение, которое нужно найти. Функция использует цикл for для прохода по всем элементам массива, и если находит элемент, равный искомому значению, возвращает его индекс. Если элемент не найден, возвращает -1.
