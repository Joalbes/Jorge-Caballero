# 1. Haga la sucesion de Fibonacci

# Definicion de variables
actual = 1
anterior = 0


# Ingresar el numero de terminos de la serie Fibonacci
numeroDeTerminos = float(input(
    'Ingrese el numero de terminos de la sucesion de Fibonacci que desea Imprimir: '))
numeroDeTerminos = int(numeroDeTerminos)

# Validadacion

print('terminos:')
print(anterior)
for i in range(1, numeroDeTerminos + 1):
    proximo = actual + anterior
    anterior = actual
    actual = proximo
    print(proximo)
