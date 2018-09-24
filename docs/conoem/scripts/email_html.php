<?php
if(isset($_POST['submit'])){
    $to = "ramachandran.m@concreteoem.com, customersupport@concreteoem.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $contact = $_POST['tel'];
    $subject = $_POST['subject'];
    $subject2 = "Copy of your email";
    $comments = $_POST['comments'];
    $message = "
<html>
<head>
    <title>HTML email</title>
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
</head>
<body>
    <p>Email submitted through website</p>
    <table>
        <tr>
            <th>Sent By</th>
            <td>$name</td>
        </tr>
        <tr>
            <th>Contact Number</th>
            <td>$contact</td>
        </tr>
        <tr>
            <th>Email ID</th>
            <td>$from</td>
        </tr>
        <tr>
            <th>Comment</th>
            <td>$comments</td>
        </tr>
    </table>
</body>
</html>";

    $message2 = "<html>
<head>
    <title>ConcreteOEM email</title>
    <style>
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }
        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        tr:nth-child(even) {
            background-color: #dddddd;
        }
    </style>
</head>
<body>
    <p>This is what we got from you</p>
    <table>
        <tr>
            <th>Sent By</th>
            <td>$name</td>
        </tr>
        <tr>
            <th>Contact Number</th>
            <td>$contact</td>
        </tr>
        <tr>
            <th>Email ID</th>
            <td>$from</td>
        </tr>
        <tr>
            <th>Comment</th>
            <td>$comments</td>
        </tr>
    </table>
</body>
</html>";

    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


    $headers .= "From:" . $from;

    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
