$('#contactForm').on('submit',function(e){
    //optional validation code here

    e.preventDefault();
  
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxuSCQS7maeU-2N3E7T0fgqGlby5bGOEmLSvmh2/exec",
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
    })
});