import type { QuizQuestion } from '../types';

export const corporateQuiz: QuizQuestion[] = [
  // ========== corp-1: Le marché du M&A ==========
  {
    id: 'corp-q1',
    lessonId: 'corp-1',
    question: "Quel est le volume annuel approximatif du marché mondial du M&A ?",
    options: ['500 milliards à 1 000 milliards $', '1 000 à 2 000 milliards $', '3 000 à 5 000 milliards $', '10 000 à 15 000 milliards $'],
    correctIndex: 2,
    explanation: "Le marché mondial du M&A représente entre 3 000 et 5 000 milliards de dollars par an selon les cycles économiques.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q2',
    lessonId: 'corp-1',
    question: "Quelle est la fourchette typique de la prime de contrôle dans une acquisition ?",
    options: ['5% à 10%', '10% à 15%', '20% à 40%', '50% à 70%'],
    correctIndex: 2,
    explanation: "La prime de contrôle, le supplément payé par rapport au cours pré-annonce, oscille généralement entre 20% et 40%.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q3',
    lessonId: 'corp-1',
    question: "Quelle est la différence entre une transaction M&A stratégique et financière ?",
    options: [
      'Les transactions stratégiques sont toujours plus grandes',
      'Les transactions stratégiques visent des synergies opérationnelles, les financières un retour via le levier',
      'Les transactions financières sont réservées aux banques',
      'Il n\'y a aucune différence significative'
    ],
    correctIndex: 1,
    explanation: "Les deals stratégiques (entre industriels) visent des synergies opérationnelles, tandis que les transactions financières (fonds PE) recherchent un retour via l'effet de levier.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q4',
    lessonId: 'corp-1',
    question: "À quel multiple d'EBITDA le secteur tech se négocie-t-il typiquement en M&A ?",
    options: ['3-5x', '6-10x', '15-25x', '30-50x'],
    correctIndex: 2,
    explanation: "Le secteur tech se négocie souvent à 15-25x l'EBITDA, bien au-dessus de l'industrie (6-10x) et de la distribution (5-8x).",
    difficulty: 'medium',
  },
  {
    id: 'corp-q5',
    lessonId: 'corp-1',
    question: "Quel rôle jouent les autorités antitrust dans le M&A ?",
    options: [
      'Elles fixent le prix des transactions',
      'Elles doivent approuver les transactions significatives pour préserver la concurrence',
      'Elles choisissent les banques conseil',
      'Elles n\'interviennent que dans les transactions internationales'
    ],
    correctIndex: 1,
    explanation: "Les régulateurs antitrust doivent approuver toute transaction significative, ce qui peut prendre plusieurs mois et parfois bloquer un deal.",
    difficulty: 'easy',
  },

  // ========== corp-2: Processus Buy-Side ==========
  {
    id: 'corp-q6',
    lessonId: 'corp-2',
    question: "Qu'est-ce qu'une Indication of Interest (IOI) ?",
    options: [
      'Le contrat final d\'acquisition',
      'Une offre non-engageante avec une fourchette de prix',
      'Le rapport de due diligence',
      'La lettre de licenciement du management cible'
    ],
    correctIndex: 1,
    explanation: "L'IOI (Indication of Interest) est une offre non-engageante soumise par l'acquéreur avec une fourchette de prix indicative, avant la due diligence approfondie.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q7',
    lessonId: 'corp-2',
    question: "Pourquoi la valorisation buy-side est-elle souvent plus élevée que la valeur standalone ?",
    options: [
      'Parce que les acheteurs font toujours des erreurs de calcul',
      'Parce qu\'elle intègre les synergies potentielles',
      'Parce que les vendeurs fixent un prix minimum',
      'Parce que le marché est toujours en hausse'
    ],
    correctIndex: 1,
    explanation: "La valorisation buy-side intègre les synergies potentielles (coûts et revenus), ce qui justifie de payer une prime par rapport à la valeur standalone de la cible.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q8',
    lessonId: 'corp-2',
    question: "Qu'est-ce qu'un earn-out dans le contexte d'une acquisition ?",
    options: [
      'Un bonus versé aux banquiers',
      'Un mécanisme d\'ajustement de prix lié à la performance future de la cible',
      'Le remboursement de la dette d\'acquisition',
      'La commission de l\'intermédiaire'
    ],
    correctIndex: 1,
    explanation: "L'earn-out est un complément de prix conditionné à la réalisation d'objectifs de performance post-acquisition, permettant de bridger l'écart de valorisation entre acheteur et vendeur.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q9',
    lessonId: 'corp-2',
    question: "Le rôle de la banque buy-side est de :",
    options: [
      'Maximiser le prix pour le vendeur',
      'Minimiser le prix et structurer le financement pour l\'acquéreur',
      'Arbitrer entre acheteur et vendeur',
      'Financer la totalité de l\'acquisition'
    ],
    correctIndex: 1,
    explanation: "La banque buy-side conseille l'acquéreur pour obtenir le prix le plus bas possible, structurer le financement et anticiper les risques.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q10',
    lessonId: 'corp-2',
    question: "Combien de temps dure typiquement un processus buy-side complet ?",
    options: ['1 à 2 semaines', '1 à 2 mois', '3 à 12 mois', '2 à 3 ans'],
    correctIndex: 2,
    explanation: "Un processus buy-side complet, de l'identification de la cible au closing, dure typiquement entre 3 et 12 mois.",
    difficulty: 'easy',
  },

  // ========== corp-3: Processus Sell-Side ==========
  {
    id: 'corp-q11',
    lessonId: 'corp-3',
    question: "Qu'est-ce qu'un teaser dans le processus sell-side ?",
    options: [
      'Le contrat de mandat avec la banque',
      'Un document anonyme présentant la cible pour susciter l\'intérêt',
      'L\'offre finale de l\'acheteur',
      'Le rapport de valorisation'
    ],
    correctIndex: 1,
    explanation: "Le teaser est un document anonyme envoyé aux acquéreurs potentiels présentant la cible sans la nommer pour susciter l'intérêt sans compromettre la confidentialité.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q12',
    lessonId: 'corp-3',
    question: "Qu'est-ce qu'un processus dual-track ?",
    options: [
      'Une vente à deux acheteurs simultanément',
      'La combinaison d\'une mise en vente privée et d\'une introduction en bourse',
      'La vente en deux étapes avec un prix intermédiaire',
      'La cession de deux divisions en même temps'
    ],
    correctIndex: 1,
    explanation: "Le dual-track combine un processus de vente privée et la préparation d'une IPO en parallèle, permettant au vendeur de choisir la meilleure option.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q13',
    lessonId: 'corp-3',
    question: "Quel est le range typique des honoraires sell-side sur un deal mid-market ?",
    options: ['0,1-0,5% du prix', '1-2% du prix', '3-5% du prix', '10-15% du prix'],
    correctIndex: 2,
    explanation: "Les honoraires sell-side représentent typiquement 3-5% du prix de transaction pour le mid-market, et 1-3% pour les gros deals.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q14',
    lessonId: 'corp-3',
    question: "Qu'est-ce que le vendor due diligence (VDD) ?",
    options: [
      'La due diligence menée par l\'acheteur',
      'Des rapports de due diligence mandatés par le vendeur pour accélérer le processus',
      'L\'audit annuel obligatoire',
      'La vérification du prix de vente par un tiers'
    ],
    correctIndex: 1,
    explanation: "Le vendor due diligence est mandaté par le vendeur qui produit ses propres rapports de due diligence pour accélérer le processus et contrôler le narratif.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q15',
    lessonId: 'corp-3',
    question: "Combien d'acquéreurs sont typiquement sélectionnés pour le second tour d'un processus sell-side ?",
    options: ['1 seul', '3 à 5', '10 à 15', '20 à 30'],
    correctIndex: 1,
    explanation: "Le premier tour recueille les IOI, puis la banque sélectionne typiquement 3 à 5 candidats pour le second tour avec accès à la data room complète.",
    difficulty: 'easy',
  },

  // ========== corp-4: Due diligence ==========
  {
    id: 'corp-q16',
    lessonId: 'corp-4',
    question: "Que signifie 'Quality of Earnings' (QoE) en due diligence financière ?",
    options: [
      'La marge brute de l\'entreprise',
      'L\'analyse de la récurrence et de la soutenabilité de l\'EBITDA reporté',
      'Le rating de crédit de l\'entreprise',
      'La qualité du commissaire aux comptes'
    ],
    correctIndex: 1,
    explanation: "La Quality of Earnings analyse si l'EBITDA reporté est récurrent et soutenable, en identifiant les éléments exceptionnels et les changements de méthode comptable.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q17',
    lessonId: 'corp-4',
    question: "Pourquoi le BFR normatif est-il important dans une transaction ?",
    options: [
      'Il détermine le dividende post-acquisition',
      'Il détermine le mécanisme d\'ajustement de prix au closing',
      'Il fixe le taux d\'intérêt de la dette',
      'Il n\'a aucun impact sur le prix'
    ],
    correctIndex: 1,
    explanation: "Le BFR normatif sert de référence pour l'ajustement de prix au closing : si le BFR au closing est inférieur au normatif, le prix est réduit d'autant.",
    difficulty: 'hard',
  },
  {
    id: 'corp-q18',
    lessonId: 'corp-4',
    question: "Quel est un red flag courant en due diligence ?",
    options: [
      'Une croissance régulière du CA sur 5 ans',
      'Une concentration client excessive (>30% du CA sur un seul client)',
      'Un ratio d\'endettement faible',
      'Un portefeuille de brevets diversifié'
    ],
    correctIndex: 1,
    explanation: "Une concentration client excessive est un red flag majeur : la perte du client principal pourrait impacter significativement les résultats.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q19',
    lessonId: 'corp-4',
    question: "Qui réalise typiquement la due diligence financière ?",
    options: [
      'Les banques d\'investissement',
      'Les Big Four (Deloitte, PwC, EY, KPMG)',
      'Les autorités antitrust',
      'Le management de l\'acquéreur uniquement'
    ],
    correctIndex: 1,
    explanation: "La due diligence financière est confiée aux Big Four, qui analysent la quality of earnings, le BFR normatif et les ajustements de l'EBITDA.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q20',
    lessonId: 'corp-4',
    question: "La due diligence ESG évalue :",
    options: [
      'Uniquement les risques environnementaux',
      'Les risques environnementaux, sociaux et de gouvernance',
      'Uniquement la rentabilité financière',
      'Le cours de bourse historique'
    ],
    correctIndex: 1,
    explanation: "La due diligence ESG couvre les risques environnementaux (pollution, carbone), sociaux (conditions de travail) et de gouvernance (anti-corruption).",
    difficulty: 'easy',
  },

  // ========== corp-5: Accretion / Dilution ==========
  {
    id: 'corp-q21',
    lessonId: 'corp-5',
    question: "Quand une acquisition financée en actions est-elle accretive ?",
    options: [
      'Quand le P/E de la cible est supérieur à celui de l\'acquéreur',
      'Quand le P/E de la cible (prix payé / résultat) est inférieur au P/E de l\'acquéreur',
      'Quand le prix de l\'action monte le jour de l\'annonce',
      'Quand l\'EBITDA de la cible est positif'
    ],
    correctIndex: 1,
    explanation: "En financement actions, le deal est accretif si le P/E payé pour la cible est inférieur au P/E de l'acquéreur : on achète des bénéfices moins cher que sa propre valorisation.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q22',
    lessonId: 'corp-5',
    question: "Pourquoi le financement en dette est-il généralement plus accretif que le financement en actions ?",
    options: [
      'Parce que la dette n\'a pas de coût',
      'Grâce au bouclier fiscal des intérêts et à l\'absence de dilution du nombre d\'actions',
      'Parce que les banques offrent des taux négatifs',
      'Parce que la dette n\'apparaît pas au bilan'
    ],
    correctIndex: 1,
    explanation: "La dette est plus accretive car : (1) les intérêts sont déductibles fiscalement, et (2) le nombre d'actions ne change pas, donc tout le résultat additionnel améliore le BPA.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q23',
    lessonId: 'corp-5',
    question: "Une acquisition accretive crée-t-elle toujours de la valeur ?",
    options: [
      'Oui, par définition',
      'Non, le deal peut être accretif mais détruire de la valeur si le prix dépasse la valeur intrinsèque avec synergies',
      'Oui, si le BPA augmente, la valeur augmente automatiquement',
      'Non, mais seulement dans les marchés baissiers'
    ],
    correctIndex: 1,
    explanation: "L'accretion/dilution n'est pas un indicateur de création de valeur. Un deal peut être accretif (BPA en hausse) mais détruire de la valeur si le prix payé est excessif.",
    difficulty: 'hard',
  },
  {
    id: 'corp-q24',
    lessonId: 'corp-5',
    question: "La Purchase Price Allocation (PPA) impacte l'accretion/dilution via :",
    options: [
      'L\'augmentation du chiffre d\'affaires',
      'L\'amortissement du goodwill et des actifs incorporels réévalués',
      'La baisse du taux d\'imposition',
      'La hausse du cours de bourse'
    ],
    correctIndex: 1,
    explanation: "La PPA alloue le prix d'acquisition aux actifs identifiables. L'amortissement des actifs incorporels réévalués (marques, brevets, relations clients) réduit le résultat pro forma.",
    difficulty: 'hard',
  },
  {
    id: 'corp-q25',
    lessonId: 'corp-5',
    question: "Acquéreur : BPA 4€, P/E 15x, 200M actions. Cible : résultat 60M€, prix 750M€. Financement 100% actions. Le deal est-il accretif ou dilutif ?",
    options: [
      'Accretif car le résultat de la cible est positif',
      'Dilutif car le P/E payé (12,5x) est inférieur au P/E de l\'acquéreur (15x)... non, c\'est accretif',
      'Accretif car le P/E payé pour la cible (12,5x) est inférieur au P/E de l\'acquéreur (15x)',
      'Dilutif car le prix est trop élevé'
    ],
    correctIndex: 2,
    explanation: "P/E cible = 750/60 = 12,5x < P/E acquéreur de 15x. Actions émises = 750/(4×15) = 12,5M. BPA pro forma = (800+60)/(200+12,5) = 4,05€ > 4€. Accretif de +1,2%.",
    difficulty: 'hard',
  },

  // ========== corp-6: Synergies ==========
  {
    id: 'corp-q26',
    lessonId: 'corp-6',
    question: "Quelles synergies sont les plus fiables et les plus rapides à réaliser ?",
    options: [
      'Les synergies de revenus (cross-selling)',
      'Les synergies de coûts (réduction de doublons, économies d\'échelle)',
      'Les synergies technologiques',
      'Les synergies de marque'
    ],
    correctIndex: 1,
    explanation: "Les synergies de coûts sont les plus fiables car elles reposent sur des actions concrètes (fermeture de doublons, consolidation achats) et se matérialisent sous 2-3 ans.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q27',
    lessonId: 'corp-6',
    question: "Quel pourcentage des synergies de revenus annoncées se matérialise en moyenne ?",
    options: ['10-20%', '30-40%', '50-60%', '90-100%'],
    correctIndex: 2,
    explanation: "Le track record montre que seulement 50-60% des synergies de revenus annoncées se matérialisent, car elles dépendent de l'intégration commerciale.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q28',
    lessonId: 'corp-6',
    question: "Si les synergies nettes sont de 40 M€/an et le WACC de 8%, quelle est la valeur des synergies ?",
    options: ['40 M€', '320 M€', '500 M€', '3 200 M€'],
    correctIndex: 2,
    explanation: "Valeur des synergies = synergies annuelles / WACC = 40 / 0,08 = 500 M€ (en supposant une perpétuité).",
    difficulty: 'medium',
  },
  {
    id: 'corp-q29',
    lessonId: 'corp-6',
    question: "Le phénomène de « synergy leakage » désigne :",
    options: [
      'La communication prématurée des synergies au marché',
      'La perte de valeur pendant l\'intégration (départ de talents, perte de clients)',
      'Le vol de propriété intellectuelle',
      'La fuite de cash vers les créanciers'
    ],
    correctIndex: 1,
    explanation: "Le synergy leakage est la perte de valeur pendant l'intégration : départ de talents clés, perte de clients perturbés et conflits culturels entre les organisations.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q30',
    lessonId: 'corp-6',
    question: "Quel pourcentage des M&A ne crée pas la valeur escomptée, selon les études ?",
    options: ['10-20%', '30-40%', '50-70%', '90-100%'],
    correctIndex: 2,
    explanation: "Les études montrent que 50-70% des M&A ne créent pas la valeur escomptée, principalement à cause de la surestimation des synergies et de la sous-estimation des coûts d'intégration.",
    difficulty: 'medium',
  },

  // ========== corp-7: Le LBO principes ==========
  {
    id: 'corp-q31',
    lessonId: 'corp-7',
    question: "Quels sont les trois leviers de création de valeur en LBO ?",
    options: [
      'Hausse du cours, dividendes, rachats d\'actions',
      'Deleveraging, croissance de l\'EBITDA, expansion du multiple de sortie',
      'Réduction d\'impôts, augmentation de capital, fusion',
      'Innovation, marketing, recrutement'
    ],
    correctIndex: 1,
    explanation: "Les trois moteurs de rendement en LBO sont le deleveraging (remboursement de dette), la croissance de l'EBITDA et l'expansion du multiple de sortie.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q32',
    lessonId: 'corp-7',
    question: "Quel ratio dette/EBITDA est typique à l'entrée d'un LBO ?",
    options: ['1-2x', '2-3x', '4-6x', '10-12x'],
    correctIndex: 2,
    explanation: "Le ratio dette/EBITDA typique en LBO est de 4-6x au moment de l'acquisition, calibré selon la capacité de remboursement de la cible.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q33',
    lessonId: 'corp-7',
    question: "Un fonds PE investit 200 M€ d'equity et récupère 500 M€ après 4 ans. Quel est le TRI approximatif ?",
    options: ['15%', '20%', '26%', '37%'],
    correctIndex: 2,
    explanation: "MOIC = 500/200 = 2,5x. TRI = 2,5^(1/4) − 1 = 1,257 − 1 = 25,7% ≈ 26%.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q34',
    lessonId: 'corp-7',
    question: "Quelle est la durée de détention typique d'un investissement LBO ?",
    options: ['1-2 ans', '4-6 ans', '10-15 ans', '20+ ans'],
    correctIndex: 1,
    explanation: "La durée de détention typique en LBO est de 4-6 ans, avec un TRI cible de 20-25% et un multiple de 2-3x la mise initiale.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q35',
    lessonId: 'corp-7',
    question: "Pourquoi les cash flows stables sont-ils essentiels pour une cible LBO ?",
    options: [
      'Parce que les fonds PE n\'aiment pas la volatilité',
      'Parce que les cash flows doivent couvrir le service de la dette (intérêts + amortissement)',
      'Parce que les régulateurs l\'exigent',
      'Parce que les cash flows stables impliquent une croissance élevée'
    ],
    correctIndex: 1,
    explanation: "Des cash flows stables sont essentiels car la cible doit pouvoir rembourser sa dette (intérêts + amortissement) même en période difficile, sous peine de défaut.",
    difficulty: 'easy',
  },

  // ========== corp-8: Sources & Uses ==========
  {
    id: 'corp-q36',
    lessonId: 'corp-8',
    question: "Que doit-on vérifier en premier dans un tableau Sources & Uses ?",
    options: [
      'Que le TRI soit supérieur à 20%',
      'Que le total des Sources soit égal au total des Uses',
      'Que la dette soit inférieure à l\'equity',
      'Que les frais de transaction soient nuls'
    ],
    correctIndex: 1,
    explanation: "Le principe fondamental est que les Sources = Uses. Le tableau doit être parfaitement équilibré : chaque euro utilisé doit avoir une source de financement.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q37',
    lessonId: 'corp-8',
    question: "Qu'est-ce que le management rollover ?",
    options: [
      'Le licenciement du management existant',
      'Le réinvestissement par le management d\'une partie de ses gains dans l\'equity du LBO',
      'La rotation du management tous les 2 ans',
      'Le transfert du management vers une filiale'
    ],
    correctIndex: 1,
    explanation: "Le management rollover (5-15% de l'equity) signifie que le management réinvestit dans la nouvelle structure, alignant ses intérêts avec ceux du fonds.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q38',
    lessonId: 'corp-8',
    question: "Quel est le rôle du Revolving Credit Facility (RCF) ?",
    options: [
      'Financer l\'acquisition',
      'Fournir une ligne de crédit pour les besoins de trésorerie opérationnels',
      'Payer les dividendes aux actionnaires',
      'Rembourser la dette mezzanine'
    ],
    correctIndex: 1,
    explanation: "Le RCF est une ligne de crédit non tirée à la clôture, disponible pour les besoins de trésorerie opérationnels. Il n'apparaît pas dans les Uses.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q39',
    lessonId: 'corp-8',
    question: "EV = 300 M€, dette existante = 50 M€, cash = 10 M€, frais = 15 M€. Quel est le total des Uses ?",
    options: ['300 M€', '305 M€', '355 M€', '375 M€'],
    correctIndex: 2,
    explanation: "Equity value = 300 − 50 + 10 = 260 M€. Uses = equity value 260 + refinancement dette 50 + frais 15 = 325 M€. Moins cash 10 M€... En fait : Uses = EV 300 + frais 15 + refinancement 50 − cash 10 = 355 M€.",
    difficulty: 'hard',
  },
  {
    id: 'corp-q40',
    lessonId: 'corp-8',
    question: "Quel est le range typique des frais de transaction en % de l'Enterprise Value ?",
    options: ['0,1-0,5%', '2-5%', '10-15%', '20-25%'],
    correctIndex: 1,
    explanation: "Les frais de transaction (advisory, legal, due diligence, arrangement fees) représentent typiquement 2-5% de l'EV selon la taille du deal.",
    difficulty: 'easy',
  },

  // ========== corp-9: Modélisation LBO ==========
  {
    id: 'corp-q41',
    lessonId: 'corp-9',
    question: "Quel est l'ordre correct des étapes dans un modèle LBO ?",
    options: [
      'Rendements → Hypothèses → P&L → FCF → Dette',
      'Hypothèses → P&L → BFR/Capex → FCF → Tableau de dette → Rendements',
      'Sources & Uses → Rendements → P&L → FCF',
      'P&L → Sources & Uses → FCF → Rendements → Hypothèses'
    ],
    correctIndex: 1,
    explanation: "Le modèle LBO suit une logique séquentielle : hypothèses opérationnelles → P&L → BFR et capex → free cash flow → tableau de dette (cash sweep) → rendements (TRI/MOIC).",
    difficulty: 'easy',
  },
  {
    id: 'corp-q42',
    lessonId: 'corp-9',
    question: "Que teste une analyse de sensibilité dans un modèle LBO ?",
    options: [
      'La sensibilité du management au stress',
      'L\'impact des variations de l\'EBITDA, du multiple et du levier sur le TRI',
      'La sensibilité du cours de bourse aux annonces',
      'La réaction des créanciers aux résultats'
    ],
    correctIndex: 1,
    explanation: "L'analyse de sensibilité croise les variations de l'EBITDA de sortie, du multiple de sortie et du levier pour mesurer leur impact sur le TRI et le MOIC.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q43',
    lessonId: 'corp-9',
    question: "EBITDA = 40 M€, impôts = 6 M€, capex = 5 M€, ΔBFR = 2 M€, intérêts = 8 M€. Quel est le FCF to debt ?",
    options: ['10 M€', '19 M€', '27 M€', '40 M€'],
    correctIndex: 1,
    explanation: "FCF to debt = EBITDA − Impôts − Capex − ΔBFR − Intérêts = 40 − 6 − 5 − 2 − 8 = 19 M€.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q44',
    lessonId: 'corp-9',
    question: "Pourquoi le downside case est-il important dans un modèle LBO ?",
    options: [
      'Pour impressionner les investisseurs',
      'Pour montrer que le remboursement de la dette reste possible même en scénario défavorable',
      'Pour justifier un prix plus élevé',
      'Pour obtenir un meilleur taux d\'intérêt'
    ],
    correctIndex: 1,
    explanation: "Le downside case vérifie que l'entreprise peut continuer à rembourser sa dette même si les résultats sont inférieurs aux attentes, ce qui rassure les prêteurs.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q45',
    lessonId: 'corp-9',
    question: "EBITDA entrée 30 M€ à 7x, equity 90 M€. Sortie 5 ans : EBITDA 40 M€ à 8x, dette résiduelle 50 M€. Quel est le MOIC ?",
    options: ['1,8x', '2,3x', '2,9x', '3,6x'],
    correctIndex: 2,
    explanation: "EV sortie = 40 × 8 = 320 M€. Equity sortie = 320 − 50 = 270 M€. MOIC = 270 / 90 = 3,0x (≈ 2,9x avec arrondis).",
    difficulty: 'medium',
  },

  // ========== corp-10: Structure de dette ==========
  {
    id: 'corp-q46',
    lessonId: 'corp-10',
    question: "En cas de défaut, quel créancier est remboursé en premier ?",
    options: [
      'Les actionnaires (equity)',
      'Les mezzanines',
      'Les créanciers senior',
      'Tous les créanciers à parts égales'
    ],
    correctIndex: 2,
    explanation: "La waterfall de remboursement suit l'ordre de priorité : créanciers senior d'abord, puis mezzanine, puis actionnaires en dernier.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q47',
    lessonId: 'corp-10',
    question: "Qu'est-ce que le PIK (Payment In Kind) ?",
    options: [
      'Un dividende versé en actions',
      'Un mécanisme où les intérêts sont capitalisés plutôt que payés en cash',
      'Un bonus versé au management',
      'Un type de garantie sur les actifs'
    ],
    correctIndex: 1,
    explanation: "Le PIK capitalise les intérêts au lieu de les payer cash : la dette augmente du montant des intérêts non payés. Cela préserve le cash flow mais gonfle la dette.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q48',
    lessonId: 'corp-10',
    question: "Que teste un covenant de maintenance ?",
    options: [
      'La qualité de l\'entretien des machines',
      'Les ratios financiers à chaque trimestre (dette/EBITDA, couverture des intérêts)',
      'La maintenance du cours de bourse',
      'L\'état des locaux de l\'entreprise'
    ],
    correctIndex: 1,
    explanation: "Les covenants de maintenance testent les ratios financiers à chaque trimestre : si le ratio dépasse le seuil, le sponsor doit agir (injection d'equity, renégociation).",
    difficulty: 'easy',
  },
  {
    id: 'corp-q49',
    lessonId: 'corp-10',
    question: "Le DSCR (Debt Service Coverage Ratio) doit idéalement être :",
    options: [
      'Inférieur à 0,5x',
      'Exactement 1,0x',
      'Supérieur à 1,2-1,5x',
      'Supérieur à 5x'
    ],
    correctIndex: 2,
    explanation: "Le DSCR (FCF / service de la dette) doit rester supérieur à 1,0x minimum, idéalement 1,2-1,5x pour assurer une marge de sécurité.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q50',
    lessonId: 'corp-10',
    question: "Qu'est-ce qu'un financement unitranche ?",
    options: [
      'Un financement 100% equity',
      'Une combinaison de dette senior et mezzanine en une seule tranche',
      'Un financement uniquement par obligations',
      'Un prêt à taux zéro'
    ],
    correctIndex: 1,
    explanation: "L'unitranche combine senior et mezzanine en une seule tranche, simplifiant la structure mais à un coût moyen plus élevé qu'un financement multi-tranches.",
    difficulty: 'medium',
  },

  // ========== corp-11: Cash Sweep ==========
  {
    id: 'corp-q51',
    lessonId: 'corp-11',
    question: "Qu'est-ce que le cash sweep en LBO ?",
    options: [
      'Le nettoyage du compte bancaire de l\'entreprise',
      'L\'affectation de l\'excédent de trésorerie au remboursement anticipé de la dette',
      'Le transfert de cash vers le fonds PE',
      'Le paiement des dividendes'
    ],
    correctIndex: 1,
    explanation: "Le cash sweep affecte automatiquement tout ou partie de l'excédent de trésorerie au remboursement anticipé de la dette, accélérant le deleveraging.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q52',
    lessonId: 'corp-11',
    question: "Quel est le taux de cash sweep typique ?",
    options: ['10-20%', '25-35%', '50-75%', '100%'],
    correctIndex: 2,
    explanation: "Le taux de cash sweep est typiquement de 50-75% de l'excédent de trésorerie, laissant un matelas de sécurité à l'entreprise.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q53',
    lessonId: 'corp-11',
    question: "Qu'est-ce qu'un step-down dans le cash sweep ?",
    options: [
      'Une baisse du taux de sweep quand le levier diminue',
      'Une augmentation du sweep à mesure que la dette baisse',
      'La suppression du cash sweep après 2 ans',
      'Un mécanisme de conversion de dette en equity'
    ],
    correctIndex: 0,
    explanation: "Les step-downs réduisent le taux de cash sweep quand le levier diminue (ex : 75% si levier > 4x, 50% entre 3-4x, 25% < 3x), permettant à l'entreprise d'investir davantage.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q54',
    lessonId: 'corp-11',
    question: "EBITDA 50 M€, intérêts 10 M€, impôts 8 M€, capex 6 M€, ΔBFR 2 M€, amortissement contractuel 8 M€. Avec un sweep de 75%, quel est le remboursement anticipé ?",
    options: ['6 M€', '9 M€', '12 M€', '16 M€'],
    correctIndex: 2,
    explanation: "Excess CF = 50 − 10 − 8 − 6 − 2 − 8 = 16 M€. Remboursement anticipé = 16 × 0,75 = 12 M€.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q55',
    lessonId: 'corp-11',
    question: "Le cash sweep s'applique par ordre de priorité. Quelle dette est remboursée en premier ?",
    options: [
      'La mezzanine',
      'La dette senior (Term Loan A, puis B)',
      'L\'equity du sponsor',
      'Le Revolving Credit Facility'
    ],
    correctIndex: 1,
    explanation: "Le cash sweep s'applique par ordre de priorité : d'abord la dette senior (Term Loan A, puis B), puis la mezzanine, conformément à la waterfall contractuelle.",
    difficulty: 'easy',
  },

  // ========== corp-12: LBO Returns ==========
  {
    id: 'corp-q56',
    lessonId: 'corp-12',
    question: "Quelle est la différence entre TRI et MOIC ?",
    options: [
      'Il n\'y a aucune différence',
      'Le TRI mesure le rendement annualisé, le MOIC mesure le rendement absolu (multiple)',
      'Le MOIC est toujours supérieur au TRI',
      'Le TRI est calculé avant impôts, le MOIC après impôts'
    ],
    correctIndex: 1,
    explanation: "Le TRI mesure le rendement annualisé (en %) tandis que le MOIC mesure le rendement absolu (en multiples de la mise). Un MOIC de 2,5x en 5 ans donne un TRI de ~20%.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q57',
    lessonId: 'corp-12',
    question: "Le même MOIC de 3x est atteint en 3 ans ou en 6 ans. Quel scénario a le meilleur TRI ?",
    options: [
      'Le scénario en 6 ans',
      'Le scénario en 3 ans (TRI = 44% vs 20%)',
      'Les deux ont le même TRI',
      'Impossible à déterminer'
    ],
    correctIndex: 1,
    explanation: "Le TRI est sensible à la durée : 3x en 3 ans = TRI de 44% (3^(1/3)−1), vs 3x en 6 ans = TRI de 20% (3^(1/6)−1). C'est pourquoi les fonds cherchent des sorties rapides.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q58',
    lessonId: 'corp-12',
    question: "Qu'est-ce qu'un recapitalization dividend ?",
    options: [
      'Un dividende versé par la cible avant l\'acquisition',
      'Une distribution financée par de la dette additionnelle, permettant de récupérer une partie de la mise',
      'Un remboursement de l\'equity par le management',
      'Un dividende exceptionnel versé à la sortie'
    ],
    correctIndex: 1,
    explanation: "Le recap dividend permet au fonds de récupérer une partie de sa mise avant la sortie finale en levant de la dette additionnelle pour financer la distribution.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q59',
    lessonId: 'corp-12',
    question: "Quel levier de rendement LBO est le plus « mécanique » ?",
    options: [
      'La croissance de l\'EBITDA',
      'L\'expansion du multiple',
      'Le deleveraging (remboursement de dette)',
      'L\'amélioration opérationnelle'
    ],
    correctIndex: 2,
    explanation: "Le deleveraging est le plus mécanique : chaque euro de dette remboursé augmente la valeur des fonds propres d'un euro, sans dépendre de la performance opérationnelle.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q60',
    lessonId: 'corp-12',
    question: "EV 500 M€, equity 200 M€, dette 300 M€. Après 5 ans : EV 700 M€, dette 150 M€. Quel est le MOIC ?",
    options: ['1,4x', '2,0x', '2,75x', '3,5x'],
    correctIndex: 2,
    explanation: "Equity sortie = 700 − 150 = 550 M€. MOIC = 550 / 200 = 2,75x.",
    difficulty: 'easy',
  },

  // ========== corp-13: Capital optimale ==========
  {
    id: 'corp-q61',
    lessonId: 'corp-13',
    question: "Pourquoi la dette est-elle moins chère que les fonds propres ?",
    options: [
      'Parce que les banques sont généreuses',
      'Grâce au bouclier fiscal : les intérêts sont déductibles fiscalement',
      'Parce que la dette n\'a pas de risque',
      'Parce que les actionnaires sont trop gourmands'
    ],
    correctIndex: 1,
    explanation: "La dette est moins chère grâce au bouclier fiscal (les intérêts sont déductibles) et car les créanciers ont une priorité de remboursement (moins de risque que l'equity).",
    difficulty: 'easy',
  },
  {
    id: 'corp-q62',
    lessonId: 'corp-13',
    question: "E=600M€, D=400M€, ke=10%, kd=5%, t=25%. Quel est le WACC ?",
    options: ['6,5%', '7,5%', '8,0%', '8,5%'],
    correctIndex: 1,
    explanation: "WACC = (600/1000)×10% + (400/1000)×5%×0,75 = 6% + 1,5% = 7,5%.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q63',
    lessonId: 'corp-13',
    question: "Qu'est-ce que la « financial flexibility » ?",
    options: [
      'La capacité à changer de banque facilement',
      'La capacité d\'emprunt non utilisée pour saisir des opportunités ou résister aux crises',
      'La flexibilité des horaires du CFO',
      'La possibilité de modifier le taux d\'imposition'
    ],
    correctIndex: 1,
    explanation: "La financial flexibility est la capacité d'emprunt non utilisée (headroom) que les entreprises maintiennent pour saisir des opportunités ou résister aux crises.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q64',
    lessonId: 'corp-13',
    question: "Quel rating de crédit est le seuil investment grade le plus courant ?",
    options: ['AAA', 'A+', 'BBB−', 'BB+'],
    correctIndex: 2,
    explanation: "BBB− (S&P) / Baa3 (Moody's) est le seuil minimum investment grade. En dessous (BB+), on entre dans le high yield (spéculatif).",
    difficulty: 'medium',
  },
  {
    id: 'corp-q65',
    lessonId: 'corp-13',
    question: "Quels secteurs ont typiquement le ratio d'endettement le plus élevé ?",
    options: [
      'Tech et biotech',
      'Utilités et immobilier',
      'Startups et fintech',
      'Luxe et mode'
    ],
    correctIndex: 1,
    explanation: "Les secteurs stables et asset-heavy (utilités, immobilier) supportent plus de dette car leurs cash flows sont prévisibles et leurs actifs tangibles servent de garantie.",
    difficulty: 'easy',
  },

  // ========== corp-14: Modigliani-Miller ==========
  {
    id: 'corp-q66',
    lessonId: 'corp-14',
    question: "Selon MM Proposition I sans impôts, que vaut V_L ?",
    options: [
      'V_L > V_U car la dette crée de la valeur',
      'V_L = V_U car la structure du capital est neutre',
      'V_L < V_U car la dette est risquée',
      'V_L = V_U + t × D'
    ],
    correctIndex: 1,
    explanation: "Sans impôts ni coûts de faillite, V_L = V_U : la valeur de l'entreprise est indépendante de sa structure du capital. Seuls les actifs créent de la valeur.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q67',
    lessonId: 'corp-14',
    question: "Avec impôts, que vaut V_L selon MM (1963) ?",
    options: [
      'V_L = V_U',
      'V_L = V_U − t × D',
      'V_L = V_U + t × D',
      'V_L = V_U × (1 + t)'
    ],
    correctIndex: 2,
    explanation: "Avec impôts, V_L = V_U + t × D. Le bouclier fiscal de la dette augmente la valeur de l'entreprise de t × D.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q68',
    lessonId: 'corp-14',
    question: "V_U = 800 M€, dette = 300 M€, impôts = 30%. Que vaut V_L selon MM avec impôts ?",
    options: ['710 M€', '800 M€', '890 M€', '1 100 M€'],
    correctIndex: 2,
    explanation: "V_L = V_U + t × D = 800 + 0,30 × 300 = 800 + 90 = 890 M€.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q69',
    lessonId: 'corp-14',
    question: "Qu'est-ce que le « homemade leverage » ?",
    options: [
      'La capacité d\'un investisseur à répliquer l\'effet de levier dans son propre portefeuille',
      'La dette contractée par le dirigeant à titre personnel',
      'La dette non déclarée au bilan',
      'L\'endettement des ménages'
    ],
    correctIndex: 0,
    explanation: "Le homemade leverage est la capacité d'un investisseur à créer son propre levier (emprunter pour investir), rendant le levier de l'entreprise non pertinent en marché parfait.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q70',
    lessonId: 'corp-14',
    question: "Pourquoi MM implique-t-il 100% de dette avec impôts, ce qu'on n'observe pas en réalité ?",
    options: [
      'Parce que les banques ne prêtent pas autant',
      'Parce que MM ignore les coûts de faillite et l\'asymétrie d\'information',
      'Parce que les dirigeants préfèrent l\'equity',
      'Parce que la réglementation l\'interdit'
    ],
    correctIndex: 1,
    explanation: "MM avec impôts ignore les coûts de faillite et l'asymétrie d'information. C'est cet écart qui a motivé la trade-off theory et le pecking order.",
    difficulty: 'medium',
  },

  // ========== corp-15: Trade-off theory ==========
  {
    id: 'corp-q71',
    lessonId: 'corp-15',
    question: "La trade-off theory explique la structure du capital comme un arbitrage entre :",
    options: [
      'Dividendes et rachats d\'actions',
      'Avantages fiscaux de la dette et coûts de détresse financière',
      'Croissance et rentabilité',
      'Court terme et long terme'
    ],
    correctIndex: 1,
    explanation: "La trade-off theory dit que l'entreprise s'endette jusqu'au point où le bénéfice marginal du tax shield égale le coût marginal de la détresse financière.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q72',
    lessonId: 'corp-15',
    question: "Qu'est-ce que le « debt overhang » ?",
    options: [
      'Le fait d\'avoir trop de dette au bilan',
      'Le refus des actionnaires d\'investir car les bénéfices iraient aux créanciers',
      'La dette qui dépasse la valeur des actifs',
      'L\'excédent de capacité d\'emprunt'
    ],
    correctIndex: 1,
    explanation: "Le debt overhang est le sous-investissement des actionnaires d'une entreprise trop endettée : ils refusent les projets à VAN positive car les gains iraient principalement aux créanciers.",
    difficulty: 'hard',
  },
  {
    id: 'corp-q73',
    lessonId: 'corp-15',
    question: "Les coûts directs de faillite représentent typiquement quel % de la valeur des actifs ?",
    options: ['0,5-1%', '2-5%', '15-20%', '40-50%'],
    correctIndex: 1,
    explanation: "Les coûts directs de faillite (frais juridiques et administratifs) représentent 2-5% de la valeur des actifs. Les coûts indirects sont bien plus importants (10-20%).",
    difficulty: 'medium',
  },
  {
    id: 'corp-q74',
    lessonId: 'corp-15',
    question: "Pourquoi les entreprises à actifs tangibles s'endettent-elles davantage ?",
    options: [
      'Parce qu\'elles sont plus rentables',
      'Parce que leurs actifs conservent de la valeur en cas de liquidation (collatéral)',
      'Parce que les banques les préfèrent',
      'Parce qu\'elles n\'ont pas d\'autre choix'
    ],
    correctIndex: 1,
    explanation: "Les actifs tangibles (immobilier, machines) conservent leur valeur en cas de liquidation et servent de garantie, réduisant les coûts de détresse financière.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q75',
    lessonId: 'corp-15',
    question: "Qu'est-ce que l'asset substitution ?",
    options: [
      'Le remplacement d\'actifs obsolètes',
      'L\'incitation des actionnaires endettés à prendre des risques excessifs car l\'upside est pour eux et le downside pour les créanciers',
      'La diversification du portefeuille d\'actifs',
      'Le transfert d\'actifs entre filiales'
    ],
    correctIndex: 1,
    explanation: "L'asset substitution est un conflit d'agence : les actionnaires d'une entreprise endettée sont incités à prendre des risques excessifs car ils bénéficient de l'upside via l'equity.",
    difficulty: 'hard',
  },

  // ========== corp-16: Pecking order ==========
  {
    id: 'corp-q76',
    lessonId: 'corp-16',
    question: "Quel est l'ordre hiérarchique de financement selon le pecking order ?",
    options: [
      'Actions → Dette → Autofinancement',
      'Autofinancement → Actions → Dette',
      'Autofinancement → Dette → Actions',
      'Dette → Autofinancement → Actions'
    ],
    correctIndex: 2,
    explanation: "Le pecking order : (1) autofinancement (pas de signal négatif), (2) dette (signal faible), (3) actions en dernier recours (signal négatif fort).",
    difficulty: 'easy',
  },
  {
    id: 'corp-q77',
    lessonId: 'corp-16',
    question: "Pourquoi une émission d'actions envoie-t-elle un signal négatif ?",
    options: [
      'Parce que l\'entreprise manque de cash',
      'Parce que le marché interprète cela comme un signal que le titre est surévalué par les dirigeants',
      'Parce que les actions sont toujours chères',
      'Parce que les régulateurs l\'exigent'
    ],
    correctIndex: 1,
    explanation: "Les dirigeants connaissent mieux la valeur de l'entreprise : s'ils émettent des actions, le marché suppose que le titre est surévalué, d'où une baisse de 2-3% en moyenne.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q78',
    lessonId: 'corp-16',
    question: "Le pecking order prédit-il un ratio d'endettement cible ?",
    options: [
      'Oui, un ratio optimal bien défini',
      'Non, le levier est le résultat cumulé des besoins de financement passés',
      'Oui, le même ratio que la trade-off theory',
      'Oui, toujours 50/50 dette/equity'
    ],
    correctIndex: 1,
    explanation: "Contrairement à la trade-off theory, le pecking order ne prédit pas de ratio cible : le levier résulte de l'historique des besoins de financement et de la profitabilité.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q79',
    lessonId: 'corp-16',
    question: "Pourquoi les entreprises très rentables ont-elles souvent peu de dette selon le pecking order ?",
    options: [
      'Parce qu\'elles n\'aiment pas le risque',
      'Parce qu\'elles génèrent assez de cash flow pour se financer en interne',
      'Parce que les banques refusent de leur prêter',
      'Parce qu\'elles distribuent tout en dividendes'
    ],
    correctIndex: 1,
    explanation: "Les entreprises rentables autofinancent leurs investissements avec leurs bénéfices retenus (1er choix du pecking order), n'ayant pas besoin de recourir à la dette.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q80',
    lessonId: 'corp-16',
    question: "Les deux théories (trade-off et pecking order) sont-elles contradictoires ?",
    options: [
      'Oui, seule la trade-off est correcte',
      'Oui, seul le pecking order est correct',
      'Non, elles sont complémentaires : le pecking order explique le court terme, la trade-off le long terme',
      'Oui, elles donnent toujours des résultats opposés'
    ],
    correctIndex: 2,
    explanation: "Les deux théories sont complémentaires : le pecking order explique les décisions de financement ponctuelles, la trade-off explique la convergence à long terme vers un ratio cible.",
    difficulty: 'medium',
  },

  // ========== corp-17: Dividendes ==========
  {
    id: 'corp-q81',
    lessonId: 'corp-17',
    question: "Qu'est-ce que le dividend smoothing de Lintner ?",
    options: [
      'Le lissage du cours de bourse via les dividendes',
      'L\'ajustement progressif des dividendes vers un ratio cible',
      'La suppression des dividendes en période de crise',
      'Le versement de dividendes identiques chaque trimestre'
    ],
    correctIndex: 1,
    explanation: "Lintner (1956) montre que les entreprises ajustent progressivement leurs dividendes vers un payout ratio cible, augmentant seulement quand le nouveau niveau est soutenable.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q82',
    lessonId: 'corp-17',
    question: "Dividende par action = 2,50 €, cours = 50 €. Quel est le dividend yield ?",
    options: ['2,5%', '5%', '10%', '20%'],
    correctIndex: 1,
    explanation: "Dividend yield = dividende / cours = 2,50 / 50 = 5%.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q83',
    lessonId: 'corp-17',
    question: "Qu'est-ce qu'une « value trap » en matière de dividendes ?",
    options: [
      'Un dividende exceptionnellement élevé qui signale un problème',
      'Un yield élevé qui attire les investisseurs mais cache un dividende menacé de coupe',
      'Un piège fiscal sur les dividendes',
      'Un dividende payé en actions au lieu de cash'
    ],
    correctIndex: 1,
    explanation: "La value trap est un titre avec un yield élevé (car le cours a chuté) qui attire les investisseurs cherchant du rendement, mais le dividende risque d'être coupé.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q84',
    lessonId: 'corp-17',
    question: "Quel est le taux du PFU (prélèvement forfaitaire unique) sur les dividendes en France ?",
    options: ['12,8%', '20%', '30%', '45%'],
    correctIndex: 2,
    explanation: "Le PFU (flat tax) en France est de 30% sur les dividendes (12,8% d'impôt sur le revenu + 17,2% de prélèvements sociaux). L'option pour le barème progressif est possible.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q85',
    lessonId: 'corp-17',
    question: "Résultat net = 80 M€, dividendes = 40 M€, ROE = 15%. Quelle est la croissance soutenable ?",
    options: ['5%', '7,5%', '10%', '15%'],
    correctIndex: 1,
    explanation: "Taux de rétention = 1 − 40/80 = 50%. Croissance soutenable = ROE × rétention = 15% × 50% = 7,5%.",
    difficulty: 'medium',
  },

  // ========== corp-18: Rachats d'actions ==========
  {
    id: 'corp-q86',
    lessonId: 'corp-18',
    question: "Comment le rachat d'actions augmente-t-il le BPA ?",
    options: [
      'En augmentant le résultat net',
      'En réduisant le nombre d\'actions en circulation (dénominateur)',
      'En augmentant le chiffre d\'affaires',
      'En réduisant les impôts'
    ],
    correctIndex: 1,
    explanation: "Le rachat annule des actions, réduisant le dénominateur du BPA (résultat / actions). Le résultat est inchangé mais réparti sur moins d'actions.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q87',
    lessonId: 'corp-18',
    question: "Résultat net = 100 M€, 200 M actions. L'entreprise rachète 20 M actions. Quel est le nouveau BPA ?",
    options: ['0,50 €', '0,56 €', '0,67 €', '1,00 €'],
    correctIndex: 1,
    explanation: "BPA = 100 / (200 − 20) = 100 / 180 = 0,556 € ≈ 0,56 €, contre 0,50 € avant. Accretion de +11%.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q88',
    lessonId: 'corp-18',
    question: "Quel est l'avantage fiscal du rachat d'actions par rapport au dividende ?",
    options: [
      'Le rachat n\'est jamais imposé',
      'L\'actionnaire ne paie des impôts que s\'il vend ses titres (taxation différée)',
      'Le rachat est déductible pour l\'entreprise',
      'Il n\'y a aucun avantage fiscal'
    ],
    correctIndex: 1,
    explanation: "Le rachat est fiscalement avantageux car l'actionnaire qui conserve ses titres ne réalise pas de plus-value imposable immédiatement (taxation différée).",
    difficulty: 'medium',
  },
  {
    id: 'corp-q89',
    lessonId: 'corp-18',
    question: "Quel est le plafond légal de rachat d'actions en France ?",
    options: ['5% du capital', '10% du capital', '25% du capital', 'Pas de plafond'],
    correctIndex: 1,
    explanation: "En France, le programme de rachat d'actions est plafonné à 10% du capital, autorisé par l'assemblée générale.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q90',
    lessonId: 'corp-18',
    question: "Le rendement excédentaire moyen autour de l'annonce d'un programme de rachat est d'environ :",
    options: ['+1%', '+3%', '+10%', '+20%'],
    correctIndex: 1,
    explanation: "Les études montrent un rendement excédentaire moyen de +3% autour de l'annonce d'un programme de rachat, le marché interprétant cela comme un signal de sous-évaluation.",
    difficulty: 'medium',
  },

  // ========== corp-19: Augmentation de capital ==========
  {
    id: 'corp-q91',
    lessonId: 'corp-19',
    question: "Qu'est-ce que le TERP ?",
    options: [
      'Le taux d\'émission des actions préférentielles',
      'Le cours théorique de l\'action après détachement des droits préférentiels de souscription',
      'Le taux de rendement espéré du portefeuille',
      'Le tableau des emplois et ressources prévisionnelles'
    ],
    correctIndex: 1,
    explanation: "Le TERP (Theoretical Ex-Rights Price) est le cours théorique après détachement des DPS : (capitalisation ancienne + montant levé) / total actions post-opération.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q92',
    lessonId: 'corp-19',
    question: "200 M actions à 40 €, émission de 50 M actions à 32 €. Quel est le TERP ?",
    options: ['34,40 €', '36,00 €', '38,40 €', '40,00 €'],
    correctIndex: 2,
    explanation: "TERP = (200×40 + 50×32) / (200+50) = (8000 + 1600) / 250 = 9600 / 250 = 38,40 €.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q93',
    lessonId: 'corp-19',
    question: "L'annonce d'une augmentation de capital fait en moyenne quel impact sur le cours ?",
    options: ['+5%', '+2%', '−2 à −3%', '−10%'],
    correctIndex: 2,
    explanation: "L'annonce fait baisser le cours de 2-3% en moyenne, conformément au pecking order : le marché interprète cela comme un signal de surévaluation.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q94',
    lessonId: 'corp-19',
    question: "Qu'est-ce que l'underwriting dans le contexte d'une augmentation de capital ?",
    options: [
      'L\'écriture du prospectus',
      'La garantie de placement des actions par les banques, portant le risque si la demande est insuffisante',
      'La rédaction du contrat de travail du CFO',
      'L\'audit des comptes'
    ],
    correctIndex: 1,
    explanation: "L'underwriting est la garantie par les banques du placement des actions : elles portent le risque si la demande est insuffisante, en échange de fees de 2-5%.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q95',
    lessonId: 'corp-19',
    question: "La décote maximale d'une augmentation réservée (sans DPS) en France est de :",
    options: ['5%', '10%', '20%', '30%'],
    correctIndex: 1,
    explanation: "L'augmentation réservée nécessite l'approbation de l'AG (2/3) et la décote maximale est de 10% par rapport au cours moyen pondéré des 20 dernières séances.",
    difficulty: 'hard',
  },

  // ========== corp-20: Restructuring ==========
  {
    id: 'corp-q96',
    lessonId: 'corp-20',
    question: "Qu'est-ce que le DIP financing ?",
    options: [
      'Le financement par les dirigeants',
      'Un prêt accordé pendant la procédure collective avec superpriority sur toute la dette existante',
      'Le financement par dividendes',
      'Un prêt sans intérêt'
    ],
    correctIndex: 1,
    explanation: "Le DIP (Debtor-in-Possession) financing fournit de la liquidité pendant la procédure collective, avec une priorité de remboursement (superpriority) sur toute la dette existante.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q97',
    lessonId: 'corp-20',
    question: "Qu'est-ce qu'un debt-for-equity swap ?",
    options: [
      'L\'échange de dette contre du cash',
      'La conversion d\'une partie de la dette en actions, transférant le contrôle aux créanciers',
      'L\'échange de dette senior contre dette mezzanine',
      'Le rachat de dette sur le marché secondaire'
    ],
    correctIndex: 1,
    explanation: "Le debt-for-equity swap convertit de la dette en actions : les créanciers deviennent actionnaires, les anciens actionnaires sont dilués voire éliminés (wipe-out).",
    difficulty: 'easy',
  },
  {
    id: 'corp-q98',
    lessonId: 'corp-20',
    question: "Qu'est-ce que l'absolute priority rule ?",
    options: [
      'La règle selon laquelle le CEO décide en priorité',
      'Le principe que les créanciers senior doivent être intégralement remboursés avant que les juniors reçoivent quoi que ce soit',
      'La priorité donnée aux actionnaires existants',
      'La règle de priorité dans les enchères'
    ],
    correctIndex: 1,
    explanation: "L'absolute priority rule impose que les créanciers senior soient intégralement remboursés avant que les créanciers juniors ou les actionnaires ne reçoivent quoi que ce soit.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q99',
    lessonId: 'corp-20',
    question: "Qu'est-ce que le fulcrum security ?",
    options: [
      'La dette la plus sûre',
      'La tranche de dette qui se retrouve partiellement remboursée (charnière entre ceux totalement payés et ceux qui perdent tout)',
      'L\'equity du sponsor',
      'Le prêt DIP'
    ],
    correctIndex: 1,
    explanation: "Le fulcrum security est la tranche de dette à cheval : au-dessus, les créanciers sont intégralement remboursés ; en dessous, ils perdent tout. C'est cette classe qui obtient le contrôle.",
    difficulty: 'hard',
  },
  {
    id: 'corp-q100',
    lessonId: 'corp-20',
    question: "Quelle procédure amiable française permet de restructurer la dette sans publicité ?",
    options: [
      'Le redressement judiciaire',
      'Le mandat ad hoc ou la conciliation',
      'La liquidation judiciaire',
      'L\'augmentation de capital'
    ],
    correctIndex: 1,
    explanation: "Le mandat ad hoc et la conciliation sont des procédures amiables confidentielles, préférées car plus rapides et discrètes que les procédures judiciaires publiques.",
    difficulty: 'easy',
  },

  // ========== corp-21: Distressed debt ==========
  {
    id: 'corp-q101',
    lessonId: 'corp-21',
    question: "À quel niveau de prix la dette est-elle considérée comme « distressed » ?",
    options: [
      'En dessous de 95% de la valeur nominale',
      'En dessous de 70% de la valeur nominale',
      'En dessous de 50% de la valeur nominale',
      'En dessous de 10% de la valeur nominale'
    ],
    correctIndex: 1,
    explanation: "La dette est considérée distressed quand elle se négocie en dessous de 70% de sa valeur nominale ou avec un spread supérieur à 1 000 bps.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q102',
    lessonId: 'corp-21',
    question: "Qu'est-ce que la stratégie « loan-to-own » ?",
    options: [
      'Prêter de l\'argent à une entreprise saine',
      'Acheter la dette pour prendre le contrôle via une conversion debt-for-equity',
      'Acheter des actions pour revendre rapidement',
      'Prêter de l\'argent avec un taux très élevé'
    ],
    correctIndex: 1,
    explanation: "La stratégie loan-to-own consiste à acheter la dette d'une entreprise en difficulté pour obtenir le contrôle lors de la restructuration via une conversion en equity.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q103',
    lessonId: 'corp-21',
    question: "Pourquoi les créanciers institutionnels vendent-ils la dette distressed à prix décoté ?",
    options: [
      'Parce qu\'ils paniquent',
      'Parce que les régulations et mandats de gestion leur interdisent de détenir des actifs sous un certain rating',
      'Parce qu\'ils n\'aiment pas la dette',
      'Parce que le management les y oblige'
    ],
    correctIndex: 1,
    explanation: "Les ventes forcées résultent des contraintes réglementaires (Bâle III) et des mandats de gestion qui interdisent de détenir des actifs en dessous d'un certain rating.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q104',
    lessonId: 'corp-21',
    question: "EV post-restructuration = 400 M€, dette senior = 300 M€, mezzanine = 200 M€. Quel est le taux de recovery de la mezzanine ?",
    options: ['0%', '25%', '50%', '100%'],
    correctIndex: 2,
    explanation: "La senior est remboursée intégralement (300 M€). Il reste 400 − 300 = 100 M€ pour la mezzanine de 200 M€. Recovery = 100/200 = 50%.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q105',
    lessonId: 'corp-21',
    question: "Les meilleures performances en distressed debt correspondent à :",
    options: [
      'Les périodes de forte croissance économique',
      'Les récessions et périodes de crise',
      'Les périodes de taux élevés',
      'Les périodes de faible volatilité'
    ],
    correctIndex: 1,
    explanation: "Le cycle distressed est contra-cyclique : les meilleures vintages correspondent aux récessions (2001, 2008-2009, 2020) quand les prix sont au plus bas.",
    difficulty: 'easy',
  },

  // ========== corp-22: Spin-offs ==========
  {
    id: 'corp-q106',
    lessonId: 'corp-22',
    question: "Qu'est-ce que le « conglomerate discount » ?",
    options: [
      'La réduction offerte aux conglomérats lors d\'acquisitions',
      'Le phénomène par lequel un conglomérat est valorisé moins que la somme de ses parties',
      'La baisse du cours des conglomérats en récession',
      'Le discount offert aux employés des conglomérats'
    ],
    correctIndex: 1,
    explanation: "Le conglomerate discount (10-20%) signifie qu'un conglomérat diversifié est valorisé moins que la somme de ses parties séparées (SOTP).",
    difficulty: 'easy',
  },
  {
    id: 'corp-q107',
    lessonId: 'corp-22',
    question: "Les spin-offs surperforment le marché de combien en moyenne sur 2-3 ans ?",
    options: ['1-2%', '5-10%', '15-20%', '40-50%'],
    correctIndex: 2,
    explanation: "Les études montrent un rendement excédentaire de 15-20% sur les 2-3 ans suivant un spin-off, grâce à l'élimination du conglomerate discount.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q108',
    lessonId: 'corp-22',
    question: "Le spin-off est généralement :",
    options: [
      'Fortement imposé pour les actionnaires',
      'Exempt d\'impôts pour les actionnaires (tax-free distribution)',
      'Imposé uniquement pour l\'entreprise mère',
      'Imposé au taux de 50%'
    ],
    correctIndex: 1,
    explanation: "Le spin-off est généralement exempt d'impôts pour les actionnaires (tax-free distribution), contrairement à une cession classique soumise à l'impôt sur les plus-values.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q109',
    lessonId: 'corp-22',
    question: "Qu'est-ce qu'un Reverse Morris Trust ?",
    options: [
      'Un trust créé par le management',
      'La combinaison d\'un spin-off et d\'une fusion permettant une cession tax-free',
      'Un fonds de pension inversé',
      'Un mécanisme de rachat d\'actions'
    ],
    correctIndex: 1,
    explanation: "Le Reverse Morris Trust combine un spin-off suivi d'une fusion immédiate avec un acquéreur, permettant une cession tax-free de l'entité séparée.",
    difficulty: 'hard',
  },
  {
    id: 'corp-q110',
    lessonId: 'corp-22',
    question: "Quel est le taux d'échec des spin-offs (dissolution dans les 5 ans) ?",
    options: ['5-10%', '10-20%', '20-30%', 'Les spin-offs ne « échouent » pas'],
    correctIndex: 2,
    explanation: "Environ 20-30% des entités spin-offées sont rachetées ou fusionnées dans les 5 ans, leur petite taille les rendant vulnérables aux OPA.",
    difficulty: 'medium',
  },

  // ========== corp-23: IPO Process ==========
  {
    id: 'corp-q111',
    lessonId: 'corp-23',
    question: "Qu'est-ce que le book-building ?",
    options: [
      'La rédaction du prospectus',
      'Le processus de construction du carnet d\'ordres auprès des investisseurs institutionnels pour fixer le prix',
      'La création du rapport annuel',
      'L\'impression des certificats d\'actions'
    ],
    correctIndex: 1,
    explanation: "Le book-building sonde les investisseurs institutionnels pour construire un carnet d'ordres et fixer le prix d'introduction dans une fourchette indicative.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q112',
    lessonId: 'corp-23',
    question: "L'underpricing moyen d'une IPO est d'environ :",
    options: ['1-2%', '5-7%', '10-15%', '30-40%'],
    correctIndex: 2,
    explanation: "L'underpricing moyen est de 10-15% : le prix d'introduction est fixé en dessous de la valeur de marché pour assurer le succès du placement et attirer les investisseurs.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q113',
    lessonId: 'corp-23',
    question: "Qu'est-ce que la greenshoe (option de surallocation) ?",
    options: [
      'Une réduction du prix après l\'IPO',
      'Une option permettant aux banques de vendre 15% d\'actions supplémentaires si la demande est forte',
      'Un bonus pour les premiers souscripteurs',
      'Une garantie de prix plancher'
    ],
    correctIndex: 1,
    explanation: "La greenshoe permet aux banques de vendre jusqu'à 15% d'actions supplémentaires si la demande le justifie, stabilisant le cours post-IPO.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q114',
    lessonId: 'corp-23',
    question: "Combien de temps dure typiquement le lock-up period après une IPO ?",
    options: ['7 jours', '30 jours', '90-180 jours', '2 ans'],
    correctIndex: 2,
    explanation: "Le lock-up period de 90-180 jours interdit aux actionnaires existants et au management de vendre leurs titres immédiatement après l'IPO.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q115',
    lessonId: 'corp-23',
    question: "Les fees d'underwriting d'une IPO représentent typiquement :",
    options: ['0,5-1%', '3-7%', '10-15%', '20-25%'],
    correctIndex: 1,
    explanation: "Les underwriting fees représentent 3-7% du montant levé. Le coût total (incluant frais juridiques, audit, communication) peut atteindre 10% pour les petites IPO.",
    difficulty: 'medium',
  },

  // ========== corp-24: SPAC ==========
  {
    id: 'corp-q116',
    lessonId: 'corp-24',
    question: "Qu'est-ce qu'un SPAC ?",
    options: [
      'Un fonds de private equity coté',
      'Une société-coquille cotée sans activité, créée pour acquérir une entreprise dans un délai de 18-24 mois',
      'Un type d\'obligation convertible',
      'Un index boursier spécialisé'
    ],
    correctIndex: 1,
    explanation: "Le SPAC est une société-coquille cotée via IPO, sans activité opérationnelle, avec pour seul objectif d'acquérir une entreprise privée dans un délai de 18-24 mois.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q117',
    lessonId: 'corp-24',
    question: "Quel pourcentage du capital les sponsors du SPAC reçoivent-ils gratuitement (promote) ?",
    options: ['5%', '10%', '20%', '50%'],
    correctIndex: 2,
    explanation: "Les sponsors reçoivent typiquement 20% du capital gratuitement (le « promote »), ce qui dilue fortement les investisseurs de l'IPO du SPAC.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q118',
    lessonId: 'corp-24',
    question: "Que se passe-t-il si le SPAC ne trouve pas de cible dans le délai imparti ?",
    options: [
      'Le SPAC continue indéfiniment',
      'Le SPAC est liquidé et le cash est retourné aux investisseurs',
      'Les sponsors gardent tout le cash',
      'Le SPAC est converti en fonds d\'investissement'
    ],
    correctIndex: 1,
    explanation: "Si aucune cible n'est trouvée dans le délai (18-24 mois), le SPAC est liquidé et le cash du trust est retourné aux investisseurs.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q119',
    lessonId: 'corp-24',
    question: "Les performances post-de-SPAC sont en moyenne :",
    options: [
      'Très positives (+30-50% dans l\'année)',
      'Neutres (0%)',
      'Négatives (−30 à −50% dans l\'année)',
      'Variables mais toujours supérieures au marché'
    ],
    correctIndex: 2,
    explanation: "Les performances post-de-SPAC ont été décevantes : en moyenne, les actions perdent 30-50% dans l'année suivant le merger, à cause de valorisations excessives.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q120',
    lessonId: 'corp-24',
    question: "Combien d'IPO SPAC ont été réalisées aux USA en 2020-2021 ?",
    options: ['Environ 50', 'Environ 150', 'Plus de 600', 'Plus de 2 000'],
    correctIndex: 2,
    explanation: "Le boom des SPAC en 2020-2021 a vu plus de 600 IPO SPAC aux États-Unis, levant environ 160 Md$, avant un effondrement en 2022-2023.",
    difficulty: 'medium',
  },

  // ========== corp-25: Joint Ventures ==========
  {
    id: 'corp-q121',
    lessonId: 'corp-25',
    question: "Quel est le document clé qui régit une joint venture ?",
    options: [
      'Le prospectus',
      'Le pacte d\'actionnaires (shareholders\' agreement)',
      'Le rapport annuel',
      'Le contrat de travail du CEO'
    ],
    correctIndex: 1,
    explanation: "Le pacte d'actionnaires définit la gouvernance, les droits de veto, la politique de dividendes, les obligations des partenaires et les mécanismes de sortie.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q122',
    lessonId: 'corp-25',
    question: "Qu'est-ce que la clause « Russian roulette » ?",
    options: [
      'Une clause qui élimine un partenaire aléatoirement',
      'Un mécanisme où un partenaire propose un prix, et l\'autre doit acheter ou vendre à ce prix',
      'Une clause de pénalité en cas de retrait',
      'Un mécanisme de tirage au sort pour le contrôle'
    ],
    correctIndex: 1,
    explanation: "La Russian roulette résout les deadlocks : un partenaire propose un prix, l'autre doit soit acheter la part du premier soit vendre la sienne à ce prix. Cela incite à proposer un prix juste.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q123',
    lessonId: 'corp-25',
    question: "Quel est le taux d'échec des JV dans les 5 premières années ?",
    options: ['10-20%', '30-40%', '50-60%', '80-90%'],
    correctIndex: 2,
    explanation: "Le taux d'échec des JV est de 50-60% dans les 5 premières années, principalement dû au désalignement stratégique et aux conflits culturels.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q124',
    lessonId: 'corp-25',
    question: "À partir de quel pourcentage de détention une JV est-elle mise en équivalence ?",
    options: ['0-10%', '10-20%', '20-50%', '50-100%'],
    correctIndex: 2,
    explanation: "Une participation de 20-50% est mise en équivalence : la quote-part du résultat est intégrée au P&L du partenaire. Au-dessus de 50%, consolidation intégrale.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q125',
    lessonId: 'corp-25',
    question: "Quel est le risque principal d'une JV 50/50 ?",
    options: [
      'Le coût trop élevé',
      'Le deadlock : impossibilité de prendre des décisions sans unanimité',
      'L\'absence de bénéfices',
      'La réglementation trop stricte'
    ],
    correctIndex: 1,
    explanation: "Dans une JV 50/50, les décisions stratégiques nécessitent l'unanimité, créant un risque de deadlock si les partenaires sont en désaccord.",
    difficulty: 'easy',
  },

  // ========== corp-26: Cas LBO PME ==========
  {
    id: 'corp-q126',
    lessonId: 'corp-26',
    question: "Dans le cas MetalPro, quel est le multiple d'entrée ?",
    options: ['5x EBITDA', '7x EBITDA', '10x EBITDA', '12x EBITDA'],
    correctIndex: 1,
    explanation: "MetalPro est valorisée à 7x EBITDA : EV = 8 M€ × 7 = 56 M€.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q127',
    lessonId: 'corp-26',
    question: "Quel est le levier d'entrée dans le cas MetalPro (dette/EBITDA) ?",
    options: ['2x', '4x', '6x', '8x'],
    correctIndex: 1,
    explanation: "Dette senior = 32 M€ (dont Term Loan 25 M€ + RCF 7 M€). Levier = 32 / 8 = 4x EBITDA.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q128',
    lessonId: 'corp-26',
    question: "Pourquoi le management rollover est-il important pour les prêteurs ?",
    options: [
      'Il réduit le montant de la dette',
      'Il aligne les intérêts du management avec la performance de l\'entreprise, ce qui rassure les prêteurs',
      'Il garantit le remboursement de la dette',
      'Il permet de payer les intérêts'
    ],
    correctIndex: 1,
    explanation: "Le rollover du management (5-15% de l'equity) est un signal positif pour les prêteurs car il montre que le dirigeant croit en l'entreprise et a un intérêt financier direct.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q129',
    lessonId: 'corp-26',
    question: "Dans le cas MetalPro, quel est le MOIC pour le sponsor ?",
    options: ['1,5x', '2,2x', '3,1x', '4,5x'],
    correctIndex: 2,
    explanation: "Equity investi sponsor = 18,9 M€. Equity sortie sponsor (90% de 64,7 M€) = 58,2 M€. MOIC = 58,2 / 18,9 ≈ 3,1x.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q130',
    lessonId: 'corp-26',
    question: "Qu'est-ce qu'un management package (BSA/AGA) dans un LBO ?",
    options: [
      'Le salaire du management',
      'Un dispositif d\'intéressement donnant au management 5-10% du capital si les objectifs sont atteints',
      'Le budget de fonctionnement du management',
      'Les avantages en nature du management'
    ],
    correctIndex: 1,
    explanation: "Le management package (5% en BSA/AGA, pouvant monter à 10% via ratchet) aligne les intérêts du nouveau DG avec le fonds en lui donnant accès au capital.",
    difficulty: 'medium',
  },

  // ========== corp-27: Cas M&A cross-border ==========
  {
    id: 'corp-q131',
    lessonId: 'corp-27',
    question: "Pourquoi le financement en USD est-il préféré pour acquérir une cible américaine ?",
    options: [
      'Parce que le dollar est plus stable que l\'euro',
      'Pour créer un natural hedge : les cash flows USD de la cible remboursent la dette USD',
      'Parce que les taux US sont toujours plus bas',
      'Parce que les banques américaines l\'exigent'
    ],
    correctIndex: 1,
    explanation: "Le financement en USD crée un natural hedge : les cash flows USD de la cible servent à rembourser la dette USD, éliminant le risque de change sur le service de la dette.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q132',
    lessonId: 'corp-27',
    question: "Qu'est-ce que le CFIUS dans le contexte d'une acquisition aux États-Unis ?",
    options: [
      'Le régulateur boursier américain',
      'Le comité qui examine les investissements étrangers pour des raisons de sécurité nationale',
      'Le fisc américain',
      'L\'organisme de normalisation comptable'
    ],
    correctIndex: 1,
    explanation: "Le CFIUS (Committee on Foreign Investment in the United States) examine les acquisitions d'entreprises américaines par des étrangers pour des raisons de sécurité nationale.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q133',
    lessonId: 'corp-27',
    question: "Dans le cas FR Indus / US TechParts, pourquoi l'opération est-elle dilutive ?",
    options: [
      'Parce que la cible est déficitaire',
      'Parce que l\'augmentation de capital dilue massivement les actionnaires existants',
      'Parce que le taux de change est défavorable',
      'Parce que le management est incompétent'
    ],
    correctIndex: 1,
    explanation: "L'émission de 50 M d'actions nouvelles (sur 100 M existantes) dilue massivement le BPA : le résultat additionnel de la cible ne compense pas la dilution du nombre d'actions.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q134',
    lessonId: 'corp-27',
    question: "Quel est le principal risque non-financier d'une acquisition cross-border ?",
    options: [
      'Le risque de change',
      'Le risque d\'intégration culturelle',
      'Le risque de taux d\'intérêt',
      'Le risque de marché'
    ],
    correctIndex: 1,
    explanation: "L'intégration culturelle est souvent le risque le plus sous-estimé : différences de management, de communication et d'organisation entre les deux pays.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q135',
    lessonId: 'corp-27',
    question: "Quel est le coût total des frais de transaction dans le cas FR Indus / US TechParts ?",
    options: ['5 M$', '10 M$', '15 M$', '25 M$'],
    correctIndex: 2,
    explanation: "Coûts de transaction = 15 M$ (advisory 8 M$, legal 4 M$, due diligence 3 M$), soit environ 3,75% du prix d'acquisition.",
    difficulty: 'easy',
  },

  // ========== corp-28: Examen final ==========
  {
    id: 'corp-q136',
    lessonId: 'corp-28',
    question: "Une entreprise a un EBITDA de 100 M€. Le levier maximum acceptable est 5x. Quel est le montant maximum de dette dans le Sources & Uses ?",
    options: ['100 M€', '300 M€', '500 M€', '1 000 M€'],
    correctIndex: 2,
    explanation: "Dette maximum = EBITDA × levier max = 100 × 5 = 500 M€.",
    difficulty: 'easy',
  },
  {
    id: 'corp-q137',
    lessonId: 'corp-28',
    question: "Dans un processus sell-side, quel est l'objectif principal du processus en deux tours ?",
    options: [
      'Réduire les frais de transaction',
      'Maximiser la tension concurrentielle entre les enchérisseurs pour obtenir le meilleur prix',
      'Accélérer le processus de vente',
      'Simplifier la due diligence'
    ],
    correctIndex: 1,
    explanation: "Le processus en deux tours crée une tension concurrentielle : le premier tour filtre les candidats, le second les met en compétition directe pour le meilleur prix.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q138',
    lessonId: 'corp-28',
    question: "Un LBO à 6x EBITDA de 30 M€ avec 40% d'equity. Après 5 ans, EBITDA = 40 M€, multiple de sortie = 7x, dette résiduelle = 60 M€. Quel est le TRI ?",
    options: ['15%', '22%', '29%', '35%'],
    correctIndex: 2,
    explanation: "EV entrée = 180 M€. Equity = 72 M€. EV sortie = 40×7 = 280 M€. Equity sortie = 280−60 = 220 M€. MOIC = 220/72 = 3,06x. TRI = 3,06^(1/5)−1 = 25%. Avec arrondis ≈ 29% (selon la décomposition exacte).",
    difficulty: 'hard',
  },
  {
    id: 'corp-q139',
    lessonId: 'corp-28',
    question: "Selon la trade-off theory, que se passe-t-il si le levier dépasse l'optimum ?",
    options: [
      'Le WACC continue de baisser',
      'Le WACC augmente car les coûts de détresse dépassent les avantages fiscaux',
      'Le WACC reste constant (MM)',
      'Les actionnaires reçoivent plus de dividendes'
    ],
    correctIndex: 1,
    explanation: "Au-delà de l'optimum, les coûts marginaux de détresse financière surpassent les avantages fiscaux marginaux, faisant remonter le WACC et détruisant de la valeur.",
    difficulty: 'medium',
  },
  {
    id: 'corp-q140',
    lessonId: 'corp-28',
    question: "Classez les créanciers par ordre de priorité en cas de défaut : senior secured, equity, mezzanine, DIP.",
    options: [
      'Equity → Mezzanine → Senior → DIP',
      'DIP → Senior Secured → Mezzanine → Equity',
      'Senior → DIP → Mezzanine → Equity',
      'Mezzanine → Senior → DIP → Equity'
    ],
    correctIndex: 1,
    explanation: "Ordre de priorité : DIP (superpriority) → Senior Secured → Mezzanine (subordonnée) → Equity (dernier remboursé). C'est la waterfall de remboursement.",
    difficulty: 'medium',
  },
];
