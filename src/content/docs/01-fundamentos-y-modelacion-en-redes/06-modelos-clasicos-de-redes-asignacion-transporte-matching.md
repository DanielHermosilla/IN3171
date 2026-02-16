---
title: "Modelos clásicos de redes (asignación, transporte, matching)"
---

## Asignación bipartita

Conjunto de máquinas $M$, tareas $T$, costo $c_{ij}$ por asignar $i\in M$ a $j\in T$.

$$
\min \sum_{i\in M}\sum_{j\in T} c_{ij}x_{ij}
$$

sujeto a:

$$
\sum_{j\in T}x_{ij}=1\;\forall i\in M,\qquad
\sum_{i\in M}x_{ij}=1\;\forall j\in T,
$$

$$
x_{ij}\in\{0,1\}.
$$

![asignacion matching imagen 01](/img/asignacion-matching-imagen-01.jpeg)

## Transporte

Oferta $s_i$, demanda $d_j$:

$$
\min \sum_{i}\sum_j c_{ij}x_{ij}
$$

$$
\sum_j x_{ij}=s_i\;\forall i,\qquad \sum_i x_{ij}=d_j\;\forall j,\qquad x_{ij}\ge 0.
$$

Cuando $\sum_i s_i=\sum_j d_j$, el problema está balanceado.

## Matching general

En un grafo no dirigido $G=(V,E)$, un matching es un subconjunto $M\subseteq E$ que no comparte vértices.

Para matching máximo ponderado:

$$
\max \sum_{e\in E} w_e x_e
$$

$$
\sum_{e\in\delta(v)}x_e\le 1,\;\forall v\in V,\qquad x_e\in\{0,1\}.
$$

Estos modelos son prototipos de problemas combinatorios con buena estructura lineal.
