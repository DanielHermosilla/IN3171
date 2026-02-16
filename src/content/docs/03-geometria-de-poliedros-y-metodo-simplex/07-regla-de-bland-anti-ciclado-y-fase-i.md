---
title: "Regla de Bland, anti-ciclado y Fase I"
---

Cuando hay degeneración, Simplex puede estancarse en pivoteos sin mejora. Esta nota cubre dos herramientas para cerrar el algoritmo de forma robusta.

## Regla de Bland

La regla impone un criterio de desempate por índice (entrante y saliente). Aunque no siempre es la más rápida, evita ciclaje y garantiza terminación finita.

## Por qué importa

En problemas degenerados puede ocurrir una secuencia de bases repetidas. Sin una regla de desempate consistente, el algoritmo puede recorrer un ciclo.

## Fase I

Si no tenemos una SBF inicial para

$$
Ax=b,\ x\ge 0,
$$

se construye un problema auxiliar con variables artificiales y se minimiza su suma.

- Si el óptimo de Fase I es 0, se recupera una base factible del problema original.
- Si el óptimo de Fase I es positivo, el problema original es infactible.

:::tip[Ejemplo guiado]
La Fase I no busca resolver el problema final; busca construir un punto de partida factible para poder aplicar Simplex primal de manera correcta.
:::

## Cierre

Con Fase I + regla anti-ciclado, el método queda completo a nivel operativo: partir, iterar y terminar con criterio claro.
