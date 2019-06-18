(function($){
    //u ovom prostoru kreiramo sve custom jQuery funkcije.

    $.fn.getFormData= function(){
        let data = {};
        let dataArray= $(this).serializeArray();
        
        for(let i=0; i< dataArray.length; i++){
            data[dataArray[i].name]= dataArray[i].value;
        }

        return data;
    }
}) (jQuery);

//metoda koja returna loader pri signinu
let getLoader=function(){
    let html = '';
    //za svaku liniju koda html+= moramo napisat
        html += '<div class="loader">';
        html += '<img src="assets/images/loader.svg">';
        html += '</div>';

        return html;
}
let setAjaxMessage = function(message){
    let html = '<div class="message">'+ message +'</div>';
    //message stavljamo zasebno jer ga ubacujemo u loader kad ce nam bit potrebno
    return html;
}