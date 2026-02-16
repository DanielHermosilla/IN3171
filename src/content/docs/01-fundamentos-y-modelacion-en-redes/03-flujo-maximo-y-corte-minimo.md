---
title: "Flujo máximo y corte mínimo"
---

## Formulación

Sea un grafo dirigido $G=(V,A)$, fuente $s$, sumidero $t$, y capacidades $u_{ij}\ge 0$.

Variables de flujo: $x_{ij}$ para cada $(i,j)\in A$.

$$
\max\ \sum_{j:(s,j)\in A} x_{sj} - \sum_{j:(j,s)\in A} x_{js}
$$

sujeto a conservación de flujo:

$$
\sum_{j:(i,j)\in A} x_{ij} - \sum_{j:(j,i)\in A} x_{ji} = 0, \quad \forall i\in V\setminus\{s,t\},
$$

capacidades:

$$
0\le x_{ij}\le u_{ij}, \quad \forall (i,j)\in A.
$$

## Intuición dual: cortes

Un corte $(S,\bar S)$ con $s\in S$, $t\in\bar S$ tiene capacidad

$$
U(S,\bar S)=\sum_{i\in S,\,j\in\bar S} u_{ij}.
$$

Teorema (max-flow min-cut):

$$
\text{valor máximo de flujo} = \min_{(S,\bar S)} U(S,\bar S).
$$

Este teorema es uno de los primeros ejemplos fuertes de dualidad económica/estructural en el curso.

## Condición de optimalidad operativa

En algoritmos tipo Ford-Fulkerson, la optimalidad se detecta cuando no existe camino aumentante en la red residual.

## Enlaces

- [Flujo de costo mínimo](/01-fundamentos-y-modelacion-en-redes/04-flujo-de-costo-minimo/)
- [Dualidad lagrangeana en PL y en redes](/04-dualidad-y-sensibilidad-de-soluciones-optimas/07-dualidad-lagrangeana-en-pl-y-en-redes/)
