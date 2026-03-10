// ──────────────────────────────────────────────
//  FINA - Marchés Actions : Quiz Questions
// ──────────────────────────────────────────────

import type { QuizQuestion } from '@/types/course';

export const equitiesQuiz: QuizQuestion[] = [
  // ── Leçon 1 : Fonctionnement des marchés ────
  {
    id: 'eq-q01',
    lessonId: 'eq-01',
    question: 'Quelle est la différence principale entre le marché primaire et le marché secondaire ?',
    options: [
      'Le marché primaire est réservé aux particuliers, le secondaire aux institutionnels',
      'Le marché primaire concerne l\'émission de nouveaux titres, le secondaire l\'échange de titres existants',
      'Le marché primaire est plus liquide que le secondaire',
      'Le marché primaire fonctionne uniquement en fixing',
    ],
    correctIndex: 1,
    explanation:
      'Le marché primaire est celui de l\'émission : l\'entreprise y vend des titres neufs pour lever des capitaux. Le marché secondaire permet ensuite aux investisseurs d\'échanger ces titres entre eux, sans que l\'entreprise ne soit partie prenante.',
    difficulty: 'easy',
  },
  {
    id: 'eq-q02',
    lessonId: 'eq-01',
    question: 'Quel est le rôle de la chambre de compensation dans une transaction boursière ?',
    options: [
      'Elle fixe le prix des actions',
      'Elle régule les marchés financiers',
      'Elle se porte contrepartie centrale et garantit le bon dénouement',
      'Elle distribue les dividendes aux actionnaires',
    ],
    correctIndex: 2,
    explanation:
      'La chambre de compensation (comme LCH) s\'interpose entre l\'acheteur et le vendeur, devenant contrepartie de chacun. Elle élimine le risque de contrepartie : même si une partie fait défaut, l\'autre est protégée.',
    difficulty: 'easy',
  },

  // ── Leçon 2 : Indices boursiers ─────────────
  {
    id: 'eq-q03',
    lessonId: 'eq-02',
    question: 'Comment le CAC 40 est-il pondéré ?',
    options: [
      'Par le prix des actions',
      'Par la capitalisation boursière flottante',
      'Par le chiffre d\'affaires des entreprises',
      'De manière équipondérée',
    ],
    correctIndex: 1,
    explanation:
      'Le CAC 40 utilise la pondération par capitalisation flottante (free float adjusted). Seules les actions librement négociables sur le marché sont prises en compte, excluant les participations stratégiques et les auto-détentions.',
    difficulty: 'easy',
  },
  {
    id: 'eq-q04',
    lessonId: 'eq-02',
    question: 'Quel indice est pondéré par les prix des actions plutôt que par la capitalisation ?',
    options: [
      'Le S&P 500',
      'Le CAC 40',
      'Le Dow Jones Industrial Average',
      'Le MSCI World',
    ],
    correctIndex: 2,
    explanation:
      'Le Dow Jones Industrial Average est un indice pondéré par les prix (price-weighted). Une action à 200 $ pèse quatre fois plus qu\'une action à 50 $, indépendamment de la taille de l\'entreprise.',
    difficulty: 'easy',
  },

  // ── Leçon 3 : Microstructure ────────────────
  {
    id: 'eq-q05',
    lessonId: 'eq-03',
    question: 'Que mesure le ratio d\'Amihud ?',
    options: [
      'La volatilité d\'un titre',
      'L\'illiquidité d\'un titre',
      'La performance ajustée du risque',
      'Le rendement du dividende',
    ],
    correctIndex: 1,
    explanation:
      'Le ratio d\'Amihud mesure l\'illiquidité en rapportant le rendement absolu au volume en euros. Plus le ratio est élevé, plus un même volume de transactions provoque un mouvement de prix important, signe d\'illiquidité.',
    difficulty: 'medium',
  },
  {
    id: 'eq-q06',
    lessonId: 'eq-03',
    question: 'Qu\'est-ce que la sélection adverse dans le contexte de la microstructure ?',
    options: [
      'Le risque de choisir un mauvais broker',
      'Le risque pour un market maker de traiter face à un trader informé',
      'Le risque de passer un ordre au mauvais moment',
      'Le risque de subir un flash crash',
    ],
    correctIndex: 1,
    explanation:
      'La sélection adverse survient quand le teneur de marché fait face à un trader possédant une information supérieure. Ce risque est compensé par un élargissement du spread bid-ask.',
    difficulty: 'medium',
  },

  // ── Leçon 4 : Types d\'ordres ────────────────
  {
    id: 'eq-q07',
    lessonId: 'eq-04',
    question: 'Quel type d\'ordre garantit le prix mais pas l\'exécution ?',
    options: [
      'L\'ordre au marché',
      'L\'ordre à cours limité',
      'L\'ordre stop-loss',
      'L\'ordre iceberg',
    ],
    correctIndex: 1,
    explanation:
      'L\'ordre à cours limité fixe un prix maximal (achat) ou minimal (vente). L\'investisseur est sûr de ne pas payer plus (ou recevoir moins) que le prix limité, mais l\'ordre peut ne pas s\'exécuter si le marché n\'atteint pas ce niveau.',
    difficulty: 'easy',
  },
  {
    id: 'eq-q08',
    lessonId: 'eq-04',
    question: 'Quel algorithme d\'exécution vise à obtenir le prix moyen pondéré par les volumes de la journée ?',
    options: [
      'TWAP (Time-Weighted Average Price)',
      'VWAP (Volume-Weighted Average Price)',
      'Implementation Shortfall',
      'Iceberg',
    ],
    correctIndex: 1,
    explanation:
      'L\'algorithme VWAP découpe un gros ordre en petites tranches exécutées tout au long de la journée en suivant le profil historique de volume. L\'objectif est d\'obtenir un prix moyen proche du VWAP du marché.',
    difficulty: 'medium',
  },

  // ── Leçon 5 : Analyse fondamentale ──────────
  {
    id: 'eq-q09',
    lessonId: 'eq-05',
    question: 'Pourquoi le ROIC est-il souvent préféré au ROE pour mesurer la performance opérationnelle ?',
    options: [
      'Le ROIC est plus facile à calculer',
      'Le ROIC neutralise l\'effet de levier financier',
      'Le ROIC est toujours plus élevé que le ROE',
      'Le ROIC intègre le goodwill',
    ],
    correctIndex: 1,
    explanation:
      'Le ROIC (Return on Invested Capital) mesure la rentabilité du capital total investi (fonds propres + dette), éliminant ainsi l\'effet de levier. Deux entreprises avec le même ROIC mais un endettement différent auront des ROE très différents.',
    difficulty: 'medium',
  },
  {
    id: 'eq-q10',
    lessonId: 'eq-05',
    question: 'Qu\'est-ce que la marge de sécurité selon Benjamin Graham ?',
    options: [
      'La différence entre la marge brute et la marge nette',
      'Le montant de trésorerie sur le bilan',
      'La décote du prix d\'achat par rapport à la valeur intrinsèque estimée',
      'Le ratio de couverture de la dette',
    ],
    correctIndex: 2,
    explanation:
      'La marge de sécurité de Graham recommande d\'acheter un titre avec une décote significative (20-30 %) par rapport à sa valeur intrinsèque estimée. Cette décote protège l\'investisseur contre les erreurs d\'estimation.',
    difficulty: 'easy',
  },

  // ── Leçon 6 : Top-down / Bottom-up ──────────
  {
    id: 'eq-q11',
    lessonId: 'eq-06',
    question: 'Quel investisseur célèbre est l\'archétype de l\'approche bottom-up ?',
    options: [
      'George Soros',
      'Ray Dalio',
      'Warren Buffett',
      'John Paulson',
    ],
    correctIndex: 2,
    explanation:
      'Warren Buffett est l\'archétype de l\'investisseur bottom-up : il sélectionne des entreprises extraordinaires à des prix raisonnables, indépendamment du contexte macroéconomique, en se concentrant sur leur avantage compétitif durable (moat).',
    difficulty: 'easy',
  },

  // ── Leçon 7 : Analyse sectorielle ──────────
  {
    id: 'eq-q12',
    lessonId: 'eq-07',
    question: 'Combien de secteurs de premier niveau la classification GICS comprend-elle ?',
    options: [
      '8 secteurs',
      '10 secteurs',
      '11 secteurs',
      '14 secteurs',
    ],
    correctIndex: 2,
    explanation:
      'La classification GICS (Global Industry Classification Standard), développée par MSCI et S&P, structure le marché en 11 secteurs de premier niveau : Energy, Materials, Industrials, Consumer Discretionary, Consumer Staples, Health Care, Financials, IT, Communication Services, Utilities, Real Estate.',
    difficulty: 'medium',
  },

  // ── Leçon 8 : Rotation sectorielle ──────────
  {
    id: 'eq-q13',
    lessonId: 'eq-08',
    question: 'En phase de récession, quels secteurs tendent à surperformer ?',
    options: [
      'Technologie et consommation discrétionnaire',
      'Énergie et matériaux',
      'Santé, utilities et consommation de base',
      'Finance et industrie',
    ],
    correctIndex: 2,
    explanation:
      'En récession, les secteurs défensifs (santé, utilities, consommation de base) surperforment car la demande pour leurs produits et services est moins sensible au cycle économique. Les gens continuent de se soigner, de consommer de l\'électricité et d\'acheter de la nourriture.',
    difficulty: 'easy',
  },

  // ── Leçon 9 : Growth vs Value ───────────────
  {
    id: 'eq-q14',
    lessonId: 'eq-09',
    question: 'Que signifie un PEG ratio inférieur à 1 ?',
    options: [
      'L\'action est surévaluée par rapport à sa croissance',
      'L\'action est sous-évaluée par rapport à sa croissance',
      'L\'entreprise est en décroissance',
      'Le PER est négatif',
    ],
    correctIndex: 1,
    explanation:
      'Le PEG (Price/Earnings to Growth) rapporte le PER au taux de croissance des bénéfices. Un PEG < 1 suggère que le marché ne paie pas assez cher la croissance : c\'est un signal GARP (Growth At Reasonable Price) favorable.',
    difficulty: 'medium',
  },
  {
    id: 'eq-q15',
    lessonId: 'eq-09',
    question: 'Pourquoi la hausse des taux d\'intérêt pénalise-t-elle davantage les actions Growth ?',
    options: [
      'Les actions Growth ont plus de dette',
      'Les actions Growth versent moins de dividendes',
      'Les cash flows des actions Growth sont plus éloignés dans le temps, leur valeur actuelle diminue davantage',
      'Les actions Growth sont plus volatiles par nature',
    ],
    correctIndex: 2,
    explanation:
      'Les actions Growth génèrent l\'essentiel de leur valeur via des cash flows futurs lointains. Une hausse du taux d\'actualisation réduit proportionnellement plus la valeur actuelle des flux éloignés que celle des flux proches, ce qui pénalise mécaniquement les valorisations Growth.',
    difficulty: 'hard',
  },

  // ── Leçon 10 : Small vs Large ───────────────
  {
    id: 'eq-q16',
    lessonId: 'eq-10',
    question: 'Quelle est la principale explication du small cap premium historique ?',
    options: [
      'Les small caps ont de meilleurs fondamentaux',
      'Les small caps bénéficient d\'une meilleure couverture analyste',
      'Les small caps compensent leur risque de liquidité et leur volatilité supérieure',
      'Les small caps sont systématiquement sous-évaluées',
    ],
    correctIndex: 2,
    explanation:
      'Le small cap premium (2-3 %/an historiquement) est une compensation pour le risque de liquidité, le risque spécifique plus élevé et l\'inefficience informationnelle. Les investisseurs exigent un rendement supérieur pour détenir des titres moins liquides et plus risqués.',
    difficulty: 'medium',
  },

  // ── Leçon 11 : DDM ──────────────────────────
  {
    id: 'eq-q17',
    lessonId: 'eq-11',
    question: 'Selon le modèle de Gordon-Shapiro, si D₁ = 4 €, r = 10 % et g = 4 %, quelle est la valeur de l\'action ?',
    options: [
      '40 €',
      '50 €',
      '66,67 €',
      '100 €',
    ],
    correctIndex: 2,
    explanation:
      'V₀ = D₁ / (r − g) = 4 / (0,10 − 0,04) = 4 / 0,06 = 66,67 €. Le modèle de Gordon suppose une croissance constante du dividende à l\'infini.',
    difficulty: 'medium',
  },
  {
    id: 'eq-q18',
    lessonId: 'eq-11',
    question: 'Quelle est la formule du taux de croissance soutenable dans le DDM ?',
    options: [
      'g = ROE × payout ratio',
      'g = ROE × (1 − payout ratio)',
      'g = ROE / payout ratio',
      'g = ROE − payout ratio',
    ],
    correctIndex: 1,
    explanation:
      'Le taux de croissance soutenable g = ROE × (1 − payout) mesure le rythme de croissance permis par le réinvestissement des bénéfices non distribués. Si ROE = 15 % et payout = 40 %, alors g = 15 % × 60 % = 9 %.',
    difficulty: 'medium',
  },

  // ── Leçon 12 : Residual Income ──────────────
  {
    id: 'eq-q19',
    lessonId: 'eq-12',
    question: 'Quand le résultat résiduel est-il positif ?',
    options: [
      'Quand le résultat net est positif',
      'Quand le ROE est supérieur au coût des fonds propres',
      'Quand les dividendes sont croissants',
      'Quand le P/B est supérieur à 1',
    ],
    correctIndex: 1,
    explanation:
      'Le résultat résiduel RI = (ROE − r) × Capitaux propres. Il est positif quand le ROE dépasse le coût des fonds propres, ce qui signifie que l\'entreprise crée de la valeur au-delà de la rémunération minimale exigée par les actionnaires.',
    difficulty: 'medium',
  },

  // ── Leçon 13 : Valorisation relative ────────
  {
    id: 'eq-q20',
    lessonId: 'eq-13',
    question: 'Pourquoi l\'EV/EBITDA est-il préféré au PER dans les opérations de M&A ?',
    options: [
      'L\'EBITDA est toujours positif',
      'L\'EV/EBITDA est indépendant de la structure financière',
      'L\'EV/EBITDA est plus facile à calculer',
      'L\'EV/EBITDA est toujours inférieur au PER',
    ],
    correctIndex: 1,
    explanation:
      'L\'EV/EBITDA est indépendant de la structure financière car l\'Enterprise Value inclut la dette nette et l\'EBITDA est avant frais financiers. Cela permet de comparer des entreprises avec des niveaux d\'endettement très différents sur une base homogène.',
    difficulty: 'medium',
  },
  {
    id: 'eq-q21',
    lessonId: 'eq-13',
    question: 'Une entreprise a une capitalisation de 50 Mds €, une dette nette de 10 Mds € et un EBITDA de 5 Mds €. Quel est son EV/EBITDA ?',
    options: [
      '10x',
      '12x',
      '8x',
      '15x',
    ],
    correctIndex: 1,
    explanation:
      'EV = Capitalisation + Dette nette = 50 + 10 = 60 Mds €. EV/EBITDA = 60 / 5 = 12x.',
    difficulty: 'easy',
  },

  // ── Leçon 14 : IPO ──────────────────────────
  {
    id: 'eq-q22',
    lessonId: 'eq-14',
    question: 'Qu\'est-ce que l\'underpricing lors d\'une IPO ?',
    options: [
      'Le fait que le prix d\'introduction soit fixé en dessous de la valeur fondamentale',
      'Le rendement positif du premier jour de cotation par rapport au prix d\'introduction',
      'La décote appliquée aux investisseurs particuliers',
      'La commission prélevée par les banques',
    ],
    correctIndex: 1,
    explanation:
      'L\'underpricing désigne le rendement positif observé le premier jour de cotation. Historiquement de 10-15 %, il s\'explique par l\'asymétrie d\'information entre émetteur et investisseurs, et assure une performance initiale attractive.',
    difficulty: 'medium',
  },

  // ── Leçon 15 : Book building ────────────────
  {
    id: 'eq-q23',
    lessonId: 'eq-15',
    question: 'Qu\'est-ce que l\'option greenshoe (surallocation) ?',
    options: [
      'Un droit pour l\'émetteur de racheter des actions',
      'Une option permettant au syndicat de vendre jusqu\'à 15 % d\'actions supplémentaires pour stabiliser le cours',
      'Un mécanisme de fixation du prix d\'IPO',
      'Un instrument de couverture pour les investisseurs',
    ],
    correctIndex: 1,
    explanation:
      'L\'option greenshoe permet au bookrunner de vendre jusqu\'à 15 % d\'actions supplémentaires. Si le cours monte, il exerce l\'option et livre les actions. Si le cours baisse, il rachète les actions sur le marché pour le stabiliser.',
    difficulty: 'medium',
  },

  // ── Leçon 16 : Lock-up ─────────────────────
  {
    id: 'eq-q24',
    lessonId: 'eq-16',
    question: 'Quelle est la durée standard d\'un lock-up pour les insiders après une IPO ?',
    options: [
      '30 jours',
      '90 jours',
      '180 jours',
      '365 jours',
    ],
    correctIndex: 2,
    explanation:
      'La durée standard du lock-up pour les insiders est de 180 jours (6 mois). Les fondateurs et le top management ont souvent des lock-ups plus longs (12-24 mois).',
    difficulty: 'easy',
  },

  // ── Leçon 17 : Equity research ──────────────
  {
    id: 'eq-q25',
    lessonId: 'eq-17',
    question: 'Quel changement majeur MiFID II a-t-il apporté à l\'equity research ?',
    options: [
      'L\'interdiction des recommandations d\'achat',
      'L\'obligation de séparer le coût de la recherche de celui de l\'exécution (unbundling)',
      'La limitation du nombre d\'analystes par secteur',
      'L\'obligation de publier en anglais uniquement',
    ],
    correctIndex: 1,
    explanation:
      'MiFID II (2018) a imposé l\'unbundling : la recherche doit être tarifée et payée séparément des services d\'exécution. Les gérants doivent désormais payer explicitement pour la recherche, ce qui a réduit les budgets et restructuré l\'industrie.',
    difficulty: 'medium',
  },

  // ── Leçon 18 : Initiation de couverture ─────
  {
    id: 'eq-q26',
    lessonId: 'eq-18',
    question: 'À quoi servent les scénarios bull / base / bear dans une initiation de couverture ?',
    options: [
      'À satisfaire les exigences réglementaires',
      'À quantifier l\'upside et le downside en fonction de différentes hypothèses',
      'À déterminer le consensus des analystes',
      'À calculer la prime de risque du marché',
    ],
    correctIndex: 1,
    explanation:
      'Les scénarios bull / base / bear quantifient la fourchette de valorisation selon différentes hypothèses (croissance, marges, multiples). Ils aident l\'investisseur à évaluer le rapport rendement/risque et la conviction de l\'analyste.',
    difficulty: 'medium',
  },

  // ── Leçon 19 : Cas pratique ─────────────────
  {
    id: 'eq-q27',
    lessonId: 'eq-19',
    question: 'Dans une analyse complète d\'action, quelle est la séquence logique ?',
    options: [
      'Valorisation → Analyse financière → Recommandation → Analyse sectorielle',
      'Analyse sectorielle → Analyse financière → Modélisation → Valorisation → Recommandation',
      'Recommandation → Analyse financière → Valorisation',
      'Modélisation → Analyse sectorielle → Recommandation',
    ],
    correctIndex: 1,
    explanation:
      'L\'analyse suit une séquence logique : d\'abord comprendre le secteur (analyse sectorielle), puis les fondamentaux de l\'entreprise (analyse financière), construire un modèle prévisionnel (modélisation), en déduire la valeur (valorisation) et conclure par une recommandation argumentée.',
    difficulty: 'easy',
  },

  // ── Leçon 20 : Examen final ─────────────────
  {
    id: 'eq-q28',
    lessonId: 'eq-20',
    question: 'Une entreprise a un ROE de 18 %, un coût des fonds propres de 12 % et des capitaux propres par action de 50 €. Quel est le résultat résiduel par action ?',
    options: [
      '9,00 €',
      '6,00 €',
      '3,00 €',
      '1,50 €',
    ],
    correctIndex: 2,
    explanation:
      'RI = (ROE − r) × BV = (18 % − 12 %) × 50 = 6 % × 50 = 3,00 € par action. L\'entreprise crée 3 € de valeur au-delà de la rémunération minimale exigée par ses actionnaires.',
    difficulty: 'hard',
  },
  {
    id: 'eq-q29',
    lessonId: 'eq-20',
    question: 'Si le cours d\'une action est de 80 €, son BPA est de 5 € et sa croissance attendue des bénéfices est de 10 %, quel est son PEG ?',
    options: [
      '0,625',
      '1,0',
      '1,6',
      '2,0',
    ],
    correctIndex: 2,
    explanation:
      'PER = 80 / 5 = 16. PEG = PER / croissance = 16 / 10 = 1,6. Un PEG > 1 suggère que l\'action est relativement chère par rapport à sa croissance.',
    difficulty: 'hard',
  },
  {
    id: 'eq-q30',
    lessonId: 'eq-20',
    question: 'Dans le modèle de Gordon, si le coût des fonds propres diminue de 1 point (de 10 % à 9 %) et g = 5 %, de combien la valeur augmente-t-elle (en %) ?',
    options: [
      '10 %',
      '20 %',
      '25 %',
      '50 %',
    ],
    correctIndex: 2,
    explanation:
      'Avant : V = D / (10 % − 5 %) = D / 5 % = 20D. Après : V = D / (9 % − 5 %) = D / 4 % = 25D. La hausse est de (25 − 20) / 20 = 25 %. Le modèle de Gordon est extrêmement sensible à l\'écart r − g.',
    difficulty: 'hard',
  },
];
