---
title: "Introducción a optimización no lineal"
---

## Forma general

$$
\min f(x)
$$

sujeto a

$$
g_i(x)\le 0,\; i=1,\dots,m,
\qquad
h_j(x)=0,\; j=1,\dots,p,
$$

con $x\in\mathbb{R}^n$.

En el curso, las igualdades $h_j$ se trabajan principalmente como funciones afines.

## Diferencias con PL

1. Puede haber óptimos locales no globales.
2. La región factible puede ser no convexa.
3. No existe un algoritmo universal con garantías tipo Simplex para toda clase de NLP.

## Conjunto factible

$$
S=\{x: g_i(x)\le 0,\ h_j(x)=0\}.
$$

Se usan condiciones de regularidad para caracterizar óptimos con gradientes (KKT).

![optimizacion no lineal imagen 01](/img/optimizacion-no-lineal-imagen-01.png)
![optimizacion no lineal imagen 02](/img/optimizacion-no-lineal-imagen-02.png)
