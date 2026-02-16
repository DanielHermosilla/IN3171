---
title: "Fortaleza de formulaciones"
---

Dos formulaciones pueden tener exactamente las mismas soluciones enteras y, sin embargo, comportarse muy distinto computacionalmente. La diferencia está en la calidad de la relajación lineal.

## Idea de formulación fuerte

Sea $S$ el conjunto entero factible. Si $P_1$ y $P_2$ son relajaciones lineales válidas con $S\subseteq P_1$ y $S\subseteq P_2$, decimos que $P_1$ es más fuerte que $P_2$ cuando $P_1\subseteq P_2$.

Una relajación más fuerte suele dar:

- mejores cotas en la raíz,
- menos nodos en Branch-and-Bound,
- menor tiempo total.

## Relación con Big-M

El caso típico en clases fue: misma lógica modelada con distintos valores de $M$. Mientras más ajustado el $M$, más fuerte la formulación.

:::tip[Ejemplo guiado]
Si para un producto se sabe que nunca se fabrican más de 20 unidades, la restricción

$$
x\le 20y
$$

es mucho más fuerte que

$$
x\le 1000y.
$$

Ambas prohíben producir cuando $y=0$, pero la segunda deja demasiada libertad fraccionaria en la relajación.
:::

## Conclusión operativa

Modelar bien no es solo "que funcione". También es entregar una formulación que permita resolver el problema de forma eficiente.
