
# //Un zoólogico pretende determinar el % de animales que hay en 3 catergorias
# // de edades:
# // 0 a 1 años
# // Mas de un 1 año y menos de 3 años
# // De de 3 años o mas.

# // El zoólogico todavía no esta seguro del animal que va a estudiar.
# // Si decide elefantes tomará una muestra de 20 de ellos
# // Si decide jirafas tomará una muestra de 15 de ellos
# // Si decide chimpanses tomará una muestra de 40 de ellos


# //Definiendo variable para el tipo de animal.
tipoAnimal = 0
numeroMuestras = 0
edad = 0

contadorElefanteCeroAUno = 0
contadorElefanteUnoATres = 0
contadorElefanteTresAMas = 0

contadorJirafaCeroAUno = 0
contadorJirafaUnoATres = 0
contadorJirafaTresAMas = 0

contadorChimpanseCeroAUno = 0
contadorChimpanseUnoATres = 0
contadorChimpanseTresAMas = 0

contadorAnimales = 1
entrar = True

#validacion de datos de entrada: El tipo de animal
while entrar:
        tipoAnimal = float(input('Ingrese el tipo de animal a estudiar, Asi:\n'
                                            + '" 1 " para Elefante. \n'
                                            + '" 2 " para Jirafa. \n'
                                            + '" 3 " para Chimpase. \n'))
        if tipoAnimal <= 0 or tipoAnimal > 3 :
            print("Error: Tipo de dato invalido. Ingrese el un numero entero entre 0 y 3")
        else:
            entrar = False

# Validacion de la edad del animal y la logica del algoritmo
if tipoAnimal == 1: # Elefantes
    numeroMuestras = 2 #Se cambia el numero de muestras para realizar prueba

    for i in range(0,numeroMuestras):
        edad = float(input("Ingrese la edad del animal: "))
        if edad < 0:
            print("Error: Numero invalido. Ingrese de nuevo la edad: ")
        else:
            if edad >= 0 and edad <= 1:
                contadorElefanteCeroAUno += 1
                contadorAnimales += 1
            elif edad > 1 and edad < 3:  
                contadorElefanteUnoATres += 1 
                contadorAnimales += 1 
            elif edad >= 3:
                contadorElefanteTresAMas += 1 
                contadorAnimales += 1
             

    contadorAnimales -=1 #Se reduce en 1 para ajustar contador a valor real y evitar la divison por cero
            #impresionde resultados
    print("El promedio de edad de elefantes de 0 a 1 años es de:", round(contadorElefanteCeroAUno * 100 / contadorAnimales,2),"%")
    print("El promedio de edad de elefantes de mas de 1 año y menos de 3 años es:", round(contadorElefanteUnoATres * 100 / contadorAnimales,2),"%")
    print("EL promedio de edad de elefantes de mas de 3 años es:", round(contadorElefanteTresAMas * 100 / contadorAnimales,2),"%")                
    
                
elif tipoAnimal == 2: #Jirafa
    numeroMuestras = 3#Se cambia el numero de muestras para realizar prueba

    for i in range(0,numeroMuestras):
        edad = float(input("Ingrese la edad del animal: "))
        if edad < 0:
            print("Error: Numero invalido. Ingrese de nuevo la edad: ")
        else:
            if edad >= 0 and edad <= 1:
                contadorJirafaCeroAUno += 1
                contadorAnimales += 1
            elif edad > 1 and edad < 3:  
                contadorJirafaUnoATres += 1 
                contadorAnimales += 1 
            elif edad >= 3:
                contadorJirafaTresAMas += 1 
                contadorAnimales += 1 

    
    contadorAnimales -=1 #Se reduce en 1 para ajustar contador a valor real y evitar la divison por cero
           #impresionde resultados
    print("El promedio de edad de las Jirafas de 0 a 1 años es de:", round(contadorJirafaCeroAUno * 100 / contadorAnimales,2),"%")
    print("El promedio de edad de las Jirafas de mas de 1 año y menos de 3 años es:", round(contadorJirafaUnoATres * 100 / contadorAnimales,2),"%")
    print("EL promedio de edad de las Jirafas de mas de 3 años es:", round(contadorJirafaTresAMas* 100 / contadorAnimales,2),"%")       

elif tipoAnimal == 3: #Chimpanses
    numeroMuestras = 4#Se cambia el numero de muestras para realizar prueba

    for i in range(0,numeroMuestras):
        edad = float(input("Ingrese la edad del animal: "))
        if edad < 0:
            print("Error: Numero invalido. Ingrese de nuevo la edad: ")
        else:
            if edad >= 0 and edad <= 1:
                contadorChimpanseCeroAUno += 1
                contadorAnimales += 1
            elif edad > 1 and edad < 3:  
                contadorChimpanseUnoATres += 1 
                contadorAnimales += 1 
            elif edad >= 3:
                contadorChimpanseTresAMas += 1 
                contadorAnimales += 1 

    
    contadorAnimales -=1 #Se reduce en 1 para ajustar contador a valor real y evitar la divison por cero
          #impresionde resultados
    print("EL promedio de edad de los Chipanses de 0 a 1 años es de:", round(contadorChimpanseCeroAUno * 100 / contadorAnimales,2),"%")
    print("El promedio de edad de los Chimpanses de mas de 1 año y menos de 3 años es:", round(contadorChimpanseUnoATres * 100 / contadorAnimales,2),"%")
    print("EL promedio de edad de los Chimpanses de mas de 3 años es:", round(contadorChimpanseTresAMas * 100 / contadorAnimales,2),"%")                




