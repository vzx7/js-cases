Обход в глубину (Depth-First Search, DFS) - это алгоритм, который исследует все вершины в графе путем перехода в глубину перед тем, как идти в ширину. Данный алгоритм может быть использован для нахождения всех связных компонентов графа, проверки наличия циклов, поиска путей и т.д.

```javascript
function DFS(graph, start) {
  const visited = new Set();
  function traverse(vertex) {
    visited.add(vertex);
    for (let neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        traverse(neighbor);
      }
    }
  }
  traverse(start);
  return visited;
}
```
