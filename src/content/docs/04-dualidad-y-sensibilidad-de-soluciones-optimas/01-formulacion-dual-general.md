---
title: "Formulación dual general"
---

## Par primal-dual canónico (minimización primal)

Primal:

$$
\min c^\top x
$$

sujeto a, por fila $i$:

- si $a_i^\top x\ge b_i$ entonces $y_i\ge 0$,
- si $a_i^\top x\le b_i$ entonces $y_i\le 0$,
- si $a_i^\top x=b_i$ entonces $y_i$ libre.

Por columna $j$:

- si $x_j\ge 0$ entonces $(A^\top y)_j\le c_j$,
- si $x_j\le 0$ entonces $(A^\top y)_j\ge c_j$,
- si $x_j$ libre entonces $(A^\top y)_j=c_j$.

Dual:

$$
\max b^\top y \quad \text{s.a. reglas de signo/igualdad anteriores}.
$$

## Idea estructural

El dual traduce “combinar restricciones del primal para acotar objetivo primal”.

## Regla mnemotécnica útil

- Tipo de restricción primal determina signo dual.
- Signo de variable primal determina tipo de restricción dual.

## Ejemplo simple

Si primal estándar es

$$
\min\{c^\top x: Ax=b,\; x\ge 0\},
$$

su dual es

$$
\max\{b^\top y: A^\top y\le c,\; y\ \text{libre}\}.
$$
