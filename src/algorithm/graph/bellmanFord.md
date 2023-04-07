Алгоритм Беллмана-Форда - это алгоритм поиска кратчайших путей во взвешенном графе с произвольными весами ребер. Он может работать с отрицательными весами ребер, но не может обрабатывать графы с циклами отрицательного веса.

Идея алгоритма заключается в том, чтобы выполнять релаксацию (обновление расстояния до вершины) для каждого ребра графа n-1 раз, где n - количество вершин в графе. После n-1 релаксаций алгоритм проверяет наличие отрицательных циклов. Если в графе есть отрицательный цикл, то кратчайшие пути не существуют, и алгоритм об этом сообщает.

```javascript
function bellmanFord(graph, startVertex) {
  const distances = {};
  const predecessors = {};

  // Инициализация расстояний до всех вершин, кроме начальной, как Infinity
  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[startVertex] = 0;

  // Релаксация всех ребер графа n-1 раз
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let vertex in graph) {
      for (let neighbor in graph[vertex]) {
        const weight = graph[vertex][neighbor];
        const distanceToNeighbor = distances[vertex] + weight;

        if (distanceToNeighbor < distances[neighbor]) {
          distances[neighbor] = distanceToNeighbor;
          predecessors[neighbor] = vertex;
        }
      }
    }
  }

  // Проверка наличия отрицательных циклов
  for (let vertex in graph) {
    for (let neighbor in graph[vertex]) {
      const weight = graph[vertex][neighbor];
      const distanceToNeighbor = distances[vertex] + weight;

      if (distanceToNeighbor < distances[neighbor]) {
        throw new Error('Граф содержит отрицательный цикл');
      }
    }
  }

  return {
    distances,
    predecessors,
  };
}
```

В этом примере граф представлен в виде объекта, где ключи - это вершины графа, а значения - это объекты, содержащие смежные вершины и веса соответствующих ребер. Например:

```javascript
const graph = {
  a: { b: 3, c: 2 },
  b: { c: -2 },
  c: { d: 1 },
  d: {},
};
```

В этом примере расстояния и предыдущие вершины в кратчайшем пути возвращаются в виде объекта с полями distances и predecessors, соответственно.
