console.log('JavaScript carregado com sucesso!');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do envio do formulário

    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    console.log(name, email, message);

    // Parâmetros que você enviará para o EmailJS:
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    console.log(templateParams);

    emailjs.send('service_ip1gisx', 'template_xfi08ku', templateParams)
        .then(function(response) {
            alert('Email enviado com sucesso!', response.status, response.text);

            // Limpa os campos do formulário após o envio:
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Erro ao enviar o email...', error);
        });
});
