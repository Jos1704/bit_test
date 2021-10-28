$('#search_date').click(function() {
    var fecha = $('#date_init').val();
    var edad = edad_lunar(fecha);
    console.log(edad);
    // var dias = 8; // Número de días a agregar
    // var container  = $('#container');
    // var container2  = $('#container2');

    // fecha.setDate(fecha.getDate() + dias);
    // container.html('la fecha Domingo de ramos es: ' + fecha);

    // fecha.setDate(fecha.getDate() + dias);
    // container2.html('la fecha Domingo de resureccion es: ' + fecha);

    // fecha = "";


})



function edad_lunar(date){
    var date_init = date;
    var year = parseInt(date_init.substring(0,4));
    var month = parseInt(date_init.substring(5,7));
    var day = parseInt(date_init.substring(8,10));
    var year_string = String(year);
    var year_string_2 = year_string.charAt(2)+year_string.charAt(3);
    var sum_year = parseInt(year_string.charAt(0))+parseInt(year_string.charAt(1))+parseInt(year_string_2);
    sum_year = sum_year * 11;
    if(month == 1 || month == 2){
        month = month + 1;
    }
    sum_year = sum_year + month;
    sum_year = sum_year + day;
    do{
        sum_year = sum_year - 30;
    }while (sum_year > 30);

    return sum_year;
}
