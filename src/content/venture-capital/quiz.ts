// ──────────────────────────────────────────────
//  FINA - Venture Capital : Quiz Questions
// ──────────────────────────────────────────────

import type { QuizQuestion } from '../types';

export const ventureCapitalQuiz: QuizQuestion[] = [
  // ── Écosystème VC ──────────────────────────
  {
    id: 'vc-q01',
    lessonId: 'vc-01',
    question: 'La « power law » en VC signifie que :',
    options: [
      'Tous les investissements ont un rendement similaire',
      '1-2 deals sur 10 génèrent l\'essentiel du retour du fonds',
      'Les rendements suivent une distribution normale',
      'Le plus gros fonds gagne toujours',
    ],
    correctIndex: 1,
    explanation: 'La power law (loi de puissance) est le principe fondamental du VC : les rendements sont extrêmement concentrés. Un ou deux investissements exceptionnels (home runs) retournent le fonds entier, tandis que la majorité des deals sont des échecs ou des retours modestes.',
    difficulty: 'easy',
  },
  {
    id: 'vc-q02',
    lessonId: 'vc-01',
    question: 'L\'investissement de Sequoia dans WhatsApp illustre :',
    options: ['Un rendement moyen de 2x', 'Un retour de 50x environ sur un seul deal', 'Une perte totale', 'Un investissement en dette'],
    correctIndex: 1,
    explanation: 'Sequoia a investi environ 60 M $ dans WhatsApp et récupéré environ 3 Mds $ lors de l\'acquisition par Facebook pour 19 Mds $ — un retour d\'environ 50x, illustrant parfaitement la power law en VC.',
    difficulty: 'easy',
  },

  // ── Seed → Series C ────────────────────────
  {
    id: 'vc-q03',
    lessonId: 'vc-02',
    question: 'Le milestone principal pour lever une Series A est :',
    options: ['Avoir une idée', 'Le product-market fit prouvé avec des métriques solides', 'Être rentable', 'Avoir 100 M EUR de CA'],
    correctIndex: 1,
    explanation: 'La Series A intervient après la preuve du product-market fit (PMF) : la startup a des clients payants, un taux de rétention solide, et une unit economics prometteuse. C\'est le passage du stade « est-ce que ça marche ? » à « comment on scale ? ».',
    difficulty: 'easy',
  },
  {
    id: 'vc-q04',
    lessonId: 'vc-02',
    question: 'La dilution typique par round de financement VC est de :',
    options: ['5-10 %', '15-25 %', '40-50 %', '60-70 %'],
    correctIndex: 1,
    explanation: 'La dilution standard par round est de 15-25 % (idéalement 15-20 %). Céder plus de 25 % par round accélère la perte de contrôle du fondateur et peut signaler un pouvoir de négociation faible.',
    difficulty: 'easy',
  },

  // ── Term sheet ─────────────────────────────
  {
    id: 'vc-q05',
    lessonId: 'vc-03',
    question: 'Le « no-shop clause » dans un term sheet :',
    options: [
      'Empêche l\'investisseur de parler à d\'autres startups',
      'Interdit au fondateur de négocier avec d\'autres investisseurs pendant 30-60 jours',
      'Fixe le prix des actions',
      'Limite le droit de vente des fondateurs',
    ],
    correctIndex: 1,
    explanation: 'Le no-shop clause (ou exclusivité) est l\'une des rares clauses contraignantes du term sheet. Elle empêche le fondateur de solliciter ou négocier avec d\'autres investisseurs pendant une période de 30-60 jours.',
    difficulty: 'easy',
  },

  // ── Pre/Post-money ─────────────────────────
  {
    id: 'vc-q06',
    lessonId: 'vc-04',
    question: 'L\'option pool shuffle avantage principalement :',
    options: ['Les fondateurs', 'Les nouveaux investisseurs', 'Les salariés', 'Les anciens investisseurs'],
    correctIndex: 1,
    explanation: 'L\'option pool shuffle crée le pool d\'options AVANT le round (inclus dans la pre-money). La dilution du pool est supportée uniquement par les fondateurs et actionnaires existants, pas par le nouvel investisseur. C\'est pour cela que les investisseurs insistent souvent pour un pool pre-money.',
    difficulty: 'medium',
  },
  {
    id: 'vc-q07',
    lessonId: 'vc-04',
    question: 'Pre-money 15 M EUR, round de 5 M EUR. Quel pourcentage obtient l\'investisseur ?',
    options: ['15 %', '20 %', '25 %', '33 %'],
    correctIndex: 2,
    explanation: 'Post-money = 15 + 5 = 20 M EUR. % investisseur = 5 / 20 = 25 %. La pre-money est la valorisation AVANT l\'investissement, donc l\'investisseur obtient son investissement divisé par la post-money.',
    difficulty: 'easy',
  },

  // ── Dilution & cap table ───────────────────
  {
    id: 'vc-q08',
    lessonId: 'vc-05',
    question: 'Un fondateur à 100 % qui lève 3 rounds avec 20 % de dilution chacun se retrouve à environ :',
    options: ['40 %', '51 %', '60 %', '80 %'],
    correctIndex: 1,
    explanation: '100 % × 0,80 × 0,80 × 0,80 = 51,2 %. La dilution est multiplicative, pas additive. Trois rounds à 20 % ne font pas 60 % de dilution mais 48,8 % (le fondateur garde 51,2 %).',
    difficulty: 'medium',
  },
  {
    id: 'vc-q09',
    lessonId: 'vc-05',
    question: 'La « dead equity » sur une cap table désigne :',
    options: [
      'Les actions non émises',
      'Les parts détenues par des co-fondateurs partis ou des investisseurs inactifs',
      'Le pool d\'options non encore attribué',
      'Les actions sans droit de vote',
    ],
    correctIndex: 1,
    explanation: 'La dead equity est la participation détenue par des personnes qui ne contribuent plus à la startup (co-fondateurs partis sans vesting, investisseurs passifs). C\'est un red flag pour les nouveaux investisseurs car elle dilue les personnes actives sans valeur ajoutée.',
    difficulty: 'easy',
  },

  // ── Preferred vs Common ────────────────────
  {
    id: 'vc-q10',
    lessonId: 'vc-06',
    question: 'Un investisseur preferred (1x non-participating, 25 %) dans une sortie à 100 M EUR choisira :',
    options: [
      'Sa liquidation pref si elle est supérieure à sa part prorata',
      'La conversion en common (25 M EUR) car c\'est supérieur à sa mise initiale',
      'Toujours la liquidation preference',
      'Toujours la conversion',
    ],
    correctIndex: 1,
    explanation: 'Avec 1x non-participating, l\'investisseur choisit le maximum entre sa pref (sa mise) et sa conversion (25 % × 100 M = 25 M). Si sa mise est inférieure à 25 M, il convertit. La non-participation signifie « l\'un OU l\'autre, pas les deux ».',
    difficulty: 'medium',
  },

  // ── Liquidation preferences ────────────────
  {
    id: 'vc-q11',
    lessonId: 'vc-07',
    question: 'Le « double dip » fait référence à :',
    options: [
      'Deux rounds de financement consécutifs',
      'Le participating preferred : l\'investisseur récupère sa pref ET participe au prorata',
      'Un investissement dans deux startups',
      'Le remboursement deux fois du capital',
    ],
    correctIndex: 1,
    explanation: 'Le « double dip » est le surnom du participating preferred : l\'investisseur récupère d\'abord son investissement (1x), puis participe au prorata sur le montant restant. Il « trempe deux fois dans le pot » — d\'où le nom.',
    difficulty: 'medium',
  },
  {
    id: 'vc-q12',
    lessonId: 'vc-07',
    question: 'Dans un waterfall avec plusieurs tranches de preferred, la tranche payée en premier est :',
    options: ['La première émise (Series A)', 'La dernière émise (Series C)', 'Elles sont toutes pari passu', 'Cela dépend du fondateur'],
    correctIndex: 1,
    explanation: 'Les liquidation preferences sont typiquement empilées (stacked) en LIFO : la dernière tranche émise (Series C) est payée en premier, suivie de la Series B, puis de la Series A. Le dernier investisseur a la priorité car il a pris le plus de risque en termes de valorisation.',
    difficulty: 'medium',
  },

  // ── Anti-dilution ──────────────────────────
  {
    id: 'vc-q13',
    lessonId: 'vc-08',
    question: 'Le full ratchet anti-dilution est considéré comme :',
    options: [
      'Le plus favorable aux fondateurs',
      'Le standard de marché',
      'Le plus agressif et défavorable aux fondateurs',
      'Sans impact sur la dilution',
    ],
    correctIndex: 2,
    explanation: 'Le full ratchet ajuste le prix de conversion au prix du down round, sans pondération. C\'est le mécanisme le plus agressif : il peut doubler ou tripler le nombre d\'actions de l\'investisseur, diluant massivement les fondateurs. Le standard est le broad-based weighted average.',
    difficulty: 'easy',
  },

  // ── Vesting & cliff ────────────────────────
  {
    id: 'vc-q14',
    lessonId: 'vc-09',
    question: 'Avec un vesting de 4 ans et un cliff de 1 an, un salarié qui quitte après 8 mois reçoit :',
    options: ['8/48 de ses actions', '25 % de ses actions', '0 action', '100 % de ses actions'],
    correctIndex: 2,
    explanation: 'Le cliff de 1 an signifie qu\'aucune action n\'est acquise avant le premier anniversaire. Un départ avant le cliff = 0 action. C\'est précisément le but du cliff : protéger contre les départs très précoces.',
    difficulty: 'easy',
  },
  {
    id: 'vc-q15',
    lessonId: 'vc-09',
    question: 'Le « double trigger acceleration » se déclenche quand :',
    options: [
      'Le fondateur atteint ses objectifs',
      'L\'entreprise est acquise ET le salarié est licencié dans les 12 mois',
      'Le salarié quitte volontairement',
      'L\'entreprise fait une nouvelle levée de fonds',
    ],
    correctIndex: 1,
    explanation: 'Le double trigger requiert deux événements : (1) un changement de contrôle (acquisition) et (2) un licenciement du salarié dans les 12 mois suivants. Les deux conditions doivent être réunies pour déclencher l\'accélération totale du vesting.',
    difficulty: 'medium',
  },

  // ── SAFE ───────────────────────────────────
  {
    id: 'vc-q16',
    lessonId: 'vc-10',
    question: 'Le SAFE (Simple Agreement for Future Equity) se distingue d\'une convertible note car :',
    options: [
      'Il a un taux d\'intérêt plus élevé',
      'Il n\'est pas de la dette : pas d\'intérêt, pas de maturité, pas de remboursement',
      'Il est toujours plus favorable aux investisseurs',
      'Il ne peut être utilisé qu\'aux États-Unis',
    ],
    correctIndex: 1,
    explanation: 'Le SAFE n\'est pas un instrument de dette : il n\'a pas d\'intérêt, pas de date de maturité, et pas de droit au remboursement. C\'est un droit contractuel d\'obtenir des actions lors d\'un futur événement de financement.',
    difficulty: 'easy',
  },
  {
    id: 'vc-q17',
    lessonId: 'vc-10',
    question: 'Le « SAFE stack » peut poser problème car :',
    options: [
      'Les SAFEs sont illégaux dans certains pays',
      'L\'empilement de SAFEs avec des caps différents crée une dilution cachée à la conversion',
      'Les SAFEs ne se convertissent jamais',
      'Les SAFEs ont des taux d\'intérêt très élevés',
    ],
    correctIndex: 1,
    explanation: 'Empiler plusieurs SAFEs avec des caps et discounts différents crée une dilution totale difficile à calculer avant le round pricé. Le fondateur peut être surpris par la dilution réelle à la conversion. Règle : ne pas dépasser 20-25 % de dilution totale en SAFEs.',
    difficulty: 'medium',
  },

  // ── DD startup ─────────────────────────────
  {
    id: 'vc-q18',
    lessonId: 'vc-11',
    question: 'En early-stage VC, le critère d\'évaluation le plus important est :',
    options: ['Les revenus', 'La rentabilité', 'L\'équipe fondatrice', 'Le nombre de brevets'],
    correctIndex: 2,
    explanation: 'En early-stage (pre-seed à Series A), l\'équipe fondatrice est le critère #1. Les revenus sont souvent faibles ou inexistants, la rentabilité est négative. L\'investisseur parie sur la capacité de l\'équipe à exécuter dans un grand marché.',
    difficulty: 'easy',
  },

  // ── Unit economics ─────────────────────────
  {
    id: 'vc-q19',
    lessonId: 'vc-12',
    question: 'Un ratio LTV/CAC de 2x signifie :',
    options: [
      'Le modèle est très rentable',
      'Chaque client rapporte 2 fois ce qu\'il coûte à acquérir — en dessous du seuil de 3x',
      'Le CAC est trop faible',
      'Le churn est nul',
    ],
    correctIndex: 1,
    explanation: 'Un LTV/CAC de 2x est en dessous du seuil recommandé de 3x. Cela signifie que le coût d\'acquisition est trop élevé par rapport à la valeur vie du client. L\'entreprise doit soit réduire son CAC, soit augmenter la LTV (plus de revenus par client, meilleure rétention).',
    difficulty: 'easy',
  },
  {
    id: 'vc-q20',
    lessonId: 'vc-12',
    question: 'ARPU 600 EUR/mois, marge brute 75 %, churn mensuel 2,5 %. La LTV est :',
    options: ['6 000 EUR', '12 000 EUR', '18 000 EUR', '24 000 EUR'],
    correctIndex: 2,
    explanation: 'LTV = ARPU × Marge brute / Churn mensuel = 600 × 0,75 / 0,025 = 18 000 EUR. La durée de vie implicite du client est 1/churn = 40 mois, et il génère 450 EUR/mois de marge (600 × 75 %).',
    difficulty: 'hard',
  },

  // ── SaaS metrics ───────────────────────────
  {
    id: 'vc-q21',
    lessonId: 'vc-13',
    question: 'Un NDR (Net Dollar Retention) de 125 % signifie que :',
    options: [
      'L\'entreprise a perdu 25 % de ses clients',
      'La base installée de clients génère 25 % de revenus en plus chaque année, sans nouveaux clients',
      'Les prix ont augmenté de 25 %',
      'Le churn est de 25 %',
    ],
    correctIndex: 1,
    explanation: 'Un NDR de 125 % signifie que les clients existants génèrent 25 % de revenus de plus que l\'année précédente grâce à l\'expansion (upsell, cross-sell), net du churn et de la contraction. La base installée croît de 25 %/an même sans aucun nouveau client.',
    difficulty: 'medium',
  },
  {
    id: 'vc-q22',
    lessonId: 'vc-13',
    question: 'La Rule of 40 (croissance % + marge EBITDA %) évalue :',
    options: [
      'La taille du marché',
      'L\'équilibre entre croissance et rentabilité d\'un SaaS',
      'Le nombre de clients nécessaires',
      'La valorisation cible',
    ],
    correctIndex: 1,
    explanation: 'La Rule of 40 mesure la santé d\'un SaaS : une startup qui croît de 60 % avec une marge de -15 % score 45 (> 40, OK). Elle peut sacrifier la rentabilité si la croissance compense. Un score > 40 indique un profil attractif pour les investisseurs.',
    difficulty: 'easy',
  },

  // ── Board ──────────────────────────────────
  {
    id: 'vc-q23',
    lessonId: 'vc-14',
    question: 'Les protective provisions donnent à l\'investisseur :',
    options: [
      'Le contrôle total de l\'entreprise',
      'Un droit de veto sur certaines décisions clés même sans contrôle du board',
      'Le droit de nommer le CEO',
      'La majorité du capital',
    ],
    correctIndex: 1,
    explanation: 'Les protective provisions sont des droits de veto spécifiques qui ne dépendent pas de la composition du board. L\'investisseur peut bloquer : une nouvelle levée de fonds, une vente de la société, un changement de statuts, une prise de dette au-delà d\'un seuil, etc.',
    difficulty: 'medium',
  },

  // ── Bridge rounds ──────────────────────────
  {
    id: 'vc-q24',
    lessonId: 'vc-15',
    question: 'Un bridge round « de force » est caractérisé par :',
    options: [
      'Des conditions très défavorables pour le fondateur',
      'La participation des investisseurs existants pour atteindre un milestone clé avant un gros round',
      'Le remplacement du CEO',
      'Une liquidation de la société',
    ],
    correctIndex: 1,
    explanation: 'Le bridge de force est un financement tactique : la startup est en bonne trajectoire mais veut atteindre un milestone (ex : 1 M EUR d\'ARR) avant de lever un round pricé à une meilleure valorisation. Les investisseurs existants participent avec confiance.',
    difficulty: 'easy',
  },

  // ── Down rounds ────────────────────────────
  {
    id: 'vc-q25',
    lessonId: 'vc-16',
    question: 'Lors d\'un down round, les BSPCE/options existants deviennent problématiques car :',
    options: [
      'Ils sont automatiquement annulés',
      'Leur prix d\'exercice est supérieur au nouveau prix de l\'action (underwater)',
      'Ils sont convertis en dette',
      'Leur vesting est accéléré',
    ],
    correctIndex: 1,
    explanation: 'Quand le prix de l\'action baisse (down round), les options/BSPCE dont le prix d\'exercice est supérieur au nouveau prix sont « underwater » : les exercer coûterait plus cher que la valeur de l\'action. Cela démotive les salariés, d\'où la pratique du repricing.',
    difficulty: 'medium',
  },

  // ── Sorties VC ─────────────────────────────
  {
    id: 'vc-q26',
    lessonId: 'vc-17',
    question: 'La voie de sortie la plus fréquente en VC est :',
    options: ['L\'IPO', 'L\'acquisition (M&A)', 'Le secondary sale', 'Le rachat par le fondateur'],
    correctIndex: 1,
    explanation: 'L\'acquisition (M&A) représente 80-90 % des exits VC. L\'IPO ne concerne que 5-10 % des cas et est réservée aux startups les plus performantes. Le secondary sale est en croissance mais reste minoritaire.',
    difficulty: 'easy',
  },
  {
    id: 'vc-q27',
    lessonId: 'vc-17',
    question: 'Le concept de « fund returner » en VC signifie que :',
    options: [
      'L\'investisseur retourne son argent au LP',
      'Un seul deal génère un retour suffisant pour rembourser la totalité du fonds',
      'Le fonds atteint un MOIC de 1x',
      'Le GP rend le carried interest',
    ],
    correctIndex: 1,
    explanation: 'Un fund returner est un investissement dont le retour égale ou dépasse la taille totale du fonds. Si un fonds de 100 M EUR investit 4 M dans une startup qui retourne 100 M EUR (25x), c\'est un fund returner. C\'est le Graal du VC.',
    difficulty: 'medium',
  },

  // ── Cas Term sheet ─────────────────────────
  {
    id: 'vc-q28',
    lessonId: 'vc-18',
    question: 'Entre un term sheet à 30 M EUR pre-money (1x non-participating, BBWA) et un à 25 M EUR pre-money (1x participating, full ratchet), le fondateur devrait préférer :',
    options: [
      'Le second car il est plus simple',
      'Le premier car les termes économiques et de protection sont nettement plus favorables',
      'Celui avec la valorisation la plus basse',
      'Ils sont équivalents',
    ],
    correctIndex: 1,
    explanation: 'Le term sheet à 30 M (non-participating, BBWA) est nettement plus favorable : la valo est plus haute, le non-participating évite le double dip, et le BBWA est beaucoup moins dilutif que le full ratchet en cas de down round. Les termes comptent autant que la valorisation !',
    difficulty: 'hard',
  },
  {
    id: 'vc-q29',
    lessonId: 'vc-18',
    question: 'Un fondateur à 65 % qui cède 25 % en Series A (avec un option pool de 10 % pre-money) se retrouve à :',
    options: ['40 %', '43,9 %', '48,75 %', '55 %'],
    correctIndex: 1,
    explanation: 'L\'option pool de 10 % est créé d\'abord sur le capital existant : le fondateur passe de 65 % à 65 % × (1 - 10 %) = 58,5 % (les 10 % diluent tout le monde proportionnellement). Puis la Series A dilue de 25 % : 58,5 % × 0,75 = 43,875 % ≈ 43,9 %.',
    difficulty: 'hard',
  },
];
