---
title: "Camino mínimo y su formulación lineal"
---

## Definición

Dado $G=(V,A)$, costos $c_{ij}\ge 0$, origen $s$ y destino $t$, buscamos un camino de costo mínimo.

## Formulación como flujo unitario

Variables $x_{ij}\in\{0,1\}$ indican si el arco se usa.

$$
\min \sum_{(i,j)\in A} c_{ij}x_{ij}
$$

sujeto a balance de una unidad:

$$
\sum_{j:(i,j)\in A}x_{ij} - \sum_{j:(j,i)\in A}x_{ji}=
\begin{cases}
1, & i=s,\\
-1, & i=t,\\
0, & \text{otro caso.}
\end{cases}
$$

La relajación lineal ya entrega solución entera por total unimodularidad de la matriz de incidencia en este contexto.

## Dual y potenciales

El dual entrega variables de potencial $\pi_i$ con restricciones

$$
\pi_i - \pi_j \le c_{ij},
$$

que son desigualdades de Bellman. En óptimo, los arcos del camino activo quedan “ajustados”.

## Relación con otros problemas

- Es un caso de [Flujo de costo mínimo](/01-fundamentos-y-modelacion-en-redes/04-flujo-de-costo-minimo/).
- Aparece como subestructura en secuenciamiento y planificación temporal.
