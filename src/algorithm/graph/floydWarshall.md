Алгоритм Флойда-Уоршелла (Floyd-Warshall Algorithm) - это алгоритм, который находит кратчайшие пути между всеми парами вершин во взвешенном графе. Данный алгоритм использует динамическое программирование для нахождения кратчайших путей.

```javascript
function floydWarshall(graph) {
  const distances = {};
  for (let i in graph) {
    distances[i] = {};
    for (let j in graph) {
      if (i === j) {
        distances[i][j] = 0;
      } else if (graph[i][j]) {
        distances[i][j] = graph[i][j];
      } else {
        distances[i][j] = Infinity;
      }
    }
  }
  for (let k in graph) {
    for (let i in graph) {
      for (let j in graph) {
        const throughK = distances[i][k] + distances[k][j];
        if (throughK < distances[i][j]) {
          distances[i][j] = throughK;
        }
      }
    }
  }
  return distances;
}
```


