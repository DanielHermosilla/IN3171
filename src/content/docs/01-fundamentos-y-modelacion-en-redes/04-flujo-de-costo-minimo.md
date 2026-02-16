---
title: "Flujo de costo mínimo"
---

En flujo de costo mínimo ya no queremos enviar "lo más posible", sino enviar lo que corresponde al menor costo total, respetando balances de oferta y demanda por nodo.

## Formulación base

Sea $G=(V,A)$ un grafo dirigido. Cada arco $(i,j)$ tiene costo unitario $c_{ij}$ y, opcionalmente, capacidad $u_{ij}$. Cada nodo $i$ tiene balance $b_i$:

- $b_i>0$: oferta,
- $b_i<0$: demanda,
- $b_i=0$: transbordo.

Se debe cumplir $\sum_{i\in V} b_i = 0$.

Variables: $x_{ij}$ flujo por arco.

$$
\min \sum_{(i,j)\in A} c_{ij}x_{ij}
$$

sujeto a:

$$
\sum_{j:(i,j)\in A} x_{ij} - \sum_{j:(j,i)\in A} x_{ji} = b_i,\quad \forall i\in V
$$

$$
0 \le x_{ij} \le u_{ij}, \quad \forall (i,j)\in A
$$

## Cómo leer el balance

El balance por nodo no es un detalle técnico: es la parte que define el sentido del modelo.

- Si $b_i=4$, ese nodo debe "expulsar" neto 4 unidades.
- Si $b_i=-3$, ese nodo debe "absorber" neto 3 unidades.

Si cambias el signo sin querer, el problema cambia completamente.

:::tip[Ejemplo guiado]
Supón tres nodos: planta (oferta 10), centro de distribución (0), clientes agregados (demanda 10). Si el arco directo planta-cliente es caro y la ruta vía centro es más barata, el modelo empuja flujo por la ruta intermedia, siempre que capacidad lo permita.

Esto muestra que el modelo no solo verifica factibilidad, sino que además elige rutas económicamente convenientes.
:::

## Diferencia con flujo máximo

- En flujo máximo, el objetivo es cantidad enviada.
- En costo mínimo, el objetivo es costo total de envío para cubrir balances.

Son problemas parecidos en estructura, pero responden preguntas distintas.
