<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capturar os dados do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $datetime = $_POST['datetime'];
    $companions = $_POST['select1'];
    $message = $_POST['message'];

    // Endereço de e-mail para onde você quer enviar os dados do formulário
    $to = "renatoba29@gmail.com";

    // Assunto do e-mail
    $subject = "Novo pedido de reserva de mesa";

    // Conteúdo do e-mail
    $email_body = "Nome: $name\n";
    $email_body .= "E-mail: $email\n";
    $email_body .= "Data e Hora: $datetime\n";
    $email_body .= "Acompanhantes: $companions\n";
    $email_body .= "Descrição: $message\n";

    // Cabeçalhos do e-mail
    $headers = "From: $email";

    // Enviar o e-mail
    if (mail($to, $subject, $email_body, $headers)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
}
?>
