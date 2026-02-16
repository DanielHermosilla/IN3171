---
title: "Programación lineal entera y variables binarias"
---

Cuando una decisión es de tipo sí/no (abrir o no abrir, asignar o no asignar, fabricar o no fabricar), modelarla con variables continuas puede producir soluciones imposibles de implementar. Ahí aparecen las variables enteras y binarias.

## Forma general

Un problema lineal entero mixto se puede escribir como

$$
\min\{c^\top x + d^\top y : Ax + By \le b,\ x\in\mathbb{Z}^p,\ y\in\mathbb{R}^q\}.
$$

Caso binario puro:

$$
x_j\in\{0,1\},\quad \forall j.
$$

## Interpretación de variable binaria

La misma variable binaria puede representar muchas lógicas:

- $x_j=1$: decisión activada,
- $x_j=0$: decisión desactivada.

Lo importante es declarar claramente qué representa cada binaria desde el inicio del modelo.

:::tip[Ejemplo guiado]
Si $y_j$ indica abrir una instalación en el sitio $j$, entonces:

- $y_j=1$ significa "sitio abierto",
- $y_j=0$ significa "sitio cerrado".

A partir de esa definición, todas las demás restricciones deben ser coherentes con esa interpretación (por ejemplo, no asignar clientes a un sitio cerrado).
:::

## Error típico

Un error frecuente es introducir binarios sin necesidad o, al revés, dejar continuas variables que deberían ser discretas. Antes de decidir el tipo de variable, conviene preguntarse: **en la operación real, este valor puede fraccionarse o no?**
