---
title: "Branch-and-Cut y práctica computacional"
---

En práctica, los solvers no usan solo Branch-and-Bound ni solo cortes: usan ambos en conjunto. Ese esquema es Branch-and-Cut.

## Estructura general

En un nodo del árbol:

1. Resolver relajación lineal.
2. Separar cortes violados.
3. Reoptimizar.
4. Si sigue fraccional, ramificar.

Con esto, cada nodo se explora con una relajación más fuerte que la inicial.

## Cotas globales

En minimización:

- **Cota superior**: valor incumbente entero.
- **Cota inferior**: mejor bound entre nodos abiertos.

Criterio de cierre típico:

$$
\text{gap} = \frac{\text{UB}-\text{LB}}{\max(1,|\text{UB}|)}.
$$

Si el gap es suficientemente pequeño, se termina.

## Recomendaciones de modelación para solver

- usar cotas ajustadas,
- evitar Big-M gigantes,
- escalar bien unidades,
- declarar tipos de variable correctamente.

:::tip[Ejemplo guiado]
Dos modelos pueden representar exactamente el mismo problema. Si uno tiene $M$ ajustados y buenas cotas de variables, puede resolverse en segundos; el otro, con formulación débil, puede tardar mucho más con el mismo solver.
:::

La parte computacional no reemplaza la teoría: la materializa.
