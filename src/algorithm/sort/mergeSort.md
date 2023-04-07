Сортировка слиянием (Merge sort) - это эффективный алгоритм сортировки, который использует принцип "разделяй и властвуй". Он разбивает массив данных на меньшие подмассивы, затем сортирует каждый из этих подмассивов и объединяет их в один отсортированный массив.

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

В этом примере мы используем рекурсию для разделения массива данных на меньшие подмассивы, затем мы сортируем каждый из этих подмассивов и объединяем их в отсортированный массив. В функции merge мы сравниваем элементы из левого и правого подмассивов и добавляем их в результирующий массив в порядке возрастания.

Сортировка слиянием имеет более лучшую производительность, чем сортировка пузырьком, сортировка выбором и сортировка вставками, так как имеет сложность O(n log n). Однако, она требует больше дополнительной памяти для хранения промежуточных массивов, чем другие алгоритмы сортировки.