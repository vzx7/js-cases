### Встроенные методы поиска подстроки

Метод indexOf() - встроенный метод для поиска первого вхождения подстроки в строку. Возвращает индекс первого вхождения или -1, если подстрока не найдена.

```javascript
let str = "hello world";
let substr = "world";
let index = str.indexOf(substr);
console.log(index); // 6
```

Метод search() - встроенный метод для поиска первого вхождения подстроки в строку. Возвращает индекс первого вхождения или -1, если подстрока не найдена.

```javascript
let str = "hello world";
let substr = "world";
let index = str.search(substr);
console.log(index); // 6
```

Метод match() - встроенный метод для поиска всех вхождений подстроки в строку. Возвращает массив со всеми совпадениями.

```javascript
let str = "hello world";
let substr = "l";
let matches = str.match(new RegExp(substr, "g"));
console.log(matches); // ["l", "l", "l"]
```


