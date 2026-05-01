import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

type Locale = "fr" | "en";

type PilotRequestPayload = {
  fullName?: unknown;
  email?: unknown;
  organization?: unknown;
  country?: unknown;
  institutionType?: unknown;
  fileVolume?: unknown;
  operatingZone?: unknown;
  priorityNeed?: unknown;
  message?: unknown;
  locale?: unknown;
  companyWebsite?: unknown;
};

const MAX_MESSAGE_LENGTH = 2000;
const MAX_FIELD_LENGTH = 200;
const MAX_PAYLOAD_LENGTH = 8000;

function normalizeString(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function normalizeMessage(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, MAX_MESSAGE_LENGTH);
}

function normalizeLocale(value: unknown): Locale {
  return value === "en" ? "en" : "fr";
}

function normalizeEnvString(value: string | undefined) {
  return (value ?? "").trim().replace(/^"(.*)"$/, "$1");
}

function normalizePort(value: string | undefined, fallback: number) {
  const normalized = Number.parseInt((value ?? "").trim(), 10);
  return Number.isFinite(normalized) ? normalized : fallback;
}

function normalizeBoolean(value: string | undefined, fallback: boolean) {
  if (!value) {
    return fallback;
  }

  const normalized = value.trim().toLowerCase();

  if (normalized === "true" || normalized === "1" || normalized === "yes") {
    return true;
  }

  if (normalized === "false" || normalized === "0" || normalized === "no") {
    return false;
  }

  return fallback;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatField(label: string, value: string) {
  return `${label}: ${value || "-"}`;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildEmailContent(data: {
  fullName: string;
  email: string;
  organization: string;
  country: string;
  institutionType: string;
  fileVolume: string;
  operatingZone: string;
  priorityNeed: string;
  message: string;
  locale: Locale;
  receivedAt: string;
}) {
  const labels =
    data.locale === "en"
      ? {
          intro: "This request comes from the public Wakama Corporate Site form.",
          fullName: "Full name",
          email: "Professional email",
          organization: "Organization",
          country: "Country",
          institutionType: "Institution type",
          fileVolume: "Estimated agricultural file volume",
          operatingZone: "Operating zone",
          priorityNeed: "Priority need",
          message: "Message",
          locale: "Form locale",
          receivedAt: "Received at",
        }
      : {
          intro: "Cette demande provient du formulaire public Wakama Corporate Site.",
          fullName: "Nom complet",
          email: "Email professionnel",
          organization: "Organisation",
          country: "Pays",
          institutionType: "Type d’institution",
          fileVolume: "Volume estimé de dossiers agricoles",
          operatingZone: "Zone d’intervention",
          priorityNeed: "Besoin prioritaire",
          message: "Message",
          locale: "Langue du formulaire",
          receivedAt: "Date/heure de réception",
        };

  const rows = [
    [labels.fullName, data.fullName],
    [labels.email, data.email],
    [labels.organization, data.organization],
    [labels.country, data.country],
    [labels.institutionType, data.institutionType],
    [labels.fileVolume, data.fileVolume],
    [labels.operatingZone, data.operatingZone],
    [labels.priorityNeed, data.priorityNeed],
    [labels.message, data.message],
    [labels.locale, data.locale],
    [labels.receivedAt, data.receivedAt],
  ] as const;

  const text = [labels.intro, "", ...rows.map(([label, value]) => formatField(label, value))].join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-weight:600;color:#111827;width:220px;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;color:#374151;vertical-align:top;white-space:pre-wrap;">${escapeHtml(
            value || "-",
          )}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="margin:0;padding:24px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#111827;">
      <div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
        <div style="padding:24px 28px;background:#0f172a;color:#ffffff;">
          <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;opacity:0.78;">Wakama Pilot</div>
          <h1 style="margin:10px 0 0;font-size:24px;line-height:1.3;font-weight:600;">${escapeHtml(data.organization)}</h1>
        </div>
        <div style="padding:24px 28px;">
          <p style="margin:0 0 20px;color:#4b5563;line-height:1.7;">${escapeHtml(labels.intro)}</p>
          <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse;">
            ${htmlRows}
          </table>
        </div>
      </div>
    </div>`;

  return {text, html};
}

function buildConfirmationEmailContent(data: {
  fullName: string;
  organization: string;
  locale: Locale;
}) {
  if (data.locale === "en") {
    const subject = "Your Wakama pilot request has been received";
    const text = [
      `Hello ${data.fullName || "there"},`,
      "",
      "Thank you for your interest in Wakama.",
      `We have received your pilot request for ${data.organization || "your organization"}.`,
      "Our team will review it and get back to you very soon to frame the next steps.",
      "",
      "What happens next:",
      "- review of your request",
      "- first qualification by the Wakama team",
      "- follow-up contact to discuss scope, priorities and pilot framing",
      "",
      "If needed, you can also reach us at pilot@wakama.farm.",
      "",
      "Wakama Team",
    ].join("\n");

    const html = `
      <div style="margin:0;padding:24px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#111827;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
          <div style="padding:24px 28px;background:#0f172a;color:#ffffff;">
            <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;opacity:0.78;">Wakama Pilot</div>
            <h1 style="margin:10px 0 0;font-size:24px;line-height:1.3;font-weight:600;">Your request has been received</h1>
          </div>
          <div style="padding:24px 28px;">
            <p style="margin:0 0 14px;color:#374151;line-height:1.75;">Hello ${escapeHtml(data.fullName || "there")},</p>
            <p style="margin:0 0 14px;color:#374151;line-height:1.75;">Thank you for your interest in Wakama.</p>
            <p style="margin:0 0 14px;color:#374151;line-height:1.75;">We have received your pilot request for <strong style="color:#111827;">${escapeHtml(
              data.organization || "your organization",
            )}</strong>. Our team will review it and get back to you very soon to frame the next steps.</p>
            <div style="margin:20px 0;padding:18px 20px;border:1px solid #e5e7eb;border-radius:14px;background:#f8fafc;">
              <div style="font-size:13px;font-weight:700;color:#111827;margin:0 0 10px;">What happens next</div>
              <ul style="margin:0;padding-left:18px;color:#4b5563;line-height:1.75;">
                <li>Review of your request</li>
                <li>First qualification by the Wakama team</li>
                <li>Follow-up contact to discuss scope, priorities and pilot framing</li>
              </ul>
            </div>
            <p style="margin:0;color:#4b5563;line-height:1.75;">If needed, you can also reach us at <a href="mailto:pilot@wakama.farm" style="color:#0f766e;text-decoration:none;">pilot@wakama.farm</a>.</p>
            <p style="margin:20px 0 0;color:#111827;font-weight:600;">Wakama Team</p>
          </div>
        </div>
      </div>`;

    return {subject, text, html};
  }

  const subject = "Votre demande de pilote Wakama a bien été reçue";
  const text = [
    `Bonjour ${data.fullName || ""}`.trim(),
    "",
    "Merci pour votre intérêt pour Wakama.",
    `Nous avons bien reçu votre demande de pilote pour ${data.organization || "votre organisation"}.`,
    "Notre équipe va l’examiner et reviendra vers vous très prochainement pour cadrer les prochaines étapes.",
    "",
    "Ce qui se passe maintenant :",
    "- revue de votre demande",
    "- première qualification par l’équipe Wakama",
    "- prise de contact pour discuter du périmètre, des priorités et du cadrage du pilote",
    "",
    "Si besoin, vous pouvez aussi nous écrire à pilot@wakama.farm.",
    "",
    "L’équipe Wakama",
  ].join("\n");

  const html = `
    <div style="margin:0;padding:24px;background:#f3f4f6;font-family:Arial,Helvetica,sans-serif;color:#111827;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
        <div style="padding:24px 28px;background:#0f172a;color:#ffffff;">
          <div style="font-size:12px;letter-spacing:0.12em;text-transform:uppercase;opacity:0.78;">Wakama Pilot</div>
          <h1 style="margin:10px 0 0;font-size:24px;line-height:1.3;font-weight:600;">Votre demande a bien été reçue</h1>
        </div>
        <div style="padding:24px 28px;">
          <p style="margin:0 0 14px;color:#374151;line-height:1.75;">Bonjour ${escapeHtml(data.fullName || "")},</p>
          <p style="margin:0 0 14px;color:#374151;line-height:1.75;">Merci pour votre intérêt pour Wakama.</p>
          <p style="margin:0 0 14px;color:#374151;line-height:1.75;">Nous avons bien reçu votre demande de pilote pour <strong style="color:#111827;">${escapeHtml(
            data.organization || "votre organisation",
          )}</strong>. Notre équipe va l’examiner et reviendra vers vous très prochainement pour cadrer les prochaines étapes.</p>
          <div style="margin:20px 0;padding:18px 20px;border:1px solid #e5e7eb;border-radius:14px;background:#f8fafc;">
            <div style="font-size:13px;font-weight:700;color:#111827;margin:0 0 10px;">Ce qui se passe maintenant</div>
            <ul style="margin:0;padding-left:18px;color:#4b5563;line-height:1.75;">
              <li>Revue de votre demande</li>
              <li>Première qualification par l’équipe Wakama</li>
              <li>Prise de contact pour discuter du périmètre, des priorités et du cadrage du pilote</li>
            </ul>
          </div>
          <p style="margin:0;color:#4b5563;line-height:1.75;">Si besoin, vous pouvez aussi nous écrire à <a href="mailto:pilot@wakama.farm" style="color:#0f766e;text-decoration:none;">pilot@wakama.farm</a>.</p>
          <p style="margin:20px 0 0;color:#111827;font-weight:600;">L’équipe Wakama</p>
        </div>
      </div>
    </div>`;

  return {subject, text, html};
}

function createSmtpTransport() {
  const host = normalizeEnvString(process.env.SMTP_HOST) || "smtp.hostinger.com";
  const port = normalizePort(process.env.SMTP_PORT, 465);
  const secure = normalizeBoolean(process.env.SMTP_SECURE, true);
  const user = normalizeEnvString(process.env.SMTP_USER);
  const pass = normalizeEnvString(process.env.SMTP_PASS);

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_PAYLOAD_LENGTH) {
    return NextResponse.json({ok: false, message: "invalid_payload"}, {status: 400});
  }

  let payload: PilotRequestPayload;

  try {
    payload = (await request.json()) as PilotRequestPayload;
  } catch {
    return NextResponse.json({ok: false, message: "invalid_payload"}, {status: 400});
  }

  const fullName = normalizeString(payload.fullName, 120);
  const email = normalizeString(payload.email, 160).toLowerCase();
  const organization = normalizeString(payload.organization, 160);
  const country = normalizeString(payload.country, 120);
  const institutionType = normalizeString(payload.institutionType, 120);
  const fileVolume = normalizeString(payload.fileVolume, 160);
  const operatingZone = normalizeString(payload.operatingZone, 160);
  const priorityNeed = normalizeString(payload.priorityNeed, 160);
  const message = normalizeMessage(payload.message);
  const locale = normalizeLocale(payload.locale);
  const honeypot = normalizeString(payload.companyWebsite, 255);

  if (honeypot) {
    return NextResponse.json({ok: true, message: "pilot_request_sent"});
  }

  const isInvalid =
    fullName.length < 2 ||
    email.length === 0 ||
    !isValidEmail(email) ||
    organization.length < 2 ||
    country.length === 0 ||
    institutionType.length === 0 ||
    priorityNeed.length === 0 ||
    message.length > MAX_MESSAGE_LENGTH;

  if (isInvalid) {
    return NextResponse.json({ok: false, message: "invalid_payload"}, {status: 400});
  }

  const smtpFromEmail =
    normalizeEnvString(process.env.SMTP_FROM_EMAIL) ||
    normalizeEnvString(process.env.RESEND_FROM_EMAIL);
  const smtpToEmail =
    normalizeEnvString(process.env.SMTP_TO_EMAIL) ||
    normalizeEnvString(process.env.RESEND_TO_EMAIL);
  const transporter = createSmtpTransport();

  if (!smtpFromEmail || !smtpToEmail || !transporter) {
    console.error("[pilot-request] Missing SMTP environment variables in server runtime.");
    return NextResponse.json({ok: false, message: "send_failed"}, {status: 500});
  }

  const receivedAt = new Date().toISOString();
  const subject =
    locale === "en"
      ? `New Wakama pilot request — ${organization}`
      : `Nouvelle demande de pilote Wakama — ${organization}`;

  const {html, text} = buildEmailContent({
    fullName,
    email,
    organization,
    country,
    institutionType,
    fileVolume,
    operatingZone,
    priorityNeed,
    message,
    locale,
    receivedAt,
  });

  try {
    const result = await transporter.sendMail({
      from: smtpFromEmail,
      to: smtpToEmail,
      replyTo: email,
      subject,
      text,
      html,
    });

    console.info("[pilot-request] Internal SMTP email accepted.", {
      messageId: result.messageId ?? null,
    });

    const confirmation = buildConfirmationEmailContent({
      fullName,
      organization,
      locale,
    });

    try {
      const confirmationResult = await transporter.sendMail({
        from: smtpFromEmail,
        to: email,
        replyTo: smtpToEmail,
        subject: confirmation.subject,
        text: confirmation.text,
        html: confirmation.html,
      });

      console.info("[pilot-request] Prospect confirmation SMTP email accepted.", {
        messageId: confirmationResult.messageId ?? null,
      });
    } catch (error) {
      console.error("[pilot-request] Prospect confirmation SMTP email send failed.", {
        name: error instanceof Error ? error.name : "UnknownError",
        message: error instanceof Error ? error.message : "Unknown send failure",
      });
    }

    return NextResponse.json({ok: true, message: "pilot_request_sent"});
  } catch (error) {
    console.error("[pilot-request] Internal SMTP email send failed.", {
      name: error instanceof Error ? error.name : "UnknownError",
      message: error instanceof Error ? error.message : "Unknown send failure",
    });
    return NextResponse.json({ok: false, message: "send_failed"}, {status: 500});
  }
}
