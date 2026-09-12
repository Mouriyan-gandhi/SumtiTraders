import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'sumtitraders@gmail.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Sumti Traders <onboarding@resend.dev>'
const REPLY_ACK_ENABLED = process.env.CONTACT_ACK !== 'off'

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const clean = (v: unknown, max = 500) => String(v ?? '').trim().slice(0, max)

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Honeypot: bots often fill hidden fields; humans don't.
    if (body?.company_website) {
      return NextResponse.json({ ok: true })
    }

    const name = clean(body.name, 120)
    const store = clean(body.store, 160)
    const city = clean(body.city, 120)
    const phone = clean(body.phone, 40)
    const email = clean(body.email, 160)
    const message = clean(body.message, 2000)
    const interested: string[] = Array.isArray(body.interested)
      ? body.interested.map((s: unknown) => clean(s, 40)).slice(0, 6)
      : []

    if (!name || !email || !isEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Please provide your name and a valid email address.' }, { status: 400 })
    }
    if (!message && !store && !city && !phone) {
      return NextResponse.json({ ok: false, error: 'Please tell us a little about your enquiry.' }, { status: 400 })
    }

    if (!RESEND_API_KEY) {
      console.error('[contact] RESEND_API_KEY is not set — enquiry not delivered')
      return NextResponse.json({ ok: false, error: 'Email is not configured on the server.' }, { status: 500 })
    }

    const resend = new Resend(RESEND_API_KEY)

    const subject = `Wholesale enquiry · ${name}${store ? ` · ${store}` : ''}`
    const html = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; background:#faf3e0; color:#1a1612;">
        <div style="border-bottom:1px solid rgba(138,109,42,.25); padding-bottom:14px; margin-bottom:20px;">
          <div style="font-size:11px; letter-spacing:.28em; text-transform:uppercase; color:#6b5e4f;">SUMTI TRADERS · WHOLESALE DESK</div>
          <h1 style="font-family: Georgia, serif; font-size:26px; margin:8px 0 0; color:#1a1612;">New wholesale enquiry</h1>
        </div>
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <tr><td style="padding:8px 0; color:#6b5e4f; width:130px;">Name</td><td style="padding:8px 0; font-weight:600;">${esc(name)}</td></tr>
          ${store ? `<tr><td style="padding:8px 0; color:#6b5e4f;">Store / Brand</td><td style="padding:8px 0;">${esc(store)}</td></tr>` : ''}
          ${city ? `<tr><td style="padding:8px 0; color:#6b5e4f;">City, State</td><td style="padding:8px 0;">${esc(city)}</td></tr>` : ''}
          <tr><td style="padding:8px 0; color:#6b5e4f;">Email</td><td style="padding:8px 0;"><a href="mailto:${esc(email)}" style="color:#8a6d2a;">${esc(email)}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0; color:#6b5e4f;">Phone</td><td style="padding:8px 0;"><a href="tel:${esc(phone)}" style="color:#8a6d2a;">${esc(phone)}</a></td></tr>` : ''}
          ${interested.length ? `<tr><td style="padding:8px 0; color:#6b5e4f;">Interested in</td><td style="padding:8px 0;">${interested.map(esc).join(' · ')}</td></tr>` : ''}
        </table>
        ${message ? `
          <div style="margin-top:22px;">
            <div style="font-size:11px; letter-spacing:.28em; text-transform:uppercase; color:#6b5e4f;">Message</div>
            <div style="margin-top:8px; padding:16px; background:#efe1be; border-left:3px solid #8a6d2a; white-space:pre-wrap; line-height:1.6;">${esc(message)}</div>
          </div>` : ''}
        <p style="margin-top:24px; font-size:12px; color:#6b5e4f;">Reply directly to this email to reach ${esc(name)}.</p>
      </div>`

    const text = [
      `New wholesale enquiry · Sumti Traders`,
      ``,
      `Name: ${name}`,
      store ? `Store: ${store}` : null,
      city ? `City: ${city}` : null,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      interested.length ? `Interested: ${interested.join(', ')}` : null,
      message ? `\nMessage:\n${message}` : null,
    ].filter(Boolean).join('\n')

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject,
      html,
      text,
    })
    if (error) {
      console.error('[contact] Resend error', error)
      return NextResponse.json({ ok: false, error: 'Could not send your enquiry. Please email us directly.' }, { status: 502 })
    }

    if (REPLY_ACK_ENABLED) {
      const ackHtml = `
        <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background:#faf3e0; color:#1a1612; text-align:center;">
          <div style="font-size:11px; letter-spacing:.3em; text-transform:uppercase; color:#8a6d2a; margin-bottom:8px;">Sumti Traders · Since 1970</div>
          <h1 style="font-family: Georgia, serif; font-size:32px; margin:0 0 12px; color:#1a1612;">Thank you.</h1>
          <p style="font-size:15px; line-height:1.7; color:#3a322a;">Your enquiry has reached our Sowcarpet wholesale desk. Someone from our team will write back within forty-eight hours.</p>
          <p style="margin-top:24px; font-size:13px; color:#6b5e4f;">The Sumti Traders Wholesale Desk<br/>Sowcarpet · Chennai · India</p>
        </div>`
      try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: [email],
          subject: 'We received your enquiry · Sumti Traders',
          html: ackHtml,
          text: `Thank you.\n\nYour enquiry has reached our Sowcarpet wholesale desk. Someone from our team will write back within forty-eight hours.\n\nThe Sumti Traders Wholesale Desk\nSowcarpet · Chennai · India`,
        })
      } catch (e) {
        console.warn('[contact] ack email failed', e)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] handler error', err)
    return NextResponse.json({ ok: false, error: 'Something went wrong. Please try again in a moment.' }, { status: 500 })
  }
}
