---
title: "Degeneración, adyacencia y pivoteo"
---

## Degeneración

Una SBF es degenerada si alguna componente básica vale cero.

Consecuencias:

- Puede cambiar la base sin cambiar el punto $x$.
- Puede haber pivoteos con paso $\theta^*=0$.
- Riesgo de ciclaje si no se cuida la regla de pivoteo.

## Dirección básica

Al hacer entrar variable no básica $x_j$, la dirección $d$ satisface:

$$
Ad=0,\quad d_j=1,\quad d_{N\setminus\{j\}}=0,
$$

y para básicas

$$
d_B = -B^{-1}A_j.
$$

## Tamaño de paso

Para mantener factibilidad $x+\theta d\ge 0$:

$$
\theta^* = \min_{i\in B: d_i<0}\frac{x_i}{-d_i}.
$$

- Si no hay $d_i<0$, el problema es no acotado en esa dirección.
- Si $\theta^*=0$, pivoteo degenerado.

## Adyacencia

Dos SBF son adyacentes si sus bases difieren en exactamente una columna (intercambio entrar/salir).
