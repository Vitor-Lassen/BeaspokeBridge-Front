
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// send-email.php - usa PHPMailer via Composer
$allowedOrigins = [
    'https://bespokebridge.com',
    'https://www.bespokebridge.com',
    'https://bespokebridge.com.br',
    'https://www.bespokebridge.com.br'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins) || preg_match('/^https:\/\/(.+\.)?bespokebridge\.com(\.br)?$/', $origin)) {
    header("Access-Control-Allow-Origin: $origin");
}
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

require __DIR__ . '/../../vendor/autoload.php'; // ajuste o caminho se necessário

$input = json_decode(file_get_contents('php://input'), true);
$fromEmail = $input['email'] ?? 'no-reply@bespokebridge.com';
$subject = $input['subject'] ?? 'Assunto padrão';
$message = $input['message'] ?? 'Mensagem vazia';

// ======= CONFIGURE AQUI (substitua pelos seus dados Hostinger) =======
$smtpHost = 'smtp.hostinger.com';
$smtpUsername = 'system@bespokebridge.com';
$smtpPassword = 'hYwv!t$7';
$smtpPort = 465;
$smtpSecure = 'ssl'; // 'ssl' ou 'tls'
// =====================================================================

$to = 'vitor@lassen.com.br';
$mail = new PHPMailer(true);

try {
    // SMTP config
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port = $smtpPort;

    // From (use o e-mail do SMTP para evitar bloqueios) e Reply-To para o remetente real
    $mail->setFrom($smtpUsername, 'Contato Bespoke Bridge');
    $mail->addReplyTo($fromEmail);
    $mail->addAddress($to);

    // Conteúdo
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $message;
    $mail->AltBody = strip_tags($message);

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'E-mail enviado com sucesso']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Falha ao enviar e-mail: ' . $mail->ErrorInfo]);
}
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
}
?>
