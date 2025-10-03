import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, subject, phone } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, email e mensagem são obrigatórios" },
        { status: 400 }
      );
    }

    // Configurar o transporter do nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email de confirmação para o usuário
    const userEmailHtml = `
      <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <title>Confirmação de Recebimento</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f8fafc;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); overflow: hidden; border-radius: 12px;">

          <!-- Header -->
          <tr>
            <td style="background-color: #0e6995; border-radius: 12px; border-bottom: 2px solid #0e6995; padding: 40px 30px; text-align: center;">
              <img src="https://dbmib2q8rj.ufs.sh/f/Lm6xK3J7O1CLw6dgkLlWdtKPHol1sCapm74kg5OGAnfB9zSY" alt="Logo" style="max-width: 150px; height: auto; margin-bottom: 20px;">
              <h1 style="margin: 0; color: #ffff; font-size: 26px; font-weight: 600; letter-spacing: -0.5px;">
                Confirmação de Recepção
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px; text-align: left;">

              <p style="margin: 0 0 20px; color: #334155; font-size: 16px; line-height: 1.6;">
                Olá <strong style="color: #0e6995;">${name}</strong>,
              </p>

              <p style="margin: 0 0 20px; color: #475569; font-size: 15px; line-height: 1.6;">
                Agradecemos por entrar em contato conosco! 🎉  
                Sua mensagem foi recebida com sucesso com o seguinte assunto:
              </p>

              <p style="margin: 0 0 20px; color: #0e6995; font-size: 16px; font-weight: 600;">
                "${subject || "Não especificado"}"
              </p>
              
              <!-- Message Box -->
              <div style="background-color: #f1f5f9; border-left: 4px solid #0e6995; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
                  <h2 style="margin: 0 0 10px; color: #0e6995; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">Mensagem</h2>
                  <p style="margin: 0; color: #64748b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
              
              <p style="margin: 0 0 20px; color: #475569; font-size: 15px; line-height: 1.6;">
                Nossa equipe já foi notificada e em breve entraremos em contato com você.
              </p>

              <p style="margin: 20px 0 0; color: #475569; font-size: 14px; line-height: 1.6;">
                Atenciosamente, <br>
                <strong style="color: #0e6995;">${
                  process.env.COMPANY_NAME
                }</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                Esta é uma confirmação automática do seu contato. Por favor, não responda a este e-mail.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>

    `;

    // Email de notificação para a empresa
    const companyEmailHtml = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <title>Nova Mensagem de Contato</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f8fafc;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); overflow: hidden;">
                
                <!-- Header -->
                <tr>
                  <td style="background-color: #0e6995; border-radius: 12px;  padding: 40px 30px; text-align: center; border-bottom: 2px solid #0e6995;">
                    <img src="https://dbmib2q8rj.ufs.sh/f/Lm6xK3J7O1CLw6dgkLlWdtKPHol1sCapm74kg5OGAnfB9zSY" alt="Logo" style="max-width: 150px; height: auto; margin-bottom: 20px;">
                    <h1 style="margin: 0; color: #ffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">Nova Mensagem Recebida</h1>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <p style="margin: 0 0 20px; color: #475569; font-size: 16px;  line-height: 1.6;">
                       <strong style="margin: 0 0 20px; color: #0e6995; font-size: 16px;  line-height: 1.6;">Notificação:</strong> nova mensagem recebida através do formulário de contato.
                    </p>
                    <!-- Contact Info Cards -->
                    <div style="background-color: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
                      <h2 style="margin: 0 0 20px; color: #0e6995; font-size: 18px; font-weight: 600;">Informações do Contato</h2>
                      
                      <div style="margin-bottom: 16px;">
                        <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Nome</p>
                        <p style="margin: 0; color: #117aae; font-size: 16px; font-weight: 500;">${name}</p>
                      </div>

                      <div style="margin-bottom: 16px;">
                        <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                        <p style="margin: 0;">
                          <a href="mailto:${email}" style="color: #117aae; font-size: 16px; font-weight: 500; text-decoration: none;">${email}</a>
                        </p>
                      </div>

                      ${
                        phone
                          ? `
                      <div style="margin-bottom: 16px;">
                        <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Telefone</p>
                        <p style="margin: 0;">
                          <a href="tel:${phone}" style="color: #117aae; font-size: 16px; font-weight: 500; text-decoration: none;">${phone}</a>
                        </p>
                      </div>
                      `
                          : ""
                      }

                      <div>
                        <p style="margin: 0 0 4px; color: #64748b; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Assunto</p>
                        <p style="margin: 0; color: #117aae; font-size: 16px; font-weight: 500;">${
                          subject || "Não especificado"
                        }</p>
                      </div>
                    </div>

                    <!-- Message Box -->
                    <div style="background-color: #f1f5f9; border-left: 4px solid #0e6995; border-radius: 12px; padding: 24px; margin-bottom: 20px;">
                      <h2 style="margin: 0 0 10px; color: #0e6995; font-size: 18px; font-weight: 600; letter-spacing: 0.5px;">Mensagem</p>
                      <p style="margin: 0; color: #64748b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>

                    <!-- Action Button -->
                    <div style="text-align: center; margin-top: 30px;">
                      <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #0c587d 0%, #0c587d 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.2);">
                        Responder Agora
                      </a>
                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                <td style="background-color: #f8fafc; padding: 30px; border-top: 1px solid #e2e8f0;">
                  <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="text-align: center;">
                      <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                        <strong style="color: #0e6995; line-height: 1.5;">${
                          process.env.COMPANY_NAME
                        }</strong> - Sistema de Contato
                      </p>
                      <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px; line-height: 1.5;">
                        Mensagem enviada pelo formulário de contato do site.
                      </p>
                    </div>
                    
                  </div>
                </td>
              </tr>


              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Enviar email de confirmação para o usuário
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Confirmação de Contacto - Recebemos sua mensagem!",
      html: userEmailHtml,
    });

    // Enviar notificação para a empresa
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem de recebida: ${subject || "Sem assunto"}`,
      html: companyEmailHtml,
    });

    return NextResponse.json(
      { message: "Emails enviados com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
