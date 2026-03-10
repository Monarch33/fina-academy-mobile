// ──────────────────────────────────────────────
//  FINA - Fixed Income : Quiz Questions
// ──────────────────────────────────────────────

import type { QuizQuestion } from '../types';

export const fixedIncomeQuiz: QuizQuestion[] = [
  // ── Principes obligations ─────────────────
  {
    id: 'fi-q01',
    lessonId: 'fi-01',
    question: 'Quand les taux d\'intérêt du marché augmentent, que se passe-t-il pour le prix d\'une obligation à taux fixe ?',
    options: ['Il augmente', 'Il reste stable', 'Il diminue', 'Cela dépend de la maturité uniquement'],
    correctIndex: 2,
    explanation: 'Le prix d\'une obligation à taux fixe évolue en sens inverse des taux : quand les taux montent, la valeur actualisée des flux futurs diminue, donc le prix baisse.',
    difficulty: 'easy',
  },
  {
    id: 'fi-q02',
    lessonId: 'fi-01',
    question: 'Une obligation zéro-coupon de nominal 1 000 EUR, maturité 2 ans, avec un taux de 5 %, vaut environ :',
    options: ['950 EUR', '907 EUR', '900 EUR', '1 000 EUR'],
    correctIndex: 1,
    explanation: 'Prix = 1 000 / (1,05)² = 1 000 / 1,1025 ≈ 907,03 EUR. Le zéro-coupon ne verse aucun coupon intermédiaire, son prix est simplement l\'actualisation du nominal.',
    difficulty: 'medium',
  },

  // ── Pricing ────────────────────────────────
  {
    id: 'fi-q03',
    lessonId: 'fi-02',
    question: 'Quelle est la différence entre le dirty price et le clean price ?',
    options: ['Le dirty price inclut les frais de transaction', 'Le clean price inclut le coupon couru', 'Le dirty price inclut le coupon couru', 'Il n\'y a aucune différence'],
    correctIndex: 2,
    explanation: 'Dirty price = clean price + coupon couru. Le clean price est le prix affiché (ex-coupon), le dirty price est le prix réellement payé par l\'acheteur.',
    difficulty: 'easy',
  },
  {
    id: 'fi-q04',
    lessonId: 'fi-02',
    question: 'Une obligation cote au pair lorsque :',
    options: ['Son prix est exactement 100 % du nominal', 'Son coupon est nul', 'Elle est émise par un État', 'Son YTM est supérieur au coupon'],
    correctIndex: 0,
    explanation: 'Une obligation cote au pair (prix = 100 % du nominal) lorsque son coupon est exactement égal au taux de rendement exigé par le marché.',
    difficulty: 'easy',
  },

  // ── YTM ────────────────────────────────────
  {
    id: 'fi-q05',
    lessonId: 'fi-03',
    question: 'Le Yield to Maturity (YTM) suppose que :',
    options: ['L\'émetteur fera défaut', 'Les coupons sont réinvestis au taux du coupon', 'Les coupons sont réinvestis au YTM', 'Les coupons ne sont pas réinvestis'],
    correctIndex: 2,
    explanation: 'Le YTM suppose implicitement que tous les coupons intermédiaires sont réinvestis exactement au même taux YTM jusqu\'à la maturité. Cette hypothèse est rarement vérifiée en pratique.',
    difficulty: 'medium',
  },
  {
    id: 'fi-q06',
    lessonId: 'fi-03',
    question: 'Si le YTM d\'une obligation est supérieur à son taux de coupon, l\'obligation cote :',
    options: ['Au-dessus du pair (prime)', 'Au pair', 'En dessous du pair (décote)', 'On ne peut pas savoir'],
    correctIndex: 2,
    explanation: 'Quand YTM > coupon, le marché exige un rendement supérieur au coupon. L\'investisseur obtient ce surcroît de rendement par un gain en capital : il achète sous le pair et reçoit 100 à maturité.',
    difficulty: 'easy',
  },

  // ── Duration & Convexité ───────────────────
  {
    id: 'fi-q07',
    lessonId: 'fi-04',
    question: 'La duration modifiée d\'une obligation est de 6,5. Si les taux montent de 50 bps, quelle est la variation approximative du prix ?',
    options: ['-3,25 %', '+3,25 %', '-6,50 %', '-0,325 %'],
    correctIndex: 0,
    explanation: 'ΔP/P ≈ -D* × Δy = -6,5 × 0,005 = -0,0325 = -3,25 %. La duration modifiée donne directement la variation relative du prix pour un petit mouvement de taux.',
    difficulty: 'medium',
  },
  {
    id: 'fi-q08',
    lessonId: 'fi-04',
    question: 'La convexité d\'une obligation classique (vanilla) est :',
    options: ['Toujours négative', 'Toujours positive', 'Nulle', 'Positive ou négative selon les taux'],
    correctIndex: 1,
    explanation: 'Pour une obligation classique sans options intégrées, la convexité est toujours positive. La relation prix-taux est une courbe convexe, ce qui bénéficie à l\'investisseur : le prix monte plus qu\'il ne baisse pour un même mouvement de taux.',
    difficulty: 'easy',
  },

  // ── Macaulay vs Modifiée ───────────────────
  {
    id: 'fi-q09',
    lessonId: 'fi-05',
    question: 'Pour une obligation zéro-coupon de maturité 7 ans, la duration de Macaulay est :',
    options: ['Inférieure à 7 ans', 'Exactement 7 ans', 'Supérieure à 7 ans', 'Dépend du taux'],
    correctIndex: 1,
    explanation: 'Pour un zéro-coupon, il n\'y a qu\'un seul flux (le nominal à maturité). La duration de Macaulay est donc exactement égale à la maturité : 7 ans.',
    difficulty: 'easy',
  },
  {
    id: 'fi-q10',
    lessonId: 'fi-05',
    question: 'Le DV01 d\'un portefeuille de 100 M EUR avec une duration modifiée de 4,2 est :',
    options: ['4 200 EUR', '42 000 EUR', '420 000 EUR', '4 200 000 EUR'],
    correctIndex: 1,
    explanation: 'DV01 = D* × P × 0,0001 = 4,2 × 100 000 000 × 0,0001 = 42 000 EUR. Chaque mouvement de 1 bp fait varier le portefeuille de 42 000 EUR.',
    difficulty: 'medium',
  },

  // ── Immunisation ───────────────────────────
  {
    id: 'fi-q11',
    lessonId: 'fi-06',
    question: 'Pour immuniser un engagement à horizon 5 ans, la duration du portefeuille doit être :',
    options: ['Supérieure à 5 ans', 'Inférieure à 5 ans', 'Égale à 5 ans', 'Égale à la moitié de 5 ans'],
    correctIndex: 2,
    explanation: 'L\'immunisation classique exige que la duration du portefeuille soit exactement égale à l\'horizon de l\'engagement. Ainsi, les effets de variation de prix et de réinvestissement se compensent.',
    difficulty: 'easy',
  },
  {
    id: 'fi-q12',
    lessonId: 'fi-06',
    question: 'L\'immunisation classique protège contre :',
    options: ['Les shifts parallèles de la courbe des taux', 'Les mouvements de twist', 'Le risque de défaut', 'Tous les types de mouvements de taux'],
    correctIndex: 0,
    explanation: 'L\'immunisation par la duration ne protège que contre les déplacements parallèles de la courbe. Pour les mouvements non parallèles (twist, butterfly), il faut des techniques plus avancées comme le key rate duration matching.',
    difficulty: 'medium',
  },

  // ── Structure par terme ────────────────────
  {
    id: 'fi-q13',
    lessonId: 'fi-07',
    question: 'Une courbe des taux inversée signale généralement :',
    options: ['Une période d\'expansion économique', 'Une anticipation de récession', 'Une hausse attendue de l\'inflation', 'Un marché en équilibre'],
    correctIndex: 1,
    explanation: 'Historiquement, l\'inversion de la courbe des taux (taux courts > taux longs) a précédé chaque récession américaine depuis 1960 avec un délai moyen de 12 à 18 mois.',
    difficulty: 'easy',
  },
  {
    id: 'fi-q14',
    lessonId: 'fi-07',
    question: 'Selon la théorie de la préférence pour la liquidité, la prime de terme :',
    options: ['Est négative', 'Est nulle', 'Croît avec la maturité', 'Décroît avec la maturité'],
    correctIndex: 2,
    explanation: 'La théorie de la préférence pour la liquidité (Hicks) stipule que les investisseurs exigent une prime croissante avec la maturité pour compenser le risque accru de bloquer leur capital sur une durée plus longue.',
    difficulty: 'medium',
  },

  // ── Bootstrapping ──────────────────────────
  {
    id: 'fi-q15',
    lessonId: 'fi-08',
    question: 'Le bootstrapping permet de :',
    options: ['Calculer le spread de crédit', 'Extraire les taux spot à partir des prix d\'obligations à coupon', 'Prévoir les taux futurs', 'Valoriser les options'],
    correctIndex: 1,
    explanation: 'Le bootstrapping est la technique itérative qui extrait les taux zéro-coupon (spot) de proche en proche, à partir des prix de marché d\'obligations à coupon de maturités croissantes.',
    difficulty: 'easy',
  },

  // ── Taux forward ───────────────────────────
  {
    id: 'fi-q16',
    lessonId: 'fi-09',
    question: 'Si le taux spot 1 an est 3 % et le taux spot 2 ans est 4 %, le taux forward 1 an dans 1 an est environ :',
    options: ['3,5 %', '4,0 %', '5,0 %', '7,0 %'],
    correctIndex: 2,
    explanation: 'f₁,₂ = (1,04)²/(1,03) - 1 = 1,0816/1,03 - 1 ≈ 5,01 %. Le forward est supérieur au spot 2 ans car la courbe est croissante : les taux futurs implicites sont plus élevés.',
    difficulty: 'hard',
  },

  // ── Obligations d'État ─────────────────────
  {
    id: 'fi-q17',
    lessonId: 'fi-10',
    question: 'Le benchmark obligataire de la zone euro est :',
    options: ['L\'OAT française', 'Le Bund allemand', 'Le BTP italien', 'Le Bono espagnol'],
    correctIndex: 1,
    explanation: 'Le Bund allemand est la référence (benchmark) de la zone euro car l\'Allemagne bénéficie de la meilleure notation crédit (AAA) et du marché le plus liquide. Tous les spreads souverains européens se mesurent par rapport au Bund.',
    difficulty: 'easy',
  },

  // ── Corporate ──────────────────────────────
  {
    id: 'fi-q18',
    lessonId: 'fi-11',
    question: 'En cas de défaut, le taux de recouvrement moyen d\'une obligation senior unsecured est d\'environ :',
    options: ['10-20 %', '40-60 %', '70-80 %', '90-100 %'],
    correctIndex: 1,
    explanation: 'Historiquement, le taux de recouvrement moyen des obligations senior unsecured est de 40-60 %. Les secured récupèrent davantage (60-80 %) et les subordonnées moins (20-30 %).',
    difficulty: 'medium',
  },

  // ── HY & IG ────────────────────────────────
  {
    id: 'fi-q19',
    lessonId: 'fi-12',
    question: 'La frontière entre Investment Grade et High Yield se situe à :',
    options: ['A-/A3', 'BBB-/Baa3', 'BB+/Ba1', 'BBB-/Baa3 (IG) et BB+/Ba1 (HY)'],
    correctIndex: 3,
    explanation: 'BBB-/Baa3 est la notation IG la plus basse. BB+/Ba1 est la notation HY la plus haute. La frontière se situe donc entre BBB-/Baa3 (dernier cran IG) et BB+/Ba1 (premier cran HY).',
    difficulty: 'easy',
  },
  {
    id: 'fi-q20',
    lessonId: 'fi-12',
    question: 'Un « fallen angel » est :',
    options: ['Une obligation qui fait défaut', 'Un émetteur rétrogradé d\'IG à HY', 'Un émetteur promu de HY à IG', 'Un bond indexé sur l\'inflation'],
    correctIndex: 1,
    explanation: 'Un fallen angel est un émetteur qui perd son statut Investment Grade et passe en High Yield. Ce downgrade déclenche des ventes forcées par les investisseurs IG contraints, élargissant fortement le spread.',
    difficulty: 'easy',
  },

  // ── Spreads de crédit ──────────────────────
  {
    id: 'fi-q21',
    lessonId: 'fi-13',
    question: 'Le Z-spread est :',
    options: ['L\'écart entre le YTM et le taux repo', 'Le spread constant ajouté à la courbe spot pour retrouver le prix', 'Le spread entre deux obligations corporate', 'Le spread des zéro-coupons'],
    correctIndex: 1,
    explanation: 'Le Z-spread (Zero-volatility spread) est le spread constant qu\'on ajoute à chaque taux spot de la courbe zéro-coupon pour que la somme des flux actualisés soit égale au prix de marché de l\'obligation.',
    difficulty: 'medium',
  },

  // ── Analyse crédit ─────────────────────────
  {
    id: 'fi-q22',
    lessonId: 'fi-14',
    question: 'Un ratio Dette nette / EBITDA de 1,5x pour un émetteur corporate est considéré comme :',
    options: ['Très risqué', 'Modérément risqué', 'Solide Investment Grade', 'Insuffisant pour émettre'],
    correctIndex: 2,
    explanation: 'Un leverage de 1,5x est considéré comme solide IG. Les seuils typiques sont : < 2x pour un IG confortable, 2-4x pour un BBB, > 4-5x pour le HY.',
    difficulty: 'medium',
  },

  // ── Ratings ────────────────────────────────
  {
    id: 'fi-q23',
    lessonId: 'fi-15',
    question: 'Le modèle économique « issuer-pays » des agences de notation signifie que :',
    options: ['L\'investisseur paie pour accéder aux notations', 'L\'émetteur paie pour être noté', 'L\'État paie pour les notations', 'Les notations sont gratuites'],
    correctIndex: 1,
    explanation: 'Dans le modèle issuer-pays, c\'est l\'émetteur qui rémunère l\'agence pour être noté. Ce modèle crée un conflit d\'intérêts potentiel, mis en lumière lors de la crise de 2008 où des produits structurés toxiques ont reçu des notations AAA.',
    difficulty: 'easy',
  },

  // ── Covered bonds ──────────────────────────
  {
    id: 'fi-q24',
    lessonId: 'fi-16',
    question: 'La caractéristique fondamentale des covered bonds est :',
    options: ['Ils sont émis par des États', 'Le double recours (sur l\'émetteur et le cover pool)', 'Ils n\'ont pas de coupon', 'Ils sont toujours indexés sur l\'inflation'],
    correctIndex: 1,
    explanation: 'Le dual recourse est la caractéristique distinctive : en cas de défaut de l\'émetteur, l\'investisseur a un droit prioritaire sur le cover pool (prêts hypothécaires), en plus du recours général à l\'émetteur.',
    difficulty: 'easy',
  },

  // ── ABS ────────────────────────────────────
  {
    id: 'fi-q25',
    lessonId: 'fi-17',
    question: 'Dans une titrisation, la tranche equity :',
    options: ['Est la plus sûre', 'Absorbe les premières pertes', 'Reçoit les flux en priorité', 'Est toujours notée AAA'],
    correctIndex: 1,
    explanation: 'La tranche equity (ou first loss piece) absorbe les premières pertes du portefeuille titrisé. Elle protège les tranches mezzanine et senior au-dessus. En contrepartie, elle offre le rendement le plus élevé.',
    difficulty: 'easy',
  },
  {
    id: 'fi-q26',
    lessonId: 'fi-17',
    question: 'Le credit enhancement d\'une tranche AAA d\'ABS représente typiquement :',
    options: ['0-5 %', '5-10 %', '20-30 %', '50-60 %'],
    correctIndex: 2,
    explanation: 'Le credit enhancement total pour une tranche AAA est typiquement de 20-30 %, combinant subordination (tranches equity + mezzanine en dessous), excess spread et réserves de cash.',
    difficulty: 'hard',
  },

  // ── MBS ────────────────────────────────────
  {
    id: 'fi-q27',
    lessonId: 'fi-18',
    question: 'La negative convexity des MBS signifie que :',
    options: ['Le prix baisse plus vite quand les taux montent', 'Le prix monte moins vite quand les taux baissent (plafonnement)', 'Le prix est toujours négatif', 'La duration est négative'],
    correctIndex: 1,
    explanation: 'Quand les taux baissent, les emprunteurs refinancent (prepayment), ce qui limite la hausse du prix du MBS. Le prix est plafonné autour du pair, d\'où une convexité négative : l\'investisseur ne profite pas pleinement de la baisse des taux.',
    difficulty: 'medium',
  },

  // ── Convertibles ───────────────────────────
  {
    id: 'fi-q28',
    lessonId: 'fi-19',
    question: 'Une obligation convertible se comporte principalement comme une action lorsque :',
    options: ['Le cours est bien en dessous du prix de conversion', 'Le cours est bien au-dessus du prix de conversion (delta > 80 %)', 'Le coupon est élevé', 'L\'obligation arrive à maturité'],
    correctIndex: 1,
    explanation: 'Quand l\'action est très au-dessus du prix de conversion, le delta dépasse 80 % et la convertible se comporte quasiment comme l\'action sous-jacente (zone « equity »). La valeur temps de l\'option devient négligeable.',
    difficulty: 'medium',
  },

  // ── Inflation-linked ───────────────────────
  {
    id: 'fi-q29',
    lessonId: 'fi-20',
    question: 'Le breakeven inflation est de 2,5 %. Si l\'inflation réalisée est de 3 %, alors :',
    options: ['L\'obligation nominale surperforme', 'Les deux se valent', 'L\'obligation indexée surperforme', 'On ne peut pas conclure'],
    correctIndex: 2,
    explanation: 'Si l\'inflation réalisée (3 %) est supérieure au breakeven (2,5 %), l\'obligation indexée surperforme l\'obligation nominale. Le breakeven est le seuil d\'indifférence entre les deux.',
    difficulty: 'easy',
  },

  // ── Green bonds ────────────────────────────
  {
    id: 'fi-q30',
    lessonId: 'fi-21',
    question: 'Le « greenium » désigne :',
    options: ['La prime de risque des green bonds', 'Le spread plus faible accepté par les investisseurs ESG', 'Le coupon plus élevé des green bonds', 'La pénalité en cas de greenwashing'],
    correctIndex: 1,
    explanation: 'Le greenium est la prime (négative en termes de spread) que les investisseurs acceptent pour détenir des green bonds : ils acceptent un rendement légèrement inférieur (2-5 bps) grâce à la forte demande ESG.',
    difficulty: 'easy',
  },

  // ── Repo ───────────────────────────────────
  {
    id: 'fi-q31',
    lessonId: 'fi-22',
    question: 'Un titre « on special » dans le marché repo a un taux repo qui est :',
    options: ['Plus élevé que le GC', 'Identique au GC', 'Plus faible que le GC, voire négatif', 'Toujours exactement zéro'],
    correctIndex: 2,
    explanation: 'Un titre on special est très demandé (short squeeze, livraison de futures). Le prêteur du titre peut exiger un taux repo très faible car le collatéral spécifique a de la valeur. Le taux peut devenir négatif.',
    difficulty: 'medium',
  },

  // ── Cas Émission ───────────────────────────
  {
    id: 'fi-q32',
    lessonId: 'fi-23',
    question: 'Un carnet d\'ordres 4x sursouscrit lors d\'une émission obligataire permet typiquement de :',
    options: ['Augmenter le coupon', 'Resserrer le spread par rapport à l\'IPT', 'Annuler l\'émission', 'Allonger la maturité'],
    correctIndex: 1,
    explanation: 'Une forte sursouscription (ici 4x) indique une demande robuste. L\'émetteur et les bookrunners peuvent resserrer le spread (guidance → pricing) de 15-20 bps typiquement, réduisant le coût de financement.',
    difficulty: 'medium',
  },

  // ── Examen final ───────────────────────────
  {
    id: 'fi-q33',
    lessonId: 'fi-24',
    question: 'Si une obligation 10 ans cote 102,50 avec un coupon de 3 %, son YTM est :',
    options: ['Supérieur à 3 %', 'Égal à 3 %', 'Inférieur à 3 %', 'Égal à 2,50 %'],
    correctIndex: 2,
    explanation: 'L\'obligation cote au-dessus du pair (102,50 > 100), ce qui signifie que le rendement du marché est inférieur au coupon. L\'investisseur subit une perte en capital à maturité (achète 102,50, reçoit 100), donc le YTM est inférieur au coupon de 3 %.',
    difficulty: 'easy',
  },
  {
    id: 'fi-q34',
    lessonId: 'fi-24',
    question: 'Pour construire un portefeuille immunisé avec une duration cible de 6 ans en combinant des obligations de duration 3 ans et 9 ans, le poids de l\'obligation 9 ans est :',
    options: ['33 %', '50 %', '67 %', '75 %'],
    correctIndex: 1,
    explanation: 'w × 9 + (1-w) × 3 = 6 → 9w + 3 - 3w = 6 → 6w = 3 → w = 50 %. On investit 50 % dans chaque obligation pour obtenir une duration de 6 ans.',
    difficulty: 'hard',
  },
];
