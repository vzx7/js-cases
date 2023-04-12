Этот алгоритм заключается в сортировке обоих массивов и последующем двухиндексном проходе по массивам. Мы начинаем с первых элементов в обоих массивах, и если они равны, то добавляем элемент в результат. Если элементы не равны, то двигаем индекс наименьшего элемента. Сложность алгоритма O(m log m + n log n), где m и n - размеры массивов.

```javascript
function intersection(arr1, arr2) {
  // сортируем оба массива
  arr1.sort();
  arr2.sort();

  // создаем массив для результата
  let result = [];

  // создаем два индекса для двухиндексного прохода
  let i = 0;
  let j = 0;

  // двухиндексный проход
  while (i < arr1.length && j < arr2.length) {
    // если элементы равны, то добавляем его в результат и переходим к следующим элементам в обоих массивах
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    }
    // если элемент первого массива меньше элемента второго массива, то переходим к следующему элементу в первом массиве
    else if (arr1[i] < arr2[j]) {
      i++;
    }
    // если элемент первого массива больше элемента второго массива, то переходим к следующему элементу во втором массиве
    else {
      j++;
    }
  }

  return result;
}
```
