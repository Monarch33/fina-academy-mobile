// ──────────────────────────────────────────────
//  FINA - Finance Quantitative : Quiz Questions
// ──────────────────────────────────────────────

import type { QuizQuestion } from '@/types/course';

export const quantitativeQuiz: QuizQuestion[] = [
  // ── Leçon 1 : Probabilités ─────────────────
  {
    id: 'qt-q01',
    lessonId: 'qt-01',
    question: 'Que représente la filtration (Fₜ) en finance ?',
    options: [
      'L\'ensemble des prix futurs possibles',
      'L\'information disponible au temps t',
      'La mesure de probabilité risque-neutre',
      'La volatilité conditionnelle',
    ],
    correctIndex: 1,
    explanation:
      'La filtration (Fₜ) modélise l\'information disponible au temps t. Elle ne peut que croître : on ne peut pas désapprendre. Les stratégies de trading doivent être adaptées à la filtration (pas de look-ahead).',
    difficulty: 'medium',
  },
  {
    id: 'qt-q02',
    lessonId: 'qt-01',
    question: 'Le théorème de Bayes permet de :',
    options: [
      'Calculer la variance d\'un portefeuille',
      'Mettre à jour les probabilités lorsqu\'une nouvelle information arrive',
      'Déterminer le prix d\'une option',
      'Estimer la corrélation entre deux actifs',
    ],
    correctIndex: 1,
    explanation:
      'Le théorème de Bayes P(A|B) = P(B|A)P(A)/P(B) permet de mettre à jour nos croyances (probabilités a priori) en incorporant une nouvelle observation (vraisemblance). C\'est le fondement du filtrage bayésien en trading.',
    difficulty: 'easy',
  },

  // ── Leçon 2 : Variables aléatoires ─────────
  {
    id: 'qt-q03',
    lessonId: 'qt-02',
    question: 'Que signifie un excès de kurtosis positif pour les rendements financiers ?',
    options: [
      'Les rendements sont symétriques',
      'Les événements extrêmes sont plus fréquents que sous la loi normale',
      'La volatilité est constante',
      'Les rendements sont toujours positifs',
    ],
    correctIndex: 1,
    explanation:
      'Un excès de kurtosis positif (queues épaisses ou fat tails) signifie que les événements extrêmes (krachs, rallyes violents) sont plus fréquents que ce que prédit la loi normale. Les rendements financiers affichent systématiquement cette propriété.',
    difficulty: 'medium',
  },

  // ── Leçon 3 : Distributions ────────────────
  {
    id: 'qt-q04',
    lessonId: 'qt-03',
    question: 'Pourquoi les prix des actions suivent-ils une loi log-normale et non une loi normale dans le modèle de Black-Scholes ?',
    options: [
      'Parce que la loi log-normale est plus facile à calculer',
      'Parce que les prix ne peuvent pas être négatifs, ce qu\'assure la loi log-normale',
      'Parce que la loi normale prédit mieux les krachs',
      'Parce que les rendements sont toujours positifs',
    ],
    correctIndex: 1,
    explanation:
      'Les log-rendements (ln(Sₜ/S₀)) suivent une loi normale, ce qui implique que les prix Sₜ = S₀ × exp(log-rendement) suivent une loi log-normale. Comme l\'exponentielle est toujours positive, les prix ne peuvent jamais devenir négatifs.',
    difficulty: 'medium',
  },
  {
    id: 'qt-q05',
    lessonId: 'qt-03',
    question: 'Quel événement historique a illustré l\'insuffisance de la loi normale pour les rendements financiers ?',
    options: [
      'La bulle Internet de 2000',
      'Le lundi noir du 19 octobre 1987 (Dow Jones −22,6 %)',
      'La crise asiatique de 1997',
      'Le Brexit de 2016',
    ],
    correctIndex: 1,
    explanation:
      'Le lundi noir de 1987 a vu le Dow Jones chuter de 22,6 % en une seule journée, un événement de plus de 20 écarts-types sous la loi normale, soit une probabilité virtuellement nulle. Cela a démontré la nécessité de distributions à queues épaisses.',
    difficulty: 'easy',
  },

  // ── Leçon 4 : Processus stochastiques ──────
  {
    id: 'qt-q06',
    lessonId: 'qt-04',
    question: 'Que signifie la propriété de Markov pour un processus de prix ?',
    options: [
      'Le prix a une tendance à revenir vers sa moyenne',
      'Le prix futur ne dépend que du prix présent, pas de l\'historique passé',
      'Le prix est toujours croissant',
      'Le prix suit une loi normale',
    ],
    correctIndex: 1,
    explanation:
      'La propriété de Markov stipule que P(Xₜ₊₁ | Xₜ, Xₜ₋₁, ...) = P(Xₜ₊₁ | Xₜ). Toute l\'information pertinente est contenue dans l\'état présent. En finance, c\'est lié à l\'hypothèse d\'efficience des marchés.',
    difficulty: 'medium',
  },

  // ── Leçon 5 : Mouvement brownien ──────────
  {
    id: 'qt-q07',
    lessonId: 'qt-05',
    question: 'Quelle est la propriété remarquable des trajectoires du mouvement brownien ?',
    options: [
      'Elles sont lisses et dérivables',
      'Elles sont continues mais nulle part dérivables',
      'Elles sont discontinues (avec des sauts)',
      'Elles sont toujours croissantes',
    ],
    correctIndex: 1,
    explanation:
      'Les trajectoires du mouvement brownien sont continues (pas de sauts) mais nulle part dérivables (infiniment erratiques à toute échelle). C\'est cette propriété qui empêche l\'utilisation du calcul classique et nécessite le calcul d\'Itô.',
    difficulty: 'medium',
  },
  {
    id: 'qt-q08',
    lessonId: 'qt-05',
    question: 'Dans le mouvement brownien géométrique Sₜ = S₀ exp((μ − σ²/2)t + σWₜ), que représente le terme −σ²/2 ?',
    options: [
      'Le coût de transaction',
      'La correction d\'Itô (ou correction de convexité)',
      'Le taux sans risque',
      'La prime de risque',
    ],
    correctIndex: 1,
    explanation:
      'Le terme −σ²/2 est la correction d\'Itô qui apparaît quand on passe du logarithme du prix (drift μ) au prix lui-même. Sans cette correction, E[Sₜ] serait différent de S₀exp(μt). C\'est la signature du calcul stochastique.',
    difficulty: 'hard',
  },

  // ── Leçon 6 : Calcul d\'Itô ────────────────
  {
    id: 'qt-q09',
    lessonId: 'qt-06',
    question: 'Quelle est la règle fondamentale du calcul d\'Itô qui diffère du calcul classique ?',
    options: [
      '(dt)² = dt',
      '(dW)² = dt',
      'dW × dt = dt',
      '(dW)² = 0',
    ],
    correctIndex: 1,
    explanation:
      'La règle (dW)² = dt est la différence fondamentale entre le calcul d\'Itô et le calcul classique. En calcul classique, (dx)² = 0 car c\'est un infiniment petit d\'ordre 2. Mais la variation quadratique du brownien est finie, d\'où (dW)² = dt.',
    difficulty: 'medium',
  },
  {
    id: 'qt-q10',
    lessonId: 'qt-06',
    question: 'Dans le lemme d\'Itô, quel terme supplémentaire apparaît par rapport à la règle de la chaîne classique ?',
    options: [
      'Le terme μ∂f/∂x',
      'Le terme ∂f/∂t',
      'Le terme ½σ²∂²f/∂x² (terme d\'Itô)',
      'Le terme σ∂f/∂x dW',
    ],
    correctIndex: 2,
    explanation:
      'Le "terme d\'Itô" ½σ²∂²f/∂x² est absent du calcul déterministe. Il provient de la règle (dW)² = dt : la dérivée seconde contribue à la valeur moyenne du processus. C\'est ce terme qui crée la correction de convexité.',
    difficulty: 'hard',
  },

  // ── Leçon 7 : Martingales ─────────────────
  {
    id: 'qt-q11',
    lessonId: 'qt-07',
    question: 'Que signifie dire que les prix actualisés sont des martingales sous Q ?',
    options: [
      'Les prix montent en moyenne',
      'L\'espérance conditionnelle du prix futur actualisé est le prix actuel (pas d\'argent gratuit)',
      'Les prix suivent une marche aléatoire',
      'La volatilité est constante',
    ],
    correctIndex: 1,
    explanation:
      'Sous la mesure risque-neutre Q, les prix actualisés sont des martingales : E^Q[e^{−rT}Sₜ | Fₛ] = e^{−rs}Sₛ. Le prix actuel est la meilleure estimation du prix futur actualisé. C\'est la traduction mathématique de l\'absence d\'arbitrage.',
    difficulty: 'hard',
  },

  // ── Leçon 8 : Mesure risque-neutre ─────────
  {
    id: 'qt-q12',
    lessonId: 'qt-08',
    question: 'Sous la mesure risque-neutre Q, quel est le drift du prix de l\'action ?',
    options: [
      'Le rendement attendu μ',
      'Le taux sans risque r',
      'Zéro',
      'La volatilité σ',
    ],
    correctIndex: 1,
    explanation:
      'Sous Q, tous les actifs ont un rendement espéré égal au taux sans risque r (et non μ). Le théorème de Girsanov effectue ce changement de drift. C\'est ce qui permet de calculer les prix par l\'espérance actualisée.',
    difficulty: 'medium',
  },
  {
    id: 'qt-q13',
    lessonId: 'qt-08',
    question: 'Que dit le second théorème fondamental de la finance ?',
    options: [
      'L\'absence d\'arbitrage implique l\'existence d\'une mesure risque-neutre',
      'Le marché est complet si et seulement si la mesure risque-neutre est unique',
      'La volatilité est constante sous Q',
      'Les prix sont des martingales sous P',
    ],
    correctIndex: 1,
    explanation:
      'Le second théorème fondamental dit que la mesure risque-neutre Q est unique si et seulement si le marché est complet (tout dérivé peut être répliqué). Quand Q n\'est pas unique, il y a une infinité de prix possibles et le pricing nécessite des choix supplémentaires.',
    difficulty: 'hard',
  },

  // ── Leçon 9 : Black-Scholes ───────────────
  {
    id: 'qt-q14',
    lessonId: 'qt-09',
    question: 'Quel est le principe fondamental derrière la dérivation de Black-Scholes ?',
    options: [
      'Les options sont toujours surévaluées par le marché',
      'Un portefeuille constitué de l\'option et de −Δ actions est sans risque (delta hedging)',
      'Les rendements suivent toujours une loi normale',
      'La volatilité implicite est constante',
    ],
    correctIndex: 1,
    explanation:
      'Black et Scholes montrent qu\'en détenant V − ΔS (option − delta × actions), on obtient un portefeuille sans risque pour un court instant dt. Ce portefeuille doit rapporter le taux sans risque, ce qui donne l\'EDP de Black-Scholes.',
    difficulty: 'medium',
  },
  {
    id: 'qt-q15',
    lessonId: 'qt-09',
    question: 'Selon la formule de Black-Scholes, le prix d\'un call européen augmente quand :',
    options: [
      'La volatilité diminue',
      'Le taux sans risque diminue',
      'La volatilité augmente (vega positif)',
      'Le temps jusqu\'à maturité diminue (theta négatif pour un long call)',
    ],
    correctIndex: 2,
    explanation:
      'Le vega d\'un call est toujours positif : une hausse de la volatilité augmente le prix de l\'option (l\'optionalité a plus de valeur quand l\'incertitude est grande). C\'est vrai pour les calls et les puts.',
    difficulty: 'easy',
  },

  // ── Leçon 10 : Monte Carlo ────────────────
  {
    id: 'qt-q16',
    lessonId: 'qt-10',
    question: 'Comment évolue l\'erreur d\'estimation Monte Carlo avec le nombre de simulations N ?',
    options: [
      'En 1/N',
      'En 1/√N',
      'En 1/N²',
      'En √N',
    ],
    correctIndex: 1,
    explanation:
      'L\'erreur standard du Monte Carlo est proportionnelle à σ/√N (théorème central limite). Pour diviser l\'erreur par 2, il faut multiplier N par 4. Cette convergence lente est le principal défaut de la méthode.',
    difficulty: 'medium',
  },
  {
    id: 'qt-q17',
    lessonId: 'qt-10',
    question: 'Quelle technique de réduction de variance utilise des paires de tirages (Z, −Z) ?',
    options: [
      'Variable de contrôle',
      'Importance sampling',
      'Méthode antithétique',
      'Stratification',
    ],
    correctIndex: 2,
    explanation:
      'La méthode antithétique simule chaque trajectoire deux fois : une avec Z et une avec −Z. Les deux estimations sont négativement corrélées, ce qui réduit la variance de la moyenne. Le coût de calcul n\'augmente que marginalement.',
    difficulty: 'medium',
  },

  // ── Leçon 11 : Arbres avancés ─────────────
  {
    id: 'qt-q18',
    lessonId: 'qt-11',
    question: 'Pourquoi les arbres binomiaux sont-ils particulièrement adaptés aux options américaines ?',
    options: [
      'Ils sont plus rapides que le Monte Carlo',
      'Ils permettent de comparer valeur de continuation et d\'exercice à chaque noeud',
      'Ils donnent des prix exacts',
      'Ils ne nécessitent pas de calibration',
    ],
    correctIndex: 1,
    explanation:
      'Les arbres permettent la programmation dynamique (backward induction) : à chaque noeud, on compare la valeur d\'exercice immédiat avec la valeur de continuation. Ce choix optimal ne peut pas être fait facilement en Monte Carlo forward.',
    difficulty: 'medium',
  },

  // ── Leçon 12 : Vasicek / CIR ─────────────
  {
    id: 'qt-q19',
    lessonId: 'qt-12',
    question: 'Quel est le principal avantage du modèle CIR par rapport à Vasicek ?',
    options: [
      'Il est plus facile à calibrer',
      'Il a des formules fermées plus simples',
      'Il empêche les taux de devenir négatifs (sous la condition de Feller)',
      'Il modélise mieux les taux longs',
    ],
    correctIndex: 2,
    explanation:
      'Le CIR utilise √rₜ dans la diffusion : quand le taux approche de 0, la volatilité diminue, empêchant le franchissement. La condition de Feller (2ab > σ²) garantit que rₜ > 0. Vasicek autorise les taux négatifs.',
    difficulty: 'medium',
  },

  // ── Leçon 13 : Hull-White ─────────────────
  {
    id: 'qt-q20',
    lessonId: 'qt-13',
    question: 'Quel est l\'avantage principal du modèle de Hull-White par rapport à Vasicek ?',
    options: [
      'Il empêche les taux négatifs',
      'Il colle exactement à la courbe des taux observée grâce à θ(t)',
      'Il est plus parcimonieux',
      'Il a une volatilité stochastique',
    ],
    correctIndex: 1,
    explanation:
      'Hull-White introduit une fonction θ(t) calibrée pour que le modèle reproduise exactement les prix de zéro-coupons observés sur le marché. Vasicek, avec des paramètres constants, ne peut qu\'approximer la courbe des taux.',
    difficulty: 'medium',
  },

  // ── Leçon 14 : HJM ───────────────────────
  {
    id: 'qt-q21',
    lessonId: 'qt-14',
    question: 'Que contraint la condition de drift HJM ?',
    options: [
      'Le choix de la mesure de probabilité',
      'Le drift du taux forward est entièrement déterminé par la structure de volatilité',
      'La forme de la courbe des taux initiale',
      'Le nombre de facteurs du modèle',
    ],
    correctIndex: 1,
    explanation:
      'La condition HJM stipule que α(t,T) = σ(t,T) × ∫ₜᵀ σ(t,s)ds. Une fois la volatilité σ(t,T) choisie, le drift est automatiquement fixé par l\'absence d\'arbitrage. C\'est la beauté du framework.',
    difficulty: 'hard',
  },

  // ── Leçon 15 : Volatilité locale ──────────
  {
    id: 'qt-q22',
    lessonId: 'qt-15',
    question: 'Quelle est la principale limite du modèle de volatilité locale de Dupire ?',
    options: [
      'Il ne colle pas à la surface de vol implicite',
      'Il nécessite un Monte Carlo',
      'La dynamique forward du smile est irréaliste (le smile s\'aplatit trop vite)',
      'Il ne peut pas pricer les options européennes',
    ],
    correctIndex: 2,
    explanation:
      'Le modèle de vol locale reproduit parfaitement la surface de vol à la date de calibration, mais sa dynamique forward est irréaliste : le smile s\'aplatit trop rapidement avec le temps, ce qui génère des erreurs pour les exotiques path-dependent.',
    difficulty: 'hard',
  },

  // ── Leçon 16 : Heston ────────────────────
  {
    id: 'qt-q23',
    lessonId: 'qt-16',
    question: 'Dans le modèle de Heston, que capture la corrélation négative ρ entre le prix et la volatilité ?',
    options: [
      'Le smile de volatilité',
      'Le leverage effect (la vol augmente quand le prix baisse)',
      'La mean-reversion de la volatilité',
      'Le taux sans risque',
    ],
    correctIndex: 1,
    explanation:
      'Le leverage effect est la corrélation négative entre rendements et volatilité : quand le marché baisse, la peur augmente et la volatilité explose. Le ρ < 0 de Heston capture ce phénomène et génère le skew de volatilité observé.',
    difficulty: 'medium',
  },
  {
    id: 'qt-q24',
    lessonId: 'qt-16',
    question: 'Comment price-t-on efficacement les options européennes dans le modèle de Heston ?',
    options: [
      'Par la formule de Black-Scholes',
      'Uniquement par Monte Carlo',
      'Par transformée de Fourier de la fonction caractéristique semi-analytique',
      'Par un arbre binomial',
    ],
    correctIndex: 2,
    explanation:
      'Le modèle de Heston admet une fonction caractéristique en forme fermée. Le pricing des options européennes se fait par transformée de Fourier inverse (méthode de Carr-Madan ou Heston analytique), beaucoup plus rapide que le Monte Carlo.',
    difficulty: 'hard',
  },

  // ── Leçon 17 : GARCH ─────────────────────
  {
    id: 'qt-q25',
    lessonId: 'qt-17',
    question: 'Dans un GARCH(1,1), que mesure la somme α + β ?',
    options: [
      'La volatilité de long terme',
      'La persistance de la volatilité',
      'Le rendement espéré',
      'Le ratio de Sharpe',
    ],
    correctIndex: 1,
    explanation:
      'α + β mesure la persistance de la volatilité. Si α + β ≈ 1, la volatilité revient très lentement vers sa moyenne de long terme après un choc. Pour les rendements d\'actions, α + β est typiquement entre 0,95 et 0,99.',
    difficulty: 'medium',
  },
  {
    id: 'qt-q26',
    lessonId: 'qt-17',
    question: 'Quel défaut du GARCH standard le modèle EGARCH corrige-t-il ?',
    options: [
      'La non-stationnarité',
      'La symétrie : un choc positif et négatif de même taille ont le même effet',
      'La convergence lente',
      'L\'impossibilité de volatilité nulle',
    ],
    correctIndex: 1,
    explanation:
      'Le GARCH standard est symétrique : |εₜ₋₁| affecte σₜ² de la même manière que ce soit un choc positif ou négatif. L\'EGARCH de Nelson utilise ln(σₜ²) et un terme d\'asymétrie pour capturer le leverage effect.',
    difficulty: 'medium',
  },

  // ── Leçon 18 : Copules ───────────────────
  {
    id: 'qt-q27',
    lessonId: 'qt-18',
    question: 'Pourquoi la copule gaussienne a-t-elle contribué à la crise de 2008 ?',
    options: [
      'Elle surestimait la corrélation entre les actifs',
      'Elle avait une tail dependence nulle, sous-estimant le risque de co-défaut extrême',
      'Elle était trop difficile à calibrer',
      'Elle ne pouvait modéliser que deux actifs',
    ],
    correctIndex: 1,
    explanation:
      'La copule gaussienne a une tail dependence nulle : elle suppose que la probabilité de co-mouvements extrêmes est négligeable. Les CDO pricés avec ce modèle sous-estimaient massivement le risque de défauts simultanés, ce qui a amplifié la crise.',
    difficulty: 'hard',
  },

  // ── Leçon 19 : EVT ───────────────────────
  {
    id: 'qt-q28',
    lessonId: 'qt-19',
    question: 'Dans quelle famille de distributions extrêmes tombent les rendements financiers ?',
    options: [
      'Gumbel (queues exponentielles)',
      'Weibull (queues bornées)',
      'Fréchet (queues épaisses, ξ > 0)',
      'Normale (pas de queues)',
    ],
    correctIndex: 2,
    explanation:
      'Les rendements financiers présentent des queues épaisses et tombent dans la classe Fréchet (paramètre de forme ξ > 0, typiquement 0,2-0,4). Cela signifie que les événements extrêmes sont polynomialement (et non exponentiellement) rares.',
    difficulty: 'hard',
  },

  // ── Leçon 20 : Machine Learning ───────────
  {
    id: 'qt-q29',
    lessonId: 'qt-20',
    question: 'Pourquoi la validation croisée temporelle (walk-forward) est-elle obligatoire en ML financier ?',
    options: [
      'Elle est plus rapide que la k-fold classique',
      'Elle respecte l\'ordre temporel et évite de mélanger futur et passé dans l\'entraînement',
      'Elle donne de meilleurs résultats',
      'Elle ne nécessite pas de données de test',
    ],
    correctIndex: 1,
    explanation:
      'En finance, les données sont ordonnées dans le temps. La validation croisée classique (k-fold) mélange passé et futur, créant un look-ahead bias. Le walk-forward entraîne toujours sur le passé et teste sur le futur, simulant les conditions réelles.',
    difficulty: 'medium',
  },

  // ── Leçon 21 : Backtesting quantitatif ────
  {
    id: 'qt-q30',
    lessonId: 'qt-21',
    question: 'Si on teste 100 stratégies au seuil de 5 %, combien seront faussement significatives en moyenne ?',
    options: [
      '1',
      '5',
      '10',
      '20',
    ],
    correctIndex: 1,
    explanation:
      'Avec 100 tests à 5 %, on s\'attend à 100 × 5 % = 5 faux positifs par pur hasard. C\'est le problème du multiple testing. La correction de Bonferroni ajuste le seuil à 0,05/100 = 0,05 % pour contrôler le taux d\'erreur global.',
    difficulty: 'medium',
  },
  {
    id: 'qt-q31',
    lessonId: 'qt-21',
    question: 'Le ratio de Sharpe out-of-sample est typiquement combien de fois inférieur au Sharpe in-sample ?',
    options: [
      'Identique',
      '10-20 % inférieur',
      '50-70 % inférieur',
      '90 % inférieur',
    ],
    correctIndex: 2,
    explanation:
      'Le ratio de Sharpe out-of-sample est typiquement 50-70 % inférieur au Sharpe in-sample en raison de l\'overfitting, du data snooping et de la non-stationnarité des marchés. Un Sharpe > 1 après cette dégradation est considéré comme excellent.',
    difficulty: 'hard',
  },

  // ── Leçon 22 : Optimisation de portefeuille ─
  {
    id: 'qt-q32',
    lessonId: 'qt-22',
    question: 'Quel est le principe du modèle Black-Litterman ?',
    options: [
      'Minimiser la variance sans contrainte',
      'Partir de l\'équilibre de marché et ajuster avec les vues subjectives de l\'investisseur',
      'Maximiser le rendement sans considérer le risque',
      'Allouer équitablement le capital entre tous les actifs',
    ],
    correctIndex: 1,
    explanation:
      'Black-Litterman part des rendements d\'équilibre implicites (CAPM, ce que le marché "pense") et incorpore les vues de l\'investisseur pondérées par leur niveau de confiance. Cela produit des portefeuilles plus stables et intuitifs que Markowitz pur.',
    difficulty: 'medium',
  },
  {
    id: 'qt-q33',
    lessonId: 'qt-22',
    question: 'Que signifie l\'allocation "risk parity" ?',
    options: [
      'Chaque actif a le même poids en capital',
      'Chaque actif contribue également au risque total du portefeuille',
      'Le portefeuille est sur la frontière efficiente',
      'La volatilité est minimisée',
    ],
    correctIndex: 1,
    explanation:
      'Le risk parity alloue le capital de sorte que la contribution marginale au risque de chaque actif soit identique. Les actifs moins volatils (obligations) reçoivent plus de capital que les actifs volatils (actions) pour équilibrer les contributions au risque.',
    difficulty: 'medium',
  },

  // ── Leçon 23 : Cas pratique ───────────────
  {
    id: 'qt-q34',
    lessonId: 'qt-23',
    question: 'Pour pricer une option barrière asiatique sous Heston, quelle méthode numérique est la plus appropriée ?',
    options: [
      'La formule de Black-Scholes ajustée',
      'L\'arbre binomial CRR',
      'Le Monte Carlo avec simulation du processus de Heston',
      'La transformée de Fourier de Carr-Madan',
    ],
    correctIndex: 2,
    explanation:
      'Une option barrière asiatique est path-dependent (le payoff dépend de toute la trajectoire du prix). Il n\'existe pas de formule fermée et les arbres sont impraticables. Le Monte Carlo, simulant les trajectoires complètes de (Sₜ, vₜ) sous Heston, est la méthode adaptée.',
    difficulty: 'hard',
  },

  // ── Leçon 24 : Examen final ──────────────
  {
    id: 'qt-q35',
    lessonId: 'qt-24',
    question: 'Soit f(S) = S². Par le lemme d\'Itô, si dS = μSdt + σSdW, quel est le drift de d(S²) ?',
    options: [
      '2μS²',
      '(2μ + σ²)S²',
      '2μS² + σ²',
      'μ²S²',
    ],
    correctIndex: 1,
    explanation:
      'Avec f(S) = S², ∂f/∂S = 2S et ∂²f/∂S² = 2. Le lemme d\'Itô donne le drift = 2S × μS + ½ × 2 × σ²S² = 2μS² + σ²S² = (2μ + σ²)S². Le terme σ²S² est la contribution d\'Itô (dérivée seconde).',
    difficulty: 'hard',
  },
  {
    id: 'qt-q36',
    lessonId: 'qt-24',
    question: 'Un arbre CRR avec u = 1,1 et d = 1/1,1 ≈ 0,909. Si r = 2 % et Δt = 1, la probabilité risque-neutre p est environ :',
    options: [
      '0,45',
      '0,50',
      '0,58',
      '0,65',
    ],
    correctIndex: 2,
    explanation:
      'p = (exp(rΔt) − d) / (u − d) = (exp(0,02) − 0,909) / (1,1 − 0,909) = (1,0202 − 0,909) / 0,191 = 0,111 / 0,191 ≈ 0,58. La probabilité risque-neutre n\'est pas 0,5 car le drift risque-neutre est r, non 0.',
    difficulty: 'hard',
  },
];
