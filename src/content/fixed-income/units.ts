// ──────────────────────────────────────────────
//  FINA - Fixed Income : Lessons (24)
// ──────────────────────────────────────────────

import type { Lesson } from '../types';

export const fixedIncomeLessons: Lesson[] = [
  // ── 1. Principes obligations ──────────────────
  {
    id: 'fi-01',
    title: 'Principes des obligations',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Une obligation est un titre de créance par lequel l\'émetteur s\'engage à verser des flux d\'intérêts (coupons) et à rembourser le principal à l\'échéance. Comprendre ce mécanisme est la première étape pour maîtriser les marchés de taux.',
      keyPoints: [
        'Une obligation représente un prêt de l\'investisseur à l\'émetteur',
        'Le coupon est le taux d\'intérêt annuel versé sur la valeur nominale',
        'Le principal (ou nominal) est remboursé à maturité',
        'Le prix d\'une obligation est coté en pourcentage du nominal',
        'Le marché obligataire est le plus grand marché financier mondial (> 130 000 Mds $)',
      ],
      explanation:
        'Lorsqu\'un État ou une entreprise a besoin de financement, il peut émettre des obligations sur le marché primaire. Les investisseurs achètent ces titres et reçoivent en échange des coupons périodiques (généralement semestriels ou annuels). À la date de maturité, l\'émetteur rembourse le nominal. Le risque principal est le risque de défaut : l\'émetteur ne pouvant plus honorer ses paiements. Le prix d\'une obligation varie en fonction inverse des taux d\'intérêt du marché : quand les taux montent, le prix baisse, et inversement. On distingue les obligations à taux fixe, à taux variable, et les zéro-coupon (sans coupons intermédiaires, émises avec une décote).',
      formula: 'Prix = C/(1+r) + C/(1+r)² + ... + (C+N)/(1+r)^n\noù C = coupon, N = nominal, r = taux de rendement, n = nombre de périodes',
      example:
        'Une obligation d\'État français (OAT) de nominal 1 000 EUR, coupon 2 %, maturité 10 ans : l\'investisseur reçoit 20 EUR par an pendant 10 ans, puis 1 000 EUR au terme. Si les taux montent à 3 %, le prix de l\'obligation baisse sous le pair (en dessous de 1 000 EUR) pour compenser le coupon devenu moins attractif.',
      finnSays:
        'Retiens cette règle d\'or : prix et taux évoluent en sens inverse. C\'est la base de tout en fixed income !',
    },
  },

  // ── 2. Pricing ──────────────────────────────
  {
    id: 'fi-02',
    title: 'Pricing obligataire',
    xp: 200,
    duration: '45 min',
    content: {
      introduction:
        'Le prix d\'une obligation est la valeur actualisée de l\'ensemble de ses flux futurs. Ce principe fondamental, appelé Discounted Cash Flow (DCF), permet de déterminer la valeur théorique de tout instrument de dette.',
      keyPoints: [
        'Le prix est la somme des flux actualisés (coupons + remboursement)',
        'Le taux d\'actualisation reflète le rendement exigé par le marché',
        'Une obligation au pair cote 100 % : son coupon égale le taux du marché',
        'Le prix pied de coupon exclut le coupon couru',
        'Le prix plein coupon (dirty price) inclut le coupon couru',
      ],
      explanation:
        'Le pricing repose sur l\'actualisation des flux. Le dirty price est le prix réellement payé, il inclut le coupon couru (la fraction du coupon accumulée depuis le dernier détachement). Le clean price est le dirty price moins le coupon couru : c\'est le prix affiché sur les écrans Bloomberg. La convention de calcul du coupon couru dépend de la base de jours (ACT/ACT, ACT/360, 30/360). Pour les obligations à taux fixe, le prix est une fonction décroissante convexe du taux de rendement. Le pull-to-par désigne la convergence du prix vers le nominal à l\'approche de la maturité.',
      formula: 'Dirty Price = Clean Price + Coupon Couru\nCoupon Couru = Coupon annuel x (Jours depuis dernier coupon / Jours dans la période)',
      example:
        'Obligation corporate 5 ans, coupon 3 %, nominal 1 000 EUR. Si le taux de marché est 4 %, le clean price vaut environ 955,48 EUR. Si 90 jours se sont écoulés depuis le dernier coupon (sur une période de 365 jours), le coupon couru est 30 x 90/365 = 7,40 EUR. Le dirty price est donc 962,88 EUR.',
      finnSays:
        'Clean price vs dirty price : ne te trompe jamais ! Le clean, c\'est ce que tu vois. Le dirty, c\'est ce que tu paies.',
    },
  },

  // ── 3. YTM ─────────────────────────────────
  {
    id: 'fi-03',
    title: 'Yield to Maturity (YTM)',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le Yield to Maturity (YTM), ou taux de rendement actuariel, est le taux unique qui égalise le prix de marché d\'une obligation avec la valeur actualisée de ses flux futurs. C\'est la mesure de rendement la plus utilisée en fixed income.',
      keyPoints: [
        'Le YTM est le TRI (taux de rendement interne) d\'une obligation',
        'Il suppose le réinvestissement des coupons au même taux',
        'YTM > coupon : obligation sous le pair (décote)',
        'YTM < coupon : obligation au-dessus du pair (prime)',
        'Le YTM est comparable entre obligations de même maturité et même risque',
      ],
      explanation:
        'Le YTM se calcule par itération : on cherche le taux r tel que P = somme des flux actualisés à r. C\'est un rendement « promis » car il suppose que l\'émetteur ne fait pas défaut et que les coupons sont réinvestis au taux YTM (hypothèse souvent irréaliste). Pour une obligation zéro-coupon, le YTM est simplement le taux d\'actualisation du flux unique. Le current yield (coupon / prix) est une approximation grossière qui ignore les gains/pertes en capital. Le YTM intègre à la fois le revenu coupon, le gain ou la perte en capital, et l\'effet de réinvestissement.',
      formula: 'P = Σ [C / (1 + YTM)^t] + N / (1 + YTM)^n\nRésoudre pour YTM (par itération ou Newton-Raphson)',
      example:
        'Obligation 3 ans, coupon 5 %, nominal 100, cotant 97. On cherche le YTM tel que : 97 = 5/(1+y) + 5/(1+y)² + 105/(1+y)³. Par itération, on trouve y ≈ 6,08 %. Le YTM est supérieur au coupon car l\'obligation cote sous le pair : l\'investisseur réalise un gain en capital à maturité.',
      finnSays:
        'Le YTM, c\'est comme un GPS : il te donne la destination prévue, mais le trajet réel peut varier si les taux changent en route !',
    },
  },

  // ── 4. Duration & Convexité ────────────────
  {
    id: 'fi-04',
    title: 'Duration et Convexité',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'La duration mesure la sensibilité du prix d\'une obligation aux variations de taux d\'intérêt. La convexité est le terme de second ordre qui corrige l\'approximation linéaire de la duration pour les grands mouvements de taux.',
      keyPoints: [
        'La duration est exprimée en années : c\'est la maturité moyenne pondérée des flux',
        'Plus la duration est élevée, plus le prix est sensible aux taux',
        'La convexité est toujours positive pour une obligation classique (vanilla)',
        'ΔP/P ≈ -D* × Δy + ½ × Convexité × (Δy)²',
        'Un portefeuille à forte convexité surperforme dans un environnement volatil',
      ],
      explanation:
        'La duration de Macaulay est la moyenne pondérée des échéances, chaque flux étant pondéré par sa valeur actualisée relative. La duration modifiée (D*) divise la duration de Macaulay par (1 + y) et donne directement la variation relative du prix pour un petit mouvement de taux. Pour des mouvements plus larges (> 50 bps), l\'approximation linéaire est insuffisante : la convexité capture la courbure de la relation prix-taux. Une obligation zéro-coupon a une duration égale à sa maturité. L\'ajout de coupons réduit la duration. La duration d\'un portefeuille est la moyenne pondérée des durations individuelles.',
      formula: 'Duration Macaulay = Σ [t × PV(CFt)] / P\nDuration Modifiée D* = Duration Macaulay / (1 + y)\nΔP/P ≈ -D* × Δy + ½ × C × (Δy)²',
      example:
        'Obligation 5 ans, coupon 4 %, YTM 5 %. Duration Macaulay ≈ 4,55 ans, D* ≈ 4,33. Si les taux montent de 100 bps (+1 %) : ΔP/P ≈ -4,33 % (par la duration seule). Avec la convexité (≈ 22), la correction est +½ × 22 × 0,01² = +0,11 %, soit une baisse totale d\'environ -4,22 %.',
      finnSays:
        'La duration, c\'est ton bouclier en fixed income. Plus elle est courte, moins tu es exposé aux surprises de taux !',
    },
  },

  // ── 5. Macaulay vs Modifiée ────────────────
  {
    id: 'fi-05',
    title: 'Macaulay vs Modifiée',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La duration de Macaulay et la duration modifiée sont deux concepts liés mais distincts. Macaulay est une mesure temporelle (en années), tandis que la modifiée est une mesure de sensibilité (en % par point de taux).',
      keyPoints: [
        'Macaulay : durée de vie moyenne pondérée des flux (en années)',
        'Modifiée : sensibilité du prix aux variations de taux (sans unité)',
        'D* = D_Mac / (1 + y/k), où k = fréquence des coupons',
        'Pour un zéro-coupon : Macaulay = maturité',
        'Dollar duration (DV01) = D* × P × 0,0001',
      ],
      explanation:
        'Frederick Macaulay a introduit sa mesure en 1938 comme le « centre de gravité » des flux d\'une obligation. La duration modifiée a été développée ensuite pour donner une utilité pratique : estimer la variation de prix. Le DV01 (Dollar Value of a Basis Point) traduit la duration modifiée en variation de prix absolue pour un mouvement de 1 bp. Pour un portefeuille de 10 M EUR avec une D* de 5, le DV01 est 5 000 EUR : chaque bp de hausse des taux coûte 5 000 EUR. En gestion de portefeuille, on utilise le DV01 pour calibrer les couvertures et mesurer le risque de taux.',
      formula: 'D_Macaulay = Σ [t × CFt / (1+y)^t] / P\nD_Modifiée = D_Macaulay / (1 + y/k)\nDV01 = D* × P × 0,0001',
      example:
        'OAT 10 ans coupon 1,5 %, YTM 2 %. Duration Macaulay ≈ 9,35 ans. D* = 9,35 / 1,02 ≈ 9,17. Pour un portefeuille de 50 M EUR, DV01 = 9,17 × 50 000 000 × 0,0001 = 45 850 EUR par bp.',
      finnSays:
        'Macaulay te dit QUAND tu récupères ton argent. La modifiée te dit COMBIEN tu perds si les taux bougent. Les deux sont indispensables !',
    },
  },

  // ── 6. Immunisation ────────────────────────
  {
    id: 'fi-06',
    title: 'Immunisation',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'L\'immunisation est une stratégie qui protège un portefeuille obligataire contre les variations de taux d\'intérêt en alignant la duration du portefeuille sur l\'horizon d\'investissement.',
      keyPoints: [
        'Immuniser = faire correspondre duration du portefeuille et horizon cible',
        'Protège contre les déplacements parallèles de la courbe des taux',
        'Le portefeuille doit être rééquilibré régulièrement (rebalancing)',
        'L\'immunisation multi-passif utilise le cash flow matching',
        'La convexité ajoute un coussin de protection supplémentaire',
      ],
      explanation:
        'Un fonds de pension qui doit verser 100 M EUR dans 7 ans peut immuniser en construisant un portefeuille dont la duration est exactement 7 ans et la valeur actualisée est 100 M EUR. Si les taux montent, le prix des obligations baisse, mais les coupons sont réinvestis à un taux plus élevé : les deux effets se compensent. L\'immunisation classique ne protège que contre les shifts parallèles. Pour des mouvements non parallèles (twist, butterfly), on utilise la key rate duration ou le cash flow matching. L\'immunisation contingente combine gestion active et immunisation : le gérant gère activement tant que le surplus le permet, puis immunise si la valeur descend au seuil critique.',
      example:
        'Un assureur doit payer 200 M EUR dans 8 ans. Il construit un portefeuille barbell : 40 % en obligations 3 ans (D = 2,8) et 60 % en obligations 12 ans (D = 10,3). Duration du portefeuille = 0,4 × 2,8 + 0,6 × 10,3 = 7,3 ans. Il ajuste les poids pour atteindre exactement 8 ans, puis rééquilibre chaque trimestre.',
      finnSays:
        'L\'immunisation, c\'est l\'assurance anti-taux. Les assureurs et les fonds de pension ne peuvent pas s\'en passer !',
    },
  },

  // ── 7. Structure par terme ─────────────────
  {
    id: 'fi-07',
    title: 'Structure par terme des taux',
    xp: 200,
    duration: '45 min',
    content: {
      introduction:
        'La structure par terme, ou courbe des taux, représente la relation entre les taux d\'intérêt et les maturités. Elle est le reflet des anticipations du marché sur l\'évolution future des taux et de l\'économie.',
      keyPoints: [
        'La courbe normale est croissante : les taux longs > taux courts',
        'Une courbe inversée anticipe souvent une récession',
        'La courbe plate signale une incertitude sur la direction des taux',
        'Trois théories : anticipations pures, préférence pour la liquidité, segmentation',
        'La courbe zéro-coupon (spot) est la référence pour le pricing',
      ],
      explanation:
        'La théorie des anticipations pures stipule que les taux longs sont la moyenne géométrique des taux courts futurs anticipés. La théorie de la préférence pour la liquidité ajoute une prime de terme croissante avec la maturité (les investisseurs exigent une compensation pour bloquer leur capital plus longtemps). La théorie de la segmentation suppose que les agents ont des horizons préférés et que l\'offre/demande sur chaque segment détermine les taux. En pratique, la courbe intègre les trois effets. Les banques centrales influencent fortement le court terme (taux directeurs), tandis que le long terme dépend des anticipations d\'inflation et de croissance.',
      formula: '(1 + r_n)^n = (1 + r_1)(1 + f_{1,2})(1 + f_{2,3})...(1 + f_{n-1,n})\noù r_n = taux spot n ans, f = taux forward implicite',
      example:
        'En décembre 2023, la courbe des taux US était inversée : T-bill 3 mois à 5,4 %, 2 ans à 4,4 %, 10 ans à 3,9 %. Cette inversion a historiquement précédé chaque récession américaine depuis 1960 avec un délai moyen de 12 à 18 mois.',
      finnSays:
        'La courbe des taux, c\'est la boule de cristal des marchés. Apprends à la lire et tu auras un avantage considérable !',
    },
  },

  // ── 8. Bootstrapping ──────────────────────
  {
    id: 'fi-08',
    title: 'Bootstrapping',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Le bootstrapping est la technique qui permet d\'extraire les taux zéro-coupon (spot) à partir des prix d\'obligations à coupon. C\'est la méthode fondamentale pour construire la courbe des taux spot.',
      keyPoints: [
        'On extrait les taux spot de proche en proche, de la maturité la plus courte à la plus longue',
        'Le taux 1 an vient directement du prix du T-bill ou de l\'obligation 1 an',
        'Chaque taux spot suivant est déduit en utilisant les taux déjà calculés',
        'La courbe spot est nécessaire pour un pricing sans arbitrage',
        'L\'interpolation (linéaire, cubique, Nelson-Siegel) complète les maturités manquantes',
      ],
      explanation:
        'Le processus démarre avec l\'instrument de maturité la plus courte (typiquement un T-bill ou une obligation zéro-coupon 6 mois/1 an). Le taux spot est directement déduit du prix. Pour l\'obligation 2 ans avec coupon, on actualise le premier coupon au taux spot 1 an déjà connu, puis on résout pour le taux spot 2 ans. On répète le processus pour chaque maturité. Le modèle de Nelson-Siegel paramétrise la courbe avec 4 paramètres (β₀, β₁, β₂, τ) et permet un lissage continu. Le modèle de Svensson ajoute 2 paramètres pour plus de flexibilité.',
      formula: 'Pour une obligation 2 ans, coupon C, prix P :\nP = C / (1 + s₁) + (C + 100) / (1 + s₂)²\nOn connaît s₁, on résout pour s₂',
      example:
        'T-bill 1 an à 96,15 → s₁ = (100/96,15) - 1 = 4,0 %. Obligation 2 ans, coupon 5 %, prix 101,50 : 101,50 = 5/1,04 + 105/(1+s₂)². On résout : s₂ = 4,18 %. Obligation 3 ans, coupon 4,5 %, prix 99,80 : 99,80 = 4,5/1,04 + 4,5/1,0418² + 104,5/(1+s₃)³. On trouve s₃ ≈ 4,28 %.',
      finnSays:
        'Le bootstrapping, c\'est construire la courbe brique par brique. Chaque taux spot repose sur les précédents. Méthodique et puissant !',
    },
  },

  // ── 9. Taux forward ────────────────────────
  {
    id: 'fi-09',
    title: 'Taux forward',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Les taux forward sont les taux d\'intérêt implicites pour des périodes futures, dérivés de la courbe des taux spot. Ils reflètent les anticipations du marché et sont utilisés pour le pricing des dérivés de taux.',
      keyPoints: [
        'Le taux forward f(t₁,t₂) est le taux implicite entre les dates t₁ et t₂',
        'Absence d\'arbitrage : investir n ans = investir 1 an + roll forward',
        'Les taux forward ne sont pas des prévisions fiables des taux futurs',
        'FRA (Forward Rate Agreement) : contrat de gré à gré sur un taux forward',
        'La courbe forward est plus volatile que la courbe spot',
      ],
      explanation:
        'Si le taux spot 1 an est 3 % et le taux spot 2 ans est 3,5 %, le taux forward 1 an dans 1 an (f₁,₂) est tel que (1,03)(1 + f₁,₂) = (1,035)². On trouve f₁,₂ ≈ 4,0 %. Ce taux n\'est pas une prévision : il inclut une prime de terme. Les FRA permettent de fixer un taux futur. Le taux forward instantané f(t) est la limite quand l\'intervalle tend vers zéro et constitue la brique de base des modèles de taux (HJM, LMM). En trading, les swaps de taux sont pricés à partir de la séquence des taux forward.',
      formula: '(1 + s₂)² = (1 + s₁) × (1 + f₁,₂)\nf₁,₂ = (1 + s₂)² / (1 + s₁) - 1\nGénéralisation : f(t₁,t₂) = [(1+s_{t₂})^{t₂} / (1+s_{t₁})^{t₁}]^{1/(t₂-t₁)} - 1',
      example:
        'Taux spot : s₁ = 2,5 %, s₂ = 3,0 %, s₃ = 3,3 %. Forward 1Y1Y : f₁,₂ = (1,03)²/1,025 - 1 = 3,50 %. Forward 1Y2Y : f₂,₃ = (1,033)³/(1,03)² - 1 = 3,90 %. La courbe forward anticipe une hausse des taux courts.',
      finnSays:
        'Les forwards, c\'est le marché qui te dit ce qu\'il anticipe. Mais attention, il se trompe souvent — c\'est pour ça que c\'est intéressant !',
    },
  },

  // ── 10. Obligations d'État ─────────────────
  {
    id: 'fi-10',
    title: 'Obligations d\'État',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Les obligations souveraines sont émises par les États pour financer leur dette publique. Elles constituent le segment le plus liquide et le benchmark de référence pour toute la courbe des taux.',
      keyPoints: [
        'OAT (France), Bund (Allemagne), Treasury (US), Gilt (UK), BTP (Italie)',
        'Considérées comme « sans risque » pour les pays notés AAA/AA',
        'Les adjudications (auctions) fixent les conditions d\'émission',
        'Le spread souverain mesure la prime de risque vs le Bund allemand',
        'Les TIPS/OATi sont indexés sur l\'inflation',
      ],
      explanation:
        'Les Trésors nationaux émettent des obligations par adjudication (enchère). En France, l\'Agence France Trésor (AFT) émet des OAT à 2, 5, 10, 15, 20, 30 et 50 ans. Les Primary Dealers (SVT en France) sont les intermédiaires obligatoires. Le Bund allemand 10 ans est la référence de la zone euro : le spread OAT-Bund reflète le risque crédit de la France par rapport à l\'Allemagne (environ 50-80 bps en 2024). Les T-bonds US 10 ans et 30 ans sont les benchmarks mondiaux. La crise de la dette européenne (2010-2012) a montré que les spreads souverains peuvent exploser : le spread BTP-Bund a dépassé 500 bps.',
      example:
        'Adjudication OAT 10 ans par l\'AFT : montant 8 Mds EUR, coupon 3,0 %, prix moyen pondéré 99,85 (soit un rendement de 3,02 %). Le bid-to-cover ratio est de 2,3x, indiquant une demande solide. Le spread OAT-Bund est de 55 bps.',
      finnSays:
        'Les obligations d\'État, c\'est le socle de tout. Quand le Bund bouge, tout le marché obligataire suit !',
    },
  },

  // ── 11. Obligations corporate ──────────────
  {
    id: 'fi-11',
    title: 'Obligations corporate',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Les obligations d\'entreprise (corporate bonds) permettent aux sociétés de lever des fonds sur le marché de la dette. Elles offrent un rendement supérieur aux obligations souveraines en contrepartie d\'un risque de crédit plus élevé.',
      keyPoints: [
        'Le spread corporate rémunère le risque de crédit, de liquidité et de défaut',
        'Les covenants protègent les créanciers (ratios financiers, restrictions de dividendes)',
        'Les obligations senior ont priorité sur les subordonnées en cas de défaut',
        'Le marché primaire euro corporate IG représente > 500 Mds EUR/an d\'émissions',
        'Les obligations callables donnent le droit à l\'émetteur de rembourser par anticipation',
      ],
      explanation:
        'Les corporates se classent par séniorité : secured (garantie sur des actifs), senior unsecured, subordinated, hybrid. En cas de défaut, le taux de recouvrement (recovery rate) dépend de la séniorité : 40-60 % en moyenne pour les senior unsecured, 20-30 % pour les subordonnées. Les covenants sont des clauses contractuelles : maintenance covenants (ratios à respecter en permanence, typiques du crédit bancaire) vs incurrence covenants (déclenchés par une action, typiques des obligations HY). Le prospectus d\'émission détaille les termes, les covenants, et les clauses de remboursement anticipé (call provision).',
      formula: 'Spread = Rendement corporate - Rendement souverain de même maturité\nSpread = Prime de défaut + Prime de liquidité + Prime de risque systémique',
      example:
        'TotalEnergies émet une obligation senior unsecured 7 ans, coupon 3,5 %, notée A+. Le Bund 7 ans est à 2,6 %, donc le spread est de 90 bps. Ce spread rémunère le risque de crédit (~50 bps), la liquidité (~25 bps) et une prime de risque résiduelle (~15 bps).',
      finnSays:
        'Les corporates, c\'est là que ça devient intéressant. Plus de rendement, mais il faut savoir lire les covenants et analyser le crédit !',
    },
  },

  // ── 12. High Yield & Investment Grade ──────
  {
    id: 'fi-12',
    title: 'High Yield & Investment Grade',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le marché du crédit se divise en deux univers : Investment Grade (IG, notations BBB- et au-dessus) et High Yield (HY, notations BB+ et en dessous). Cette frontière est la ligne de démarcation la plus importante en gestion crédit.',
      keyPoints: [
        'IG : BBB- à AAA (S&P/Fitch), Baa3 à Aaa (Moody\'s)',
        'HY : BB+ et en dessous, aussi appelé « junk bonds » ou « spéculatif »',
        'Le taux de défaut historique est < 0,5 %/an en IG vs 3-5 %/an en HY',
        'Les « fallen angels » (IG déchus en HY) subissent une forte pression vendeuse',
        'Les « rising stars » (HY promus IG) bénéficient d\'un resserrement de spread',
      ],
      explanation:
        'La frontière BBB-/BB+ a des implications majeures : de nombreux investisseurs institutionnels (assureurs, fonds de pension) n\'ont pas le droit d\'investir en HY. Un downgrade de BBB- à BB+ déclenche des ventes forcées et un écartement de spread brutal. Le marché HY européen représente environ 400 Mds EUR d\'encours. Les spreads HY sont typiquement de 300-500 bps en période calme, mais peuvent dépasser 1 000 bps en crise (mars 2020 : > 900 bps). Le crossover (BB/BBB) est un segment très actif avec des opportunités d\'alpha. Le ratio par défaut moyen cumulé à 5 ans est d\'environ 0,8 % pour le BBB et 14 % pour le B.',
      example:
        'En 2020, Ford Motor a été rétrogradée de BBB- à BB+ (fallen angel). Son spread a bondi de 200 bps à 650 bps en quelques semaines. Les fonds IG contraints ont dû vendre, créant une opportunité pour les gérants HY. Après sa remontée à IG en 2023, le spread s\'est resserré à 180 bps.',
      finnSays:
        'La frontière IG/HY, c\'est le mur le plus important du crédit. Quand un émetteur la franchit à la baisse, ça fait très mal !',
    },
  },

  // ── 13. Spreads de crédit ──────────────────
  {
    id: 'fi-13',
    title: 'Spreads de crédit',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le spread de crédit est la rémunération supplémentaire exigée par les investisseurs pour détenir une obligation plus risquée qu\'une obligation souveraine de référence. Il est le thermomètre du risque sur les marchés obligataires.',
      keyPoints: [
        'Le G-spread mesure l\'écart vs l\'obligation d\'État interpolée',
        'Le Z-spread est le spread constant ajouté à chaque point de la courbe spot',
        'L\'OAS (Option-Adjusted Spread) corrige pour les options intégrées',
        'L\'ASW (Asset Swap Spread) mesure le spread vs la courbe swap',
        'Le CDS spread est le coût de la protection crédit sur le marché dérivé',
      ],
      explanation:
        'Le G-spread est la différence simple entre le YTM de l\'obligation et le rendement du souverain de même maturité. Le Z-spread est plus précis : c\'est le spread constant qu\'il faut ajouter à chaque taux spot de la courbe pour retrouver le prix de marché. L\'OAS va plus loin en retirant la valeur des options intégrées (call, put). Pour une obligation non callable, Z-spread ≈ OAS. Le basis CDS-bond (CDS spread - Z-spread) est normalement positif mais peut devenir négatif en période de stress (negative basis trade). Les spreads de crédit sont corrélés aux cycles économiques : ils se resserrent en expansion et s\'écartent en récession.',
      formula: 'P = Σ [CFt / (1 + st + Z)^t]\noù st = taux spot, Z = Z-spread (résoudre pour Z)\nBasis = CDS spread - Z-spread',
      example:
        'Obligation Société Générale 5 ans, prix 98,50, YTM 4,2 %. OAT 5 ans : 3,1 %. G-spread = 110 bps. Z-spread calculé = 115 bps (plus élevé car la courbe n\'est pas plate). CDS 5 ans Société Générale = 80 bps. Basis = 80 - 115 = -35 bps (basis négatif : opportunité de negative basis trade).',
      finnSays:
        'Z-spread, OAS, CDS basis... Maîtrise ces concepts et tu parleras le langage des traders crédit comme un pro !',
    },
  },

  // ── 14. Analyse crédit ─────────────────────
  {
    id: 'fi-14',
    title: 'Analyse crédit',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'L\'analyse crédit évalue la capacité d\'un émetteur à honorer ses obligations financières. Elle combine analyse quantitative (ratios financiers) et qualitative (positionnement concurrentiel, gouvernance, risque pays).',
      keyPoints: [
        'Les 4 C du crédit : Capacité, Capital, Conditions, Caractère',
        'Ratio clé : Dette nette / EBITDA (leverage) — < 2x pour IG solide',
        'EBITDA / Intérêts (couverture) — > 5x pour IG, > 2x pour HY',
        'Free cash flow / Dette totale mesure la capacité de remboursement',
        'L\'analyse qualitative évalue le business risk et l\'environnement sectoriel',
      ],
      explanation:
        'L\'analyste crédit examine d\'abord le profil d\'activité : diversification géographique, position concurrentielle, barrières à l\'entrée, cyclicité du secteur. Puis il analyse le profil financier : génération de cash flows, structure du bilan, maturité de la dette, accès aux marchés de capitaux. Le modèle de Merton lie le risque de défaut à la structure du capital : le défaut survient quand la valeur des actifs passe sous le seuil de la dette. Les agences utilisent des grilles de notation combinant scores qualitatifs et quantitatifs. L\'analyse relative compare les spreads d\'émetteurs similaires : un spread trop large peut signaler une opportunité, un spread trop étroit un risque.',
      formula: 'Leverage = Dette nette / EBITDA\nCouverture = EBITDA / Charges d\'intérêts\nFCF yield = Free Cash Flow / Dette totale\nProbabilité de défaut (Merton) = N(-d₂) où d₂ est lié à V/D et σ',
      example:
        'Analyse de Carrefour : Chiffre d\'affaires 88 Mds EUR, EBITDA 4,2 Mds, dette nette 6,5 Mds. Leverage = 1,55x (solide IG). Couverture EBITDA/intérêts = 8,2x. Profil qualitatif : leader européen du retail, bonne diversification, secteur défensif. Notation : BBB (S&P). Spread vs Bund : 85 bps, en ligne avec les pairs BBB.',
      finnSays:
        'L\'analyse crédit, c\'est jouer au détective financier. Les ratios racontent une histoire, mais il faut lire entre les lignes !',
    },
  },

  // ── 15. Ratings ────────────────────────────
  {
    id: 'fi-15',
    title: 'Ratings et agences de notation',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les agences de notation (S&P, Moody\'s, Fitch) attribuent des notes de crédit qui évaluent la probabilité de défaut d\'un émetteur. Ces ratings sont déterminants pour le coût de financement et l\'univers d\'investisseurs accessibles.',
      keyPoints: [
        'Échelle S&P/Fitch : AAA → AA → A → BBB → BB → B → CCC → CC → C → D',
        'Échelle Moody\'s : Aaa → Aa → A → Baa → Ba → B → Caa → Ca → C',
        'L\'outlook (positive/stable/negative) indique la tendance probable',
        'La watchlist signale un changement imminent (généralement sous 90 jours)',
        'Les notations sollicitées vs non sollicitées : conflit d\'intérêts (modèle issuer-pays)',
      ],
      explanation:
        'Le processus de notation implique une revue approfondie : rencontre avec le management, analyse des comptes, modélisation des scénarios de stress. La notation est décidée par un comité. Le modèle économique « issuer-pays » (l\'émetteur paie pour être noté) crée un conflit d\'intérêts mis en lumière par la crise de 2008. Le règlement européen CRA impose des règles de transparence et de rotation. Les matrices de transition montrent la probabilité de migrer d\'une note à une autre sur 1 an : un BBB a environ 5 % de chances d\'être dégradé en BB sur 1 an, et 0,2 % de faire défaut à 1 an. Le split rating (notes différentes selon les agences) est fréquent et peut créer des opportunités.',
      example:
        'Renault : noté BBB- par S&P (outlook stable), Ba1 par Moody\'s (outlook positive). Split rating autour de la frontière IG/HY. Certains fonds IG peuvent acheter (car S&P est IG), d\'autres non (car Moody\'s est HY). Le spread reflète cette incertitude : 150 bps, plus large que les BBB purs.',
      finnSays:
        'Les ratings, c\'est le passeport financier d\'une entreprise. Un downgrade peut fermer des portes, un upgrade les ouvrir grand !',
    },
  },

  // ── 16. Covered bonds ──────────────────────
  {
    id: 'fi-16',
    title: 'Covered bonds',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les covered bonds (obligations sécurisées) sont des titres de dette garantis par un pool d\'actifs (prêts hypothécaires ou créances publiques) qui restent au bilan de l\'émetteur. Ils offrent une double protection : le recours à l\'émetteur ET au cover pool.',
      keyPoints: [
        'Double recours : sur l\'émetteur ET sur le cover pool (dual recourse)',
        'Le cover pool est dynamique : les actifs dépréciés sont remplacés',
        'Cadre juridique européen harmonisé (Directive EU 2019/2162)',
        'Spread très faible vs souverain : 10-30 bps typiquement pour un AAA',
        'Pfandbriefe allemands : le modèle historique (depuis 1769)',
      ],
      explanation:
        'Contrairement à la titrisation (ABS), les actifs restent au bilan de la banque émettrice. L\'investisseur bénéficie du recours à la banque et, en cas de défaut de celle-ci, d\'un droit prioritaire sur le cover pool. Le ratio de couverture (cover pool / obligations émises) doit être > 100 % (souvent 105-120 %). Un monitor indépendant vérifie la qualité du pool. Les covered bonds sont éligibles au refinancement BCE et bénéficient d\'un traitement prudentiel favorable (pondération 10 % en risque sous CRR). Le marché européen représente environ 2 800 Mds EUR d\'encours. Les obligations foncières (OF) françaises sont l\'équivalent français des Pfandbriefe.',
      example:
        'BNP Paribas Home Loan SFH émet un covered bond 10 ans, notée AAA, coupon 2,8 %. Cover pool : 45 Mds EUR de prêts hypothécaires résidentiels français, LTV moyen 62 %, ratio de couverture 115 %. Spread vs OAT 10 ans : 15 bps. Spread vs Bund : 70 bps (dont 55 bps de spread OAT-Bund).',
      finnSays:
        'Les covered bonds, c\'est la ceinture ET les bretelles ! Double protection = risque minimal. Parfait pour les investisseurs prudents.',
    },
  },

  // ── 17. ABS ────────────────────────────────
  {
    id: 'fi-17',
    title: 'Asset-Backed Securities (ABS)',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Les ABS sont des titres adossés à un portefeuille d\'actifs (prêts auto, cartes de crédit, leasing, prêts étudiants) transférés dans un véhicule dédié (SPV). La titrisation permet à l\'originateur de transférer le risque et de libérer du capital.',
      keyPoints: [
        'Le SPV (Special Purpose Vehicle) isole les actifs du bilan de l\'originateur',
        'Le tranching crée des classes (AAA senior, mezzanine, equity) avec des profils risque/rendement différents',
        'Le credit enhancement protège les tranches senior (subordination, excess spread, réserves)',
        'Le waterfall de paiement définit l\'ordre de distribution des flux',
        'Les CLO (Collateralized Loan Obligations) sont le plus grand segment du marché ABS',
      ],
      explanation:
        'L\'originateur (banque) cède un portefeuille de créances à un SPV, qui émet des titres en tranches. La tranche equity (3-5 % du pool) absorbe les premières pertes, la mezzanine les suivantes, et la senior (70-80 %) est protégée par la subordination. Le credit enhancement total pour la tranche AAA est typiquement de 20-30 %. Le servicer gère les flux quotidiens (encaissement, relances, recouvrements). Les problèmes de la crise 2008 : originateurs avec peu de « skin in the game », ratings trop optimistes, corrélation de défaut sous-estimée. La réglementation post-crise impose 5 % de rétention par l\'originateur (règle du « skin in the game » EU).',
      formula: 'Credit Enhancement = (Subordination + Excess Spread + Réserve) / Encours total\nWAL (Weighted Average Life) = Σ [t × Principal remboursé en t] / Principal total',
      example:
        'ABS Auto Stellantis : pool de 10 000 prêts auto (1,5 Md EUR), maturité moyenne 4 ans, taux de défaut historique 1,2 %. Tranche A (AAA) : 85 % du pool, spread Euribor + 40 bps. Tranche B (A) : 10 %, Euribor + 120 bps. Tranche C (equity) : 5 %, non notée. Le credit enhancement pour la tranche A est 15 %.',
      finnSays:
        'La titrisation, c\'est de l\'ingénierie financière à l\'état pur. Le tranching transforme un pool de risque moyen en tranches AAA et equity. Magique, mais pas sans risques !',
    },
  },

  // ── 18. MBS ────────────────────────────────
  {
    id: 'fi-18',
    title: 'Mortgage-Backed Securities (MBS)',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'Les MBS sont des titres adossés à des prêts hypothécaires. Aux États-Unis, les Agency MBS (Ginnie Mae, Fannie Mae, Freddie Mac) sont le deuxième plus grand marché obligataire après les Treasuries, avec plus de 9 000 Mds $ d\'encours.',
      keyPoints: [
        'Agency MBS : garantis par des agences gouvernementales (risque de crédit quasi nul)',
        'Non-agency MBS : sans garantie publique (risque de crédit à analyser)',
        'Le risque de prepayment : les emprunteurs remboursent par anticipation quand les taux baissent',
        'La negative convexity : le prix des MBS monte moins que celui d\'une obligation classique quand les taux baissent',
        'Le modèle PSA (Public Securities Association) modélise le prepayment',
      ],
      explanation:
        'Le prepayment risk est le risque spécifique des MBS : quand les taux baissent, les ménages refinancent leur prêt, et l\'investisseur reçoit le capital plus tôt que prévu — qu\'il doit réinvestir à des taux inférieurs. C\'est l\'inverse du risque classique. Le CPR (Conditional Prepayment Rate) mesure le taux annualisé de remboursement anticipé. Le modèle PSA standard suppose un CPR de 0 % au mois 0 qui monte linéairement à 6 % au mois 30, puis reste constant. Les CMO (Collateralized Mortgage Obligations) découpent les flux en tranches séquentielles pour redistribuer le risque de prepayment. Les IO (Interest Only) et PO (Principal Only) sont des strips de MBS.',
      formula: 'SMM (Single Monthly Mortality) = 1 - (1 - CPR)^(1/12)\nPSA 100 % : CPR = min(0,2% × mois, 6%)\nOAS = Z-spread - Valeur de l\'option de prepayment',
      example:
        'Pool FNMA 30 ans, coupon 4,5 %, taux marché 3,5 %. CPR observé : 25 % (les ménages refinancent activement). WAL = 5,2 ans au lieu de 15 ans théoriques. Le prix est plafonné autour de 104 malgré le coupon élevé (negative convexity). OAS = 35 bps vs Z-spread de 80 bps : la différence (45 bps) est la valeur de l\'option de prepayment vendue par l\'investisseur.',
      finnSays:
        'Les MBS, c\'est le monde à l\'envers : tu as peur que les taux BAISSENT ! Le risque de remboursement anticipé rend tout plus compliqué — mais aussi plus intéressant.',
    },
  },

  // ── 19. Obligations convertibles ───────────
  {
    id: 'fi-19',
    title: 'Obligations convertibles',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Une obligation convertible est un titre hybride qui combine une obligation classique et une option de conversion en actions de l\'émetteur. Elle offre le plancher obligataire (bond floor) avec un potentiel de hausse actions (equity upside).',
      keyPoints: [
        'Le ratio de conversion fixe le nombre d\'actions par obligation',
        'Le prix de conversion = nominal / ratio de conversion',
        'La prime de conversion mesure le surcoût vs l\'achat direct de l\'action',
        'Le delta indique la sensibilité du prix de la convertible au cours de l\'action',
        'Le bond floor est la valeur de l\'obligation sans l\'option de conversion',
      ],
      explanation:
        'La convertible se comporte comme une obligation quand l\'action est très en dessous du prix de conversion (zone « busted ») : delta faible, sensible aux taux. Quand l\'action est proche du prix de conversion (zone « hybride »), le delta est entre 40 % et 80 % : c\'est le sweet spot avec le meilleur profil asymétrique. Quand l\'action est très au-dessus (zone « equity »), delta > 80 %, la convertible se comporte comme l\'action. Le coupon est inférieur à celui d\'une obligation classique du même émetteur : l\'investisseur paie l\'option en renonçant à du coupon. La valorisation combine un modèle de pricing d\'option (arbre binomial, Black-Scholes ajusté) et un modèle de crédit.',
      formula: 'Prix conversion = Nominal / Ratio de conversion\nPrime = (Prix convertible / Valeur de conversion - 1) × 100\nValeur de conversion = Ratio × Cours de l\'action\nPrix convertible ≈ Bond floor + Valeur de l\'option',
      example:
        'Convertible Safran : nominal 100 000 EUR, coupon 0,875 %, maturité 2028, ratio de conversion 128,2 actions. Prix de conversion = 100 000 / 128,2 = 780,03 EUR. Action Safran à 210 EUR → valeur de conversion = 128,2 × 210 = 26 922 EUR (busted). Action à 800 EUR → valeur de conversion = 102 560 EUR → conversion profitable.',
      finnSays:
        'La convertible, c\'est le meilleur des deux mondes : la protection de l\'obligation et le potentiel de l\'action. Le profil asymétrique est sa grande force !',
    },
  },

  // ── 20. Obligations indexées sur l'inflation ─
  {
    id: 'fi-20',
    title: 'Obligations indexées sur l\'inflation',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Les obligations indexées sur l\'inflation (TIPS aux US, OATi/OAT€i en France, Linkers au UK) protègent l\'investisseur contre l\'érosion monétaire en ajustant le nominal en fonction de l\'indice des prix à la consommation.',
      keyPoints: [
        'Le nominal est multiplié par le coefficient d\'indexation (CPI actuel / CPI base)',
        'Le coupon réel est fixe mais s\'applique au nominal indexé (coupon nominal croissant)',
        'Le breakeven inflation = rendement nominal - rendement réel',
        'Si l\'inflation réalisée > breakeven, le linker surperforme le nominal',
        'Le floor de déflation (TIPS) garantit le remboursement minimum du nominal initial',
      ],
      explanation:
        'Le mécanisme est simple : le nominal de l\'obligation est ajusté chaque jour en fonction de l\'inflation mesurée (avec un décalage de 2-3 mois). Le coupon, fixe en termes réels, s\'applique sur ce nominal ajusté. Ainsi, si l\'inflation est de 3 % par an, le nominal croît de 3 % par an et les coupons suivent. Le breakeven inflation rate est le taux d\'inflation qui rend indifférent entre une obligation nominale et un linker de même maturité. Si l\'on anticipe une inflation supérieure au breakeven, on préfère le linker. Les OAT€i sont indexées sur l\'inflation zone euro (HICP ex-tabac), tandis que les OATi sont indexées sur l\'inflation française.',
      formula: 'Nominal indexé = Nominal × (CPI_t / CPI_base)\nCoupon versé = Taux réel × Nominal indexé\nBreakeven = YTM_nominal - YTM_réel\nRendement réel ≈ YTM_nominal - Inflation anticipée',
      example:
        'OATi 2032, coupon réel 0,10 %, émise en 2022 avec CPI base = 112,5. CPI actuel = 119,3. Coefficient d\'indexation = 119,3/112,5 = 1,0604. Nominal indexé = 1 000 × 1,0604 = 1 060,40 EUR. Coupon versé = 0,10 % × 1 060,40 = 1,06 EUR. Breakeven 10 ans = 2,3 % : si l\'inflation réalisée > 2,3 %, l\'OATi est gagnante.',
      finnSays:
        'Quand l\'inflation s\'emballe, les linkers sont tes meilleurs amis. Le breakeven te dit le seuil à partir duquel ils deviennent intéressants !',
    },
  },

  // ── 21. Green bonds ────────────────────────
  {
    id: 'fi-21',
    title: 'Green bonds',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les green bonds (obligations vertes) financent des projets à impact environnemental positif : énergies renouvelables, efficacité énergétique, transports propres. Le marché a dépassé 500 Mds $ d\'émissions annuelles et est encadré par des standards de plus en plus stricts.',
      keyPoints: [
        'Les Green Bond Principles (ICMA) définissent 4 piliers : utilisation des fonds, processus de sélection, gestion des fonds, reporting',
        'Le EU Green Bond Standard (EU GBS) impose l\'alignement avec la taxonomie européenne',
        'Le « greenium » est la prime (spread plus faible) que les investisseurs acceptent pour les green bonds',
        'Le risque de greenwashing nécessite une vérification indépendante (SPO)',
        'La France a été pionnière avec son OAT verte en 2017 (première obligation souveraine verte de grande taille)',
      ],
      explanation:
        'Les green bonds sont structurellement identiques aux obligations classiques : mêmes séniorité, mêmes garanties, même recours. La différence est l\'engagement de l\'émetteur à allouer les fonds à des projets éligibles. Le greenium (green premium) est généralement de 2-5 bps : les émetteurs paient légèrement moins cher grâce à la forte demande ESG. Une Second Party Opinion (SPO) par un vérificateur indépendant (Vigeo, ISS ESG, Sustainalytics) certifie l\'alignement avec les standards. Le reporting d\'impact annuel détaille l\'allocation des fonds et les métriques environnementales (tonnes de CO₂ évitées, MWh d\'énergie renouvelable produite). Les social bonds et sustainability bonds élargissent le concept aux enjeux sociaux.',
      example:
        'OAT verte française 2044, coupon 1,75 %, encours 35 Mds EUR. Greenium observé vs OAT classique de même maturité : 3 bps. Projets financés : rénovation thermique des bâtiments publics (40 %), transports propres (30 %), biodiversité (15 %), énergies renouvelables (15 %). Impact reporté : 8,2 millions de tonnes de CO₂ évitées.',
      finnSays:
        'Les green bonds, c\'est la finance qui se met au vert ! Le greenium est faible, mais la demande est là. L\'avenir de la dette est durable.',
    },
  },

  // ── 22. Repo ───────────────────────────────
  {
    id: 'fi-22',
    title: 'Marché du Repo',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le repo (repurchase agreement) est un prêt garanti par des titres : le vendeur cède temporairement des obligations et s\'engage à les racheter à un prix légèrement supérieur. C\'est le marché de financement le plus important du système financier, avec un encours quotidien > 4 000 Mds EUR en zone euro.',
      keyPoints: [
        'Le repo est économiquement un prêt collatéralisé par des titres',
        'Le taux repo reflète le coût de financement sécurisé (< taux non sécurisé)',
        'Le haircut est la décote appliquée au collatéral (2-5 % pour les souverains)',
        'Le special repo : un titre spécifique est très demandé (taux repo très bas voire négatif)',
        'La BCE utilise les opérations de repo comme outil de politique monétaire',
      ],
      explanation:
        'Dans un repo classique, la Partie A (emprunteur de cash) vend des obligations à la Partie B (prêteur de cash) avec un accord de rachat à une date future et un prix légèrement supérieur. La différence de prix est le taux repo. Le General Collateral (GC) repo utilise un panier d\'obligations acceptables : le taux GC est le benchmark du financement sécurisé. Le special repo concerne un titre spécifique très demandé (short squeeze, livraison de futures) : son taux peut tomber bien en dessous du GC, voire devenir négatif. Le triparty repo utilise un agent (Euroclear, Clearstream) pour gérer le collatéral. Le repo overnight est le plus liquide, mais des termes de 1 semaine à 1 an existent.',
      formula: 'Taux repo = (Prix de rachat - Prix de vente) / Prix de vente × (360 / Jours)\nHaircut = (Valeur nominale - Valeur du prêt) / Valeur nominale × 100\nMontant prêté = Valeur de marché du collatéral × (1 - Haircut)',
      example:
        'Repo overnight sur Bund 10 ans : montant nominal 50 M EUR, prix de marché 98,50 (valeur 49,25 M EUR), haircut 2 %. Montant prêté = 49,25 × 0,98 = 48,265 M EUR. Taux repo GC : -0,10 % (la BCE maintient des taux courts négatifs). Le Bund 10 ans est « on special » avant la livraison du future Eurex : taux special = -2,5 %.',
      finnSays:
        'Le repo, c\'est la plomberie du système financier. Invisible au grand public, mais sans lui, plus rien ne fonctionne !',
    },
  },

  // ── 23. Cas Émission ───────────────────────
  {
    id: 'fi-23',
    title: 'Cas pratique : Émission obligataire',
    xp: 300,
    duration: '55 min',
    content: {
      introduction:
        'Ce cas pratique simule le processus complet d\'une émission obligataire corporate, de la décision d\'émettre à l\'allocation finale. Tu accompagnes le Trésorier d\'un groupe industriel et les banques arrangeuses dans toutes les étapes.',
      keyPoints: [
        'Phase 1 : Mandat aux banques (bookrunners), documentation juridique',
        'Phase 2 : Roadshow investisseurs, investor presentation, Q&A',
        'Phase 3 : Annonce (IPT - Initial Price Talk), book building',
        'Phase 4 : Pricing (spread final), allocation, règlement-livraison',
        'Le new issue premium (NIP) rémunère les investisseurs pour participer au primaire',
      ],
      explanation:
        'Le groupe EnergiePlus (noté BBB, CA 12 Mds EUR) veut lever 750 M EUR à 7 ans pour refinancer une ligne bancaire et financer des acquisitions. Il mandate 3 banques (BNP, SG, JPM) comme joint bookrunners. Le roadshow de 3 jours couvre Paris, Londres, Francfort. L\'IPT est annoncé à mid-swap + 130-135 bps. Le carnet d\'ordres atteint 3,2 Mds EUR (4,3x sursouscrit). Le spread est resserré à mid-swap + 115 bps. Le coupon est fixé à 4,125 % (mid-swap 7 ans à 2,975 %). L\'allocation favorise les investisseurs long-only (65 %) vs hedge funds (10 %), avec une diversification géographique (France 35 %, Allemagne 20 %, UK 25 %, autre 20 %). Le NIP est estimé à 10-15 bps vs la courbe secondaire de l\'émetteur.',
      example:
        'Résumé du pricing : Émetteur = EnergiePlus SA, Notation = BBB (S&P), Montant = 750 M EUR, Maturité = 7 ans, Coupon = 4,125 %, Prix d\'émission = 99,674, Spread = MS + 115 bps, Yield = 4,18 %, Carnet = 3,2 Mds EUR (4,3x). Commissions bookrunners = 0,35 % flat = 2,625 M EUR.',
      finnSays:
        'L\'émission obligataire, c\'est le moment de vérité : le marché vote avec son argent. Un carnet 4x sursouscrit, c\'est le signe que le pricing est bon !',
    },
  },

  // ── 24. Examen final ───────────────────────
  {
    id: 'fi-24',
    title: 'Examen final Fixed Income',
    xp: 500,
    duration: '60 min',
    content: {
      introduction:
        'Cet examen final couvre l\'ensemble des concepts du cours Fixed Income : pricing, duration, courbe des taux, analyse crédit, produits structurés et stratégies. Il teste ta capacité à intégrer et appliquer ces connaissances.',
      keyPoints: [
        'Pricing et YTM : calculer le prix d\'une obligation et interpréter son rendement',
        'Duration et convexité : mesurer et gérer le risque de taux',
        'Courbe des taux : bootstrapping, forwards, et stratégies de courbe',
        'Analyse crédit : évaluer un émetteur et interpréter les spreads',
        'Produits structurés : ABS, MBS, convertibles et leur fonctionnement',
      ],
      explanation:
        'L\'examen combine des questions théoriques (définitions, mécanismes) et des calculs pratiques (pricing, duration, spreads). Tu dois être capable de : (1) pricer une obligation et calculer son YTM, (2) calculer la duration modifiée et estimer l\'impact d\'un mouvement de taux, (3) bootstrapper des taux spot et calculer des forwards, (4) analyser le profil crédit d\'un émetteur à partir de ses ratios, (5) comprendre le fonctionnement des ABS/MBS et de la titrisation, (6) comparer les différents types de spreads (G-spread, Z-spread, OAS). Révise bien les formules clés et les mécanismes de chaque produit.',
      example:
        'Question type : Une obligation 5 ans, coupon 3 %, cote 96,50. (a) Calculez le YTM. (b) Si la duration modifiée est 4,5, estimez le nouveau prix si les taux montent de 75 bps. (c) Si le Bund 5 ans est à 2,2 %, quel est le G-spread ? (d) Si le CDS 5 ans de l\'émetteur est à 60 bps, calculez le basis.',
      finnSays:
        'Tu as parcouru tout l\'univers du Fixed Income ! Des obligations d\'État aux MBS, tu maîtrises maintenant les fondements des marchés de taux. Bravo, astronaute !',
    },
  },
];
