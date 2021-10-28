$('#search_date').click(function() {
    var fecha = new Date($('#date_init').val());
    var dias = 8; // Número de días a agregar
    var container  = $('#container');
    fecha.setDate(fecha.getDate() + dias);
    container.html('la fecha es: '+fecha);
})