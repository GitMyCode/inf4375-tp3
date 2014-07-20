function verifierNomOuPrenom(nomOuPrenom) {
    return /^[a-zA-Z]+(\s*[a-zA-Z]+)*$/.test(nomOuPrenom);
}

function verifierAge(age) {
    return (/^\d{1,3}$/.test(age) &&
        parseInt(age) >= 0 &&
        parseInt(age) <= 130);
}

function verifierEmail(email) {
    return /^[a-zA-Z0-9_\.]+@[a-zA-Z0-9_]+?\.[a-zA-Z]{0,63}$/.test(email);
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
