---
title: "Poliedros, politopos y convexidad"
---

En esta clase se formaliza el objeto geométrico donde vive un problema lineal. Ese objeto no es un detalle visual: determina cómo se puede resolver el problema.

## Definiciones que se usan todo el tiempo

Semiespacio:

$$
S_{a,b}=\{x\in\mathbb{R}^n: a^\top x\le b\}.
$$

Hiperplano:

$$
H_{a,b}=\{x\in\mathbb{R}^n: a^\top x=b\}.
$$

Poliedro:

$$
P=\{x\in\mathbb{R}^n: Ax\le b\}.
$$

Politopo: poliedro acotado.

## Convexidad

Un conjunto $C$ es convexo si para todo $x,y\in C$ y todo $\lambda\in[0,1]$ se cumple

$$
\lambda x + (1-\lambda)y\in C.
$$

Esto significa que el segmento entre dos puntos factibles queda completamente dentro del conjunto.

## Por qué importa en PL

Cada restricción lineal define un semiespacio convexo. La intersección de semiespacios sigue siendo convexa. Por eso la región factible de un PL es convexa.

:::tip[Ejemplo guiado]
Si tomas dos planes de producción factibles (dos vectores de decisión que cumplen capacidad), entonces cualquier combinación ponderada entre ellos también cumple las mismas restricciones lineales.

Esa propiedad explica por qué tiene sentido buscar óptimos en estructuras extremas del conjunto, que veremos en las siguientes notas.
:::

## Envoltura convexa

La envoltura convexa de un conjunto $S$ es el conjunto de todas las combinaciones convexas de puntos de $S$. Esta idea aparece luego al comparar formulaciones y relajaciones.
