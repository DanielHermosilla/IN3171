---
title: "Uso rápido de Gurobi para IN3171"
---

## Esqueleto mínimo en Python

```python
import gurobipy as gp
from gurobipy import GRB

m = gp.Model("modelo")

# Variables
x = m.addVars(I, J, vtype=GRB.CONTINUOUS, lb=0, name="x")
y = m.addVars(J, vtype=GRB.BINARY, name="y")

# Función objetivo
m.setObjective(
    gp.quicksum(c[i, j] * x[i, j] for i in I for j in J)
    + gp.quicksum(f[j] * y[j] for j in J),
    GRB.MINIMIZE,
)

# Restricciones
m.addConstrs((gp.quicksum(x[i, j] for j in J) == d[i] for i in I), name="demanda")
m.addConstrs((x[i, j] <= U[i, j] * y[j] for i in I for j in J), name="acople")

m.optimize()

if m.Status == GRB.OPTIMAL:
    print("Obj:", m.ObjVal)
```

## Parámetros útiles

```python
m.Params.MIPGap = 0.001
m.Params.TimeLimit = 300
m.Params.OutputFlag = 1
```

## Lectura de resultados

- `m.ObjVal`: valor óptimo.
- `x[i,j].X`: valor de variable.
- `Constr.Pi` (en LP): precio sombra.

## Diagnóstico rápido

- `INF_OR_UNBD`: revisar dominios y cotas.
- MIP muy lento: revisar [Fortaleza de formulaciones](/02-modelacion-con-problemas-lineales-enteros/03-fortaleza-de-formulaciones/).
