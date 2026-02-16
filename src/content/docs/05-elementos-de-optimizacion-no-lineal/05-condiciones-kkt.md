---
title: "Condiciones KKT"
---

Las condiciones KKT son el sistema de ecuaciones/desigualdades que caracteriza candidatos óptimos en problemas con restricciones.

## Sistema KKT

Para un candidato $(x^*,\lambda^*,\mu^*)$:

1. Factibilidad primal

$$
g_i(x^*)\le 0,\quad h_j(x^*)=0.
$$

2. Factibilidad dual

$$
\lambda_i^*\ge 0.
$$

3. Holgura complementaria

$$
\lambda_i^* g_i(x^*)=0,\quad \forall i.
$$

4. Estacionariedad

$$
\nabla f(x^*) + \sum_i \lambda_i^*\nabla g_i(x^*) + \sum_j \mu_j^*\nabla h_j(x^*) = 0.
$$

## Interpretación

KKT combina:

- factibilidad,
- activación de restricciones,
- equilibrio de gradientes.

:::tip[Ejemplo guiado]
Si una restricción no está activa en el óptimo ($g_i(x^*)<0$), entonces su multiplicador debe ser 0 por holgura complementaria. Eso simplifica mucho el sistema al resolver ejercicios por casos.
:::

## Importante

En no convexo, KKT suele ser condición necesaria (no suficiente). En convexo, con regularidad adecuada, puede pasar a ser suficiente.
