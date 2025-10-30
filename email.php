<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Адрес, на который нужно отправить письмо
    $to = "maxshamin338@gmail.com";

    // Тема письма
    $subject = "Обратная связь от $name";

    // Сообщение
    $email_message = "Имя: $name\n";
    $email_message .= "Телефон: $phone\n";
    $email_message .= "Сообщение:\n$message";

    // Отправка письма
    mail($to, $subject, $email_message);

    // Опционально: перенаправление на страницу "Спасибо"
    //header("Location: thank_you.html");
}
?>