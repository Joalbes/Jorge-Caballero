# 6. Un comerciante desea aplicar un descuento a sus productos en funcion
#  a sus precios de la siguiente manera:

# 	1. Si el precio es menor a $100 el 10%
# 	2. Si el precio es mayor a $100 y menor a $200 el 20%
# 	3. Si el precio es mayor a $200 el 25%

# Es su deber como desarrollador escribir un algoritmo que le permita al comerciante:

#  ingresar la cantidad de productos y el precio de cada uno.
# El algoritmo  tambien debe imprimir en pantalla el calculo de los descuentos.


#Definition de variables
entrar = True


#Ingreso del numero de productos:
while entrar:
    numeroDeProductos =  int(float(input('Ingrese el numero de productos: ')))
    if numeroDeProductos < 0:
        print('Error: Numero invalido. Recuerde que el numero de productos debe ser cero (Si no tiene prouctos por ingresar) o mayor que 1.')
    else:
        entrar = False


#Ingresando el precio de cada producto
for i in range(1 , numeroDeProductos + 1):
    entrar = True
    while entrar:
        #Validacion del valor del producto
        valorProducto = float(input('Ingrese el valor del producto: '))
        if valorProducto <= 0:
            print('Error: Valor invalido. El valor  del producto debe ser mayor que cero:')
        else:
            entrar = False 

        #Calcuulo del descuento
        if valorProducto  <= 100:
            valorDescuento = 0.1 * valorProducto #Descuento del 10%
            print('EL producto', i , 'tiene un descuento del 10% equivalente a:', valorDescuento , 'pesos')
        elif valorProducto > 100 and valorProducto <= 200:
            valorDescuento = 0.2 * valorProducto #Descuento del 20%
            print('EL producto', i , 'tiene un descuento del 20% equivalente a:', valorDescuento , 'pesos')
        else:
            valorProducto = 0.25 * valorProducto #Descuento del 25%
            print('EL producto', i , 'tiene un descuento del 25% equivalente a:', valorDescuento , 'pesos')   









