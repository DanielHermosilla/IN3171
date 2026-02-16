---
title: "Puntos extremos, vértices y caras"
---

Una vez definido el poliedro, el siguiente paso es identificar sus "esquinas". Esas esquinas son los candidatos naturales del método Simplex.

## Punto extremo

Un punto $x\in P$ es extremo si no puede escribirse como combinación convexa no trivial de otros dos puntos de $P$:

$$
x=\lambda y+(1-\lambda)z,\ \lambda\in(0,1),\ y,z\in P \Rightarrow y=z=x.
$$

## Vértice

Un punto $x\in P$ es vértice si existe un vector de costos $c$ tal que $x$ es estrictamente mejor que cualquier otro punto factible para ese $c$.

En poliedros, estas nociones están estrechamente conectadas y se usan casi como equivalentes en la práctica del curso.

## Restricciones activas

Dado $x\in P$, una restricción $a_i^\top x\le b_i$ está activa si $a_i^\top x=b_i$.

El conjunto de activas se denota por

$$
I(x)=\{i: a_i^\top x=b_i\}.
$$

Este conjunto será clave para pasar de una definición geométrica a una definición algebraica de base.

:::tip[Ejemplo guiado]
En $\mathbb{R}^2$, piensa en un polígono. En un lado interior solo hay una restricción activa; en una esquina típicamente se activan dos restricciones independientes. Esa coincidencia de activas es lo que vuelve al punto "especial" para algoritmos basados en pivoteo.
:::
