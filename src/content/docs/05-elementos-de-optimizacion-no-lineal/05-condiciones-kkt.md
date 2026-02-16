---
title: "Condiciones KKT"
---

Para un punto candidato $(x^*,\lambda^*,\mu^*)$:

## 1) Factibilidad primal

$$
g_i(x^*)\le 0,\quad h_j(x^*)=0.
$$

## 2) Factibilidad dual

$$
\lambda_i^*\ge 0.
$$

## 3) Holgura complementaria

$$
\lambda_i^* g_i(x^*)=0,\quad \forall i.
$$

## 4) Estacionariedad

$$
\nabla f(x^*) + \sum_{i=1}^m \lambda_i^*\nabla g_i(x^*) + \sum_{j=1}^p \mu_j^*\nabla h_j(x^*)=0.
$$

## Lectura geométrica

La condición de estacionariedad dice que el gradiente de $f$ queda en el cono generado por gradientes de restricciones activas (con signo apropiado).

## Status teórico

- En problemas convexos con calificación adecuada, KKT es necesario y suficiente.
- En no convexos, KKT suele ser necesario (bajo regularidad) pero no suficiente para globalidad.
