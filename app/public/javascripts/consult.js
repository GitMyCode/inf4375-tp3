

var dossier = null;

$(document).ready(function(){


    get_dossier();
});


function get_dossier() {

    console.log($.urlParam("cp"));
    var cp = $.urlParam("cp");



    var request_url = "dossiers/" + cp;
    $.get(request_url, function (data) {
        dossier = data;

        show_data();

    });

    return dossier;

}

function show_data(){

    dossierContent= "";
    console.log("ici");
    $("#nom").text(dossier.nom);
    $("#prenom").text(dossier.prenom);
    $("#codePermanent").text(dossier.codePermanent);
    $("#sexe").text(dossier.sexe);
    $("#dateNaissance").text(dossier.dateNaissance);

    var inscriptionContent = "";
    $.each(dossier.inscriptions, function(){
        inscriptionContent += '<tr>';
        inscriptionContent += '<td>' + this.sigle + '</td>';
        inscriptionContent += '<td>' + this.groupe + '</td>';
        inscriptionContent += '<td>' + this.session + '</td>';
        inscriptionContent += '<td>' + this.noteFinale + '</td>';
        inscriptionContent += '</tr>';
    });
    $("#info-inscriptions tbody").html(inscriptionContent);

    var coursContent = "";
    $.each(dossier.coursReussis, function(){
        coursContent += '<li>' + this + '</li>';
    });
    $("#info-coursReussis ul").html(coursContent);

}




/*
Function taken from  http://www.sitepoint.com/url-parameters-jquery/
*/
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}
