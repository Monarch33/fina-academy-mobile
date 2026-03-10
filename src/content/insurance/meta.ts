// ──────────────────────────────────────────────
//  FINA - Assurance & Actuariat : Course Metadata
// ──────────────────────────────────────────────

export const insuranceMeta = {
  id: 'insurance',
  title: 'Assurance & Actuariat',
  description:
    'Tarification, provisions techniques et cadre Solvabilité II. Maîtrise les fondamentaux de l\'assurance et du calcul actuariel.',
  color: '#64748B',
  icon: 'umbrella',
  finnRole: 'doctor',
  finnTier: 'orange' as const,
  totalLessons: 14,
  estimatedHours: 9,
  prerequisites: ['fundamentals'],
  tags: ['Solvabilité II', 'SCR', 'IFRS 17', 'Best Estimate', 'Réassurance', 'Cat Bonds'],
};
