---
title: "Lagrangeano y función dual"
---

## Lagrangeano

Para

$$
\min f(x)\ \text{s.a.}\ g_i(x)\le 0,\ h_j(x)=0,
$$

definimos

$$
L(x,\lambda,\mu)=f(x)+\sum_{i=1}^m \lambda_i g_i(x)+\sum_{j=1}^p \mu_j h_j(x),
$$

con $\lambda\ge 0$.

## Función dual

$$
d(\lambda,\mu)=\inf_x L(x,\lambda,\mu).
$$

Siempre se cumple dualidad débil:

$$
d(\lambda,\mu)\le p^* \quad \forall \lambda\ge 0,\mu.
$$

Problema dual:

$$
\max\{d(\lambda,\mu): \lambda\ge 0\}.
$$

## Interpretación

La dualidad lagrangeana convierte restricciones en penalización. Elegir multiplicadores buenos da cotas fuertes.

## Caso lineal

En PL, este procedimiento reproduce exactamente el dual clásico (ver [Dualidad lagrangeana en PL y en redes](/04-dualidad-y-sensibilidad-de-soluciones-optimas/07-dualidad-lagrangeana-en-pl-y-en-redes/)).
