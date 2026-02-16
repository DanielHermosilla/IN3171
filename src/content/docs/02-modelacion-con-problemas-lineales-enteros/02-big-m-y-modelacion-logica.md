---
title: "Big-M y modelación lógica"
---

Big-M es una técnica para representar condiciones lógicas con restricciones lineales. Funciona, pero hay que usarla con cuidado: si $M$ es exageradamente grande, el modelo se vuelve débil.

## Patrón de activación

Si una restricción debe imponerse solo cuando $y=1$:

$$
a^\top x \le b + M(1-y),\quad y\in\{0,1\}.
$$

- Si $y=1$, recuperamos $a^\top x\le b$.
- Si $y=0$, la restricción se relaja por $M$.

## Patrón de acople cantidad-activación

Si $x$ es cantidad producida y $y$ indica si se produce:

$$
0\le x \le My,\quad y\in\{0,1\}.
$$

Con esto, si $y=0$ forzamos $x=0$.

:::tip[Ejemplo guiado]
Supón que una línea produce hasta 20 unidades cuando está activa. En vez de usar $M=10000$, usa $M=20$:

$$
0\le x\le 20y.
$$

Ambas son válidas matemáticamente, pero la segunda entrega una relajación mucho más informativa para el solver.
:::

## Regla práctica para elegir M

No usar "un número muy grande" por comodidad. Buscar siempre la mejor cota superior física del problema (capacidad, demanda máxima, tiempo disponible, etc.).
