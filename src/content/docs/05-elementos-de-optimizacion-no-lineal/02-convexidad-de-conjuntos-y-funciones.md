---
title: "Convexidad de conjuntos y funciones"
---

## Conjunto convexo

$C\subseteq\mathbb{R}^n$ es convexo si

$$
\lambda x+(1-\lambda)y\in C,
\quad \forall x,y\in C,\ \forall\lambda\in[0,1].
$$

## Función convexa

$f:C\to\mathbb{R}$ convexa si

$$
f(\lambda x+(1-\lambda)y)\le \lambda f(x)+(1-\lambda)f(y).
$$

Si es diferenciable:

$$
f(y)\ge f(x)+\nabla f(x)^\top(y-x),\quad \forall x,y\in C.
$$

Si es dos veces diferenciable:

$$
\nabla^2 f(x)\succeq 0\quad \forall x\in C.
$$

## Importancia en optimización

Si problema es convexo (objetivo convexo, restricciones de desigualdad convexas, igualdades afines), entonces todo óptimo local es global.

![funciones convexas imagen 01](/img/funciones-convexas-imagen-01.png)
![funciones convexas imagen 02](/img/funciones-convexas-imagen-02.png)
