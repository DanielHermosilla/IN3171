---
title: "Costos reducidos, optimalidad y no acotación"
---

Los costos reducidos resumen si vale la pena activar una variable no básica. Son la señal local que guía el movimiento de Simplex.

## Interpretación en minimización

Para una no básica $x_j$:

- si su costo reducido es favorable (negativo), conviene intentar que entre,
- si todos los costos reducidos son no favorables, la base actual es óptima.

## Certificado de optimalidad

Cuando ninguna variable no básica mejora el objetivo, no existe dirección factible de descenso desde la SBF actual. En ese caso, Simplex termina en óptimo.

## Certificado de no acotación

Si existe variable entrante que mejora pero la dirección asociada nunca viola no negatividad de básicas (no hay variable saliente), entonces el problema es no acotado en esa dirección.

:::tip[Ejemplo guiado]
Piensa en una dirección factible que reduce costo y en la que puedes aumentar el paso indefinidamente sin romper restricciones. Eso implica que el valor objetivo puede bajar sin límite.
:::

## Cuidado práctico

No confundir "no acotado" con "infactible":

- no acotado: sí hay factibilidad, pero el objetivo no tiene cota inferior,
- infactible: no existe ningún punto que cumpla todas las restricciones.
