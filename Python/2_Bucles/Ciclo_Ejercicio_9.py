# Una compañia de seguros tiene contratados a n vendedores. Cada uno hace tres ventas a la semana
# Su politica de pagos es que cada vendedor recibe un sueldo base
#  y el 10% de comision sobre sus ventas.
# El gerente de la compañia quiere saber cuanto dinero obtendra a la semana cada vendedor
#  por concepto
# de comisiones por las tres ventas realizadas y cuanto tomando en cuenta su sueldo base
#  y sus comisiones

#Definicion de varaibles
numeroVendedores = 0
contadorSemanas = 0
ventaPorSemanaConComision = 0
entrar = True

#Ingresandoy validando el numero de vendedores.
while entrar:
    numeroVendedores = float(input('Ingrese el numero de vendedores: '))
    if numeroVendedores <= 0:
        print('Error: El numero de vendedores debe ser positivo:')
    else:
        sueldoBase = float(input('Ingrese el sueldo base: '))
        if sueldoBase < 0:
            print('Error: Valor invalido, ingrese un sueldo positivo')
        else:
            entrar = False

        
numeroVendedores = int(numeroVendedores)
print('')
#Calculando el sueldo:
for i  in range(0,numeroVendedores) : # itereaciones por vendedor
    print('Trabajador ',i +1)
    for j in range(1,5): #iteraciones por semana
        ventaPorSemana = float(input('Ingrese el valor de las 3 ventas semanales de la semana ' +  str(j) +' : '))
        if ventaPorSemana < 0:
            print('Error: Ingrese un valor de ventas mayor o igual a cero')
        else:
            ventaPorSemanaConComision += ventaPorSemana #Acumulando las ventas del mes   
            valorComisionSemanal = 0.1 * ventaPorSemana #calcula la comision en la semana
            print('La comision de la semana',j,'es:',valorComisionSemanal,'pesos')
            sueldoSemanal = sueldoBase / 4 +valorComisionSemanal
            print('El sueldo de la semana', j , 'es: ', sueldoSemanal, 'pesos')
        
    #Imprimiendo la camision y el sueldo del mes
    sueldoMensual = sueldoBase + ventaPorSemanaConComision
    print('Trabajador', i+1,':')
    print('Comision mensual:', ventaPorSemanaConComision, 'pesos' )
    print('Sueldo mensual del trabajor', j , ":",sueldoMensual )
    print('')
    


