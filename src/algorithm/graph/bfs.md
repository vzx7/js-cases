Обход в ширину (Breadth-First Search, BFS) - это алгоритм, который исследует все вершины в графе путем идения в ширину перед тем, как идти в глубину. Данный алгоритм может быть использован для нахождения кратчайшего пути между двумя вершинами, проверки наличия циклов, поиска путей и т.д.

```javascript
function BFS(graph, start) {
  const visited = new Set();
  const queue = [start];
  while (queue.length > 0) {
    const vertex = queue.shift();
    visited.add(vertex);
    for (let neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
      }
    }
  }
  return visited;
}
```
