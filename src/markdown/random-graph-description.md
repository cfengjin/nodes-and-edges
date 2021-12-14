---
title: Random Graph Description 
---
### Theory
Every graph has $n$ nodes and $m$ edges.

A random graph is a model network where values of certain properties are fixed while others are kept random.

A simple model is $G(n, m)$, where networks have $n$ nodes connected randomly by $m$ edges.

The most studied model is $G(n, p)$, where $p$ is the probability of an edge between any pair of nodes.
This is the model simulated here.

Although this model is simple, it introduces us to different calculations we can make on a network.

#### Mean Number of Edges
The mean number of edges $\langle m\rangle$ is just the number of possible edges or pairs of nodes multiplied by the probability that an edge will be there:
$$
\langle m\rangle = {n \choose 2}p
$$