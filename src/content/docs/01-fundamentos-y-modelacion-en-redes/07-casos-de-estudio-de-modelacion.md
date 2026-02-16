---
title: "Casos de estudio de modelación"
---

Esta nota resume problemas que aparecieron en las primeras clases y que se reutilizan durante todo el curso.

## Mochila 0-1

$$
\max \sum_{i=1}^n u_i x_i
\quad \text{s.a.} \quad
\sum_{i=1}^n w_i x_i\le C,
\quad x_i\in\{0,1\}.
$$

- Modelo simple, pero computacionalmente difícil en general.
- Base para cortes de cover y Branch-and-Bound (ver [Cortes de cover y cover extendido](/02-modelacion-con-problemas-lineales-enteros/07-cortes-de-cover-y-cover-extendido/)).

## Lot sizing (multi-período)

Variables por período $t=1,\dots,T$:

- $q_t$: producción,
- $I_t$: inventario final,
- $y_t\in\{0,1\}$: activación de producción.

Balance:

$$
I_{t-1}+q_t=d_t+I_t.
$$

Costo típico:

$$
\min \sum_{t=1}^T \left(f_t y_t + p_t q_t + h_t I_t\right).
$$

Acople lógico:

$$
q_t \le M_t y_t.
$$

## Localización de instalaciones

- p-median: minimiza distancia total.
- p-center: minimiza distancia máxima.
- maximal covering: maximiza demanda cubierta.

Desarrollo completo en [Localización discreta (p-median, p-center, maximal covering)](/02-modelacion-con-problemas-lineales-enteros/04-localizacion-discreta-p-median-p-center-maximal-covering/).

## Comentario metodológico

Estos ejemplos entrenan tres habilidades centrales:

1. Formular con precisión.
2. Elegir variables binarias/continuas apropiadas.
3. Entender qué estructura algorítmica habilita el modelo.
