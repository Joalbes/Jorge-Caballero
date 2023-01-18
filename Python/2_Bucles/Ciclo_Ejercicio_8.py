
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
entrar = True

#validacion de datos de entrada: El tipo de animal
while entrar:
        tipoAnimal = float(input('Ingrese el tipo de animal a estudiar, Asi:\n'
                                            + '" 1 " para Elefante. \n'
                                            + '" 2 " para Jirafa. \n'
                                            + '" 3 " para Chimpase. \n'
                                            + '" 0 "para salir ' ))

        
        if tipoAnimal < 0 or tipoAnimal > 3 :
            print('Error: Dato invalido, verifique que su dato este entre 0 y 3')
        else:
            if tipoAnimal == 1:      #Se eligio Elefenates
                numeroMuestras = 20
            elif tipoAnimal == 2:    #Se eligio Jirafas 
                numeroMuestras = 15
            elif tipoAnimal == 3:    #Se eligio Chipanses
                numeroMuestras = 40  
            entrar = False

entrarWhile2 = True

#validacion de datos de entrada: Edad del animal.
while entrarWhile2:
        edad = float(input('Ingrese la edad del animal, Asi:\n')                                        + '" 0 "para salir ' ))

        
        if edad < 0 :
            print('Error: Dato invalido, verifique que la edad sea positiva')
        else:
            if edad >= 0 and edad <= 1:      #primer rango
                contadorElefanteCeroAUno += 1
                
            elif edad > 1 and edad < 3 :     #Segundo rango 
                
            elif tipoAnimal >= 3:            #Tercer rango
                  
    entrarWhile2 = False





