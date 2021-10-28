$('#search_date').click(function () {
    var fecha = $('#date_init').val();
    var edad = edad_lunar(fecha);
    var fase = faseLunar(edad);
    var container  = $('#container'); //donde se va a mostrar el resultado
    container.append('la edad de la luna es:' + edad + '<br>');
    container.append('la fase de la luna es: ' + fase + '<br>');
    var dias = 8; // Número de días a agregar
    var fecha_final = new Date(fecha);
    fecha_final.setDate(fecha_final.getDate() + dias);
    container.html('la fecha Domingo de ramos es: ' + fecha + '<br>');
    fecha_final.setDate(fecha_final.getDate() + dias);
    container.html('la fecha Domingo de resureccion es: ' + fecha + '<br>');
    fecha_final.setDate(fecha_final.getDate() + 2);
    container.html('la fecha viernes santo es: ' + fecha + '<br>');
})



function edad_lunar(date) {
    var date_now = new Date(date);
    date_now.setDate(date_now.getDate() + 1); //sumar un dia ya que la funccion manda uno menos
    date_now.setMonth(date_now.getMonth() + 1); //sumar un mes ya que la funccion manda uno menos

    if (date_now.getFullYear() < 2000) { //validaciones de fechas menor a 2000
        while (date_now.getFullYear() < 2000) {
            date_now.setFullYear(date_now.getFullYear() + 19);
        }

    } else if (date_now.getFullYear() > 2018) { //validaciones de fechas mayor a 2018
        while (date_now.getFullYear() > 2018) {
            date_now.setFullYear(date_now.getFullYear() - 19);
        }
    }
    var day = date_now.getDate(); //traer solo le dia
    var month = date_now.getMonth(); //traer solo el mes
    var year = date_now.getFullYear(); //traer solo el año
    var year_string = String(year); //cambio de date a string
    var year_string_2 = year_string.substring(2, 4); //taer los dos ultimos digitos del año
    var sum_year = parseInt(year_string.charAt(0)) + parseInt(year_string.charAt(1)) + parseInt(year_string_2); //sumar los digitos del año

    sum_year = sum_year * 11; //multiplicar por 11
    if (month == 1 || month == 2) { //si es enero o febrero
        month = month + 1;
    }
    sum_year = sum_year + month; //sumar el mes
    sum_year = sum_year + day; //sumar el dia
    do {
        sum_year = sum_year - 30;
    } while (sum_year > 30); //validar si el resultado es mayor a 30 para que no nos de un mumero menor

    return sum_year;
}

function faseLunar(edad) {
    var type_lune = ""; //variable para guardar el tipo de luna
    switch (edad) { //switch para saber el tipo de luna
        case 0:
            type_lune = "La fase lunar es Luna Nueva";
            break;
        case 7:
            type_lune = "La fase lunar es Cuarto Creciente";
            break;
        case 14:
            type_lune = "La fase lunar es Luna llena";
            break;
        case 21:
            type_lune = "La fase lunar es Cuarto Menguante";
            break;
        case 29:
            type_lune = "La fase lunar es Luna Nueva";
            break;
        default:
            if (edad >= 1 && edad <= 6) {
                type_lune = "La fase lunar es Luna Nueva";
            } else if (edad >= 7 && edad <= 13) {
                type_lune = "La fase lunar es Cuarto Creciente";
            } else if (edad >= 14 && edad <= 20) {
                type_lune = "La fase lunar es Cuarto Luna Llena";
            } else if (edad >= 21 && edad <= 28) {
                type_lune = "La fase lunar es Cuarto Menguante";
            }
            break;
    }
    return type_lune;
}