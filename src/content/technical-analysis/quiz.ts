// ──────────────────────────────────────────────
//  FINA - Analyse Technique : Quiz Questions
// ──────────────────────────────────────────────

import type { QuizQuestion } from '@/types/course';

export const technicalAnalysisQuiz: QuizQuestion[] = [
  // ── Leçon 1 : Philosophie ───────────────────
  {
    id: 'ta-q01',
    lessonId: 'ta-01',
    question: 'Quel est le premier principe de l\'analyse technique ?',
    options: [
      'Les prix sont toujours efficients',
      'Le marché intègre toute l\'information dans le prix',
      'L\'analyse fondamentale est inutile',
      'Les tendances sont imprévisibles',
    ],
    correctIndex: 1,
    explanation:
      'Le premier principe de l\'analyse technique postule que le prix reflète déjà toute l\'information disponible (fondamentale, macroéconomique, psychologique). Il est donc suffisant d\'étudier les prix pour prendre des décisions.',
    difficulty: 'easy',
  },
  {
    id: 'ta-q02',
    lessonId: 'ta-01',
    question: 'Selon la théorie de Dow, le volume doit :',
    options: [
      'Être ignoré dans l\'analyse technique',
      'Rester constant en toute circonstance',
      'Confirmer la tendance dominante',
      'Diminuer dans une tendance haussière',
    ],
    correctIndex: 2,
    explanation:
      'Charles Dow a établi que le volume doit confirmer la tendance. En tendance haussière, le volume doit augmenter lors des phases de hausse et diminuer lors des corrections. Le contraire signale un essoufflement.',
    difficulty: 'easy',
  },

  // ── Leçon 2 : Types de graphiques ──────────
  {
    id: 'ta-q03',
    lessonId: 'ta-02',
    question: 'Un corps vert/blanc sur un chandelier japonais signifie :',
    options: [
      'Le cours a baissé pendant la période',
      'Le cours de clôture est supérieur au cours d\'ouverture',
      'Le volume a augmenté',
      'Le titre est en zone de surachat',
    ],
    correctIndex: 1,
    explanation:
      'Un corps vert (ou blanc) indique que le cours de clôture est supérieur au cours d\'ouverture : les acheteurs ont dominé la séance. La longueur du corps reflète l\'ampleur de la victoire des acheteurs.',
    difficulty: 'easy',
  },
  {
    id: 'ta-q04',
    lessonId: 'ta-02',
    question: 'Pourquoi l\'échelle logarithmique est-elle recommandée pour les séries longues ?',
    options: [
      'Elle est plus esthétique',
      'Elle montre les variations en pourcentage plutôt qu\'en valeur absolue',
      'Elle compresse les données récentes',
      'Elle est obligatoire pour les chandeliers japonais',
    ],
    correctIndex: 1,
    explanation:
      'L\'échelle logarithmique représente les variations en pourcentage : une hausse de 10 à 20 (×2) a la même hauteur qu\'une hausse de 100 à 200 (×2). En échelle arithmétique, la seconde paraîtrait 10 fois plus grande.',
    difficulty: 'medium',
  },

  // ── Leçon 3 : Supports et résistances ──────
  {
    id: 'ta-q05',
    lessonId: 'ta-03',
    question: 'Que devient un support une fois cassé avec conviction ?',
    options: [
      'Il disparaît définitivement',
      'Il reste un support',
      'Il devient une résistance (changement de polarité)',
      'Il se transforme en ligne de tendance',
    ],
    correctIndex: 2,
    explanation:
      'C\'est le principe fondamental de changement de polarité : un support cassé devient une résistance future, car les acheteurs piégés à ce niveau chercheront à vendre au prochain retour pour limiter leurs pertes.',
    difficulty: 'easy',
  },

  // ── Leçon 4 : Lignes de tendance ──────────
  {
    id: 'ta-q06',
    lessonId: 'ta-04',
    question: 'Combien de points minimum faut-il pour valider une ligne de tendance ?',
    options: [
      '1 point',
      '2 points',
      '3 points',
      '5 points',
    ],
    correctIndex: 1,
    explanation:
      'Il faut au minimum deux points pour tracer une ligne de tendance (deux creux pour une tendance haussière, deux sommets pour une tendance baissière). Un troisième point de contact valide et renforce la ligne.',
    difficulty: 'easy',
  },
  {
    id: 'ta-q07',
    lessonId: 'ta-04',
    question: 'Que signale la cassure d\'une ligne de tendance haussière avec un volume élevé ?',
    options: [
      'Un renforcement de la tendance haussière',
      'Un retournement potentiel vers une tendance baissière',
      'Une consolidation latérale',
      'Rien de significatif',
    ],
    correctIndex: 1,
    explanation:
      'La cassure d\'une ligne de tendance avec volume est un signal de retournement potentiel. Le volume élevé confirme que la cassure est sérieuse et non un simple false breakout.',
    difficulty: 'easy',
  },

  // ── Leçon 5 : Figures de retournement ──────
  {
    id: 'ta-q08',
    lessonId: 'ta-05',
    question: 'Comment calcule-t-on l\'objectif de prix d\'un tête-épaules ?',
    options: [
      'Neckline × 2',
      'Hauteur de la tête projetée depuis la neckline',
      'Distance entre les deux épaules',
      'Moyenne des trois sommets',
    ],
    correctIndex: 1,
    explanation:
      'L\'objectif = Neckline − (Sommet de la tête − Neckline). On projette la hauteur de la figure (distance tête-neckline) vers le bas à partir du point de cassure de la neckline.',
    difficulty: 'medium',
  },
  {
    id: 'ta-q09',
    lessonId: 'ta-05',
    question: 'Dans un tête-épaules, quel rôle joue le volume ?',
    options: [
      'Il n\'a aucune importance',
      'Il doit être constant sur les trois sommets',
      'Il diminue généralement de l\'épaule gauche à la droite, puis explose à la cassure',
      'Il doit être maximal au sommet de la tête',
    ],
    correctIndex: 2,
    explanation:
      'Le volume décline typiquement de l\'épaule gauche vers l\'épaule droite (perte de momentum haussier). La cassure de la neckline doit s\'accompagner d\'une explosion du volume pour confirmer le retournement.',
    difficulty: 'medium',
  },

  // ── Leçon 6 : Figures de continuation ──────
  {
    id: 'ta-q10',
    lessonId: 'ta-06',
    question: 'Comment calcule-t-on l\'objectif de prix d\'un drapeau (flag) ?',
    options: [
      'La largeur du drapeau projetée depuis le breakout',
      'La hauteur du mât projetée depuis le breakout',
      'Le double de la hauteur du drapeau',
      'La distance entre le point d\'entrée et le stop-loss',
    ],
    correctIndex: 1,
    explanation:
      'L\'objectif d\'un drapeau est la hauteur du mât (le mouvement impulsif précédant la consolidation) projetée à partir du point de breakout. Le mât mesure la force du mouvement initial.',
    difficulty: 'medium',
  },
  {
    id: 'ta-q11',
    lessonId: 'ta-06',
    question: 'Un triangle ascendant est typiquement une figure :',
    options: [
      'De retournement baissier',
      'De continuation haussière',
      'Neutre sans biais directionnel',
      'De retournement haussier',
    ],
    correctIndex: 1,
    explanation:
      'Le triangle ascendant (résistance horizontale + support ascendant) est typiquement haussier : les acheteurs sont de plus en plus agressifs (creux montants), tandis que la résistance finit par céder sous la pression.',
    difficulty: 'easy',
  },

  // ── Leçon 7 : Chandeliers japonais ─────────
  {
    id: 'ta-q12',
    lessonId: 'ta-07',
    question: 'Qu\'est-ce qu\'une englobante haussière (bullish engulfing) ?',
    options: [
      'Une grande bougie rouge qui englobe la précédente verte',
      'Une petite bougie verte suivie d\'une grande bougie verte',
      'Une petite bougie rouge suivie d\'une grande bougie verte qui englobe entièrement le corps de la précédente',
      'Un doji suivi d\'un marteau',
    ],
    correctIndex: 2,
    explanation:
      'L\'englobante haussière est une petite bougie rouge (baissière) suivie d\'une grande bougie verte dont le corps englobe entièrement le corps de la précédente. Elle signale une prise de contrôle par les acheteurs.',
    difficulty: 'easy',
  },
  {
    id: 'ta-q13',
    lessonId: 'ta-07',
    question: 'Que signale un doji en sommet de tendance haussière ?',
    options: [
      'La continuation de la hausse',
      'Un signal d\'achat fort',
      'Une indécision qui peut précéder un retournement',
      'Un signal neutre sans signification',
    ],
    correctIndex: 2,
    explanation:
      'Le doji (ouverture ≈ clôture) en sommet de tendance signale que les acheteurs ne parviennent plus à faire monter le prix : l\'indécision s\'installe. Si la bougie suivante est baissière, le retournement est confirmé.',
    difficulty: 'medium',
  },

  // ── Leçon 8 : Volumes ──────────────────────
  {
    id: 'ta-q14',
    lessonId: 'ta-08',
    question: 'Que signale une divergence prix en hausse / volume en baisse ?',
    options: [
      'La tendance haussière est saine et va se poursuivre',
      'L\'essoufflement de la tendance haussière',
      'Un signal d\'achat supplémentaire',
      'Un changement de tendance immédiat',
    ],
    correctIndex: 1,
    explanation:
      'Si le prix monte mais le volume diminue, cela indique que de moins en moins d\'acteurs participent à la hausse. C\'est un signal d\'essoufflement : la tendance perd de la conviction et un retournement devient probable.',
    difficulty: 'medium',
  },

  // ── Leçon 9 : Moyennes mobiles ─────────────
  {
    id: 'ta-q15',
    lessonId: 'ta-09',
    question: 'Qu\'est-ce qu\'un Golden Cross ?',
    options: [
      'Le croisement de la SMA 20 au-dessus de la SMA 50',
      'Le croisement de la SMA 50 au-dessus de la SMA 200',
      'Le croisement de l\'EMA 12 au-dessus de l\'EMA 26',
      'Le croisement du prix au-dessus de la SMA 200',
    ],
    correctIndex: 1,
    explanation:
      'Le Golden Cross est le croisement de la SMA 50 au-dessus de la SMA 200. C\'est un signal haussier de long terme, historiquement associé à des rallyes significatifs. L\'inverse (SMA 50 sous SMA 200) est le Death Cross.',
    difficulty: 'easy',
  },
  {
    id: 'ta-q16',
    lessonId: 'ta-09',
    question: 'Quelle est la différence clé entre SMA et EMA ?',
    options: [
      'La SMA utilise plus de données historiques',
      'L\'EMA accorde plus de poids aux données récentes',
      'La SMA est toujours au-dessus de l\'EMA',
      'L\'EMA ne peut être calculée que sur des périodes courtes',
    ],
    correctIndex: 1,
    explanation:
      'L\'EMA (Exponential Moving Average) accorde un poids exponentiellement décroissant aux données anciennes, ce qui la rend plus réactive aux changements récents de prix. La SMA traite tous les points équitablement.',
    difficulty: 'easy',
  },

  // ── Leçon 10 : RSI ─────────────────────────
  {
    id: 'ta-q17',
    lessonId: 'ta-10',
    question: 'Le prix fait un nouveau plus haut mais le RSI fait un plus haut inférieur. De quoi s\'agit-il ?',
    options: [
      'Une convergence haussière',
      'Une divergence baissière',
      'Un failure swing',
      'Un signal d\'achat',
    ],
    correctIndex: 1,
    explanation:
      'C\'est une divergence baissière : le prix progresse encore mais le momentum (RSI) s\'affaiblit. Ce signal indique un essoufflement de la tendance haussière et précède souvent une correction.',
    difficulty: 'medium',
  },
  {
    id: 'ta-q18',
    lessonId: 'ta-10',
    question: 'En tendance haussière forte, dans quelle zone le RSI oscille-t-il typiquement ?',
    options: [
      '0 − 30',
      '20 − 60',
      '40 − 80',
      '70 − 100',
    ],
    correctIndex: 2,
    explanation:
      'En tendance haussière forte, les seuils classiques (70/30) doivent être ajustés. Le RSI oscille typiquement entre 40 et 80 : les pullbacks vers 40-45 sont des opportunités d\'achat, et le RSI peut rester suracheté longtemps.',
    difficulty: 'hard',
  },

  // ── Leçon 11 : MACD ────────────────────────
  {
    id: 'ta-q19',
    lessonId: 'ta-11',
    question: 'Que représente l\'histogramme du MACD ?',
    options: [
      'Le volume de transactions',
      'La différence entre la ligne MACD et la ligne de signal',
      'Le niveau de surachat/survente',
      'La volatilité du titre',
    ],
    correctIndex: 1,
    explanation:
      'L\'histogramme du MACD = MACD − Signal. Il mesure le momentum : quand il est positif et croissant, le momentum haussier s\'accélère. Quand il diminue, un croisement baissier se prépare.',
    difficulty: 'easy',
  },
  {
    id: 'ta-q20',
    lessonId: 'ta-11',
    question: 'Quel est le signal MACD le plus fort ?',
    options: [
      'Un croisement MACD/Signal au-dessus de la ligne zéro',
      'Un croisement MACD/Signal en dessous de la ligne zéro, suivi d\'un passage au-dessus de zéro',
      'L\'histogramme qui atteint un nouveau sommet',
      'Le MACD qui touche la ligne zéro',
    ],
    correctIndex: 1,
    explanation:
      'Le signal le plus puissant combine un croisement haussier MACD/Signal (momentum à la hausse) ET un passage de la ligne zéro (confirmation de la tendance). Ce double signal indique que l\'EMA rapide est désormais au-dessus de l\'EMA lente.',
    difficulty: 'hard',
  },

  // ── Leçon 12 : Bollinger ───────────────────
  {
    id: 'ta-q21',
    lessonId: 'ta-12',
    question: 'Que signale un squeeze des bandes de Bollinger ?',
    options: [
      'Un retournement de tendance immédiat',
      'Une compression de volatilité qui précède un mouvement fort',
      'Un signal de vente clair',
      'La fin de la tendance en cours',
    ],
    correctIndex: 1,
    explanation:
      'Le squeeze (bandes très resserrées) indique une compression de volatilité. Les marchés alternent entre phases de faible et forte volatilité : après un squeeze, un breakout violent est statistiquement probable, mais la direction reste incertaine.',
    difficulty: 'medium',
  },
  {
    id: 'ta-q22',
    lessonId: 'ta-12',
    question: 'Toucher la bande supérieure de Bollinger est-il un signal de vente systématique ?',
    options: [
      'Oui, toujours',
      'Non, en tendance forte le prix peut longer la bande supérieure (walking the bands)',
      'Oui, sauf si le volume est faible',
      'Non, uniquement si le RSI est en zone de surachat',
    ],
    correctIndex: 1,
    explanation:
      'En tendance forte, le prix peut longer la bande supérieure pendant une période prolongée (walking the bands). Toucher la bande n\'est pas un signal de vente automatique. Il faut combiner avec d\'autres indicateurs pour évaluer le contexte.',
    difficulty: 'medium',
  },

  // ── Leçon 13 : Fibonacci ──────────────────
  {
    id: 'ta-q23',
    lessonId: 'ta-13',
    question: 'Quel est le ratio de Fibonacci le plus surveillé par les techniciens ?',
    options: [
      '23,6 %',
      '38,2 %',
      '50 %',
      '61,8 %',
    ],
    correctIndex: 3,
    explanation:
      'Le 61,8 % (nombre d\'or inversé) est le niveau de Fibonacci le plus surveillé. C\'est le seuil au-delà duquel un retracement devient une correction profonde qui teste la conviction des acheteurs.',
    difficulty: 'easy',
  },
  {
    id: 'ta-q24',
    lessonId: 'ta-13',
    question: 'Un titre monte de 100 € à 200 €. Où se situe le retracement de 38,2 % ?',
    options: [
      '138,20 €',
      '161,80 €',
      '176,18 €',
      '123,60 €',
    ],
    correctIndex: 1,
    explanation:
      'Le mouvement est de 100 € (de 100 à 200). Le retracement de 38,2 % = 200 − (100 × 0,382) = 200 − 38,2 = 161,80 €. On retire 38,2 % du mouvement depuis le sommet.',
    difficulty: 'medium',
  },

  // ── Leçon 14 : Ichimoku ───────────────────
  {
    id: 'ta-q25',
    lessonId: 'ta-14',
    question: 'Que représente le nuage (Kumo) dans l\'Ichimoku ?',
    options: [
      'La volatilité du titre',
      'La zone d\'équilibre entre acheteurs et vendeurs, servant de support/résistance',
      'Le volume moyen sur 26 périodes',
      'La différence entre le prix et la moyenne mobile',
    ],
    correctIndex: 1,
    explanation:
      'Le nuage (Kumo), formé par les Senkou Span A et B, représente la zone d\'équilibre. Au-dessus du nuage = tendance haussière, en dessous = baissière. L\'épaisseur du nuage reflète la force du support ou de la résistance.',
    difficulty: 'medium',
  },
  {
    id: 'ta-q26',
    lessonId: 'ta-14',
    question: 'Un twist du nuage Ichimoku (Senkou Span A croise Senkou Span B) signale :',
    options: [
      'Un signal d\'achat immédiat',
      'Un changement de tendance imminent',
      'Une zone de surachat',
      'Une augmentation de la volatilité',
    ],
    correctIndex: 1,
    explanation:
      'Le twist du nuage se produit quand les deux Senkou Span se croisent. Le nuage change de couleur et signale un changement de tendance imminent. C\'est souvent un point d\'inflexion majeur dans la dynamique du marché.',
    difficulty: 'hard',
  },

  // ── Leçon 15 : Backtesting ────────────────
  {
    id: 'ta-q27',
    lessonId: 'ta-15',
    question: 'Qu\'est-ce que l\'overfitting dans le contexte du backtesting ?',
    options: [
      'Utiliser trop peu de données historiques',
      'Optimiser excessivement les paramètres pour coller au passé, au détriment de la performance future',
      'Ne pas tenir compte des coûts de transaction',
      'Tester la stratégie sur un seul actif',
    ],
    correctIndex: 1,
    explanation:
      'L\'overfitting consiste à sur-optimiser les paramètres d\'une stratégie pour maximiser la performance sur les données passées. Le modèle capture le bruit plutôt que le signal, et sa performance se dégrade fortement sur de nouvelles données.',
    difficulty: 'medium',
  },
  {
    id: 'ta-q28',
    lessonId: 'ta-15',
    question: 'Un ratio risk/reward de 1:2 signifie :',
    options: [
      'On risque 2 € pour gagner 1 €',
      'On risque 1 € pour gagner 2 €',
      'Le win rate doit être de 50 %',
      'Le drawdown maximal est de 2 %',
    ],
    correctIndex: 1,
    explanation:
      'Un ratio risk/reward de 1:2 signifie que pour chaque euro risqué (stop-loss), l\'objectif de gain (take-profit) est de 2 euros. Avec ce ratio, il suffit de gagner 34 % des trades pour être rentable.',
    difficulty: 'easy',
  },

  // ── Leçon 16 : Cas pratique ───────────────
  {
    id: 'ta-q29',
    lessonId: 'ta-16',
    question: 'Dans une analyse multi-timeframe, par quel graphique commence-t-on ?',
    options: [
      'Le graphique en 5 minutes',
      'Le graphique daily',
      'Le graphique mensuel ou hebdomadaire (long terme)',
      'Le graphique en tick',
    ],
    correctIndex: 2,
    explanation:
      'On commence toujours par le timeframe le plus long (mensuel ou hebdomadaire) pour identifier la tendance de fond, puis on descend vers le daily et l\'intraday pour affiner le timing d\'entrée. Cela s\'appelle l\'analyse top-down.',
    difficulty: 'easy',
  },
  {
    id: 'ta-q30',
    lessonId: 'ta-16',
    question: 'Quel est le ratio risk/reward minimum recommandé pour valider un trade ?',
    options: [
      '1:0,5',
      '1:1',
      '1:2',
      '1:5',
    ],
    correctIndex: 2,
    explanation:
      'Un ratio risk/reward minimum de 1:2 est généralement recommandé. Cela signifie que le potentiel de gain est au moins le double du risque pris. Ce ratio assure la rentabilité même avec un win rate modeste.',
    difficulty: 'easy',
  },
];
