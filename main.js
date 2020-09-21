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
            alert("Algo salio mal. por favor intentalo de nuevo.");
        }

    }).fail(function (error) {
        alert("Algo salio mal. por favor intentalo de nuevo.");
        console.log(error);
    });
  
    /* $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzunX748Nd0UFy9kA2KM3DUrDpuBJJfeOTRL7eZ-2ha2Gpc5uI/exec",
        method: "POST",
        dataType: "json",
        data: $("#contactForm").serialize(),
        success: function(response) {
            
            if(response.result == "success") {
                $('#contactForm')[0].reset();
                alert('Gracias por contactarte con nosotros!.');
                return true;
            }
            else {
                alert("Algo salio mal. por favor intentalo de nuevo.")
            }
        },
        error: function() {
            
            alert("Algo salio mal. por favor intentalo de nuevo.")
        }
    }) */
});