// ──────────────────────────────────────────────
//  FINA - Finance Quantitative : Lessons (24)
// ──────────────────────────────────────────────

import type { Lesson } from '@/types/course';

export const quantitativeLessons: Lesson[] = [
  // ── Unité 1 : Fondements probabilistes ──────
  {
    id: 'qt-01',
    title: 'Probabilités pour la finance',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La finance quantitative repose sur un socle mathématique rigoureux. Les probabilités fournissent le langage universel pour modéliser l\'incertitude inhérente aux marchés financiers.',
      keyPoints: [
        'Espace probabilisé (Ω, F, P) : cadre formel de l\'incertitude',
        'Probabilité conditionnelle et théorème de Bayes',
        'Indépendance et corrélation : implications pour la diversification',
        'Tribus et filtrations : modéliser l\'information au cours du temps',
        'Convergences : presque sûre, en probabilité, en loi',
      ],
      explanation:
        'Un espace probabilisé (Ω, F, P) se compose de l\'ensemble des états du monde possibles (Ω), d\'une tribu F (l\'ensemble des événements mesurables) et d\'une mesure de probabilité P. En finance, Ω représente tous les scénarios futurs possibles du marché. Le théorème de Bayes permet de mettre à jour nos croyances lorsqu\'une nouvelle information arrive : c\'est le fondement du filtrage bayésien utilisé en trading quantitatif. La filtration (Fₜ) modélise l\'information disponible au temps t : elle ne peut que croître (on ne peut pas désapprendre). C\'est la base mathématique de l\'absence d\'arbitrage : les stratégies de trading doivent être adaptées à la filtration (pas de look-ahead).',
      formula: 'P(A|B) = P(B|A) × P(A) / P(B)',
      finnSays:
        'L\'espace probabilisé, c\'est la carte de l\'univers des possibles. La filtration, c\'est ta lampe torche : elle éclaire de plus en plus de terrain au fil du temps. En finance quant, on construit des fusées avec ces outils !',
    },
  },
  {
    id: 'qt-02',
    title: 'Variables aléatoires et moments',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les variables aléatoires traduisent les événements de l\'espace probabilisé en grandeurs numériques. Leurs moments (espérance, variance, skewness, kurtosis) caractérisent le comportement des rendements financiers.',
      keyPoints: [
        'Variable aléatoire discrète vs continue, fonction de répartition',
        'Espérance E[X] : rendement moyen attendu',
        'Variance σ² et écart-type σ : mesure du risque',
        'Skewness : asymétrie de la distribution des rendements',
        'Kurtosis : épaisseur des queues de distribution (fat tails)',
      ],
      explanation:
        'L\'espérance E[X] est la moyenne pondérée par les probabilités. En finance, c\'est le rendement attendu d\'un actif. La variance Var(X) = E[(X − μ)²] mesure la dispersion autour de la moyenne : c\'est la métrique fondamentale du risque en théorie moderne du portefeuille. Le skewness mesure l\'asymétrie : un skewness négatif (fréquent pour les actions) signifie que les pertes extrêmes sont plus probables que les gains extrêmes. Le kurtosis mesure l\'épaisseur des queues : les rendements financiers affichent systématiquement un excès de kurtosis (queues épaisses) par rapport à la loi normale, ce qui signifie que les événements extrêmes (krachs, rallyes) sont plus fréquents que prévu.',
      formula: 'E[X] = Σ xᵢ P(xᵢ)\nVar(X) = E[(X − μ)²]\nSkewness = E[(X − μ)³] / σ³\nKurtosis = E[(X − μ)⁴] / σ⁴',
      example:
        'Les rendements journaliers du S&P 500 affichent un skewness de −0,3 et un excès de kurtosis de 8 (vs 0 pour une loi normale). La probabilité d\'un mouvement > 4σ est d\'environ 1/15 000 sous la loi normale, mais de 1/500 en réalité.',
      finnSays:
        'Les moments, c\'est la carte d\'identité d\'une distribution. L\'espérance te dit "où tu vas en moyenne", la variance "à quel point le voyage sera agité", le skewness "si les mauvaises surprises dominent", et le kurtosis "si les tsunamis sont plus fréquents que prévu" !',
    },
  },
  {
    id: 'qt-03',
    title: 'Distributions en finance',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Le choix de la distribution des rendements est fondamental en finance quantitative. La loi normale est le point de départ, mais ses limites nécessitent des distributions alternatives.',
      keyPoints: [
        'Loi normale (gaussienne) : hypothèse de Black-Scholes',
        'Loi log-normale : distribution des prix (pas des rendements)',
        'Distributions à queues épaisses : Student-t, stable de Lévy',
        'Distribution de Poisson : modélisation des sauts',
        'Mélanges de gaussiennes et distributions empiriques',
      ],
      explanation:
        'La loi normale N(μ, σ²) est le socle de la finance classique. Le modèle de Black-Scholes suppose que les log-rendements suivent une loi normale, ce qui implique que les prix suivent une loi log-normale (toujours positifs). Cependant, les rendements réels présentent des queues plus épaisses : la loi de Student-t avec 3-5 degrés de liberté capture mieux cette réalité. Les distributions stables de Lévy (proposées par Mandelbrot) ont des queues encore plus lourdes mais posent des problèmes d\'estimation. En pratique, les quants utilisent souvent des modèles à sauts (Poisson) superposés à une diffusion gaussienne pour capturer les krachs soudains. Les mélanges de gaussiennes (regime-switching) modélisent les changements de régime de volatilité.',
      formula: 'f(x) = (1/σ√2π) × exp(−(x−μ)²/2σ²)\nLog-normale : ln(S) ~ N(μ, σ²) ⟹ S > 0',
      example:
        'Sous une loi normale, la probabilité d\'un mouvement de −20 % en un jour est virtuellement nulle (> 10σ). Pourtant, le lundi noir du 19 octobre 1987 a vu le Dow Jones chuter de 22,6 %. Cela illustre l\'insuffisance de la loi normale pour les queues de distribution.',
      finnSays:
        'La loi normale, c\'est un univers bien rangé où les krachs n\'existent pas. Le vrai monde financier, c\'est plutôt une distribution à queues épaisses : les cygnes noirs existent et les astronautes doivent s\'y préparer !',
    },
  },

  // ── Unité 2 : Calcul stochastique ──────────
  {
    id: 'qt-04',
    title: 'Processus stochastiques',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Un processus stochastique est une famille de variables aléatoires indexées par le temps. C\'est l\'outil mathématique qui modélise l\'évolution aléatoire des prix financiers.',
      keyPoints: [
        'Définition : collection {Xₜ, t ≥ 0} de variables aléatoires',
        'Processus en temps discret vs continu',
        'Marche aléatoire : le modèle fondateur',
        'Propriété de Markov : le futur ne dépend que du présent',
        'Stationnarité et ergodicité',
      ],
      explanation:
        'La marche aléatoire (random walk) est le processus stochastique le plus simple : Sₜ = Sₜ₋₁ + εₜ où εₜ est un bruit blanc. L\'hypothèse d\'efficience des marchés de Fama postule que les prix suivent une marche aléatoire : les variations passées ne permettent pas de prédire les variations futures. La propriété de Markov stipule que la distribution future du processus ne dépend que de l\'état présent, pas de l\'historique : c\'est le fondement mathématique du "le marché n\'a pas de mémoire". La stationnarité (les propriétés statistiques ne changent pas dans le temps) est rarement vérifiée en finance, ce qui complique l\'estimation des modèles.',
      formula: 'Marche aléatoire : Sₜ = Sₜ₋₁ + εₜ, εₜ ~ N(0, σ²)\nPropriété de Markov : P(Xₜ₊₁ | Xₜ, Xₜ₋₁, ...) = P(Xₜ₊₁ | Xₜ)',
      finnSays:
        'Un processus stochastique, c\'est le journal de bord d\'un prix qui évolue au hasard. La marche aléatoire dit : "où j\'irai demain ne dépend pas d\'où je suis venu, seulement d\'où je suis." C\'est le GPS de l\'incertitude !',
    },
  },
  {
    id: 'qt-05',
    title: 'Mouvement brownien',
    xp: 300,
    duration: '45 min',
    content: {
      introduction:
        'Le mouvement brownien (processus de Wiener) est la brique fondamentale du calcul stochastique en finance. C\'est la version continue de la marche aléatoire.',
      keyPoints: [
        'Définition : B₀ = 0, incréments indépendants et gaussiens',
        'Incréments : Bₜ − Bₛ ~ N(0, t−s)',
        'Trajectoires continues mais nulle part dérivables',
        'Mouvement brownien géométrique : modèle des prix d\'actions',
        'Propriété d\'auto-similarité et variation quadratique',
      ],
      explanation:
        'Le mouvement brownien standard Wₜ vérifie quatre propriétés : W₀ = 0, les incréments sont indépendants et gaussiens (Wₜ − Wₛ ~ N(0, t−s)), et les trajectoires sont continues. Propriété remarquable : les trajectoires sont continues mais nulle part dérivables, ce qui interdit le calcul différentiel classique et nécessite le calcul d\'Itô. Le mouvement brownien géométrique (MBG) modélise les prix : dSₜ = μSₜdt + σSₜdWₜ. Les prix sont toujours positifs (propriété de la log-normale), le rendement moyen est μ et la volatilité est σ. La variation quadratique du brownien vaut [W,W]ₜ = t, une propriété essentielle pour le lemme d\'Itô.',
      formula: 'dWₜ ~ N(0, dt)\nMBG : dSₜ/Sₜ = μdt + σdWₜ\nSolution : Sₜ = S₀ exp((μ − σ²/2)t + σWₜ)',
      example:
        'Avec S₀ = 100 €, μ = 8 %, σ = 20 %, le prix attendu à 1 an est E[S₁] = 100 × exp(0,08) ≈ 108,3 €. Mais le prix réalisé suit une log-normale : il y a environ 16 % de probabilité que S₁ < 87 € (perte > 13 %).',
      finnSays:
        'Le mouvement brownien, c\'est la trace laissée par une particule de pollen sur l\'eau : un mouvement continu mais complètement erratique. En finance, c\'est le modèle du prix qui zigzague sans cesse. Le décollage de la fusée quant commence ici !',
    },
  },
  {
    id: 'qt-06',
    title: 'Calcul d\'Itô',
    xp: 350,
    duration: '50 min',
    content: {
      introduction:
        'Le calcul d\'Itô est l\'extension du calcul différentiel aux processus stochastiques. Le lemme d\'Itô est la formule de changement de variable fondamentale qui permet de manipuler les modèles de prix.',
      keyPoints: [
        'Intégrale d\'Itô : ∫f(t)dWₜ, construction et propriétés',
        'Différence avec l\'intégrale de Riemann : dWₜ² = dt',
        'Lemme d\'Itô : la "règle de la chaîne" stochastique',
        'Application : dériver que Sₜ suit une log-normale sous le MBG',
        'Formule d\'Itô multidimensionnelle et corrélations',
      ],
      explanation:
        'Le calcul classique ne fonctionne pas avec le mouvement brownien car ses trajectoires ne sont pas dérivables. Le calcul d\'Itô adapte les règles : la différence clé est que (dWₜ)² = dt (et non 0 comme en calcul classique). Le lemme d\'Itô donne la différentielle d\'une fonction f(t, Xₜ) : df = (∂f/∂t + μ∂f/∂x + ½σ²∂²f/∂x²)dt + σ(∂f/∂x)dWₜ. Le terme ½σ²∂²f/∂x² est le "terme d\'Itô", absent du calcul déterministe. Application fondamentale : en posant Xₜ = ln(Sₜ) dans le MBG, on obtient dXₜ = (μ − σ²/2)dt + σdWₜ, ce qui prouve que ln(Sₜ) suit un mouvement brownien avec drift, et donc que Sₜ est log-normale.',
      formula: 'df(t,X) = (∂f/∂t + μ∂f/∂x + ½σ²∂²f/∂x²)dt + σ(∂f/∂x)dW\nRègle clé : (dW)² = dt, dt·dW = 0, (dt)² = 0',
      example:
        'Pour trouver d(Sₜ²), on applique Itô avec f(S) = S². On obtient d(S²) = (2μS² + σ²S²)dt + 2σS²dW = S²((2μ + σ²)dt + 2σdW). Le terme σ²S²dt est le "bonus d\'Itô" absent du calcul classique.',
      finnSays:
        'Le lemme d\'Itô, c\'est la clé de voûte de toute la finance quantitative. En calcul classique, (dx)² = 0. En Itô, (dW)² = dt. Ce petit changement de règle fait toute la différence : c\'est comme passer de la physique newtonienne à la relativité !',
    },
  },
  {
    id: 'qt-07',
    title: 'Martingales',
    xp: 300,
    duration: '40 min',
    content: {
      introduction:
        'Les martingales sont des processus stochastiques dont la meilleure prédiction future est la valeur présente. Elles sont au coeur de la théorie du pricing par absence d\'arbitrage.',
      keyPoints: [
        'Définition : E[Xₜ | Fₛ] = Xₛ pour s < t',
        'Sous-martingale (E ≥ Xₛ) et sur-martingale (E ≤ Xₛ)',
        'Le mouvement brownien est une martingale',
        'Théorème d\'arrêt optionnel de Doob',
        'Lien fondamental entre martingales et absence d\'arbitrage',
      ],
      explanation:
        'Une martingale est un processus dont l\'espérance conditionnelle future est égale à la valeur présente : "en moyenne, demain sera comme aujourd\'hui". Le mouvement brownien Wₜ est une martingale : E[Wₜ | Fₛ] = Wₛ. C\'est aussi le cas de exp(σWₜ − σ²t/2) (exponentielle de martingale), qui sera clé pour le changement de mesure. Le premier théorème fondamental de la finance stipule qu\'un marché est sans arbitrage si et seulement s\'il existe une mesure de probabilité (risque-neutre) sous laquelle les prix actualisés des actifs sont des martingales. Autrement dit : sous la bonne mesure, le prix actuel d\'un actif est exactement l\'espérance de ses paiements futurs actualisés.',
      formula: 'Martingale : E[Mₜ | Fₛ] = Mₛ, ∀s ≤ t\nExponentielle : Eₜ = exp(σWₜ − ½σ²t) est une martingale',
      finnSays:
        'Une martingale, c\'est un jeu équitable : en moyenne, tu ne gagnes ni ne perds. En finance, dire que les prix actualisés sont des martingales, c\'est dire qu\'il n\'y a pas d\'argent gratuit. C\'est le pilier de tout le pricing !',
    },
  },
  {
    id: 'qt-08',
    title: 'Mesure risque-neutre',
    xp: 350,
    duration: '45 min',
    content: {
      introduction:
        'La mesure risque-neutre (ou mesure martingale équivalente) est le concept central du pricing de produits dérivés. Elle permet de calculer le prix d\'un dérivé comme l\'espérance actualisée de son payoff.',
      keyPoints: [
        'Théorème de Girsanov : changement de mesure P → Q',
        'Sous Q, le drift du prix actualisé disparaît (martingale)',
        'Prix = E^Q[e^{-rT} × Payoff] : formule fondamentale du pricing',
        'Premier théorème fondamental : pas d\'arbitrage ⟺ ∃ Q',
        'Second théorème fondamental : marché complet ⟺ Q unique',
      ],
      explanation:
        'Dans le monde réel (mesure P), les actifs ont un rendement espéré μ > r (prime de risque). Le théorème de Girsanov montre qu\'on peut changer de mesure de probabilité pour passer à Q, sous laquelle le drift devient r (taux sans risque). Le mouvement brownien sous Q est W̃ₜ = Wₜ + ((μ−r)/σ)t. Sous Q, le prix actualisé S̃ₜ = e^{−rt}Sₜ est une martingale. Le prix de tout dérivé est alors V₀ = E^Q[e^{−rT}Payoff]. Cette formule est universelle : elle s\'applique aux options européennes, aux swaps, aux exotiques. Le second théorème dit que si la mesure Q est unique, le marché est complet (tout dérivé peut être répliqué par un portefeuille d\'actifs sous-jacents).',
      formula: 'Girsanov : dW̃ₜ = dWₜ + (μ−r)/σ dt\nPrix : V₀ = E^Q[e^{−rT} × h(Sₜ)]\nSous Q : dSₜ = rSₜdt + σSₜdW̃ₜ',
      example:
        'Pour pricer un call européen, on calcule V₀ = e^{−rT} × E^Q[max(Sₜ − K, 0)]. Sous Q, Sₜ = S₀ exp((r − σ²/2)T + σ√T Z) avec Z ~ N(0,1). Le calcul de cette espérance donne exactement la formule de Black-Scholes.',
      finnSays:
        'La mesure risque-neutre, c\'est comme des lunettes magiques : en les mettant, tous les actifs semblent avoir le même rendement (le taux sans risque). Mais les prix restent corrects ! C\'est le tour de magie le plus élégant de la finance quantitative.',
    },
  },

  // ── Unité 3 : Pricing et modèles ──────────
  {
    id: 'qt-09',
    title: 'Dérivation de Black-Scholes',
    xp: 350,
    duration: '50 min',
    content: {
      introduction:
        'La formule de Black-Scholes (1973) est le résultat le plus célèbre de la finance quantitative. Sa dérivation repose sur l\'argument de réplication dynamique et le calcul d\'Itô.',
      keyPoints: [
        'Hypothèses : MBG, pas de dividendes, taux constant, marché complet',
        'EDP de Black-Scholes par l\'argument de couverture (delta hedging)',
        'Dérivation par la méthode risque-neutre',
        'Formules du call et du put européens',
        'Les Grecs : delta, gamma, theta, vega, rho',
      ],
      explanation:
        'L\'argument de Black-Scholes : construire un portefeuille Π = V − ΔS qui est sans risque pendant dt. Par le lemme d\'Itô, dV = (∂V/∂t + ½σ²S²∂²V/∂S²)dt + (∂V/∂S)σSdW. En choisissant Δ = ∂V/∂S (delta hedging), le terme en dW disparaît. Comme le portefeuille est sans risque, il doit rapporter r : dΠ = rΠdt. Cela donne l\'EDP de Black-Scholes : ∂V/∂t + rS∂V/∂S + ½σ²S²∂²V/∂S² = rV. Sa solution pour un call européen est C = S₀N(d₁) − Ke^{−rT}N(d₂) avec d₁ = [ln(S/K) + (r+σ²/2)T] / (σ√T) et d₂ = d₁ − σ√T.',
      formula: 'C = S₀N(d₁) − Ke^{−rT}N(d₂)\nd₁ = [ln(S/K) + (r + σ²/2)T] / (σ√T)\nd₂ = d₁ − σ√T',
      example:
        'S = 100, K = 100, r = 5 %, σ = 20 %, T = 1 an. d₁ = [ln(1) + (0,05 + 0,02)×1] / 0,20 = 0,35. d₂ = 0,15. C = 100 × N(0,35) − 95,12 × N(0,15) = 100 × 0,637 − 95,12 × 0,560 = 10,4 €.',
      finnSays:
        'Black-Scholes, c\'est la formule E = mc² de la finance. L\'idée géniale : si tu réajustes en continu ton portefeuille de couverture (delta hedging), tu élimines tout risque. Le prix du dérivé, c\'est le coût de cette couverture. Prix Nobel 1997 !',
    },
  },
  {
    id: 'qt-10',
    title: 'Simulation Monte Carlo',
    xp: 300,
    duration: '45 min',
    content: {
      introduction:
        'La simulation Monte Carlo est la méthode numérique universelle du pricing de produits dérivés. Elle permet de pricer n\'importe quel payoff, même quand aucune formule fermée n\'existe.',
      keyPoints: [
        'Principe : simuler N trajectoires du sous-jacent, calculer la moyenne des payoffs actualisés',
        'Schéma d\'Euler pour discrétiser le MBG',
        'Convergence en 1/√N : 10 000 simulations pour 1 % de précision',
        'Techniques de réduction de variance : antithétique, variable de contrôle, importance sampling',
        'Pricing d\'options path-dependent (asiatiques, barrières)',
      ],
      explanation:
        'Le Monte Carlo estime V₀ = e^{−rT} × E^Q[Payoff] en simulant N trajectoires du prix Sₜ sous la mesure risque-neutre. Pour chaque trajectoire i, on discrétise : Sₜ₊Δₜ = Sₜ × exp((r − σ²/2)Δt + σ√Δt × Zᵢ) avec Zᵢ ~ N(0,1). Le prix est V̂ = e^{−rT} × (1/N)Σ Payoff(Sᵢ). L\'erreur standard est proportionnelle à 1/√N : pour diviser l\'erreur par 2, il faut 4 fois plus de simulations. Les techniques de réduction de variance améliorent la convergence : la méthode antithétique utilise les paires (Z, −Z), la variable de contrôle exploite un instrument dont le prix est connu analytiquement. Le Monte Carlo est indispensable pour les options exotiques path-dependent.',
      formula: 'V̂ = e^{−rT} × (1/N) × Σᵢ₌₁ᴺ h(Sₜ⁽ⁱ⁾)\nErreur ≈ σ_payoff / √N',
      example:
        'Pricing d\'une option asiatique (payoff basé sur la moyenne des prix). Avec 100 000 simulations et 252 pas de temps (daily), la méthode donne un prix de 7,82 € ± 0,05 €. Avec la variable de contrôle (call BS), la précision passe à ± 0,01 €.',
      finnSays:
        'Le Monte Carlo, c\'est simuler des millions de futurs possibles avec un ordinateur et faire la moyenne. C\'est brut, c\'est puissant, et ça fonctionne pour TOUT. Quand la formule n\'existe pas, on sort le canon numérique !',
    },
  },
  {
    id: 'qt-11',
    title: 'Arbres binomiaux et trinomiaux avancés',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Les arbres binomiaux et trinomiaux sont des méthodes numériques qui discrétisent le processus de prix en un nombre fini d\'états. Ils sont particulièrement adaptés aux options américaines.',
      keyPoints: [
        'Arbre de Cox-Ross-Rubinstein (CRR) : u, d, et probabilité risque-neutre p',
        'Convergence vers Black-Scholes quand N → ∞',
        'Options américaines : programmation dynamique et frontière d\'exercice anticipé',
        'Arbre trinomial : meilleure convergence et stabilité',
        'Dividendes discrets et taux d\'intérêt variables',
      ],
      explanation:
        'L\'arbre CRR discrétise le MBG : à chaque pas, le prix monte d\'un facteur u = exp(σ√Δt) ou baisse d\'un facteur d = 1/u, avec une probabilité risque-neutre p = (exp(rΔt) − d) / (u − d). Le pricing se fait par backward induction : on part des payoffs terminaux et on remonte l\'arbre en calculant l\'espérance actualisée à chaque noeud. Pour les options américaines, on compare à chaque noeud la valeur de continuation avec la valeur d\'exercice immédiat : V = max(Exercice, Continuation). L\'arbre trinomial ajoute un état "stable" (le prix ne bouge pas) et converge plus rapidement. Avec 500-1000 pas, les arbres donnent une précision de 0,01 € pour les options vanille.',
      formula: 'CRR : u = exp(σ√Δt), d = 1/u\np = (exp(rΔt) − d) / (u − d)\nV(n,j) = max(Exercice, e^{−rΔt}[pV(n+1,j+1) + (1−p)V(n+1,j)])',
      example:
        'Un put américain sur une action à 40 €, strike 42 €, r = 5 %, σ = 30 %, T = 6 mois. Un arbre CRR à 500 pas donne un prix de 4,21 €, contre 3,84 € pour le put européen (BS). La prime d\'exercice anticipé est de 0,37 €.',
      finnSays:
        'L\'arbre binomial, c\'est l\'arbre des possibles : à chaque instant, le prix peut monter ou descendre. On explore tous les chemins et on remonte l\'arbre pour trouver le prix. C\'est simple, élégant, et ça gère même les options américaines !',
    },
  },

  // ── Unité 4 : Modèles de taux ─────────────
  {
    id: 'qt-12',
    title: 'Modèles de Vasicek et CIR',
    xp: 300,
    duration: '45 min',
    content: {
      introduction:
        'Les modèles de taux courts de Vasicek et Cox-Ingersoll-Ross (CIR) sont les fondements de la modélisation stochastique de la courbe des taux d\'intérêt.',
      keyPoints: [
        'Taux court rₜ et prix d\'obligation zéro-coupon P(t,T)',
        'Vasicek : drₜ = a(b − rₜ)dt + σdWₜ (retour à la moyenne, taux négatifs possibles)',
        'CIR : drₜ = a(b − rₜ)dt + σ√rₜ dWₜ (taux toujours positifs)',
        'Solutions analytiques pour les prix de zéro-coupons',
        'Calibration sur la courbe des taux observée',
      ],
      explanation:
        'Le modèle de Vasicek est un processus d\'Ornstein-Uhlenbeck : le taux revient vers son niveau de long terme b avec une vitesse a. La solution est rₜ = b + (r₀ − b)e^{−at} + σ∫₀ᵗ e^{−a(t−s)}dWₛ. Le prix du zéro-coupon est P(t,T) = A(t,T)exp(−B(t,T)rₜ) avec des formules explicites pour A et B. Le défaut de Vasicek est qu\'il autorise les taux négatifs (ce qui est devenu acceptable depuis 2015). Le modèle CIR résout ce problème en faisant dépendre la volatilité de √rₜ : quand le taux s\'approche de 0, la volatilité diminue et empêche le franchissement (condition de Feller : 2ab > σ²). Les deux modèles sont affines : les prix de zéro-coupons sont exponentiels-linéaires en rₜ.',
      formula: 'Vasicek : drₜ = a(b − rₜ)dt + σdWₜ\nCIR : drₜ = a(b − rₜ)dt + σ√rₜ dWₜ\nP(t,T) = A(t,T) × exp(−B(t,T) × rₜ)',
      example:
        'Calibration de Vasicek sur l\'Euribor : a = 0,5 (retour à la moyenne en ~2 ans), b = 2,5 % (taux de long terme), σ = 0,8 %. Le prix d\'un zéro-coupon 10 ans est P(0,10) = 0,782, soit un taux 10 ans de 2,45 %.',
      finnSays:
        'Vasicek et CIR, ce sont les deux modèles pionniers pour les taux. Vasicek est plus simple mais autorise les taux négatifs (ce qui semblait absurde en 1977, mais la réalité l\'a rattrapé !). CIR est plus prudent avec son √r qui protège le zéro.',
    },
  },
  {
    id: 'qt-13',
    title: 'Modèle de Hull-White',
    xp: 300,
    duration: '45 min',
    content: {
      introduction:
        'Le modèle de Hull-White étend Vasicek en rendant les paramètres dépendants du temps, permettant un ajustement parfait à la courbe des taux observée.',
      keyPoints: [
        'Hull-White : drₜ = (θ(t) − arₜ)dt + σdWₜ',
        'θ(t) choisi pour coller exactement à la courbe des taux initiale',
        'Calibration analytique de θ(t) à partir des prix de marché',
        'Arbre trinomial de Hull-White pour les dérivés de taux',
        'Application : pricing de caps, floors, swaptions',
      ],
      explanation:
        'Le modèle de Hull-White généralise Vasicek en remplaçant le niveau de retour ab par une fonction déterministe θ(t). Cette fonction est calibrée pour que le modèle reproduise exactement les prix de zéro-coupons observés sur le marché : θ(t) = ∂f(0,t)/∂t + af(0,t) + σ²/(2a)(1 − e^{−2at}), où f(0,t) est le taux forward instantané. Le modèle reste affine et les prix de zéro-coupons ont des formules fermées. Le pricing de caps et swaptions utilise des formules semi-analytiques (type Black) ou des arbres trinomiaux. L\'arbre de Hull-White est construit avec des pas de taille optimale et un recentrage à chaque pas pour éviter que les noeuds ne dérivent trop.',
      formula: 'Hull-White : drₜ = (θ(t) − arₜ)dt + σdWₜ\nθ(t) = f_t(0,t) + af(0,t) + (σ²/2a)(1 − e^{−2at})',
      finnSays:
        'Hull-White, c\'est comme un costume sur mesure : le modèle s\'ajuste parfaitement à la courbe des taux du jour. Vasicek vous donnait le prêt-à-porter, Hull-White vous offre la haute couture des taux d\'intérêt !',
    },
  },
  {
    id: 'qt-14',
    title: 'Framework HJM',
    xp: 350,
    duration: '50 min',
    content: {
      introduction:
        'Le framework de Heath-Jarrow-Morton (HJM) modélise directement l\'évolution de toute la courbe des taux forward, offrant un cadre très général pour les dérivés de taux.',
      keyPoints: [
        'Modélisation des taux forward f(t,T) plutôt que du taux court',
        'Condition de drift HJM : contrainte d\'absence d\'arbitrage',
        'Lien entre HJM et les modèles de taux court (Vasicek, CIR, HW)',
        'Modèle de taux à facteurs : volatilités σ₁(t,T), σ₂(t,T)...',
        'Implémentation : simulation Monte Carlo de la courbe des taux',
      ],
      explanation:
        'HJM part de la dynamique des taux forward instantanés : df(t,T) = α(t,T)dt + σ(t,T)dWₜ. La condition de non-arbitrage impose une relation entre le drift α et la volatilité σ : α(t,T) = σ(t,T) × ∫ₜᵀ σ(t,s)ds. Autrement dit, une fois la structure de volatilité choisie, le drift est entièrement déterminé. C\'est la beauté du framework : il n\'y a qu\'un choix à faire (la volatilité), tout le reste découle de l\'absence d\'arbitrage. Vasicek, CIR et Hull-White sont des cas particuliers de HJM avec des choix spécifiques de σ(t,T). Les modèles à facteurs (1, 2 ou 3 facteurs) capturent les mouvements principaux de la courbe : niveau, pente et courbure.',
      formula: 'df(t,T) = α(t,T)dt + σ(t,T)dWₜ\nCondition HJM : α(t,T) = σ(t,T) ∫ₜᵀ σ(t,s)ds',
      finnSays:
        'HJM, c\'est le cadre unificateur : au lieu de modéliser un seul taux, on modélise TOUTE la courbe d\'un coup. Et la magie de l\'absence d\'arbitrage fixe le drift automatiquement. C\'est comme avoir les plans de toute la galaxie des taux !',
    },
  },

  // ── Unité 5 : Volatilité avancée ──────────
  {
    id: 'qt-15',
    title: 'Volatilité locale',
    xp: 300,
    duration: '45 min',
    content: {
      introduction:
        'Le modèle de volatilité locale de Dupire étend Black-Scholes en rendant la volatilité fonction du prix et du temps, permettant de reproduire exactement la surface de volatilité implicite observée.',
      keyPoints: [
        'Smile de volatilité : pourquoi BS ne suffit pas',
        'Formule de Dupire : σ_loc(K,T) extraite des prix d\'options',
        'EDP de Fokker-Planck (forward Kolmogorov)',
        'Calibration : de la surface de vol implicite à la vol locale',
        'Limites : dynamique irréaliste du smile',
      ],
      explanation:
        'Black-Scholes suppose une volatilité constante σ. En réalité, la volatilité implicite varie avec le strike (smile) et la maturité (term structure), formant une surface de volatilité. Le modèle de Dupire pose dSₜ = rSₜdt + σ(Sₜ,t)SₜdWₜ où σ(S,t) est la volatilité locale. La formule de Dupire exprime σ²_loc(K,T) = 2[∂C/∂T + rK∂C/∂K] / [K²∂²C/∂K²], calculable à partir des prix de calls du marché. Ce modèle reproduit exactement la surface de vol implicite à une date donnée. Son défaut principal est que la dynamique forward du smile est irréaliste : le smile s\'aplatit trop vite avec le temps, ce qui génère des erreurs de pricing pour les options exotiques.',
      formula: 'σ²_loc(K,T) = 2(∂C/∂T + rK ∂C/∂K) / (K² ∂²C/∂K²)\ndSₜ = rSₜdt + σ(Sₜ,t)SₜdWₜ',
      finnSays:
        'La vol locale, c\'est le premier remède au défaut de Black-Scholes. Au lieu d\'une volatilité unique, chaque point (prix, temps) a sa propre volatilité. C\'est comme passer d\'une carte météo avec une seule température à une carte détaillée !',
    },
  },
  {
    id: 'qt-16',
    title: 'Modèle de Heston',
    xp: 350,
    duration: '50 min',
    content: {
      introduction:
        'Le modèle de Heston est le modèle de volatilité stochastique le plus utilisé en pratique. Il modélise la volatilité comme un processus CIR corrélé au prix du sous-jacent.',
      keyPoints: [
        'Dynamique : dSₜ = rSₜdt + √vₜ Sₜ dW¹ₜ, dvₜ = κ(θ − vₜ)dt + ξ√vₜ dW²ₜ',
        'Corrélation ρ entre le prix et la volatilité (ρ < 0 : leverage effect)',
        'Fonction caractéristique semi-analytique',
        'Pricing par transformée de Fourier (méthode de Carr-Madan)',
        'Calibration sur la surface de volatilité implicite',
      ],
      explanation:
        'Le modèle de Heston introduit un second facteur aléatoire : la variance vₜ suit un processus CIR avec retour à la moyenne vers θ, vitesse κ et vol-of-vol ξ. La corrélation ρ < 0 entre les browniens du prix et de la variance capture le leverage effect (la volatilité augmente quand le prix baisse). Le pricing se fait par la transformée de Fourier de la fonction caractéristique, qui est connue en forme fermée. La formule de Carr-Madan donne C(K) = (e^{−αk}/π) ∫₀^∞ e^{−iuk} ψ(u)du, où ψ est la transformée de Fourier du prix du call et α est un paramètre d\'amortissement. Heston reproduit le skew (ρ < 0), le smile (ξ > 0), et la term structure de la volatilité.',
      formula: 'dSₜ = rSₜdt + √vₜ Sₜ dW¹\ndvₜ = κ(θ − vₜ)dt + ξ√vₜ dW²\ndW¹dW² = ρdt',
      example:
        'Calibration de Heston sur les options du S&P 500 : v₀ = 0,04 (vol = 20 %), θ = 0,05, κ = 2,0, ξ = 0,3, ρ = −0,7. Le ρ négatif capture le skew prononcé des indices actions (les puts OTM sont plus chers que les calls OTM).',
      finnSays:
        'Heston, c\'est le modèle qui dit : "la volatilité elle-même est volatile !" Et elle est corrélée négativement au prix (quand ça baisse, la peur monte et la vol explose). C\'est le modèle préféré des quants sur les desks de dérivés.',
    },
  },
  {
    id: 'qt-17',
    title: 'Modèles GARCH',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Les modèles GARCH (Generalized Autoregressive Conditional Heteroskedasticity) modélisent le clustering de volatilité en temps discret : les périodes de forte volatilité tendent à persister.',
      keyPoints: [
        'ARCH(q) de Engle : la variance dépend des résidus passés au carré',
        'GARCH(p,q) de Bollerslev : ajout de la variance passée',
        'GARCH(1,1) : le modèle de référence (α + β ≈ 0,99)',
        'Extensions : EGARCH (asymétrie), GJR-GARCH (leverage effect)',
        'Applications : VaR, prévision de volatilité, allocation d\'actifs',
      ],
      explanation:
        'Le GARCH(1,1) modélise la variance conditionnelle : σₜ² = ω + α εₜ₋₁² + β σₜ₋₁². Le terme α εₜ₋₁² capte l\'impact des chocs passés (news), tandis que β σₜ₋₁² assure la persistance. La somme α + β mesure la persistence : proche de 1, la volatilité revient lentement vers sa moyenne de long terme ω/(1−α−β). Le GARCH standard est symétrique : un choc positif et négatif de même amplitude ont le même effet sur la volatilité. L\'EGARCH de Nelson et le GJR-GARCH corrigent ce défaut en capturant le leverage effect. En pratique, le GARCH est utilisé pour prévoir la volatilité à court terme (1-10 jours), calculer la VaR (Value at Risk) dynamique, et ajuster les poids de portefeuille en fonction du régime de volatilité.',
      formula: 'GARCH(1,1) : σₜ² = ω + α εₜ₋₁² + β σₜ₋₁²\nVol long terme : σ̄² = ω / (1 − α − β)\nPersistance = α + β',
      example:
        'Estimation GARCH(1,1) sur le CAC 40 daily : ω = 0,000002, α = 0,08, β = 0,91. Persistance = 0,99. Après un choc de −5 %, la volatilité conditionnelle passe de 15 % à 22 % et met environ 100 jours à revenir vers sa moyenne de long terme de 17 %.',
      finnSays:
        'GARCH capture une réalité que tout trader connaît : les tempêtes arrivent en série. Après un gros mouvement, la volatilité reste élevée pendant un moment avant de se calmer. C\'est le clustering : les orages ne viennent jamais seuls !',
    },
  },

  // ── Unité 6 : Dépendances et extrêmes ─────
  {
    id: 'qt-18',
    title: 'Copules',
    xp: 300,
    duration: '45 min',
    content: {
      introduction:
        'Les copules séparent la structure de dépendance entre variables aléatoires de leurs distributions marginales. Elles permettent de modéliser des dépendances complexes, au-delà de la simple corrélation linéaire.',
      keyPoints: [
        'Théorème de Sklar : toute distribution jointe = copule × marginales',
        'Copule gaussienne : limites révélées par la crise de 2008',
        'Copule de Student : meilleure capture de la dépendance de queue',
        'Copules archimédiennes : Clayton, Frank, Gumbel',
        'Tail dependence : probabilité de co-mouvements extrêmes',
      ],
      explanation:
        'Le théorème de Sklar (1959) établit que toute distribution jointe F(x,y) peut s\'écrire F(x,y) = C(Fₓ(x), Fᵧ(y)), où C est la copule et Fₓ, Fᵧ les marginales. La copule capture la structure de dépendance pure. La corrélation linéaire ne mesure que la dépendance linéaire ; les copules capturent aussi la dépendance de queue (tail dependence) : la probabilité que deux actifs s\'effondrent simultanément. La copule gaussienne a une tail dependence nulle (les co-krachs sont impossibles), ce qui a contribué à la sous-estimation du risque des CDO avant 2008. La copule de Student et la copule de Clayton capturent la tail dependence inférieure : les co-mouvements extrêmes à la baisse.',
      formula: 'Sklar : F(x,y) = C(Fₓ(x), Fᵧ(y))\nTail dependence : λ_L = lim_{u→0} P(U₂ ≤ u | U₁ ≤ u)',
      example:
        'Corrélation CAC 40 / DAX : 0,85 en période normale, mais 0,95 en période de crise. La copule gaussienne prédit une probabilité de co-krach (les deux < −10 % en un jour) de 0,1 %. La copule de Student donne 0,8 %. La réalité est plus proche de 0,5-1 %.',
      finnSays:
        'Les copules, c\'est comprendre comment les actifs bougent ENSEMBLE dans les extrêmes. La crise de 2008 a montré le danger de la copule gaussienne : "les marchés ne peuvent pas tous s\'effondrer en même temps". Spoiler : ils peuvent, et les copules à queues épaisses le modélisent !',
    },
  },
  {
    id: 'qt-19',
    title: 'Théorie des valeurs extrêmes (EVT)',
    xp: 300,
    duration: '45 min',
    content: {
      introduction:
        'La théorie des valeurs extrêmes (EVT) fournit un cadre statistique rigoureux pour modéliser les événements rares et extrêmes qui dominent le risque en finance.',
      keyPoints: [
        'Théorème de Fisher-Tippett : trois familles de distributions extrêmes',
        'Distribution Généralisée des Valeurs Extrêmes (GEV) : Gumbel, Fréchet, Weibull',
        'Méthode des maxima par blocs (Block Maxima)',
        'Peaks Over Threshold (POT) et distribution de Pareto généralisée (GPD)',
        'Application : estimation de la VaR et de l\'Expected Shortfall pour les queues',
      ],
      explanation:
        'L\'EVT étudie le comportement asymptotique des maxima (ou minima) d\'un échantillon. Le théorème de Fisher-Tippett montre que le maximum normalisé converge vers l\'une des trois distributions : Gumbel (queues exponentielles, ξ = 0), Fréchet (queues épaisses, ξ > 0) ou Weibull (queues bornées, ξ < 0). Les rendements financiers tombent dans la classe Fréchet avec ξ ≈ 0,2-0,4. La méthode POT (Peaks Over Threshold) modélise les excès au-delà d\'un seuil u par une distribution de Pareto généralisée (GPD) : P(X − u > x | X > u) ≈ (1 + ξx/β)^{−1/ξ}. L\'EVT est essentielle pour estimer la VaR et l\'ES à des niveaux extrêmes (99,9 %) où les méthodes paramétriques classiques sont inadéquates.',
      formula: 'GPD : F(x) = 1 − (1 + ξx/β)^{−1/ξ}\nVaR_α = u + (β/ξ)[(n/Nᵤ(1−α))^ξ − 1]',
      example:
        'Application de la méthode POT aux rendements daily du CAC 40 (20 ans de données). Seuil u = −2,5 %, ξ = 0,25, β = 0,8 %. VaR 99,9 % = −6,8 % (méthode normale : −5,2 %). L\'EVT prédit un risque extrême 30 % plus élevé que la loi normale.',
      finnSays:
        'L\'EVT, c\'est la science des catastrophes. La loi normale dit "un crash de −20 % est impossible". L\'EVT dit "c\'est rare, mais mesurable, et voici la probabilité". Quand on construit une fusée, on doit savoir résister aux météorites !',
    },
  },

  // ── Unité 7 : ML et méthodes modernes ─────
  {
    id: 'qt-20',
    title: 'Machine learning en finance',
    xp: 300,
    duration: '45 min',
    content: {
      introduction:
        'Le machine learning (ML) transforme la finance quantitative en permettant de découvrir des patterns complexes et non-linéaires dans les données de marché que les modèles traditionnels ne capturent pas.',
      keyPoints: [
        'Supervised learning : régression, classification (signal de trading)',
        'Unsupervised learning : clustering de régimes de marché, PCA',
        'Ensemble methods : Random Forest, Gradient Boosting (XGBoost)',
        'Deep learning : LSTM pour les séries temporelles, autoencoders',
        'Pièges du ML en finance : overfitting, data snooping, non-stationnarité',
      ],
      explanation:
        'Le ML en finance diffère du ML classique par un ratio signal/bruit extrêmement faible. Les features typiques incluent les rendements historiques, les indicateurs techniques, les données fondamentales et les données alternatives (sentiment, satellite). Les méthodes d\'ensemble (Random Forest, XGBoost) sont les plus performantes en pratique pour la prédiction de rendements car elles gèrent bien les interactions non-linéaires et sont relativement robustes à l\'overfitting. Les LSTM (Long Short-Term Memory) capturent les dépendances temporelles longues. Le défi principal est l\'overfitting : avec des milliers de features et un signal faible, le modèle apprend le bruit. La validation croisée temporelle (walk-forward) est obligatoire : on ne mélange jamais passé et futur dans les données d\'entraînement et de test.',
      example:
        'Un modèle XGBoost prédit la direction du S&P 500 sur 5 jours avec 53 % de précision (vs 50 % aléatoire). Features : 20 indicateurs techniques + sentiment Twitter + VIX. Le Sharpe ratio out-of-sample est de 0,8, net de coûts de transaction.',
      finnSays:
        'Le ML en finance, c\'est utiliser des algorithmes d\'intelligence artificielle pour trouver des signaux cachés dans les données. Mais attention : le marché est un adversaire qui s\'adapte. Un modèle qui fonctionne aujourd\'hui sera peut-être obsolète demain. L\'apprentissage ne s\'arrête jamais !',
    },
  },
  {
    id: 'qt-21',
    title: 'Backtesting quantitatif',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Le backtesting quantitatif évalue rigoureusement la performance historique d\'une stratégie de trading. C\'est l\'étape critique entre la recherche théorique et le déploiement en production.',
      keyPoints: [
        'Walk-forward analysis : entraînement glissant et test out-of-sample',
        'Métriques : Sharpe, Sortino, Calmar, drawdown, turnover',
        'Coûts de transaction : spread, impact de marché, slippage',
        'Correction pour le multiple testing : Bonferroni, Holm, FDR',
        'Paper trading et live testing avant le déploiement',
      ],
      explanation:
        'Un backtest fiable utilise le walk-forward : on entraîne le modèle sur une fenêtre passée, on teste sur la période suivante, puis on avance la fenêtre. Cela simule les conditions réelles de trading. Les coûts de transaction sont souvent sous-estimés : le spread bid-ask (2-10 bps), l\'impact de marché (variable avec la taille de l\'ordre) et le slippage (écart entre le prix théorique et le prix réel). Le multiple testing bias est critique : si on teste 100 stratégies, 5 seront "significatives" à 5 % par pur hasard. La correction de Bonferroni ajuste le seuil de significativité à 0,05/100 = 0,05 %. Le ratio de Sharpe out-of-sample est typiquement 50-70 % inférieur au Sharpe in-sample. Un Sharpe > 1 après coûts et corrections est considéré comme excellent.',
      formula: 'Sharpe = (μ − r_f) / σ\nSortino = (μ − r_f) / σ_downside\nCalmar = CAGR / Max Drawdown',
      finnSays:
        'Le backtesting, c\'est la simulation de vol avant le lancement de la fusée. Si tu triches (overfitting, pas de coûts, pas de correction pour le multiple testing), la fusée explosera en vol réel. La rigueur, c\'est ce qui sépare un quant d\'un gambler !',
    },
  },
  {
    id: 'qt-22',
    title: 'Optimisation de portefeuille avancée',
    xp: 300,
    duration: '45 min',
    content: {
      introduction:
        'L\'optimisation de portefeuille va au-delà du modèle de Markowitz classique avec des techniques robustes qui gèrent l\'erreur d\'estimation et les contraintes réelles.',
      keyPoints: [
        'Limites de Markowitz : sensibilité aux inputs, concentration excessive',
        'Black-Litterman : intégration de vues subjectives à l\'équilibre de marché',
        'Optimisation robuste : incertitude sur les paramètres',
        'Risk parity et HRP (Hierarchical Risk Parity)',
        'Contraintes réelles : turnover, cardinalité, ESG',
      ],
      explanation:
        'Le modèle de Markowitz est extrêmement sensible aux erreurs d\'estimation des rendements attendus et de la matrice de covariance. Le modèle de Black-Litterman résout ce problème en partant de l\'équilibre de marché (CAPM) et en ajustant avec les vues de l\'investisseur, pondérées par leur confiance. Le risk parity alloue le capital de sorte que chaque actif contribue également au risque total : il ne nécessite pas d\'estimer les rendements attendus. Le HRP de Marcos Lopez de Prado utilise le clustering hiérarchique pour structurer la matrice de covariance et allouer le capital, offrant une meilleure diversification et une plus grande stabilité. L\'optimisation sous contraintes réelles (limite de turnover, nombre minimum/maximum de lignes, scores ESG) utilise des solveurs de programmation quadratique ou des métaheuristiques.',
      formula: 'Black-Litterman : μ_BL = [(τΣ)⁻¹ + P\'Ω⁻¹P]⁻¹ × [(τΣ)⁻¹π + P\'Ω⁻¹Q]\nRisk Parity : wᵢ × (Σw)ᵢ = budget_risque / N',
      example:
        'Un portefeuille risk parity sur 4 classes d\'actifs (actions, obligations, matières premières, immobilier) alloue ~25 % du risque à chaque classe. En poids : 15 % actions, 55 % obligations, 15 % commodities, 15 % REITs. Le Sharpe historique est de 0,7, le drawdown max de 12 % (vs 30 % pour un 60/40).',
      finnSays:
        'Markowitz, c\'est la théorie parfaite dans un monde parfait. Black-Litterman et le risk parity, c\'est l\'adaptation au monde réel : on ne connaît pas les rendements futurs, mais on peut construire des portefeuilles robustes et bien diversifiés !',
    },
  },

  // ── Unité 8 : Synthèse et examen ──────────
  {
    id: 'qt-23',
    title: 'Cas pratique : construction d\'un pricer',
    xp: 400,
    duration: '60 min',
    content: {
      introduction:
        'Mets en pratique l\'ensemble du cours en construisant un pricer d\'options exotiques combinant les modèles stochastiques, les méthodes numériques et la calibration sur données de marché.',
      keyPoints: [
        'Définition du produit : option barrière knock-out avec payoff asiatique',
        'Choix du modèle : Heston calibré sur la surface de vol',
        'Méthode numérique : Monte Carlo avec réduction de variance',
        'Calcul des Grecs par différences finies et pathwise',
        'Analyse de sensibilité et rapport de pricing',
      ],
      explanation:
        'Ce cas pratique guide la construction d\'un pricer professionnel. Le produit est une option barrière knock-out dont le payoff est basé sur la moyenne arithmétique du sous-jacent (asiatique). Aucune formule fermée n\'existe : le Monte Carlo est obligatoire. Le modèle de Heston est calibré sur les volatilités implicites du marché par minimisation des erreurs quadratiques. La simulation utilise le schéma de discrétisation de Broadie-Kaya (exact) ou QE (quadratic exponential) pour éviter les problèmes numériques de la variance vₜ. Les Grecs sont calculés par la méthode pathwise (différentiation de la trajectoire) pour le delta et par différences finies pour le vega. Le rapport de pricing documente les hypothèses, la calibration, les résultats et les analyses de sensibilité.',
      example:
        'Pricer d\'un call down-and-out avec moyenne arithmétique sur le CAC 40. Barrière à 85 % du spot, maturité 1 an, strike ATM. Heston calibré : v₀=0,04, θ=0,05, κ=1,5, ξ=0,4, ρ=−0,7. Prix Monte Carlo (500K paths) : 4,82 € ± 0,03 €. Delta : 0,52, Vega : 0,18.',
      finnSays:
        'C\'est le moment de vérité : tu vas construire un vrai pricer, comme sur un desk quant ! Modèle stochastique, calibration, Monte Carlo, Grecs : tout y passe. Si la fusée décolle correctement, tu es prêt pour l\'industrie !',
    },
  },
  {
    id: 'qt-24',
    title: 'Examen final : Finance Quantitative',
    xp: 500,
    duration: '60 min',
    content: {
      introduction:
        'L\'examen final évalue ta maîtrise complète de la finance quantitative : des fondements probabilistes aux modèles avancés, en passant par les méthodes numériques et les techniques modernes.',
      keyPoints: [
        'Fondements : probabilités, calcul stochastique, Itô, martingales',
        'Pricing : Black-Scholes, Monte Carlo, arbres, risque-neutre',
        'Modèles de taux : Vasicek, CIR, Hull-White, HJM',
        'Volatilité : locale, Heston, GARCH',
        'Avancé : copules, EVT, ML, optimisation de portefeuille',
      ],
      explanation:
        'Cet examen couvre l\'intégralité du programme de Finance Quantitative. Tu devras démontrer ta compréhension du calcul d\'Itô et des martingales, ta capacité à dériver et appliquer les formules de pricing, ta maîtrise des modèles de taux et de volatilité, et ta connaissance des techniques avancées (copules, EVT, ML). Les questions combinent théorie (démontrer le lemme d\'Itô, expliquer la condition HJM), calcul (pricer une option par BS, calibrer un GARCH) et réflexion critique (limites de la copule gaussienne, risques de l\'overfitting en ML). La dernière partie est un mini-cas de pricing qui intègre plusieurs concepts.',
      finnSays:
        'Dernier défi, astronaute ! Tu as traversé l\'univers de la finance quantitative, du mouvement brownien aux copules, de Black-Scholes au machine learning. Cet examen est ta mission finale : prouve que tu maîtrises les outils les plus puissants de la finance moderne !',
    },
  },
];
