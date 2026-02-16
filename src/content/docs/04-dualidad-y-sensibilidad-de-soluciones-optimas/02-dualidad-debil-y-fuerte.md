---
title: "Dualidad débil y fuerte"
---

## Dualidad débil

Si $x$ es primal factible e $y$ es dual factible, entonces:

$$
b^\top y \le c^\top x
$$

(en el esquema primal minimización, dual maximización).

### Consecuencia

- Toda solución dual factible da cota inferior al óptimo primal.
- Toda solución primal factible da cota superior al óptimo dual.

## Dualidad fuerte

Si primal y dual son factibles y el óptimo es finito, entonces:

$$
z_P^*=z_D^*.
$$

## Certificados típicos

- Si encuentro $x$ primal factible e $y$ dual factible con $c^\top x=b^\top y$, ambos son óptimos.
- Si primal es no acotado (en minimización), dual es infactible.
- Si dual es no acotado (en maximización), primal es infactible.

## Conexión con Simplex

Los multiplicadores simplex $p^\top=c_B^\top B^{-1}$ suelen emerger como candidatos duales durante iteraciones.
