---
title: "Lagrangeano y función dual"
---

El Lagrangeano permite incorporar restricciones en una sola función penalizada por multiplicadores.

## Definición

Para

$$
\min f(x)\ \text{s.a.}\ g_i(x)\le 0,\ h_j(x)=0,
$$

se define

$$
L(x,\lambda,\mu)=f(x)+\sum_{i=1}^m \lambda_i g_i(x)+\sum_{j=1}^p \mu_j h_j(x),
$$

con $\lambda\ge 0$.

## Función dual

$$
d(\lambda,\mu)=\inf_x L(x,\lambda,\mu).
$$

Problema dual:

$$
\max_{\lambda\ge 0,\mu}\ d(\lambda,\mu).
$$

## Dualidad débil no lineal

Para todo $x$ primal factible y todo $(\lambda,\mu)$ dual factible,

$$
d(\lambda,\mu)\le f(x).
$$

:::tip[Ejemplo guiado]
Si eliges multiplicadores que penalizan fuertemente una restricción violada, el Lagrangeano "empuja" la solución hacia zonas factibles. La función dual captura la mejor cota inferior que puedes construir con ese mecanismo.
:::

## Uso en la unidad

Lagrangeano + convexidad + condiciones de regularidad llevan a KKT y dualidad fuerte.
