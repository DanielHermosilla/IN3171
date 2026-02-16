---
title: "Puntos extremos, vértices y caras"
---

## Punto extremo

$x\in P$ es extremo si no puede escribirse como combinación convexa no trivial de otros dos puntos de $P$:

$$
x=\lambda y + (1-\lambda)z,\; y,z\in P,\; \lambda\in(0,1)\Rightarrow y=z=x.
$$

## Vértice

$x\in P$ es vértice si existe $c$ tal que

$$
c^\top x < c^\top y,\quad \forall y\in P,\; y\neq x.
$$

En poliedros, vértice y punto extremo coinciden.

## Restricciones activas

Para $P=\{x:Ax\le b\}$,

$$
I(x)=\{i: a_i^\top x=b_i\}.
$$

$x$ es básico cuando existen $n$ restricciones activas linealmente independientes.

## Teorema de optimalidad geométrica

Si un PL tiene óptimo finito y región factible no vacía, existe solución óptima en un punto extremo.

Este resultado es la justificación geométrica de Simplex.
