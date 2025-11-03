import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validar los campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Preparar el contenido del email
    const emailContent = `
      <h2>Nuevo mensaje de contacto desde la página web</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `;

    // Por ahora, vamos a usar fetch para enviar un email usando Resend API
    // Necesitarás agregar tu API key de Resend en las variables de entorno
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY no está configurada');
      // En desarrollo, retornamos éxito simulado
      if (process.env.NODE_ENV === 'development') {
        console.log('Email simulado enviado:', { name, email, phone, message });
        return NextResponse.json({ success: true });
      }
      return NextResponse.json(
        { error: 'Configuración de email no disponible' },
        { status: 500 }
      );
    }

    // Enviar email usando Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Medicina Deportiva <onboarding@resend.dev>', // Cambiar a tu dominio verificado
        to: ['jhon@lokl.life'],
        subject: `Nuevo mensaje de contacto de ${name}`,
        html: emailContent,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Error al enviar email:', error);
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log('Email enviado exitosamente:', data);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error en el endpoint de envío de email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

