<?php
// Файлы phpmailer
require ('./class.phpmailer.php');
require ('./class.smtp.php');
// Переменные
$name = $_POST["name"];
$number = $_POST["number"];
$email = $_POST["email"];
// Настройки
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = "smtp.yandex.ru";
$mail->SMTPAuth = true;
$mail->Username = "karnaushkina"; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = "185449rssk"; // Ваш пароль
$mail->SMTPSecure = "ssl";
$mail->Port = 465;
$mail->setFrom("karnaushkina@salesgenerator.pro"); // Ваш Email
$mail->addAddress("karnaushkina@salesgenerator.pro"); // Email получателя


// Письмо
$mail->isHTML(true);
$mail->Subject = "Заголовок"; // Заголовок письма
$mail->Body = "Имя $name . Телефон $number . Почта $email"; // Текст письма
// Результат
if(!$mail->send()) {
    echo "Message could not be sent.";
 echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "ok";
}
?>