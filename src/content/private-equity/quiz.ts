// ──────────────────────────────────────────────
//  FINA - Private Equity : Quiz Questions
// ──────────────────────────────────────────────

import type { QuizQuestion } from '../types';

export const privateEquityQuiz: QuizQuestion[] = [
  // ── Industrie PE ───────────────────────────
  {
    id: 'pe-q01',
    lessonId: 'pe-01',
    question: 'Le modèle de rémunération standard d\'un fonds de PE est :',
    options: ['1 and 10', '2 and 20', '3 and 30', '5 and 50'],
    correctIndex: 1,
    explanation: 'Le modèle « 2 and 20 » est le standard de l\'industrie : 2 % de management fee annuelle sur le capital engagé + 20 % de carried interest sur les profits au-delà du hurdle rate.',
    difficulty: 'easy',
  },
  {
    id: 'pe-q02',
    lessonId: 'pe-01',
    question: 'La durée de vie typique d\'un fonds de Private Equity est :',
    options: ['3-5 ans', '5-7 ans', '10 ans + extensions', '20 ans'],
    correctIndex: 2,
    explanation: 'Un fonds PE a une durée de vie typique de 10 ans, avec des possibilités d\'extension de 1-2 ans. La période d\'investissement est de 3-5 ans, suivie de la phase de détention et de sortie.',
    difficulty: 'easy',
  },

  // ── Limited Partners ───────────────────────
  {
    id: 'pe-q03',
    lessonId: 'pe-02',
    question: 'Le « denominator effect » désigne :',
    options: [
      'La baisse des management fees quand le fonds grossit',
      'L\'augmentation relative de l\'allocation PE quand les marchés cotés baissent',
      'La dilution des rendements avec la taille du fonds',
      'L\'effet de levier sur les rendements',
    ],
    correctIndex: 1,
    explanation: 'Quand les marchés cotés baissent, la valeur totale du portefeuille diminue mais les engagements PE (moins liquides, valorisés avec retard) restent stables. L\'allocation relative au PE augmente mécaniquement, pouvant contraindre les LPs à réduire leurs nouveaux engagements.',
    difficulty: 'medium',
  },

  // ── Fundraising ────────────────────────────
  {
    id: 'pe-q04',
    lessonId: 'pe-03',
    question: 'La clawback provision protège :',
    options: ['Le GP contre les LPs', 'Les LPs en obligeant le GP à rendre du carry excédentaire', 'Le management de la cible', 'Les créanciers de la cible'],
    correctIndex: 1,
    explanation: 'La clawback oblige le GP à restituer du carried interest si, à la liquidation du fonds, les LPs n\'ont pas reçu leur capital + preferred return. Elle protège contre le risque de carry payé sur des gains précoces non confirmés par la suite.',
    difficulty: 'medium',
  },
  {
    id: 'pe-q05',
    lessonId: 'pe-03',
    question: 'Les « re-ups » dans un fundraising représentent typiquement :',
    options: ['10-20 % du fonds', '30-40 % du fonds', '60-80 % du fonds', '100 % du fonds'],
    correctIndex: 2,
    explanation: 'Les re-ups (LPs existants qui réinvestissent dans le nouveau fonds du même GP) représentent typiquement 60-80 % du fundraising. Un taux de re-up élevé est un signal de confiance fort.',
    difficulty: 'medium',
  },

  // ── J-curve ────────────────────────────────
  {
    id: 'pe-q06',
    lessonId: 'pe-04',
    question: 'La J-curve en PE décrit :',
    options: [
      'La courbe des taux d\'intérêt',
      'Les rendements négatifs en début de vie du fonds, puis positifs ensuite',
      'La courbe d\'apprentissage du management',
      'L\'évolution du multiple d\'entrée',
    ],
    correctIndex: 1,
    explanation: 'La J-curve décrit le profil de rendement typique : TRI négatif les premières années (frais, appels de capital, pas de sorties) puis positif quand les investissements mûrissent et les sorties se réalisent.',
    difficulty: 'easy',
  },

  // ── Deal sourcing ──────────────────────────
  {
    id: 'pe-q07',
    lessonId: 'pe-05',
    question: 'Le deal funnel typique d\'un fonds mid-cap montre que sur 250 dossiers examinés, le nombre de deals conclus est d\'environ :',
    options: ['1-2', '3-5', '15-20', '50-60'],
    correctIndex: 1,
    explanation: 'Un fonds mid-cap examine typiquement 200-300 dossiers par an pour réaliser 3-5 acquisitions. Le taux de conversion est d\'environ 1-2 %, reflétant la sélectivité du processus d\'investissement.',
    difficulty: 'easy',
  },

  // ── Due Diligence ──────────────────────────
  {
    id: 'pe-q08',
    lessonId: 'pe-06',
    question: 'La Quality of Earnings (QoE) dans une DD financière consiste à :',
    options: [
      'Vérifier la qualité des auditeurs',
      'Analyser et normaliser l\'EBITDA en ajustant les éléments non récurrents',
      'Évaluer la qualité du management',
      'Comparer les bénéfices aux pairs du secteur',
    ],
    correctIndex: 1,
    explanation: 'La QoE analyse la qualité et la durabilité des bénéfices en ajustant l\'EBITDA reporté pour les éléments non récurrents, les changements de méthodes comptables et les anomalies, pour obtenir un EBITDA normalisé fiable.',
    difficulty: 'medium',
  },
  {
    id: 'pe-q09',
    lessonId: 'pe-06',
    question: 'Le coût d\'une due diligence complète représente typiquement :',
    options: ['0,01-0,1 % de la valeur de la transaction', '1-3 % de la valeur de la transaction', '5-10 % de la valeur de la transaction', '10-15 % de la valeur de la transaction'],
    correctIndex: 1,
    explanation: 'La DD complète (financière, commerciale, juridique, fiscale, environnementale) coûte typiquement 1-3 % de la valeur du deal. Pour un deal de 500 M EUR, cela représente 5-15 M EUR.',
    difficulty: 'medium',
  },

  // ── Valorisation PE ────────────────────────
  {
    id: 'pe-q10',
    lessonId: 'pe-07',
    question: 'Dans un modèle LBO, le TRI cible brut typique est :',
    options: ['5-10 %', '10-15 %', '20-25 %', '35-40 %'],
    correctIndex: 2,
    explanation: 'Les fonds de buyout visent un TRI brut de 20-25 % (soit environ 15-18 % net après frais et carry). Ce niveau de rendement justifie la prime d\'illiquidité par rapport aux marchés cotés.',
    difficulty: 'easy',
  },

  // ── Structuration ──────────────────────────
  {
    id: 'pe-q11',
    lessonId: 'pe-08',
    question: 'Dans un LBO, la dette senior secured représente typiquement :',
    options: ['1-2x EBITDA', '3-4x EBITDA', '6-8x EBITDA', '10x EBITDA'],
    correctIndex: 1,
    explanation: 'La dette senior secured dans un LBO mid-cap représente typiquement 3-4x EBITDA. Le levier total (incluant mezzanine et second lien) atteint 4,5-6x EBITDA.',
    difficulty: 'easy',
  },
  {
    id: 'pe-q12',
    lessonId: 'pe-08',
    question: 'Le DSCR (Debt Service Coverage Ratio) doit idéalement être :',
    options: ['< 0,5x', 'Entre 0,5x et 1x', '> 1,2x', 'Exactement 1x'],
    correctIndex: 2,
    explanation: 'Un DSCR supérieur à 1,2x signifie que l\'entreprise génère suffisamment de cash pour servir sa dette (intérêts + principal) avec une marge de sécurité. Un DSCR < 1x signifie que l\'entreprise ne peut pas servir sa dette avec ses cash flows opérationnels.',
    difficulty: 'medium',
  },

  // ── Management packages ────────────────────
  {
    id: 'pe-q13',
    lessonId: 'pe-09',
    question: 'Le mécanisme de ratchet dans un management package :',
    options: [
      'Réduit la participation du management en cas de mauvaise performance',
      'Augmente la participation du management si les objectifs de TRI/MOIC sont dépassés',
      'Fixe le salaire du management',
      'Empêche le management de vendre ses parts',
    ],
    correctIndex: 1,
    explanation: 'Le ratchet est un mécanisme incitatif qui augmente la participation du management dans l\'equity si certains seuils de performance (TRI ou MOIC) sont atteints, alignant ainsi les intérêts avec le sponsor PE.',
    difficulty: 'easy',
  },

  // ── Value creation ─────────────────────────
  {
    id: 'pe-q14',
    lessonId: 'pe-10',
    question: 'Sur un MOIC de 3x en buyout, la décomposition typique de la création de valeur est :',
    options: [
      'EBITDA growth 20 %, Deleveraging 10 %, Multiple expansion 70 %',
      'EBITDA growth 45 %, Deleveraging 35 %, Multiple expansion 20 %',
      'EBITDA growth 80 %, Deleveraging 10 %, Multiple expansion 10 %',
      'Chaque levier contribue exactement un tiers',
    ],
    correctIndex: 1,
    explanation: 'La décomposition typique d\'un MOIC de 3x est : ~45 % de la valeur créée par la croissance de l\'EBITDA, ~35 % par le désendettement, et ~20 % par l\'expansion de multiple. Les meilleurs GP se distinguent par la création de valeur opérationnelle.',
    difficulty: 'medium',
  },

  // ── Build-up ───────────────────────────────
  {
    id: 'pe-q15',
    lessonId: 'pe-11',
    question: 'L\'arbitrage de multiple dans un build-up fonctionne car :',
    options: [
      'Les add-ons sont achetés à un multiple inférieur à celui de la plateforme',
      'Les add-ons sont achetés au même multiple',
      'Les add-ons sont achetés à un multiple supérieur',
      'Il n\'y a pas d\'arbitrage de multiple',
    ],
    correctIndex: 0,
    explanation: 'Les add-ons (petites acquisitions) sont typiquement achetés à 1-3x de multiple de moins que la plateforme. En consolidant sous un même ensemble, chaque euro d\'EBITDA acquis à 6-7x est revalorisé au multiple de la plateforme (10x+), créant de la valeur immédiate.',
    difficulty: 'easy',
  },

  // ── Opérationnel ───────────────────────────
  {
    id: 'pe-q16',
    lessonId: 'pe-12',
    question: 'Les « quick wins » opérationnels dans les 6-12 premiers mois post-LBO incluent typiquement :',
    options: [
      'Le lancement de nouveaux produits',
      'La renégociation des contrats fournisseurs et l\'optimisation du BFR',
      'La construction d\'une nouvelle usine',
      'L\'acquisition d\'un concurrent',
    ],
    correctIndex: 1,
    explanation: 'Les quick wins les plus fréquents sont : la renégociation des achats (-3-5 %), l\'optimisation du BFR (raccourcir les délais clients, allonger les délais fournisseurs), et la rationalisation des coûts généraux. Ils sont rapides à mettre en œuvre et à impact immédiat.',
    difficulty: 'easy',
  },

  // ── Expansion multiples ────────────────────
  {
    id: 'pe-q17',
    lessonId: 'pe-13',
    question: 'La multiple compression est plus probable en période de :',
    options: [
      'Baisse des taux d\'intérêt',
      'Croissance économique forte',
      'Hausse des taux d\'intérêt',
      'Stabilité des marchés',
    ],
    correctIndex: 2,
    explanation: 'Il existe une corrélation négative entre les taux d\'intérêt et les multiples de valorisation. Quand les taux montent, les multiples tendent à se comprimer car le coût du capital augmente et les flux futurs sont actualisés à un taux plus élevé.',
    difficulty: 'medium',
  },

  // ── Gouvernance ────────────────────────────
  {
    id: 'pe-q18',
    lessonId: 'pe-14',
    question: 'La fréquence typique des réunions de board dans une entreprise sous PE est :',
    options: ['Hebdomadaire', 'Mensuelle', 'Trimestrielle', 'Annuelle'],
    correctIndex: 1,
    explanation: 'En PE, les boards se réunissent typiquement mensuellement (vs trimestriellement pour les sociétés cotées). Cette fréquence permet un pilotage rapproché de la performance et des décisions rapides.',
    difficulty: 'easy',
  },

  // ── Monitoring ─────────────────────────────
  {
    id: 'pe-q19',
    lessonId: 'pe-15',
    question: 'Un fonds PE affiche un TVPI de 1,8x et un DPI de 0,3x. Cela signifie que :',
    options: [
      'Le fonds a distribué la majorité de sa valeur',
      'Le fonds a une performance élevée et confirmée',
      'L\'essentiel de la valeur est non réalisée (sur le papier)',
      'Le fonds est en perte',
    ],
    correctIndex: 2,
    explanation: 'TVPI de 1,8x avec un DPI de seulement 0,3x signifie que la quasi-totalité de la valeur (RVPI = 1,5x) est encore « sur le papier » (NAV non réalisée). Les sorties n\'ont pas encore eu lieu ou sont très limitées.',
    difficulty: 'medium',
  },

  // ── Trade sale ─────────────────────────────
  {
    id: 'pe-q20',
    lessonId: 'pe-16',
    question: 'Le « locked-box » dans un trade sale :',
    options: [
      'Bloque les fonds sur un compte séquestre',
      'Fixe le prix sur la base de comptes à une date antérieure au closing',
      'Empêche le vendeur de négocier',
      'Protège contre les fluctuations de change',
    ],
    correctIndex: 1,
    explanation: 'Le locked-box fixe le prix d\'acquisition sur la base de comptes à une date passée (la locked-box date). Le vendeur s\'engage à ne pas extraire de valeur de la cible entre cette date et le closing (pas de dividendes, pas de frais de management excessifs).',
    difficulty: 'medium',
  },

  // ── IPO exit ───────────────────────────────
  {
    id: 'pe-q21',
    lessonId: 'pe-17',
    question: 'Lors d\'une IPO, le GP vend typiquement quelle proportion de sa participation ?',
    options: ['100 % (exit total)', '20-30 % (exit partiel)', '50 % exactement', '0 % (pas de vente à l\'IPO)'],
    correctIndex: 1,
    explanation: 'Lors de l\'IPO, le GP ne vend généralement que 20-30 % de sa participation pour montrer sa confiance dans l\'entreprise. Le lock-up de 180 jours empêche la vente immédiate, et le désengagement se fait progressivement par des ABB (Accelerated Book Buildings).',
    difficulty: 'easy',
  },

  // ── Secondary ──────────────────────────────
  {
    id: 'pe-q22',
    lessonId: 'pe-18',
    question: 'Un continuation vehicle (GP-led secondary) permet :',
    options: [
      'De créer un nouveau fonds sans track record',
      'Au GP de transférer des actifs dans un nouveau véhicule, offrant aux LPs un choix cash ou roulement',
      'Aux LPs de forcer une distribution',
      'De contourner la clawback provision',
    ],
    correctIndex: 1,
    explanation: 'Le continuation vehicle est un nouveau véhicule créé par le GP pour prolonger la détention d\'actifs performants. Les LPs existants choisissent entre encaisser (à ~98 % de la NAV) ou rouler leur investissement dans le nouveau véhicule avec un horizon prolongé.',
    difficulty: 'medium',
  },

  // ── Dividend recap ─────────────────────────
  {
    id: 'pe-q23',
    lessonId: 'pe-19',
    question: 'Le dividend recapitalization améliore le TRI principalement parce que :',
    options: [
      'Il réduit la dette de l\'entreprise',
      'Il accélère les flux de retour au GP (time value of money)',
      'Il augmente l\'EBITDA',
      'Il réduit les management fees',
    ],
    correctIndex: 1,
    explanation: 'Le dividend recap améliore le TRI en renvoyant du cash au GP plus tôt dans la vie de l\'investissement. Grâce à la valeur temps de l\'argent, recevoir 1 EUR aujourd\'hui vaut plus que 1 EUR dans 5 ans, ce qui augmente mécaniquement le TRI.',
    difficulty: 'medium',
  },

  // ── IRR, MOIC & DPI ────────────────────────
  {
    id: 'pe-q24',
    lessonId: 'pe-20',
    question: 'Un investissement de 100 M EUR qui retourne 300 M EUR en 5 ans a un MOIC et un TRI approximatif de :',
    options: ['MOIC 2x, TRI 15 %', 'MOIC 3x, TRI 25 %', 'MOIC 3x, TRI 30 %', 'MOIC 4x, TRI 25 %'],
    correctIndex: 1,
    explanation: 'MOIC = 300/100 = 3x. TRI = (3)^(1/5) - 1 ≈ 24,6 %, arrondi à ~25 %. Un MOIC de 3x sur 5 ans correspond à un TRI d\'environ 25 %, qui est le benchmark de performance d\'un bon fonds de buyout.',
    difficulty: 'medium',
  },
  {
    id: 'pe-q25',
    lessonId: 'pe-20',
    question: 'Le Kaplan-Schoar PME permet de :',
    options: [
      'Calculer le carry du GP',
      'Comparer la performance PE aux marchés cotés à risque ajusté',
      'Prévoir les rendements futurs du PE',
      'Valoriser les participations non cotées',
    ],
    correctIndex: 1,
    explanation: 'Le Kaplan-Schoar PME (Public Market Equivalent) compare la performance d\'un fonds PE à un investissement équivalent dans un indice coté, en tenant compte du timing des cash flows. Un PME > 1 signifie que le PE a surperformé.',
    difficulty: 'hard',
  },

  // ── Carried interest ───────────────────────
  {
    id: 'pe-q26',
    lessonId: 'pe-21',
    question: 'Dans un European waterfall, le carried interest est payé :',
    options: [
      'Sur chaque deal profitable individuellement',
      'Uniquement quand l\'ensemble du fonds a retourné le capital + hurdle',
      'Annuellement sur la NAV',
      'Au moment du fundraising',
    ],
    correctIndex: 1,
    explanation: 'Le European waterfall (whole-fund carry) est plus protecteur pour les LPs : le GP ne reçoit du carry qu\'après que l\'ensemble du fonds a retourné le capital investi + le preferred return (hurdle). C\'est le standard en Europe.',
    difficulty: 'medium',
  },
  {
    id: 'pe-q27',
    lessonId: 'pe-21',
    question: 'Sur un fonds de 1 Md EUR qui génère 1 Md de profit, avec un carry de 20 % et un hurdle de 8 %, le carry approximatif revenant au GP est :',
    options: ['100 M EUR', '200 M EUR', '160 M EUR', '80 M EUR'],
    correctIndex: 1,
    explanation: 'Le carry est de 20 % des profits totaux = 20 % × 1 000 M = 200 M EUR. Le hurdle détermine le timing du paiement (le capital + hurdle doit être retourné d\'abord), mais le carry total reste 20 % des profits.',
    difficulty: 'hard',
  },

  // ── Examen final ───────────────────────────
  {
    id: 'pe-q28',
    lessonId: 'pe-22',
    question: 'Un LBO est réalisé à 8x EBITDA (EBITDA = 50 M EUR), avec 60 % de dette. En 5 ans, l\'EBITDA atteint 70 M EUR, la dette est réduite à 100 M EUR, et la sortie se fait à 9x. Le MOIC equity est :',
    options: ['2,2x', '2,9x', '3,5x', '4,0x'],
    correctIndex: 2,
    explanation: 'Entrée : EV = 400 M, dette = 240 M, equity = 160 M. Sortie : EV = 70 × 9 = 630 M, dette = 100 M, equity = 530 M. MOIC = 530/160 = 3,3x ≈ 3,5x. La création de valeur vient de la croissance EBITDA (+20 M × 8x), du deleveraging (140 M) et de l\'expansion de multiple (+1x × 70 M).',
    difficulty: 'hard',
  },
  {
    id: 'pe-q29',
    lessonId: 'pe-22',
    question: 'Le trade sale est la voie de sortie la plus fréquente en PE car :',
    options: [
      'Elle est la moins coûteuse',
      'L\'acquéreur stratégique peut payer un premium grâce aux synergies',
      'Elle est la plus rapide (< 1 mois)',
      'Elle ne nécessite pas de due diligence',
    ],
    correctIndex: 1,
    explanation: 'Le trade sale représente ~50 % des exits PE. L\'acquéreur stratégique peut payer un premium (10-30 %) par rapport à la valorisation financière car il peut réaliser des synergies (revenus, coûts) qu\'un acquéreur financier ne peut pas capturer.',
    difficulty: 'easy',
  },
];
