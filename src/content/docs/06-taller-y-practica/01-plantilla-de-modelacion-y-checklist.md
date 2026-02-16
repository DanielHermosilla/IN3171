---
title: "Plantilla de modelación y checklist"
---

## Plantilla rápida

### 1) Conjuntos e índices

Definir explícitamente $I,J,T,\dots$.

### 2) Parámetros

Declarar unidades (costo, capacidad, demanda, tiempo).

### 3) Variables

Ejemplo:

$$
x_{ij}=\text{flujo de }i\text{ a }j,
\qquad
y_j\in\{0,1\}=\text{instalación abierta}.
$$

### 4) Función objetivo

$$
\min \sum c_{ij}x_{ij} + \sum f_j y_j.
$$

### 5) Restricciones

- Conservación/balance.
- Capacidad.
- Lógica de activación.
- Dominio de variables.

## Checklist antes de resolver

- ¿Cada variable está acotada o naturalmente controlada?
- ¿Los signos de restricciones tienen sentido físico?
- ¿Falta alguna restricción de asignación/cobertura/unicidad?
- ¿Big-M está ajustado?
- ¿Hay simetrías evitables?

## Checklist después de resolver

- ¿La solución respeta dominio entero/binario?
- ¿La magnitud del valor objetivo es razonable?
- ¿La interpretación en texto coincide con variables activas?
