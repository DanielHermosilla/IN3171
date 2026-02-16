---
title: "Branch-and-Cut y práctica computacional"
---

## Arquitectura estándar en solvers modernos

Branch-and-Cut = Branch-and-Bound + generación dinámica de cortes.

En cada nodo:

1. Resolver relajación LP.
2. Separar cortes (cover, Gomory, MIR, etc.).
3. Re-optimizar LP.
4. Si sigue fraccional, ramificar.

## Cotas globales

En minimización:

- Cota inferior global: mejor bound entre nodos abiertos.
- Cota superior global: incumbente entero actual.

Se detiene cuando

$$
\frac{z_{UB}-z_{LB}}{\max(1,|z_{UB}|)} \le \varepsilon.
$$

## Recomendaciones de modelación (muy prácticas)

1. Escalar datos para evitar coeficientes extremos.
2. Usar cotas ajustadas de variables.
3. Evitar Big-M enorme.
4. Incluir desigualdades válidas evidentes desde el dominio.
5. Revisar simetrías y romperlas cuando sea posible.

## Conexiones

- Teoría de cortes: [Planos cortantes y desigualdades válidas](/02-modelacion-con-problemas-lineales-enteros/06-planos-cortantes-y-desigualdades-validas/).
- Implementación básica: [Uso rápido de Gurobi para IN3171](/06-taller-y-practica/02-uso-rapido-de-gurobi-para-in3171/).

![branch and cut imagen 02](/img/branch-and-cut-imagen-02.jpeg)
![branch and cut imagen 03](/img/branch-and-cut-imagen-03.jpeg)
