Битовые множества - это способ хранения множества элементов в виде последовательности битов, где каждый бит представляет наличие или отсутствие соответствующего элемента. Этот подход может использоваться для пересечения нескольких множеств.

Алгоритм можно реализовать следующим образом:

1. Создаем массив битовых множеств для каждого из входных массивов.
2. Инициализируем результат пустым множеством.
3. Для каждого элемента диапазона значений, создаем битовое множество, которое будет использоваться для поиска этого элемента в каждом из входных множеств.
4. Для каждого из входных множеств выполняем побитовое "и" с битовым множеством, соответствующим текущему элементу диапазона.
5. Если результат побитового "и" для всех входных множеств не равен нулю, то добавляем текущий элемент в результат.

```javascript
function intersection(arrays) {
  const bitArrays = arrays.map(arr => {
    const bitArray = new Uint32Array(Math.ceil(arr.length / 32));
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      const index = value >> 5;
      const mask = 1 << (value & 31);
      bitArray[index] |= mask;
    }
    return bitArray;
  });
  
  const result = [];
  
  for (let i = 0; i < 32 * bitArrays.length; i++) {
    const index = i >> 5;
    const mask = 1 << (i & 31);
    let intersection = true;
    for (let j = 0; j < bitArrays.length; j++) {
      if ((bitArrays[j][index] & mask) === 0) {
        intersection = false;
        break;
      }
    }
    if (intersection) {
      result.push(i);
    }
  }
  
  return result;
}
```

Здесь используется Uint32Array для хранения битовых множеств. Каждое значение из исходных массивов сдвигается на 5 бит вправо, чтобы получить индекс соответствующего бита в битовом множестве, и на 31 бит влево, чтобы получить маску для установки этого бита в битовом множестве. При пересечении проверяется наличие бита в каждом из битовых множеств с помощью побитового "и" и маски. Если результат не равен нулю, то элемент добавляется в результат.