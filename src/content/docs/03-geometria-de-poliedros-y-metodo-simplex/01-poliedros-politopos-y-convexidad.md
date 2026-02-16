---
title: "Poliedros, politopos y convexidad"
---

## Definiciones

- Semiespacio:

$$
S_{a,b}=\{x\in\mathbb{R}^n: a^\top x\le b\}.
$$

- Hiperplano:

$$
H_{a,b}=\{x\in\mathbb{R}^n: a^\top x=b\}.
$$

- Poliedro:

$$
P=\{x\in\mathbb{R}^n: Ax\le b\}.
$$

- Politopo: poliedro acotado.

## Convexidad

Un conjunto $C$ es convexo si

$$
\lambda x + (1-\lambda)y\in C,
\quad \forall x,y\in C,\; \forall \lambda\in[0,1].
$$

Todo poliedro es convexo porque es intersección de semiespacios convexos.

## Envoltura convexa

$$
\operatorname{conv}(S)=\left\{\sum_{k=1}^r \lambda_k x^k : \lambda_k\ge 0,\; \sum_{k=1}^r\lambda_k=1,\; x^k\in S\right\}.
$$

La envolvente convexa de soluciones enteras es la meta geométrica de cortes en PLE.

![geometria lineal imagen 01](/img/geometria-lineal-imagen-01.png)
![geometria lineal imagen 02](/img/geometria-lineal-imagen-02.jpeg)
