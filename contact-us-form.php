<?php
 require 'vendor/autoload.php';

//got from form input
$name = $_POST['name'];
$sender = $_POST['email'];
$date = $_POST['meeting_date'];
$message = $_POST['message'];

$email = new \SendGrid\Mail\Mail();
$email->setFrom($sender, $name);
$email->setSubject("Contact Us form has been submitted");
$email->addTo("info@airduka.com", "Air Duka");
$email->addContent("text/plain", "Message Sent: ".$message.PHP_EOL."Proposed Date of Meeting: ".$date);
$email->addContent(
    "text/html", "<strong>Message Sent: $message. Proposed Date of Meeting: $date</strong>"
);
$sendgrid = new \SendGrid(getenv('SENDGRID_KEY')); //replace with sendgrid apikey
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