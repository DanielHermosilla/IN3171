---
title: "Flujo máximo y corte mínimo"
---

En la clase de flujo máximo, el foco no está en una aplicación específica, sino en una estructura que aparece muchas veces: mover algo desde un origen hasta un destino respetando capacidades.

## Planteamiento del problema

Sea un grafo dirigido $G=(V,A)$ con una fuente $s$ y un sumidero $t$. Para cada arco $(i,j)$ existe una capacidad $u_{ij}\geq 0$. La variable de decisión es $x_{ij}$, que representa cuánto flujo enviamos por ese arco.

Queremos maximizar el flujo total que sale de $s$ (equivalentemente, que llega a $t$):

$$
\max \sum_{j:(s,j)\in A} x_{sj} - \sum_{j:(j,s)\in A} x_{js}
$$

sujeto a:

$$
\sum_{j:(i,j)\in A} x_{ij} - \sum_{j:(j,i)\in A} x_{ji} = 0, \quad \forall i\in V\setminus\{s,t\}
$$

$$
0 \le x_{ij} \le u_{ij}, \quad \forall (i,j)\in A
$$

La restricción de conservación dice: en nodos intermedios, lo que entra debe salir.

## Qué representa un corte

Un corte separa los nodos en dos conjuntos $(S,\bar S)$ con $s\in S$ y $t\in \bar S$. La capacidad del corte es la suma de capacidades de arcos que van de $S$ hacia $\bar S$.

El resultado clave de esta clase es que:

- el valor del flujo máximo coincide con
- la capacidad del corte mínimo.

Esto permite interpretar el cuello de botella de la red de forma directa.

:::tip[Ejemplo guiado]
Piensa en una red logística con bodegas intermedias. Si desde el origen puedes despachar mucho, pero todos los caminos hacia el destino deben pasar por dos arcos con capacidad baja, entonces aunque agregues capacidad en otras partes, el flujo total queda limitado por ese "cuello".

Ese conjunto de arcos críticos corresponde a un corte de capacidad pequeña. Por eso, para aumentar el flujo máximo, no basta reforzar cualquier arco: hay que intervenir arcos del corte mínimo.
:::

## Lectura práctica

Cuando modeles flujo máximo, revisa primero:

- si la red está bien orientada (dirección de cada arco),
- si las capacidades están en la unidad correcta,
- si el origen/sumidero representan realmente el proceso físico.

Si eso está bien, el modelo usualmente queda correcto de inmediato.
