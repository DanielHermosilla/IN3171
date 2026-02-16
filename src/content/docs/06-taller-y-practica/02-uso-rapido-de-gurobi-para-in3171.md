---
title: "Uso rápido de Gurobi para IN3171"
---

Esta guía es un punto de partida para llevar un modelo matemático a código de forma limpia.

## Esqueleto mínimo en Python

```python
import gurobipy as gp
from gurobipy import GRB

m = gp.Model("modelo")

# Variables
x = m.addVars(I, J, lb=0.0, vtype=GRB.CONTINUOUS, name="x")
y = m.addVars(J, vtype=GRB.BINARY, name="y")

# Objetivo
m.setObjective(
    gp.quicksum(c[i, j] * x[i, j] for i in I for j in J)
    + gp.quicksum(f[j] * y[j] for j in J),
    GRB.MINIMIZE,
)

# Restricciones
m.addConstrs((gp.quicksum(x[i, j] for j in J) == d[i] for i in I), name="demanda")
m.addConstrs((x[i, j] <= M[i, j] * y[j] for i in I for j in J), name="acople")

m.optimize()
```

## Buenas prácticas mínimas

- nombrar restricciones para depurar,
- revisar estado del modelo (`m.Status`) antes de leer solución,
- imprimir variables relevantes y valor objetivo,
- validar que la solución tenga sentido operacional.

## Diagnóstico básico de resultados

- `OPTIMAL`: solución óptima encontrada,
- `INFEASIBLE`: revisar formulación o datos,
- `UNBOUNDED`: revisar cotas/estructura del objetivo.

:::tip[Ejemplo guiado]
Si un modelo binario arroja variables continuas fraccionarias, revisa que el `vtype` sea realmente `GRB.BINARY` y que no estés leyendo la relajación por error.
:::
