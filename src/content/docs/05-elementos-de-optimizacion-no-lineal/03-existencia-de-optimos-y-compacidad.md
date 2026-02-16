---
title: "Existencia de óptimos y compacidad"
---

Antes de buscar condiciones de optimalidad, conviene responder una pregunta básica: ¿el problema tiene solución óptima?

## Criterio clásico (Weierstrass)

Si $S$ es no vacío, cerrado y acotado (compacto), y $f$ es continua, entonces

$$
\min\{f(x):x\in S\}
$$

alcanza óptimo global.

## Por qué se revisa primero

Puedes tener un problema factible con valor objetivo que baja sin límite o que se aproxima a un valor sin alcanzarlo. En esos casos, hablar de KKT como "solución" no tiene sentido operativo.

:::tip[Ejemplo guiado]
Minimizar $f(x)=x$ en el conjunto $S=(0,1)$ tiene ínfimo 0, pero no hay minimizador porque 0 no pertenece a $S$. El problema no tiene solución óptima, aunque sí tiene cota inferior.
:::

## Checklist previo

1. comprobar factibilidad,
2. revisar cierre y acotación del conjunto factible,
3. revisar continuidad (o regularidad suficiente) de la función objetivo.
