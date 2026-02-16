---
title: "Algoritmo Simplex primal"
---

Simplex primal resuelve un PL en forma estándar moviéndose entre SBFs que mejoran el valor objetivo.

## Problema base

$$
\min c^\top x \quad \text{s.a.}\quad Ax=b,\ x\ge 0.
$$

## Estructura de una iteración

Con base $B$:

- solución actual: $x_B=B^{-1}b$, $x_N=0$,
- costos reducidos de no básicas: criterio para decidir entrada,
- test de razón: criterio para decidir salida.

## Esquema operacional

1. Partir de una SBF.
2. Revisar costos reducidos.
3. Si todos cumplen condición de optimalidad, terminar.
4. Elegir variable entrante que mejora.
5. Calcular dirección y paso máximo factible.
6. Pivotear y repetir.

## Qué garantiza mejora

Mientras el paso sea positivo y la variable entrante tenga costo reducido favorable, el valor objetivo mejora.

:::tip[Ejemplo guiado]
Si una no básica tiene costo reducido negativo (caso minimización), subirla desde 0 reduce costo localmente. El test de razón evita violar factibilidad y define hasta dónde puedes moverte.
:::

## Qué falta para cerrar el método

Quedan dos puntos prácticos que se estudian aparte:

- manejo de degeneración/ciclaje,
- obtención de una base inicial cuando no es evidente.
