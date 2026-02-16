---
title: "Soluciones básicas factibles y bases"
---

## Forma estándar

$$
P=\{x\in\mathbb{R}^n: Ax=b,\; x\ge 0\},
$$

con $A\in\mathbb{R}^{m\times n}$ y $\operatorname{rank}(A)=m$.

## Base

Elegir $m$ columnas linealmente independientes de $A$ define una matriz base $B\in\mathbb{R}^{m\times m}$.

Particionando $A=[B\ N]$ y $x=(x_B,x_N)$:

$$
Bx_B + Nx_N = b.
$$

Si fijamos $x_N=0$,

$$
x_B = B^{-1}b.
$$

Esto define una solución básica. Será factible si además $x_B\ge 0$.

## Conteo intuitivo

Con $m$ ecuaciones y $n$ variables, una SBF tiene $n-m$ variables no básicas en cero.

## Equivalencia central

En forma estándar y bajo hipótesis de rango:

$$
\text{SBF} \Longleftrightarrow \text{vértice del poliedro factible}.
$$
