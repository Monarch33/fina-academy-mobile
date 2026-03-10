// ──────────────────────────────────────────────
//  FINA - Analyse Technique : Lessons (16)
// ──────────────────────────────────────────────

import type { Lesson } from '@/types/course';

export const technicalAnalysisLessons: Lesson[] = [
  // ── Unité 1 : Fondements ────────────────────
  {
    id: 'ta-01',
    title: 'Philosophie de l\'analyse technique',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'analyse technique étudie l\'évolution des prix et des volumes pour anticiper les mouvements futurs. Elle repose sur trois principes fondateurs et une philosophie radicalement différente de l\'analyse fondamentale.',
      keyPoints: [
        'Principe 1 : Le marché intègre toute l\'information (prix = synthèse)',
        'Principe 2 : Les prix évoluent en tendances',
        'Principe 3 : L\'histoire se répète (psychologie des foules)',
        'Théorie de Dow : les fondations de l\'analyse technique',
        'Complémentarité avec l\'analyse fondamentale (timing d\'entrée/sortie)',
      ],
      explanation:
        'L\'analyse technique postule que le prix actuel reflète déjà toute l\'information disponible (fondamentale, macroéconomique, psychologique). Il est donc inutile d\'analyser les bilans : tout est dans le prix. Les prix évoluent en tendances (haussière, baissière, neutre) qui persistent jusqu\'à ce qu\'un signal clair de retournement apparaisse. Enfin, les configurations graphiques se répètent car elles reflètent les émotions humaines (peur, avidité, espoir) qui sont constantes à travers le temps. Charles Dow, fondateur du Wall Street Journal, a posé les bases en 1900 : tendances primaires (mois/années), secondaires (semaines/mois) et mineures (jours). Le volume doit confirmer la tendance.',
      finnSays:
        'L\'analyse technique, c\'est l\'art de lire les émotions du marché dans les graphiques. Les traders ont beau changer, la peur et l\'avidité restent les mêmes depuis des siècles. Mon pinceau, c\'est le graphique !',
    },
  },
  {
    id: 'ta-02',
    title: 'Types de graphiques',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le graphique est l\'outil fondamental du technicien. Plusieurs types de représentation existent, chacun offrant une perspective différente sur l\'évolution des prix.',
      keyPoints: [
        'Graphique en ligne : simplicité, idéal pour les tendances longues',
        'Graphique en barres (OHLC) : ouverture, plus haut, plus bas, clôture',
        'Chandeliers japonais : lecture visuelle immédiate du sentiment',
        'Graphique en point & figure : filtre le bruit, focus sur les mouvements significatifs',
        'Échelle arithmétique vs logarithmique : quand utiliser chaque échelle',
      ],
      explanation:
        'Le graphique en ligne relie les cours de clôture et offre une vision claire de la tendance. Le graphique en barres (OHLC) ajoute l\'ouverture, le plus haut et le plus bas de chaque période. Les chandeliers japonais, popularisés par Steve Nison, codent visuellement le rapport entre ouverture et clôture : un corps vert/blanc signifie clôture > ouverture (haussier), un corps rouge/noir l\'inverse (baissier). Le point & figure (P&F) ne tient pas compte du temps : il ne trace un nouveau point que lorsque le prix évolue d\'un montant significatif (box size), filtrant ainsi le bruit. L\'échelle logarithmique est essentielle pour les séries longues : elle représente les variations en pourcentage plutôt qu\'en valeur absolue.',
      example:
        'Sur un graphique en chandelier du CAC 40 en daily, un long corps vert après une série de bougies rouges signale un fort achat. Si le volume est supérieur à la moyenne, le signal est renforcé.',
      finnSays:
        'Chaque type de graphique est comme un style de peinture : le graphique en ligne est un croquis rapide, les chandeliers sont de l\'impressionnisme (plein de détails et de couleurs), et le point & figure est de l\'art abstrait !',
    },
  },
  {
    id: 'ta-03',
    title: 'Supports et résistances',
    xp: 250,
    duration: '35 min',
    content: {
      introduction:
        'Les supports et résistances sont les niveaux de prix clés où la pression acheteuse ou vendeuse est suffisamment forte pour stopper ou inverser le mouvement en cours.',
      keyPoints: [
        'Support : niveau où la demande est suffisante pour arrêter la baisse',
        'Résistance : niveau où l\'offre est suffisante pour arrêter la hausse',
        'Changement de polarité : un support cassé devient résistance (et vice versa)',
        'Niveaux psychologiques (chiffres ronds) et historiques',
        'Force d\'un niveau : nombre de tests, volume, durée',
      ],
      explanation:
        'Un support se forme lorsque les acheteurs considèrent qu\'un prix est attractif et interviennent massivement. Plus un niveau de support a été testé sans être cassé, plus il est fiable. Lorsqu\'un support est cassé avec conviction (volume élevé, clôture nette en dessous), il devient une résistance future : c\'est le principe de changement de polarité. Les niveaux psychologiques (1 000 points pour un indice, 100 € pour une action) agissent souvent comme supports ou résistances car ils concentrent les ordres. L\'identification des supports et résistances est la compétence la plus fondamentale du technicien.',
      example:
        'L\'action LVMH a rebondi trois fois sur le support à 680 € entre janvier et mars, avec des volumes croissants. Lors du quatrième test, le support cède avec un volume double de la moyenne. Le niveau de 680 € devient alors une résistance lors du rebond technique suivant.',
      finnSays:
        'Un support, c\'est comme le plancher d\'un ascenseur : il empêche le prix de descendre. Une résistance, c\'est le plafond. Quand le plancher cède, on tombe à l\'étage en dessous, et l\'ancien plancher devient le nouveau plafond !',
    },
  },
  {
    id: 'ta-04',
    title: 'Lignes de tendance et canaux',
    xp: 250,
    duration: '35 min',
    content: {
      introduction:
        'Les lignes de tendance et les canaux permettent de visualiser la direction et la vitesse d\'un mouvement de prix, et d\'identifier les zones d\'achat et de vente optimales.',
      keyPoints: [
        'Tendance haussière : séquence de creux et sommets ascendants',
        'Tendance baissière : séquence de creux et sommets descendants',
        'Règle des deux points minimum pour tracer une ligne de tendance',
        'Canaux parallèles : ligne de tendance + ligne de canal',
        'Cassure de tendance : signal de changement de direction',
      ],
      explanation:
        'Une tendance haussière se définit par une succession de plus hauts et de plus bas croissants. La ligne de tendance haussière se trace en reliant les creux successifs : elle joue le rôle de support dynamique. Le canal haussier ajoute une parallèle passant par les sommets, créant une zone d\'oscillation. En tendance haussière, on achète sur la ligne de support du canal et on prend des profits près de la ligne de résistance. La cassure de la ligne de tendance avec volume signale un retournement potentiel. La pente de la tendance indique sa force : une pente trop forte (> 45°) est insoutenable, une pente douce est plus durable.',
      example:
        'Le cours de TotalEnergies évolue dans un canal haussier entre 50 € et 65 €. Chaque retour sur la borne basse du canal (support dynamique) est une opportunité d\'achat. La cassure sous 50 € avec volume invaliderait le canal et signalerait un retournement baissier.',
      finnSays:
        'La tendance, c\'est comme un escalator : en hausse, tu montes les marches (creux et sommets ascendants). En baisse, tu descends. Le secret ? Ne pas prendre l\'escalator dans le mauvais sens !',
    },
  },

  // ── Unité 2 : Figures chartistes ────────────
  {
    id: 'ta-05',
    title: 'Figures de retournement',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Les figures de retournement signalent un changement de la tendance dominante. Leur identification permet d\'anticiper les points d\'inflexion majeurs du marché.',
      keyPoints: [
        'Tête-épaules (Head & Shoulders) : la figure reine du retournement',
        'Double sommet (M) et double creux (W)',
        'Triple sommet et triple creux',
        'Ligne de cou (neckline) et objectif de prix',
        'Volume : clé de confirmation des figures de retournement',
      ],
      explanation:
        'Le tête-épaules est composé de trois sommets : l\'épaule gauche, la tête (le plus haut) et l\'épaule droite (plus basse que la tête). La ligne de cou relie les creux entre les sommets. La cassure de la ligne de cou avec volume confirme le retournement. L\'objectif de baisse est la hauteur de la tête projetée vers le bas depuis la ligne de cou. Le double sommet (M) se forme quand le prix échoue deux fois à franchir un même niveau de résistance : il signale l\'épuisement des acheteurs. Le double creux (W) est le miroir inverse. Le volume joue un rôle crucial : il doit diminuer pendant la formation et augmenter lors de la cassure.',
      formula: 'Objectif tête-épaules = Neckline − (Sommet de la tête − Neckline)',
      example:
        'Un tête-épaules se forme sur Kering : épaule gauche à 620 €, tête à 680 €, épaule droite à 610 €. La ligne de cou passe à 560 €. Objectif : 560 − (680 − 560) = 440 €. La cassure sous 560 € avec un volume 3x supérieur à la moyenne confirme la figure.',
      finnSays:
        'Le tête-épaules, c\'est le portrait-robot d\'un retournement : une dernière tentative de hausse (la tête) suivie d\'un échec (l\'épaule droite plus basse). Quand la ligne de cou cède, le tableau bascule !',
    },
  },
  {
    id: 'ta-06',
    title: 'Figures de continuation',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les figures de continuation indiquent une pause dans la tendance existante avant sa reprise. Elles offrent des points d\'entrée pour rejoindre un mouvement en cours.',
      keyPoints: [
        'Drapeaux (flags) et fanions (pennants) : pauses dans une tendance forte',
        'Triangles : ascendant, descendant, symétrique',
        'Rectangles et consolidations horizontales',
        'Biseaux (wedges) : hausse et baisse',
        'Durée et volume comme critères de validation',
      ],
      explanation:
        'Les drapeaux se forment après un mouvement vertical puissant (le mât) : le prix consolide brièvement dans un petit canal incliné contre la tendance. Le breakout dans le sens de la tendance initiale projette un objectif égal à la hauteur du mât. Les triangles ascendants (résistance horizontale + support ascendant) sont typiquement haussiers. Les triangles descendants sont typiquement baissiers. Les triangles symétriques (compression) peuvent casser dans les deux sens, mais le sens de la tendance préexistante est favorisé. Le volume diminue pendant la formation du triangle et explose lors du breakout, confirmant la direction.',
      example:
        'Après une hausse de 40 € à 60 € (+50 %), le cours d\'Air Liquide forme un drapeau (consolidation entre 57 € et 60 € pendant 2 semaines). Le breakout au-dessus de 60 € donne un objectif de 60 + 20 = 80 € (hauteur du mât projetée).',
      finnSays:
        'Les figures de continuation, c\'est la pause café de la tendance : le marché reprend son souffle avant de repartir dans la même direction. Le drapeau après une hausse forte, c\'est comme l\'artiste qui recule pour mieux admirer son oeuvre avant de continuer !',
    },
  },
  {
    id: 'ta-07',
    title: 'Chandeliers japonais avancés',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Les configurations de chandeliers japonais offrent des signaux de retournement ou de continuation sur 1 à 3 bougies. Maîtriser ces patterns est essentiel pour le trading à court terme.',
      keyPoints: [
        'Doji : indécision (ouverture = clôture)',
        'Marteau (hammer) et pendu (hanging man) : retournement potentiel',
        'Englobante haussière et baissière (engulfing patterns)',
        'Étoile du matin et étoile du soir : retournements sur 3 bougies',
        'Trois soldats blancs et trois corbeaux noirs',
      ],
      explanation:
        'Le doji (corps quasi inexistant) signale une indécision entre acheteurs et vendeurs. En sommet de tendance, il annonce un essoufflement. Le marteau (petit corps en haut, longue mèche basse) en bas de tendance montre que les vendeurs ont été repoussés : signal haussier. L\'englobante haussière (bullish engulfing) est une petite bougie rouge suivie d\'une grande bougie verte qui englobe entièrement la précédente : les acheteurs reprennent le contrôle. L\'étoile du matin est un pattern sur 3 bougies : grande rouge, petit corps (gap down), grande verte qui remonte au-delà du milieu de la première. C\'est un signal de retournement haussier puissant. La fiabilité de ces patterns augmente avec le volume et le contexte (proximité d\'un support/résistance).',
      example:
        'Sur le graphique daily de Société Générale, une étoile du matin se forme sur le support à 22 € : grande bougie rouge à −3 %, petit doji le lendemain avec gap baissier, puis grande bougie verte à +4 % avec volume double. Signal d\'achat fort.',
      finnSays:
        'Les chandeliers japonais, c\'est de la calligraphie financière : chaque bougie raconte une bataille entre acheteurs et vendeurs. Un marteau en bas de tendance ? Les acheteurs ont frappé fort ! Une étoile du soir ? Les vendeurs prennent le relais sous les étoiles !',
    },
  },
  {
    id: 'ta-08',
    title: 'Analyse des volumes',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le volume est la dimension souvent négligée mais essentielle de l\'analyse technique. Il mesure la conviction derrière un mouvement de prix et valide ou invalide les signaux graphiques.',
      keyPoints: [
        'Volume confirme la tendance : hausse + volume croissant = sain',
        'Divergence prix/volume : signal d\'alerte',
        'On-Balance Volume (OBV) : volume cumulé directionnel',
        'Volume Profile : répartition du volume par niveau de prix',
        'Climax de volume : excès signalant un retournement',
      ],
      explanation:
        'Le principe fondamental est que le volume doit confirmer le prix. Dans une tendance haussière, les jours de hausse doivent afficher un volume supérieur aux jours de baisse. Si le prix monte mais le volume diminue, la tendance s\'essouffle : c\'est une divergence baissière. L\'OBV (On-Balance Volume) de Granville cumule le volume positivement les jours de hausse et négativement les jours de baisse, créant un indicateur avancé. Le Volume Profile montre la distribution du volume par niveau de prix : les zones de fort volume (High Volume Nodes) agissent comme des aimants pour le prix. Un climax de volume (volume exceptionnel après un mouvement prolongé) signale souvent l\'épuisement et un retournement imminent.',
      formula: 'OBV = OBV(t-1) + Volume × signe(Close − Close(t-1))',
      finnSays:
        'Le volume, c\'est l\'applaudimètre du marché : si le prix monte sous les applaudissements (fort volume), c\'est du solide. Si le prix monte dans le silence, méfiance ! Un artiste sait reconnaître quand le public est vraiment conquis.',
    },
  },

  // ── Unité 3 : Indicateurs techniques ────────
  {
    id: 'ta-09',
    title: 'Moyennes mobiles',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Les moyennes mobiles lissent les fluctuations de prix pour révéler la tendance sous-jacente. Elles sont les indicateurs les plus utilisés en analyse technique.',
      keyPoints: [
        'Moyenne mobile simple (SMA) vs exponentielle (EMA)',
        'Périodes courantes : 20, 50, 100, 200 jours',
        'Golden cross (50 croise 200 à la hausse) et death cross (inverse)',
        'Utilisation comme support/résistance dynamique',
        'Ruban de moyennes mobiles et tendance multi-timeframe',
      ],
      explanation:
        'La SMA (Simple Moving Average) calcule la moyenne arithmétique des N derniers cours de clôture. La SMA 200 jours est le standard pour identifier la tendance de long terme : au-dessus, tendance haussière ; en dessous, tendance baissière. L\'EMA (Exponential Moving Average) accorde plus de poids aux données récentes et réagit plus rapidement aux changements. Le Golden Cross (croisement haussier de la SMA 50 au-dessus de la SMA 200) est un signal d\'achat historiquement fiable, tandis que le Death Cross signale un retournement baissier. Les moyennes mobiles servent aussi de supports/résistances dynamiques : en tendance haussière, les pullbacks vers la SMA 50 sont souvent des points d\'entrée.',
      formula: 'SMA(N) = (P₁ + P₂ + ... + Pₙ) / N\nEMA(N) = Pₜ × k + EMA(t-1) × (1−k), k = 2/(N+1)',
      example:
        'En mars 2023, le S&P 500 réalise un Golden Cross (SMA 50 croise la SMA 200 à la hausse). Historiquement, le S&P 500 gagne en moyenne 10 % dans les 12 mois suivant un Golden Cross.',
      finnSays:
        'Les moyennes mobiles, c\'est le fil d\'Ariane de la tendance : elles filtrent le bruit quotidien pour te montrer la direction de fond. La SMA 200, c\'est la ligne de partage des eaux : au-dessus, on est en territoire haussier !',
    },
  },
  {
    id: 'ta-10',
    title: 'RSI (Relative Strength Index)',
    xp: 250,
    duration: '35 min',
    content: {
      introduction:
        'Le RSI de Wilder mesure la vitesse et l\'ampleur des mouvements de prix pour identifier les conditions de surachat et de survente.',
      keyPoints: [
        'Calcul : RSI = 100 − 100 / (1 + RS), RS = moyenne hausse / moyenne baisse',
        'Zones : > 70 surachat, < 30 survente',
        'Divergences RSI/prix : signaux de retournement puissants',
        'Failure swings : signaux encore plus fiables',
        'Adaptation des seuils selon la tendance (80/40 en haussier, 60/20 en baissier)',
      ],
      explanation:
        'Le RSI oscille entre 0 et 100. La période standard est de 14 jours. Quand le RSI dépasse 70, le titre est suracheté : une correction est probable (mais pas certaine en tendance forte). Sous 30, il est survendu : un rebond est envisageable. Les divergences sont les signaux les plus puissants : si le prix fait un nouveau plus haut mais le RSI fait un plus haut inférieur (divergence baissière), la dynamique s\'essouffle. Le failure swing est un pattern dans le RSI lui-même : un creux sous 30, un rebond, un second creux plus haut que le premier (sans revenir sous 30), puis un dépassement du sommet intermédiaire. En tendance haussière forte, le RSI oscille souvent entre 40 et 80 ; en tendance baissière, entre 20 et 60.',
      formula: 'RS = EMA(gains, 14) / EMA(pertes, 14)\nRSI = 100 − 100 / (1 + RS)',
      example:
        'Le RSI de Hermès atteint 82 après une hausse de 20 % en 2 mois. Le cours fait un nouveau plus haut mais le RSI ne confirme pas (divergence baissière). Dans les 3 semaines suivantes, le titre corrige de 8 %.',
      finnSays:
        'Le RSI, c\'est le thermomètre du marché : au-dessus de 70, le patient a de la fièvre (surachat). En dessous de 30, il est en hypothermie (survente). Mais attention, une divergence RSI, c\'est le vrai signal d\'alerte !',
    },
  },
  {
    id: 'ta-11',
    title: 'MACD (Moving Average Convergence Divergence)',
    xp: 250,
    duration: '35 min',
    content: {
      introduction:
        'Le MACD, créé par Gerald Appel, est un indicateur de suivi de tendance qui mesure la convergence et la divergence entre deux moyennes mobiles exponentielles.',
      keyPoints: [
        'Ligne MACD = EMA(12) − EMA(26)',
        'Ligne de signal = EMA(9) du MACD',
        'Histogramme = MACD − Signal (momentum)',
        'Croisements de la ligne zéro et de la ligne de signal',
        'Divergences MACD/prix : signaux de retournement',
      ],
      explanation:
        'Le MACD mesure la distance entre l\'EMA rapide (12 périodes) et l\'EMA lente (26 périodes). Quand la ligne MACD croise la ligne de signal à la hausse, c\'est un signal d\'achat ; à la baisse, un signal de vente. Le croisement de la ligne zéro est un signal plus fort : le MACD au-dessus de zéro signifie que l\'EMA rapide est au-dessus de l\'EMA lente (tendance haussière). L\'histogramme (différence MACD − Signal) mesure le momentum : sa diminution avant un croisement est un signal précoce. Les divergences entre le MACD et le prix sont des indicateurs avancés de retournement, particulièrement fiables sur les timeframes hebdomadaires.',
      formula: 'MACD = EMA(12) − EMA(26)\nSignal = EMA(9, MACD)\nHistogramme = MACD − Signal',
      example:
        'Sur le graphique hebdomadaire du CAC 40, le MACD croise la ligne de signal à la hausse tout en passant au-dessus de zéro : double signal haussier. Ce type de configuration a précédé des rallyes de 10-15 % dans le passé.',
      finnSays:
        'Le MACD, c\'est deux musiciens qui jouent ensemble : quand ils s\'accordent (convergence), la tendance est forte. Quand ils se désaccordent (divergence), un changement de rythme se prépare. L\'histogramme, c\'est l\'applaudimètre !',
    },
  },
  {
    id: 'ta-12',
    title: 'Bandes de Bollinger',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les bandes de Bollinger, créées par John Bollinger, encadrent le prix avec un canal adaptatif basé sur la volatilité. Elles permettent d\'identifier les excès et les compressions de volatilité.',
      keyPoints: [
        'Bande supérieure = SMA(20) + 2σ, bande inférieure = SMA(20) − 2σ',
        'Squeeze (compression) : faible volatilité précède un mouvement fort',
        'Walking the bands : tendance forte en contact avec une bande',
        'Bollinger %B et Bandwidth : indicateurs dérivés',
        'Combinaison avec le RSI pour filtrer les signaux',
      ],
      explanation:
        'Les bandes de Bollinger utilisent l\'écart-type des prix pour créer un canal adaptatif : quand la volatilité augmente, les bandes s\'écartent ; quand elle diminue, elles se resserrent. Statistiquement, 95 % des prix restent à l\'intérieur des bandes (à 2σ). Le squeeze (rétrécissement maximal des bandes) signale une compression de volatilité : un breakout violent est imminent, mais la direction reste incertaine. Le walking the bands décrit une tendance forte où le prix longe la bande supérieure (hausse) ou inférieure (baisse) : toucher la bande n\'est PAS un signal de vente en soi. Le %B = (Prix − Bande inf) / (Bande sup − Bande inf) normalise la position du prix dans les bandes.',
      formula: 'Bande sup = SMA(20) + 2 × σ(20)\nBande inf = SMA(20) − 2 × σ(20)\nBandwidth = (Bande sup − Bande inf) / SMA(20)',
      example:
        'Les bandes de Bollinger sur Capgemini se resserrent à leur niveau le plus étroit en 6 mois (Bandwidth historiquement bas). Le breakout haussier au-dessus de la bande supérieure avec volume déclenche un rallye de 12 % en 3 semaines.',
      finnSays:
        'Les bandes de Bollinger, c\'est comme un élastique autour du prix : plus il se comprime (squeeze), plus l\'explosion sera forte. Mais attention, un prix qui touche la bande n\'est pas forcément un signal de vente !',
    },
  },
  {
    id: 'ta-13',
    title: 'Retracements de Fibonacci',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Les niveaux de Fibonacci sont des outils de projection basés sur la suite mathématique de Fibonacci. Ils identifient les zones de correction probables dans une tendance.',
      keyPoints: [
        'Ratios clés : 23,6 %, 38,2 %, 50 %, 61,8 %, 78,6 %',
        'Le ratio d\'or : 61,8 % (nombre d\'or inversé)',
        'Extensions de Fibonacci : 127,2 %, 161,8 %, 261,8 %',
        'Application : du plus bas au plus haut du mouvement (ou inverse)',
        'Confluence avec supports/résistances et moyennes mobiles',
      ],
      explanation:
        'La suite de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21...) génère des ratios qui apparaissent fréquemment dans les marchés financiers. Le ratio d\'or 61,8 % (chaque nombre divisé par le suivant) est le niveau de retracement le plus surveillé. Un retracement de 38,2 % indique une correction légère dans une tendance forte. Un retracement de 61,8 % est une correction profonde qui teste la conviction des acheteurs. Les extensions de Fibonacci projettent les objectifs de prix au-delà du mouvement initial. La confluence (un niveau de Fibonacci qui coïncide avec un support, une moyenne mobile ou un autre indicateur) renforce considérablement la fiabilité du signal.',
      example:
        'Le CAC 40 monte de 6 800 à 7 600 points (+800 pts). Le retracement de 38,2 % se situe à 7 600 − 0,382 × 800 = 7 294 points. Le retracement de 61,8 % à 7 106 points. Si ce dernier coïncide avec la SMA 200, c\'est une zone de support majeure.',
      finnSays:
        'Fibonacci dans les marchés, c\'est mystérieux et fascinant : la nature et les marchés partagent les mêmes proportions. Le 61,8 %, c\'est le niveau où les acheteurs courageux se positionnent. C\'est l\'harmonie mathématique de l\'art du trading !',
    },
  },
  {
    id: 'ta-14',
    title: 'Ichimoku Kinko Hyo',
    xp: 300,
    duration: '45 min',
    content: {
      introduction:
        'L\'Ichimoku Kinko Hyo ("tableau d\'équilibre en un coup d\'oeil") est un système complet d\'analyse technique japonais qui identifie en une seule vue la tendance, les supports/résistances et les signaux de trading.',
      keyPoints: [
        'Tenkan-sen (conversion, 9 périodes) et Kijun-sen (base, 26 périodes)',
        'Senkou Span A et B : le nuage (Kumo) projeté 26 périodes en avant',
        'Chikou Span : le cours projeté 26 périodes en arrière',
        'Trading dans le nuage vs au-dessus/en dessous',
        'Signaux : croisement Tenkan/Kijun, cassure du nuage, twist du nuage',
      ],
      explanation:
        'L\'Ichimoku combine cinq lignes qui fournissent une lecture instantanée du marché. Le nuage (Kumo), formé par les Senkou Span A et B, est la zone d\'équilibre : au-dessus du nuage, la tendance est haussière ; en dessous, baissière ; à l\'intérieur, neutre. L\'épaisseur du nuage représente la force du support/résistance. Le croisement Tenkan/Kijun au-dessus du nuage est un signal d\'achat fort. Le twist du nuage (Senkou A croise Senkou B) signale un changement de tendance imminent. Le Chikou Span (cours actuel décalé de 26 périodes en arrière) confirme le signal s\'il est au-dessus du prix de cette époque. L\'Ichimoku est particulièrement apprécié sur les marchés de devises et les indices.',
      example:
        'Sur le graphique daily de l\'EUR/USD, le prix casse au-dessus du nuage, le Tenkan croise le Kijun à la hausse, et le Chikou Span est au-dessus du prix d\'il y a 26 jours. Triple confirmation haussière : signal d\'achat fort.',
      finnSays:
        'L\'Ichimoku, c\'est le chef-d\'oeuvre de l\'analyse technique : en un seul coup d\'oeil, tu vois la tendance, les supports, les résistances et les signaux. C\'est comme un tableau de maître qui raconte toute l\'histoire du marché !',
    },
  },

  // ── Unité 4 : Mise en pratique ──────────────
  {
    id: 'ta-15',
    title: 'Backtesting et gestion du risque',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Le backtesting consiste à tester une stratégie technique sur des données historiques pour évaluer sa performance avant de risquer du capital réel. C\'est l\'étape indispensable de validation.',
      keyPoints: [
        'Méthodologie de backtesting : données, règles, exécution, analyse',
        'Biais de survie, look-ahead bias et overfitting',
        'Métriques clés : ratio de Sharpe, drawdown maximum, win rate',
        'Gestion de la taille de position : Kelly criterion, fixed fractional',
        'Stop-loss, take-profit et risk/reward ratio',
      ],
      explanation:
        'Un backtest rigoureux applique des règles de trading mécaniques (entrée, sortie, taille de position) à des données historiques pour mesurer la performance passée. Les pièges sont nombreux : le biais de survie (ne tester que sur des actions qui existent encore), le look-ahead bias (utiliser une information qui n\'était pas encore disponible), et surtout l\'overfitting (optimiser les paramètres pour coller parfaitement à l\'historique mais perdre en performance future). Le drawdown maximum mesure la perte maximale depuis un pic : c\'est la métrique de risque la plus pertinente pour un trader. Le ratio risk/reward minimal recommandé est de 1:2 : pour chaque euro risqué, l\'objectif de gain est de 2 euros. Le critère de Kelly détermine la taille optimale de position en fonction du win rate et du ratio gain/perte.',
      formula: 'Kelly % = W − (1−W) / R\noù W = win rate, R = ratio gain moyen / perte moyenne',
      example:
        'Un backtest sur 10 ans d\'une stratégie de croisement SMA 50/200 sur le CAC 40 donne : 65 % de trades gagnants, ratio gain/perte de 2,3, Sharpe de 0,8, drawdown max de 18 %. Le Kelly suggère de risquer 37 % du capital par trade, mais en pratique on utilise un demi-Kelly (18 %) pour limiter la volatilité.',
      finnSays:
        'Le backtesting, c\'est comme la répétition générale avant le spectacle : tu testes ton numéro sur les données du passé. Mais attention à l\'overfitting : si ta stratégie est trop parfaite sur le passé, elle sera médiocre dans le futur. L\'art, c\'est la simplicité !',
    },
  },
  {
    id: 'ta-16',
    title: 'Cas pratique : analyse graphique complète',
    xp: 300,
    duration: '50 min',
    content: {
      introduction:
        'Mets en pratique l\'ensemble des outils de l\'analyse technique en réalisant une étude graphique complète d\'un titre, de l\'identification de la tendance à la formulation d\'un plan de trading.',
      keyPoints: [
        'Analyse multi-timeframe : mensuel → hebdomadaire → daily',
        'Identification de la tendance avec moyennes mobiles et Ichimoku',
        'Repérage des niveaux clés : supports, résistances, Fibonacci',
        'Signaux d\'entrée : figures, chandeliers, indicateurs (RSI, MACD)',
        'Plan de trading complet : entrée, stop-loss, objectifs, taille de position',
      ],
      explanation:
        'L\'analyse graphique complète commence par l\'identification de la tendance de fond sur le graphique mensuel et hebdomadaire (moyennes mobiles, Ichimoku). On repère ensuite les niveaux de support et résistance majeurs, enrichis par les retracements de Fibonacci. Le passage au graphique daily affine le timing d\'entrée : on cherche une configuration de chandeliers (marteau, englobante) sur un niveau clé, confirmée par les indicateurs (RSI en survente, divergence MACD). Le plan de trading précise l\'entrée, le stop-loss (sous le dernier creux ou support), les objectifs (prochaine résistance, extension Fibonacci) et la taille de position (% du capital risqué). Le ratio risk/reward doit être au minimum de 1:2 pour que le trade soit valide.',
      example:
        'Analyse de Schneider Electric : tendance haussière sur le mensuel (au-dessus du nuage Ichimoku), pullback vers la SMA 50 sur le weekly. Sur le daily, marteau sur le retracement 38,2 % de Fibonacci avec RSI à 35. Entrée à 170 €, stop à 163 €, objectif 1 à 185 €, objectif 2 à 195 €. Risk/reward : 1:2,1 et 1:3,6.',
      finnSays:
        'C\'est le moment de créer ton chef-d\'oeuvre ! Prends tous tes outils (tendances, supports, indicateurs, chandeliers) et compose une analyse digne d\'un artiste. Le plan de trading, c\'est ta signature : précis, mesuré et beau !',
    },
  },
];
