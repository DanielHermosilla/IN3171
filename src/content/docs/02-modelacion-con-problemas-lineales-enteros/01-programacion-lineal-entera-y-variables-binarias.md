---
title: "Programación lineal entera y variables binarias"
---

## Forma general

Un problema de programación lineal entera mixta puede escribirse como

$$
\min\{c^\top x + d^\top y : Ax + By \le b,\; x\in\mathbb{Z}^p,\; y\in\mathbb{R}^q\}.
$$

Caso binario puro:

$$
x_j\in\{0,1\},\quad \forall j.
$$

## Interpretación de variable binaria

- $x_j=1$: activar decisión $j$.
- $x_j=0$: no activar.

Con eso se modelan decisiones tipo sí/no, selección, cobertura, apertura, asignación.

## Restricciones comunes

### Seleccionar exactamente $k$ elementos

$$
\sum_{j=1}^n x_j = k.
$$

### Al menos uno de dos eventos

$$
x_1 + x_2 \ge 1.
$$

### Exclusión mutua

$$
x_1 + x_2 \le 1.
$$

### Implicación $x_a=1 \Rightarrow x_b=1$

$$
x_a \le x_b.
$$

## Relajación lineal

Reemplazar $x_j\in\{0,1\}$ por $0\le x_j\le 1$ da la relajación lineal. Su valor óptimo provee cota:

- minimización: cota inferior,
- maximización: cota superior.

Esta idea se usa sistemáticamente en [Branch and Bound](/02-modelacion-con-problemas-lineales-enteros/05-branch-and-bound/).
