/*
Crea un algoritmo que pida al usuario el diámetro de una rueda y su grosor (en mts) y realice las siguientes operaciones:
	
    A. Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero
       mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones 
       anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”.
	
    B. Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor 
       inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
*/

const diametro = parseFloat(prompt('Ingrese el diámetro de la rueda en mts: '));
if (diametro <= 0) {
    alert('Ingrese un valor mayor a cero y que sea correcto');
} else {
    const grosor = parseFloat(prompt('Ingrese el grosor de la rueda en mts: '));
    if (grosor <= 0) {
        alert('Ingrese un valor mayor a cero y que sea correcto');
    } else {
    if(diametro > 1.4){
        console.log('La rueda es para un vehículo grande');
        if(grosor < 0.4){
            console.log('“El grosor para esta rueda es inferior al recomendado”');
        }
    }else{
        if(diametro >= 0.8 && diametro <=1.4){
            console.log('La rueda es para un vehículo mediana');
            if(grosor < 0.25){
                console.log('“El grosor para esta rueda es inferior al recomendado”');
            }
        }else{
            if(diametro < 0.8){
                console.log('La rueda es para un vehículo pequeño');
            }else{
        
            }
    
        }

    }

    }
}