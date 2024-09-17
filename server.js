// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();

// // Configurações
// app.use(cors()); // Para permitir que o frontend se comunique com o backend
// app.use(express.json()); // Para que o backend consiga ler JSON no body

// // Rota para lidar com o envio de e-mails
// app.post('/send-email', async (req, res) => {
//     const { name, email, message } = req.body;

//     // Configuração do transporte do Nodemailer
//     let transporter = nodemailer.createTransport({
//         service: 'gmail', // ou outro serviço como Outlook, Yahoo
//         auth: {
//             user: 'carllylim@gmail.com', // Coloque o seu e-mail
//             pass: 'SUA_SENHA_DE_APP', // Você deve criar uma senha de aplicativo no Gmail
//         },
//     });

//     // Configuração do e-mail
//     let mailOptions = {
//         from: email, // Endereço de e-mail do remetente
//         to: 'carllylim@gmail.com', // Para onde o e-mail será enviado
//         subject: `Nova mensagem de ${name}`, // Assunto do e-mail
//         text: message, // Corpo do e-mail
//     };

//     // Envio do e-mail
//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).send('E-mail enviado com sucesso!');
//     } catch (error) {
//         console.error('Erro ao enviar o e-mail: ', error);
//         res.status(500).send('Erro ao enviar o e-mail');
//     }
// });

// // Iniciar o servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });
