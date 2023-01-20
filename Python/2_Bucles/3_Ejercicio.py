# 3.Diseñe un algoritmo en el cual solicite al usuario un numero entero positivo mayor a 10
#  y menor a 15 despues debe calcular el factorial de este numero
# e imprimirlo en pantalla.

# Definiendo datos de entrada
factorial = 1
entrar = True
numeroSelecionado = int(
    float(input('Ingrese un número entero mayor que 10 y menor a 15: ')))
while entrar:
    if numeroSelecionado < 10 and numeroSelecionado > 15:
        print('Error: numero no valido. El numero debe estar entre 10 y 15')
    else:
        entrar = False

# Calculando el factorial
for i in range(1, numeroSelecionado + 1):
    factorial = factorial * i

# Imprimiendo salida.
print('El factorial de ', numeroSelecionado, 'es', factorial)
