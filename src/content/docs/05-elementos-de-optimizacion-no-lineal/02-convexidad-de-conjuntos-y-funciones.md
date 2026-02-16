---
title: "Convexidad de conjuntos y funciones"
---

La convexidad es la propiedad estructural más importante de esta unidad.

## Conjunto convexo

$C\subseteq\mathbb{R}^n$ es convexo si

$$
\lambda x + (1-\lambda)y\in C,
\quad \forall x,y\in C,\ \forall\lambda\in[0,1].
$$

## Función convexa

$f:C\to\mathbb{R}$ es convexa si

$$
f(\lambda x+(1-\lambda)y)\le \lambda f(x)+(1-\lambda)f(y).
$$

Si es diferenciable, una condición útil es

$$
f(y)\ge f(x)+\nabla f(x)^\top(y-x).
$$

## Por qué importa

En problemas convexos:

- cualquier mínimo local es global,
- el análisis de optimalidad es más limpio,
- la dualidad tiene mejores propiedades.

:::tip[Ejemplo guiado]
Si $f(x)=x^2$ en $\mathbb{R}$, la función es convexa y el mínimo local en 0 es automáticamente global. En cambio, con una función ondulada no convexa, un mínimo local puede ser solo una trampa local.
:::
