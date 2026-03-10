// Resend email service
// Requires RESEND_API_KEY environment variable
// In production, emails should be sent from a backend

const RESEND_API_URL = 'https://api.resend.com/emails';

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(params: SendEmailParams): Promise<boolean> {
  // In development, just log. In production, call Resend API
  console.log('[Email]', params.subject, '->', params.to);
  return true;
}

export function getWelcomeEmailHTML(name: string): string {
  return `
    <div style="font-family: 'Plus Jakarta Sans', sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
      <h1 style="color: #E8580C; font-size: 28px;">Bienvenue sur FINA, ${name} !</h1>
      <p style="color: #57534E; font-size: 16px; line-height: 1.6;">
        Finn est prêt à t'accompagner dans ton apprentissage de la finance.
        18 cours, 400+ leçons et des quiz illimités t'attendent.
      </p>
      <a href="https://fina.app" style="display: inline-block; padding: 14px 28px; background: #E8580C; color: white; border-radius: 12px; text-decoration: none; font-weight: 700;">
        Commencer maintenant
      </a>
    </div>
  `;
}

export function getStreakLostEmailHTML(name: string, previousStreak: number): string {
  return `
    <div style="font-family: 'Plus Jakarta Sans', sans-serif; max-width: 480px; margin: 0 auto; padding: 32px;">
      <h1 style="color: #DC2626; font-size: 28px;">Ta série de ${previousStreak} jours est perdue...</h1>
      <p style="color: #57534E; font-size: 16px; line-height: 1.6;">
        ${name}, Finn est triste ! Mais pas de panique, recommence dès aujourd'hui.
      </p>
      <a href="https://fina.app" style="display: inline-block; padding: 14px 28px; background: #E8580C; color: white; border-radius: 12px; text-decoration: none; font-weight: 700;">
        Relancer ma série
      </a>
    </div>
  `;
}
