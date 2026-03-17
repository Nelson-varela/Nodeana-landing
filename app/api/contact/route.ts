import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message || !service) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const to = process.env.LEAD_RECEIVER_EMAIL;
    const from = process.env.LEAD_FROM_EMAIL;

    if (!to || !from || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          error: 'Missing email delivery environment variables.',
          debug: {
            hasApiKey: !!process.env.RESEND_API_KEY,
            hasTo: !!to,
            hasFrom: !!from,
          },
        },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New Nodeana Labs inquiry · ${service}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.65;color:#111;max-width:680px;margin:0 auto;">
          <h2 style="margin-bottom:24px;">New inquiry from Nodeana Labs</h2>
          <p><strong>Full name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Work email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
          <p><strong>Service of interest:</strong> ${escapeHtml(service)}</p>
          <p><strong>Project details:</strong></p>
          <div style="padding:16px;border:1px solid #ddd;border-radius:12px;white-space:pre-wrap;">${escapeHtml(message)}</div>
        </div>
      `,
    });

    if (error) {
      console.error('RESEND ERROR:', error);
      return NextResponse.json(
        { error: error.message ?? 'Resend failed to send email.', details: error },
        { status: 500 }
      );
    }

    console.log('RESEND SUCCESS:', data);

    return NextResponse.json({ ok: true, data });
  } catch (error) {
    console.error('ROUTE ERROR:', error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Internal server error.',
      },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}