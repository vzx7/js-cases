Сортировка пузырьком (Bubble sort) - это простой алгоритм сортировки, который проходит по массиву данных несколько раз, сравнивая пары значений и меняя их местами в случае необходимости. Он получил свое название благодаря тому, что более крупные элементы "всплывают" вверх по массиву, как пузырьки в воде.

```javascript
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
```

В этом примере мы используем два вложенных цикла for, чтобы пройти по массиву данных. Внешний цикл выполняется n раз, где n - это длина массива. Внутренний цикл сравнивает каждую пару значений и меняет их местами, если первый элемент больше второго.

Хотя сортировка пузырьком является простым и понятным алгоритмом, он не является самым эффективным для больших массивов данных, так как имеет квадратичную сложность O(n^2).