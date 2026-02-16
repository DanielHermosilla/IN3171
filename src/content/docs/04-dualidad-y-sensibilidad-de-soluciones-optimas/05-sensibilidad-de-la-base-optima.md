---
title: "Sensibilidad de la base óptima"
---

## Sensibilidad local en $b$

Con base óptima fija $B$:

$$
x_B = B^{-1}b.
$$

Para perturbación $b+\Delta b$:

$$
x_B(\Delta b)=B^{-1}(b+\Delta b)=x_B + B^{-1}\Delta b.
$$

La base sigue primal factible si $x_B(\Delta b)\ge 0$.

## Sensibilidad local en $c$

Con costos perturbados, los costos reducidos se vuelven:

$$
\bar c_N = c_N - c_B^\top B^{-1}N.
$$

La base sigue óptima (minimización) mientras $\bar c_N\ge 0$.

## Programación paramétrica (idea)

Si $b(\theta)=b^0+\theta d$, la solución óptima cambia por tramos lineales en $\theta$; la base va cambiando en puntos críticos.

## Conexión

Este análisis explica formalmente por qué precio sombra funciona en un rango y no globalmente.
