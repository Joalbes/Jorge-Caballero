# Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm.

#  Los 2 valores ingresados no pueden ser iguales,
#  ademas el algoritmo  debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm,

#  si no lo son el algoritmo debe imprimir el valor de la
#  base multiplicado por 2 y sumarle 10.

altura = float(input('Ingrese la altura del triangulo: '))
base = float(input('Ingrese la base del trinagulo, recuerde que el valor debe ser diferente al de la altura: '))

#validacion de los datos
if altura == base or altura <= 0 or base <= 0 :
    print('Error: Dato no valido, verifique que el valor de la altura y la base sean diferentes y positivos')
else:
    if base > 5 and altura > 4 :
        area = base * altura / 2
    else:
        area = 2 * base + 10

    #Imprimiendo el área del triangulo
    print("Area del trangulo: " + str(area))        