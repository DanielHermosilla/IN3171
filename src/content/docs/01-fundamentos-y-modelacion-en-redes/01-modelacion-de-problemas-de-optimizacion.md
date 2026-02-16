---
title: "Modelación de problemas de optimización"
---

Diremos que un problema de optimización consiste en elegir la "mejor decisión" dentro de un conjunto de "decisiones posibles". Algo a notar de tal definición es que las decisiones **están sujetas a restricciones *(trade-offs)***

El conjunto de decisiones posibles las denotaremos por $\Omega\subseteq\mathbb{R}^n$. Es decir, cada decisión de nuestro conjunto $\Omega$ está codificada como un vector. 

:::tip[Ejemplo]
Un ejemplo clásico es el de la creación de una dieta. Sabemos que las comidas tienen tres macronutrientes principales: *grasas*, *carbohidratos* y *proteínas*.

Nos podemos definir un vector $\mathbf{x}\in\mathbb{R}^3$, donde cada componente representa la cantidad de gramos de cada macronutriente a utilizar. Por ejemplo, podríamos imponer que el primer componente corresponda a los gramos de grasas a tener, el segundo los carbohidratos y el tercero las proteínas. 

Nuestro conjunto $\Omega$ correspondería a todos los vectores $\mathbf{x}\in\mathbb{R}^3$ que formen una combinación de macronutrientes acorde a nuestro problema. 
:::

## La mejor decisión 

Dada la definición anterior, es necesario poder formalizar lo que decimos que es una "mejor decisión". Para poder comparar la **utilidad/calidad** de cada decisión, es fundamental tener una función que tome como entrada el vector de decisión $(\mathbf{x})$ y nos devuelva un escalar que nos permita posicionar la decisión en la recta numérica. Formalmente, definimos a la **función objetivo** como una función definida como $f:\mathbb{R}^n\to\mathbb{R}$.

:::tip[Ejemplo]
Volviendo al ejemplo dietético, asumiremos que nuestro objetivo es formar la mejor asignación de macronutrientes tal que **minimicemos las calorías consumidas**. Por lo mismo, podríamos definirnos una función objetivo que nos diga la cantidad de calorías que tiene cada decisión. En específico, se dice que, en promedio, un gramo de grasas tiene 9kcal mientras que los carbohidratos y proteínas tienen 4kcal. Así, nos definimos la función $f:\mathbb{R}^3\to\mathbb{R}$ como:

$$
f(\mathbf{x})=9x_1+4x_2+4x_3
$$

Así, en palabras simples, nuestra función objetivo está transformando nuestro vector de decisión en un escalar (número real) que nos permitirá comparar distintas combinaciones de macronutrientes (decisiones).
:::

Habiendo dicho lo anterior, bastaría definir cómo se construye la definición de "mejor". Aquí, simplemente, diremos que lo óptimo será aquella combinación que logre el **mínimo** (o máximo) valor en la función objetivo. Algunas veces conviene **maximizar** la función objetivo, como otras veces **minimizar**. En la práctica, uno puede asumir que siempre minimiza ya que: 

$$
\max\lbrace f(x)\;:\;x\in\Omega\rbrace = -\min\lbrace -f(x)\;:\;x\in\Omega\rbrace
$$

## Definición de restricciones

Como se mencionó anteriormente, la gracia de las decisiones es que, por lo general, están sujetas a un conjunto de *trade-offs*. De tal forma, definiremos las restricciones como un conjunto de funciones definidas en el mismo dominio que las decisiones $g:\mathbb{R}^n\to\mathbb{R}$. En ese sentido, estas funciones $g(x)$ convertirán nuestro vector de decisión a un escalar, y diremos que el resultado deberá cumplir alguna condición, por lo general, $g_i(x)\leq 0$. 

:::tip[Ejemplo]
En el ejemplo de la dieta, podríamos asumir que la combinación de alimentos no puede sobrepasar las 2000kcal, pero debe tener, como mínimo, 1400 kcal. Así, nos podemos definir las siguientes dos funciones: 

$$
\begin{aligned}
g_1(x) &= 9x_1 + 4x_2 + 4x_3 \geq 1400 \\ \\
g_2(x) &= 9x_1 + 4x_2 + 4x_3 \leq 2000
\end{aligned}
$$

Por lo tanto, garantizamos que nuestra dieta esté ubicada en tal rango calórico.
:::

Teniendo lo anterior definido, un problema de optimización siempre tiene la forma: 

$$
\begin{aligned}
\min\backslash\max f(x)&\\ \\
g_1(x)&\leq 0\\ \\
g_2(x)&\leq 0\\ \\
\vdots&\\ \\
g_m(x)&\leq 0\\ \\
x&\in D
\end{aligned}
$$

Donde $D$ normalmente es $\mathbb{R}^n$ o $\mathbb{Z}^n$. El dominio, $D$, nos dirá si el problema es **continuo, entero o mixto**. Por lo general, se trabajará con dominios del tipo: 

$$
D=\lbrace x\in\mathbb{R}^n\;:\;x_j\geq 0\;j\in N,\;x_i\in\mathbb{Z}\;i\in I\rbrace
$$
