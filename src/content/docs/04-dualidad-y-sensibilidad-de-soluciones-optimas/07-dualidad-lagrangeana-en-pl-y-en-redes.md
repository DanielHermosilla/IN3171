---
title: "Dualidad lagrangeana en PL y en redes"
---

Esta nota muestra que el dual lineal también puede derivarse desde el Lagrangeano, y no solo por reglas mecánicas de transposición y signos.

## PL estándar

Primal:

$$
\min c^\top x \quad \text{s.a.}\quad Ax=b,\ x\ge 0.
$$

Lagrangeano (multiplicadores $y$ para igualdad):

$$
L(x,y)=c^\top x + y^\top(b-Ax)=b^\top y + (c-A^\top y)^\top x.
$$

Función dual:

$$
d(y)=\inf_{x\ge 0}L(x,y)=
\begin{cases}
b^\top y, & A^\top y\le c,\\
-\infty, & \text{en otro caso.}
\end{cases}
$$

Dual resultante:

$$
\max b^\top y \quad \text{s.a.}\quad A^\top y\le c.
$$

## Lectura en redes

En modelos de flujo, esta derivación ayuda a interpretar multiplicadores como "potenciales" o precios nodales/arcales según la formulación.

:::tip[Ejemplo guiado]
Cuando en una red aparece una restricción de capacidad en un arco, su multiplicador dual puede leerse como el costo marginal de ampliar esa capacidad.

Esa lectura no reemplaza la solución primal, pero entrega interpretación económica del resultado.
:::
