---
title: "Lema de Farkas y teoremas de alternativas"
---

El Lema de Farkas formaliza una idea geométrica muy potente: o un sistema tiene solución no negativa, o existe un certificado lineal que demuestra que no la tiene, pero no ambas cosas a la vez.

## Forma clásica

Exactamente uno de estos sistemas es factible:

1.
$$
Ax=b,\quad x\ge 0.
$$

2.
$$
A^\top y\ge 0,\quad b^\top y<0.
$$

## Interpretación geométrica

- o bien $b$ pertenece al cono generado por las columnas de $A$,
- o bien existe un hiperplano que separa a $b$ de ese cono.

Esto conecta directamente con la idea de certificados de infactibilidad.

:::tip[Ejemplo guiado]
Cuando una relajación lineal sale infactible, no significa solo "el solver no encontró". Significa que existe evidencia matemática (certificado) de que no hay solución, y Farkas explica la forma de esa evidencia.
:::

## Relevancia en el curso

Farkas aparece como base conceptual para teoremas de alternativas, dualidad y certificados formales en PL.
