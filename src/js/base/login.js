let handleLogin = function(options){
    //if(options){
        //nema errora jer prvo provjerava da li na toj stranici uopce ima optionsa ako nema samo produzi dalje a ako ima nastavlja se kod dalje izvrsavati.. kada bi stavili samo options.homePage tada bi nam odmah pokazao errors
       // if(options.homePage){
    if(options){
        if(options.login){
            $('#loginForm').on('submit', function(e){
                e.preventDefault();

                let _thisloginForm=$(this);
                //colectamo podatke iz obrazca
                let dataLogin=$(this).getFormData();
                console.log(dataLogin);

                $.ajax({
                    //po defaultu je upaljeno ajax radi asinkrono
                    crossDomain: true,
                    url: '/data/login.json',
                    method: 'GET',
                    contentType: 'application/json',
                    headers: {
                        'Acces-control-Alow-Origin': '*'
                        //sa zvjezdicom dajes dozvolu za komunikacijom izmedu servera raznih... marko hr i pero hr salju si requestove i oboje moraju imati dozvolu od obojice za pristpom
                    },
                    data: JSON.stringify(dataLogin),
                    beforeSend: function(){
                        //dok se odvija ovaj proces disejblamo gumb da ga ne moze klikat u nedogled
                        $('#loginModal .modal-content').prepend(getLoader());
                        $('button', _thisloginForm).prop('disabled', true); 
                    },
                    success: function(data){
                        if (data.status ==0){
                            $('#loginModal .loader').append(setAjaxMessage(data.message));  
                        }else if(data.status == 1){
                            $('#loginModal .loader').append(setAjaxMessage(data.message));
                            setTimeout(function(){
                                window.location.replace('/admin')
                            }, 2000);
                        }
                    },
                    error: function(xhr){
                        $('#loginModal .loader').append(setAjaxMessage('Došlo je do pogreške! Pokušajte ponovo ili kontaktirajte administratora'));   
                    },
                    complete: function(){
                        setTimeout(function(){
                            $('.loader').fadeOut(1000).slideUp(2000);
                            $('button', _thisloginForm).prop('disabled', true); 
                        }, 2500);
                    }
                });
            });

            $('#loginModal').on('hidden.bs.modal', function(e){
                e.preventDefault();

                $('#loginForm').trigger('reset').parsley().reset();
            });
        }
    }
    
};

let handleRegister = function(options){

    if(options){
        if(options.register){
            $('#registrationForm').on('submit', function(e){
                e.preventDefault();

                let dataRegister=$(this).getFormData();
                console.log(dataRegister);
            });
        }
    }
    
};

