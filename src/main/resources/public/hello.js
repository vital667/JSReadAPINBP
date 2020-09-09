$(document).ready(function() {
    $.ajax({
        url: "https://api.nbp.pl/api/cenyzlota/last?format=json"
    }).then(function(data) {
        $('.greeting-id').append(data[0].data);
        $('.greeting-content').append(data[0].cena);
    });
});

// laczymy sie z serwerem analogicznie do JSoup.connect()
//document.ready - odpowiednik main w Javie
//$ - odwolanie sie do elementu
/* <p class="greeting-id">The ID is </p> - odwoluje sie do elementu przez
$('.greeting-contenr')


jak by bylo <p id='hello'> odwoluje sie przez $('#hello')

JS moze modyfikowac istniejacego htmla

 */