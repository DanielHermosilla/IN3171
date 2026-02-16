---
title: "Cortes de Gomory"
---

## Punto de partida

Para un problema entero en forma estándar:

$$
\min c^\top x \quad \text{s.a.}\quad Ax=b,\; x\ge 0,\; x\in\mathbb{Z}^n,
$$

resolver la relajación lineal y obtener una base $B$ con descomposición $A=[B\ N]$.

## Ecuación básica

$$
x_B + B^{-1}N x_N = B^{-1}b.
$$

Tomando la fila $i$ con lado derecho fraccional, se separan partes fraccionarias y se obtiene el corte fraccional de Gomory:

$$
\sum_{j\in N} \left\{\bar a_{ij}\right\}x_j \ge \left\{\bar b_i\right\},
$$

donde $\{t\}=t-\lfloor t\rfloor$ es la parte fraccionaria.

En forma equivalente para agregar al primal de minimización se usa una desigualdad lineal válida que elimina la SBF fraccional actual.

## Interpretación

- El corte se construye desde el tableau.
- Es válido para todas las soluciones enteras.
- Corta específicamente el punto fraccional actual.

![corte de gomory imagen 01](/img/corte-de-gomory-imagen-01.png)

## Limitación práctica

Los cortes de Gomory puros pueden ser numéricamente delicados. En solvers modernos se usan variantes estabilizadas y se combinan con otras familias de cortes.
