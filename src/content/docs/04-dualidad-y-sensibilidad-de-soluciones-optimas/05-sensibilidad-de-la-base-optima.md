---
title: "Sensibilidad de la base óptima"
---

La sensibilidad de base estudia cuánto pueden cambiar datos del modelo sin que cambie la estructura básica óptima.

## Cambios en el lado derecho

Con base fija $B$:

$$
x_B = B^{-1}b.
$$

Para perturbación $b+\Delta b$:

$$
x_B(\Delta b)=B^{-1}(b+\Delta b)=x_B+B^{-1}\Delta b.
$$

La base sigue primal factible si $x_B(\Delta b)\ge 0$.

## Cambios en costos

Si cambia $c$, la base se mantiene óptima mientras los costos reducidos de no básicas mantengan el signo de optimalidad correspondiente.

## Qué se obtiene en la práctica

- rangos de variación admisible de parámetros,
- estabilidad del plan óptimo,
- detección de parámetros sensibles.

:::tip[Ejemplo guiado]
Si el beneficio de un producto sube, no siempre cambia el plan óptimo. Primero hay un rango donde la base actual sigue siendo óptima; recién al salir de ese rango cambia la estructura de producción.
:::
