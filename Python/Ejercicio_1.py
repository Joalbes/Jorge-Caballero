
#1.Desarrolle un algoritmo que permita leer 3 números enteros.
# El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
# Ademas ninguno de los 3 numeros ingresados pueden ser iguales.
# En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.

#Validacion de los datos
numero1 =  input('Digite un número entero: ')
numero2 = input('Ingrese otro numero: ')
if numero1 == numero2:
    print('Error: Los números son iguales, intente de nuevo ')
else:
    numero3= input('Ingrese el último número: ') 
    if numero3 == numero1 or numero3 == numero2:
        print('Error: Los números son iguales, intente de nuevo')
    else:
        if numero1 > numero2 and numero1 > numero3:
                print('Mayor = ' + numero1)
        if numero2 > numero1 and numero2 > numero3:
                print('Mayor = ' + numero2)  
        if numero3 > numero2 and numero3 > numero2:
                print('Mayor = ' + numero3)

        if numero1 < numero2 and numero1 < numero3:
                print('Menor = ' + numero1)
        if numero2 < numero1 and numero2 < numero3:
                print('Menor = ' + numero2)  
        if numero3 < numero2 and numero3 < numero2:
                print('Menor = ' + numero3)                    
            





      