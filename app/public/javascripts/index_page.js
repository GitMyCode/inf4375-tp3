

var test;
$(document).ready(function(){
    $.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );
    $.get("/getAlldossiers", function(data){
        test = data;
        var table = $("#table_dossiers tbody");
        data.sortBy(data.codePermanent);
        $.each(data, function(i,etu){
            console.log(etu);
            var ligne = "";
            ligne += "<tr>";
            ligne += "<td>" + etu.codePermanent + "</td>";
            ligne += "<td>" + etu.nom + "</td>";
            ligne += "<td>" + etu.prenom + "</td>";
            ligne += "<td>" + getFormatDate(etu.dateNaissance) + "</td>";
            ligne += "<td>" +"<a href=\"consult?cp="+etu.codePermanent+"\">lien</a></td>";
            ligne += "</tr>";
            table.append(ligne);
        });
    });
});

var getFormatDate = function(date){
    var d = new Date(date);





    return $.datepicker.formatDate("d MM yy",d);
    /*$.datepicker.formatDate( "DD, MM d, yy", d, {
      dayNamesShort: $.datepicker.regional[ "fr" ].dayNamesShort,
      dayNames: $.datepicker.regional[ "fr" ].dayNames,
      monthNamesShort: $.datepicker.regional[ "fr" ].monthNamesShort,
      monthNames: $.datepicker.regional[ "fr" ].monthNames
  });*/


}
