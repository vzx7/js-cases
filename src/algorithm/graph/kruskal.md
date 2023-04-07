Алгоритм Крускала (Kruskal's Algorithm) - это алгоритм, который находит минимальное остовное дерево во взвешенном графе. Данный алгоритм использует алгоритм слияния множеств для объединения подграфов в одно дерево.

```javascript
function kruskal(graph) {
  const edges = Object.keys(graph)
    .map((source) =>
      Object.keys(graph[source]).map((target) => ({
        source,
        target,
        weight: graph[source][target],
      }))
    )
    .flat()
    .sort((a, b) => a.weight - b.weight);
  const tree = {};
  const find = (vertex) => {
    if (tree[vertex] !== vertex) {
      tree[vertex] = find(tree[vertex]);
    }
    return tree[vertex];
  };
  for (let vertex in graph) {
    tree[vertex] = vertex;
  }
  for (let edge of edges) {
    const sourceRoot = find(edge.source);
    const targetRoot = find(edge.target);
    if (sourceRoot !== targetRoot) {
      tree[sourceRoot] = targetRoot;
      graph[edge.source][edge.target] = null;
      graph[edge.target][edge.source] = null;
    }
  }
  return graph;
}
```
