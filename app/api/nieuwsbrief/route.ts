import { NextRequest, NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const honeypot = typeof body?.website === 'string' ? body.website.trim() : '';

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ ok: false, error: 'Vul een geldig e-mailadres in.' }, { status: 400 });
  }

  const mailerliteRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
    },
    body: JSON.stringify({ email, groups: [process.env.MAILERLITE_GROUP_ID] }),
  });

  if (!mailerliteRes.ok) {
    const errText = await mailerliteRes.text();
    console.error('MailerLite subscribe error', mailerliteRes.status, errText);
    return NextResponse.json(
      { ok: false, error: 'Inschrijven is niet gelukt. Probeer het later opnieuw.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
