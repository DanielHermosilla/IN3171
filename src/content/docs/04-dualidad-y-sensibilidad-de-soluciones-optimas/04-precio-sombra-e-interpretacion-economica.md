---
title: "Precio sombra e interpretación económica"
---

## Definición

El precio sombra (multiplicador dual óptimo) de una restricción mide variación marginal del valor óptimo respecto del lado derecho.

Si

$$
\phi(b)=\min\{c^\top x: Ax\ge b\},
$$

entonces localmente, para cambios pequeños $\Delta b$ que no cambian la base óptima:

$$
\phi(b+\Delta b)\approx \phi(b)+{y^*}^\top\Delta b.
$$

## Interpretación

- $y_i^*>0$: relajar recurso $i$ (aumentar $b_i$ en minimización con tipo adecuado) encarece el óptimo.
- $y_i^*<0$: lo abarata.
- $y_i^*=0$: recurso no crítico localmente.

## Restricción importante

La interpretación marginal exacta vale dentro del rango de estabilidad de base (ver [Sensibilidad de la base óptima](/04-dualidad-y-sensibilidad-de-soluciones-optimas/05-sensibilidad-de-la-base-optima/)).

![dualidad lagrangeana imagen 01](/img/dualidad-lagrangeana-imagen-01.png)
