---
title: "Localización discreta (p-median, p-center, maximal covering)"
---

Variables típicas:

- $y_j\in\{0,1\}$: abrir instalación en sitio $j$.
- $x_{ij}\in\{0,1\}$: cliente $i$ atendido por $j$.
- $d_{ij}$: distancia/costo.

## p-median

Minimiza distancia total:

$$
\min \sum_{i\in I}\sum_{j\in J} d_{ij}x_{ij}
$$

$$
\sum_{j\in J}x_{ij}=1\;\forall i,\quad
x_{ij}\le y_j\;\forall i,j,\quad
\sum_{j\in J}y_j = p.
$$

## p-center

Minimiza máxima distancia. Introducir $R$:

$$
\min R
$$

$$
\sum_{j\in J}x_{ij}=1\;\forall i,\quad
x_{ij}\le y_j\;\forall i,j,
$$

$$
\sum_{j\in J} d_{ij}x_{ij}\le R\;\forall i,
\quad \sum_{j\in J}y_j=p.
$$

## Maximal covering

Con radio de cobertura $D$, parámetro $a_{ij}=1$ si $d_{ij}\le D$.

Variables $z_i\in\{0,1\}$ indican si cliente $i$ queda cubierto.

$$
\max \sum_{i\in I} w_i z_i
$$

$$
z_i \le \sum_{j\in J} a_{ij}y_j\;\forall i,
\quad \sum_{j\in J}y_j\le p.
$$

![maximal covering imagen 01](/img/maximal-covering-imagen-01.png)

## Observación de modelación

Algunas clases usaron instalaciones ya existentes $K$. Eso se incorpora fijando $y_j=1$ para $j\in K$ o ampliando el conjunto de asignación $J\cup K$.
