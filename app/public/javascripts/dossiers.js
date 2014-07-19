
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
        "sexe" : sexe,
        "dateNaissance" : dateNaissance,
        "inscriptions" : [
        ],
        "coursReussis" : [
        ]
    }
    var unDossier2 = {
    "nom" : "OUI",
    "prenom" : "test_prenom",
    "codePermanent" : "BOUM15078700",
    "sexe" : "2",
    "dateNaissance" : "1987-07-15",
    "inscriptions" : [
    ],
    "coursReussis" : [

    ]
}
/*
    newDossier = {};
    newDossier['codePermanent'] = codePermanent;
    newDossier['nom'] = nom;
    newDossier['prenom'] = prenom;
    newDossier['dateNaissance'] = dateNaissance;
    newDossier['sexe'] = sexe;
    newDossier['inscriptions'] = [];
    newDossier['coursReussis'] = [];
*/
    //newDossier = JSON.stringify(newDossier);


    $.ajax({
        type: "POST",
        data: newDossier,
        url: '/dossiers',
       // dataType: "json",
        success: function (data) {
            alert("ici");
        },
        error: function (xhr, status) {

        },
        complete: function (xhr, status) {
            alert("fini");
            window.location.href = "dossiers/"+codePermanent;
           console.log("groupe supprimé");
        }
    });
}
