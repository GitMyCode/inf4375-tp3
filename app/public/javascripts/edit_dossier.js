

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


function sendChange(message){
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
            showMessage("Erreur dans la modification des données", "danger");
        },
        success: function( xhr, status){
            showMessage("Champs modifié!", "success");
        },
        complete: function(xhr, status){
        }

    });

}
test = '';
$("#confirmSupp").on("click", function(e){
    e.preventDefault();

    $.ajax({
        type: "DELETE",
        url: "dossiers/"+dossier.codePermanent,
        error: function (xhr, status){
            console.log(status);
            if(xhr.status== "400"){
                var response = $.parseJSON(xhr.responseText);
                showMessage(response.error ,"danger");
            }else{
                showMessage("Un probleme c'est produit lors de la sauvegarde du dossier","danger");
            }
        },
        success: function (xhr, status){
            var theMessage= encodeURIComponent("La suppression du dossier est un succes");
            window.location.href = "/"+"?theMessage="+theMessage+"&typeMessage=success";
        },
        complete: function(xhr, status){
            test = xhr;
            console.log("deleted");
        }

    });

    $("#warning-modal").modal("hide");

});


$("input#codePermanent").on('change input', function(){
    var codePermanent = $("#codePermanent").val();
    if(verifierCodePermanent(codePermanent)){
        sendChange();
    }else{
        showMessage("Le format du Code permanent n'est pas valide!", "danger");
    }

});


$("input#nom").on('change input', function(){
    var nom = $("#nom").val();
    if(verifierNomOuPrenom(nom)){
        sendChange();
    }else{
        showMessage("Le format du nom est invalide", "danger");
    }

});


$("input#prenom").on('change input', function(){
    var prenom = $("#prenom").val();
    if(verifierNomOuPrenom(prenom)){
        sendChange();
    }else{
        showMessage("Le format du prenom est invalide", "danger");
    }

});


$("input#dateNaissance").on('change input', function(){
    var dateNaissance = $("#dateNaissance").val();
    if(verifierDate(dateNaissance)){
        sendChange();
    }else{
        showMessage("Format doit correspondre au ISO 8601", "danger");
    }

});


$("input#sexe").on('change input', function(){
    var sexe = $("#sexe").val();
    sendChange();

});
