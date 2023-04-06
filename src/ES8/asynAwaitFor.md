```javascript
async function asyncFunction () {
    const asyncIterable = createAsyncIterable(['one', 'two', 'three']);
    for await (const value of asyncIterable) {
        console.log(value);
    }
}

async function* createAsyncIterable (array) {
    for (let i = 0; i < array.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield array[i];
    }
}

asyncFunction();
```


Здесь создается асинхронный итерируемый объект asyncIterable и происходит итерация по нему с помощью цикла for-await-of. Внутри цикла используется ключевое слово await, чтобы ждать завершения каждой асинхронной операции перед переходом к следующей итерации.

Несмотря на то, что for-await-of был добавлен в ES8, поддержка async/await доступна в более ранних версиях ECMAScript (ES7 и более поздних). Однако, использование async/await в цикле for-await-of требует версии ECMAScript не ниже ES8.