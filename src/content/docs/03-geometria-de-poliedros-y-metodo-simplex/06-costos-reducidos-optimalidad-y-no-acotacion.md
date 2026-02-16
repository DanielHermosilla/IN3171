---
title: "Costos reducidos, optimalidad y no acotación"
---

## Interpretación de costo reducido

Para variable no básica $x_j$, su costo reducido en minimización es

$$
\bar c_j = c_j - c_B^\top B^{-1}A_j.
$$

- $\bar c_j<0$: conviene aumentar $x_j$ desde 0.
- $\bar c_j\ge 0$: no mejora al entrar localmente.

## Certificado de optimalidad

Si $\bar c_N\ge 0$, la solución básica actual es óptima. Además $p=c_B^\top B^{-1}$ actúa como vector dual factible.

## Certificado de no acotación

Si existe $j$ con $\bar c_j<0$ y además $d_B=-B^{-1}A_j\ge 0$, entonces

$$
x(\theta)=x+\theta d
$$

es factible para todo $\theta\ge 0$ y

$$
c^\top x(\theta)=c^\top x + \theta\bar c_j \to -\infty.
$$

Conclusión: el primal es no acotado.

## Conexión dual

Estas condiciones encajan con dualidad:

- dual factible + primal factible + holgura complementaria implican optimalidad (ver [Holgura complementaria](/04-dualidad-y-sensibilidad-de-soluciones-optimas/03-holgura-complementaria/)).
