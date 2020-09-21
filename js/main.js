$('#contactForm').on('submit',function(e){
    //optional validation code here

    e.preventDefault();

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycby-z50hjbv5XK0NA6O0J8v1sq9X7Uy-PM_XjIQF3xNEDhEgh4Nj/exec",
        method: "POST",
        dataType: "json",
        data: $("#contactForm").serialize(),
    }).done(function (response) {
        
        if(response.result == "success") {
            $('#contactForm')[0].reset();
            alert('Gracias por contactarte con nosotros!.');
            return true;
        } else {
            alert("Algo salio mal. Por favor intentalo de nuevo.");
            console.log(response.error);
        }

    }).fail(function (error) {
        console.log(error);
    });
    
});