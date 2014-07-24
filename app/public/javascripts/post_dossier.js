
$('#addButton').on('click', addDossier);


    var newDossier = {};

function addDossier(e){
    e.preventDefault();

    var codePermanent = $('#codePermanent').val();
    var nom = $('#nom').val();
    var prenom = $("#prenom").val();
    var dateNaissance = $("#dateNaissance").val();
    var sexe = $("#sexe:checked").val();
    newDossier = {
        "nom" : nom,
        "prenom" : prenom,
        "codePermanent" : codePermanent,
        "sexe" : ""+sexe,
        "dateNaissance" : dateNaissance,
        "inscriptions" : [
        ],
        "coursReussis" : [
        ]
    }


    $.ajax({
        type: "POST",
        data: newDossier,
        url: '/dossiers',
       // dataType: "json",
        success: function (data) {
            window.location.href = "consult?cp="+codePermanent;
            showMessage("Ajout de dossier réussi", "success");
        },
        error: function (xhr, status) {
            showMessage("Il y a eu un probleme lors de la sauvegarde du dossier", "danger");

        },
        complete: function (xhr, status) {

        }
    });
}
