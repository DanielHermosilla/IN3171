---
title: "Esquema de resolución de problemas convexos"
---

## Workflow sugerido

1. Verificar convexidad de $f$ y de cada $g_i$.
2. Verificar factibilidad y, si se puede, Slater.
3. Escribir Lagrangeano y KKT.
4. Identificar restricciones activas candidatas.
5. Resolver sistema de ecuaciones KKT por casos.
6. Verificar factibilidad final y seleccionar mínimo.

## Plantilla algebraica

Para cada conjunto activo $\mathcal{A}$:

$$
\begin{cases}
\nabla f(x)+\sum_{i\in\mathcal{A}}\lambda_i\nabla g_i(x)+\sum_j\mu_j\nabla h_j(x)=0,\\
g_i(x)=0,\ i\in\mathcal{A},\\
g_i(x)<0,\ i\notin\mathcal{A},\\
\lambda_i\ge 0.
\end{cases}
$$

## Errores frecuentes

- Omitir factibilidad primal al final.
- Usar KKT como suficiente sin convexidad.
- Ignorar signos de multiplicadores.

## Cierre de curso

Este esquema conecta naturalmente con dualidad lineal: ambos mundos usan multiplicadores como precios/sensibilidades, pero en no lineal aparecen términos de curvatura y regularidad.
