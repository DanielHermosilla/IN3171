---
title: "Flujo de costo mínimo"
---

## Problema

En un grafo dirigido $G=(V,A)$, cada arco $(i,j)$ tiene costo $c_{ij}$ y capacidad $u_{ij}$. Cada nodo $i$ tiene balance $b_i$ (oferta si $b_i>0$, demanda si $b_i<0$), con

$$
\sum_{i\in V} b_i = 0.
$$

## Formulación primal

$$
\min \sum_{(i,j)\in A} c_{ij}x_{ij}
$$

sujeto a

$$
\sum_{j:(i,j)\in A}x_{ij} - \sum_{j:(j,i)\in A}x_{ji} = b_i,\quad \forall i\in V,
$$

$$
0\le x_{ij}\le u_{ij},\quad \forall (i,j)\in A.
$$

## Interpretación

- Conservación: lo que sale menos lo que entra debe igualar la oferta/demanda.
- Costos: el flujo se distribuye para minimizar costo total, no necesariamente para minimizar distancia por arco.

## Dual (forma típica)

Si $\pi_i$ son potenciales por conservación y $w_{ij}\ge 0$ por capacidad superior, entonces:

$$
\max \sum_{i\in V} b_i\pi_i - \sum_{(i,j)\in A} u_{ij}w_{ij}
$$

sujeto a

$$
\pi_i - \pi_j - w_{ij} \le c_{ij},\quad \forall (i,j)\in A.
$$

Las desigualdades duales actúan como condiciones de costo reducido en redes.

![problema de transporte imagen 01](/img/problema-de-transporte-imagen-01.png)

## Caso especial: transporte

Si hay nodos de oferta $I$ y demanda $J$, con arcos bipartitos completos, se obtiene el clásico problema de transporte.
