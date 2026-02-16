---
title: "Big-M y modelación lógica"
---

## Patrón básico

Si una restricción debe activarse solo cuando $y=1$:

$$
a^\top x \le b + M(1-y),\quad y\in\{0,1\}.
$$

- Si $y=1$, queda $a^\top x\le b$.
- Si $y=0$, la restricción se relaja por $M$.

## Acople producción-setup

Si $x$ es cantidad y $y$ indica “producir/no producir”:

$$
0\le x \le My,\quad y\in\{0,1\}.
$$

## Riesgo de un Big-M grande

Si $M$ es demasiado grande:

1. Debilita la relajación lineal.
2. Genera inestabilidad numérica.
3. Aumenta nodos en Branch-and-Bound.

## Regla práctica

Elegir $M$ **lo más chico posible** que siga siendo válido.

Si sabemos cota superior real $x\le U$, usar $M=U$ en vez de un valor arbitrario enorme.

Conexión directa con [Fortaleza de formulaciones](/02-modelacion-con-problemas-lineales-enteros/03-fortaleza-de-formulaciones/).
