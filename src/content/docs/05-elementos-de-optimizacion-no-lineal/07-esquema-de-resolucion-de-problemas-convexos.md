---
title: "Esquema de resolución de problemas convexos"
---

Esta nota resume el flujo de trabajo recomendado para ejercicios de optimización convexa con restricciones.

## Paso 1: Diagnóstico estructural

- verificar convexidad de $f$,
- verificar convexidad de restricciones $g_i$,
- revisar que igualdades sean afines.

## Paso 2: Factibilidad y regularidad

- verificar que el conjunto factible no esté vacío,
- buscar punto de Slater cuando corresponda.

## Paso 3: Sistema KKT

Escribir:

- estacionariedad,
- factibilidad primal,
- factibilidad dual,
- holgura complementaria.

## Paso 4: Resolver por casos

Identificar restricciones activas probables y resolver el sistema asociado. Luego validar factibilidad completa.

## Paso 5: Cierre

Confirmar que el candidato obtenido cumple todas las condiciones y reportar valor objetivo con interpretación.

:::tip[Ejemplo guiado]
Si te cuesta resolver directamente, parte asumiendo un conjunto activo pequeño y verifica consistencia. Si no cierra (por signo de multiplicadores o violación de factibilidad), cambia hipótesis de conjunto activo.
:::

Este esquema evita saltos lógicos y reduce errores de álgebra en controles/examen.
