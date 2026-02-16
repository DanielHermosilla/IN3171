---
title: "Cortes de cover y cover extendido"
---

## Contexto: restricción mochila binaria

$$
\sum_{i=1}^n w_i x_i \le K,
\qquad x_i\in\{0,1\}.
$$

## Cover

Un conjunto $C\subseteq\{1,\dots,n\}$ es un cover si

$$
\sum_{i\in C} w_i > K.
$$

Entonces, no pueden activarse todos los elementos de $C$ simultáneamente.

## Desigualdad de cover

$$
\sum_{i\in C} x_i \le |C|-1.
$$

Es válida para todas las soluciones enteras factibles de la mochila.

## Cover extendido

Si $C$ es cover, su extensión puede construirse agregando elementos al menos tan “pesados” como los de $C$ (según la regla usada en clase), obteniendo $E(C)$ y el corte

$$
\sum_{i\in E(C)} x_i \le |C|-1,
$$

que típicamente es más fuerte.

## Impacto

Los cortes de cover son baratos de generar y muy efectivos en modelos con muchas restricciones tipo mochila (selección, localización, presupuesto).
