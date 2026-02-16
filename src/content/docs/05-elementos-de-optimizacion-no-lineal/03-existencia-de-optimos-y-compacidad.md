---
title: "Existencia de óptimos y compacidad"
---

## Teorema de Weierstrass (versión útil)

Si $S$ es no vacío, cerrado y acotado (compacto) y $f$ es continua, entonces

$$
\min\{f(x):x\in S\}
$$

admite solución óptima global.

## Por qué importa

Antes de buscar KKT o algoritmos, primero conviene asegurar existencia:

1. factibilidad,
2. coercividad/compacidad,
3. continuidad.

## No existencia típica

Cuando $S$ es abierto o no acotado, puede haber ínfimo sin minimizador.

Ejemplo:

$$
\min\{x: x>0\}=0 \quad \text{(inf)}
$$

pero no se alcanza.

## Enlace

Con existencia garantizada y convexidad, KKT pasa a ser herramienta central (ver [Condiciones KKT](/05-elementos-de-optimizacion-no-lineal/05-condiciones-kkt/)).
