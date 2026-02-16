---
title: "Dualidad débil y fuerte"
---

Dualidad débil y fuerte son el núcleo teórico que conecta primal y dual.

## Dualidad débil

Si $x$ es primal factible e $y$ es dual factible, entonces

$$
b^\top y \le c^\top x
$$

(en el caso primal minimización, dual maximización).

Esto significa:

- cualquier dual factible da una cota inferior del óptimo primal,
- cualquier primal factible da una cota superior del óptimo dual.

## Dualidad fuerte

Bajo condiciones estándar de factibilidad y acotación, se cumple

$$
\min \text{(primal)} = \max \text{(dual)}.
$$

Cuando esto ocurre, se obtiene un certificado de optimalidad muy potente: basta encontrar soluciones factibles con el mismo valor objetivo.

:::tip[Ejemplo guiado]
Si tienes una solución primal factible con valor 120 y una dual factible con valor 120, ya no necesitas "seguir buscando": por dualidad débil ninguna puede superar a la otra, por lo que ambas son óptimas.
:::

## Qué revisar en ejercicios

1. factibilidad primal,
2. factibilidad dual,
3. comparación de valores,
4. uso de igualdad de valores para certificar óptimo.
