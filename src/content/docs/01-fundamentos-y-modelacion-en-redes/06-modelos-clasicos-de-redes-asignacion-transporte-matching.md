---
title: "Modelos clásicos de redes (asignación, transporte, matching)"
---

En esta parte aparecen tres estructuras que se repiten en problemas reales: asignar, transportar y emparejar. La clave es que todas usan variables de enlace entre dos conjuntos.

## Asignación uno a uno

Si tienes máquinas $M$ y tareas $T$, con costo $c_{ij}$ por asignar máquina $i$ a tarea $j$, usamos variables binarias $x_{ij}$.

$$
\min \sum_{i\in M}\sum_{j\in T} c_{ij}x_{ij}
$$

$$
\sum_{j\in T}x_{ij}=1\ \forall i\in M,\qquad
\sum_{i\in M}x_{ij}=1\ \forall j\in T,
$$

$$
x_{ij}\in\{0,1\}.
$$

La primera familia de restricciones obliga "cada máquina toma una tarea". La segunda, "cada tarea recibe una máquina".

## Transporte

Si hay ofertas $s_i$ y demandas $d_j$, con costo unitario $c_{ij}$, las variables $x_{ij}$ son cantidades enviadas.

$$
\min \sum_i\sum_j c_{ij}x_{ij}
$$

$$
\sum_j x_{ij}\le s_i\ \forall i,\qquad
\sum_i x_{ij}=d_j\ \forall j,
$$

$$
x_{ij}\ge 0.
$$

Aquí no es decisión binaria, sino flujo continuo.

## Matching en grafo bipartito

Si no todos los emparejamientos son permitidos, se trabaja sobre un conjunto de aristas factibles $E$ y se optimiza sobre esas aristas. La lógica es la misma: cada nodo puede participar a lo más en un emparejamiento.

:::tip[Ejemplo guiado]
Supón tres ayudantes y tres turnos de laboratorio. Dos ayudantes no pueden tomar el turno de tarde por horario. Eso no se modela con texto: se modela eliminando esas aristas del conjunto factible.

Luego el optimizador elige la combinación válida de menor costo o mayor beneficio.
:::

![asignacion matching imagen 01](/IN3171/img/asignacion-matching-imagen-01.jpeg)
