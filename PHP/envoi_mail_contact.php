<?php
 
    ini_set( 'display_errors', 1 );
 
    error_reporting( E_ALL );
 
    /* MISE EN PLACE DES VARIABLES ***/
    $mail_emetteur=$_POST['mail_emetteur'];
    $nom_emeteur=$_POST['nom_emetteur'];
    $objet=$_POST['objet'];
    $text_message=$_POST['message'];

    $from = $mail_emetteur;
 
    $to = "olla.anthony@gmail.com";
 
    $subject = $objet;
 
    $message = 'Message envoyé depuis votre site internet:'.$text_message;
 
    $headers = "From:" . $from;
 
    mail($to,$subject,$message, $headers);

?>