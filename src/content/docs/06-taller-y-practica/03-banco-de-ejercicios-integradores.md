---
title: "Banco de ejercicios integradores"
---

## Ejercicio A (dual lagrangeano de PL estándar)

Sea

$$
\min\ c^\top x \quad \text{s.a.}\quad Ax=b,\; x\ge 0.
$$

1. Construir $L(x,y)$.
2. Derivar $d(y)$.
3. Mostrar que el dual coincide con

$$
\max\ b^\top y\quad \text{s.a.}\quad A^\top y\le c.
$$

Conecta con clase 27 y [Dualidad lagrangeana en PL y en redes](/04-dualidad-y-sensibilidad-de-soluciones-optimas/07-dualidad-lagrangeana-en-pl-y-en-redes/).

## Ejercicio B (holgura complementaria)

Dado un par primal-dual factible, determinar qué restricciones deben estar activas si ciertas variables duales son no nulas.

Objetivo: reconstruir candidato óptimo sin resolver todo el problema.

## Ejercicio C (B&B manual)

Resolver por Branch-and-Bound:

$$
\min\ 7x+y
$$

$$
\begin{aligned}
3x+2y &\le 5,\\
5x+8y &\le 20,\\
20x+y &\le 800,\\
x,y &\in\mathbb{Z}_+.
\end{aligned}
$$

Comparar cota LP y solución entera.

## Ejercicio D (KKT en convexo)

Resolver con KKT:

$$
\min\ 3x_1-x_2
$$

sujeto a

$$
4-x_1^2-(x_2-2)^2\le 0,\quad x_2-2\le 0,\quad x_1+x_2-5\le 0,\quad x_1\ge 0,\ x_2\ge 0.
$$

Objetivo: distinguir factibilidad, actividad y suficiencia bajo convexidad.
