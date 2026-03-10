// ──────────────────────────────────────────────
//  FINA - Finance Quantitative : Course Metadata
// ──────────────────────────────────────────────

export const quantitativeMeta = {
  id: 'quantitative',
  title: 'Finance Quantitative',
  description:
    'Plonge dans les modèles stochastiques, le pricing d\'options exotiques et la gestion quantitative. Du mouvement brownien au machine learning, maîtrise les outils des quants.',
  color: '#4F46E5',
  icon: 'rocket',
  finnRole: 'astronaut',
  finnTier: 'gold' as const,
  totalLessons: 24,
  estimatedHours: 20,
  prerequisites: ['fundamentals', 'derivatives'],
  tags: ['Stochastique', 'Black-Scholes', 'Monte Carlo', 'GARCH', 'Machine Learning', 'Copules'],
};
