---
title: "Holgura complementaria"
---

## Enunciado

Para primal-dual factibles $x,y$, son óptimos si y solo si se cumple:

$$
y_i\,(a_i^\top x-b_i)=0,\quad \forall i,
$$

$$
x_j\,(c_j-(A^\top y)_j)=0,\quad \forall j.
$$

## Lectura económica

- Si una restricción primal no está activa ($a_i^\top x<b_i$ o equivalente según sentido), su multiplicador dual debe anularse.
- Si una variable primal es positiva, su restricción dual asociada está activa.

## Uso práctico

1. Resolver parte de variables por inspección.
2. Reconstruir la otra parte usando ecuaciones activas.
3. Verificar factibilidad.

Muy útil en controles para evitar resolver un LP completo desde cero.
