// ──────────────────────────────────────────────
//  FINA - Gestion de Portefeuille : Course Metadata
// ──────────────────────────────────────────────

export const portfolioMeta = {
  id: 'portfolio',
  title: 'Gestion de Portefeuille',
  description:
    'Théorie moderne du portefeuille, allocation d\'actifs, modèles factoriels et gestion du risque. De Markowitz au risk budgeting, maîtrise la construction de portefeuilles optimaux.',
  color: '#DB2777',
  icon: 'pie-chart',
  finnRole: 'captain',
  finnTier: 'orange' as const,
  totalLessons: 26,
  estimatedHours: 16,
  prerequisites: ['fundamentals'],
  tags: ['Markowitz', 'CAPM', 'Allocation', 'Diversification', 'Sharpe', 'ETF'],
};
