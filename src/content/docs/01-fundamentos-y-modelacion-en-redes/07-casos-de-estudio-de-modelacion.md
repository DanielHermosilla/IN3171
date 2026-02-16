---
title: "Casos de estudio de modelación"
---

Esta nota consolida los problemas de modelación vistos al inicio del curso. El objetivo no es solo escribir fórmulas, sino identificar el patrón de decisión detrás de cada contexto.

## Caso 1: Producción con capacidades

Decidimos cuánto producir de cada producto para maximizar utilidad, sujeto a horas de trabajo y materiales disponibles.

La estructura típica es:

- variables continuas de producción,
- función objetivo lineal de utilidad/costo,
- restricciones de capacidad por recurso.

:::tip[Ejemplo guiado]
Si producir A usa 2 horas de mecanizado y producir B usa 3, y solo hay 40 horas, entonces una de las restricciones es:

$$
2x_A + 3x_B \le 40.
$$

Este tipo de ecuación aparece en casi cualquier problema de mezcla de productos.
:::

## Caso 2: Mochila 0-1

Seleccionamos ítems con peso $w_i$ y beneficio $u_i$ bajo capacidad $C$:

$$
\max \sum_{i=1}^n u_i x_i
\quad\text{s.a.}\quad
\sum_{i=1}^n w_i x_i\le C,
\quad x_i\in\{0,1\}.
$$

La variable binaria indica tomar o no tomar el ítem.

## Caso 3: Lot sizing básico

En planificación por periodos, se decide producción y, eventualmente, inventario para satisfacer demanda a costo mínimo. Lo central es escribir bien el balance intertemporal:

$$
I_{t-1} + q_t = d_t + I_t.
$$

Si este balance está mal, todo el modelo queda mal aunque el resto esté bien.

## Caso 4: Localización (primera aproximación)

Se decide dónde abrir instalaciones y cómo asignar clientes. Este tipo de problema ya muestra decisiones binarias de apertura más decisiones de asignación.

## Cierre

Estos casos parecen distintos, pero comparten la misma lógica:

1. variables claras,
2. restricciones que representen físicamente el sistema,
3. objetivo que mida lo que realmente se quiere optimizar.

Ese patrón es el que se reutiliza en todo el curso.
