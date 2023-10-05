<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $to = 'raghukrishnanj2601@gmail.com'; // Replace with your email address
  $subject = 'New Contact Form Submission';
  $messageBody = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

  if (mail($to, $subject, $messageBody)) {
    // Email sent successfully
    http_response_code(200); // OK
  } else {
    // Email sending failed
    http_response_code(500); // Internal Server Error
  }
}
?>
