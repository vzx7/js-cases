Алгоритм Дейкстры (Dijkstra's Algorithm) - это алгоритм, который находит кратчайшие пути от одной вершины до всех остальных вершин во взвешенном графе. Данный алгоритм использует очередь с приоритетом для поиска кратчайших путей.

```javascript
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;
  const queue = new PriorityQueue();
  queue.enqueue(start, 0);
  while (!queue.isEmpty()) {
    const { vertex, priority } = queue.dequeue();
    if (visited.has(vertex)) {
      continue;
    }
    visited.add(vertex);
    for (let neighbor in graph[vertex]) {
      const distance = graph[vertex][neighbor];
      const totalDistance = distance + priority;
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        queue.enqueue(neighbor, totalDistance);
      }
    }
  }
  return distances;
}
```
