# 4. Diseñe un menu de opciones para simular una calculadora con las siguientes operaciones:

# 	1. Sumar 2 numeros
# 	2. Restar 3 numeros
# 	3. Multiplicar 2 numeros
# 	4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 )
# 	0. Salir de la calculadora
# Cuando el usuario desee salir de la calculadora debe mostrar un mensaje de despedida en la consola.

# Definicion de variables
entrar = True


while entrar:
    # Creando el menu de entrada
    opcion = float(input('\nSeleccione una de las siguientes opciones, segun necesite:\n'
                         + '\n'
                         + '1. Sumar 2 numeros\n'
                         + '2. Restar 3 numeros\n'
                         + '3. Multiplicar 2 numeros\n'
                         + '4. Dividir 2 numeros  ( el divisor debe ser diferente de 0 )\n'
                         + '0. Salir de la calculadora\n'))

    if opcion < 0 or opcion > 4:
        print('\nError: Numero Invalido. Ingrese un numero entero de 0 a 4')
    else:
        if opcion == 1:
            print('\nSuma de dos numeros')
            numeroUno = float(input('\nIngrese el primer numero: '))
            numeroDos = float(input('Ingrese el segundo numero: '))
            suma = numeroUno + numeroDos
            print('La suma de', numeroUno, 'y', numeroDos, 'es', suma, '\n')
        elif opcion == 2:
            print('\nReasta de tres numeros')
            numeroUno = float(input('\nIngrese el primer numero: '))
            numeroDos = float(input('Ingrese el segundo numero: '))
            numeroTres = float(input('Ingrese el tercer numero: '))
            resta = numeroUno - numeroDos - numeroTres
            print('La resta de', numeroUno, 'y', numeroDos,
                  'y', numeroTres, 'es', resta, '\n')
        elif opcion == 3:
            print('\nMultiplicar dos numeros')
            numeroUno = float(input('\nIngrese el primer numero: '))
            numeroDos = float(input('Ingrese el segundo numero: '))
            multiplicacion = numeroUno * numeroDos
            print('La multiplicacion entre', numeroUno, 'y',
                  numeroDos, 'es', multiplicacion, '\n')
        elif opcion == 4:
            print('\nDivisón de  dos numeros')
            numeroUno = float(input('\nIngrese el primer numero: '))
            entrarDivision = True
            while entrarDivision:
                numeroDos = float(
                    input('Ingrese el divisor, recuerde que debe ser mayor que cero: '))
                if numeroDos == 0:
                    print('Error: Numero invalido. El numero no puede ser cero')
                else:
                    entrarDivision = False
            division = numeroUno / numeroDos
            print('La division entre', numeroUno, 'y',
                  numeroDos, 'es', division, '\n')
        elif opcion == 0:
            print('Gracias por haber usado nuestra calculadora, te esperamos pronto')
            entrar = False
