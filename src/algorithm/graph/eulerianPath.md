Алгоритм Эйлера - это алгоритм нахождения эйлерова цикла или эйлерова пути в неориентированном графе. Эйлеров цикл - это цикл, который проходит через каждое ребро графа ровно один раз, а эйлеров путь - это путь, который проходит через каждое ребро графа ровно один раз.

Алгоритм Эйлера имеет сложность O(E), где E - количество ребер в графе.

```javascript
function findEulerianPath(graph) {
  let path = [];

  // Находим вершину, из которой можно начать эйлеров путь
  let startVertex = findStartVertex(graph);

  if (startVertex === null) {
    // Если такой вершины нет, то эйлеров путь не существует
    return null;
  }

  // Начинаем обход с найденной вершины
  visit(startVertex, graph, path);

  return path;
}

function visit(vertex, graph, path) {
  // Рекурсивно обходим смежные вершины
  while (graph[vertex].length) {
    let nextVertex = graph[vertex].shift();
    visit(nextVertex, graph, path);
  }

  // Добавляем текущую вершину в путь
  path.unshift(vertex);
}

function findStartVertex(graph) {
  // Проверяем, есть ли вершины с нечетной степенью
  let oddDegreeVertices = Object.keys(graph).filter((vertex) => graph[vertex].length % 2 === 1);

  if (oddDegreeVertices.length === 0) {
    // Если таких вершин нет, то любая вершина может быть начальной
    return Object.keys(graph)[0];
  } else if (oddDegreeVertices.length === 2) {
    // Если есть две вершины с нечетной степенью, то начать можно только с одной из них
    return oddDegreeVertices[0];
  } else {
    // Иначе эйлеров путь не существует
    return null;
  }
}
```

Для примера, предположим, что у нас есть следующий граф:

```javascript
const graph = {
  'A': ['B', 'C', 'D'],
  'B': ['A', 'C'],
  'C': ['A', 'B', 'D'],
  'D': ['A', 'C'],
};
```

Для нахождения эйлерова пути можно вызвать функцию findEulerianPath следующим образом:

```javascript
const path = findEulerianPath(graph);
console.log(path); // ['A', 'B', 'C', 'D', 'A']
```

Здесь path будет содержать массив вершин, образующих найденный эйлеров путь.

