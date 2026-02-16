---
title: "Algoritmo Simplex primal"
---

## Problema estándar de minimización

$$
\min c^\top x\quad \text{s.a.}\quad Ax=b,\; x\ge 0.
$$

## Datos de una iteración

Con base $B$:

- solución básica: $x_B=B^{-1}b$, $x_N=0$,
- multiplicadores simplex: $p^\top = c_B^\top B^{-1}$,
- costos reducidos:

$$
\bar c_N^\top = c_N^\top - p^\top N.
$$

## Criterio de optimalidad

En minimización:

$$
\bar c_j \ge 0\;\forall j\in N\quad \Rightarrow\quad x \text{ óptimo}.
$$

## Paso de pivoteo

Si existe $j$ con $\bar c_j<0$, entra $x_j$.

1. Calcular $d_B=-B^{-1}A_j$.
2. Calcular $\theta^*=\min_{i:d_i<0} x_i/(-d_i)$.
3. Sale la variable que logra el mínimo.
4. Actualizar base y repetir.

## Terminación

- Óptimo: todos costos reducidos no negativos.
- No acotado: dirección factible con mejora indefinida.

![algoritmo simplex imagen 01](/img/algoritmo-simplex-imagen-01.png)
![algoritmo simplex imagen 02](/img/algoritmo-simplex-imagen-02.png)
![algoritmo simplex imagen 03](/img/algoritmo-simplex-imagen-03.png)
