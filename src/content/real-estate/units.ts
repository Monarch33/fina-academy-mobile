// ──────────────────────────────────────────────
//  FINA - Finance Immobilière : Lessons
// ──────────────────────────────────────────────

import type { Lesson } from '../types';

export const realEstateLessons: Lesson[] = [
  // ─── Leçon 1 : Fondamentaux ─────────────────
  {
    id: 're-1',
    title: 'Fondamentaux de l\'immobilier',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'immobilier est la plus grande classe d\'actifs au monde (~330 000 Md$). Ses caractéristiques uniques — illiquidité, hétérogénéité, ancrage local — en font un investissement à part.',
      keyPoints: [
        'Classe d\'actifs la plus importante au monde en valeur',
        'Caractéristiques : illiquidité, coûts de transaction élevés, information asymétrique',
        'Rendement = revenus locatifs + plus-value en capital',
        'Cycle immobilier : expansion, offre excédentaire, récession, reprise',
      ],
      explanation:
        'L\'immobilier se distingue des actifs financiers classiques par son caractère tangible, sa localisation fixe et son illiquidité. Chaque bien est unique, ce qui rend la valorisation complexe. Les rendements proviennent de deux sources : le flux de loyers (income return) et l\'appréciation du capital (capital return). L\'immobilier offre une protection partielle contre l\'inflation (les loyers sont souvent indexés) et une faible corrélation avec les actions, ce qui en fait un outil de diversification.',
      example:
        'Un investisseur achète un immeuble de bureaux à La Défense pour 50 M€, avec un loyer annuel de 3.5 M€ (rendement locatif 7%). Après 5 ans, il le revend 55 M€ (+10%). Rendement total annualisé ≈ 9%.',
      finnSays:
        'L\'immobilier, c\'est du concret : tu peux toucher ton investissement ! Mais attention, c\'est aussi plus dur à vendre qu\'une action.',
    },
  },

  // ─── Leçon 2 : Classes d\'actifs ────────────
  {
    id: 're-2',
    title: 'Classes d\'actifs immobiliers',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'immobilier se décline en plusieurs segments : bureaux, commerce, logistique, résidentiel, hôtellerie et actifs alternatifs. Chaque segment a ses propres dynamiques de marché.',
      keyPoints: [
        'Bureaux : sensibles au cycle économique, flexibilité post-Covid',
        'Commerce : retail parks, centres commerciaux, high street',
        'Logistique : boom e-commerce, entrepôts « last mile »',
        'Résidentiel : PRS (Private Rented Sector), coliving, résidences étudiantes',
      ],
      explanation:
        'Les bureaux représentent historiquement le plus gros segment d\'investissement en Europe, mais le télétravail a rebattu les cartes. La logistique (entrepôts, data centers) bénéficie de la croissance du e-commerce. Le commerce est en transformation structurelle (fermetures de centres commerciaux vs renouveau du retail de proximité). Le résidentiel (build-to-rent, coliving) offre des revenus stables. Les actifs alternatifs (santé, éducation, self-storage) sont en forte croissance.',
      example:
        'Rendements prime 2024 en France : bureaux Paris QCA 3.5%, logistique Île-de-France 4.5%, commerce high street 3.0%, résidentiel Paris 2.5%. La logistique offre le meilleur spread vs taux sans risque.',
      finnSays:
        'L\'immobilier n\'est pas monolithique : bureaux, logistique, commerce, résidentiel... chaque segment a ses propres règles du jeu !',
    },
  },

  // ─── Leçon 3 : DCF Immobilier ─────────────
  {
    id: 're-3',
    title: 'DCF appliqué à l\'immobilier',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le DCF (Discounted Cash Flow) immobilier actualise les flux de trésorerie futurs d\'un bien (loyers nets, valeur de revente) pour en déterminer la valeur actuelle.',
      keyPoints: [
        'Cash-flows : loyers bruts − charges − vacance − capex',
        'Valeur terminale : revente à la fin de la période de détention',
        'Taux d\'actualisation : coût du capital ajusté au risque immobilier',
        'Période de projection typique : 5 à 10 ans',
      ],
      explanation:
        'Le DCF immobilier projette les revenus locatifs nets sur une période de détention (généralement 10 ans), en tenant compte de la vacance, des charges non récupérables, des travaux (capex) et de l\'indexation des loyers. La valeur terminale est calculée en appliquant un taux de capitalisation de sortie (exit cap rate) au NOI de la dernière année. Le taux d\'actualisation reflète le risque de l\'actif : taux sans risque + prime immobilière (illiquidité, obsolescence) + prime spécifique (localisation, qualité).',
      formula: 'V = Σ (NOI_t / (1+r)^t) + (NOI_n+1 / cap rate sortie) / (1+r)^n',
      example:
        'Immeuble : NOI an 1 = 2 M€, croissance 2%/an, exit cap rate 5.5%, taux d\'actualisation 7%, détention 10 ans. V terminale = 2×1.02^10 / 0.055 = 44.3 M€. Valeur DCF ≈ 37 M€.',
      finnSays:
        'Le DCF immobilier, c\'est prévoir tous les loyers que tu vas encaisser et la vente finale, puis ramener tout ça en euros d\'aujourd\'hui !',
    },
  },

  // ─── Leçon 4 : Cap Rate ──────────────────
  {
    id: 're-4',
    title: 'Taux de Capitalisation (Cap Rate)',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Le cap rate est le ratio rendement/valeur le plus utilisé en immobilier. Il permet de comparer des actifs entre eux et d\'estimer rapidement la valeur d\'un bien.',
      keyPoints: [
        'Cap rate = NOI / Valeur du bien',
        'Inverse du PER en bourse : plus le cap rate est bas, plus l\'actif est cher',
        'Cap rate prime : meilleure localisation, meilleure qualité',
        'Compression de cap rate = appréciation en capital',
      ],
      explanation:
        'Le cap rate (taux de capitalisation) mesure le rendement locatif non leveragé d\'un bien immobilier. Un cap rate de 5% signifie que le bien génère 5% de son prix en loyer net annuel. Les cap rates varient selon la localisation (Paris < Lyon < Province), le type d\'actif (bureau prime < logistique < commerce secondaire) et les conditions de marché. Quand les taux d\'intérêt montent, les cap rates suivent (décompression) et les valeurs baissent.',
      formula: 'Cap rate = NOI / Valeur\nValeur = NOI / Cap rate',
      example:
        'Un immeuble génère 3 M€ de NOI. Cap rate de marché = 5%. Valeur estimée = 3/0.05 = 60 M€. Si le cap rate se compresse à 4.5% (marché haussier), la valeur monte à 66.7 M€ (+11%).',
      finnSays:
        'Le cap rate, c\'est le thermomètre du marché immobilier. Quand il baisse, les prix montent. Quand il monte, attention à la douche froide !',
    },
  },

  // ─── Leçon 5 : NOI ───────────────────────
  {
    id: 're-5',
    title: 'Net Operating Income (NOI)',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Le NOI (Net Operating Income) est le revenu opérationnel net d\'un bien immobilier. C\'est la mesure de performance la plus importante, avant financement et impôts.',
      keyPoints: [
        'NOI = Revenus locatifs bruts − Charges opérationnelles',
        'Exclut le service de la dette, l\'amortissement et les impôts',
        'Charges : gestion, maintenance, assurance, taxes foncières, vacance',
        'Operating Expense Ratio (OER) : typiquement 25-45% des revenus bruts',
      ],
      explanation:
        'Le NOI se calcule en partant des revenus locatifs bruts potentiels (100% d\'occupation au loyer de marché), en déduisant la vacance et les impayés, puis les charges opérationnelles (property management, entretien courant, assurances, taxes foncières). Les charges récupérables sur les locataires (charges communes) ne sont pas incluses. Le NOI est la base du cap rate et du DCF. Il permet de comparer des actifs indépendamment de leur structure de financement.',
      formula: 'NOI = Loyers bruts potentiels − Vacance/Impayés − Charges opérationnelles',
      example:
        'Immeuble de 20 lots : loyers bruts potentiels 500 K€, vacance 5% (25 K€), charges 150 K€ (taxes foncières 60K, gestion 40K, entretien 30K, assurance 20K). NOI = 500 - 25 - 150 = 325 K€. OER = 150/475 = 31.6%.',
      finnSays:
        'Le NOI, c\'est ce que l\'immeuble te rapporte vraiment une fois toutes les factures payées. Pas de triche possible !',
    },
  },

  // ─── Leçon 6 : Cash-on-Cash Return ────────
  {
    id: 're-6',
    title: 'Cash-on-Cash Return',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Le cash-on-cash return mesure le rendement sur l\'apport personnel de l\'investisseur, après paiement de la dette. C\'est le rendement qui intéresse directement l\'investisseur leveragé.',
      keyPoints: [
        'Cash-on-cash = Cash-flow après dette / Apport en equity',
        'Prend en compte l\'effet de levier du financement',
        'Supérieur au cap rate si le coût de la dette < cap rate (levier positif)',
        'Inférieur au cap rate si le coût de la dette > cap rate (levier négatif)',
      ],
      explanation:
        'Le cash-on-cash return (CoC) est le rendement sur cash investi par l\'investisseur. Si un bien coûte 10 M€ avec 3 M€ d\'equity et 7 M€ de dette, le CoC mesure le cash-flow annuel net (après service de la dette) rapporté aux 3 M€ d\'apport. L\'effet de levier amplifie le rendement quand le cap rate est supérieur au coût de la dette (levier positif) et le détruit dans le cas contraire (levier négatif). Le CoC est un indicateur pré-impôt et pre-appréciation.',
      formula: 'CoC = (NOI − Service dette annuel) / Equity investie',
      example:
        'Bien à 10 M€, NOI 600 K€ (cap rate 6%), dette 7 M€ à 4% (annuité 420 K€ intérêt seul). Cash-flow = 600 - 420 = 180 K€. CoC = 180/3000 = 6%. Si taux monte à 6%, CoC = 600-420/3000 = 6%... mais 7M×6% = 420K → CoC = (600-420)/3000 = 6%. Avec 7M à 7% = 490K → CoC = 110/3000 = 3.7% (levier négatif).',
      finnSays:
        'Le cash-on-cash, c\'est le rendement réel de TON argent, pas celui de la banque. C\'est la seule mesure qui compte pour ton portefeuille !',
    },
  },

  // ─── Leçon 7 : Financement Immobilier ─────
  {
    id: 're-7',
    title: 'Financement Immobilier',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le financement immobilier combine dette senior, dette mezzanine et equity. La structure de capital optimale maximise le rendement tout en maîtrisant le risque.',
      keyPoints: [
        'Dette senior : 50-70% LTV, taux le plus bas, prioritaire en cas de défaut',
        'Dette mezzanine : 70-85% LTV, taux plus élevé, subordonnée',
        'Equity : 15-50%, absorbe les premières pertes, rendement le plus élevé',
        'Covenants : LTV max, DSCR min, ICR min',
      ],
      explanation:
        'La dette senior est le financement le moins cher (Euribor + 150-300 bps pour du prime) car le prêteur est prioritaire et protégé par l\'hypothèque. La dette mezzanine (Euribor + 500-1000 bps) comble le gap entre la dette senior et l\'equity. L\'equity supporte le risque résiduel et exige un rendement cible (IRR) de 8-20% selon la stratégie (core, value-add, opportunistic). Les covenants classiques sont le LTV maximum (60-70%), le DSCR minimum (1.2-1.5x) et l\'ICR minimum (2.0x).',
      formula: 'ICR = NOI / Intérêts annuels ≥ 2.0x\nDSCR = NOI / Service total de la dette ≥ 1.2x',
      example:
        'Acquisition d\'un immeuble à 100 M€. Structure : dette senior 60 M€ (Euribor+2%, LTV 60%), mezzanine 15 M€ (Euribor+7%, LTV 75%), equity 25 M€. NOI de 6 M€. ICR = 6/(1.2+1.05) = 2.7x. DSCR (si amortissement 2%) = 6/(1.2+1.05+1.5) = 1.6x.',
      finnSays:
        'Le financement immo, c\'est un millefeuille : dette senior en bas, mezzanine au milieu, equity en haut. Chaque couche a son rendement et son risque !',
    },
  },

  // ─── Leçon 8 : LTV et DSCR ───────────────
  {
    id: 're-8',
    title: 'LTV et DSCR',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le LTV (Loan-to-Value) et le DSCR (Debt Service Coverage Ratio) sont les deux ratios fondamentaux du crédit immobilier. Ils déterminent la capacité d\'emprunt et le risque du prêteur.',
      keyPoints: [
        'LTV = Montant du prêt / Valeur du bien (typiquement ≤ 60-70%)',
        'DSCR = NOI / Service annuel de la dette (typiquement ≥ 1.2-1.5x)',
        'Le prêteur retient le montant le plus conservateur des deux contraintes',
        'LTV day-1 vs LTV de marché : réévaluation périodique',
      ],
      explanation:
        'Le LTV mesure le levier : un LTV de 60% signifie que le prêt représente 60% de la valeur et l\'equity 40%. Le DSCR mesure la capacité des revenus à couvrir le service de la dette. Un DSCR de 1.3x signifie que le NOI couvre 130% du service de la dette. Le prêteur calcule le montant maximum selon chaque contrainte et retient le minimum. En cas de breach de covenant (LTV > max ou DSCR < min), la banque peut exiger un remboursement partiel (cash sweep/cash trap) ou un apport d\'equity supplémentaire.',
      formula: 'Montant max (LTV) = Valeur × LTV max\nMontant max (DSCR) = NOI / (DSCR min × Taux constant d\'annuité)',
      example:
        'Bien de 50 M€, NOI 3 M€, taux tout-in 4.5%, amortissement 25 ans. Max LTV 65% → 32.5 M€. Max DSCR 1.3x → NOI/1.3 = 2.31 M€ d\'annuité max → dette max ≈ 34 M€. Contrainte active : LTV (32.5 M€).',
      finnSays:
        'LTV et DSCR, ce sont les deux garde-fous du banquier immobilier. L\'un regarde la valeur, l\'autre regarde les revenus. Les deux doivent être au vert !',
    },
  },

  // ─── Leçon 9 : REIT Principes ────────────
  {
    id: 're-9',
    title: 'REIT : Principes fondamentaux',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les REITs (Real Estate Investment Trusts) permettent d\'investir en immobilier via les marchés financiers. Cotés en bourse, ils offrent liquidité, transparence et accès à un portefeuille diversifié.',
      keyPoints: [
        'Obligation de distribution : ≥ 90% des bénéfices (US) ou 95% (SIIC France)',
        'Exonération d\'IS en contrepartie de la distribution obligatoire',
        'Transparence fiscale : l\'impôt est payé au niveau de l\'investisseur',
        'Corrélation actions court terme, corrélation immobilier long terme',
      ],
      explanation:
        'Un REIT est une société d\'investissement immobilier qui détient et gère un portefeuille d\'actifs. En échange de l\'obligation de distribuer la quasi-totalité de ses bénéfices, le REIT bénéficie de la transparence fiscale (pas d\'IS). En France, le régime SIIC (Sociétés d\'Investissement Immobilier Cotées) impose la distribution de 95% des loyers et 70% des plus-values. Les REITs se comportent comme des actions à court terme (volatilité, corrélation marchés) mais convergent vers l\'immobilier direct à long terme (5+ ans).',
      example:
        'Unibail-Rodamco-Westfield (SIIC) : capitalisation 10 Md€, portefeuille de 80 centres commerciaux premium en Europe et aux US, distribution ~8€/action (rendement ~8%).',
      finnSays:
        'Un REIT, c\'est de l\'immobilier en version boursière : tu touches tes loyers sous forme de dividendes, et tu peux vendre en un clic !',
    },
  },

  // ─── Leçon 10 : REIT Analyse ─────────────
  {
    id: 're-10',
    title: 'REIT : Analyse financière',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'analyse d\'un REIT utilise des métriques spécifiques : FFO (Funds From Operations), AFFO, NAV (Net Asset Value) et prime/décote sur NAV.',
      keyPoints: [
        'FFO = Résultat net + Amortissements − Plus-values de cession',
        'AFFO = FFO − Capex de maintenance (mesure du cash-flow récurrent)',
        'NAV = Valeur des actifs − Dettes (valeur liquidative)',
        'P/FFO : multiple de valorisation (équivalent du PER)',
      ],
      explanation:
        'Le FFO (Funds From Operations) ajuste le résultat net en rajoutant l\'amortissement (charge non cash) et en retirant les plus-values de cession (non récurrentes). L\'AFFO déduit en plus les dépenses d\'investissement de maintenance pour obtenir le cash-flow récurrent distribuable. La NAV est la valeur liquidative du portefeuille immobilier moins la dette. Si le cours de bourse est inférieur à la NAV (décote), le marché valorise les actifs moins cher que leur valeur d\'expertise.',
      formula: 'FFO = Résultat net + Amortissements − Plus-values\nAFFO = FFO − Capex maintenance\nP/NAV = Cours / NAV par action',
      example:
        'Klépierre : NAV par action = 30€, cours = 24€ → décote de 20%. FFO/action = 2.2€, P/FFO = 24/2.2 = 10.9x. Dividende 2.1€ → rendement 8.75%. La décote suggère que le marché anticipe une baisse de valeur des centres commerciaux.',
      finnSays:
        'En REIT, oublie le PER classique : c\'est le FFO et la NAV qui comptent. Une grosse décote sur NAV peut être une opportunité... ou un piège !',
    },
  },

  // ─── Leçon 11 : SCPI et OPCI ────────────
  {
    id: 're-11',
    title: 'SCPI et OPCI',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les SCPI (Sociétés Civiles de Placement Immobilier) et OPCI (Organismes de Placement Collectif en Immobilier) sont les véhicules français d\'investissement immobilier collectif non coté.',
      keyPoints: [
        'SCPI : « pierre-papier », investissement 100% immobilier physique',
        'OPCI : 60% minimum immobilier + 5% liquidité + actifs financiers',
        'SCPI de rendement : distribution de 4-6% historiquement',
        'Frais de souscription élevés (8-12%) mais pas de frais de gestion séparés',
      ],
      explanation:
        'Les SCPI collectent l\'épargne pour acheter et gérer un patrimoine immobilier. Elles distribuent les loyers sous forme de revenus fonciers (imposés à la TMI + 17.2% PS). Les SCPI se déclinent en SCPI de rendement (bureaux, commerces), SCPI fiscales (Pinel, Malraux) et SCPI de plus-value. Les OPCI offrent plus de liquidité (obligation de rachat) grâce à une poche financière (actions, obligations). Le ticket d\'entrée est faible (quelques centaines d\'euros pour une SCPI) comparé à l\'immobilier direct.',
      example:
        'Un investisseur place 50 000€ dans une SCPI de bureaux européenne. Rendement distribué : 5.2% soit 2 600€/an. Frais de souscription : 10% (récupérés sur ~8-10 ans). Prix de part revalorisé de +1.5%/an en moyenne.',
      finnSays:
        'La SCPI, c\'est l\'immobilier sans les tracas : pas de locataire à gérer, pas de travaux. Tu touches tes loyers comme un dividende !',
    },
  },

  // ─── Leçon 12 : Promotion Immobilière ─────
  {
    id: 're-12',
    title: 'Promotion Immobilière',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La promotion immobilière consiste à développer un projet (acquisition foncière, construction, commercialisation) pour créer de la valeur. C\'est l\'activité la plus rentable mais aussi la plus risquée de l\'immobilier.',
      keyPoints: [
        'Marge de promotion : typiquement 8-15% du CA',
        'VEFA (Vente en l\'État Futur d\'Achèvement) : pré-commercialisation avant construction',
        'Risques : foncier, permis de construire, construction, commercialisation',
        'Financement : equity 15-25%, dette promoteur, VEFA (appels de fonds)',
      ],
      explanation:
        'Le bilan promoteur se construit en partant du prix de vente projeté et en déduisant les coûts (foncier, construction, honoraires, frais financiers, commercialisation) pour obtenir la marge. La charge foncière représente typiquement 20-35% du budget. Le promoteur commence par sécuriser le foncier (sous conditions suspensives), obtenir le permis de construire, pré-commercialiser en VEFA (60-70% requis par la banque), puis construire. Le risque principal est le risque de commercialisation en phase de retournement de marché.',
      formula: 'Marge promoteur = Prix de vente − (Foncier + Construction + Honoraires + Frais financiers + Commercialisation)',
      example:
        'Programme de 50 logements à Lyon. CA prévisionnel : 15 M€. Foncier : 3.5 M€, construction : 7 M€, honoraires : 1.5 M€, frais financiers : 0.5 M€, commercialisation : 0.8 M€. Marge = 15 - 13.3 = 1.7 M€ (11.3%).',
      finnSays:
        'La promotion, c\'est transformer un terrain en immeuble et une marge de 10%. Mais gare au retournement de marché en cours de chantier !',
    },
  },

  // ─── Leçon 13 : Due Diligence Immo ────────
  {
    id: 're-13',
    title: 'Due Diligence Immobilière',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La due diligence immobilière est l\'audit complet d\'un bien avant acquisition : technique, juridique, environnementale, fiscale et locative.',
      keyPoints: [
        'DD technique : état du bâtiment, DPE, amiante, structure, toiture',
        'DD juridique : titres de propriété, urbanisme, servitudes, baux',
        'DD environnementale : pollution des sols, inondation, classement',
        'DD financière : analyse des loyers, charges, capex à prévoir',
      ],
      explanation:
        'La DD technique identifie les travaux nécessaires (capex) et les risques structurels. Un audit DPE (Diagnostic de Performance Énergétique) est crucial : les passoires thermiques (F, G) seront interdites à la location. La DD juridique vérifie les titres de propriété, les baux en cours (durée, indexation, clauses), le PLU (Plan Local d\'Urbanisme) et les servitudes. La DD environnementale couvre les risques de pollution (ancien site industriel) et les risques naturels. Le budget DD représente typiquement 0.5-1% du prix d\'acquisition.',
      example:
        'Acquisition d\'un immeuble de bureaux des années 1990. La DD révèle : remplacement de la CVC nécessaire (1.5 M€), DPE classe E (mise aux normes requise d\'ici 2030, 3 M€), un bail locataire à échéance dans 6 mois. L\'acheteur renégocie le prix de 5 M€.',
      finnSays:
        'La due diligence, c\'est ausculter l\'immeuble sous toutes les coutures avant de signer. Mieux vaut trouver les problèmes AVANT d\'acheter !',
    },
  },

  // ─── Leçon 14 : Cycle Immobilier ──────────
  {
    id: 're-14',
    title: 'Le Cycle Immobilier',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'L\'immobilier évolue selon des cycles de 7 à 18 ans, avec quatre phases : reprise, expansion, offre excédentaire et récession. Comprendre le cycle est essentiel pour timer ses investissements.',
      keyPoints: [
        'Phase 1 - Reprise : vacance élevée, loyers bas, peu de construction',
        'Phase 2 - Expansion : vacance en baisse, loyers en hausse, nouvelles constructions',
        'Phase 3 - Offre excédentaire : vacance commence à remonter, pic de livraisons',
        'Phase 4 - Récession : vacance élevée, loyers en baisse, arrêt de la construction',
      ],
      explanation:
        'Le cycle immobilier est décalé par rapport au cycle économique à cause du temps de construction (2-5 ans entre la décision et la livraison). Pendant l\'expansion, la demande dépasse l\'offre, les loyers montent et les promoteurs lancent des projets. Quand ces projets sont livrés, le marché peut déjà avoir ralenti → offre excédentaire. Les taux d\'intérêt amplifient le cycle : des taux bas compriment les cap rates (hausse des prix), des taux hauts les décompriment (baisse des prix). L\'investisseur avisé achète en phase de reprise et vend en phase d\'expansion.',
      example:
        'Le marché des bureaux parisiens post-Covid : taux bas + demande forte (2021) → cap rates à 3% (pic des prix). Hausse des taux 2022-2023 → cap rates remontent à 4.5%, prix chutent de ~25%. Phase de récession/début de reprise en 2025.',
      finnSays:
        'Le cycle immobilier est le meilleur ami de l\'investisseur patient : acheter quand personne n\'en veut, vendre quand tout le monde en veut !',
    },
  },

  // ─── Leçon 15 : Cas Immeuble ─────────────
  {
    id: 're-15',
    title: 'Cas Pratique : Analyse d\'un Immeuble',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Analysons l\'acquisition d\'un immeuble de bureaux à Lyon Part-Dieu. Nous calculerons le NOI, le cap rate, structurerons le financement et estimerons le rendement pour l\'investisseur.',
      keyPoints: [
        'Calcul complet du NOI et du cap rate going-in',
        'Structuration du financement (LTV, DSCR)',
        'Projection des cash-flows sur 7 ans (DCF)',
        'IRR et cash-on-cash pour l\'investisseur equity',
      ],
      explanation:
        'L\'immeuble : 5 000 m² de bureaux, loyer 250€/m²/an, taux d\'occupation 92%. Revenus bruts = 1 250 K€, vacance 100 K€, charges 280 K€ → NOI = 870 K€. Prix : 15 M€ → cap rate going-in = 5.8%. Financement : dette senior 9 M€ (60% LTV, Euribor+2.5% = 5.5%), equity 6 M€. Annuité = 495 K€ (intérêts seuls). Cash-flow après dette = 375 K€. CoC = 375/6000 = 6.25%. Projection : croissance loyers 2%/an, exit cap rate 5.5% à 7 ans. Valeur de sortie ≈ 17.3 M€. IRR equity ≈ 12%.',
      formula: 'IRR equity = TRI des flux [-6M, +375K, +375K, ..., +375K + (17.3M - 9M)]',
      example:
        'Résumé : Prix 15 M€, NOI 870 K€ (cap rate 5.8%), dette 9 M€ (60% LTV, DSCR 1.76x), CoC 6.25%, IRR equity projeté 12% sur 7 ans. Le DSCR de 1.76x laisse une marge confortable.',
      finnSays:
        'Un bon deal immobilier, c\'est un cap rate attractif, un financement raisonnable et une vision claire de la sortie. Tout se joue dans les chiffres !',
    },
  },

  // ─── Leçon 16 : Examen Final ─────────────
  {
    id: 're-16',
    title: 'Examen Final : Finance Immobilière',
    xp: 200,
    duration: '45 min',
    content: {
      introduction:
        'Cet examen final couvre l\'ensemble de la finance immobilière : valorisation, financement, véhicules d\'investissement et analyse de projet.',
      keyPoints: [
        'Maîtriser NOI, cap rate, DCF et cash-on-cash',
        'Structurer un financement immobilier (LTV, DSCR, ICR)',
        'Analyser un REIT (FFO, NAV, décote) et comparer avec les SCPI',
        'Conduire une due diligence et comprendre le cycle immobilier',
      ],
      explanation:
        'La finance immobilière repose sur des fondamentaux clairs : le NOI mesure la performance de l\'actif, le cap rate sa valorisation relative, le DCF sa valeur intrinsèque. Le financement amplifie les rendements (levier positif) ou les détruit (levier négatif). Les REITs et SCPI démocratisent l\'accès à l\'immobilier. La due diligence et la compréhension du cycle sont essentielles pour éviter les erreurs coûteuses. L\'investisseur immobilier performant combine analyse quantitative et connaissance terrain.',
      example:
        'Métriques clés à retenir : Cap rate = NOI/Valeur, CoC = Cash-flow après dette/Equity, LTV ≤ 60-70%, DSCR ≥ 1.2-1.5x, FFO = Résultat net + Amortissements − Plus-values, Marge promotion ≈ 8-15%.',
      finnSays:
        'L\'immobilier est une classe d\'actifs fascinante : tangible, générateur de revenus et créateur de richesse sur le long terme. Mais il faut maîtriser les chiffres !',
    },
  },
];
