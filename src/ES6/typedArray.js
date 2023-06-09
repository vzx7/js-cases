/**
 * Массивы TypedArray - это массивы, элементы которых имеют фиксированный размер и тип, заданный при создании массива. В JavaScript существуют следующие типизированные массивы:

    Int8Array
    Uint8Array
    Uint8ClampedArray
    Int16Array
    Uint16Array
    Int32Array
    Uint32Array
    Float32Array
    Float64Array
    BigInt64Array
    BigUint64Array

Каждый из этих типов массивов имеет свои особенности, но общим для них является то, что они позволяют более эффективно хранить и обрабатывать большие объемы числовых данных.

Пример создания Uint8Array:
 */

const uint8array = new Uint8Array([1, 2, 3, 4, 5]);
console.log(uint8array); // Uint8Array [ 1, 2, 3, 4, 5 ]

/**
 * Некоторые методы, которые доступны только для TypedArray:

    set(): позволяет копировать значения из одного TypedArray в другой, начиная с указанного индекса.
    subarray(): создает новый TypedArray, который ссылается на те же элементы в исходном TypedArray, но только в определенном диапазоне индексов.
    slice(): создает новый TypedArray, который является копией части исходного TypedArray, начиная с определенного индекса и заканчивая другим индексом.
    buffer(): возвращает ArrayBuffer, на котором основан данный TypedArray.
    byteOffset(): возвращает смещение байтов данного TypedArray в ArrayBuffer, на котором он основан.
    byteLength(): возвращает размер данного TypedArray в байтах.
    length: количество элементов в данном TypedArray (аналогично свойству length у обычных массивов).

Заметьте, что некоторые методы, такие как forEach, map, filter, reduce и другие методы, доступны как у обычных массивов, так и у TypedArray, поскольку TypedArray является частным случаем массива.
 */
