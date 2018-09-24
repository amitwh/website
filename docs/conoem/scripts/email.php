<?php
if(isset($_POST['submit'])){
    $to = "qa@integralconcretes.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $contact = $_POST['tel'];
    $subject = $_POST['subject'];
    $subject2 = "Copy of your email";
    $message = $name . " " . $contact . " $subject" . "\n\n" . $_POST['comments'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['comments'];

    // To send HTML mail, the Content-type header must be set

   // $headers  = 'MIME-Version: 1.0' . "\r\n";
   // $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
