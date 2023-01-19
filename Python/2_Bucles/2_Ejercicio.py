# 2.Diseñe un algoritmo en el cual el usuario deba ingresar 2 numeros enteros n y m.
# Estos numeros serviran para definir un intervalo.
#  La funcion del algoritmo 
# sera sumar todos los numeros pares que se encuentren dentro del intervalo [n.m].

#Definicion del intervalo
entrar = True
sumaPares = 0

while entrar:
    limiteInferior = float(input('Ingrese el limite inferior del intervalo: '))
    if limiteInferior < 0:
        print('Ingrese Un numero mayor o igual que cero: ')
    else:
        limiteSuperior = float(input('Ingrese el limite superior: '))
        if limiteSuperior <= limiteInferior:
            print('Error: Numero no valido. Recuerde que el limite superior debe ser mayor que',limiteInferior)
        else:
            entrar = False

#Logica del ejercicio:
limiteInferior = int(limiteInferior)
limiteSuperior = int(limiteSuperior) 
for i in range (limiteInferior, limiteSuperior + 1):
    residuo = i % 2
    if residuo == 0:
        sumaPares += i 
    else:
        continue    

#Imprimir sumatoria
print('La sumatoria de terminos pares dentro del intervalo [', limiteInferior, ',', limiteSuperior , '] es: ',sumaPares)                   


