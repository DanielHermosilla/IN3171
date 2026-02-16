---
title: "Branch and Bound"
---

Branch-and-Bound resuelve problemas enteros combinando dos ideas: cotas (bound) y partición del espacio (branching).

## Esquema del método

Para

$$
\min\{c^\top x: Ax\le b,\ x\in\mathbb{Z}^n\},
$$

se procede así:

1. Resolver relajación lineal del nodo.
2. Si sale infactible: podar.
3. Si sale entera: actualizar incumbente.
4. Si sale fraccional: ramificar en una variable fraccional.

Si $x_k^*=\alpha$ con $\alpha\notin\mathbb{Z}$, se crean nodos hijos:

$$
x_k\le \lfloor\alpha\rfloor,
\qquad
x_k\ge \lceil\alpha\rceil.
$$

## Criterio de poda por cota

En minimización, si la cota inferior de un nodo es peor o igual que el mejor valor entero conocido, ese nodo no puede mejorar la solución y se poda.

:::tip[Ejemplo guiado]
Supón incumbente 50. Si un nodo tiene relajación lineal con valor 57, ese nodo se descarta inmediatamente: aunque explores todo su subárbol, no mejorarás 50.
:::

## Mensaje clave

La calidad de la relajación en cada nodo define cuán rápido poda el árbol. Por eso la fortaleza de formulación es tan importante.
