<?php

/* https://api.telegram.org/bot5131932597:AAHdotzcnut7W2u93s15BRzXqSiEgNdJ0zQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['phone1'];
$phone = $_POST['name1'];
$message = $_POST['queston1'];
$token = "5131932597:AAHdotzcnut7W2u93s15BRzXqSiEgNdJ0zQ";
$chat_id = "-664284651";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach ($arr as $key => $value) {
  $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
  header('Location: indexthank.html');
} else {
  echo "Error";
}
