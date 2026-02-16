---
title: "Introducción a optimización no lineal"
---

En no lineal mantenemos la misma lógica de modelación (variables, objetivo, restricciones), pero el comportamiento matemático cambia mucho al salir de funciones lineales.

## Forma general

$$
\min f(x)
$$

sujeto a

$$
g_i(x)\le 0,\ i=1,\dots,m,
\qquad
h_j(x)=0,\ j=1,\dots,p,
\qquad
x\in\mathbb{R}^n.
$$

En el curso, las igualdades $h_j$ se tratan como afines.

## Qué se pierde respecto al PL

- el óptimo no necesariamente está en "esquinas",
- puede haber óptimos locales no globales,
- puede no existir óptimo aunque haya ínfimo,
- la factibilidad puede ser más delicada.

:::tip[Ejemplo guiado]
Minimizar una función no convexa en un intervalo puede dar varios mínimos locales. Un método local puede quedarse en uno de ellos sin encontrar el global.

Por eso, antes de aplicar condiciones de optimalidad, hay que mirar estructura del problema.
:::

## Qué se gana con buena estructura

Si el problema es convexo, muchas dificultades desaparecen: los mínimos locales pasan a ser globales y KKT adquiere un rol mucho más fuerte.
