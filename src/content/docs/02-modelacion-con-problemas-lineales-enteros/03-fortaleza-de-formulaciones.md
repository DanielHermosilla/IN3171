---
title: "Fortaleza de formulaciones"
---

## Idea central

Dos modelos enteros pueden tener el mismo conjunto de soluciones enteras, pero relajaciones lineales muy distintas. Una formulación es más fuerte si su relajación está más cerca de la envolvente convexa de soluciones enteras.

## Comparación conceptual

Sea $S$ el conjunto entero factible y $P_1, P_2$ dos relajaciones lineales válidas con

$$
S \subseteq P_1,\quad S\subseteq P_2.
$$

Si $P_1\subseteq P_2$, entonces $P_1$ es al menos tan fuerte como $P_2$.

## Ejemplo clásico (clase 19)

Modelo con costos fijos de activación:

$$
\max\ 5x_A + 7x_B - 50y_A - 40y_B
$$

$$
\begin{aligned}
2x_A + 3x_B &\le 40,\\
x_A + 2x_B &\le 30,\\
x_A &\le M_A y_A,\\
x_B &\le M_B y_B,
\end{aligned}
$$

con $x_A,x_B\in\mathbb{Z}_+$ y $y_A,y_B\in\{0,1\}$.

Si $M_A,M_B$ son exagerados, la relajación permite fracciones de $y$ con producción alta artificial, produciendo cotas pobres.

## Medida de calidad

Gap de relajación (maximización):

$$
\text{gap} = \frac{z_{LP}-z_{IP}}{|z_{IP}|}.
$$

Mientras más pequeño, mejor formulación.

## Conclusión práctica

Modelar fuerte reduce tiempo de cómputo tanto o más que cambiar solver.
