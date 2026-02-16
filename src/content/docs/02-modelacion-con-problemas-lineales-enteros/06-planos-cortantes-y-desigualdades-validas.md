---
title: "Planos cortantes y desigualdades válidas"
---

La idea de cortes es simple: si la relajación lineal permite puntos fraccionarios que no son válidos para el problema entero, agregamos desigualdades que eliminen esos puntos sin eliminar soluciones enteras factibles.

## Definiciones

Sea

$$
S=\{x\in\mathbb{Z}^n: Ax\le b\},\qquad
P=\{x\in\mathbb{R}^n: Ax\le b\}.
$$

Una desigualdad $v^\top x\le d$ es:

- **válida** para $S$ si todo $x\in S$ la cumple,
- **corte** para $P$ si además corta al menos un punto fraccional de $P$.

## Esquema conceptual

1. Resolver relajación lineal.
2. Si la solución es fraccional, buscar un corte válido que la viole.
3. Agregar el corte al modelo.
4. Reoptimizar.

Repetir hasta obtener solución entera o decidir ramificación.

:::tip[Ejemplo guiado]
Imagina que la relajación entrega $x=(0.5,0.5,0.5)$ en un problema binario. Si encuentras una desigualdad válida para todas las soluciones binarias pero que ese punto no cumple, entonces acabas de mejorar la relajación sin perder factibilidad entera.
:::

## Conexión con la práctica

En solvers modernos, los cortes no reemplazan branching: lo complementan. Esa combinación es la base de Branch-and-Cut.
