---
title: "Holgura complementaria"
---

La holgura complementaria traduce la relación primal-dual óptima en ecuaciones producto-cero.

## Condiciones

Para soluciones primal-dual factibles, son óptimas si y solo si:

$$
y_i\,(a_i^\top x-b_i)=0,\quad \forall i,
$$

$$
x_j\,(c_j-(A^\top y)_j)=0,\quad \forall j.
$$

## Lectura

- Si una restricción primal no está activa, su multiplicador dual debe valer 0.
- Si una variable primal es positiva, su restricción dual asociada debe estar activa.

No es una regla "decorativa": permite reconstruir soluciones con mucha eficiencia.

:::tip[Ejemplo guiado]
Si sabes que en el óptimo una restricción de capacidad queda con holgura, entonces su precio dual asociado debe ser 0. Esto reduce inmediatamente el sistema a resolver.
:::

## Uso típico en control

1. Resolver uno de los dos problemas (primal o dual).
2. Aplicar holgura complementaria para inferir variables del otro.
3. Verificar factibilidad y cerrar con dualidad fuerte.
