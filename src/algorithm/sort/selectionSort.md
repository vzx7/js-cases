Сортировка выбором (Selection sort) - это простой алгоритм сортировки, который проходит по массиву данных несколько раз, выбирая каждый раз минимальный элемент и перемещая его в начало массива. Он считается наиболее простым алгоритмом сортировки, но не самым эффективным для больших объемов данных.

```javascript
function selectionSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    var minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      var tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }
  return arr;
}
```
В этом примере мы используем два вложенных цикла for, чтобы пройти по массиву данных. Внешний цикл выполняется n-1 раз, где n - это длина массива. Внутренний цикл ищет минимальный элемент в подмассиве, начинающемся с позиции i + 1, и меняет местами его со значением в позиции i, если это необходимо.

Хотя сортировка выбором является простым алгоритмом, он не является самым эффективным для больших массивов данных, так как имеет квадратичную сложность O(n^2).