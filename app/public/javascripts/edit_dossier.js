

var dossier;
var id; // need the id to keep the reference through multiple edit
$(document).ready(function(){

    get_dossier();
});


function get_dossier(){

    cp = $.urlParam("cp");

    $.get("dossiers/"+cp, function(data){

        dossier = data;
        id = dossier._id;

        fill_form();
    });

}

function fill_form(){
    $("#nom").val(dossier.nom);
    $("#prenom").val(dossier.prenom);
    $("#codePermanent").val(dossier.codePermanent);
    $("#sexe[value='"+ dossier.sexe+"']").attr("checked",true);
    $("#dateNaissance").val(dossier.dateNaissance);

}


function sendChange(){
    var good_or_bad = false;
    var put_dossier = {
        "nom": $("#nom").val(),
        "prenom": $("#prenom").val(),
        "codePermanent": $("#codePermanent").val(),
        "sexe": $("#sexe:checked").val(),
        "dateNaissance": $("#dateNaissance").val(),
    }

    $.ajax({
        type: "PUT",
        data: JSON.stringify(put_dossier),
        url:"dossiers/"+dossier.codePermanent,
        contentType: "application/json; charset=UTF-8",
        error: function(xhr ,status){
            good_or_bad = false;
        },
        complete: function(xhr, status){
            if (status == 'error'){
                good_or_bad = false
            }
            if(status == "success"){
                return good_or_bad = true;
            }
            console.log(status);
        }

    });

}

$("#suppButton").on("click", function(e){
    e.preventDefault();

    $.ajax({
        type: "DELETE",
        url: "dossiers/"+dossier.codePermanent,
        complete: function(xhr, status){
            console.log("deleted");
        }

    });

});


$("input#nom").on('change input', function(){
    var nom = $("#nom").val();
    if(verifierNomOuPrenom(nom)){
        showMessage("success", "success");
    }else{
        showMessage("erreur", "danger");
    }

});

function verifierNomOuPrenom(nomOuPrenom){
    return /^[a-zA-Z]+(\s*[a-zA-Z]+)*$/.test(nomOuPrenom);
}
