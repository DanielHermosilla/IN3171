---
title: "Dualidad lagrangeana en PL y en redes"
---

## PL estándar vía Lagrangiano

Primal:

$$
\min c^\top x\quad \text{s.a.}\quad Ax=b,\; x\ge 0.
$$

Lagrangiano con multiplicadores $y$ para $Ax=b$:

$$
L(x,y)=c^\top x + y^\top(b-Ax)=b^\top y + (c-A^\top y)^\top x.
$$

Función dual:

$$
d(y)=\inf_{x\ge 0} L(x,y)=
\begin{cases}
b^\top y, & A^\top y\le c,\\
-\infty, & \text{otro caso.}
\end{cases}
$$

Así, el dual lagrangeano coincide con el dual lineal usual:

$$
\max\{b^\top y: A^\top y\le c\}.
$$

## Redes: interpretación de potenciales

En flujo de costo mínimo, las variables duales de conservación se interpretan como potenciales nodales $\pi_i$. Las restricciones duales por arco comparan diferencia de potencial con costo del arco, ajustado por capacidad cuando existe cota superior.

Esto permite una lectura económica limpia:

- potencial alto en oferta,
- potencial bajo en demanda,
- diferencias de potencial limitadas por costo de transporte.

## Puente a no lineal

Esta derivación es el caso lineal de la dualidad lagrangeana general estudiada en [Lagrangeano y función dual](/05-elementos-de-optimizacion-no-lineal/04-lagrangeano-y-funcion-dual/).
