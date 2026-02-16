---
title: "Localización discreta (p-median, p-center, maximal covering)"
---

En localización discreta decidimos dónde abrir instalaciones y cómo asignar demanda. Cambiando la función objetivo, obtenemos modelos con comportamientos muy distintos.

## Variables comunes

- $y_j\in\{0,1\}$: abrir instalación en sitio $j$.
- $x_{ij}\in\{0,1\}$: cliente $i$ asignado a instalación $j$.
- $d_{ij}$: distancia entre cliente $i$ y sitio $j$.

## p-median (minimiza distancia total)

$$
\min \sum_{i\in I}\sum_{j\in J} d_{ij}x_{ij}
$$

sujeto a:

$$
\sum_{j\in J}x_{ij}=1\ \forall i,\quad
x_{ij}\le y_j\ \forall i,j,\quad
\sum_{j\in J}y_j=p.
$$

## p-center (minimiza peor distancia)

Se introduce variable $z$ para representar la distancia máxima:

$$
\min z
$$

$$
\sum_{j\in J}x_{ij}=1\ \forall i,\quad
x_{ij}\le y_j\ \forall i,j,\quad
\sum_{j\in J}y_j=p,
$$

$$
\sum_{j\in J} d_{ij}x_{ij} \le z\ \forall i.
$$

## Maximal covering

Dado un radio de cobertura $D$, se busca cubrir la mayor cantidad de clientes con a lo más $p$ instalaciones.

:::tip[Ejemplo guiado]
Si el problema es logística comercial, p-median favorece eficiencia promedio. Si el problema es servicio crítico (ambulancias, bomberos), p-center suele ser más natural porque controla el peor caso de atención.
:::

La elección del modelo depende de la métrica de desempeño que realmente importa en la aplicación.
