---
title: "Guía de estudio para controles y examen"
---

## Ruta mínima (si tienes poco tiempo)

1. [Algoritmo Simplex primal](/03-geometria-de-poliedros-y-metodo-simplex/05-algoritmo-simplex-primal/)
2. [Dualidad débil y fuerte](/04-dualidad-y-sensibilidad-de-soluciones-optimas/02-dualidad-debil-y-fuerte/)
3. [Holgura complementaria](/04-dualidad-y-sensibilidad-de-soluciones-optimas/03-holgura-complementaria/)
4. [Branch and Bound](/02-modelacion-con-problemas-lineales-enteros/05-branch-and-bound/)
5. [Condiciones KKT](/05-elementos-de-optimizacion-no-lineal/05-condiciones-kkt/)

## Qué dominar sí o sí

- Formular modelos limpios con variables bien definidas.
- Resolver PL pequeños por bases/costos reducidos.
- Construir dual sin equivocarse en signos.
- Usar holgura complementaria para certificar optimalidad.
- Entender cota de relajación y poda en B&B.
- Escribir y verificar KKT correctamente.

## Mapa de dependencias

- Modelación $\rightarrow$ Simplex $\rightarrow$ Dualidad $\rightarrow$ Sensibilidad.
- Modelación entera + relajación $\rightarrow$ B&B + cortes.
- Convexidad + dualidad $\rightarrow$ KKT + Slater.

## Error más costoso en evaluación

Perder puntos por notación inconsistente. Recomendación: declarar conjuntos, índices, variables y dominios antes de escribir la FO.
