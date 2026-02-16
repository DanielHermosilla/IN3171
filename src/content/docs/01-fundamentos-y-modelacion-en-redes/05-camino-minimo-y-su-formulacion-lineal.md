---
title: "Camino mínimo y su formulación lineal"
---

El problema de camino mínimo busca una ruta de menor costo entre un origen y un destino. En clases se conecta de forma natural con flujo de costo mínimo: es el mismo esquema, pero moviendo una sola unidad.

## Modelo como flujo unitario

Dado $G=(V,A)$, costos $c_{ij}$, origen $s$ y destino $t$, definimos $x_{ij}$ como flujo en el arco $(i,j)$.

$$
\min \sum_{(i,j)\in A} c_{ij}x_{ij}
$$

sujeto a:

$$
\sum_{j:(i,j)\in A}x_{ij} - \sum_{j:(j,i)\in A}x_{ji}=
\begin{cases}
1, & i=s,\\
-1, & i=t,\\
0, & \text{en otro caso.}
\end{cases}
$$

$$
x_{ij}\ge 0\quad \forall(i,j)\in A
$$

Cuando el grafo y los datos cumplen condiciones estándar, la solución sale naturalmente como un camino.

## Intuición operativa

El modelo obliga a:

- que salga una unidad desde $s$,
- que llegue una unidad a $t$,
- y que en nodos intermedios no se cree ni destruya flujo.

El objetivo decide por dónde conviene pasar para minimizar costo total.

:::tip[Ejemplo guiado]
Si desde $s$ a $t$ tienes dos rutas:

- ruta A con costo total 12,
- ruta B con costo total 9,

el modelo concentra la unidad en la ruta B. Si luego subes el costo de un arco clave de B, la solución puede saltar a A automáticamente.

Ese es el valor del modelo: adapta la decisión cuando cambian datos.
:::

## Relación con secuenciamiento por red

En varias aplicaciones de planificación temporal, cada arco representa una decisión de "pasar" de un estado a otro en el tiempo. Al modelar así, el problema de secuenciar decisiones puede transformarse en camino mínimo.
