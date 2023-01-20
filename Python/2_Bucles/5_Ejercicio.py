#Diseñe un algoritmo que reciba un numero entero positivo mayor a 100
#  y luego imprima todos los numeros primos que hay antes de ese numero ingresado.

#Variables
entrar = True
contadorResiduoCero = 0

#Ingresando numero positivo y mayor que 20
while entrar:
    numeroPositivo = int(float(input('Ingrese un numero entero mayor que 20: ')))
    if numeroPositivo <= 7: #Se cambia el 100 por 20 para efectos de prueba.
        print('Error:Numero invalido. El numero debe ser entero y mayor que 100.')
    else:
        entrar = False 

#Imprimiendo todos los numeros primos menores a el numero ingresado
for i in range(3,numeroPositivo):
    residuo = i % 2 # Me filtra los numero impares    
    if residuo != 0: #numero impar  
        contadorResiduoCero = 0      
        for j in range(2,i): 
            residuo2 = i % j # Si el residuo es cero el numero no es primo
            if residuo2 == 0:
                contadorResiduoCero += 1 
            else:
                continue        

        if contadorResiduoCero == 0:
            print('Primo:',i)
            
        else:
            continue
                     
            
                    #Encontró un numero        
    else:
        continue
             
                  

                    