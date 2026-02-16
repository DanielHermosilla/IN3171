---
title: "Cortes de Gomory"
---

Los cortes de Gomory nacen directamente de la tabla simplex de la relajación lineal. La lógica es derivar una desigualdad que todas las soluciones enteras cumplen, pero que la solución fraccional actual viola.

## Configuración

Partimos desde

$$
\min c^\top x \quad\text{s.a.}\quad Ax=b,\ x\ge 0,\ x\in\mathbb{Z}^n.
$$

Con base $B$ y partición $A=[B\ N]$:

$$
x_B + B^{-1}N x_N = B^{-1}b.
$$

Si en una fila el lado derecho es fraccional, se construye el corte usando partes fraccionarias de coeficientes y término independiente.

## Idea operativa (sin sobrecargar notación)

- tomar fila fraccional,
- separar parte entera/fraccional,
- construir desigualdad válida para enteros,
- agregarla al modelo.

## Qué se gana

Cada corte de Gomory reduce la región fraccional factible de la relajación. En problemas difíciles, suele combinarse con branching.

:::tip[Ejemplo guiado]
Si la relajación entrega una variable básica con valor 3.5, esa fila es candidata natural para corte. El nuevo corte no elimina soluciones enteras factibles, pero sí elimina la solución actual (o parte del entorno fraccional que la contiene).
:::

Esto explica por qué Gomory se considera una familia "general": no depende de una estructura especial como mochila o cobertura.
