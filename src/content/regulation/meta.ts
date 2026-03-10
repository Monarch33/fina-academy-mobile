// ──────────────────────────────────────────────
//  FINA - Réglementation : Course Metadata
// ──────────────────────────────────────────────

export const regulationMeta = {
  id: 'regulation',
  title: 'Réglementation',
  description:
    'Bâle III, MiFID II, EMIR et cadre réglementaire financier européen. Maîtrise les ratios prudentiels et la conformité bancaire.',
  color: '#64748B',
  icon: 'shield',
  finnRole: 'captain',
  finnTier: 'orange' as const,
  totalLessons: 18,
  estimatedHours: 10,
  prerequisites: ['fundamentals'],
  tags: ['Bâle III', 'MiFID II', 'EMIR', 'AML', 'Stress Tests', 'TLAC'],
};
