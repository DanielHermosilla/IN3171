---
title: "Formulación dual general"
---

La construcción del dual sigue reglas de correspondencia entre restricciones del primal y variables duales, y entre variables del primal y restricciones duales.

## Regla estructural

Partiendo de un primal de minimización, cada fila del primal genera una variable dual, y cada columna del primal genera una restricción dual.

El signo/tipo se hereda así:

- restricción primal "$\ge$" $\Rightarrow$ dual no negativa,
- restricción primal "$\le$" $\Rightarrow$ dual no positiva,
- restricción primal "=" $\Rightarrow$ dual libre.

Para variables primales:

- $x_j\ge 0$ $\Rightarrow$ restricción dual tipo "$\le$",
- $x_j\le 0$ $\Rightarrow$ restricción dual tipo "$\ge$",
- $x_j$ libre $\Rightarrow$ restricción dual en igualdad.

## Forma compacta

El objetivo dual usa el lado derecho del primal, y la matriz aparece transpuesta.

:::tip[Ejemplo guiado]
Si en el primal una restricción representa disponibilidad de recurso, en el dual su variable asociada puede interpretarse como valor marginal de ese recurso.

Por eso es clave no equivocarse en signos: cambiar "$\le$" por "$\ge$" altera completamente la interpretación económica.
:::

## Recomendación

Antes de simplificar algebraicamente, escribe la tabla de correspondencias fila-a-variable y columna-a-restricción. Eso reduce errores en la formulación dual.
