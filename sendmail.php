<?php
  require_once('PHPMailer/PHPMailerAutoload.php');
  $mail = new PHPMailer;
  $mail->CharSet = 'UTF-8';

  $name = $_POST['user_name'];
  $phone = $_POST['user_phone'];

  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;

  $mail->Username = 'annamorozovaBlan@gmail.com';
  $mail->Password = '564354Ff';

  $mail->setFrom('annamorozovaBlan@gmail.com', 'Blanchard');
  $mail->addAddress('morozovaannuska@mail.ru');

  $mail->isHTML(true);
  $mail->Subject = 'Заявка';
  $mail->Body = 'Пользователь <b>'.$name. '</b> оставить заявку. <br> Его телефон <b>' .$phone. '</b>';
  $mail->AltBody = '';

  if(!$mail->send()) {
    echo 'Error';
  } else {
    echo 'Ok';
  }
?>
