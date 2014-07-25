

$(document).ready(function(){
    $.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );

    var typeMessage =  $.urlParam("typeMessage");
    var theMessage =  $.urlParam("theMessage");

    if(typeMessage){
        showMessage(decodeURIComponent(theMessage), typeMessage);
    }
});

/* Function prise de Alexandar */
function verifierNomOuPrenom(nomOuPrenom) {
    return /^[a-zA-Z]+(\s*[a-zA-Z]+)*$/.test(nomOuPrenom);
}

/* Function prise de Alexandar */
function verifierAge(age) {
    return (/^\d{1,3}$/.test(age) &&
        parseInt(age) >= 0 &&
        parseInt(age) <= 130);
}

/* Function prise de Alexandar */
function verifierEmail(email) {
    return /^[a-zA-Z0-9_\.]+@[a-zA-Z0-9_]+?\.[a-zA-Z]{0,63}$/.test(email);
}

function verifierDate(date){

    return /^(\d{4})-0?(\d+)-0?(\d+)/.test(date)
}

function verifierCodePermanent(codePermanent){
    return /^[A-Z]{4}[0-9]{8}$/.test(codePermanent);
}


function showMessage(message, typeMessage, temporary) {
    temporary = typeof (temporary) == "undefined" ? true : temporary;

    var poster = $("#message");


    $("#message").stop(true, true);
    poster.removeClass().addClass("alert alert-" + typeMessage).fadeIn(800);

    $("#message span").text(message);

    if (temporary) {
        $("#message").fadeOut(3000, function () {
            $("#message").removeAttr("class");
        });
    }

}

/*
Function taken from  http://www.sitepoint.com/url-parameters-jquery/
*/
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    } else {
        return results[1] || 0;
    }
}
