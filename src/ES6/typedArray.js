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
