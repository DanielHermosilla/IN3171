---
title: "Forma lineal y transformaciones"
---

## Forma matricial

Un PL en forma compacta:

$$
\min c^\top x \quad \text{s.a.} \quad Ax \le b.
$$

Con $A\in\mathbb{R}^{m\times n}$, $b\in\mathbb{R}^m$, $c\in\mathbb{R}^n$.

## Forma estándar

La forma estándar usada en teoría de Simplex es:

$$
\min c^\top x \quad \text{s.a.} \quad Ax=b,\; x\ge 0.
$$

## Transformaciones equivalentes

### 1) Restricciones $\le$ a igualdad

Si $a_i^\top x\le b_i$, introducir holgura $s_i\ge 0$:

$$
a_i^\top x + s_i = b_i.
$$

### 2) Variable libre

Si $x_j\in\mathbb{R}$, usar descomposición:

$$
x_j = x_j^+ - x_j^-, \quad x_j^+,x_j^-\ge 0.
$$

### 3) Restricción $\ge$

Si $a_i^\top x\ge b_i$, multiplicar por $-1$ para obtener $\le$.

## Equivalencia y cuidado numérico

Aunque dos modelos sean matemáticamente equivalentes, no siempre son numéricamente igual de buenos (ver [Fortaleza de formulaciones](/02-modelacion-con-problemas-lineales-enteros/03-fortaleza-de-formulaciones/) para el caso entero con Big-M).

## Geometría rápida

Cada desigualdad lineal define un semiespacio. La intersección de semiespacios define un poliedro:

$$
P = \{x\in\mathbb{R}^n: Ax\le b\}.
$$

Este objeto geométrico es la base de la Unidad 3.
