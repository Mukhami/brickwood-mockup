<?php
 require 'vendor/autoload.php';

//got from form input
$name = $_POST['full_name'];
$sender = $_POST['user_email'];
$date = $_POST['proposed_date'];
$selected_space = $_POST['selected_space'];

$email = new \SendGrid\Mail\Mail();
$email->setFrom($sender, $name);
$email->setSubject("You have Received a new Booking Request");
$email->addTo("info@airduka.com", "Air Duka");
$email->addContent("text/plain", "Selected Space: ".$selected_space.PHP_EOL."Proposed Date of Booking: ".$date);
$email->addContent(
    "text/html", "<strong>Selected Space: $selected_space. Proposed Date of Booking: $date</strong>"
);
$sendgrid = new \SendGrid(getenv('SENDGRID_KEY')); //replace with shared apikey
try {
    $response = $sendgrid->send($email);
    if (in_array($response->statusCode(), [200, 202])) {
        print "<p class='success'>We have Received Your Submission, someone from our team will get back to you.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
} catch (Exception $e) {
//    echo 'Caught exception: '. $e->getMessage() ."\n";
    print "<p class='Error'>Problem in Sending Mail.</p>";

}