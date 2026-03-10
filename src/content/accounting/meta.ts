// ──────────────────────────────────────────────
//  FINA - Comptabilité IFRS : Course Metadata
// ──────────────────────────────────────────────

export const accountingMeta = {
  id: 'accounting',
  title: 'Comptabilité IFRS',
  description:
    'Normes internationales, consolidation, retraitements et analyse de la qualité des comptes. Maîtrise les IFRS pour décoder les états financiers.',
  color: '#0D9488',
  icon: 'book-open',
  finnRole: 'professor',
  finnTier: 'orange' as const,
  totalLessons: 20,
  estimatedHours: 11,
  prerequisites: ['fundamentals'],
  tags: ['IFRS', 'Consolidation', 'Goodwill', 'Leases', 'Revenue', 'Red flags'],
};
