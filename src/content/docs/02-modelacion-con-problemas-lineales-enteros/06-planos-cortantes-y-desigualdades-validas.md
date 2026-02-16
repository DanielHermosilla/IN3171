---
title: "Planos cortantes y desigualdades válidas"
---

## Definiciones

Sea

$$
S=\{x\in\mathbb{Z}^n: Ax\le b\},
\qquad
P=\{x\in\mathbb{R}^n: Ax\le b\}.
$$

Una desigualdad $v^\top x\le d$ es **válida** para $S$ si todo $x\in S$ la satisface.

Es un **corte** para $P$ si además existe algún $\hat x\in P$ tal que

$$
v^\top \hat x > d.
$$

## Algoritmo conceptual de cutting planes

1. Resolver relajación lineal y obtener $x^*$.
2. Si $x^*$ entero: terminar.
3. Si $x^*$ fraccional: encontrar corte válido que viole $x^*$.
4. Agregar corte y repetir.

## Meta geométrica

Aproximar la envolvente convexa entera:

$$
\operatorname{conv}(S).
$$

Mientras más cerca esté la relajación de $\operatorname{conv}(S)$, mejor rendimiento global.

## Notas

- Un corte útil debe separar el punto fraccional actual, no solo ser válido.
- En la práctica se combinan familias de cortes y Branch-and-Bound, dando [Branch-and-Cut y práctica computacional](/02-modelacion-con-problemas-lineales-enteros/09-branch-and-cut-y-practica-computacional/).

![branch and cut imagen 01](/img/branch-and-cut-imagen-01.png)
