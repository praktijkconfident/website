import { NextRequest, NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const naam = typeof body?.naam === 'string' ? body.naam.trim().slice(0, 100) : '';
  const honeypot = typeof body?.website === 'string' ? body.website.trim() : '';
  const isEbook = body?.lijst === 'ebook';

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ ok: false, error: 'Vul een geldig e-mailadres in.' }, { status: 400 });
  }

  // E-book aanmeldingen gaan naar een aparte MailerLite-groep; de automation
  // in MailerLite verstuurt het e-book zodra iemand aan die groep wordt toegevoegd.
  const groupId = isEbook ? process.env.MAILERLITE_EBOOK_GROUP_ID : process.env.MAILERLITE_GROUP_ID;
  if (!groupId) {
    console.error(`MailerLite group id ontbreekt (${isEbook ? 'MAILERLITE_EBOOK_GROUP_ID' : 'MAILERLITE_GROUP_ID'})`);
    return NextResponse.json(
      { ok: false, error: 'Inschrijven is niet gelukt. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }

  const mailerliteRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      groups: [groupId],
      ...(naam ? { fields: { name: naam } } : {}),
    }),
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
