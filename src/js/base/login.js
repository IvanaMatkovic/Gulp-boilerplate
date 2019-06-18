let handleLogin = function(options){
    //if(options){
        //nema errora jer prvo provjerava da li na toj stranici uopce ima optionsa ako nema samo produzi dalje a ako ima nastavlja se kod dalje izvrsavati.. kada bi stavili samo options.homePage tada bi nam odmah pokazao errors
       // if(options.homePage){
    if(options){
        if(options.login){
            $('#loginForm').on('submit', function(e){
                e.preventDefault();

                //colectamo podatke iz obrazca
                let data=$(this).getFormData();
                console.log(data);
            });
        }
    }
};
$(document).ready(function() {
    $("form[name=registrationForm]").parsley();  
  });
