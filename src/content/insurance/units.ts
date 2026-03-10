// ──────────────────────────────────────────────
//  FINA - Assurance & Actuariat : Lessons
// ──────────────────────────────────────────────

import type { Lesson } from '../types';

export const insuranceLessons: Lesson[] = [
  // ─── Leçon 1 : L'Industrie ─────────────────
  {
    id: 'ins-1',
    title: 'L\'Industrie de l\'Assurance',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'assurance est un mécanisme de mutualisation des risques. En échange d\'une prime, l\'assureur s\'engage à indemniser l\'assuré en cas de sinistre. Le secteur pèse ~6 000 Md$ de primes mondiales.',
      keyPoints: [
        'Mutualisation : la loi des grands nombres permet de prédire les sinistres',
        'Cycle inversé : l\'assureur encaisse les primes AVANT de payer les sinistres',
        'Float : les primes investies génèrent des revenus financiers (modèle Berkshire)',
        'Ratio combiné : mesure de la rentabilité technique (< 100% = profit)',
      ],
      explanation:
        'L\'assurance repose sur la loi des grands nombres : sur un grand portefeuille, la sinistralité moyenne est prédictible. Le cycle de production est inversé : l\'assureur fixe le prix (prime) avant de connaître le coût réel (sinistres). Le float (primes encaissées non encore versées) est investi et génère des revenus financiers. Le ratio combiné = (sinistres + frais) / primes : sous 100%, l\'assureur gagne de l\'argent sur son activité technique. Au-dessus, il doit compenser par les revenus financiers.',
      formula: 'Ratio combiné = (Sinistres payés + Frais) / Primes acquises\nRentabilité = Résultat technique + Résultat financier',
      example:
        'AXA : primes 100 Md€, ratio combiné 95% → résultat technique 5 Md€. Float investi : 500 Md€ d\'actifs → revenus financiers 15 Md€. Résultat total avant impôt ≈ 20 Md€.',
      finnSays:
        'L\'assureur gagne deux fois : sur les primes (si le ratio combiné est bon) et sur l\'investissement du float. Warren Buffett a compris ça très tôt !',
    },
  },

  // ─── Leçon 2 : Vie et Non-vie ─────────────
  {
    id: 'ins-2',
    title: 'Assurance Vie vs Non-vie',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'assurance se divise en deux branches principales : la Vie (épargne, retraite, décès) et la Non-vie (auto, habitation, responsabilité civile, santé). Leurs modèles économiques sont très différents.',
      keyPoints: [
        'Vie : engagements longs (10-30 ans), risque de longévité/mortalité',
        'Non-vie : engagements courts (1 an), risque de fréquence et de sévérité',
        'Vie : primes représentent ~55% du marché mondial',
        'Non-vie : cycle de souscription (hard market / soft market)',
      ],
      explanation:
        'En assurance vie, les engagements sont de longue durée : rentes viagères (risque de longévité), assurance décès (risque de mortalité), épargne en euros (garantie de capital). Le risque principal est l\'inadéquation actif-passif (ALM). En non-vie, les sinistres sont plus fréquents mais les contrats annuels. Le cycle de souscription alterne phases de marché dur (primes élevées, sélection stricte après de grosses pertes) et phases de marché mou (concurrence intense, primes basses).',
      example:
        'Assurance vie : contrat en euros, garantie de capital, rendement 2-3%/an, duration du passif ~15 ans. Non-vie auto : prime 600€/an, fréquence sinistre 7%, coût moyen sinistre 3 000€, ratio combiné 97%.',
      finnSays:
        'Vie et non-vie, c\'est comme le long terme et le court terme en finance : des risques différents, des stratégies différentes, des réglementations différentes !',
    },
  },

  // ─── Leçon 3 : Tarification ───────────────
  {
    id: 'ins-3',
    title: 'Tarification',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La tarification (pricing) est l\'art de fixer la prime d\'assurance. L\'actuaire doit estimer le coût futur des sinistres et ajouter les marges nécessaires pour couvrir les frais et générer un profit.',
      keyPoints: [
        'Prime pure = Fréquence × Coût moyen du sinistre',
        'Prime commerciale = Prime pure + Chargements (frais, marge, réassurance)',
        'Segmentation : variables tarifaires (âge, sexe, lieu, type de véhicule)',
        'GLM (Generalized Linear Models) : outil standard de tarification',
      ],
      explanation:
        'La prime pure est l\'espérance mathématique du coût des sinistres. La fréquence (nombre de sinistres / nombre de contrats) et le coût moyen (montant total / nombre de sinistres) sont estimés par segment de risque. Les modèles GLM (régression de Poisson pour la fréquence, Gamma pour le coût) permettent de quantifier l\'impact de chaque variable tarifaire. La prime commerciale ajoute les chargements : frais de gestion (15-25%), coût de la réassurance (5-10%), marge de profit (3-5%) et chargement de sécurité pour la volatilité.',
      formula: 'Prime pure = E[N] × E[X] = Fréquence × Coût moyen\nPrime commerciale = Prime pure / (1 − Taux de chargement)',
      example:
        'Auto : fréquence 7%, coût moyen 3 500€. Prime pure = 0.07 × 3500 = 245€. Chargements 40% (frais 20%, réassurance 8%, marge 7%, sécurité 5%). Prime commerciale = 245 / (1-0.40) = 408€.',
      finnSays:
        'Tarifer, c\'est prévoir le coût futur des sinistres. Trop cher, tu perds des clients. Pas assez, tu perds de l\'argent. Le juste prix, c\'est la science de l\'actuaire !',
    },
  },

  // ─── Leçon 4 : Tables de Mortalité ────────
  {
    id: 'ins-4',
    title: 'Tables de Mortalité',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les tables de mortalité sont l\'outil fondamental de l\'actuariat vie. Elles donnent la probabilité de décès à chaque âge et permettent de calculer les primes d\'assurance vie et les rentes.',
      keyPoints: [
        'qx : probabilité de décéder entre l\'âge x et x+1',
        'lx : nombre de survivants à l\'âge x (sur une cohorte de 100 000)',
        'Espérance de vie : e₀ ≈ 80 ans (H) et 85 ans (F) en France',
        'Tables de période vs tables de génération (avec tendance de mortalité)',
      ],
      explanation:
        'Une table de mortalité donne pour chaque âge x la probabilité de décès qx. À partir de q₀, on construit la colonne lx (survivants) : l(x+1) = lx × (1-qx). L\'espérance de vie à l\'âge x est la moyenne des années restantes. En assurance vie, on distingue les tables de mortalité (pour l\'assurance décès, on veut surestimer la mortalité) et les tables de longévité (pour les rentes, on veut sous-estimer la mortalité). Les tables de génération intègrent l\'amélioration future de la mortalité.',
      formula: 'qx = dx / lx (probabilité de décès à l\'âge x)\nlx+1 = lx × (1 − qx)\nex = Σ(lx+k / lx) pour k=1 à ω−x',
      example:
        'Table TH 2015 (hommes) : q30 = 0.08%, q50 = 0.35%, q70 = 1.8%, q90 = 15%. Sur 100 000 naissances : l30 = 97 800, l50 = 95 200, l70 = 82 100, l90 = 35 600. Espérance de vie à 65 ans ≈ 19 ans.',
      finnSays:
        'Les tables de mortalité, c\'est la boussole de l\'actuaire vie : elles lui disent combien de temps les gens vont vivre (ou pas). Morbide mais essentiel !',
    },
  },

  // ─── Leçon 5 : Réserves Techniques ────────
  {
    id: 'ins-5',
    title: 'Réserves Techniques',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les réserves techniques (provisions techniques) représentent les engagements futurs de l\'assureur envers ses assurés. Elles constituent la plus grande partie du passif du bilan.',
      keyPoints: [
        'PSAP (Provisions pour Sinistres À Payer) : sinistres survenus non encore réglés',
        'PM (Provisions Mathématiques) : engagements vie (épargne, rentes)',
        'IBNR (Incurred But Not Reported) : sinistres survenus mais pas encore déclarés',
        'Triangles de développement : outil de projection des PSAP',
      ],
      explanation:
        'Les PSAP couvrent les sinistres déclarés mais non réglés (case reserves) et les sinistres survenus mais non encore déclarés (IBNR). Les méthodes de provisionnement (Chain Ladder, Bornhuetter-Ferguson) utilisent des triangles de développement qui montrent l\'évolution des sinistres au fil du temps. En vie, les provisions mathématiques représentent la valeur actuarielle des engagements futurs (capital garanti + participation aux bénéfices). Un sous-provisionnement peut entraîner l\'insolvabilité.',
      formula: 'Chain Ladder : facteur de développement = Σ Cn,k+1 / Σ Cn,k\nUltime = Cn,dernier × Π facteurs restants',
      example:
        'Triangle sinistres auto : année 2022, payés cumulés à fin 2024 = 80 M€. Facteur de développement 2→3 ans = 1.15, 3→ultime = 1.05. Charge ultime = 80 × 1.15 × 1.05 = 96.6 M€. IBNR = 96.6 - 80 = 16.6 M€.',
      finnSays:
        'Les réserves, c\'est l\'argent mis de côté pour payer les sinistres futurs. Trop peu = faillite. Trop = profit caché. L\'actuaire cherche le juste milieu !',
    },
  },

  // ─── Leçon 6 : Solvabilité II ────────────
  {
    id: 'ins-6',
    title: 'Solvabilité II',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Solvabilité II est le cadre réglementaire européen de l\'assurance, en vigueur depuis 2016. Comme Bâle III pour les banques, il impose des exigences de capital basées sur le risque.',
      keyPoints: [
        'Pilier 1 : exigences quantitatives (SCR, MCR, bilan économique)',
        'Pilier 2 : gouvernance et ORSA (Own Risk and Solvency Assessment)',
        'Pilier 3 : reporting et transparence (SFCR, RSR, QRT)',
        'Bilan économique : actifs et passifs en valeur de marché (market-consistent)',
      ],
      explanation:
        'Solvabilité II évalue les assureurs en valeur de marché (bilan économique). Les provisions techniques sont calculées comme Best Estimate + Risk Margin. Les fonds propres disponibles (Own Funds) doivent couvrir le SCR (Solvency Capital Requirement) et le MCR (Minimum Capital Requirement). Le pilier 2 impose une gouvernance (fonctions clés : actuaire, gestion des risques, conformité, audit) et un exercice d\'auto-évaluation (ORSA). Le pilier 3 exige la publication d\'un SFCR (Solvency and Financial Condition Report) annuel.',
      formula: 'Ratio de solvabilité = Fonds propres éligibles / SCR × 100%\nObjectif : ratio > 150% en pratique (minimum réglementaire = 100%)',
      example:
        'AXA France : fonds propres éligibles 25 Md€, SCR 15 Md€ → ratio de solvabilité = 167%. Le ratio est confortable. Si les marchés actions chutent de 30%, le ratio tomberait à ~135% (stress test).',
      finnSays:
        'Solvabilité II, c\'est le Bâle III de l\'assurance : un bilan en valeur de marché, du capital calibré sur les risques et une gouvernance renforcée !',
    },
  },

  // ─── Leçon 7 : SCR et MCR ────────────────
  {
    id: 'ins-7',
    title: 'SCR et MCR',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le SCR (Solvency Capital Requirement) et le MCR (Minimum Capital Requirement) sont les deux niveaux d\'exigence de capital sous Solvabilité II.',
      keyPoints: [
        'SCR : capital pour résister à un choc bicentenaire (VaR 99.5% à 1 an)',
        'MCR : seuil minimal en dessous duquel l\'agrément est retiré',
        'SCR formule standard : 6 modules de risque agrégés avec corrélations',
        'SCR modèle interne : calibration propre à l\'assureur (soumise à approbation)',
      ],
      explanation:
        'Le SCR est calibré pour que l\'assureur survive à un événement qui ne se produit qu\'une fois tous les 200 ans (VaR 99.5%). La formule standard agrège les risques de souscription (vie, non-vie, santé), de marché (actions, taux, spread, immobilier, change), de contrepartie et opérationnel. L\'agrégation utilise des matrices de corrélation pour tenir compte de la diversification. Le MCR est un plancher (25-45% du SCR) : si les fonds propres tombent sous le MCR, le superviseur retire l\'agrément.',
      formula: 'SCR = √(Σ Corr(i,j) × SCR_i × SCR_j) + SCR opérationnel\nMCR = Max(25% × SCR ; plancher absolu)',
      example:
        'Assureur non-vie : SCR souscription 800 M€, SCR marché 500 M€, SCR contrepartie 100 M€, corrélation souscription/marché = 0.25. SCR diversifié ≈ 1 050 M€ (vs 1 400 M€ non diversifié). Bénéfice de diversification = 350 M€.',
      finnSays:
        'Le SCR, c\'est le coussin de capital pour survivre à la pire année en 200 ans. Le MCR, c\'est le minimum vital : en dessous, on ferme boutique !',
    },
  },

  // ─── Leçon 8 : IFRS 17 ──────────────────
  {
    id: 'ins-8',
    title: 'IFRS 17 : Comptabilité de l\'Assurance',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'IFRS 17 (en vigueur depuis 2023) révolutionne la comptabilité de l\'assurance en imposant une évaluation market-consistent des contrats et une reconnaissance progressive du profit.',
      keyPoints: [
        'CSM (Contractual Service Margin) : profit futur du contrat, reconnu progressivement',
        'BBA (Building Block Approach) : modèle général (Best Estimate + Risk Adjustment + CSM)',
        'PAA (Premium Allocation Approach) : modèle simplifié pour les contrats courts',
        'Groupement des contrats : par année, par profitabilité (onéreux vs profitables)',
      ],
      explanation:
        'Sous IFRS 17, un contrat d\'assurance se décompose en : Best Estimate des cash-flows futurs (primes - sinistres - frais, actualisés), Risk Adjustment (compensation pour l\'incertitude), et CSM (profit non acquis). La CSM est reconnue en résultat au fur et à mesure que l\'assureur fournit le service de couverture. Les contrats onéreux (CSM < 0) sont immédiatement reconnus en perte. Cela élimine la reconnaissance immédiate du profit à l\'émission du contrat (ancien régime IFRS 4).',
      formula: 'Passif IFRS 17 = Best Estimate + Risk Adjustment + CSM\nProfit = CSM libérée + résultat financier d\'assurance',
      example:
        'Contrat vie 20 ans, prime unique 100 K€. Best Estimate des cash-flows = -90 K€ (valeur actuelle des prestations et frais). Risk Adjustment = 3 K€. CSM = 100 - 90 - 3 = 7 K€ (profit futur). La CSM est reconnue sur 20 ans ≈ 350€/an.',
      finnSays:
        'IFRS 17 empêche les assureurs de reconnaître tout le profit le jour 1. Le profit est étalé sur la durée du contrat, comme un bon fromage qui s\'affine !',
    },
  },

  // ─── Leçon 9 : Best Estimate ─────────────
  {
    id: 'ins-9',
    title: 'Best Estimate',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le Best Estimate (meilleure estimation) est la valeur actuelle probable des flux de trésorerie futurs liés aux engagements d\'assurance. C\'est le socle du bilan Solvabilité II et d\'IFRS 17.',
      keyPoints: [
        'Valeur actuelle espérée des cash-flows futurs (primes, sinistres, frais)',
        'Actualisation à la courbe des taux sans risque (EIOPA RFR)',
        'Pas de marge de prudence : estimation non biaisée',
        'Volatility Adjustment (VA) et Matching Adjustment (MA) : ajustements du taux',
      ],
      explanation:
        'Le Best Estimate projette tous les cash-flows futurs attendus : primes futures (pour les contrats en cours), sinistres (fréquence × coût moyen × développement), frais de gestion, commissions, et rachats (pour la vie). Ces flux sont actualisés à la courbe des taux sans risque publiée par l\'EIOPA, éventuellement ajustée du Volatility Adjustment (pour atténuer la volatilité artificielle des spreads) ou du Matching Adjustment (pour les portefeuilles illiquides en run-off). Le Best Estimate peut être positif (l\'assureur doit de l\'argent) ou négatif (les primes futures excèdent les sinistres).',
      formula: 'BE = Σ E[CF_t] / (1 + r_t)^t\navec r_t = taux sans risque EIOPA + VA/MA éventuel',
      example:
        'Portefeuille auto : sinistres futurs estimés 500 M€ sur 3 ans, primes futures 520 M€, frais 80 M€. BE = (500 + 80 - 520) actualisé = 58 M€. Le BE est positif : l\'assureur a un passif net de 58 M€.',
      finnSays:
        'Le Best Estimate, c\'est la prévision la plus honnête de ce que l\'assureur devra payer. Ni trop, ni trop peu : juste la meilleure estimation !',
    },
  },

  // ─── Leçon 10 : Risk Margin ──────────────
  {
    id: 'ins-10',
    title: 'Risk Margin',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'La Risk Margin est le montant qu\'un tiers exigerait, en plus du Best Estimate, pour reprendre les engagements de l\'assureur. Elle reflète le coût du capital nécessaire pour supporter les risques non couvrables.',
      keyPoints: [
        'Méthode Cost-of-Capital : RM = Σ CoC × SCR_t / (1+r_t)^t',
        'CoC fixé à 6% par la réglementation Solvabilité II',
        'Couvre les risques non hedgeables (souscription, opérationnel)',
        'Réforme Solvabilité II 2024 : introduction d\'un facteur d\'atténuation (lambda)',
      ],
      explanation:
        'La Risk Margin complète le Best Estimate pour former les provisions techniques Solvabilité II. Elle est calculée en projetant le SCR futur année par année et en appliquant un coût du capital de 6% à chaque SCR futur. L\'idée est que l\'assureur doit être compensé pour immobiliser du capital contre des risques non couvrables (risque de mortalité, risque de catastrophe). La réforme 2024 introduit un facteur lambda qui réduit la Risk Margin pour les engagements très longs (>15 ans), corrigeant une surestimation historique.',
      formula: 'RM = CoC × Σ SCR_t / (1 + r_t+1)^(t+1), avec CoC = 6%',
      example:
        'Assureur vie : SCR projeté sur 30 ans, décroissant de 1 Md€ (an 1) à 100 M€ (an 30). RM = 6% × Σ actualisée des SCR ≈ 600 M€. Avec le facteur lambda (0.85 pour >15 ans), RM réduite ≈ 510 M€.',
      finnSays:
        'La Risk Margin, c\'est le prix pour transférer tes risques à quelqu\'un d\'autre. Plus tes engagements sont longs et risqués, plus c\'est cher !',
    },
  },

  // ─── Leçon 11 : Réassurance ──────────────
  {
    id: 'ins-11',
    title: 'Réassurance',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La réassurance est l\'assurance de l\'assureur. Elle permet de transférer une partie des risques à un réassureur (Munich Re, Swiss Re, Hannover Re) pour protéger le bilan et lisser les résultats.',
      keyPoints: [
        'Proportionnelle : Quote-part (QP) et Excédent de plein',
        'Non proportionnelle : Excess of Loss (XL) par risque ou par événement',
        'Cat XL : protection contre les catastrophes naturelles',
        'Rétrocession : le réassureur se réassure à son tour',
      ],
      explanation:
        'En réassurance proportionnelle (QP), le réassureur prend un pourcentage fixe de chaque risque (ex : 40% des primes et 40% des sinistres). En Excédent de plein, le réassureur prend l\'excédent au-delà d\'une rétention par risque. En réassurance non proportionnelle (XL), le réassureur ne paie qu\'au-delà d\'un seuil (priorité) : l\'assureur conserve les sinistres jusqu\'à la priorité et le réassureur couvre l\'excédent jusqu\'à un plafond (portée). Le Cat XL protège contre les événements catastrophiques (tempêtes, séismes).',
      formula: 'XL : Réassureur paie = Max(0, Min(Sinistre − Priorité, Portée))',
      example:
        'Contrat Cat XL 200 M€ xs 50 M€ (portée 200 M€, priorité 50 M€). Tempête causant 180 M€ de sinistres : l\'assureur paie les premiers 50 M€, le réassureur paie 130 M€. Prime de réassurance : ~15 M€/an.',
      finnSays:
        'La réassurance, c\'est le filet de sécurité de l\'assureur : quand la tempête du siècle arrive, c\'est le réassureur qui éponge les pertes au-delà du seuil !',
    },
  },

  // ─── Leçon 12 : Cat Bonds ────────────────
  {
    id: 'ins-12',
    title: 'Cat Bonds',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les Cat bonds (obligations catastrophe) transfèrent le risque de catastrophe naturelle aux marchés de capitaux. En cas de catastrophe, les investisseurs perdent leur capital au profit de l\'assureur.',
      keyPoints: [
        'Transfert de risque de l\'assureur aux investisseurs (ILS - Insurance-Linked Securities)',
        'Trigger : paramétrique (magnitude), indiciaire (perte industrie) ou indemnité (perte réelle)',
        'Rendement élevé : Euribor + 5-15% (prime de risque catastrophe)',
        'Décorrélation : les catastrophes naturelles sont indépendantes des marchés financiers',
      ],
      explanation:
        'Un cat bond est émis via un SPV (Special Purpose Vehicle). Les investisseurs versent le principal au SPV, qui le place en collatéral (T-bills). L\'assureur/sponsor paie une prime périodique au SPV, qui la reverse aux investisseurs avec les intérêts du collatéral. Si une catastrophe survient et déclenche le trigger, le collatéral est versé à l\'assureur pour payer les sinistres : les investisseurs perdent partiellement ou totalement leur capital. Si aucune catastrophe ne survient, les investisseurs récupèrent le principal + les coupons.',
      formula: 'Coupon cat bond = Taux sans risque + Prime de risque catastrophe\nPerte espérée annuelle (EL) : typiquement 1-3%',
      example:
        'Cat bond ouragan Floride : notionnel 300 M€, maturité 3 ans, trigger paramétrique (ouragan cat 4+). Coupon = Euribor + 8%. Perte espérée 2%/an. Si un ouragan cat 4 frappe la Floride, les investisseurs perdent jusqu\'à 100% du principal.',
      finnSays:
        'Les cat bonds, c\'est de la réassurance via les marchés financiers : haut rendement pour les investisseurs, mais si la catastrophe frappe, c\'est eux qui paient !',
    },
  },

  // ─── Leçon 13 : Cas SCR ─────────────────
  {
    id: 'ins-13',
    title: 'Cas Pratique : Calcul du SCR',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Calculons le SCR d\'un assureur mixte (vie + non-vie) en appliquant la formule standard Solvabilité II, avec agrégation et diversification.',
      keyPoints: [
        'Calculer les SCR par module de risque',
        'Agréger avec les matrices de corrélation',
        'Mesurer le bénéfice de diversification',
        'Calculer le ratio de solvabilité',
      ],
      explanation:
        'Données : SCR marché = 400 M€ (dont actions 200, taux 150, spread 100, immo 80, diversifié à 400). SCR vie = 300 M€ (mortalité 100, longévité 150, rachat 120, diversifié à 300). SCR non-vie = 200 M€ (primes 120, réserves 100, CAT 80, diversifié à 200). SCR contrepartie = 50 M€. Corrélations EIOPA : marché/vie = 0.25, marché/non-vie = 0.25, vie/non-vie = 0. BSCR = √(400²+300²+200²+50²+2×0.25×400×300+2×0.25×400×200) = √(160000+90000+40000+2500+60000+40000) = √392500 ≈ 626 M€. SCR opérationnel = 50 M€. SCR total = 676 M€. Fonds propres = 1 050 M€. Ratio = 155%.',
      formula: 'BSCR = √(Σ Corr(i,j) × SCR_i × SCR_j)\nSCR total = BSCR + SCR opérationnel\nRatio = Own Funds / SCR',
      example:
        'SCR total = 676 M€ vs somme brute = 950 M€. Bénéfice de diversification = 274 M€ (29%). Ratio de solvabilité = 1050/676 = 155%. L\'assureur est au-dessus du seuil de confort (150%) mais sans marge excédentaire importante.',
      finnSays:
        'Le calcul du SCR, c\'est comme un puzzle : chaque risque est une pièce, et la diversification réduit la taille du puzzle final. C\'est la magie des corrélations !',
    },
  },

  // ─── Leçon 14 : Examen Final ─────────────
  {
    id: 'ins-14',
    title: 'Examen Final : Assurance & Actuariat',
    xp: 200,
    duration: '45 min',
    content: {
      introduction:
        'Cet examen final couvre l\'ensemble de l\'actuariat et de l\'assurance : tarification, provisionnement, Solvabilité II, IFRS 17, réassurance et transfert de risque.',
      keyPoints: [
        'Maîtriser la tarification (fréquence × coût moyen, GLM)',
        'Comprendre les provisions techniques (PSAP, IBNR, Best Estimate)',
        'Calculer et interpréter le SCR et le ratio de solvabilité',
        'Connaître IFRS 17 (CSM, BBA) et les mécanismes de réassurance',
      ],
      explanation:
        'L\'assurance est un métier technique qui combine actuariat (mathématiques du risque), finance (gestion d\'actifs) et réglementation (Solvabilité II, IFRS 17). La tarification détermine le prix du risque. Les provisions mesurent les engagements. Le SCR quantifie le capital nécessaire. La réassurance transfère les risques extrêmes. Les cat bonds apportent une capacité supplémentaire via les marchés de capitaux. L\'actuaire doit naviguer entre prudence technique et compétitivité commerciale.',
      example:
        'Formules clés : Prime pure = Fréquence × Coût moyen. BE = Σ E[CF]/discount. RM = 6% × Σ SCR_t actualisé. SCR = VaR 99.5% à 1 an. Ratio = Own Funds / SCR. Cat XL : Max(0, Min(Sinistre-Priorité, Portée)).',
      finnSays:
        'L\'assurance, c\'est la science de la prévision des risques. Chaque formule que tu as apprise est un outil pour protéger les gens et les entreprises contre l\'imprévu !',
    },
  },
];
