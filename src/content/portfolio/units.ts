// ──────────────────────────────────────────────
//  FINA - Gestion de Portefeuille : Lessons
// ──────────────────────────────────────────────

import type { Lesson } from '@/types/content';

export const portfolioLessons: Lesson[] = [
  // ─── Lesson 1 ───
  {
    id: 'portfolio-1',
    title: 'Rendement & Risque',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le couple rendement-risque est le pilier fondamental de la finance. Tout investisseur doit comprendre que la quête de rendement s\'accompagne nécessairement d\'une prise de risque, et que cette relation structure l\'ensemble des décisions d\'allocation.',
      keyPoints: [
        'Le rendement mesure le gain (ou la perte) réalisé sur un investissement, exprimé en pourcentage',
        'Le risque est l\'incertitude associée au rendement futur, quantifié par la volatilité',
        'La prime de risque rémunère l\'investisseur pour le risque supplémentaire pris par rapport à l\'actif sans risque',
        'Le trade-off rendement-risque est le principe selon lequel un rendement plus élevé exige un risque plus élevé',
      ],
      explanation:
        'Le rendement d\'un actif se décompose en deux composantes : le rendement en capital (plus-value ou moins-value) et le rendement en revenus (dividendes, coupons). Le rendement total s\'exprime comme R = (P1 - P0 + D) / P0, où P0 est le prix initial, P1 le prix final et D les flux intermédiaires. Le risque, quant à lui, se mesure traditionnellement par l\'écart-type (volatilité) des rendements. Une volatilité de 20 % signifie qu\'en conditions normales, le rendement annuel se situera dans un intervalle de +/- 20 % autour de la moyenne environ deux tiers du temps. La prime de risque d\'un actif est la différence entre son rendement espéré et le taux sans risque. Historiquement, la prime de risque des actions par rapport aux obligations d\'État se situe entre 4 % et 7 % selon les marchés et les périodes. Cette prime compense le risque de perte en capital, l\'illiquidité potentielle et l\'incertitude macroéconomique. Comprendre ce trade-off est essentiel car il guide toutes les décisions d\'investissement : un investisseur rationnel n\'acceptera un risque additionnel que s\'il est compensé par un rendement espéré supérieur.',
      formula: 'R = (P₁ - P₀ + D) / P₀ ; Volatilité = σ = √[Σ(Rᵢ - R̄)² / (n-1)]',
      example:
        'Un investisseur achète une action à 100 €. Après un an, elle vaut 112 € et a versé 3 € de dividende. Son rendement total est (112 - 100 + 3) / 100 = 15 %. Si l\'OAT rapporte 3 %, la prime de risque de cet investissement est 15 % - 3 % = 12 %.',
      finnSays:
        'Pas de rendement sans risque, moussaillon ! En finance, le fromage gratuit n\'existe pas. Mon rôle est de t\'apprendre à naviguer entre les récifs du risque pour atteindre le trésor du rendement.',
    },
  },
  // ─── Lesson 2 ───
  {
    id: 'portfolio-2',
    title: 'Mesures de risque',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Au-delà de la volatilité classique, il existe de nombreuses mesures de risque qui capturent différentes dimensions du danger financier. Maîtriser ces outils est essentiel pour une gestion de portefeuille rigoureuse.',
      keyPoints: [
        'La Value at Risk (VaR) estime la perte maximale sur une période donnée à un seuil de confiance défini',
        'La CVaR (Expected Shortfall) mesure la perte moyenne dans les cas dépassant la VaR',
        'Le drawdown maximal mesure la plus grande chute depuis un pic historique',
        'Le semi-écart-type ne considère que la volatilité à la baisse, plus pertinente pour les investisseurs',
      ],
      explanation:
        'La volatilité (écart-type) traite symétriquement les hausses et les baisses, ce qui ne reflète pas la perception réelle du risque par les investisseurs, davantage préoccupés par les pertes. La Value at Risk (VaR) répond à cette limite en exprimant la perte maximale potentielle. Une VaR à 95 % sur un jour de 2 millions signifie qu\'il y a 5 % de chances de perdre plus de 2 millions en une journée. Cependant, la VaR ne dit rien sur l\'ampleur des pertes au-delà du seuil. La CVaR (Conditional VaR ou Expected Shortfall) comble cette lacune en calculant la moyenne des pertes dépassant la VaR. Le drawdown maximal est intuitif : c\'est la plus grande baisse entre un pic et un creux. Pour le S&P 500, le drawdown maximal lors de la crise de 2008 a atteint -56 %. Le semi-écart-type ou downside deviation ne prend en compte que les rendements inférieurs à un seuil (souvent zéro ou le taux sans risque), ce qui est cohérent avec la théorie de l\'utilité : les investisseurs sont risk-averse et souffrent davantage des pertes que des gains de même ampleur. Enfin, des mesures comme le ratio de Sortino utilisent la downside deviation plutôt que la volatilité totale pour évaluer la performance ajustée du risque.',
      formula: 'VaR(α) = μ - z_α × σ ; CVaR = E[L | L > VaR] ; Downside Dev. = √[Σ min(Rᵢ - τ, 0)² / n]',
      example:
        'Un fonds a un rendement moyen journalier de 0,04 % et un écart-type de 1,2 %. Sa VaR paramétrique à 95 % sur un jour est 0,04 % - 1,645 × 1,2 % = -1,93 %. Sur un portefeuille de 10 M€, cela représente une perte potentielle de 193 000 €.',
      finnSays:
        'La VaR te dit où commence la tempête, mais la CVaR te dit combien de dégâts elle cause. Un bon capitaine connaît les deux !',
    },
  },
  // ─── Lesson 3 ───
  {
    id: 'portfolio-3',
    title: 'Diversification',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La diversification est souvent qualifiée de "seul repas gratuit en finance". En combinant des actifs dont les rendements ne sont pas parfaitement corrélés, on peut réduire le risque du portefeuille sans sacrifier le rendement espéré.',
      keyPoints: [
        'La diversification réduit le risque spécifique (idiosyncratique) mais pas le risque systématique (de marché)',
        'L\'effet de diversification augmente avec le nombre d\'actifs mais avec des rendements décroissants',
        'Environ 25 à 30 actions suffisent pour éliminer la majorité du risque spécifique',
        'La diversification géographique et sectorielle amplifie les bénéfices',
      ],
      explanation:
        'Le risque total d\'un actif se décompose en risque systématique (lié au marché, non diversifiable) et risque spécifique (propre à l\'entreprise, diversifiable). La diversification exploite le fait que les mauvaises nouvelles affectant une entreprise n\'affectent pas nécessairement les autres. Mathématiquement, la variance d\'un portefeuille de n actifs équipondérés est σ²_p = σ̄²/n + (n-1)/n × cov̄, où σ̄² est la variance moyenne et cov̄ la covariance moyenne. Quand n tend vers l\'infini, la variance du portefeuille converge vers la covariance moyenne : c\'est le risque systématique incompressible. Des études empiriques montrent que passer de 1 à 10 actions réduit le risque spécifique d\'environ 50 %, et que 30 actions éliminent environ 90 % de ce risque. Au-delà, le gain marginal est faible. La diversification internationale ajoute une couche supplémentaire car les cycles économiques ne sont pas parfaitement synchronisés entre pays. Cependant, en période de crise, les corrélations tendent à augmenter (phénomène de "correlation breakdown"), réduisant l\'efficacité de la diversification justement quand on en a le plus besoin. C\'est pourquoi les gestionnaires complémentent la diversification classique par des actifs alternatifs (or, immobilier, hedge funds) moins corrélés aux marchés traditionnels.',
      formula: 'σ²_p = (1/n) × σ̄² + (1 - 1/n) × cov̄',
      example:
        'Un portefeuille de 2 actions de volatilité 30 % chacune avec une corrélation de 0,3 a une volatilité de √(0,5² × 0,30² + 0,5² × 0,30² + 2 × 0,5 × 0,5 × 0,3 × 0,30 × 0,30) = 24,2 %, soit une réduction de 19 % par rapport à une seule action.',
      finnSays:
        'Ne mets pas tous tes poissons dans le même filet ! La diversification est le meilleur ami du navigateur prudent. Même si une prise est mauvaise, les autres te nourriront.',
    },
  },
  // ─── Lesson 4 ───
  {
    id: 'portfolio-4',
    title: 'Corrélation',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La corrélation mesure la relation linéaire entre les rendements de deux actifs. C\'est le paramètre clé qui détermine l\'efficacité de la diversification et la forme de la frontière efficiente.',
      keyPoints: [
        'Le coefficient de corrélation varie de -1 (opposition parfaite) à +1 (co-mouvement parfait)',
        'Une corrélation de 0 signifie absence de relation linéaire, pas indépendance',
        'Les corrélations sont instables dans le temps et tendent à augmenter en période de crise',
        'La matrice de variance-covariance est l\'outil central de la construction de portefeuille',
      ],
      explanation:
        'Le coefficient de corrélation ρ entre deux actifs A et B est défini comme le rapport de leur covariance sur le produit de leurs écarts-types : ρ_AB = Cov(A,B) / (σ_A × σ_B). La covariance elle-même mesure la tendance de deux variables à évoluer ensemble : Cov(A,B) = E[(R_A - μ_A)(R_B - μ_B)]. En pratique, la corrélation entre les grandes classes d\'actifs est relativement stable à moyen terme mais connaît des variations significatives à court terme. Les actions américaines et européennes ont historiquement une corrélation de 0,7 à 0,8, tandis que la corrélation actions-obligations oscille entre -0,3 et +0,5 selon les régimes de marché. Depuis les années 2000, cette corrélation est devenue majoritairement négative, renforçant le rôle diversifiant des obligations. La matrice de variance-covariance Σ, de dimension n×n pour n actifs, contient les variances sur la diagonale et les covariances hors diagonale. Elle est essentielle pour calculer le risque de tout portefeuille : σ²_p = w\'Σw, où w est le vecteur des poids. Estimer cette matrice est un défi majeur car elle contient n(n+1)/2 paramètres et les estimations historiques sont bruitées. Des techniques comme le shrinkage de Ledoit-Wolf permettent d\'obtenir des estimations plus robustes.',
      formula: 'ρ_AB = Cov(R_A, R_B) / (σ_A × σ_B) ; σ²_p = w\'Σw',
      example:
        'Actions A (σ=25 %) et B (σ=20 %) avec ρ=0,4 en pondération 60/40 : σ_p = √(0,36×0,0625 + 0,16×0,04 + 2×0,6×0,4×0,4×0,25×0,20) = 19,7 %. Avec ρ=-0,4 : σ_p = 13,1 %. La corrélation change tout !',
      finnSays:
        'La corrélation, c\'est comme le vent entre deux voiliers : s\'ils naviguent toujours dans le même sens, pas d\'avantage. Mais si l\'un va au nord quand l\'autre va au sud, ensemble vous avancez toujours !',
    },
  },
  // ─── Lesson 5 ───
  {
    id: 'portfolio-5',
    title: 'Markowitz',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Harry Markowitz a révolutionné la finance en 1952 en formalisant mathématiquement la sélection de portefeuille. Sa théorie du portefeuille moyen-variance reste le fondement de la gestion d\'actifs moderne.',
      keyPoints: [
        'Markowitz a montré qu\'un investisseur rationnel doit considérer le portefeuille dans son ensemble, pas les actifs individuellement',
        'L\'optimisation moyen-variance cherche à minimiser le risque pour un rendement cible donné',
        'Le portefeuille de variance minimale est le point le plus à gauche de la frontière efficiente',
        'Le problème d\'optimisation est un programme quadratique sous contraintes',
      ],
      explanation:
        'Avant Markowitz, les investisseurs sélectionnaient les actifs individuellement selon leur rendement espéré. Markowitz a montré que ce qui compte n\'est pas le risque isolé d\'un actif mais sa contribution au risque du portefeuille, déterminée par ses covariances avec les autres actifs. Le problème d\'optimisation de Markowitz consiste à minimiser σ²_p = w\'Σw sous la contrainte que le rendement espéré atteint un objectif μ_cible et que la somme des poids vaut 1 (et éventuellement w ≥ 0 si pas de vente à découvert). La résolution par la méthode des multiplicateurs de Lagrange donne une solution analytique dans le cas sans contrainte de positivité. En faisant varier μ_cible, on obtient l\'ensemble des portefeuilles efficients formant la "frontière efficiente". La partie supérieure de la parabole (au-dessus du portefeuille de variance minimale) constitue la frontière efficiente proprement dite : aucun investisseur rationnel ne devrait détenir un portefeuille en dessous de ce point. Les limitations pratiques incluent la sensibilité aux estimations des rendements espérés, l\'instabilité des poids optimaux et la concentration excessive. Des techniques comme le Black-Litterman ou le resampling de Michaud apportent des corrections pratiques à ces problèmes.',
      formula: 'min w\'Σw  s.c.  w\'μ = μ_cible, w\'1 = 1',
      example:
        'Avec 3 actifs (rendements espérés 8 %, 12 %, 6 % et volatilités 15 %, 25 %, 10 %), l\'optimisation Markowitz avec cible 9 % pourrait donner les poids 40 %, 25 %, 35 % pour une volatilité de portefeuille de seulement 11 %, contre 15 % pour un investissement dans l\'actif unique rapportant 9 %.',
      finnSays:
        'Markowitz a gagné le Nobel avec une idée simple mais puissante : ne regarde pas les poissons un par un, regarde le filet entier ! C\'est la magie de la diversification optimale.',
    },
  },
  // ─── Lesson 6 ───
  {
    id: 'portfolio-6',
    title: 'Frontière efficiente',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'La frontière efficiente représente l\'ensemble des portefeuilles offrant le rendement maximal pour chaque niveau de risque. C\'est la courbe de référence qui sépare les portefeuilles optimaux des portefeuilles sous-optimaux.',
      keyPoints: [
        'La frontière efficiente est la partie supérieure de la parabole dans l\'espace rendement-risque',
        'Tout portefeuille situé en dessous de la frontière est dominé par au moins un portefeuille efficient',
        'Avec deux actifs, la frontière est une courbe hyperbolique dont la forme dépend de la corrélation',
        'L\'ajout d\'un actif sans risque transforme la frontière en une droite (Capital Market Line)',
      ],
      explanation:
        'En traçant tous les portefeuilles possibles à partir d\'un ensemble d\'actifs dans l\'espace (σ, E[R]), on obtient une zone en forme de parabole (ou de balle) appelée "ensemble des possibles". La frontière efficiente en est le bord supérieur gauche : chaque point représente le portefeuille de risque minimal pour un rendement donné. Avec deux actifs, quand la corrélation passe de +1 à -1, la frontière se courbe de plus en plus vers la gauche, illustrant le bénéfice croissant de la diversification. Avec ρ=-1, il est même théoriquement possible de créer un portefeuille sans risque. L\'introduction d\'un actif sans risque (taux r_f) change fondamentalement la donne. Un investisseur peut combiner l\'actif sans risque avec n\'importe quel portefeuille risqué. La combinaison optimale est la droite tangente à la frontière efficiente passant par r_f : c\'est la Capital Market Line (CML). Le point de tangence est le portefeuille tangent, aussi appelé portefeuille de marché dans le cadre du CAPM. Tous les investisseurs rationnels devraient détenir une combinaison du portefeuille tangent et de l\'actif sans risque, en ajustant la proportion selon leur aversion au risque (théorème de séparation de Tobin).',
      formula: 'CML : E[R_p] = r_f + [(E[R_M] - r_f) / σ_M] × σ_p',
      example:
        'Le portefeuille tangent a un rendement de 10 % et une volatilité de 15 %. Le taux sans risque est 2 %. Un investisseur voulant 8 % de rendement investira 75 % dans le portefeuille tangent et 25 % dans l\'actif sans risque, pour une volatilité de 11,25 %.',
      finnSays:
        'La frontière efficiente est comme la ligne de côte optimale : au-delà, c\'est la mer d\'efficacité. En dessous, tu perds du temps dans les terres. Navigue toujours sur la frontière !',
    },
  },
  // ─── Lesson 7 ───
  {
    id: 'portfolio-7',
    title: 'Portefeuille tangent',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le portefeuille tangent est le portefeuille risqué optimal : il maximise le ratio de Sharpe et se situe au point de tangence entre la Capital Market Line et la frontière efficiente. Dans le CAPM, il correspond au portefeuille de marché.',
      keyPoints: [
        'Le portefeuille tangent maximise le ratio de Sharpe parmi tous les portefeuilles risqués',
        'Il est obtenu en maximisant (w\'μ - r_f) / √(w\'Σw)',
        'Le théorème de séparation de Tobin affirme que tous les investisseurs détiennent le même portefeuille risqué',
        'En pratique, le portefeuille tangent est très sensible aux estimations des rendements espérés',
      ],
      explanation:
        'Le portefeuille tangent est la solution au problème de maximisation du ratio de Sharpe : max (E[R_p] - r_f) / σ_p. Géométriquement, c\'est le point où la droite partant du taux sans risque est tangente à la frontière efficiente. Tous les portefeuilles sur la CML sont des combinaisons linéaires de l\'actif sans risque et du portefeuille tangent. Un investisseur conservateur placera 70 % en actif sans risque et 30 % dans le tangent. Un investisseur agressif pourra emprunter au taux sans risque pour investir plus de 100 % dans le tangent (levier). Le théorème de séparation de Tobin en découle directement : la décision d\'investissement se décompose en deux étapes indépendantes. D\'abord, identifier le portefeuille tangent (étape commune à tous les investisseurs). Ensuite, choisir la proportion actif sans risque / portefeuille tangent selon son aversion au risque (étape personnelle). En pratique, le portefeuille tangent est difficile à estimer car de petites variations dans les rendements espérés produisent des changements drastiques dans les poids. C\'est le problème de l\'"error maximization" de Michaud. Des approches robustes comme Black-Litterman intègrent un prior de marché pour stabiliser les estimations.',
      formula: 'max SR = (w\'μ - r_f) / √(w\'Σw)  s.c. w\'1 = 1 ; w* = Σ⁻¹(μ - r_f·1) / 1\'Σ⁻¹(μ - r_f·1)',
      example:
        'Avec r_f = 2 %, le portefeuille tangent composé de 55 % actions et 45 % obligations a un rendement espéré de 7 % et une volatilité de 10 %, soit un ratio de Sharpe de 0,50. Aucun autre portefeuille risqué ne peut offrir un Sharpe supérieur.',
      finnSays:
        'Le portefeuille tangent, c\'est le voilier le plus rapide de la flotte. Tu peux choisir de naviguer doucement ou à pleine vitesse, mais c\'est toujours le meilleur bateau !',
    },
  },
  // ─── Lesson 8 ───
  {
    id: 'portfolio-8',
    title: 'CAPM principes',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Le Capital Asset Pricing Model (CAPM), développé par Sharpe, Lintner et Mossin dans les années 1960, est le modèle d\'équilibre le plus célèbre de la finance. Il établit une relation linéaire entre le rendement espéré d\'un actif et son risque systématique.',
      keyPoints: [
        'Le CAPM postule que le seul risque rémunéré est le risque systématique, mesuré par le bêta',
        'En équilibre, tous les investisseurs détiennent le portefeuille de marché (M)',
        'Le rendement espéré d\'un actif est une fonction linéaire de son bêta',
        'Les hypothèses incluent des marchés parfaits, des investisseurs rationnels et un horizon identique',
      ],
      explanation:
        'Le CAPM part des résultats de Markowitz et Tobin pour dériver un modèle d\'équilibre de marché. Si tous les investisseurs optimisent selon la théorie moyen-variance, détiennent le même univers d\'actifs et ont les mêmes anticipations (homogeneous expectations), alors en équilibre, le portefeuille risqué optimal est nécessairement le portefeuille de marché M, pondéré par les capitalisations. Le résultat fondamental du CAPM est la Security Market Line (SML) : E[Ri] = r_f + βi × (E[R_M] - r_f). Le bêta βi = Cov(Ri, R_M) / Var(R_M) mesure la sensibilité de l\'actif i au marché. Un bêta de 1,5 signifie que l\'actif amplifie les mouvements du marché de 50 %. Le risque spécifique (idiosyncratique) n\'est pas rémunéré car il peut être éliminé par diversification. Seul le risque systématique, capturé par le bêta, donne droit à une prime de risque. Les hypothèses du CAPM sont restrictives : pas de coûts de transaction, emprunt illimité au taux sans risque, information parfaite. Malgré ces simplifications, le CAPM reste un cadre de référence universel pour le coût du capital et l\'évaluation des performances.',
      formula: 'E[Rᵢ] = r_f + βᵢ × (E[R_M] - r_f) ; βᵢ = Cov(Rᵢ, R_M) / Var(R_M)',
      example:
        'Une action a un bêta de 1,3. Le taux sans risque est 3 % et la prime de marché est 6 %. Son rendement espéré selon le CAPM est 3 % + 1,3 × 6 % = 10,8 %. Si l\'action rapporte effectivement 13 %, elle surperforme de 2,2 % (alpha positif).',
      finnSays:
        'Le CAPM dit que tu n\'es payé que pour le risque que tu ne peux pas éviter. Pas la peine de prendre des risques idiots quand la diversification les élimine gratuitement !',
    },
  },
  // ─── Lesson 9 ───
  {
    id: 'portfolio-9',
    title: 'CAPM applications',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le CAPM est utilisé quotidiennement en finance pour estimer le coût des fonds propres, évaluer la performance ajustée du risque et construire des portefeuilles factoriels. Comprendre ses applications pratiques est essentiel.',
      keyPoints: [
        'Le CAPM fournit le taux d\'actualisation pour la valorisation DCF via le coût des fonds propres',
        'Le bêta s\'estime par régression linéaire des rendements de l\'actif sur ceux du marché',
        'Le bêta sectoriel (unlevered beta) est préféré au bêta historique pour les comparaisons',
        'Le CAPM sert de benchmark pour mesurer la surperformance (alpha de Jensen)',
      ],
      explanation:
        'L\'application la plus courante du CAPM est l\'estimation du coût des fonds propres (Ke) dans le WACC. Une entreprise avec un bêta de 1,2, un taux sans risque de 3 % et une prime de marché de 5 % aura un Ke = 3 % + 1,2 × 5 % = 9 %. Ce taux sert à actualiser les cash flows dans un DCF. L\'estimation du bêta se fait par régression : on régresse les rendements de l\'action sur ceux de l\'indice de marché (CAC 40, S&P 500). Le coefficient de la pente est le bêta. La période d\'estimation (2 ou 5 ans), la fréquence (journalière, hebdomadaire, mensuelle) et le choix de l\'indice influencent le résultat. En pratique, on utilise souvent le bêta ajusté de Bloomberg : β_adj = 0,67 × β_brut + 0,33 × 1, qui suppose une convergence vers 1 (mean reversion). Pour comparer des entreprises de structures financières différentes, on délève le bêta : β_u = β_L / [1 + (1-t) × D/E]. L\'alpha de Jensen mesure le rendement excédentaire par rapport au CAPM : α = R_i - [r_f + β_i × (R_M - r_f)]. Un alpha positif indique une surperformance ajustée du risque.',
      formula: 'Ke = r_f + β × ERP ; β_adj = 0,67 × β_brut + 0,33 ; β_u = β_L / [1 + (1-t) × D/E]',
      example:
        'L\'action TotalEnergies a un bêta Bloomberg de 0,95. Avec r_f = 3 % et ERP = 5,5 %, Ke = 3 % + 0,95 × 5,5 % = 8,23 %. Ce taux entre dans le WACC pour valoriser l\'entreprise par DCF.',
      finnSays:
        'Le CAPM est ta boussole pour fixer le prix du risque. Chaque investissement doit battre son rendement CAPM pour mériter une place dans le portefeuille du capitaine Finn !',
    },
  },
  // ─── Lesson 10 ───
  {
    id: 'portfolio-10',
    title: 'Security Market Line',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La Security Market Line (SML) est la représentation graphique du CAPM. Elle trace la relation entre le rendement espéré et le bêta, permettant d\'identifier les actifs sur-évalués et sous-évalués.',
      keyPoints: [
        'La SML est une droite dans l\'espace (β, E[R]) passant par r_f et le portefeuille de marché',
        'Un actif au-dessus de la SML est sous-évalué (alpha positif), en dessous il est surévalué',
        'La pente de la SML est la prime de risque du marché (E[R_M] - r_f)',
        'Ne pas confondre SML (espace β-rendement) et CML (espace σ-rendement)',
      ],
      explanation:
        'La SML représente graphiquement l\'équation du CAPM : E[Ri] = r_f + βi × (E[R_M] - r_f). Sur l\'axe horizontal, on porte le bêta (risque systématique) et sur l\'axe vertical le rendement espéré. La droite passe par deux points remarquables : (0, r_f) qui est l\'actif sans risque, et (1, E[R_M]) qui est le portefeuille de marché. La pente de la SML est la prime de risque du marché, soit E[R_M] - r_f. En équilibre, tous les actifs doivent se situer exactement sur la SML. Si un actif se trouve au-dessus (alpha positif), il offre un rendement supérieur à ce que son risque justifie : il est sous-évalué et la demande va augmenter, faisant monter son prix et baisser son rendement espéré. L\'inverse se produit pour un actif sous la SML. Il est crucial de distinguer la SML de la CML (Capital Market Line). La CML concerne les portefeuilles efficients et utilise le risque total (σ), tandis que la SML concerne tous les actifs et utilise le risque systématique (β). Un actif avec beaucoup de risque spécifique peut être bien en dessous de la CML tout en étant exactement sur la SML, car seul son risque systématique est rémunéré.',
      formula: 'SML : E[Rᵢ] = r_f + βᵢ × (E[R_M] - r_f) ; α = Rᵢ - [r_f + βᵢ × (R_M - r_f)]',
      example:
        'Deux actions : A (β=0,8, rendement observé 11 %) et B (β=1,4, rendement 12 %). Avec r_f=3 %, prime=6 %. SML dit : A devrait rapporter 7,8 % → alpha = +3,2 %. B devrait rapporter 11,4 % → alpha = +0,6 %. A est la meilleure affaire.',
      finnSays:
        'La SML est le fil de pêche parfait : chaque poisson a un prix juste basé sur son bêta. Si tu en trouves un au-dessus de la ligne, ferré-le vite !',
    },
  },
  // ─── Lesson 11 ───
  {
    id: 'portfolio-11',
    title: 'Alpha & Beta',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'L\'alpha et le bêta sont les deux paramètres fondamentaux de l\'analyse de performance. Le bêta mesure l\'exposition au marché, tandis que l\'alpha capture la valeur ajoutée (ou détruite) par le gestionnaire.',
      keyPoints: [
        'Le bêta mesure la sensibilité d\'un actif aux mouvements du marché (risque systématique)',
        'L\'alpha de Jensen mesure le rendement excédentaire ajusté du risque (compétence du gérant)',
        'Un bêta > 1 amplifie les mouvements du marché, un bêta < 1 les atténue',
        'Générer de l\'alpha de manière persistante est extrêmement difficile : la majorité des gérants échouent',
      ],
      explanation:
        'Le modèle de marché décompose le rendement d\'un actif en : R_i = α + β × R_M + ε, où α est l\'intercept (alpha), β la pente (bêta) et ε le résidu (risque spécifique). Le R² de cette régression indique la proportion du risque total expliquée par le marché. Pour une action comme LVMH avec un R² de 0,45 et un bêta de 1,1, 45 % de ses fluctuations sont dues au marché et 55 % sont spécifiques. Le bêta est relativement stable pour les grandes capitalisations mais peut varier significativement selon la méthode d\'estimation. L\'alpha de Jensen est la mesure la plus utilisée pour évaluer un gérant. Un alpha positif et statistiquement significatif (t-stat > 2) sur longue période est le Graal de la gestion active. Pourtant, les études académiques (Fama & French, 2010) montrent que la distribution des alphas nets de frais est centrée légèrement en dessous de zéro. Après frais, la majorité des gérants actifs sous-performent leur indice de référence. C\'est l\'argument massue en faveur de la gestion passive. Il faut aussi distinguer l\'alpha du CAPM (mono-factoriel) de l\'alpha multi-factoriel (Fama-French, Carhart), plus exigeant car il contrôle pour d\'autres sources de risque systématique.',
      formula: 'Rᵢ = α + β × R_M + ε ; α_Jensen = R̄ᵢ - [r_f + β × (R̄_M - r_f)]',
      example:
        'Un fonds a un rendement de 14 %, un bêta de 1,2. Le marché a fait 10 % et r_f = 2 %. Alpha = 14 % - [2 % + 1,2 × (10 % - 2 %)] = 14 % - 11,6 % = 2,4 %. Le gérant a créé 2,4 % de valeur ajustée du risque.',
      finnSays:
        'Le bêta te dit si ton bateau suit la marée. L\'alpha te dit si le capitaine sait naviguer ! En tant que capitaine, je préfère évidemment l\'alpha.',
    },
  },
  // ─── Lesson 12 ───
  {
    id: 'portfolio-12',
    title: 'Fama-French',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Le modèle à trois facteurs de Fama et French (1993) étend le CAPM en ajoutant deux facteurs expliquant les rendements : la taille (small vs large) et la valeur (value vs growth). Il explique une part significative des anomalies du CAPM.',
      keyPoints: [
        'Le facteur SMB (Small Minus Big) capture la prime de taille : les petites capitalisations surperforment historiquement',
        'Le facteur HML (High Minus Low) capture la prime de valeur : les actions value surperforment les growth',
        'Le modèle explique ~90 % de la variation des rendements de portefeuilles diversifiés',
        'Les primes de taille et de valeur s\'expliquent par un risque accru ou des biais comportementaux',
      ],
      explanation:
        'Fama et French ont observé que le CAPM échoue à expliquer certaines régularités empiriques. Les actions de petite capitalisation et les actions à ratio B/M (book-to-market) élevé génèrent des rendements supérieurs à ce que leur bêta prédit. Leur modèle à trois facteurs ajoute deux portefeuilles factoriels au facteur de marché. Le SMB est la différence de rendement entre un portefeuille de petites capitalisations et un portefeuille de grandes capitalisations. Le HML est la différence entre un portefeuille d\'actions à B/M élevé (value) et à B/M faible (growth). La régression devient : R_i - r_f = α + β_M × (R_M - r_f) + β_SMB × SMB + β_HML × HML + ε. Une action avec β_SMB = 0,5 et β_HML = 0,3 surperformera quand les small caps et les valeurs décotées surperforment. L\'interprétation des facteurs est débattue. L\'école rationnelle (Fama, French) argue que SMB et HML sont des proxies pour un risque de détresse financière. L\'école comportementale (Lakonishok, Shleifer, Vishny) argue que les investisseurs surévaluent systématiquement les actions growth et sous-évaluent les value. Quoi qu\'il en soit, le modèle à trois facteurs réduit dramatiquement l\'alpha de nombreuses stratégies qui semblaient battre le CAPM.',
      formula: 'Rᵢ - r_f = α + β_M(R_M - r_f) + β_SMB × SMB + β_HML × HML + ε',
      example:
        'Un fonds small-cap value a un alpha CAPM de 4 %. Avec le modèle Fama-French, β_SMB=0,8 et β_HML=0,6. Si SMB=3 % et HML=4 %, l\'exposition factorielle explique 0,8×3 % + 0,6×4 % = 4,8 %. L\'alpha Fama-French tombe à -0,8 % : le gérant ne crée pas de valeur, il prend du risque factoriel.',
      finnSays:
        'Fama et French ont montré que beaucoup de "génies" de la gestion ne faisaient que surfer sur les vagues de la taille et de la valeur. Trois facteurs valent mieux qu\'un !',
    },
  },
  // ─── Lesson 13 ───
  {
    id: 'portfolio-13',
    title: 'Carhart',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le modèle à quatre facteurs de Carhart (1997) ajoute le momentum aux trois facteurs de Fama-French. Le momentum -- la tendance des gagnants récents à continuer de gagner -- est l\'une des anomalies les plus robustes et les plus difficiles à expliquer.',
      keyPoints: [
        'Le facteur WML (Winners Minus Losers) capture la prime de momentum sur 2-12 mois',
        'Le momentum est documenté dans presque toutes les classes d\'actifs et tous les marchés',
        'La stratégie consiste à acheter les gagnants des 12 derniers mois et vendre les perdants',
        'Le momentum connaît des "crashes" violents, notamment lors de retournements de marché',
      ],
      explanation:
        'Jegadeesh et Titman (1993) ont documenté que les actions ayant le mieux performé sur les 3 à 12 derniers mois tendent à continuer de surperformer sur les 3 à 12 mois suivants, et inversement pour les perdants. Carhart a formalisé ce facteur en l\'ajoutant au modèle Fama-French. Le WML (Winners Minus Losers) est construit en classant les actions par rendement passé (en excluant le dernier mois pour éviter l\'effet de microstructure), puis en calculant la différence entre le décile supérieur et le décile inférieur. Historiquement, la prime de momentum est d\'environ 6-8 % par an aux États-Unis, ce qui est considérable. L\'explication du momentum divise la profession. Les comportementalistes invoquent le biais de sous-réaction : les investisseurs intègrent trop lentement les nouvelles informations, créant une dérive post-annonce. Les rationalistes peinent à trouver un risque spécifique justifiant cette prime. Le principal risque du momentum est le "momentum crash" : lors de retournements brutaux (mars 2009, par exemple), les anciens perdants rebondissent violemment tandis que les anciens gagnants chutent, causant des pertes catastrophiques pour la stratégie. Barroso et Santa-Clara (2015) montrent qu\'un momentum à volatilité gérée atténue considérablement ce risque.',
      formula: 'Rᵢ - r_f = α + β_M(R_M - r_f) + β_SMB × SMB + β_HML × HML + β_WML × WML + ε',
      example:
        'Un fonds momentum a un rendement de 16 %, β_M=1,0, β_WML=0,7. Si le marché fait 8 % (prime=5 %) et WML=7 %, la performance expliquée est 3 % + 5 % + 0,7×7 % = 12,9 %. Alpha Carhart = 16 % - 12,9 % = 3,1 %.',
      finnSays:
        'Le momentum, c\'est comme le courant marin : il porte les bateaux rapides encore plus loin. Mais attention au retournement de marée, ça peut faire très mal !',
    },
  },
  // ─── Lesson 14 ───
  {
    id: 'portfolio-14',
    title: 'Multi-facteurs',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Au-delà de Fama-French et Carhart, la recherche a identifié de nombreux facteurs de risque. Les modèles multi-factoriels modernes intègrent la qualité, la faible volatilité, la liquidité et d\'autres primes pour expliquer et capturer les rendements.',
      keyPoints: [
        'Le modèle à 5 facteurs Fama-French (2015) ajoute la profitabilité (RMW) et l\'investissement (CMA)',
        'Le facteur qualité récompense les entreprises profitables et financièrement solides',
        'Le facteur low-volatility est une anomalie : les actions peu volatiles surperforment ajusté du risque',
        'Le "factor zoo" pose le problème du data mining : beaucoup de facteurs ne survivent pas hors échantillon',
      ],
      explanation:
        'La recherche en asset pricing a connu une explosion de facteurs : Cochrane parle d\'un "zoo de facteurs" avec plus de 400 facteurs publiés. Le modèle Fama-French à 5 facteurs ajoute RMW (Robust Minus Weak profitability) et CMA (Conservative Minus Aggressive investment). Les entreprises très profitables et celles qui investissent peu tendent à surperformer. Le facteur qualité, popularisé par AQR (Asness, Frazzini, Pedersen), combine profitabilité, croissance stable, faible levier et faible risque de résultats. Le facteur low-volatility ou BAB (Betting Against Beta) exploite une anomalie fondamentale : contrairement à ce que prédit le CAPM, les actions à faible bêta ont historiquement des rendements ajustés du risque supérieurs aux actions à bêta élevé. Frazzini et Pedersen (2014) l\'expliquent par les contraintes de levier : les investisseurs ne pouvant pas emprunter librement surpondèrent les actifs à haut bêta, les rendant trop chers. En pratique, les investisseurs institutionnels construisent des portefeuilles multi-factoriels en combinant des expositions à la valeur, la taille, le momentum, la qualité et la faible volatilité. Le défi est de distinguer les vrais facteurs (robustes dans le temps et à travers les marchés) des artefacts statistiques.',
      formula: 'Rᵢ - r_f = α + β_M × MKT + β_SMB × SMB + β_HML × HML + β_RMW × RMW + β_CMA × CMA + ε',
      example:
        'Un ETF multi-factoriel combine : 25 % value (HML), 25 % momentum (WML), 25 % qualité (RMW), 25 % low-vol (BAB). Backtesté sur 30 ans, il génère un rendement de 11 % p.a. avec une volatilité de 12 %, soit un Sharpe de 0,75, vs 0,40 pour le marché.',
      finnSays:
        'Ne mets pas ta foi dans un seul facteur. Comme un bon équipage, c\'est la diversité des compétences qui fait la force du navire !',
    },
  },
  // ─── Lesson 15 ───
  {
    id: 'portfolio-15',
    title: 'Allocation stratégique',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'L\'allocation stratégique d\'actifs (Strategic Asset Allocation) définit la répartition cible de long terme entre les grandes classes d\'actifs. C\'est la décision d\'investissement la plus importante, expliquant plus de 90 % de la variabilité des rendements d\'un portefeuille.',
      keyPoints: [
        'L\'étude de Brinson, Hood & Beebower (1986) montre que l\'allocation explique ~93 % de la variance des rendements',
        'Les grandes classes d\'actifs sont : actions, obligations, immobilier, matières premières, liquidités',
        'L\'allocation stratégique reflète les objectifs de long terme, la tolérance au risque et l\'horizon d\'investissement',
        'L\'allocation par tranches d\'âge (100 - âge = % actions) est une heuristique simple mais utile',
      ],
      explanation:
        'L\'allocation stratégique est le squelette du portefeuille. Elle répond à la question fondamentale : combien investir dans chaque classe d\'actifs ? L\'étude séminale de Brinson, Hood et Beebower a démontré que la politique d\'allocation -- le mix long terme entre actions, obligations et alternatives -- explique l\'écrasante majorité des variations de performance d\'un fonds de pension. La sélection de titres et le market timing ne contribuent que marginalement. La construction d\'une allocation stratégique passe par plusieurs étapes. D\'abord, définir les objectifs (rendement cible, contraintes de liquidité, horizon). Ensuite, estimer les rendements espérés, volatilités et corrélations des classes d\'actifs (Capital Market Assumptions). Puis, optimiser le mix via Markowitz ou des approches alternatives (parité de risque, Black-Litterman). Un fonds de pension typique pourrait cibler 50 % actions (dont 30 % domestiques, 20 % internationales), 30 % obligations, 10 % immobilier et 10 % alternatifs. Un endowment universitaire américain (modèle Yale de Swensen) favorise davantage les alternatives : 25 % private equity, 15 % hedge funds, 20 % immobilier, avec seulement 40 % en marchés publics. L\'allocation stratégique est revue périodiquement (tous les 3-5 ans) ou lors de changements structurels dans les anticipations de marché.',
      example:
        'Un investisseur de 35 ans avec un horizon retraite à 30 ans adopte une allocation stratégique de 70 % actions (40 % monde développé, 20 % émergents, 10 % small caps), 20 % obligations (10 % souveraines, 10 % corporate), 5 % immobilier coté, 5 % or.',
      finnSays:
        'L\'allocation stratégique, c\'est choisir ton itinéraire de navigation pour les années à venir. Le plus important n\'est pas la manoeuvre du jour mais la direction générale !',
    },
  },
  // ─── Lesson 16 ───
  {
    id: 'portfolio-16',
    title: 'Allocation tactique',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'L\'allocation tactique d\'actifs (Tactical Asset Allocation) consiste à dévier temporairement de l\'allocation stratégique pour exploiter des opportunités de marché à court ou moyen terme. C\'est une forme de market timing disciplinée.',
      keyPoints: [
        'L\'allocation tactique s\'exprime en écarts par rapport à l\'allocation stratégique (overweight/underweight)',
        'Elle exploite les valorisations relatives, le cycle économique et les signaux techniques',
        'Les bandes de déviation limitent l\'amplitude des paris tactiques (ex. +/- 5 % par classe)',
        'Peu de gérants réussissent le market timing de manière consistante',
      ],
      explanation:
        'L\'allocation tactique est un overlay de court-moyen terme sur l\'allocation stratégique. Un investisseur dont l\'allocation stratégique est 60/40 actions/obligations pourrait surpondérer temporairement les actions à 65 % s\'il estime que les conditions de marché sont favorables. Les signaux tactiques incluent : les indicateurs de valorisation (CAPE Shiller, credit spreads), les indicateurs macroéconomiques (PMI, taux de chômage, courbe des taux), les indicateurs de sentiment (VIX, enquêtes d\'investisseurs, flux de fonds) et les indicateurs techniques (momentum, moyennes mobiles). L\'approche par "régimes de marché" classe l\'environnement en phases (expansion, surchauffe, ralentissement, récession) et ajuste l\'allocation en conséquence. En expansion, surpondérer les actions cycliques et le high yield. En récession, surpondérer les obligations souveraines et l\'or. La difficulté est que les changements de régime sont identifiés avec retard. L\'evidence académique est mitigée : quelques études montrent une valeur ajoutée modeste du TAA, mais la majorité des gérants ne parviennent pas à battre une allocation stratégique constamment rebalancée. Le coût du timing raté est élevé : manquer les 10 meilleurs jours de bourse sur 20 ans réduit le rendement de moitié.',
      example:
        'En octobre 2022, le CAPE Shiller des actions européennes est à 12x contre une moyenne historique de 17x, et les credit spreads sont élevés. Un gérant tactique surpondère les actions européennes de +5 % et le high yield de +3 % en réduisant les obligations souveraines de -8 %.',
      finnSays:
        'L\'allocation tactique, c\'est ajuster les voiles selon le vent du moment. Mais n\'oublie jamais ton cap stratégique, sinon tu tourneras en rond !',
    },
  },
  // ─── Lesson 17 ───
  {
    id: 'portfolio-17',
    title: 'Rebalancing',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le rebalancing consiste à ramener régulièrement le portefeuille vers ses pondérations cibles. Sans rebalancing, un portefeuille 60/40 peut dériver vers 75/25 après un marché haussier, modifiant son profil de risque.',
      keyPoints: [
        'Le rebalancing calendaire (mensuel, trimestriel) est simple mais peut être sous-optimal',
        'Le rebalancing par seuils (quand un écart dépasse x %) est plus efficace',
        'Le rebalancing est contrarian par nature : il force à vendre les gagnants et acheter les perdants',
        'Les coûts de transaction et la fiscalité doivent être intégrés dans la stratégie de rebalancing',
      ],
      explanation:
        'Sans intervention, les poids d\'un portefeuille dérivent en fonction des performances relatives des actifs. Un portefeuille initialement 60 % actions / 40 % obligations dans lequel les actions gagnent 30 % et les obligations 5 % devient naturellement 67 % / 33 %, augmentant le risque au-delà du profil ciblé. Le rebalancing restaure les proportions initiales. Il existe trois approches principales. Le rebalancing calendaire : à date fixe (chaque trimestre par exemple), on rebalance systématiquement. Le rebalancing par seuils : on rebalance quand un écart dépasse un seuil (par exemple, si les actions dépassent 65 % ou tombent sous 55 %). L\'approche hybride combine les deux : on vérifie à date fixe si les seuils sont dépassés. Des études (Vanguard, 2010) montrent que le rebalancing par seuils de 5 % vérifié trimestriellement offre le meilleur compromis entre contrôle du risque et coûts. Le rebalancing a un effet contrarian naturel : il achète les actifs qui ont baissé (bon marché) et vend ceux qui ont monté (chers). Sur longue période, cet effet ajoute environ 0,3-0,5 % de rendement annuel grâce au "rebalancing bonus", surtout quand les actifs sont volatils et faiblement corrélés.',
      formula: 'Rebalancing bonus ≈ 0,5 × Σ wᵢ × σᵢ² - σ²_p (approximation de Fernholz)',
      example:
        'Portefeuille cible 60/40. Après 6 mois : actions +15 %, obligations +2 %. Nouveau mix : 64,3/35,7. Le seuil de 5 % n\'est pas atteint. Après 12 mois : actions +28 %, obligations +4 %. Mix : 68,5/31,5. Seuil dépassé → rebalancing en vendant 8,5 % d\'actions pour acheter des obligations.',
      finnSays:
        'Le rebalancing, c\'est comme entretenir ton bateau : ce n\'est pas glamour, mais sans ça, la coque dérive et un jour, tu chavires !',
    },
  },
  // ─── Lesson 18 ───
  {
    id: 'portfolio-18',
    title: 'Passive vs Active',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le débat gestion passive versus gestion active est l\'un des plus vifs en finance. La gestion passive réplique un indice à moindre coût, tandis que la gestion active tente de battre le marché. Les données empiriques favorisent largement la gestion passive.',
      keyPoints: [
        'La gestion passive via les fonds indiciels et ETF représente désormais plus de 50 % des encours aux US',
        'Le SPIVA scorecard montre que 85-95 % des gérants actifs sous-performent leur indice sur 15 ans',
        'Les frais de gestion sont le premier prédicteur de la sous-performance : 1,5 % actif vs 0,05 % passif',
        'L\'EMH (Efficient Market Hypothesis) sous-tend la gestion passive : les prix reflètent l\'information',
      ],
      explanation:
        'La gestion passive repose sur l\'idée que les marchés sont suffisamment efficients pour que tenter de les battre soit un jeu à somme négative après frais. John Bogle, fondateur de Vanguard, a popularisé les fonds indiciels dans les années 1970. Les chiffres sont sans appel : sur 15 ans, selon le SPIVA scorecard de S&P, 92 % des gérants actions US large-cap sous-performent le S&P 500. En Europe, le taux d\'échec est de 85-90 %. La raison principale est mathématique (paradoxe de Sharpe) : avant frais, la performance moyenne de tous les gérants actifs est nécessairement celle du marché. Après frais, elle est inférieure de 1-2 % par an. Sur 20 ans, 1,5 % de frais annuels réduit la valeur finale d\'environ 25 %. La gestion passive n\'est cependant pas parfaite. Elle crée des distorsions de prix car les achats et ventes se font sans analyse fondamentale. Les inclusions dans les indices (effet S&P 500) génèrent des anomalies de prix. La gestion active reste justifiable dans les marchés moins efficients (small caps, émergents, high yield) où l\'information est plus rare et plus coûteuse à obtenir. Le compromis optimal est souvent un coeur passif (60-80 %) complété par des satellites actifs ciblés (20-40 %).',
      example:
        'Sur 20 ans, un investisseur place 100 000 € : Fonds actif (frais 1,5 %, rendement brut 8 %) → 322 000 €. ETF indiciel (frais 0,1 %, rendement brut 8 %) → 453 000 €. Différence : 131 000 € soit 40 % de la valeur finale, uniquement due aux frais.',
      finnSays:
        'En gestion passive, tu laisses le courant te porter. En gestion active, tu rames contre lui en espérant aller plus vite. Spoiler : le courant gagne presque toujours.',
    },
  },
  // ─── Lesson 19 ───
  {
    id: 'portfolio-19',
    title: 'ETF & fonds',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les ETF (Exchange-Traded Funds) et les fonds communs de placement (OPCVM/SICAV) sont les véhicules principaux de la gestion collective. Comprendre leurs mécanismes, avantages et coûts est essentiel pour construire un portefeuille.',
      keyPoints: [
        'Un ETF se négocie en bourse comme une action, un fonds se souscrit/rachète à la VL quotidienne',
        'Le mécanisme de création/rachat des ETF maintient le prix proche de la valeur liquidative',
        'Le TER (Total Expense Ratio) est le coût global annuel : de 0,03 % (S&P 500 ETF) à 2 % (fonds actifs)',
        'La réplication physique détient les titres, la synthétique utilise des swaps (risque de contrepartie)',
      ],
      explanation:
        'Les fonds communs de placement mutualisent l\'épargne de nombreux investisseurs pour investir dans un portefeuille diversifié géré par un professionnel. Les OPCVM en France se déclinent en SICAV (sociétés) et FCP (fonds contractuels). L\'investisseur souscrit et rachète des parts au prix de la valeur liquidative (VL), calculée quotidiennement. Les ETF, lancés en 1993 avec le SPDR S&P 500, ont révolutionné la gestion en offrant la diversification d\'un fonds avec la négociabilité d\'une action. Le mécanisme de création/rachat in-kind par les participants autorisés (grandes banques) assure que le prix de l\'ETF reste proche de la VL. Si l\'ETF se négocie au-dessus de sa VL (prime), les participants achètent les actions sous-jacentes et les échangent contre des parts d\'ETF, ramenant le prix vers la VL. Le marché mondial des ETF dépasse 10 000 milliards de dollars d\'encours. Les ETF smart-beta combinent les avantages des ETF (faible coût, transparence) avec des stratégies factorielles (value, momentum, quality). Cependant, la prolifération d\'ETF niches (ETF thématiques, levered, inverse) soulève des questions de liquidité et de complexité. L\'investisseur doit vérifier le TER, la taille du fonds (>100 M€ de préférence), le spread bid-ask, la méthode de réplication et la tracking error.',
      example:
        'Un ETF MSCI World (TER 0,12 %) réplique physiquement 1 500 actions de 23 pays développés. Un investisseur européen peut l\'acheter sur Euronext pour quelques euros de frais de courtage. Sur 10 ans, la tracking error est de 0,15 % par an, quasi parfaite.',
      finnSays:
        'Les ETF sont les bateaux les plus efficaces de la flotte : rapides, économiques et fiables. Pourquoi payer un capitaine cher quand la destination est la même ?',
    },
  },
  // ─── Lesson 20 ───
  {
    id: 'portfolio-20',
    title: 'Attribution de performance',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'L\'attribution de performance décompose le rendement d\'un portefeuille en sources identifiables : allocation sectorielle, sélection de titres, interaction et timing. C\'est l\'outil essentiel pour comprendre d\'où vient (ou ne vient pas) la valeur ajoutée d\'un gérant.',
      keyPoints: [
        'L\'attribution de Brinson décompose le rendement excédentaire en effet d\'allocation, de sélection et d\'interaction',
        'L\'effet d\'allocation mesure la valeur ajoutée par la sur/sous-pondération des secteurs',
        'L\'effet de sélection mesure la valeur ajoutée par le choix des titres au sein de chaque secteur',
        'L\'attribution multi-période nécessite un chaînage géométrique pour éviter les biais de compounding',
      ],
      explanation:
        'L\'attribution de performance selon le modèle de Brinson, Hood et Beebower décompose le rendement excédentaire (portefeuille - benchmark) en trois composantes. L\'effet d\'allocation mesure la valeur ajoutée par les choix de pondération sectorielle : si un gérant surpondère le secteur technologie qui surperforme, il génère un effet d\'allocation positif. Mathématiquement : Effet_alloc_i = (w_p_i - w_b_i) × (R_b_i - R_b). L\'effet de sélection mesure la capacité à choisir les meilleurs titres au sein de chaque secteur : Effet_selec_i = w_b_i × (R_p_i - R_b_i). L\'effet d\'interaction capture le croisement entre allocation et sélection : Effet_inter_i = (w_p_i - w_b_i) × (R_p_i - R_b_i). La somme des trois effets donne le rendement excédentaire total. En pratique, l\'attribution multi-période pose des défis techniques car les effets ne s\'additionnent pas simplement dans le temps. Les méthodes de chaînage (Carino, Menchero) permettent de lisser cet effet. L\'attribution basée sur les facteurs (factor-based attribution) est une alternative qui décompose la performance en expositions factorielles (marché, taille, valeur, momentum) plutôt qu\'en secteurs.',
      formula: 'Alloc_i = (w_p,i - w_b,i)(R_b,i - R_b) ; Selec_i = w_b,i(R_p,i - R_b,i) ; Inter_i = (w_p,i - w_b,i)(R_p,i - R_b,i)',
      example:
        'Un gérant surpondère la techno (30 % vs 25 % benchmark) qui rapporte 15 % vs 10 % pour le benchmark global. Effet allocation = (0,30-0,25) × (0,15-0,10) = +0,25 %. Si ses titres techno rapportent 18 % vs 15 %, effet sélection = 0,25 × (0,18-0,15) = +0,75 %.',
      finnSays:
        'L\'attribution de performance, c\'est le journal de bord du capitaine : elle te dit si tu as bien choisi ta route (allocation) ou si tes matelots ont bien pêché (sélection) !',
    },
  },
  // ─── Lesson 21 ───
  {
    id: 'portfolio-21',
    title: 'Sharpe & Sortino',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les ratios de Sharpe et de Sortino sont les mesures de performance ajustée du risque les plus utilisées. Ils permettent de comparer des stratégies de profils de risque différents sur une base commune.',
      keyPoints: [
        'Le ratio de Sharpe mesure le rendement excédentaire par unité de risque total (volatilité)',
        'Le ratio de Sortino utilise la downside deviation au lieu de la volatilité, pénalisant uniquement le risque baissier',
        'Un Sharpe > 1 est considéré bon, > 2 excellent, > 3 exceptionnel (et suspect)',
        'Les ratios sont sensibles à la fréquence des données et à la période d\'observation',
      ],
      explanation:
        'Le ratio de Sharpe, créé par William Sharpe en 1966, est défini comme SR = (R_p - r_f) / σ_p. Il mesure combien de rendement excédentaire un investisseur obtient par unité de risque. Un Sharpe de 0,5 signifie que chaque 1 % de volatilité rapporte 0,5 % de rendement excédentaire. Le S&P 500 a historiquement un Sharpe d\'environ 0,4. Les meilleurs hedge funds atteignent 1,0-1,5. Un Sharpe > 3 sur longue période devrait susciter le scepticisme (Madoff affichait un Sharpe de 2,5). Le ratio de Sortino améliore le Sharpe en ne pénalisant que le risque baissier : Sortino = (R_p - r_f) / DD, où DD est la downside deviation par rapport à un seuil (MAR - Minimum Acceptable Return). Cela fait sens car les investisseurs ne se plaignent pas de la volatilité haussière. Pour une distribution symétrique, Sortino ≈ Sharpe × √2. Mais pour les distributions asymétriques (hedge funds, options), les deux ratios divergent significativement. D\'autres ratios existent : le Calmar (rendement / max drawdown), le ratio d\'information (alpha / tracking error), le ratio Omega (gains pondérés / pertes pondérées). Chaque ratio capture un aspect différent de la performance et aucun n\'est universellement supérieur.',
      formula: 'Sharpe = (R_p - r_f) / σ_p ; Sortino = (R_p - r_f) / DD ; Calmar = R_ann / Max Drawdown',
      example:
        'Fonds A : rendement 12 %, volatilité 18 %, DD 12 %. Fonds B : rendement 9 %, volatilité 10 %, DD 8 %. Avec r_f=3 % : Sharpe A = 0,50, B = 0,60. Sortino A = 0,75, B = 0,75. B est meilleur en Sharpe, mais égal en Sortino car A a moins de downside relatif.',
      finnSays:
        'Le ratio de Sharpe est la vitesse de ton bateau ajustée pour la taille des vagues. Le Sortino ne compte que les vagues qui te frappent en pleine figure !',
    },
  },
  // ─── Lesson 22 ───
  {
    id: 'portfolio-22',
    title: 'Tracking Error',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La tracking error mesure l\'écart entre la performance d\'un portefeuille et celle de son benchmark. C\'est un indicateur clé pour évaluer le degré de gestion active et le risque de déviation par rapport à l\'indice de référence.',
      keyPoints: [
        'La tracking error est l\'écart-type des différences de rendements entre le portefeuille et le benchmark',
        'Un fonds indiciel a une TE < 0,5 %, un fonds actif modéré 2-5 %, un fonds très actif > 6 %',
        'Le ratio d\'information = alpha / tracking error mesure l\'efficacité de la gestion active',
        'Un IR > 0,5 sur longue période est considéré comme excellent',
      ],
      explanation:
        'La tracking error (TE) quantifie la volatilité du rendement excédentaire d\'un portefeuille par rapport à son benchmark : TE = σ(R_p - R_b). Une TE de 3 % signifie que le rendement du fonds s\'écarte de son indice de +/- 3 % environ deux tiers du temps. Pour un ETF répliquant le CAC 40, une TE de 0,1 % est attendue. Pour un gérant actions actif, une TE de 4-6 % est typique. La TE peut être décomposée en sources : risque de sélection (choix des titres), risque d\'allocation (pondérations sectorielles) et risque d\'exposition factorielle. Le ratio d\'information (IR) est le pendant du ratio de Sharpe pour la gestion active : IR = (R_p - R_b) / TE = α / TE. Il mesure combien de rendement excédentaire le gérant produit par unité de risque actif pris. Un IR de 0,5 signifie que chaque 1 % de tracking error produit 0,5 % d\'alpha. Grinold et Kahn, dans leur "loi fondamentale de la gestion active", montrent que IR = IC × √BR, où IC est le coefficient d\'information (compétence du gérant) et BR la "breadth" (nombre de paris indépendants). Un gérant modérément compétent (IC=0,05) faisant 100 paris indépendants obtient un IR de 0,5.',
      formula: 'TE = σ(R_p - R_b) ; IR = α / TE ; Loi fondamentale : IR = IC × √BR',
      example:
        'Un gérant produit un alpha de 2 % avec une tracking error de 5 %. Son IR est 0,40. S\'il augmente sa TE à 8 % sans améliorer sa compétence, son alpha monte proportionnellement à 3,2 % mais son IR reste 0,40. Plus de risque actif ne rend pas un gérant plus compétent.',
      finnSays:
        'La tracking error te dit à quel point tu t\'écartes de la route balisée. Un bon capitaine s\'en écarte juste assez pour prendre des raccourcis, pas pour se perdre en mer !',
    },
  },
  // ─── Lesson 23 ───
  {
    id: 'portfolio-23',
    title: 'Risk budgeting',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Le risk budgeting alloue un "budget de risque" plutôt qu\'un budget de capital. Au lieu de dire "50 % en actions", on dit "les actions doivent contribuer à 60 % du risque total". Cette approche est au coeur de la gestion moderne.',
      keyPoints: [
        'Le risk budgeting décompose le risque total en contributions marginales de chaque actif',
        'La Risk Parity (parité de risque) égalise les contributions au risque de chaque classe d\'actifs',
        'Le fonds All Weather de Bridgewater est l\'exemple emblématique de la parité de risque',
        'La contribution au risque d\'un actif = poids × risque marginal = w_i × ∂σ_p/∂w_i',
      ],
      explanation:
        'Dans un portefeuille 60/40 classique, les actions contribuent environ 90 % du risque total (car elles sont 3x plus volatiles que les obligations). Le risk budgeting reconnaît ce déséquilibre et propose d\'allouer les actifs en fonction de leur contribution au risque plutôt qu\'en termes de capital. La contribution au risque de l\'actif i est RC_i = w_i × (Σw)_i / σ_p, et la somme des contributions au risque égale le risque total : Σ RC_i = σ_p. La Risk Parity impose RC_i = RC_j pour tout i,j : chaque actif contribue identiquement au risque. Pour un portefeuille 2 actifs avec σ_actions=16 % et σ_oblig=5 %, la Risk Parity donne environ 24 % actions et 76 % obligations (inversement proportionnel aux volatilités dans le cas non corrélé). Comme cette allocation est conservative, la Risk Parity utilise du levier pour atteindre un rendement comparable au 60/40. Le All Weather de Bridgewater (Ray Dalio) est construit sur ce principe : il répartit le risque entre 4 environnements économiques (croissance/inflation haute/basse). Les critiques notent que la Risk Parity ne considère pas les rendements espérés et que le recours au levier augmente le risque de liquidité et le coût de financement.',
      formula: 'RC_i = w_i × (Σw)_i / σ_p ; Risk Parity : RC_i = σ_p / n  ∀i',
      example:
        'Portefeuille actions (σ=16 %) / obligations (σ=5 %) / matières premières (σ=20 %). Risk Parity (simplifiée, ρ=0) : w_actions=18 %, w_oblig=58 %, w_MP=14 %. Avec levier 2x, on obtient un rendement proche du 60/40 avec un drawdown maximum réduit de 40 %.',
      finnSays:
        'Le risk budgeting, c\'est répartir les corvées du navire équitablement. Chaque matelot (actif) doit supporter sa juste part du risque, ni plus, ni moins !',
    },
  },
  // ─── Lesson 24 ───
  {
    id: 'portfolio-24',
    title: 'Hedge funds',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Les hedge funds sont des véhicules d\'investissement alternatifs utilisant des stratégies sophistiquées pour générer des rendements absolus. Ils se distinguent par leur flexibilité, leur utilisation du levier et de la vente à découvert.',
      keyPoints: [
        'Les principales stratégies sont : Long/Short Equity, Global Macro, Event-Driven, Relative Value',
        'Les hedge funds facturent typiquement "2 et 20" : 2 % de frais de gestion et 20 % de commission de surperformance',
        'La performance globale des hedge funds a décliné : de 15 % p.a. dans les années 1990 à 5-7 % depuis 2010',
        'La liquidité est limitée : lock-up de 1-3 ans, rachat trimestriel avec préavis de 45-90 jours',
      ],
      explanation:
        'Les hedge funds gèrent environ 4 500 milliards de dollars globalement. Leur caractéristique commune est la recherche de rendement absolu (positif quel que soit le marché) par opposition au rendement relatif (battre un indice). La stratégie Long/Short Equity achète les actions sous-évaluées et vend à découvert les surévaluées, réduisant l\'exposition nette au marché. La stratégie Global Macro prend des paris directionnels sur les devises, taux, matières premières et indices selon les anticipations macroéconomiques (ex. Soros en 1992 contre la livre sterling). L\'Event-Driven exploite les fusions-acquisitions (merger arbitrage), les restructurations et les situations spéciales. Le Relative Value capture les écarts de prix entre actifs liés : arbitrage de convertibles, arbitrage de volatilité, mean-reversion statistique. La structure de frais "2 et 20" avec high-water mark a été remise en question. La high-water mark exige que le gérant retrouve son plus haut historique avant de toucher la commission de surperformance. Depuis 2008, la compression des frais a réduit la moyenne à "1,4 et 17". Le biais de survivorship (les fonds fermés disparaissent des bases de données) gonfle les rendements historiques reportés de 2-3 % par an.',
      example:
        'Un fonds Long/Short Equity gère 500 M€ avec des positions longues de 800 M€ et des positions short de 400 M€. Exposition brute = 240 %, exposition nette = 80 %. Si les longs gagnent 12 % et les shorts perdent 8 % (gain pour le fonds), le rendement brut est (800×12 % - 400×(-8 %)) / 500 = 25,6 %.',
      finnSays:
        'Les hedge funds, ce sont les sous-marins de la flotte : ils vont où les autres ne peuvent pas, mais tout le monde n\'a pas les moyens de s\'offrir un sous-marin !',
    },
  },
  // ─── Lesson 25 ───
  {
    id: 'portfolio-25',
    title: 'Cas Portefeuille',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'Ce cas pratique intègre toutes les compétences du cours pour construire un portefeuille optimal de A à Z : définition des objectifs, estimation des paramètres, optimisation, sélection des véhicules et monitoring.',
      keyPoints: [
        'La construction d\'un portefeuille suit un processus structuré en 6 étapes',
        'L\'Investment Policy Statement (IPS) formalise les objectifs, contraintes et benchmarks',
        'L\'optimisation doit être robuste : Black-Litterman ou contraintes de diversification',
        'Le monitoring continu mesure la performance, contrôle le risque et déclenche le rebalancing',
      ],
      explanation:
        'Construisons un portefeuille pour une fondation avec 50 M€ à investir, un objectif de rendement réel de 5 % (inflation + 5 %), un horizon perpétuel et une contrainte de décaissement de 4 % par an. Étape 1 : l\'IPS formalise l\'objectif de rendement nominal de ~7 %, une volatilité maximale de 12 %, pas de vente à découvert, minimum 20 % en obligations. Étape 2 : les Capital Market Assumptions estiment les rendements espérés (actions monde 7,5 %, obligations 3,5 %, immobilier 6 %, PE 9 %), les volatilités et les corrélations. Étape 3 : l\'optimisation Black-Litterman part de l\'équilibre de marché et ajuste les vues du comité d\'investissement. Résultat : 45 % actions monde, 25 % obligations diversifiées, 15 % immobilier, 10 % private equity, 5 % infrastructure. Étape 4 : implémentation via des ETF pour le coeur liquide et des fonds spécialisés pour le PE et l\'infrastructure. Étape 5 : définition des bandes de rebalancing (+/- 5 %) et des seuils de révision de la stratégie. Étape 6 : reporting trimestriel avec attribution de performance, analyse des facteurs de risque et comparaison au benchmark composite. Ce processus discipliné est suivi par tous les investisseurs institutionnels professionnels.',
      example:
        'Après 1 an, le portefeuille de la fondation a produit 8,2 % vs 7,0 % pour le benchmark composite. L\'attribution montre : +0,5 % d\'effet allocation (surpondération immobilier), +0,7 % d\'effet sélection (bons choix en actions monde). Le drawdown max a été de -8 %, dans la tolérance de -12 %.',
      finnSays:
        'Construire un portefeuille, c\'est planifier une expédition maritime : il faut un bon navire (IPS), une carte (CMA), un itinéraire (optimisation) et un équipage vigilant (monitoring). En route, marin !',
    },
  },
  // ─── Lesson 26 ───
  {
    id: 'portfolio-26',
    title: 'Examen final',
    xp: 300,
    duration: '60 min',
    content: {
      introduction:
        'Cet examen final couvre l\'ensemble du cours de Gestion de Portefeuille : théorie de Markowitz, CAPM, modèles factoriels, allocation d\'actifs, mesures de performance et construction de portefeuille. Prépare-toi à démontrer ta maîtrise complète.',
      keyPoints: [
        'Maîtriser le calcul de rendement, de volatilité et de corrélation pour un portefeuille multi-actifs',
        'Comprendre la frontière efficiente, la CML et la SML et leurs différences',
        'Appliquer les modèles factoriels (CAPM, Fama-French, Carhart) pour l\'analyse de performance',
        'Concevoir une stratégie d\'allocation complète avec rebalancing et risk budgeting',
      ],
      explanation:
        'La gestion de portefeuille est une discipline qui marie théorie et pratique de manière intime. Les fondements théoriques de Markowitz (1952) et Sharpe (1964) restent les piliers de l\'allocation d\'actifs, même si leurs hypothèses sont régulièrement challengées. L\'évolution vers les modèles multi-factoriels a enrichi notre compréhension des sources de rendement et a transformé l\'industrie avec l\'essor du smart beta et de la gestion passive. L\'allocation stratégique détermine la trajectoire de long terme, tandis que l\'allocation tactique et le rebalancing affinent la gestion au quotidien. Les mesures de performance (Sharpe, Sortino, IR, attribution de Brinson) permettent de distinguer la compétence de la chance. Le risk budgeting et la parité de risque proposent une vision moderne et équilibrée de la construction de portefeuille. Enfin, la connaissance des véhicules d\'investissement (ETF, fonds, hedge funds) et de leurs caractéristiques est indispensable pour l\'implémentation. Un gestionnaire de portefeuille complet doit naviguer entre tous ces concepts, adapter son approche au profil de l\'investisseur et maintenir une discipline rigoureuse dans le temps.',
      example:
        'Question d\'examen type : Un portefeuille de 3 actifs avec les poids (0,4, 0,35, 0,25), rendements espérés (10 %, 7 %, 4 %) et matrice de covariance donnée. Calculez le rendement espéré, la volatilité, le ratio de Sharpe et vérifiez si le portefeuille est sur la frontière efficiente.',
      finnSays:
        'Bravo, tu as navigué à travers toutes les eaux de la gestion de portefeuille ! Tu es prêt à prendre la barre et à construire des portefeuilles qui résistent aux tempêtes. Capitaine Finn est fier de toi !',
    },
  },
];
