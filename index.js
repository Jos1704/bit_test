$('#search_date').click(function() {
    var fecha = new Date($('#date_init').val());
    var dias = 8; // Número de días a agregar
    var container  = $('#container');
    var container2  = $('#container2');

    fecha.setDate(fecha.getDate() + dias);
    container.html('la fecha Domingo de ramos es: ' + fecha);

    fecha.setDate(fecha.getDate() + dias);
    container2.html('la fecha Domingo de resureccion es: ' + fecha);

    fecha = "";
})
