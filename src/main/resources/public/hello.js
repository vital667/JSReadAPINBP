$(document).ready(function() {
    $.ajax({
        url: "https://api.nbp.pl/api/cenyzlota/last?format=json"
    }).then(function(data) {
        $('.greeting-id').append(data[0].data);
        $('.greeting-content').append(data[0].cena);
    });
});