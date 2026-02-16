---
title: "Forma lineal y transformaciones"
---

Recordando la forma estándar de un problema de modelación: 

$$
\begin{aligned}
\min/\max\; f(x)&\\ \\
g_1(x)&\leq 0\\ \\
g_2(x)&\leq 0\\ \\
\vdots&\\ \\
g_m(x)&\leq 0\\ \\
x&\in D
\end{aligned}
$$

En base al tipo de funciones $f$ y $g_i$, y a qué tipo de dominio es $D$, los problemas de optimización tienen distintas clasificaciones. 

- **Con o sin restricciones**: Si el problema no posee las funciones $g_i$, es decir, $m=0$, entonces se dirá que es un **problema irrestricto**. 
- **Lineal o no lineal**: Si podemos expresar $f(x)$ como $f(x)=c^Tx+d$ y $g_i(x)=a_{i}^Tx+b$, entonces **el problema será lineal**. 
- **Continuo, entero o mixto**: Sabemos que podemos expresar $D$ como $D=\lbrace x\in\mathbb{R}^n\;:\;x_j\geq 0\;\;j\in N,\; x_i\in\mathbb{Z}\;\;i\in I\rbrace$. Si $I=\emptyset$, el problema será continuo. Si $I=\lbrace 1,2,3,\dots,n\rbrace$, el problema es entero. Si no, el problema es mixto. 

# Problemas lineales 

## Forma matricial

Un problema lineal (PL) en forma compacta:

$$
\min c^\top x \quad \text{s.a.} \quad Ax \le b.
$$

Con $A\in\mathbb{R}^{m\times n}$, $b\in\mathbb{R}^m$, $c\in\mathbb{R}^n$. Notamos que $A$ va a ser una matriz donde estarán los coeficientes de las funciones $g_i(x)$, mientras que $c$ será un vector donde estarán los coeficientes de la **función objetivo**. 

## Forma estándar

Denotaremos como forma estándar los problemas de la forma

$$
\min c^\top x \quad \text{s.a.} \quad Ax=b,\; x\ge 0.
$$

## Transformaciones equivalentes

Casi siempre vamos a querer trabajar en forma estándar, por lo mismo, hay que introducir transformaciones a nuestras formulaciones para poder llegar al formato estándar. 

### 1) Restricciones $\le$ a igualdad

Si $a_i^\top x\le b_i$, introducir holgura $s_i\ge 0$:

$$
a_i^\top x + s_i = b_i.
$$

Es decir, podemos definir una variable extra, expandiendo la dimensión de nuestro vector de decisión, tal que las restricciones pasan a estar en formato de igualdad. 

:::tip[Ejemplo]
Consideremos la restricción $x_1+x_2\leq 10$, con $x_1\geq 0$ y $x_2\geq 0$. Podríamos reescribir el problema con el siguiente conjunto factible $\mathcal{F}=\lbrace (x_1, x_2)\in\mathbb{R}^{2}_{+}\;:\;x_1+x_2\leq 10\rbrace$. 

Ahora, para poder pasar al **formato estándar**, donde las restricciones tienen igualdades, introducimos una variable de holgura $s\geq 0$, tal que $x_1+x_2+s=10$, con $x_1,x_2,s\geq 0$. Esto nos dará el conjunto factible $\mathcal{F}'=\lbrace (x_1,x_2,s)\in\mathbb{R}^{3}_{+}\;:\;x_1+x_2+s=10\rbrace$.

Notemos que $\mathcal{F}\iff\mathcal{F}'$:

- Caso $\mathcal{F}\implies\mathcal{F}'$: Si $(x_1,x_2)$ cumple $x_1+x_2\leq 10$, entonces definimos $s:= 10-(x_1+x_2)\geq 0$. Entonces $x_1+x_2+s=10$. 
- Caso $\mathcal{F}'\implies\mathcal{F}$: Si $(x_1, x_2, s)$ cumple $x_1+x_2+s=10,\;\;s\geq 0$, entonces necesariamente $x_1+x_2=10-s\leq 10$. 
:::

### 2) Variable libre

Muchas veces, nuestras variables estarán definidas en $\mathbb{R}$. La formulación estándar nos pide que todas las variables deben ser no negativas. Por lo mismo, si $x_j\in\mathbb{R}$, usamos la siguiente descomposición:

$$
x_j = x_j^+ - x_j^-, \quad x_j^+,x_j^-\ge 0.
$$

Es decir, separamos nuestra variable "libre" (se le dirá variable libre a aquellas variables definidas en $\mathbb{R}$) en su componente positivo y negativo. 

:::tip[Ejemplo]
Consideremos una variable libre $x\in\mathbb{R}$, es decir, $x$ no está restringida a ser no negativa. Supongamos que esta variable aparece en una formulación de optimización lineal, pero queremos llevar el problema al **formato estándar**, donde todas las variables deben ser no negativas.

Para ello, introducimos dos variables $x^{+}\geq 0$ y $x^{-}\geq 0$, y definimos
$$
x := x^{+} - x^{-}.
$$

De esta forma, cualquier valor real de $x$ puede representarse como la diferencia de dos variables no negativas. El conjunto factible original asociado a $x$ es
$$
\mathcal{F}=\lbrace x\in\mathbb{R}\rbrace,
$$
mientras que el conjunto factible transformado es
$$
\mathcal{F}'=\lbrace (x^{+},x^{-})\in\mathbb{R}^{2}_{+}\rbrace,
$$
junto con la relación $x=x^{+}-x^{-}$.

Notemos que $\mathcal{F}\iff\mathcal{F}'$:

- Caso $\mathcal{F}\implies\mathcal{F}'$: Dado cualquier $x\in\mathbb{R}$, podemos definir $x^{+}:=\max\{x,0\}$ y $x^{-}:=\max\{-x,0\}$. Entonces $x^{+},x^{-}\geq 0$ y se cumple que $x=x^{+}-x^{-}$.
- Caso $\mathcal{F}'\implies\mathcal{F}$: Dado cualquier par $(x^{+},x^{-})$ con $x^{+},x^{-}\geq 0$, la expresión $x=x^{+}-x^{-}$ define un valor real, por lo que $x\in\mathbb{R}$.

Por lo tanto, reemplazar una variable libre por la diferencia de dos variables no negativas es una transformación equivalente que permite llevar la formulación al formato estándar.
:::

### 3) Restricción $\ge$

Si $a_i^\top x\ge b_i$, multiplicar por $-1$ para obtener una restricción del tipo $\le$.

--- 

:::danger[Calidad numérica]
Aunque dos modelos sean matemáticamente equivalentes, no siempre son numéricamente igual de buenos (ver [Fortaleza de formulaciones](/IN3171/02-modelacion-con-problemas-lineales-enteros/03-fortaleza-de-formulaciones/) para el caso entero con Big-M). No obstante, más adelante veremos que es necesario trabajar con **formulación estándar** para poder resolver los problemas mediante los algoritmos clásicos. 
:::

<!-- ## Geometría rápida -->
<!---->
<!-- Cada desigualdad lineal define un semiespacio. La intersección de semiespacios define un poliedro: -->
<!---->
<!-- $$ -->
<!-- P = \{x\in\mathbb{R}^n: Ax\le b\}. -->
<!-- $$ -->
<!---->
<!-- Este objeto geométrico es la base de la Unidad 3. -->
