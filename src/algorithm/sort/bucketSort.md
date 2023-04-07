Карманная сортировка (Bucket sort) - это алгоритм сортировки, который основан на распределении элементов массива по "карманам" (бакетам), затем каждый бакет сортируется отдельно. Этот алгоритм эффективен, когда входные данные распределены равномерно на некотором интервале.

```javascript
function bucketSort(arr, bucketSize) {
  if (arr.length === 0) {
    return arr;
  }

  // Находим минимальное и максимальное значения в массиве
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  // Рассчитываем количество бакетов
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount);

  // Распределяем элементы по бакетам
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    let bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  // Сортируем каждый бакет и объединяем результаты
  let sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    let bucket = buckets[i];
    insertionSort(bucket);
    sortedArray = sortedArray.concat(bucket);
  }

  return sortedArray;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}

// Пример использования
let arr = [29, 25, 3, 49, 9, 37, 21, 43];
console.log(bucketSort(arr, 10)); // [3, 9, 21, 25, 29, 37, 43, 49]
```
В данном примере мы сначала находим минимальное и максимальное значения в массиве, затем рассчитываем количество бакетов и распределяем элементы по ним. Далее мы сортируем каждый бакет с помощью сортировки вставками и объединяем результаты. Сложность карманной сортировки зависит от используемого алгоритма сортировки для сортировки каждого бакета. Если используется сортировка вставками, то сложность будет O(n^2), если быстрая сортировка, то O(n log n).
