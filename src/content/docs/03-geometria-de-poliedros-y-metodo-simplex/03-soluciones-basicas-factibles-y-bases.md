---
title: "Soluciones básicas factibles y bases"
---

Esta nota traduce la intuición geométrica de "esquina" a lenguaje matricial. Ese paso permite implementar Simplex de forma sistemática.

## Forma estándar

Trabajamos con

$$
P=\{x\in\mathbb{R}^n: Ax=b,\ x\ge 0\},
$$

con $A\in\mathbb{R}^{m\times n}$ y rango fila completo $m$.

## Qué es una base

Elegir $m$ columnas linealmente independientes de $A$ define una matriz base $B\in\mathbb{R}^{m\times m}$.

Particionando $A=[B\ N]$ y $x=(x_B,x_N)$:

$$
Bx_B + Nx_N = b.
$$

Si fijamos $x_N=0$, obtenemos

$$
x_B=B^{-1}b.
$$

## SBF

La solución resultante es básica. Si además cumple $x_B\ge 0$, entonces es una **solución básica factible** (SBF).

:::tip[Ejemplo guiado]
Si tienes $m=3$ restricciones independientes en forma estándar, cada base elige 3 columnas como básicas. Las demás variables quedan en 0. Si los tres valores básicos salen no negativos, encontraste una SBF.

No todas las bases producen factibilidad; por eso revisar signo de $x_B$ es obligatorio.
:::

## Por qué importa

Simplex no recorre cualquier punto factible: recorre SBFs conectadas por pivoteos.
