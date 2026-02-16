---
title: "Plantilla de modelación y checklist"
---

Usa esta plantilla cada vez que modeles un problema nuevo. Evita errores típicos de formulación y mejora claridad.

## Paso 1: Definir conjuntos e índices

Declara explícitamente qué representa cada índice (cliente, planta, periodo, etc.).

## Paso 2: Definir parámetros

Anota unidades y significado de cada parámetro. Si mezclas unidades, el modelo puede quedar incoherente aunque "corra".

## Paso 3: Definir variables de decisión

Para cada variable, escribe una frase del tipo:

$$
x_{ij} = \text{cantidad enviada desde } i \text{ hacia } j.
$$

o

$$
y_j \in \{0,1\} = \text{1 si se abre instalación } j.
$$

## Paso 4: Función objetivo

Debe responder exactamente la pregunta del problema: minimizar costo, maximizar utilidad, minimizar distancia máxima, etc.

## Paso 5: Restricciones

Agrúpalas por significado:

- capacidad,
- balance,
- asignación,
- lógica de activación,
- dominio/tipo de variable.

## Checklist final

- ¿Todas las variables están tipadas?
- ¿Todas las restricciones usan unidades compatibles?
- ¿El objetivo está alineado con la pregunta del enunciado?
- ¿El modelo permite soluciones absurdas por omisión de alguna restricción?

:::tip[Ejemplo guiado]
Si en un problema de asignación no incluyes la restricción "cada tarea se asigna a exactamente una máquina", el solver podría dejar tareas sin asignar y aun así declarar óptimo. El error no es del solver: es de formulación.
:::
