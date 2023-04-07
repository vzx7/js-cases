Алгоритм Прима - это жадный алгоритм для поиска минимального остовного дерева во взвешенном неориентированном графе. Он начинает с выбора произвольной вершины и добавляет к дереву ребро минимального веса, инцидентное уже выбранным вершинам, пока все вершины не будут включены в дерево.

```javascript
function prim(graph) {
  const mst = {}; // минимальное остовное дерево
  const visited = {}; // посещенные вершины
  const vertices = Object.keys(graph); // список вершин графа
  const startVertex = vertices[0]; // начальная вершина

  visited[startVertex] = true;

  // Пока все вершины не включены в MST
  while (Object.keys(visited).length < vertices.length) {
    let minEdge = null;
    let minWeight = Infinity;

    // Поиск ребра минимального веса, инцидентного посещенной вершине
    for (let i = 0; i < vertices.length; i++) {
      if (visited[vertices[i]]) {
        for (let j = 0; j < vertices.length; j++) {
          if (!visited[vertices[j]] && graph[vertices[i]][vertices[j]] < minWeight) {
            minEdge = [vertices[i], vertices[j]];
            minWeight = graph[vertices[i]][vertices[j]];
          }
        }
      }
    }

    // Добавление ребра к MST
    const [u, v] = minEdge;
    mst[`${u}-${v}`] = minWeight;
    visited[v] = true;
  }

  return mst;
}
```

В этом примере граф представлен в виде объекта, где ключи - это вершины графа, а значения - это объекты, содержащие смежные вершины и веса соответствующих ребер. Например:
```javascript

const graph = {
  a: { b: 2, c: 3 },
  b: { a: 2, c: 1, d: 1 },
  c: { a: 3, b: 1, d: 4 },
  d: { b: 1, c: 4 },
};
```

В этом примере минимальное остовное дерево возвращается в виде объекта, где ключи - это ребра дерева, а значения - это веса соответствующих ребер. Например:

```javascript
{
  'a-b': 2,
  'b-c': 1,
  'b-d': 1,
}
```




