<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"));

$to = "vitor@lassen.com.br"; // Altere para o e-mail que vai receber
$subject = $data->subject ?? "Assunto padrão";
$message = $data->message ?? "Mensagem vazia";
$headers = "From: " . ($data->email ?? "no-reply@seudominio.com") . "\r\n";
$headers .= "Reply-To: " . ($data->email ?? "no-reply@seudominio.com") . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => true, "message" => "E-mail enviado com sucesso"]);
} else {
    echo json_encode(["success" => false, "message" => "Falha ao enviar e-mail"]);
}
?>
