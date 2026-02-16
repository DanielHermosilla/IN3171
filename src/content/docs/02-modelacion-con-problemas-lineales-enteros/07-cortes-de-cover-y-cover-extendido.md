---
title: "Cortes de cover y cover extendido"
---

Los cortes de cover aparecen naturalmente en restricciones tipo mochila binaria.

## Punto de partida

$$
\sum_{i=1}^n w_i x_i \le K,
\qquad x_i\in\{0,1\}.
$$

Un conjunto $C$ es un **cover** si

$$
\sum_{i\in C} w_i > K.
$$

Eso significa que no pueden activarse todos los elementos de $C$ al mismo tiempo.

## Corte de cover

La desigualdad

$$
\sum_{i\in C} x_i \le |C|-1
$$

es válida para toda solución entera factible.

## Cover extendido (lifting)

Se puede fortalecer el corte incorporando variables fuera de $C$ con coeficientes positivos calculados de forma cuidadosa. El objetivo es acercar la relajación a la envolvente convexa del conjunto entero.

:::tip[Ejemplo guiado]
Si $K=10$ y tienes pesos $(6,5,4)$, el conjunto $\{1,2\}$ ya es cover porque $6+5>10$. Entonces el corte $x_1+x_2\le 1$ elimina soluciones fraccionarias donde ambos aparecen demasiado activos en la relajación.
:::

Estos cortes fueron una pieza clave en la evolución de los métodos modernos para PLE.
