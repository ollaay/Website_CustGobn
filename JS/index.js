$(document).ready(function() {
    $('#btn_accueil').on('click', function() { // Au clic sur un élément
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: 0 }, speed ); // Go
        return false;
    });

    $('#btn_fleche').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: ($(page).offset().top-80) }, speed ); // Go
        return false;
    });

    $('#btn_Services').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: ($(page).offset().top-80)}, speed ); // Go
        return false;
    });

    $('#btn_a_propos').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top-80}, speed ); // Go
        return false;
    });

    $('#btn_projets').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top-80}, speed ); // Go
        return false;
    });

    $('#btn_contact').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top-80}, speed ); // Go
        return false;
    });

    $('#cadre_proj_1').on('mouseover', function() { // Au passage de la souri
        document.getElementById('cadre_proj_1').style.color='#333';
        document.getElementById('photo_proj_1').style.opacity='0.3';
    });
    $('#cadre_proj_1').on('mouseout', function() { // Au passage de la souri
        document.getElementById('cadre_proj_1').style.color='transparent';
        document.getElementById('photo_proj_1').style.opacity='1';
    });

    $('#cadre_proj_2').on('mouseover', function() { // Au passage de la souri
        document.getElementById('cadre_proj_2').style.color='#333';
        document.getElementById('photo_proj_2').style.opacity='0.3';
    });
    $('#cadre_proj_2').on('mouseout', function() { // Au passage de la souri
        document.getElementById('cadre_proj_2').style.color='transparent';
        document.getElementById('photo_proj_2').style.opacity='1';
    });

    $('#cadre_proj_3').on('mouseover', function() { // Au passage de la souri
        document.getElementById('cadre_proj_3').style.color='#333';
        document.getElementById('photo_proj_3').style.opacity='0.3';
    });
    $('#cadre_proj_3').on('mouseout', function() { // Au passage de la souri
        document.getElementById('cadre_proj_3').style.color='transparent';
        document.getElementById('photo_proj_3').style.opacity='1';
    });

    $('#cadre_proj_4').on('mouseover', function() { // Au passage de la souri
        document.getElementById('cadre_proj_4').style.color='#333';
        document.getElementById('photo_proj_4').style.opacity='0.3';
    });
    $('#cadre_proj_4').on('mouseout', function() { // Au passage de la souri
        document.getElementById('cadre_proj_4').style.color='transparent';
        document.getElementById('photo_proj_4').style.opacity='1';
    });
});

function initMap() {
		
    var uluru = {lat: 48.6501667, lng: 6.209407899999974};
    var map = new google.maps.Map(document.getElementById('cadre_map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}
