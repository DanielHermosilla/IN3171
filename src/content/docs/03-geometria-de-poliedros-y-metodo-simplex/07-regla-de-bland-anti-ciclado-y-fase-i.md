---
title: "Regla de Bland, anti-ciclado y Fase I"
---

## Ciclaje

Con degeneración, Simplex puede repetir bases sin mejorar valor objetivo.

## Regla de Bland

- Elegir para entrar la variable de menor índice con $\bar c_j<0$.
- Elegir para salir la variable básica elegible de menor índice.

Teorema: evita ciclaje y asegura terminación finita.

## Método de Fase I

Cuando no hay SBF inicial evidente para

$$
Ax=b,\; x\ge 0,
$$

se agregan variables artificiales $a\ge 0$ y se resuelve:

$$
\min \sum_i a_i
$$

sujeto a sistema aumentado factible trivial.

- Si óptimo Fase I es $0$, se obtuvo base factible del problema original.
- Si óptimo Fase I es $>0$, el problema original es infactible.

## Relevancia práctica

Fase I es el puente entre modelación y ejecución algorítmica robusta.
