

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

        //update the edit link
        $("a#edit_link").attr("href","edit?cp="+dossier.codePermanent);

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

    if (typeof (dossier.inscriptions) != "undefined") {

        var inscriptionContent = "";
        $.each(dossier.inscriptions, function () {
            inscriptionContent += '<tr>';
            inscriptionContent += '<td>' + this.sigle + '</td>';
            inscriptionContent += '<td>' + this.groupe + '</td>';
            inscriptionContent += '<td>' + this.session + '</td>';
            inscriptionContent += '<td>' + this.noteFinale + '</td>';
            inscriptionContent += '</tr>';
        });
        $("#info-inscriptions tbody").html(inscriptionContent);

    }

    if (typeof (dossier.coursReussis) != "undefined") {

        var coursContent = "";
        $.each(dossier.coursReussis, function () {
            coursContent += '<li>' + this + '</li>';
        });
        $("#info-coursReussis ul").html(coursContent);

    }
    }



