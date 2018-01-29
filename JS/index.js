$(document).ready(function() {
    $('#btn_accueil').on('click', function() { // Au clic sur un élément

        if(document.getElementById('cadre_logo_principal').style.display=="none"){
            remplissage_norm();
        }
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

        if(document.getElementById('cadre_logo_principal').style.display=="none"){
            remplissage_norm();
        }

        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: ($(page).offset().top-80)}, speed ); // Go
        return false;
    });

    $('#btn_a_propos').on('click', function() { // Au clic sur un élément

        if(document.getElementById('cadre_logo_principal').style.display=="none"){
            remplissage_norm();
        }

        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top-80}, speed ); // Go
        return false;
    });

    $('#btn_projets').on('click', function() { // Au clic sur un élément

        if(document.getElementById('cadre_logo_principal').style.display=="none"){
            remplissage_norm();
        }

        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top-80}, speed ); // Go
        return false;
    });

    $('#btn_contact').on('click', function() { // Au clic sur un élément

        if(document.getElementById('cadre_logo_principal').style.display=="none"){
            remplissage_norm();
        }

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

function click_rs_facebook(){
    document.location.href="https://www.facebook.com/gobinentreprise/";
}

function click_rs_linkedin(){
    document.location.href="https://fr.linkedin.com/company/gobin-olla-entreprise";
}

function remplissage_projet_1(){
    document.getElementById('cadre_logo_principal').style.display='none';
    document.getElementById('cadre_services').style.display='none';
    document.getElementById('cadre_a_propos').style.display='none';
    document.getElementById('cadre_projet').style.display='none';
    document.getElementById('cadre_contact').style.display='none';
    document.getElementById('cadre_signature').style.display='none';

    document.getElementById('cadre_projet_1').style.display='block';
    document.getElementById('cadre_projet_2').style.display='none';
    document.getElementById('cadre_projet_3').style.display='none';
    document.getElementById('cadre_projet_4').style.display='none';
}
function remplissage_projet_2(){
    document.getElementById('cadre_logo_principal').style.display='none';
    document.getElementById('cadre_services').style.display='none';
    document.getElementById('cadre_a_propos').style.display='none';
    document.getElementById('cadre_projet').style.display='none';
    document.getElementById('cadre_contact').style.display='none';
    document.getElementById('cadre_signature').style.display='none';

    document.getElementById('cadre_projet_1').style.display='none';
    document.getElementById('cadre_projet_2').style.display='block';
    document.getElementById('cadre_projet_3').style.display='none';
    document.getElementById('cadre_projet_4').style.display='none';
}
function remplissage_projet_3(){
    document.getElementById('cadre_logo_principal').style.display='none';
    document.getElementById('cadre_services').style.display='none';
    document.getElementById('cadre_a_propos').style.display='none';
    document.getElementById('cadre_projet').style.display='none';
    document.getElementById('cadre_contact').style.display='none';
    document.getElementById('cadre_signature').style.display='none';

    document.getElementById('cadre_projet_1').style.display='none';
    document.getElementById('cadre_projet_2').style.display='none';
    document.getElementById('cadre_projet_3').style.display='block';
    document.getElementById('cadre_projet_4').style.display='none';
}
function remplissage_projet_4(){
    document.getElementById('cadre_logo_principal').style.display='none';
    document.getElementById('cadre_services').style.display='none';
    document.getElementById('cadre_a_propos').style.display='none';
    document.getElementById('cadre_projet').style.display='none';
    document.getElementById('cadre_contact').style.display='none';
    document.getElementById('cadre_signature').style.display='none';

    document.getElementById('cadre_projet_1').style.display='none';
    document.getElementById('cadre_projet_2').style.display='none';
    document.getElementById('cadre_projet_3').style.display='none';
    document.getElementById('cadre_projet_4').style.display='block';
}

function remplissage_norm(){
    document.getElementById('cadre_logo_principal').style.display='block';
    document.getElementById('cadre_services').style.display='block';
    document.getElementById('cadre_a_propos').style.display='block';
    document.getElementById('cadre_projet').style.display='block';
    document.getElementById('cadre_contact').style.display='block';
    document.getElementById('cadre_signature').style.display='block';

    document.getElementById('cadre_projet_1').style.display='none';
    document.getElementById('cadre_projet_2').style.display='none';
    document.getElementById('cadre_projet_3').style.display='none';
    document.getElementById('cadre_projet_4').style.display='none';
}

function retour_proj(){
    $('#btn_projets').click();
}

function open_menu_smart(){
    document.getElementById('smartphone_menu').style.display='block';   
}

function close_menu_smart(){
    document.getElementById('smartphone_menu').style.display='none';   
}