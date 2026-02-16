---
title: "Branch and Bound"
---

## Esquema del método

Para resolver un PLE:

$$
\min\{c^\top x: Ax\le b,\; x\in\mathbb{Z}^n\}.
$$

1. Resolver relajación lineal en un nodo.
2. Si la solución es entera: candidata incumbente.
3. Si no es entera: ramificar en una variable fraccional $x_k^*$.

Si $x_k^*=\alpha$ con $\alpha\notin\mathbb{Z}$, crear:

$$
x_k\le \lfloor \alpha \rfloor,
\qquad
x_k\ge \lceil \alpha \rceil.
$$

## Cotas y poda

En minimización, para nodo $N$ con valor relajado $z_{LP}(N)$:

- Si infactible, podar.
- Si $z_{LP}(N)\ge z_{inc}$, podar por cota.
- Si solución entera, actualizar incumbente $z_{inc}$.

## Correctitud

La ramificación conserva todas las soluciones enteras factibles, porque cualquier entero cumple exactamente uno de los dos brazos.

## Eficiencia práctica

Depende de:

- Fortaleza de relajación (ver [Fortaleza de formulaciones](/02-modelacion-con-problemas-lineales-enteros/03-fortaleza-de-formulaciones/)).
- Estrategia de branching.
- Heurísticas de incumbente.

![branch and bound imagen 01](/img/branch-and-bound-imagen-01.png)
![branch and bound imagen 03](/img/branch-and-bound-imagen-03.png)
