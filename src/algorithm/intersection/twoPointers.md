

```javascript
function intersectArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  
  return result;
}
```

В этом алгоритме мы двигаем два указателя i и j по отсортированным массивам arr1 и arr2. Если элемент arr1[i] меньше, чем элемент arr2[j], то мы сдвигаем указатель i, так как элементы в arr1 отсортированы по возрастанию и все элементы после arr1[i] также будут меньше, чем arr2[j]. Если элемент arr1[i] больше, чем элемент arr2[j], то мы сдвигаем указатель j. И если элементы равны, то мы добавляем элемент в результирующий массив и двигаем оба указателя.
