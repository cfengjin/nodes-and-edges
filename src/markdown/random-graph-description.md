---
title: Random Graph Description 
---
### Theory
Every graph has $n$ nodes and $m$ edges.

A random graph is a model network where values of certain properties are fixed while others are kept random.

A simple model is $G(n, m)$, where networks have $n$ nodes connected randomly by $m$ edges.

The most studied model is $G(n, p)$, where $p$ is the probability of an edge between any pair of nodes.
This is the model simulated here.

Although this model is simple, it introduces us to different calculations we can make and captures basic behaviors on a network.

#### Mean Number of Edges
The mean number of edges $\langle m\rangle$ is just the number of possible edges or pairs of nodes multiplied by the probability that an edge will be there:
$$
\langle m\rangle = {n \choose 2}p
$$

### Mean Degree
The degree $k$ of a node is how many other nodes it's connected to.
A way to interpret this is if you were in a friendship network, your degree would be how many friends you have.

Because each end of an edge connects to a node, the mean degree $c$ for nodes is:
$$
c = \langle k \rangle = \frac{2 \langle m \rangle}{n} = (n - 1) p
$$

### Degree Distribution
A degree distribution gives more information about the degrees of all nodes in the network.
$p_k$ represents the fraction of nodes with degree $k$:
$$
p_k = {n - 1 \choose k} p^k (1 - p)^{n - 1 - k}
$$

For a large number of nodes:
$$
p_k = e^{-c}\frac{c^k}{k!}.
$$

This metric is important because it can tell us how popularity is distributed among nodes.

### Clustering Coefficient
The clustering coefficient tells the the probability that a node's two friends are also friends with each other, meaning that together they from a triangle.

In the case of this model, the coefficient doesn't have an interesting value, as all edges have probability $p$ of existing, regardless of who they're connected to:
$$
C = \frac{c}{n - 1}
$$