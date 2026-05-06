export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, brandName, message } = body ?? {}

    if (!name || !email || !phone || !brandName) {
      return NextResponse.json(
        { success: false, message: 'Campos obrigatórios faltando' },
        { status: 400 }
      )
    }

    const submission = await prisma?.contactSubmission?.create?.({
      data: {
        name: name ?? '',
        email: email ?? '',
        phone: phone ?? '',
        brandName: brandName ?? '',
        message: message ?? '',
      },
    })

    if (!submission) {
      throw new Error('Failed to save submission')
    }

    const appUrl = process.env.NEXTAUTH_URL ?? 'https://hcsregistrodemarcas.com'
    const hostname = new URL(appUrl).hostname

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a; border-bottom: 3px solid #fbbf24; padding-bottom: 10px;">
          Nova Solicitação de Análise Gratuita
        </h2>
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Nome:</strong> ${name ?? 'N/A'}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Telefone/WhatsApp:</strong> ${phone ?? 'N/A'}</p>
          <p style="margin: 10px 0;"><strong>Nome da Marca:</strong> ${brandName ?? 'N/A'}</p>
          ${message ? `<p style="margin: 10px 0;"><strong>Mensagem:</strong></p><div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #1e3a8a;">${(message ?? '').replace(/\n/g, '<br>')}</div>` : ''}
        </div>
        <p style="color: #666; font-size: 12px;">Submetido em: ${new Date().toLocaleString('pt-BR')}</p>
      </div>
    `

    const response = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        deployment_token: process.env.ABACUSAI_API_KEY,
        app_id: process.env.WEB_APP_ID,
        notification_id: process.env.NOTIF_ID_CONTACT_FORM_SUBMISSION,
        subject: `Nova Solicitação de Análise - ${brandName}`,
        body: htmlBody,
        is_html: true,
        recipient_email: 'luispaulolpsn@gmail.com',
        reply_to: email,
        sender_email: `noreply@${hostname}`,
        sender_alias: 'HCS Registro de Marcas',
      }),
    })

    const result = await response.json()

    if (!result?.success) {
      if (result?.notification_disabled) {
        console.log('Email notification disabled')
      } else {
        console.error('Error sending email:', result?.message)
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Formulário enviado com sucesso!',
        data: { id: submission?.id },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao processar seu pedido. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}