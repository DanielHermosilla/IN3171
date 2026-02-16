---
title: "Slater, calificación de restricciones y dualidad fuerte"
---

Para pasar de "KKT como condición necesaria" a "KKT como caracterización de óptimo" en convexos, necesitamos condiciones de calificación. La más usada en el curso es Slater.

## Condición de Slater

Si el problema es convexo y existe $\bar x$ tal que

$$
g_i(\bar x)<0\ \forall i,
\qquad
h_j(\bar x)=0\ \forall j,
$$

entonces se cumple dualidad fuerte y existen multiplicadores óptimos.

## Consecuencia práctica

Bajo convexidad + Slater:

- no hay gap dual,
- KKT caracteriza óptimos globales.

:::tip[Ejemplo guiado]
En un problema convexo con desigualdades lineales y cuadráticas convexas, si puedes exhibir un punto estrictamente factible para las desigualdades, Slater queda verificada y puedes trabajar con KKT con respaldo teórico fuerte.
:::

## Criterio operativo

Antes de resolver por KKT en convexos, pregunta explícitamente: ¿hay punto de Slater? Si la respuesta es sí, el análisis es mucho más sólido.
