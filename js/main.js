const scriptURL = 'https://script.google.com/macros/s/AKfycbzk3GS9fGOhFCbxIWfwYRc7jRQ18msqE2dlcE4o0zo_8Wa5-Fje/exec';

const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
                        method: 'POST',
                        body: new FormData(form)
                    })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

/* $('#contactForm').on('submit',function(e){

    e.preventDefault();

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycby-z50hjbv5XK0NA6O0J8v1sq9X7Uy-PM_XjIQF3xNEDhEgh4Nj/exec",
        method: "POST",
        dataType: "json",
        data: $('#contactForm').serialize(),
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
    
}); */