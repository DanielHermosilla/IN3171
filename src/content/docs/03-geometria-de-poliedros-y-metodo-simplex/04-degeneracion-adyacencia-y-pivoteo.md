---
title: "Degeneración, adyacencia y pivoteo"
---

Moverse entre SBFs adyacentes es el mecanismo central de Simplex. En esa dinámica aparece un fenómeno importante: la degeneración.

## Adyacencia entre SBFs

Dos SBFs son adyacentes cuando comparten casi toda su estructura de base y difieren en un intercambio mínimo de variable básica/no básica.

El pivoteo implementa exactamente ese intercambio.

## Degeneración

Una SBF es degenerada si alguna variable básica vale 0.

Consecuencias:

- puede cambiar la base sin cambiar el punto geométrico,
- puede ocurrir paso $\theta=0$,
- puede aparecer ciclaje si no se controla la regla de selección.

## Dirección de movimiento

Cuando entra una no básica $x_j$, se genera una dirección $d$ compatible con $Ad=0$ y se busca el mayor paso factible:

$$
x(\theta)=x+\theta d,\quad \theta\ge 0.
$$

El test de razón determina cuál variable básica sale.

:::tip[Ejemplo guiado]
Si al calcular razones mínimas encuentras empate y además la razón mínima es 0, puedes pivotear y quedar en el mismo punto. Ese es el caso típico de degeneración operativa.
:::

## Mensaje clave

Degeneración no significa error de modelación. Es una propiedad geométrica posible del poliedro y hay que manejarla con reglas robustas.
