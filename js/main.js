$('#contactForm').on('submit',function(e){
    //optional validation code here

    e.preventDefault();

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzunX748Nd0UFy9kA2KM3DUrDpuBJJfeOTRL7eZ-2ha2Gpc5uI/exec",
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