// ──────────────────────────────────────────────
//  FINA - Les Fondamentaux : Quiz (120 questions)
//  5 questions per lesson × 24 lessons
// ──────────────────────────────────────────────

export interface QuizQuestion {
  id: string;
  lessonId: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const FUNDAMENTALS_QUIZ: QuizQuestion[] = [
  // ─── Lesson 1 : Le bilan comptable ─────────────
  {
    id: 'balance-sheet-q1',
    lessonId: 'balance-sheet',
    question: 'Quelle est l\'équation fondamentale du bilan ?',
    options: [
      'Actif = Passif - Capitaux Propres',
      'Actif = Capitaux Propres + Passif',
      'Capitaux Propres = Actif + Passif',
      'Passif = Actif × Capitaux Propres',
    ],
    correctIndex: 1,
    explanation:
      'L\'équation fondamentale est Actif = Capitaux Propres + Passif. L\'actif représente les emplois (ce que l\'entreprise possède), et le passif + capitaux propres les ressources (comment c\'est financé).',
    difficulty: 'easy',
  },
  {
    id: 'balance-sheet-q2',
    lessonId: 'balance-sheet',
    question: 'Parmi ces éléments, lequel est un actif non courant ?',
    options: [
      'Stocks de marchandises',
      'Créances clients',
      'Brevets et licences',
      'Trésorerie disponible',
    ],
    correctIndex: 2,
    explanation:
      'Les brevets et licences sont des immobilisations incorporelles, donc des actifs non courants (durée de vie > 1 an). Les stocks, créances et trésorerie sont des actifs courants.',
    difficulty: 'easy',
  },
  {
    id: 'balance-sheet-q3',
    lessonId: 'balance-sheet',
    question: 'Si une entreprise a 500 M€ d\'actifs et 300 M€ de passifs, quels sont ses capitaux propres ?',
    options: ['800 M€', '200 M€', '150 M€', '300 M€'],
    correctIndex: 1,
    explanation:
      'Capitaux Propres = Actif - Passif = 500 - 300 = 200 M€. Les capitaux propres sont le résidu après déduction de toutes les dettes.',
    difficulty: 'easy',
  },
  {
    id: 'balance-sheet-q4',
    lessonId: 'balance-sheet',
    question: 'En normes IFRS, comment est appelé le bilan ?',
    options: [
      'État de la performance financière',
      'État de la situation financière',
      'État des flux de trésorerie',
      'État du résultat global',
    ],
    correctIndex: 1,
    explanation:
      'En IFRS (IAS 1), le bilan est officiellement appelé « État de la situation financière » (Statement of Financial Position).',
    difficulty: 'medium',
  },
  {
    id: 'balance-sheet-q5',
    lessonId: 'balance-sheet',
    question: 'Quel poste du bilan de LVMH représente la plus grande part de ses actifs non courants ?',
    options: [
      'Les immobilisations corporelles (usines)',
      'Les immobilisations incorporelles (marques)',
      'Les stocks de produits finis',
      'Les participations financières',
    ],
    correctIndex: 1,
    explanation:
      'Chez LVMH, les marques (Louis Vuitton, Dior, etc.) constituent des immobilisations incorporelles représentant ~45 Md€, soit le plus gros poste d\'actifs. C\'est la valeur du portefeuille de marques.',
    difficulty: 'hard',
  },

  // ─── Lesson 2 : Le compte de résultat ──────────
  {
    id: 'income-statement-q1',
    lessonId: 'income-statement',
    question: 'Quel est le point de départ du compte de résultat ?',
    options: [
      'L\'EBITDA',
      'Le résultat net',
      'Le chiffre d\'affaires',
      'La marge brute',
    ],
    correctIndex: 2,
    explanation:
      'Le compte de résultat se lit du haut vers le bas, en partant du chiffre d\'affaires (revenus/ventes) pour descendre jusqu\'au résultat net.',
    difficulty: 'easy',
  },
  {
    id: 'income-statement-q2',
    lessonId: 'income-statement',
    question: 'Que signifie l\'acronyme EBITDA ?',
    options: [
      'Earnings Before Income Tax, Depreciation and Amortization',
      'Earnings Before Interest, Taxes, Depreciation and Amortization',
      'Earnings Before Interest, Taxes, Dividends and Assets',
      'Enterprise Business Income Tax Deductions and Adjustments',
    ],
    correctIndex: 1,
    explanation:
      'EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortization. C\'est le résultat avant intérêts, impôts, dépréciations et amortissements.',
    difficulty: 'easy',
  },
  {
    id: 'income-statement-q3',
    lessonId: 'income-statement',
    question: 'Une entreprise a un CA de 1 000 M€ et un résultat net de 80 M€. Quelle est sa marge nette ?',
    options: ['12 %', '8 %', '80 %', '0,8 %'],
    correctIndex: 1,
    explanation:
      'Marge nette = Résultat net / CA = 80 / 1 000 = 8 %. La marge nette mesure la rentabilité finale après toutes les charges.',
    difficulty: 'easy',
  },
  {
    id: 'income-statement-q4',
    lessonId: 'income-statement',
    question: 'Quelle est la différence entre l\'EBITDA et l\'EBIT ?',
    options: [
      'L\'EBIT exclut les impôts, pas l\'EBITDA',
      'L\'EBITDA inclut les amortissements, pas l\'EBIT',
      'L\'EBIT inclut les amortissements (D&A), pas l\'EBITDA',
      'L\'EBITDA exclut les intérêts, pas l\'EBIT',
    ],
    correctIndex: 2,
    explanation:
      'EBIT = EBITDA - D&A (Depreciation & Amortization). L\'EBIT prend en compte l\'usure des actifs (amortissements) contrairement à l\'EBITDA.',
    difficulty: 'medium',
  },
  {
    id: 'income-statement-q5',
    lessonId: 'income-statement',
    question: 'Pourquoi normalise-t-on le compte de résultat ?',
    options: [
      'Pour augmenter artificiellement le résultat net',
      'Pour isoler la performance récurrente en excluant les éléments exceptionnels',
      'Pour convertir les données en normes US GAAP',
      'Pour réduire les impôts de l\'entreprise',
    ],
    correctIndex: 1,
    explanation:
      'La normalisation exclut les éléments non récurrents (restructurations, cessions, litiges) pour faire apparaître la performance opérationnelle sous-jacente et récurrente.',
    difficulty: 'medium',
  },

  // ─── Lesson 3 : Les flux de trésorerie ─────────
  {
    id: 'cash-flow-q1',
    lessonId: 'cash-flow-statement',
    question: 'Quelles sont les trois catégories de flux de trésorerie ?',
    options: [
      'Opérationnels, Financiers, Exceptionnels',
      'Opérationnels, Investissement, Financement',
      'Court terme, Moyen terme, Long terme',
      'Opérationnels, Amortissements, Dividendes',
    ],
    correctIndex: 1,
    explanation:
      'Le tableau de flux se divise en trois : flux opérationnels (CFO), flux d\'investissement (CFI) et flux de financement (CFF).',
    difficulty: 'easy',
  },
  {
    id: 'cash-flow-q2',
    lessonId: 'cash-flow-statement',
    question: 'Pourquoi ajoute-t-on les amortissements au résultat net dans le calcul du CFO ?',
    options: [
      'Parce que les amortissements augmentent la trésorerie',
      'Parce que les amortissements sont une charge non-cash qui a réduit le résultat net',
      'Parce que les amortissements sont un investissement',
      'Parce que les amortissements sont déductibles d\'impôt',
    ],
    correctIndex: 1,
    explanation:
      'Les amortissements ont été déduits du résultat net comme charge mais ne représentent pas une sortie de cash. On les « rajoute » pour passer de la vision comptable à la vision trésorerie.',
    difficulty: 'medium',
  },
  {
    id: 'cash-flow-q3',
    lessonId: 'cash-flow-statement',
    question: 'Un résultat net positif avec un CFO négatif est :',
    options: [
      'Impossible en comptabilité',
      'Un signal d\'alarme sur la qualité des bénéfices',
      'Un signe de bonne gestion',
      'Normal pour toutes les entreprises en croissance',
    ],
    correctIndex: 1,
    explanation:
      'Un écart entre résultat net positif et CFO négatif peut signaler des manipulations comptables (reconnaissance agressive des revenus, gonflement des créances) ou un BFR explosif.',
    difficulty: 'medium',
  },
  {
    id: 'cash-flow-q4',
    lessonId: 'cash-flow-statement',
    question: 'Les rachats d\'actions sont classés dans quelle catégorie de flux ?',
    options: [
      'Flux opérationnels',
      'Flux d\'investissement',
      'Flux de financement',
      'Hors bilan',
    ],
    correctIndex: 2,
    explanation:
      'Les rachats d\'actions font partie des flux de financement (CFF), au même titre que l\'émission de dette, le remboursement d\'emprunts et le versement de dividendes.',
    difficulty: 'medium',
  },
  {
    id: 'cash-flow-q5',
    lessonId: 'cash-flow-statement',
    question: 'Apple a un CFO de 110 Md$ et un CAPEX de 11 Md$. Quel est son FCF ?',
    options: ['121 Md$', '99 Md$', '11 Md$', '110 Md$'],
    correctIndex: 1,
    explanation:
      'FCF = CFO - CAPEX = 110 - 11 = 99 Md$. Le FCF représente le cash disponible après avoir financé les investissements nécessaires au maintien et à la croissance de l\'activité.',
    difficulty: 'easy',
  },

  // ─── Lesson 4 : Ratios de liquidité ────────────
  {
    id: 'liquidity-q1',
    lessonId: 'liquidity-ratios',
    question: 'Comment se calcule le Current Ratio ?',
    options: [
      'Actifs non courants / Passifs non courants',
      'Actifs courants / Passifs courants',
      'Trésorerie / Passifs courants',
      'Capitaux propres / Total Actif',
    ],
    correctIndex: 1,
    explanation:
      'Current Ratio = Actifs courants / Passifs courants. Il mesure la couverture des engagements à court terme par les actifs à court terme.',
    difficulty: 'easy',
  },
  {
    id: 'liquidity-q2',
    lessonId: 'liquidity-ratios',
    question: 'Le Quick Ratio (acid test) exclut quel élément du numérateur ?',
    options: [
      'Les créances clients',
      'La trésorerie',
      'Les stocks',
      'Les valeurs mobilières de placement',
    ],
    correctIndex: 2,
    explanation:
      'Quick Ratio = (Actifs courants - Stocks) / Passifs courants. On exclut les stocks car ils peuvent être difficiles à liquider rapidement (délai de vente, obsolescence).',
    difficulty: 'easy',
  },
  {
    id: 'liquidity-q3',
    lessonId: 'liquidity-ratios',
    question: 'Pourquoi un Current Ratio de 0,8 est-il acceptable pour Carrefour ?',
    options: [
      'Parce que Carrefour a une dette élevée',
      'Parce que les distributeurs encaissent comptant et paient à crédit (BFR négatif)',
      'Parce que Carrefour est une entreprise d\'État',
      'Parce que les normes IFRS autorisent un ratio inférieur à 1',
    ],
    correctIndex: 1,
    explanation:
      'La grande distribution encaisse immédiatement les clients (paiement CB) mais paie ses fournisseurs à 60-90 jours. Ce décalage crée un BFR négatif qui finance l\'activité, rendant un Current Ratio < 1 normal.',
    difficulty: 'hard',
  },
  {
    id: 'liquidity-q4',
    lessonId: 'liquidity-ratios',
    question: 'Quel est le ratio de liquidité le plus conservateur ?',
    options: [
      'Current Ratio',
      'Quick Ratio',
      'Cash Ratio',
      'Debt-to-Equity',
    ],
    correctIndex: 2,
    explanation:
      'Le Cash Ratio = Trésorerie / Passifs courants ne considère que les disponibilités immédiates. C\'est le test le plus strict : l\'entreprise peut-elle payer ses dettes à court terme uniquement avec son cash ?',
    difficulty: 'medium',
  },
  {
    id: 'liquidity-q5',
    lessonId: 'liquidity-ratios',
    question: 'Un Current Ratio très élevé (ex : 5x) est-il toujours positif ?',
    options: [
      'Oui, plus le ratio est élevé, mieux c\'est',
      'Non, cela peut signaler une gestion inefficace du BFR (trop de stock ou de créances)',
      'Non, cela signifie toujours que l\'entreprise a trop de dette',
      'Oui, tant que le ratio est supérieur à 1',
    ],
    correctIndex: 1,
    explanation:
      'Un Current Ratio très élevé peut indiquer un excès de stocks (risque d\'obsolescence), des créances clients non recouvrées, ou du cash mal employé. L\'efficacité du BFR est aussi importante que la solvabilité.',
    difficulty: 'medium',
  },

  // ─── Lesson 5 : Ratios de rentabilité ──────────
  {
    id: 'profitability-q1',
    lessonId: 'profitability-ratios',
    question: 'Que mesure le ROE ?',
    options: [
      'La rentabilité de l\'ensemble des actifs',
      'La rentabilité des capitaux propres investis par les actionnaires',
      'La capacité à rembourser la dette',
      'La marge opérationnelle de l\'entreprise',
    ],
    correctIndex: 1,
    explanation:
      'ROE = Résultat net / Capitaux propres. Il mesure combien l\'entreprise génère de profit pour chaque euro investi par les actionnaires.',
    difficulty: 'easy',
  },
  {
    id: 'profitability-q2',
    lessonId: 'profitability-ratios',
    question: 'La décomposition de DuPont décompose le ROE en :',
    options: [
      'Marge brute × Levier × Rotation',
      'Marge nette × Rotation des actifs × Levier financier',
      'EBITDA × CA × Total Actif',
      'ROA × Coût de la dette × Taux d\'imposition',
    ],
    correctIndex: 1,
    explanation:
      'DuPont : ROE = (Résultat net / CA) × (CA / Total Actif) × (Total Actif / CP) = Marge nette × Rotation × Levier. Cela permet d\'identifier l\'origine de la rentabilité.',
    difficulty: 'medium',
  },
  {
    id: 'profitability-q3',
    lessonId: 'profitability-ratios',
    question: 'Pourquoi le ROCE est-il considéré comme supérieur au ROE pour mesurer la performance opérationnelle ?',
    options: [
      'Parce qu\'il est plus facile à calculer',
      'Parce qu\'il est indépendant de la structure financière',
      'Parce qu\'il inclut les éléments exceptionnels',
      'Parce qu\'il utilise le chiffre d\'affaires au numérateur',
    ],
    correctIndex: 1,
    explanation:
      'Le ROCE = NOPAT / Capitaux employés mesure la rentabilité du capital utilisé dans l\'activité, indépendamment du mix dette/equity. Il permet de comparer des entreprises avec des structures financières différentes.',
    difficulty: 'hard',
  },
  {
    id: 'profitability-q4',
    lessonId: 'profitability-ratios',
    question: 'Hermès a un ROE de 33 %. D\'après la décomposition de DuPont, d\'où vient principalement cette performance ?',
    options: [
      'Du levier financier élevé',
      'De la rotation rapide des actifs',
      'De la marge nette exceptionnelle (27 %)',
      'D\'un faible taux d\'imposition',
    ],
    correctIndex: 2,
    explanation:
      'Hermès : marge nette = 27 %, rotation = 0,9x, levier = 1,4x. Le ROE exceptionnel vient du pricing power des marques de luxe qui génère des marges très élevées, pas de l\'endettement.',
    difficulty: 'hard',
  },
  {
    id: 'profitability-q5',
    lessonId: 'profitability-ratios',
    question: 'Selon le Vernimmen, quand une entreprise crée-t-elle de la valeur ?',
    options: [
      'Quand son ROE est positif',
      'Quand son CA augmente chaque année',
      'Quand son ROCE est supérieur au WACC',
      'Quand elle verse des dividendes',
    ],
    correctIndex: 2,
    explanation:
      'La règle d\'or de la création de valeur : si ROCE > WACC, l\'entreprise génère un rendement supérieur au coût de ses ressources. Elle crée de la valeur pour ses actionnaires.',
    difficulty: 'medium',
  },

  // ─── Lesson 6 : Ratios d'endettement ──────────
  {
    id: 'leverage-q1',
    lessonId: 'leverage-ratios',
    question: 'Quel est le ratio d\'endettement le plus utilisé en pratique ?',
    options: [
      'Debt-to-Equity',
      'Gearing',
      'Dette nette / EBITDA',
      'Interest Coverage Ratio',
    ],
    correctIndex: 2,
    explanation:
      'Le ratio Dette nette / EBITDA est le plus utilisé en M&A et par les agences de notation. Il exprime en combien d\'années d\'EBITDA l\'entreprise pourrait rembourser sa dette.',
    difficulty: 'easy',
  },
  {
    id: 'leverage-q2',
    lessonId: 'leverage-ratios',
    question: 'Comment calcule-t-on la dette nette ?',
    options: [
      'Total des dettes - Capitaux propres',
      'Dettes financières - Trésorerie et équivalents',
      'Total passif - Total actif',
      'Dettes fournisseurs - Créances clients',
    ],
    correctIndex: 1,
    explanation:
      'Dette nette = Dettes financières brutes (emprunts, obligations) - Trésorerie et équivalents de trésorerie. Elle mesure l\'endettement réel, net du cash disponible.',
    difficulty: 'easy',
  },
  {
    id: 'leverage-q3',
    lessonId: 'leverage-ratios',
    question: 'Un ICR (Interest Coverage Ratio) de 1,5x signifie :',
    options: [
      'L\'entreprise a 1,5 Md€ de dette',
      'L\'EBIT couvre 1,5 fois les charges d\'intérêts (signal d\'alerte)',
      'L\'entreprise a un excellent profil de crédit',
      'La dette nette représente 1,5 fois l\'EBITDA',
    ],
    correctIndex: 1,
    explanation:
      'Un ICR de 1,5x signifie que l\'EBIT ne couvre que 1,5 fois les intérêts. C\'est un signal d\'alerte : une baisse de 33 % de l\'EBIT rendrait le service de la dette impossible.',
    difficulty: 'medium',
  },
  {
    id: 'leverage-q4',
    lessonId: 'leverage-ratios',
    question: 'Au-delà de quel seuil de Dette nette / EBITDA une entreprise est-elle généralement notée « speculative grade » ?',
    options: ['1x', '2x', '4x', '6x'],
    correctIndex: 2,
    explanation:
      'Un ratio Dette nette / EBITDA supérieur à 4x conduit généralement à une note inférieure à BBB- (investment grade), basculant en speculative grade (high yield). Ce seuil varie selon les secteurs.',
    difficulty: 'hard',
  },
  {
    id: 'leverage-q5',
    lessonId: 'leverage-ratios',
    question: 'Qu\'est-ce qu\'un covenant financier ?',
    options: [
      'Une prime versée aux créanciers',
      'Une clause contractuelle imposant le respect de ratios financiers (ex : Dette/EBITDA < 3x)',
      'Un type de dette subordonnée',
      'Un instrument dérivé de couverture',
    ],
    correctIndex: 1,
    explanation:
      'Les covenants sont des clauses dans les contrats de prêt qui obligent l\'emprunteur à respecter certains ratios (ex : DN/EBITDA < 3,5x, ICR > 3x). Leur violation peut entraîner le remboursement anticipé.',
    difficulty: 'medium',
  },

  // ─── Lesson 7 : BFR et cycle d'exploitation ───
  {
    id: 'bfr-q1',
    lessonId: 'working-capital',
    question: 'Comment se calcule le BFR ?',
    options: [
      'Actifs courants - Passifs courants',
      'Stocks + Créances clients - Dettes fournisseurs',
      'Trésorerie - Dettes à court terme',
      'CA - Charges opérationnelles',
    ],
    correctIndex: 1,
    explanation:
      'BFR = Stocks + Créances clients - Dettes fournisseurs. Il mesure le besoin de financement lié au décalage entre décaissements (achats) et encaissements (ventes).',
    difficulty: 'easy',
  },
  {
    id: 'bfr-q2',
    lessonId: 'working-capital',
    question: 'Quelle entreprise a typiquement un BFR négatif ?',
    options: [
      'Un constructeur automobile',
      'Un grand distributeur (supermarché)',
      'Un cabinet d\'avocats',
      'Une entreprise de BTP',
    ],
    correctIndex: 1,
    explanation:
      'Les supermarchés encaissent immédiatement les clients (CB) mais paient leurs fournisseurs à 60-90 jours. Ce décalage favorable crée un BFR négatif : l\'activité génère de la trésorerie au lieu d\'en consommer.',
    difficulty: 'medium',
  },
  {
    id: 'bfr-q3',
    lessonId: 'working-capital',
    question: 'Qu\'est-ce que le Cash Conversion Cycle (CCC) ?',
    options: [
      'Le ratio FCF / Résultat net',
      'DIO + DSO - DPO (nombre de jours entre le paiement fournisseur et l\'encaissement client)',
      'Le taux de conversion de l\'EBITDA en cash',
      'Le délai entre la commande et la livraison',
    ],
    correctIndex: 1,
    explanation:
      'CCC = DIO (Days Inventory Outstanding) + DSO (Days Sales Outstanding) - DPO (Days Payable Outstanding). Il mesure le nombre de jours pendant lesquels le cash est « piégé » dans le cycle d\'exploitation.',
    difficulty: 'medium',
  },
  {
    id: 'bfr-q4',
    lessonId: 'working-capital',
    question: 'Pourquoi la croissance du CA fait-elle augmenter le BFR ?',
    options: [
      'Parce que les impôts augmentent',
      'Parce que plus de ventes impliquent plus de stocks et de créances à financer',
      'Parce que les amortissements augmentent',
      'Parce que le WACC augmente avec la taille',
    ],
    correctIndex: 1,
    explanation:
      'La croissance du CA nécessite plus de stocks pour répondre à la demande et génère plus de créances clients. Le BFR augmente proportionnellement au CA, consommant du cash supplémentaire.',
    difficulty: 'medium',
  },
  {
    id: 'bfr-q5',
    lessonId: 'working-capital',
    question: 'Danone a un CCC de 28 jours. Si chaque jour de CCC représente 80 M€, combien libère une réduction de 5 jours ?',
    options: ['280 M€', '400 M€', '500 M€', '80 M€'],
    correctIndex: 1,
    explanation:
      '5 jours × 80 M€/jour = 400 M€ de trésorerie libérée. Réduire le CCC (négocier des délais fournisseurs plus longs, accélérer les encaissements, optimiser les stocks) est un levier de création de valeur.',
    difficulty: 'hard',
  },

  // ─── Lesson 8 : Free Cash Flow ─────────────────
  {
    id: 'fcf-q1',
    lessonId: 'free-cash-flow',
    question: 'Comment se calcule le Free Cash Flow (simplifiié) ?',
    options: [
      'Résultat net + Amortissements',
      'CFO - CAPEX',
      'EBITDA - Impôts',
      'CA - Charges totales',
    ],
    correctIndex: 1,
    explanation:
      'FCF = Cash Flow Opérationnel (CFO) - CAPEX. C\'est le cash disponible après avoir financé l\'activité courante et les investissements.',
    difficulty: 'easy',
  },
  {
    id: 'fcf-q2',
    lessonId: 'free-cash-flow',
    question: 'Quelle est la différence entre FCFF et FCFE ?',
    options: [
      'Le FCFF est avant impôts, le FCFE après impôts',
      'Le FCFF est pour tous les pourvoyeurs de fonds, le FCFE uniquement pour les actionnaires',
      'Le FCFF est annuel, le FCFE est trimestriel',
      'Il n\'y a aucune différence, ce sont des synonymes',
    ],
    correctIndex: 1,
    explanation:
      'FCFF (to Firm) rémunère actionnaires ET créanciers. FCFE (to Equity) = FCFF - service de la dette, et ne revient qu\'aux actionnaires. Le DCF classique utilise le FCFF pour valoriser l\'EV.',
    difficulty: 'medium',
  },
  {
    id: 'fcf-q3',
    lessonId: 'free-cash-flow',
    question: 'La formule complète du FCFF est :',
    options: [
      'EBIT × (1-t) + D&A - CAPEX - ΔBFR',
      'Résultat net + Dividendes - Rachats d\'actions',
      'CFO + CFI + CFF',
      'EBITDA - Impôts - CAPEX',
    ],
    correctIndex: 0,
    explanation:
      'FCFF = EBIT × (1-t) + D&A - CAPEX - ΔBFR. On part du résultat opérationnel après impôts, on ajoute les charges non-cash, on déduit les investissements et la variation du BFR.',
    difficulty: 'hard',
  },
  {
    id: 'fcf-q4',
    lessonId: 'free-cash-flow',
    question: 'Qu\'est-ce que le FCF Yield ?',
    options: [
      'Le taux de croissance du FCF',
      'FCF / Market Cap (rendement en cash de l\'entreprise)',
      'FCF / EBITDA',
      'FCF / Dette nette',
    ],
    correctIndex: 1,
    explanation:
      'FCF Yield = FCF / Capitalisation boursière. Un FCF yield de 8 % signifie que pour chaque 100 € investis, l\'entreprise génère 8 € de cash libre. C\'est un ratio de valorisation alternatif au P/E.',
    difficulty: 'medium',
  },
  {
    id: 'fcf-q5',
    lessonId: 'free-cash-flow',
    question: 'Pourquoi le FCF est-il considéré comme plus fiable que le résultat net ?',
    options: [
      'Parce qu\'il est toujours plus élevé',
      'Parce qu\'il est calculé par les auditeurs',
      'Parce qu\'il est plus difficile à manipuler comptablement',
      'Parce qu\'il exclut les impôts',
    ],
    correctIndex: 2,
    explanation:
      'Le résultat net peut être manipulé par des choix comptables (reconnaissance du CA, provisions, amortissements). Le FCF mesure le cash réel entrant dans la caisse, beaucoup plus difficile à « maquiller ».',
    difficulty: 'medium',
  },

  // ─── Lesson 9 : Introduction au DCF ────────────
  {
    id: 'dcf-q1',
    lessonId: 'dcf-intro',
    question: 'Sur quel principe repose le DCF ?',
    options: [
      'Un actif vaut son coût de remplacement',
      'Un actif vaut la somme actualisée de ses flux de trésorerie futurs',
      'Un actif vaut la moyenne des multiples de ses pairs',
      'Un actif vaut sa valeur comptable ajustée de l\'inflation',
    ],
    correctIndex: 1,
    explanation:
      'Le DCF repose sur le principe de la valeur temps de l\'argent : un actif vaut la somme de ses flux de trésorerie futurs, actualisés à un taux reflétant le risque.',
    difficulty: 'easy',
  },
  {
    id: 'dcf-q2',
    lessonId: 'dcf-intro',
    question: 'Quel taux d\'actualisation utilise-t-on dans un DCF basé sur les FCFF ?',
    options: [
      'Le taux sans risque',
      'Le coût des capitaux propres (Ke)',
      'Le WACC',
      'Le taux d\'intérêt de la dette',
    ],
    correctIndex: 2,
    explanation:
      'Les FCFF sont disponibles pour tous les pourvoyeurs de fonds (actionnaires + créanciers), donc on les actualise au WACC qui représente le coût moyen pondéré de ces financements.',
    difficulty: 'medium',
  },
  {
    id: 'dcf-q3',
    lessonId: 'dcf-intro',
    question: 'L\'horizon de projection explicite d\'un DCF est généralement de :',
    options: [
      '1 à 2 ans',
      '5 à 10 ans',
      '20 à 30 ans',
      '50 ans ou plus',
    ],
    correctIndex: 1,
    explanation:
      'On projette les FCFF sur 5 à 10 ans (horizon explicite), puis on calcule une valeur terminale pour les flux au-delà. L\'horizon dépend de la visibilité sur l\'activité.',
    difficulty: 'easy',
  },
  {
    id: 'dcf-q4',
    lessonId: 'dcf-intro',
    question: 'Pourquoi le DCF est-il qualifié de méthode « intrinsèque » ?',
    options: [
      'Parce qu\'il utilise des données publiques uniquement',
      'Parce qu\'il valorise l\'entreprise par ses propres flux, indépendamment du marché',
      'Parce qu\'il est le plus ancien modèle de valorisation',
      'Parce qu\'il ne nécessite aucune hypothèse',
    ],
    correctIndex: 1,
    explanation:
      'Le DCF est intrinsèque car il dépend des fondamentaux propres de l\'entreprise (ses flux futurs), contrairement aux comparables qui dépendent de la valorisation du marché.',
    difficulty: 'medium',
  },
  {
    id: 'dcf-q5',
    lessonId: 'dcf-intro',
    question: 'Quelle est la principale faiblesse du DCF ?',
    options: [
      'Il est trop simple à calculer',
      'Il ne prend pas en compte la dette',
      'Il est très sensible aux hypothèses (WACC, g, marges)',
      'Il ne fonctionne que pour les entreprises cotées',
    ],
    correctIndex: 2,
    explanation:
      'Le DCF est très sensible aux hypothèses : une variation de 0,5 % du WACC ou du taux de croissance terminal peut modifier la valorisation de 15-20 %. D\'où la nécessité d\'analyses de sensibilité.',
    difficulty: 'medium',
  },

  // ─── Lesson 10 : Valeur terminale ─────────────
  {
    id: 'terminal-value-q1',
    lessonId: 'terminal-value',
    question: 'Quel pourcentage de l\'Enterprise Value la valeur terminale représente-t-elle en général ?',
    options: ['10-20 %', '30-40 %', '60-80 %', '90-100 %'],
    correctIndex: 2,
    explanation:
      'La valeur terminale représente typiquement 60-80 % de l\'Enterprise Value dans un DCF, ce qui en fait le paramètre le plus important et le plus sensible du modèle.',
    difficulty: 'easy',
  },
  {
    id: 'terminal-value-q2',
    lessonId: 'terminal-value',
    question: 'Quelle est la formule de Gordon Growth pour la valeur terminale ?',
    options: [
      'TV = FCFF × WACC / g',
      'TV = FCFFn+1 / (WACC - g)',
      'TV = EBITDAn × Multiple',
      'TV = FCFFn × (1 + WACC)',
    ],
    correctIndex: 1,
    explanation:
      'Gordon Growth : TV = FCFFn+1 / (WACC - g), où FCFFn+1 est le FCFF de la première année au-delà de l\'horizon et g le taux de croissance perpétuelle.',
    difficulty: 'medium',
  },
  {
    id: 'terminal-value-q3',
    lessonId: 'terminal-value',
    question: 'Pourquoi le taux g ne doit-il pas dépasser la croissance du PIB nominal ?',
    options: [
      'Parce que c\'est une convention comptable',
      'Parce que l\'entreprise finirait par devenir plus grande que l\'économie entière',
      'Parce que les régulateurs l\'interdisent',
      'Parce que le modèle de Gordon ne fonctionne qu\'avec des taux négatifs',
    ],
    correctIndex: 1,
    explanation:
      'Si une entreprise croît indéfiniment plus vite que le PIB, elle représenterait à terme 100 % de l\'économie, ce qui est absurde. Le g doit donc être ≤ au PIB nominal à long terme (~2-3 %).',
    difficulty: 'hard',
  },
  {
    id: 'terminal-value-q4',
    lessonId: 'terminal-value',
    question: 'Dans la méthode Exit Multiple, la valeur terminale se calcule comme :',
    options: [
      'TV = EBITDA année 1 × Multiple',
      'TV = FCF dernière année × WACC',
      'TV = EBITDA dernière année de projection × Multiple de sortie',
      'TV = CA dernière année × Marge nette',
    ],
    correctIndex: 2,
    explanation:
      'Exit Multiple : TV = EBITDAn × Multiple de sortie. On applique un multiple de marché (tiré des comparables) à l\'EBITDA de la dernière année de projection.',
    difficulty: 'medium',
  },
  {
    id: 'terminal-value-q5',
    lessonId: 'terminal-value',
    question: 'Que se passe-t-il si g = WACC dans la formule de Gordon ?',
    options: [
      'La valeur terminale est nulle',
      'La valeur terminale est égale au FCFF',
      'La valeur terminale tend vers l\'infini (division par zéro)',
      'La valeur terminale est négative',
    ],
    correctIndex: 2,
    explanation:
      'Si g = WACC, le dénominateur (WACC - g) = 0, et la division donne l\'infini. C\'est une impossibilité économique : aucune entreprise ne peut croître éternellement au taux du WACC.',
    difficulty: 'medium',
  },

  // ─── Lesson 11 : Le WACC ──────────────────────
  {
    id: 'wacc-q1',
    lessonId: 'wacc',
    question: 'Quelle est la formule du WACC ?',
    options: [
      'WACC = Ke + Kd',
      'WACC = Ke × (E/V) + Kd × (1-t) × (D/V)',
      'WACC = Rf + β × (Rm - Rf)',
      'WACC = EBIT / Capitaux employés',
    ],
    correctIndex: 1,
    explanation:
      'WACC = Ke × (E/V) + Kd × (1-t) × (D/V). Il pondère le coût des fonds propres et le coût de la dette après impôt par leurs poids respectifs dans la structure de financement.',
    difficulty: 'easy',
  },
  {
    id: 'wacc-q2',
    lessonId: 'wacc',
    question: 'Comment calcule-t-on le Ke (coût des capitaux propres) par le CAPM ?',
    options: [
      'Ke = Rf × β + Rm',
      'Ke = Rf + β × (Rm - Rf)',
      'Ke = Kd × (1 - t)',
      'Ke = Dividende / Cours de l\'action',
    ],
    correctIndex: 1,
    explanation:
      'CAPM : Ke = Rf + β × (Rm - Rf). Rf = taux sans risque, β = sensibilité au marché, (Rm - Rf) = prime de risque actions (~5-6 % historiquement en Europe).',
    difficulty: 'medium',
  },
  {
    id: 'wacc-q3',
    lessonId: 'wacc',
    question: 'Pourquoi le coût de la dette est-il multiplié par (1-t) dans le WACC ?',
    options: [
      'Parce que la dette est remboursable à maturité',
      'Parce que les intérêts sont déductibles du résultat imposable (bouclier fiscal)',
      'Parce que le risque de la dette est inférieur à celui des actions',
      'Parce que la convention bancaire l\'impose',
    ],
    correctIndex: 1,
    explanation:
      'Les intérêts de la dette sont fiscalement déductibles : ils réduisent le résultat imposable et donc l\'impôt. Le coût effectif de la dette est Kd × (1-t), grâce au « tax shield » (bouclier fiscal).',
    difficulty: 'medium',
  },
  {
    id: 'wacc-q4',
    lessonId: 'wacc',
    question: 'Un β de 1,3 signifie que :',
    options: [
      'L\'action est moins volatile que le marché',
      'L\'action amplifie les mouvements du marché de 30 %',
      'L\'action a un rendement de 1,3 %',
      'L\'entreprise a une dette nette de 1,3x l\'EBITDA',
    ],
    correctIndex: 1,
    explanation:
      'Un β de 1,3 signifie que quand le marché monte de 10 %, l\'action monte en moyenne de 13 % (et inversement en baisse). L\'action amplifie les mouvements du marché de 30 %.',
    difficulty: 'medium',
  },
  {
    id: 'wacc-q5',
    lessonId: 'wacc',
    question: 'Si Rf = 3 %, β = 0,65, prime de risque = 5,5 %, Kd = 3,5 %, t = 25 %, D/V = 20 %, quel est le WACC ?',
    options: ['6,6 %', '5,8 %', '7,2 %', '4,5 %'],
    correctIndex: 1,
    explanation:
      'Ke = 3 + 0,65 × 5,5 = 6,575 %. WACC = 6,575 % × 80 % + 3,5 % × 75 % × 20 % = 5,26 % + 0,525 % ≈ 5,8 %.',
    difficulty: 'hard',
  },

  // ─── Lesson 12 : Multiples de valorisation ────
  {
    id: 'multiples-q1',
    lessonId: 'valuation-multiples',
    question: 'Pourquoi l\'EV/EBITDA est-il préféré au P/E en M&A ?',
    options: [
      'Parce qu\'il est plus simple à calculer',
      'Parce qu\'il est indépendant de la structure financière et de la politique d\'amortissement',
      'Parce qu\'il est toujours plus élevé',
      'Parce que le P/E n\'est pas disponible pour les sociétés cotées',
    ],
    correctIndex: 1,
    explanation:
      'L\'EV/EBITDA est neutre par rapport à l\'endettement (EV inclut la dette), aux amortissements et aux différences fiscales. Il permet de comparer des sociétés avec des structures financières différentes.',
    difficulty: 'medium',
  },
  {
    id: 'multiples-q2',
    lessonId: 'valuation-multiples',
    question: 'Qu\'est-ce que le PEG ratio ?',
    options: [
      'Price / Earnings Growth = P/E divisé par le taux de croissance du BPA',
      'Profit / Enterprise Growth',
      'Price / EBITDA × G',
      'Profit Equity Gap',
    ],
    correctIndex: 0,
    explanation:
      'PEG = P/E / taux de croissance annuel du BPA. Un PEG < 1 est considéré comme attractif : le P/E est inférieur au taux de croissance. Peter Lynch a popularisé cet indicateur.',
    difficulty: 'medium',
  },
  {
    id: 'multiples-q3',
    lessonId: 'valuation-multiples',
    question: 'Pour quelle raison utilise-t-on l\'EV/Revenue (EV/Sales) ?',
    options: [
      'Pour toutes les entreprises, c\'est le multiple universel',
      'Pour les entreprises non profitables (tech en croissance) où l\'EBITDA est négatif',
      'Uniquement pour les banques',
      'Pour calculer le dividende',
    ],
    correctIndex: 1,
    explanation:
      'L\'EV/Revenue est le seul multiple applicable aux entreprises non profitables (startup tech, biotech en phase de développement) car le CA est toujours positif, contrairement à l\'EBITDA ou au résultat net.',
    difficulty: 'medium',
  },
  {
    id: 'multiples-q4',
    lessonId: 'valuation-multiples',
    question: 'Pourquoi faut-il utiliser des multiples « forward » plutôt que « trailing » ?',
    options: [
      'Parce que les multiples trailing sont interdits par l\'AMF',
      'Parce que les forward reflètent les perspectives futures intégrées dans le cours actuel',
      'Parce que les forward sont toujours plus bas',
      'Parce que les trailing ne sont pas disponibles',
    ],
    correctIndex: 1,
    explanation:
      'Le cours de bourse reflète les anticipations futures, pas les performances passées. Les multiples forward (basés sur le consensus des analystes) sont donc plus pertinents pour la comparaison.',
    difficulty: 'hard',
  },
  {
    id: 'multiples-q5',
    lessonId: 'valuation-multiples',
    question: 'LVMH se traite à 14x EV/EBITDA et Kering à 10x. Cet écart s\'explique principalement par :',
    options: [
      'La différence de taille du bilan',
      'La meilleure diversification et croissance de LVMH',
      'Le taux d\'imposition plus bas de Kering',
      'Le nombre d\'employés plus élevé chez LVMH',
    ],
    correctIndex: 1,
    explanation:
      'LVMH bénéficie d\'une prime de valorisation grâce à son portefeuille de marques diversifié (LV, Dior, Tiffany, Sephora) et à une croissance plus rapide que Kering (plus concentré sur Gucci).',
    difficulty: 'hard',
  },

  // ─── Lesson 13 : EV vs Equity Value ───────────
  {
    id: 'ev-equity-q1',
    lessonId: 'ev-vs-equity',
    question: 'L\'Enterprise Value représente :',
    options: [
      'La valeur boursière de l\'entreprise uniquement',
      'La valeur totale pour tous les pourvoyeurs de fonds (actionnaires + créanciers)',
      'Le total de l\'actif du bilan',
      'Le chiffre d\'affaires annuel de l\'entreprise',
    ],
    correctIndex: 1,
    explanation:
      'L\'EV est la valeur totale de l\'entreprise : elle inclut la capitalisation boursière (pour les actionnaires) ET la dette nette (pour les créanciers). C\'est le prix d\'acquisition total.',
    difficulty: 'easy',
  },
  {
    id: 'ev-equity-q2',
    lessonId: 'ev-vs-equity',
    question: 'Comment passe-t-on de l\'Equity Value à l\'Enterprise Value ?',
    options: [
      'EV = Equity Value - Dette nette',
      'EV = Equity Value + Dette nette + Minoritaires + Prefs',
      'EV = Equity Value × Nombre d\'actions',
      'EV = Equity Value / EBITDA',
    ],
    correctIndex: 1,
    explanation:
      'EV = Market Cap (Equity Value) + Dette nette + Intérêts minoritaires + Actions préférentielles. Pour acheter l\'entreprise, il faut payer les actionnaires ET reprendre les dettes.',
    difficulty: 'medium',
  },
  {
    id: 'ev-equity-q3',
    lessonId: 'ev-vs-equity',
    question: 'Quel calcul est incohérent (erreur numérateur/dénominateur) ?',
    options: [
      'EV / EBITDA',
      'Price / Earnings (P/E)',
      'EV / BPA (bénéfice par action)',
      'EV / EBIT',
    ],
    correctIndex: 2,
    explanation:
      'L\'EV est pour tous les pourvoyeurs de fonds, mais le BPA est uniquement pour les actionnaires (après dette). Mélanger EV (numérateur) avec BPA (dénominateur) viole la cohérence.',
    difficulty: 'hard',
  },
  {
    id: 'ev-equity-q4',
    lessonId: 'ev-vs-equity',
    question: 'Pernod Ricard a une Market Cap de 45 Md€ et une dette nette de 10 Md€. Quelle est son EV approximative ?',
    options: ['35 Md€', '45 Md€', '55 Md€', '450 Md€'],
    correctIndex: 2,
    explanation:
      'EV ≈ Market Cap + Dette nette = 45 + 10 = 55 Md€ (en négligeant les minoritaires et prefs). L\'acquéreur devrait payer 55 Md€ pour racheter la totalité de Pernod.',
    difficulty: 'easy',
  },
  {
    id: 'ev-equity-q5',
    lessonId: 'ev-vs-equity',
    question: 'Pourquoi soustrait-on la trésorerie dans le calcul de la dette nette ?',
    options: [
      'Parce que la trésorerie n\'est pas un actif',
      'Parce que l\'acquéreur pourrait utiliser ce cash pour rembourser une partie de la dette',
      'Parce que la norme IFRS l\'impose',
      'Parce que la trésorerie est déjà comptée dans les capitaux propres',
    ],
    correctIndex: 1,
    explanation:
      'La trésorerie disponible peut immédiatement servir à rembourser la dette. La dette nette = dette brute - cash reflète le montant réel que l\'acquéreur devrait financer.',
    difficulty: 'medium',
  },

  // ─── Lesson 14 : Bridge EV → Equity ───────────
  {
    id: 'bridge-q1',
    lessonId: 'ev-equity-bridge',
    question: 'Pour passer de l\'EV à l\'Equity Value, on :',
    options: [
      'Ajoute la dette nette',
      'Soustrait la dette nette, les minoritaires et les prefs',
      'Multiplie par le nombre d\'actions',
      'Divise par l\'EBITDA',
    ],
    correctIndex: 1,
    explanation:
      'Equity Value = EV - Dette nette - Minoritaires - Prefs + Participations MEE. On retire ce qui revient aux créanciers et aux actionnaires minoritaires.',
    difficulty: 'easy',
  },
  {
    id: 'bridge-q2',
    lessonId: 'ev-equity-bridge',
    question: 'Qu\'est-ce que la Treasury Stock Method (TSM) ?',
    options: [
      'Une méthode de rachat d\'actions propres',
      'Une méthode pour calculer le nombre d\'actions dilué en tenant compte des stock-options',
      'Un type de financement par le Trésor public',
      'Une stratégie de gestion de la trésorerie',
    ],
    correctIndex: 1,
    explanation:
      'La TSM calcule la dilution des stock-options : elle suppose que les options dans la monnaie sont exercées, et que le produit d\'exercice sert à racheter des actions au cours actuel. La dilution nette = options exercées - actions rachetées.',
    difficulty: 'hard',
  },
  {
    id: 'bridge-q3',
    lessonId: 'ev-equity-bridge',
    question: 'Pourquoi les obligations locatives (IFRS 16) doivent-elles être incluses dans le bridge ?',
    options: [
      'Parce qu\'elles sont fiscalement déductibles',
      'Parce qu\'IFRS 16 capitalise les loyers au bilan comme de la dette',
      'Parce qu\'elles font partie des capitaux propres',
      'Parce qu\'elles sont exclues du bilan',
    ],
    correctIndex: 1,
    explanation:
      'IFRS 16 transforme les loyers opérationnels en droit d\'utilisation (actif) et dette locative (passif). Ces dettes locatives doivent être incluses dans la dette nette du bridge pour refléter les engagements réels.',
    difficulty: 'hard',
  },
  {
    id: 'bridge-q4',
    lessonId: 'ev-equity-bridge',
    question: 'EV = 95 Md€, dette nette = 8 Md€, pensions = 2 Md€, minoritaires = 1 Md€, MEE = 3 Md€. Equity Value = ?',
    options: ['81 Md€', '87 Md€', '95 Md€', '109 Md€'],
    correctIndex: 1,
    explanation:
      'Equity Value = 95 - 8 - 2 - 1 + 3 = 87 Md€. On déduit toutes les « dettes » (financières, pensions, minoritaires) et on ajoute les participations.',
    difficulty: 'medium',
  },
  {
    id: 'bridge-q5',
    lessonId: 'ev-equity-bridge',
    question: 'Equity Value = 87 Md€, nombre d\'actions diluées = 570 M. Prix par action implicite = ?',
    options: ['153 €', '87 €', '570 €', '49 €'],
    correctIndex: 0,
    explanation:
      'Prix/action = Equity Value / Actions diluées = 87 000 M€ / 570 M = 152,6 € ≈ 153 €. C\'est le prix cible implicite du DCF.',
    difficulty: 'easy',
  },

  // ─── Lesson 15 : Comparable Companies ─────────
  {
    id: 'comps-q1',
    lessonId: 'comparable-companies',
    question: 'Quels critères sont les plus importants pour constituer un peer group ?',
    options: [
      'Même nom de société et même CEO',
      'Même secteur, taille comparable, géographie et profil de croissance similaires',
      'Même cours de bourse et même capitalisation',
      'Même date de création et même nombre d\'employés',
    ],
    correctIndex: 1,
    explanation:
      'Le peer group doit regrouper des entreprises comparables en termes de secteur, taille, géographie, profil de croissance et risque. La pertinence du peer group est la clé de la fiabilité des comps.',
    difficulty: 'easy',
  },
  {
    id: 'comps-q2',
    lessonId: 'comparable-companies',
    question: 'Pourquoi utilise-t-on la médiane plutôt que la moyenne pour les multiples ?',
    options: [
      'Parce que la médiane est toujours plus élevée',
      'Parce que la médiane est moins sensible aux valeurs extrêmes (outliers)',
      'Parce que la moyenne est interdite en finance',
      'Parce que la médiane est plus facile à calculer',
    ],
    correctIndex: 1,
    explanation:
      'La médiane est robuste aux outliers. Si un peer a un multiple aberrant de 50x (restructuration, résultat quasi nul), la moyenne sera fortement faussée, mais la médiane restera stable.',
    difficulty: 'medium',
  },
  {
    id: 'comps-q3',
    lessonId: 'comparable-companies',
    question: 'Peer group médiane EV/EBITDA = 18x, EBITDA cible = 5,2 Md€. EV implicite = ?',
    options: ['93,6 Md€', '52 Md€', '18 Md€', '0,29 Md€'],
    correctIndex: 0,
    explanation:
      'EV implicite = Multiple × EBITDA = 18 × 5,2 = 93,6 Md€. C\'est la valorisation impliquée si l\'entreprise se traitait au multiple médian de ses pairs.',
    difficulty: 'easy',
  },
  {
    id: 'comps-q4',
    lessonId: 'comparable-companies',
    question: 'Pourquoi un peer peut-il se traiter à une prime par rapport au groupe ?',
    options: [
      'Parce qu\'il a plus de dette',
      'Parce qu\'il a une croissance supérieure, de meilleures marges ou moins de risque',
      'Parce qu\'il est plus ancien',
      'Parce qu\'il a un nom plus connu',
    ],
    correctIndex: 1,
    explanation:
      'La prime de valorisation reflète des fondamentaux supérieurs : croissance plus rapide, marges plus élevées, meilleur management, position de marché dominante, ou risque perçu plus faible.',
    difficulty: 'medium',
  },
  {
    id: 'comps-q5',
    lessonId: 'comparable-companies',
    question: 'Quel piège faut-il éviter dans une analyse par les comparables ?',
    options: [
      'Utiliser trop peu de peers',
      'Comparer des entreprises à des stades de maturité très différents',
      'Utiliser des données Bloomberg',
      'Calculer l\'EBITDA manuellement',
    ],
    correctIndex: 1,
    explanation:
      'Comparer une startup en hypercroissance avec une entreprise mature fausse les multiples. Les stades de maturité, la géographie et le business model doivent être homogènes dans le peer group.',
    difficulty: 'medium',
  },

  // ─── Lesson 16 : Precedent Transactions ───────
  {
    id: 'precs-q1',
    lessonId: 'precedent-transactions',
    question: 'Pourquoi les multiples de transaction sont-ils généralement supérieurs aux multiples boursiers ?',
    options: [
      'Parce que les acheteurs payent mal',
      'Parce qu\'ils incluent une prime de contrôle et des synergies',
      'Parce que les transactions ont lieu pendant les bull markets uniquement',
      'Parce que les vendeurs sont en difficulté',
    ],
    correctIndex: 1,
    explanation:
      'Les multiples de transaction incluent la prime de contrôle (25-35 % en moyenne) et la valeur des synergies que l\'acquéreur espère réaliser. D\'où des multiples supérieurs aux cours de bourse.',
    difficulty: 'easy',
  },
  {
    id: 'precs-q2',
    lessonId: 'precedent-transactions',
    question: 'Qu\'est-ce que la « prime de contrôle » ?',
    options: [
      'La commission payée au banquier d\'affaires',
      'Le surcoût payé par l\'acquéreur par rapport au cours de bourse non affecté',
      'Le rendement minimum exigé par les actionnaires',
      'La différence entre l\'EV et l\'Equity Value',
    ],
    correctIndex: 1,
    explanation:
      'Prime de contrôle = (Prix offert - Cours non affecté) / Cours non affecté. Elle rémunère le pouvoir de décision, la possibilité de restructurer et les synergies espérées.',
    difficulty: 'medium',
  },
  {
    id: 'precs-q3',
    lessonId: 'precedent-transactions',
    question: 'Sur quelle période recherche-t-on idéalement des transactions comparables ?',
    options: [
      'Les 20 dernières années',
      'Les 3 dernières années maximum',
      'Uniquement l\'année en cours',
      'Depuis la création du secteur',
    ],
    correctIndex: 1,
    explanation:
      'Les transactions de plus de 3 ans sont moins pertinentes car les conditions de marché (taux d\'intérêt, valorisations, sentiment) ont pu changer significativement.',
    difficulty: 'medium',
  },
  {
    id: 'precs-q4',
    lessonId: 'precedent-transactions',
    question: 'Qu\'est-ce que le « winner\'s curse » dans un processus d\'enchères M&A ?',
    options: [
      'Le gagnant d\'une enchère a généralement surpayé par rapport à la valeur intrinsèque',
      'Le gagnant doit toujours payer en cash',
      'Le gagnant reçoit une malédiction légale',
      'Le perdant fait un profit en revendant ses positions',
    ],
    correctIndex: 0,
    explanation:
      'Le winner\'s curse : dans une enchère compétitive, l\'acheteur le plus optimiste (qui offre le prix le plus élevé) l\'emporte, mais ce prix reflète probablement une surévaluation des synergies.',
    difficulty: 'hard',
  },
  {
    id: 'precs-q5',
    lessonId: 'precedent-transactions',
    question: 'Quelles sources utilise-t-on pour trouver des transactions comparables ?',
    options: [
      'Uniquement les communiqués de presse des entreprises',
      'Bloomberg, Mergermarket, Capital IQ, bases de données de transactions',
      'Les journaux quotidiens',
      'Les rapports annuels des entreprises',
    ],
    correctIndex: 1,
    explanation:
      'Les bases de données spécialisées (Bloomberg, Mergermarket, Capital IQ, Refinitiv) recensent les transactions avec leurs multiples, primes et conditions. Elles sont indispensables pour une analyse rigoureuse.',
    difficulty: 'easy',
  },

  // ─── Lesson 17 : Football Field ───────────────
  {
    id: 'football-q1',
    lessonId: 'football-field',
    question: 'Qu\'est-ce qu\'un Football Field en valorisation ?',
    options: [
      'Un stade où les analystes se réunissent',
      'Un graphique de synthèse montrant les fourchettes de valorisation de chaque méthode',
      'Un modèle de régression statistique',
      'Une méthode de valorisation des clubs de sport',
    ],
    correctIndex: 1,
    explanation:
      'Le Football Field est un graphique à barres horizontales montrant la fourchette de valorisation obtenue par chaque méthode (DCF, Comps, Precs, LBO). Il tire son nom de sa ressemblance avec un terrain de football américain.',
    difficulty: 'easy',
  },
  {
    id: 'football-q2',
    lessonId: 'football-field',
    question: 'Quelle méthode produit généralement la fourchette la plus large dans un Football Field ?',
    options: [
      'Les Comparable Companies',
      'Les Precedent Transactions',
      'Le DCF',
      'L\'analyse LBO',
    ],
    correctIndex: 2,
    explanation:
      'Le DCF produit la fourchette la plus large car il est très sensible aux hypothèses de WACC et de taux de croissance terminal. Une petite variation des inputs change significativement l\'output.',
    difficulty: 'medium',
  },
  {
    id: 'football-q3',
    lessonId: 'football-field',
    question: 'La « zone de convergence » dans un Football Field représente :',
    options: [
      'La méthode la plus fiable',
      'L\'intersection des fourchettes de différentes méthodes, indiquant la valorisation la plus probable',
      'Le point le plus élevé',
      'La moyenne arithmétique de toutes les méthodes',
    ],
    correctIndex: 1,
    explanation:
      'La zone de convergence est la plage de prix où les différentes méthodes se chevauchent. Plus cette zone est étroite, plus la confiance dans la valorisation est élevée.',
    difficulty: 'medium',
  },
  {
    id: 'football-q4',
    lessonId: 'football-field',
    question: 'Dans quel contexte le Football Field est-il systématiquement utilisé ?',
    options: [
      'Pour l\'analyse technique',
      'Dans les pitch books de banques d\'investissement lors d\'opérations de M&A',
      'Pour les déclarations fiscales',
      'Pour le reporting comptable trimestriel',
    ],
    correctIndex: 1,
    explanation:
      'Le Football Field est l\'outil de présentation standard dans les pitch books (mémos de valorisation) des banques d\'investissement lors d\'opérations de M&A, IPO ou restructurations.',
    difficulty: 'easy',
  },
  {
    id: 'football-q5',
    lessonId: 'football-field',
    question: 'DCF = [45€;75€], Comps = [38€;52€], Precs = [55€;80€]. Où se situe la zone de convergence ?',
    options: [
      '[38€ ; 80€]',
      '[45€ ; 52€]',
      '[55€ ; 75€]',
      '[55€ ; 80€]',
    ],
    correctIndex: 2,
    explanation:
      'La zone de convergence est l\'intersection des trois fourchettes : DCF commence à 45€, Precs commence à 55€ (le plus haut départ), DCF finit à 75€ (le plus bas plafond dans la zone de chevauchement DCF-Precs). La zone de convergence DCF ∩ Precs = [55€ ; 75€].',
    difficulty: 'hard',
  },

  // ─── Lesson 18 : Normalisation ────────────────
  {
    id: 'norm-q1',
    lessonId: 'normalization',
    question: 'Quel est l\'objectif de la normalisation des états financiers ?',
    options: [
      'Augmenter le résultat net pour convaincre les investisseurs',
      'Isoler la performance récurrente en retraitant les éléments non récurrents',
      'Convertir les comptes en normes US GAAP',
      'Réduire la charge fiscale de l\'entreprise',
    ],
    correctIndex: 1,
    explanation:
      'La normalisation vise à montrer la performance sous-jacente et récurrente en excluant les éléments exceptionnels (restructurations, cessions, litiges) qui ne se reproduiront pas.',
    difficulty: 'easy',
  },
  {
    id: 'norm-q2',
    lessonId: 'normalization',
    question: 'La stock-based compensation (SBC) est un sujet de débat en normalisation car :',
    options: [
      'Elle est interdite en IFRS',
      'Elle est non-cash mais dilue réellement les actionnaires',
      'Elle n\'apparaît pas dans les comptes',
      'Elle est toujours négligeable',
    ],
    correctIndex: 1,
    explanation:
      'La SBC est une charge non-cash (pas de sortie de trésorerie) mais elle dilue les actionnaires via l\'émission de nouvelles actions. Certains analystes l\'excluent de l\'EBITDA, d\'autres l\'incluent. Le débat est vif en tech.',
    difficulty: 'hard',
  },
  {
    id: 'norm-q3',
    lessonId: 'normalization',
    question: 'Pour une entreprise cyclique, quel EBITDA doit-on utiliser dans les multiples ?',
    options: [
      'L\'EBITDA du dernier trimestre annualisé',
      'L\'EBITDA « mid-cycle » (milieu de cycle)',
      'L\'EBITDA le plus élevé des 5 dernières années',
      'L\'EBITDA le plus bas des 5 dernières années',
    ],
    correctIndex: 1,
    explanation:
      'Pour les entreprises cycliques, utiliser l\'EBITDA du haut de cycle sous-valorise (multiple bas × EBITDA élevé) et du bas de cycle surestime (multiple élevé × EBITDA bas). L\'EBITDA mid-cycle normalise le cycle.',
    difficulty: 'medium',
  },
  {
    id: 'norm-q4',
    lessonId: 'normalization',
    question: 'Renault a un EBITDA de 7,5 Md€ incluant +0,8 Md€ de gain sur cession. L\'EBITDA normalisé est :',
    options: ['8,3 Md€', '7,5 Md€', '6,7 Md€', '0,8 Md€'],
    correctIndex: 2,
    explanation:
      'EBITDA normalisé = 7,5 - 0,8 (gain sur cession non récurrent) = 6,7 Md€. On exclut les éléments positifs non récurrents aussi bien que les négatifs pour refléter la performance sous-jacente.',
    difficulty: 'medium',
  },
  {
    id: 'norm-q5',
    lessonId: 'normalization',
    question: 'Pourquoi IFRS 16 complique-t-il la comparabilité de l\'EBITDA ?',
    options: [
      'Parce qu\'IFRS 16 supprime l\'EBITDA du compte de résultat',
      'Parce que les loyers capitalisés gonflent l\'EBITDA (les loyers ne sont plus une charge opérationnelle)',
      'Parce qu\'IFRS 16 ne s\'applique qu\'aux entreprises américaines',
      'Parce qu\'IFRS 16 change la méthode de calcul des amortissements',
    ],
    correctIndex: 1,
    explanation:
      'Avant IFRS 16, les loyers étaient une charge opérationnelle qui réduisait l\'EBITDA. Avec IFRS 16, ils sont remplacés par un amortissement + intérêts (sous l\'EBITDA). L\'EBITDA est donc mécaniquement plus élevé.',
    difficulty: 'hard',
  },

  // ─── Lesson 19 : Valorisation sectorielle ─────
  {
    id: 'sector-q1',
    lessonId: 'sector-valuation',
    question: 'Quel multiple utilise-t-on principalement pour valoriser les banques ?',
    options: [
      'EV/EBITDA',
      'EV/Revenue',
      'P/B (Price-to-Book)',
      'EV/EBIT',
    ],
    correctIndex: 2,
    explanation:
      'Les banques s\'évaluent en P/B car leur « dette » (dépôts) est leur matière première, rendant l\'EV non pertinent. Un P/B > 1 signifie que la banque crée de la valeur au-delà de ses fonds propres.',
    difficulty: 'medium',
  },
  {
    id: 'sector-q2',
    lessonId: 'sector-valuation',
    question: 'Qu\'est-ce que la « Rule of 40 » en SaaS ?',
    options: [
      'Le CA doit être supérieur à 40 M€',
      'Taux de croissance du CA + Marge EBITDA ≥ 40 %',
      'Le P/E ne doit pas dépasser 40x',
      'Le churn rate doit être inférieur à 40 %',
    ],
    correctIndex: 1,
    explanation:
      'La Rule of 40 dit qu\'une bonne société SaaS a la somme de son taux de croissance et de sa marge EBITDA ≥ 40 %. Ex : 30 % de croissance + 10 % de marge = 40 %. Cela équilibre croissance et profitabilité.',
    difficulty: 'medium',
  },
  {
    id: 'sector-q3',
    lessonId: 'sector-valuation',
    question: 'Comment valorise-t-on une foncière (REIT) ?',
    options: [
      'Par un DCF classique sur les FCFF',
      'Par la NAV (somme des valeurs des immeubles - dette nette) et le FFO',
      'Par l\'EV/EBITDA uniquement',
      'Par le PEG ratio',
    ],
    correctIndex: 1,
    explanation:
      'Les foncières s\'évaluent par la NAV (Net Asset Value = valeur de marché des immeubles - dette nette) et le FFO (Funds From Operations), qui exclut les amortissements immobiliers non pertinents.',
    difficulty: 'medium',
  },
  {
    id: 'sector-q4',
    lessonId: 'sector-valuation',
    question: 'Un P/B de 0,6x pour BNP Paribas signifie :',
    options: [
      'La banque est surévaluée',
      'Le marché valorise la banque à 60 % de ses fonds propres comptables (décote)',
      'La banque a un ROE de 60 %',
      'La dette de la banque est 0,6x ses fonds propres',
    ],
    correctIndex: 1,
    explanation:
      'Un P/B de 0,6x signifie que le marché estime que les fonds propres comptables de la banque valent seulement 60 % de leur valeur au bilan. Cela reflète des doutes sur la qualité des actifs ou la rentabilité future.',
    difficulty: 'hard',
  },
  {
    id: 'sector-q5',
    lessonId: 'sector-valuation',
    question: 'Qu\'est-ce que le rNPV utilisé en pharma ?',
    options: [
      'Le ratio net des provisions',
      'La risk-adjusted Net Present Value (NPV ajustée de la probabilité de succès des médicaments)',
      'Le rendement net des prix de vente',
      'La valeur nette pondérée du pipeline',
    ],
    correctIndex: 1,
    explanation:
      'Le rNPV (risk-adjusted NPV) valorise chaque médicament du pipeline en multipliant son DCF par la probabilité de succès clinique et réglementaire. Un médicament en Phase I a ~10 % de chances d\'arriver au marché.',
    difficulty: 'hard',
  },

  // ─── Lesson 20 : Sensitivity Analysis ─────────
  {
    id: 'sensi-q1',
    lessonId: 'sensitivity-analysis',
    question: 'Qu\'est-ce qu\'une sensitivity table dans un DCF ?',
    options: [
      'Un tableau comparant les résultats nets sur 10 ans',
      'Un tableau à double entrée montrant la valorisation selon différentes hypothèses de WACC et g',
      'Un tableau des cours de bourse historiques',
      'Un tableau des flux de trésorerie par division',
    ],
    correctIndex: 1,
    explanation:
      'La sensitivity table croise deux variables clés (typiquement WACC en colonnes et g en lignes) pour montrer comment la valorisation varie selon les hypothèses. Chaque cellule = un prix par action.',
    difficulty: 'easy',
  },
  {
    id: 'sensi-q2',
    lessonId: 'sensitivity-analysis',
    question: 'Quelles sont les deux variables qui impactent le plus la valorisation DCF ?',
    options: [
      'Le chiffre d\'affaires et le nombre d\'employés',
      'Le WACC et le taux de croissance terminal (g)',
      'Le taux d\'impôt et le taux de change',
      'Le BFR et les amortissements',
    ],
    correctIndex: 1,
    explanation:
      'Le WACC et le g impactent le plus car ils déterminent la valeur terminale, qui représente 60-80 % de l\'EV. Une variation de 0,5 % sur l\'un ou l\'autre modifie la valorisation de 15-20 %.',
    difficulty: 'medium',
  },
  {
    id: 'sensi-q3',
    lessonId: 'sensitivity-analysis',
    question: 'Une variation de 0,5 % du WACC peut modifier la valorisation de :',
    options: ['1-2 %', '5-8 %', '15-20 %', '50-60 %'],
    correctIndex: 2,
    explanation:
      'Le DCF est très sensible au WACC car il affecte l\'actualisation de TOUS les flux, y compris la valeur terminale. Une variation de 0,5 % du WACC modifie typiquement la valorisation de 15-20 %.',
    difficulty: 'medium',
  },
  {
    id: 'sensi-q4',
    lessonId: 'sensitivity-analysis',
    question: 'Quelle plage de variation est réaliste pour le WACC dans une sensitivity table ?',
    options: [
      '±0,1 %',
      '±1-2 %',
      '±5-10 %',
      '±20 %',
    ],
    correctIndex: 1,
    explanation:
      'Une variation de ±1-2 % autour du WACC central est réaliste. ±0,1 % est trop étroit pour révéler la sensibilité, et ±5-10 % donnerait des scénarios irréalistes (un WACC passant de 9 % à 19 %).',
    difficulty: 'medium',
  },
  {
    id: 'sensi-q5',
    lessonId: 'sensitivity-analysis',
    question: 'Pourquoi l\'analyse de sensibilité est-elle systématiquement incluse dans les pitch books ?',
    options: [
      'Parce que la loi l\'exige',
      'Parce qu\'elle montre au client l\'impact de ses hypothèses et la robustesse de la valorisation',
      'Parce qu\'elle est facile à calculer',
      'Parce qu\'elle remplace le DCF',
    ],
    correctIndex: 1,
    explanation:
      'La sensibilité permet au client (et au comité d\'investissement) de comprendre l\'impact des hypothèses sur la valorisation. Elle renforce la crédibilité de l\'analyse en montrant la transparence.',
    difficulty: 'easy',
  },

  // ─── Lesson 21 : Scenario Analysis ────────────
  {
    id: 'scenario-q1',
    lessonId: 'scenario-analysis',
    question: 'Quelle est la différence entre l\'analyse de sensibilité et l\'analyse de scénarios ?',
    options: [
      'Il n\'y a aucune différence',
      'La sensibilité fait varier un paramètre à la fois ; le scénario modifie tout le narratif de manière cohérente',
      'La sensibilité est qualitative, le scénario est quantitatif',
      'La sensibilité utilise le DCF, le scénario utilise les multiples',
    ],
    correctIndex: 1,
    explanation:
      'La sensibilité isole l\'impact d\'une variable. Le scénario construit une « histoire » cohérente (récession, boom, etc.) qui modifie simultanément croissance, marges, CAPEX, BFR et WACC.',
    difficulty: 'medium',
  },
  {
    id: 'scenario-q2',
    lessonId: 'scenario-analysis',
    question: 'Dans une analyse standard, combien de scénarios construit-on minimum ?',
    options: [
      '1 (le scénario central)',
      '2 (haut et bas)',
      '3 (Bear, Base, Bull)',
      '10 (un par année de projection)',
    ],
    correctIndex: 2,
    explanation:
      'On construit au minimum 3 scénarios : Bear (pessimiste), Base (central/consensus) et Bull (optimiste). Certains ajoutent un scénario « stress » ou « catastrophe » pour le downside extrême.',
    difficulty: 'easy',
  },
  {
    id: 'scenario-q3',
    lessonId: 'scenario-analysis',
    question: 'Bear (25 %) = 5 €, Base (50 %) = 12 €, Bull (25 %) = 18 €. Valeur attendue = ?',
    options: ['11,75 €', '12 €', '35 €', '8,75 €'],
    correctIndex: 0,
    explanation:
      'Valeur attendue = 0,25 × 5 + 0,50 × 12 + 0,25 × 18 = 1,25 + 6 + 4,5 = 11,75 €. La pondération par les probabilités donne une espérance mathématique.',
    difficulty: 'medium',
  },
  {
    id: 'scenario-q4',
    lessonId: 'scenario-analysis',
    question: 'Pour quels types d\'entreprises l\'analyse de scénarios est-elle particulièrement pertinente ?',
    options: [
      'Les entreprises stables avec des revenus récurrents',
      'Les entreprises cycliques, à fort levier opérationnel ou en situation spéciale',
      'Uniquement les startups',
      'Uniquement les banques',
    ],
    correctIndex: 1,
    explanation:
      'Les entreprises cycliques (auto, matières premières), à fort levier opérationnel (compagnies aériennes) ou en situation spéciale (restructuration, M&A) bénéficient le plus d\'une analyse de scénarios.',
    difficulty: 'medium',
  },
  {
    id: 'scenario-q5',
    lessonId: 'scenario-analysis',
    question: 'Quelle est la pondération typique des scénarios Bear / Base / Bull ?',
    options: [
      '10 % / 80 % / 10 %',
      '25 % / 50 % / 25 %',
      '33 % / 34 % / 33 %',
      '50 % / 25 % / 25 %',
    ],
    correctIndex: 1,
    explanation:
      'La pondération typique est 25 % / 50 % / 25 %, reflétant le fait que le scénario central est le plus probable. Mais les pondérations peuvent être ajustées selon le contexte.',
    difficulty: 'easy',
  },

  // ─── Lesson 22 : SOTP ────────────────────────
  {
    id: 'sotp-q1',
    lessonId: 'sotp',
    question: 'Qu\'est-ce que le Sum-of-the-Parts (SOTP) ?',
    options: [
      'Une méthode qui additionne les revenus de chaque division',
      'Une méthode qui valorise chaque division séparément puis les additionne',
      'Une méthode qui divise l\'EV par le nombre de divisions',
      'Une méthode de consolidation comptable',
    ],
    correctIndex: 1,
    explanation:
      'Le SOTP valorise chaque division d\'un conglomérat individuellement (avec les multiples de ses peers « purs ») puis somme les EV des divisions pour obtenir l\'EV du groupe.',
    difficulty: 'easy',
  },
  {
    id: 'sotp-q2',
    lessonId: 'sotp',
    question: 'Qu\'est-ce que le « conglomerate discount » ?',
    options: [
      'La réduction offerte par les conglomérats à leurs clients',
      'La décote entre la somme des parties et la capitalisation boursière du conglomérat',
      'La remise sur le coût de la dette des grands groupes',
      'La différence entre le P/E et l\'EV/EBITDA',
    ],
    correctIndex: 1,
    explanation:
      'Le conglomerate discount (10-25 %) est la décote entre le SOTP (valeur théorique des divisions séparées) et la market cap. Il reflète la complexité, l\'allocation de capital sous-optimale et le manque de transparence.',
    difficulty: 'medium',
  },
  {
    id: 'sotp-q3',
    lessonId: 'sotp',
    question: 'Le spin-off d\'UMG par Vivendi avait pour objectif de :',
    options: [
      'Réduire la dette du groupe',
      'Libérer la valeur cachée par le conglomerate discount',
      'Diversifier le portefeuille de Vivendi',
      'Augmenter les salaires du management',
    ],
    correctIndex: 1,
    explanation:
      'Vivendi se traitait avec une décote de ~24 % par rapport à son SOTP. Le spin-off d\'UMG (cotation séparée) a permis de supprimer cette décote et de « libérer » la valeur pour les actionnaires.',
    difficulty: 'hard',
  },
  {
    id: 'sotp-q4',
    lessonId: 'sotp',
    question: 'Dans un SOTP, comment traite-t-on les coûts du siège (holding) ?',
    options: [
      'On les ignore car ils sont négligeables',
      'On les répartit proportionnellement entre les divisions',
      'On les soustrait de l\'EV totale comme un poste négatif',
      'On les ajoute aux capitaux propres',
    ],
    correctIndex: 2,
    explanation:
      'Les coûts du siège (direction générale, fonctions centrales non allouées) sont un poste négatif dans le SOTP : EV groupe = Σ EV(divisions) - Coûts du siège capitalisés.',
    difficulty: 'medium',
  },
  {
    id: 'sotp-q5',
    lessonId: 'sotp',
    question: 'Quelle norme IFRS oblige les entreprises à publier l\'information segmentée nécessaire au SOTP ?',
    options: [
      'IFRS 9 (instruments financiers)',
      'IFRS 16 (contrats de location)',
      'IFRS 8 (segments opérationnels)',
      'IAS 36 (dépréciation d\'actifs)',
    ],
    correctIndex: 2,
    explanation:
      'IFRS 8 (Operating Segments) oblige les entreprises à publier le CA, le résultat opérationnel et les actifs par segment. Cette information est indispensable pour réaliser un SOTP.',
    difficulty: 'hard',
  },

  // ─── Lesson 23 : Cas pratique LVMH ────────────
  {
    id: 'lvmh-q1',
    lessonId: 'lvmh-case',
    question: 'Quelle division de LVMH représente environ 50 % du résultat opérationnel ?',
    options: [
      'Vins & Spiritueux',
      'Parfums & Cosmétiques',
      'Mode & Maroquinerie (Louis Vuitton, Dior)',
      'Distribution sélective (Sephora)',
    ],
    correctIndex: 2,
    explanation:
      'La division Mode & Maroquinerie (incluant Louis Vuitton et Dior) génère environ 50 % du résultat opérationnel de LVMH. C\'est le moteur de profitabilité du groupe avec des marges >30 %.',
    difficulty: 'easy',
  },
  {
    id: 'lvmh-q2',
    lessonId: 'lvmh-case',
    question: 'Pourquoi un ROIC de ~20 % justifie-t-il des multiples élevés pour LVMH ?',
    options: [
      'Parce que LVMH a beaucoup de dette',
      'Parce qu\'un ROIC >> WACC signifie une forte création de valeur, que le marché récompense',
      'Parce que LVMH est la plus grande capitalisation française',
      'Parce que les multiples élevés sont normaux pour toutes les entreprises',
    ],
    correctIndex: 1,
    explanation:
      'Un ROIC de 20 % vs un WACC de ~8 % signifie que chaque euro investi crée 12 centimes de valeur. Le marché attribue des multiples élevés aux entreprises qui créent massivement de la valeur.',
    difficulty: 'medium',
  },
  {
    id: 'lvmh-q3',
    lessonId: 'lvmh-case',
    question: 'LVMH a une dette nette / EBITDA de 0,5x. Cela signifie :',
    options: [
      'LVMH est très endetté',
      'LVMH a une structure financière très conservatrice',
      'LVMH ne peut pas emprunter davantage',
      'LVMH devrait réduire sa dette',
    ],
    correctIndex: 1,
    explanation:
      'Un ratio DN/EBITDA de 0,5x est extrêmement conservateur (la norme est 1-3x). LVMH pourrait facilement s\'endetter davantage pour financer des acquisitions, ce qui constitue une « puissance de feu » importante.',
    difficulty: 'medium',
  },
  {
    id: 'lvmh-q4',
    lessonId: 'lvmh-case',
    question: 'Pourquoi le SOTP est-il particulièrement pertinent pour LVMH ?',
    options: [
      'Parce que LVMH n\'est pas coté en bourse',
      'Parce que les divisions (luxe, vins, distribution) ont des profils et des multiples sectoriels très différents',
      'Parce que LVMH n\'a qu\'une seule division',
      'Parce que le DCF ne fonctionne pas pour le luxe',
    ],
    correctIndex: 1,
    explanation:
      'LVMH est un conglomérat de luxe avec des divisions aux profils très différents : Mode (marges >30 %, multiple >20x), Vins (marges ~25 %, multiple 12x), Distribution/Sephora (marges ~10 %, multiple 14x). Le SOTP capture ces différences.',
    difficulty: 'hard',
  },
  {
    id: 'lvmh-q5',
    lessonId: 'lvmh-case',
    question: 'EV LVMH = 400 Md€, dette nette = 12 Md€, 500 M d\'actions. Prix par action implicite = ?',
    options: ['800 €', '776 €', '400 €', '388 €'],
    correctIndex: 1,
    explanation:
      'Equity Value = EV - Dette nette = 400 - 12 = 388 Md€. Prix/action = 388 000 / 500 = 776 €. Le bridge EV → Equity est l\'étape finale de toute valorisation.',
    difficulty: 'medium',
  },

  // ─── Lesson 24 : Examen final ─────────────────
  {
    id: 'exam-q1',
    lessonId: 'final-exam',
    question: 'Quelle affirmation est FAUSSE concernant le bilan ?',
    options: [
      'Le bilan est une photographie à un instant donné',
      'Actif = Capitaux Propres + Passif',
      'Le bilan mesure la performance sur une période',
      'Les actifs courants ont une durée de vie < 1 an',
    ],
    correctIndex: 2,
    explanation:
      'Le bilan est une photographie à un instant t, pas une mesure de performance. C\'est le compte de résultat qui mesure la performance sur une période (flux). Le bilan est un stock, le P&L est un flux.',
    difficulty: 'easy',
  },
  {
    id: 'exam-q2',
    lessonId: 'final-exam',
    question: 'Une entreprise a : CA = 500 M€, EBITDA = 100 M€, D&A = 30 M€, Intérêts = 20 M€, IS = 25 %. Résultat net = ?',
    options: ['37,5 M€', '50 M€', '75 M€', '100 M€'],
    correctIndex: 0,
    explanation:
      'EBIT = EBITDA - D&A = 100 - 30 = 70. Résultat avant impôt = EBIT - Intérêts = 70 - 20 = 50. Résultat net = 50 × (1 - 25 %) = 37,5 M€.',
    difficulty: 'medium',
  },
  {
    id: 'exam-q3',
    lessonId: 'final-exam',
    question: 'FCFF = 100 M€ année 1, croissance 5 %/an sur 5 ans, WACC = 9 %, g = 2 %. TV par Gordon Growth = ?',
    options: [
      'TV = 128 × 1,02 / (0,09 - 0,02) = 1 862 M€',
      'TV = 100 / 0,07 = 1 429 M€',
      'TV = 128 / 0,09 = 1 422 M€',
      'TV = 100 × 1,02 / 0,02 = 5 100 M€',
    ],
    correctIndex: 0,
    explanation:
      'FCFF année 5 = 100 × 1,05^4 = 121,6 → FCFF année 6 = 121,6 × 1,05 = 127,6 ≈ 128. TV = 128 × 1,02 / (0,09 - 0,02) = 130,6 / 0,07 = 1 862 M€.',
    difficulty: 'hard',
  },
  {
    id: 'exam-q4',
    lessonId: 'final-exam',
    question: 'Quelle combinaison de méthodes est standard pour une valorisation M&A ?',
    options: [
      'Analyse technique + P/E trailing',
      'DCF + Comparable Companies + Precedent Transactions',
      'NAV + FFO + Dividend Discount Model',
      'Uniquement un DCF',
    ],
    correctIndex: 1,
    explanation:
      'La « trilogie » standard en M&A est DCF (valeur intrinsèque) + Comps (valeur de marché) + Precs (valeur transactionnelle). Les trois méthodes sont présentées dans un Football Field.',
    difficulty: 'easy',
  },
  {
    id: 'exam-q5',
    lessonId: 'final-exam',
    question: 'Société X : EBITDA = 200 M€, EV/EBITDA peers = 10x, dette nette = 400 M€, 100 M actions. Prix par action implicite = ?',
    options: ['20 €', '16 €', '10 €', '24 €'],
    correctIndex: 1,
    explanation:
      'EV = 200 × 10 = 2 000 M€. Equity Value = 2 000 - 400 = 1 600 M€. Prix/action = 1 600 / 100 = 16 €. C\'est la chaîne complète : multiple → EV → bridge → prix.',
    difficulty: 'medium',
  },
];
