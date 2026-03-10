// ──────────────────────────────────────────────
//  FINA - Les Fondamentaux : 24 Lessons
// ──────────────────────────────────────────────

export interface LessonContent {
  introduction: string;
  keyPoints: string[];
  explanation: string;
  formula?: string;
  example?: string;
  finnSays: string;
}

export interface Lesson {
  id: string;
  title: string;
  xp: number;
  duration: string;
  content: LessonContent;
}

export interface Unit {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const FUNDAMENTALS_UNITS: Unit[] = [
  // ── UNIT 1 : Les États Financiers ──────────────
  {
    id: 'financial-statements',
    title: 'Les États Financiers',
    lessons: [
      {
        id: 'balance-sheet',
        title: 'Le bilan comptable',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'Le bilan comptable est une photographie du patrimoine d\'une entreprise à un instant donné. Il repose sur l\'équation fondamentale : Actif = Passif + Capitaux propres. Comprendre le bilan est la première étape de toute analyse financière.',
          keyPoints: [
            'L\'actif représente ce que l\'entreprise possède (immobilisations, stocks, créances, trésorerie)',
            'Le passif représente ce que l\'entreprise doit (dettes financières, fournisseurs, provisions)',
            'Les capitaux propres mesurent la richesse nette des actionnaires',
            'Le bilan est toujours équilibré : Actif = Passif + Capitaux Propres',
            'On distingue les éléments courants (< 1 an) des éléments non courants (> 1 an)',
          ],
          explanation:
            'Le bilan se divise en deux grandes parties. À gauche (ou en haut), l\'actif recense l\'ensemble des ressources économiques contrôlées par l\'entreprise. On y trouve les actifs non courants (immobilisations corporelles comme les usines, incorporelles comme les brevets, et financières comme les participations) et les actifs courants (stocks, créances clients, disponibilités). À droite (ou en bas), le passif recense les sources de financement. Les capitaux propres comprennent le capital social, les réserves et le résultat net. Les passifs non courants incluent les dettes à long terme (emprunts obligataires, dettes bancaires). Les passifs courants regroupent les dettes fournisseurs, les dettes fiscales et la part à court terme des emprunts. L\'analyse du bilan permet d\'évaluer la solvabilité (l\'entreprise peut-elle honorer ses engagements ?), la structure financière (quel est le poids de la dette ?) et la liquidité (l\'entreprise peut-elle faire face à ses échéances à court terme ?). En normes IFRS, le bilan est appelé « état de la situation financière ». Le Vernimmen insiste sur l\'importance de lire le bilan en lien avec le compte de résultat et le tableau de flux pour obtenir une vision complète.',
          formula: 'Actif = Capitaux Propres + Passif',
          example:
            'LVMH (bilan 2023) : Actif total = 109 Md€, dont 45 Md€ d\'immobilisations incorporelles (marques), 15 Md€ de stocks. Capitaux propres = 48 Md€, dette financière nette = 12 Md€. Le ratio dette nette / capitaux propres = 25 %, signe d\'une structure financière solide.',
          finnSays:
            'Le bilan, c\'est comme une photo de famille de l\'entreprise : tout le monde doit y être, actifs comme dettes. Et surtout, ça doit être équilibré !',
        },
      },
      {
        id: 'income-statement',
        title: 'Le compte de résultat',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'Le compte de résultat mesure la performance économique d\'une entreprise sur une période donnée (généralement un exercice). Il retrace l\'ensemble des produits et des charges pour aboutir au résultat net.',
          keyPoints: [
            'Le chiffre d\'affaires est le point de départ : il mesure les ventes de l\'exercice',
            'L\'EBITDA mesure la performance opérationnelle avant amortissements et éléments financiers',
            'L\'EBIT (résultat opérationnel) intègre les dotations aux amortissements',
            'Le résultat net est le « bottom line » après impôts et éléments financiers',
            'La marge nette = Résultat net / Chiffre d\'affaires',
          ],
          explanation:
            'Le compte de résultat se lit de haut en bas, en cascade. On part du chiffre d\'affaires (CA), duquel on soustrait les coûts des biens vendus (COGS) pour obtenir la marge brute. Ensuite, on retire les charges opérationnelles (salaires, loyers, marketing) pour arriver à l\'EBITDA (Earnings Before Interest, Taxes, Depreciation & Amortization). L\'EBITDA est un indicateur clé car il approxime la génération de cash opérationnel. En retirant les dotations aux amortissements et provisions, on obtient l\'EBIT ou résultat opérationnel. Le résultat financier (produits et charges d\'intérêts) est ensuite ajouté pour donner le résultat avant impôts. Après déduction de l\'impôt sur les sociétés, on arrive au résultat net. Les analystes suivent particulièrement les marges (marge brute, marge EBITDA, marge opérationnelle, marge nette) car elles permettent de comparer des entreprises de tailles différentes. Un compte de résultat « normalisé » exclut les éléments exceptionnels pour refléter la performance récurrente.',
          formula: 'Résultat Net = CA - COGS - Charges opérationnelles - D&A - Charges financières - Impôts',
          example:
            'TotalEnergies (2023) : CA = 218 Md€, EBITDA = 51 Md€ (marge 23 %), EBIT = 32 Md€, Résultat net = 21 Md€ (marge nette ~10 %). La différence entre EBITDA et EBIT reflète les lourds amortissements des actifs industriels.',
          finnSays:
            'Le compte de résultat, c\'est le film de l\'année. Le chiffre d\'affaires est le premier plan, le résultat net est le dénouement. Et comme au cinéma, ce qui compte c\'est l\'histoire entre les deux !',
        },
      },
      {
        id: 'cash-flow-statement',
        title: 'Les flux de trésorerie',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'Le tableau de flux de trésorerie (cash flow statement) retrace les entrées et sorties de cash sur l\'exercice. Il réconcilie le résultat comptable avec la variation réelle de trésorerie, car « cash is king ».',
          keyPoints: [
            'Les flux opérationnels partent du résultat net et ajustent les éléments non-cash',
            'Les flux d\'investissement reflètent les CAPEX et les acquisitions',
            'Les flux de financement couvrent les émissions de dette, rachats d\'actions et dividendes',
            'La somme des trois flux = variation de trésorerie nette',
            'Le passage du résultat net au cash opérationnel est crucial pour détecter les manipulations',
          ],
          explanation:
            'Le tableau de flux de trésorerie se décompose en trois parties. Les flux opérationnels (CFO) partent du résultat net, auquel on ajoute les charges non-cash (amortissements, provisions, dépréciation) et on ajuste la variation du besoin en fonds de roulement (BFR). Un résultat net positif avec un CFO négatif est un signal d\'alarme : l\'entreprise « gagne de l\'argent sur le papier » mais brûle du cash. Les flux d\'investissement (CFI) incluent les dépenses d\'investissement (CAPEX), les acquisitions et les cessions d\'actifs. Un CAPEX élevé signale une entreprise en croissance ou capitalistique. Les flux de financement (CFF) reflètent la politique financière : émission ou remboursement de dette, augmentation de capital, rachats d\'actions, versement de dividendes. La variation nette de trésorerie est la somme algébrique CFO + CFI + CFF. Le Free Cash Flow (FCF) = CFO - CAPEX est le montant disponible pour rémunérer les pourvoyeurs de fonds.',
          formula: 'Variation de trésorerie = Flux opérationnels + Flux d\'investissement + Flux de financement',
          example:
            'Apple (FY2023) : CFO = 110 Md$, CAPEX = -11 Md$, FCF = 99 Md$. Rachats d\'actions = -77 Md$, dividendes = -15 Md$. Apple génère tellement de cash qu\'elle peut massivement racheter ses propres actions.',
          finnSays:
            'Le résultat net, c\'est une opinion. Le cash flow, c\'est un fait. Toujours vérifier que l\'argent rentre vraiment dans la caisse !',
        },
      },
    ],
  },

  // ── UNIT 2 : Analyse par les Ratios ────────────
  {
    id: 'ratio-analysis',
    title: 'Analyse par les Ratios',
    lessons: [
      {
        id: 'liquidity-ratios',
        title: 'Ratios de liquidité',
        xp: 200,
        duration: '25 min',
        content: {
          introduction:
            'Les ratios de liquidité mesurent la capacité d\'une entreprise à honorer ses obligations à court terme. Une entreprise peut être rentable mais insolvable si elle manque de liquidités.',
          keyPoints: [
            'Current ratio = Actifs courants / Passifs courants (cible > 1)',
            'Quick ratio (acid test) = (Actifs courants - Stocks) / Passifs courants',
            'Cash ratio = Trésorerie / Passifs courants (le plus conservateur)',
            'Un current ratio trop élevé peut signaler une gestion inefficace du BFR',
            'Les ratios doivent être comparés au secteur : la distribution a des ratios plus faibles que l\'industrie',
          ],
          explanation:
            'Les ratios de liquidité sont les premiers indicateurs que regarde un créancier. Le current ratio (ratio de liquidité générale) divise les actifs courants par les passifs courants. Un ratio supérieur à 1 signifie que l\'entreprise a théoriquement assez d\'actifs à court terme pour couvrir ses dettes à court terme. Cependant, les stocks peuvent être difficiles à liquider rapidement, d\'où le quick ratio (ratio de liquidité réduite) qui les exclut. Le cash ratio est le plus strict : il ne considère que la trésorerie et les équivalents de trésorerie. En pratique, un current ratio entre 1,5 et 2 est généralement considéré sain. Mais attention aux spécificités sectorielles : la grande distribution opère souvent avec un current ratio inférieur à 1 car elle encaisse ses clients au comptant mais paie ses fournisseurs à 60-90 jours (BFR négatif). Le Vernimmen souligne qu\'un ratio statique doit toujours être complété par l\'analyse dynamique des flux de trésorerie.',
          formula: 'Current Ratio = Actifs courants / Passifs courants\nQuick Ratio = (Actifs courants - Stocks) / Passifs courants',
          example:
            'Carrefour (2023) : Current ratio = 0,82. C\'est normal pour un distributeur qui encaisse vite (paiement CB) et paie ses fournisseurs à 60 jours. En revanche, pour un industriel comme Airbus, un current ratio de 0,82 serait préoccupant.',
          finnSays:
            'La liquidité c\'est comme l\'oxygène : on n\'y pense pas quand tout va bien, mais quand il en manque, c\'est la catastrophe !',
        },
      },
      {
        id: 'profitability-ratios',
        title: 'Ratios de rentabilité',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'Les ratios de rentabilité évaluent l\'efficacité avec laquelle une entreprise génère des profits à partir de ses ressources. Ils sont au coeur de l\'analyse financière et de la création de valeur.',
          keyPoints: [
            'ROE (Return on Equity) = Résultat net / Capitaux propres',
            'ROA (Return on Assets) = Résultat net / Total actif',
            'ROCE (Return on Capital Employed) = EBIT × (1 - taux d\'IS) / Capitaux employés',
            'La décomposition de DuPont décompose le ROE en 3 leviers',
            'Le ROCE doit être supérieur au WACC pour créer de la valeur',
          ],
          explanation:
            'Le ROE mesure la rentabilité des fonds investis par les actionnaires. Un ROE de 15 % signifie que pour 100 € de capitaux propres, l\'entreprise génère 15 € de résultat net. La décomposition de DuPont révèle les trois leviers du ROE : la marge nette (Résultat net / CA), la rotation des actifs (CA / Total actif) et le levier financier (Total actif / Capitaux propres). Ainsi, un ROE élevé peut provenir d\'une forte marge (luxe), d\'une forte rotation (distribution) ou d\'un fort endettement (utilities). Le ROCE est supérieur au ROE pour mesurer la performance opérationnelle car il est indépendant de la structure financière. Les capitaux employés = Capitaux propres + Dette financière nette = Immobilisations + BFR. La règle d\'or du Vernimmen : si le ROCE > WACC, l\'entreprise crée de la valeur ; si ROCE < WACC, elle en détruit. Le ROA est moins utilisé en finance d\'entreprise mais reste pertinent pour les banques.',
          formula: 'ROE = Résultat net / Capitaux propres\nROCE = NOPAT / Capitaux employés\nDuPont : ROE = Marge nette × Rotation × Levier',
          example:
            'Hermès (2023) : ROE = 33 %, marge nette = 27 %, rotation des actifs = 0,9x, levier = 1,4x. Le ROE exceptionnel d\'Hermès vient principalement de sa marge nette (pricing power du luxe), pas de l\'endettement.',
          finnSays:
            'Le ROE te dit combien l\'entreprise gagne pour chaque euro que tu investis. Mais attention, un ROE élevé par la dette c\'est comme courir plus vite en empruntant des chaussures : ça marche jusqu\'à ce qu\'on te les reprenne !',
        },
      },
      {
        id: 'leverage-ratios',
        title: 'Ratios d\'endettement',
        xp: 200,
        duration: '25 min',
        content: {
          introduction:
            'Les ratios d\'endettement (leverage ratios) mesurent la dépendance d\'une entreprise vis-à-vis de ses créanciers et sa capacité à servir sa dette. Ils sont essentiels pour les agences de notation et les prêteurs.',
          keyPoints: [
            'Debt-to-Equity (D/E) = Dette financière / Capitaux propres',
            'Dette nette / EBITDA = mesure la capacité de remboursement (en années)',
            'Interest Coverage Ratio (ICR) = EBIT / Charges d\'intérêts',
            'Le gearing mesure le poids relatif de la dette dans le financement',
            'Les covenants bancaires imposent souvent un plafond de Dette nette / EBITDA',
          ],
          explanation:
            'Le ratio d\'endettement le plus utilisé en pratique est le ratio Dette nette / EBITDA. La dette nette = dettes financières - trésorerie et équivalents. Ce ratio exprime en combien d\'années d\'EBITDA l\'entreprise pourrait rembourser sa dette. Un ratio inférieur à 2x est considéré conservateur, 2x-3x est modéré, et au-delà de 4x on entre dans le territory du high yield. L\'ICR (Interest Coverage Ratio) mesure la capacité à payer les intérêts : un ratio inférieur à 2x est un signal d\'alerte. Le Debt-to-Equity compare la dette aux capitaux propres. Le ratio de gearing = Dette nette / (Dette nette + Capitaux propres) exprime le poids de la dette dans le financement total. Les agences de notation (S&P, Moody\'s, Fitch) utilisent ces ratios pour attribuer les notes de crédit : un ratio Dette nette / EBITDA supérieur à 4x conduit généralement à une note inférieure à BBB (speculative grade). Les contrats de prêt incluent souvent des covenants financiers qui imposent le respect de certains seuils.',
          formula: 'Dette nette / EBITDA = (Dettes financières - Trésorerie) / EBITDA\nICR = EBIT / Charges d\'intérêts\nGearing = Dette nette / (Dette nette + CP)',
          example:
            'Telecom Italia (2023) : Dette nette / EBITDA = 3,8x, rating BB+. Orange (2023) : Dette nette / EBITDA = 1,9x, rating BBB+. La différence de levier explique les 4 crans d\'écart de notation entre les deux opérateurs.',
          finnSays:
            'La dette, c\'est comme le sel : en quantité raisonnable ça relève le plat (ROE), mais trop ça gâche tout. Vérifie toujours que l\'entreprise peut rembourser !',
        },
      },
    ],
  },

  // ── UNIT 3 : Cash Flow & BFR ───────────────────
  {
    id: 'cash-flow-bfr',
    title: 'Cash Flow & BFR',
    lessons: [
      {
        id: 'working-capital',
        title: 'BFR et cycle d\'exploitation',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'Le Besoin en Fonds de Roulement (BFR) représente le décalage de trésorerie entre les dépenses (achats, production) et les encaissements (ventes). C\'est un poste majeur de consommation de cash en période de croissance.',
          keyPoints: [
            'BFR = Stocks + Créances clients - Dettes fournisseurs',
            'Le cycle d\'exploitation détermine la durée du BFR',
            'Un BFR négatif (grande distribution) génère de la trésorerie',
            'La croissance du CA fait mécaniquement croître le BFR',
            'Les jours de stock, jours de créances et jours de fournisseurs composent le cash conversion cycle',
          ],
          explanation:
            'Le BFR naît du décalage temporel dans le cycle d\'exploitation. Une entreprise industrielle achète des matières premières (sortie de cash), les transforme en produits finis (stockage), les vend à crédit (créance client) et ne sera payée qu\'à l\'échéance. Pendant ce temps, elle bénéficie du crédit fournisseur (dette fournisseur). Le BFR = Stocks + Créances clients - Dettes fournisseurs. En jours de CA : BFR en jours = (Stocks / COGS × 365) + (Créances / CA × 365) - (Fournisseurs / Achats × 365). Le cash conversion cycle (CCC) mesure le nombre de jours entre le paiement des fournisseurs et l\'encaissement des clients. Un CCC court est un avantage compétitif. Amazon a un CCC négatif : elle encaisse les clients avant de payer ses fournisseurs, ce qui finance sa croissance. La variation du BFR est un poste majeur du tableau de flux. Une entreprise en forte croissance peut avoir un résultat net positif mais une trésorerie négative si son BFR explose.',
          formula: 'BFR = Stocks + Créances clients - Dettes fournisseurs\nCCC = DIO + DSO - DPO\n(DIO = Days Inventory Outstanding, DSO = Days Sales Outstanding, DPO = Days Payable Outstanding)',
          example:
            'Danone (2023) : DSO = 42 jours, DIO = 58 jours, DPO = 72 jours. CCC = 42 + 58 - 72 = 28 jours. Chaque jour de réduction du CCC libère ~80 M€ de trésorerie pour Danone.',
          finnSays:
            'Le BFR, c\'est l\'argent que ton entreprise a « dans les tuyaux ». Plus les tuyaux sont longs, plus il te faut de cash pour les remplir. Raccourcis les tuyaux !',
        },
      },
      {
        id: 'free-cash-flow',
        title: 'Free Cash Flow',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'Le Free Cash Flow (FCF) est le flux de trésorerie disponible après que l\'entreprise a financé ses opérations et ses investissements. C\'est le cash réellement disponible pour rémunérer les actionnaires et les créanciers.',
          keyPoints: [
            'FCF = Cash Flow Opérationnel - CAPEX (définition simplifiée)',
            'FCFF (Free Cash Flow to Firm) rémunère actionnaires ET créanciers',
            'FCFE (Free Cash Flow to Equity) = FCFF - Intérêts × (1-t) - Remboursement dette + Nouvelle dette',
            'Le FCF yield = FCF / Market Cap, mesure la rentabilité en cash',
            'Un FCF durablement négatif nécessite un financement externe',
          ],
          explanation:
            'Il existe deux variantes du FCF. Le FCFF (Free Cash Flow to Firm) représente le cash disponible pour tous les pourvoyeurs de fonds (actionnaires et créanciers). Sa formule complète : FCFF = EBIT × (1 - taux d\'IS) + D&A - CAPEX - Variation du BFR. Le FCFE (Free Cash Flow to Equity) est le cash disponible uniquement pour les actionnaires, après service de la dette. Le FCFF est utilisé dans le DCF pour valoriser l\'Enterprise Value, tandis que le FCFE valorise directement l\'Equity Value. Le FCF yield (FCF / capitalisation boursière) est un ratio de valorisation alternatif au P/E : il mesure combien de cash l\'entreprise génère par rapport à sa valeur de marché. Un FCF yield de 8 % signifie que l\'entreprise génère 8 € de FCF pour 100 € de capitalisation. Le FCF est considéré comme un indicateur plus fiable que le résultat net car il est plus difficile à manipuler comptablement. La conversion du résultat net en FCF (cash conversion ratio = FCF / Résultat net) est un indicateur de qualité des bénéfices.',
          formula: 'FCFF = EBIT × (1 - t) + D&A - CAPEX - ΔBFR\nFCFE = FCFF - Intérêts × (1 - t) + Δ Dette nette\nFCF Yield = FCF / Market Cap',
          example:
            'Microsoft (FY2023) : EBIT = 88 Md$, Impôts = 16 Md$, D&A = 13 Md$, CAPEX = 28 Md$, ΔBFR = -3 Md$. FCFF = 88 × 0,79 + 13 - 28 + 3 = 57 Md$. FCF yield = 57 / 2 800 = 2,0 %. Faible yield car le marché price une forte croissance future.',
          finnSays:
            'Le Free Cash Flow, c\'est l\'argent que tu peux ramener à la maison après avoir payé toutes les factures et investi pour l\'avenir. C\'est la vraie mesure de la richesse !',
        },
      },
    ],
  },

  // ── UNIT 4 : Introduction à la Valorisation ────
  {
    id: 'valuation-intro',
    title: 'Introduction à la Valorisation',
    lessons: [
      {
        id: 'dcf-intro',
        title: 'Introduction au DCF',
        xp: 200,
        duration: '35 min',
        content: {
          introduction:
            'Le Discounted Cash Flow (DCF) est la méthode de valorisation intrinsèque par excellence. Elle repose sur le principe qu\'un actif vaut la somme actualisée de ses flux de trésorerie futurs.',
          keyPoints: [
            'La valeur d\'un actif = somme des flux futurs actualisés au taux approprié',
            'Le DCF utilise les FCFF actualisés au WACC pour obtenir l\'Enterprise Value',
            'L\'horizon de projection est généralement de 5 à 10 ans',
            'Au-delà de l\'horizon explicite, on calcule une valeur terminale',
            'Le DCF est la méthode la plus rigoureuse mais aussi la plus sensible aux hypothèses',
          ],
          explanation:
            'Le DCF repose sur le concept de valeur temps de l\'argent : un euro aujourd\'hui vaut plus qu\'un euro demain. On projette les Free Cash Flow to Firm (FCFF) sur un horizon explicite (5-10 ans), puis on calcule une valeur terminale pour capturer les flux au-delà. Chaque flux est actualisé au WACC (coût moyen pondéré du capital). L\'Enterprise Value = somme des FCFF actualisés + Valeur terminale actualisée. Pour obtenir l\'Equity Value (valeur des actions), on soustrait la dette nette et on ajoute les actifs non opérationnels. Les étapes clés : (1) Projeter les revenus et les marges, (2) Calculer les FCFF, (3) Déterminer le WACC, (4) Calculer la valeur terminale, (5) Actualiser et sommer. Le DCF est sensible aux hypothèses de croissance à long terme et de WACC. Une variation de 0,5 % du WACC peut modifier la valorisation de 15-20 %. C\'est pourquoi le DCF est toujours complété par des analyses de sensibilité et d\'autres méthodes (comparables, transactions).',
          formula: 'EV = Σ [FCFFt / (1 + WACC)^t] + TV / (1 + WACC)^n\nEquity Value = EV - Dette nette + Actifs non opérationnels',
          example:
            'Valorisation simplifiée d\'une entreprise : FCFF année 1 = 100 M€, croissance 5 %/an pendant 5 ans, WACC = 9 %, croissance perpétuelle = 2 %. TV = FCFF6 / (WACC - g) = 128 × 1,02 / (0,09 - 0,02) = 1 862 M€. EV = PV des FCFF + PV de TV ≈ 430 + 1 210 = 1 640 M€.',
          finnSays:
            'Le DCF, c\'est la Rolls-Royce de la valorisation. Mais attention : tes hypothèses sont le carburant. Garbage in, garbage out !',
        },
      },
      {
        id: 'terminal-value',
        title: 'Valeur terminale',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'La valeur terminale (Terminal Value) capture la valeur de l\'entreprise au-delà de l\'horizon de projection explicite. Elle représente souvent 60 à 80 % de l\'Enterprise Value dans un DCF, ce qui en fait un paramètre critique.',
          keyPoints: [
            'Deux méthodes : Gordon Growth Model (perpetuity) et Exit Multiple',
            'Gordon Growth : TV = FCFFn+1 / (WACC - g)',
            'Exit Multiple : TV = EBITDAn × Multiple de sortie',
            'Le taux de croissance perpétuelle g doit être ≤ au taux de croissance du PIB nominal',
            'La TV représente généralement 60-80 % de l\'Enterprise Value',
          ],
          explanation:
            'La méthode de Gordon Growth (croissance perpétuelle) suppose que les FCF croissent à un taux constant g à l\'infini. La formule TV = FCFFn+1 / (WACC - g) est simple mais très sensible au choix de g. La règle : g ne doit pas dépasser le taux de croissance nominal du PIB à long terme (2-3 % en zone euro). Si g = WACC, la valeur tend vers l\'infini, ce qui est absurde. La méthode de l\'Exit Multiple applique un multiple de marché (généralement EV/EBITDA) aux métriques de la dernière année de projection. Par exemple, TV = EBITDA année 5 × 10x. Cette méthode est plus intuitive mais introduit une valorisation relative dans un modèle censé être intrinsèque. En pratique, les analystes utilisent les deux méthodes et vérifient la cohérence. Un test de sanité : le taux de croissance implicite dans l\'exit multiple doit être cohérent avec le g du Gordon Growth, et vice versa. Le Vernimmen recommande de toujours présenter les deux approches.',
          formula: 'Gordon Growth : TV = FCFFn × (1 + g) / (WACC - g)\nExit Multiple : TV = EBITDAn × Multiple\nImplied g = WACC - FCFFn+1 / TV',
          example:
            'Unilever DCF : FCFF année 5 = 8 Md€, g = 2,5 %, WACC = 8 %. TV (Gordon) = 8 × 1,025 / (0,08 - 0,025) = 149 Md€. Vérification par Exit Multiple : EBITDA année 5 = 12 Md€ × 12x = 144 Md€. Les deux approches convergent (écart < 5 %), ce qui renforce la confiance dans la valorisation.',
          finnSays:
            'La valeur terminale, c\'est un peu comme prédire l\'avenir à l\'infini. Sois humble avec tes hypothèses : un petit changement de g peut faire exploser ta valorisation !',
        },
      },
      {
        id: 'wacc',
        title: 'Le WACC',
        xp: 250,
        duration: '35 min',
        content: {
          introduction:
            'Le WACC (Weighted Average Cost of Capital) est le taux d\'actualisation utilisé dans le DCF. Il représente le coût moyen pondéré des différentes sources de financement de l\'entreprise.',
          keyPoints: [
            'WACC = Ke × (E / V) + Kd × (1 - t) × (D / V)',
            'Ke (coût des capitaux propres) se calcule par le CAPM : Ke = Rf + β × (Rm - Rf)',
            'Kd (coût de la dette) = taux d\'intérêt moyen pondéré de la dette, après impôt',
            'Le bouclier fiscal (tax shield) réduit le coût effectif de la dette',
            'Le WACC diminue quand l\'endettement augmente (jusqu\'à un certain point)',
          ],
          explanation:
            'Le WACC pondère le coût des capitaux propres (Ke) et le coût de la dette après impôt (Kd × (1-t)) par leurs poids respectifs dans la structure financière. Le Ke se calcule généralement par le CAPM (Capital Asset Pricing Model) : Ke = Rf + β × (Rm - Rf), où Rf est le taux sans risque (OAT 10 ans pour l\'euro), β mesure la sensibilité de l\'action au marché, et (Rm - Rf) est la prime de risque actions (~5-6 % historiquement). Le β est estimé par régression sur les rendements historiques ou par comparable sectoriel (β désendetté puis ré-endetté à la structure cible). Le Kd s\'obtient en observant le rendement des obligations de l\'entreprise ou le spread de crédit par rapport au taux sans risque. L\'avantage fiscal de la dette (déductibilité des intérêts) réduit le coût effectif de la dette : Kd après impôt = Kd × (1 - t). La théorie de Modigliani-Miller (avec impôts) montre que l\'endettement réduit le WACC grâce au tax shield, mais les coûts de détresse financière limitent cet avantage. Le WACC doit utiliser la structure cible de financement, pas la structure actuelle.',
          formula: 'WACC = Ke × E/(D+E) + Kd × (1 - t) × D/(D+E)\nKe = Rf + β × (Rm - Rf)\nβ leveraged = β unleveraged × [1 + (1 - t) × D/E]',
          example:
            'Sanofi : Rf = 3,0 %, β = 0,65, prime de risque = 5,5 %. Ke = 3,0 + 0,65 × 5,5 = 6,6 %. Kd = 3,5 %, taux IS = 25 %, D/V = 20 %. WACC = 6,6 % × 80 % + 3,5 % × 75 % × 20 % = 5,28 % + 0,53 % = 5,8 %.',
          finnSays:
            'Le WACC, c\'est le taux de rendement minimum que l\'entreprise doit dégager pour satisfaire ses investisseurs. En dessous, elle détruit de la valeur. Au-dessus, elle en crée. Simple, non ?',
        },
      },
    ],
  },

  // ── UNIT 5 : Valorisation par les Multiples ────
  {
    id: 'multiples-valuation',
    title: 'Valorisation par les Multiples',
    lessons: [
      {
        id: 'valuation-multiples',
        title: 'Multiples de valorisation',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'Les multiples de valorisation permettent d\'évaluer une entreprise en la comparant à des sociétés similaires. C\'est l\'approche la plus utilisée en pratique, en complément du DCF.',
          keyPoints: [
            'EV/EBITDA est le multiple le plus utilisé en M&A (indépendant de la structure financière)',
            'P/E (Price/Earnings) est le plus connu du grand public',
            'EV/Sales est utilisé pour les entreprises non profitables (tech en croissance)',
            'Les multiples doivent être appliqués à des métriques normalisées',
            'Un multiple n\'a de sens que comparé à des peers pertinents',
          ],
          explanation:
            'L\'approche par les multiples repose sur la loi du prix unique : des actifs similaires doivent avoir des valorisations similaires. On distingue les multiples d\'Enterprise Value (EV/EBITDA, EV/EBIT, EV/Sales) et les multiples d\'Equity (P/E, P/B, Dividend Yield). L\'EV/EBITDA est le multiple roi en M&A car il est indépendant de la structure financière et des politiques d\'amortissement. Le P/E est le plus intuitif mais il est affecté par l\'endettement et les éléments exceptionnels. L\'EV/Sales est utilisé pour les entreprises en forte croissance sans profitabilité (la « Rule of 40 » en SaaS). Le PEG ratio (P/E / taux de croissance) ajuste le P/E par la croissance attendue : un PEG < 1 est considéré attractif. Il faut toujours utiliser les multiples forward (basés sur les estimations futures) plutôt que trailing (historiques). Les multiples varient selon le secteur (luxe : 15-25x EBITDA, banques : 0,5-1,5x Book Value, tech : 20-40x EBITDA) et le cycle économique.',
          formula: 'EV/EBITDA = Enterprise Value / EBITDA\nP/E = Prix par action / BPA\nPEG = P/E / Taux de croissance du BPA',
          example:
            'Kering vs LVMH (2023) : LVMH se traite à 14x EV/EBITDA forward, Kering à 10x. L\'écart de 4 points s\'explique par la meilleure diversification de LVMH et la croissance plus rapide de ses marques.',
          finnSays:
            'Les multiples, c\'est rapide et efficace, mais ce n\'est pas de la magie. Compare des pommes avec des pommes, et vérifie toujours que le multiple a du sens !',
        },
      },
      {
        id: 'ev-vs-equity',
        title: 'EV vs Equity Value',
        xp: 200,
        duration: '25 min',
        content: {
          introduction:
            'La distinction entre Enterprise Value (EV) et Equity Value est fondamentale en valorisation. Confondre les deux est l\'erreur la plus courante en finance.',
          keyPoints: [
            'Equity Value (Market Cap) = valeur pour les actionnaires uniquement',
            'Enterprise Value = valeur pour tous les pourvoyeurs de fonds (actionnaires + créanciers)',
            'EV = Equity Value + Dette nette + Intérêts minoritaires + Actions préférentielles',
            'Les multiples d\'EV utilisent des métriques avant service de la dette (EBITDA, EBIT)',
            'Les multiples d\'Equity utilisent des métriques après dette (BPA, BNA)',
          ],
          explanation:
            'L\'Enterprise Value représente la valeur totale de l\'entreprise, indépendamment de sa structure de financement. C\'est le prix qu\'un acquéreur devrait payer pour racheter 100 % de l\'entreprise : il faut acheter les actions (Equity Value) ET reprendre la dette (ou la rembourser). La formule : EV = Market Cap + Dette financière nette + Intérêts minoritaires + Actions préférentielles - Participations mises en équivalence. La dette nette = dettes financières brutes - trésorerie et équivalents. L\'Equity Value = nombre d\'actions dilué × cours de bourse. Il est crucial de respecter la cohérence numérateur/dénominateur : les multiples d\'EV (EV/EBITDA, EV/EBIT, EV/Sales) doivent utiliser des métriques avant service de la dette et disponibles pour tous les pourvoyeurs de fonds. Les multiples d\'Equity (P/E, P/B) utilisent des métriques après service de la dette, disponibles uniquement pour les actionnaires. Mélanger les deux (par exemple, EV/BPA ou P/E avec EBITDA) n\'a aucun sens financier.',
          formula: 'EV = Market Cap + Dette nette + Minoritaires + Prefs - MEE\nDette nette = Dettes financières - Trésorerie\nEquity Value = Nombre d\'actions dilué × Cours',
          example:
            'Pernod Ricard (2023) : Market Cap = 45 Md€, Dette nette = 10 Md€, Minoritaires = 0,5 Md€. EV = 55,5 Md€. Si un acquéreur voulait racheter Pernod, il devrait payer 55,5 Md€, pas seulement les 45 Md€ de market cap.',
          finnSays:
            'L\'EV, c\'est le prix de la maison. L\'Equity Value, c\'est ce qui reste après avoir remboursé le crédit immobilier. Pas la même chose du tout !',
        },
      },
      {
        id: 'ev-equity-bridge',
        title: 'Bridge EV → Equity',
        xp: 200,
        duration: '25 min',
        content: {
          introduction:
            'Le bridge (pont) entre Enterprise Value et Equity Value est l\'étape finale d\'une valorisation DCF ou par les multiples. C\'est ici que les ajustements comptent : oublier un élément peut fausser la valorisation de plusieurs milliards.',
          keyPoints: [
            'Equity Value = EV - Dette nette - Minoritaires - Prefs + Participations MEE',
            'La dette nette inclut les obligations locatives (IFRS 16) et les pensions',
            'Les options dilutives augmentent le nombre d\'actions (méthode du Treasury Stock)',
            'Les actifs non opérationnels doivent être ajoutés à l\'Equity Value',
            'Le prix par action = Equity Value / Nombre d\'actions dilué',
          ],
          explanation:
            'Après avoir obtenu l\'Enterprise Value (par DCF ou par multiples), il faut « descendre le bridge » pour obtenir l\'Equity Value, c\'est-à-dire la valeur des actions. On soustrait : la dette financière nette (y compris leases IFRS 16 et engagements de retraite non provisionnés), les intérêts minoritaires (part des filiales non détenues à 100 %), les actions préférentielles. On ajoute : les participations dans les entreprises associées (mises en équivalence), les actifs non opérationnels (immobilier hors exploitation, excédent de trésorerie structurel). Pour obtenir le prix par action implicite, on divise l\'Equity Value par le nombre d\'actions dilué. La dilution inclut les stock-options et actions gratuites en cours (méthode Treasury Stock Method) : on calcule combien d\'actions supplémentaires seraient créées si toutes les options dans la monnaie étaient exercées, nettes des actions rachetées avec le produit d\'exercice. Ce bridge est critique : pour une entreprise comme EDF, les provisions nucléaires et les engagements de retraite représentent des dizaines de milliards.',
          formula: 'Equity Value = EV - Dette nette - Minoritaires - Prefs + MEE + Actifs non opérationnels\nPrix/action = Equity Value / Actions diluées (TSM)',
          example:
            'DCF de Schneider Electric : EV = 95 Md€. Dette nette = -8 Md€, Pensions = -2 Md€, Minoritaires = -1 Md€, MEE = +3 Md€. Equity Value = 87 Md€. Actions diluées = 570 M. Prix implicite = 87 / 0,57 = 153 €/action.',
          finnSays:
            'Le bridge, c\'est comme descendre un escalier : chaque marche est un ajustement. Oublie une marche et tu trébuches sur ta valorisation !',
        },
      },
    ],
  },

  // ── UNIT 6 : Méthodes Comparatives ─────────────
  {
    id: 'comparative-methods',
    title: 'Méthodes Comparatives',
    lessons: [
      {
        id: 'comparable-companies',
        title: 'Comparable Companies',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'L\'analyse par les comparables boursiers (Comparable Companies Analysis ou « Comps ») valorise une entreprise en appliquant les multiples de sociétés cotées similaires. C\'est la méthode la plus rapide et la plus utilisée au quotidien.',
          keyPoints: [
            'Sélectionner un peer group pertinent : même secteur, taille, géographie, croissance',
            'Calculer les multiples de chaque peer : EV/EBITDA, EV/EBIT, P/E',
            'Utiliser la médiane plutôt que la moyenne (moins sensible aux outliers)',
            'Appliquer les multiples aux métriques de la société cible',
            'Appliquer une décote ou une prime selon les spécificités de la cible',
          ],
          explanation:
            'La méthode des comparables boursiers se déroule en quatre étapes. (1) Constituer le peer group : sélectionner 5-15 sociétés cotées dans le même secteur, avec une taille, une géographie et un profil de croissance comparables. (2) Collecter les données financières et calculer les multiples forward (consensus des analystes) : EV/EBITDA, EV/EBIT, P/E. (3) Analyser la dispersion : identifier la médiane, le 1er et 3ème quartile. Comprendre pourquoi certains peers se traitent à prime ou à décote (croissance supérieure, marges plus élevées, risque pays). (4) Appliquer les multiples à la cible pour obtenir une fourchette de valorisation. Par exemple, si la médiane EV/EBITDA du peer group est 10x et l\'EBITDA de la cible est 500 M€, l\'EV implicite est 5 000 M€. Les pièges : ne pas comparer des entreprises à des stades de maturité différents, vérifier que les métriques sont calculées de manière homogène (traitement des leases, des minoritaires), utiliser des multiples forward (et non trailing) pour refléter les perspectives.',
          formula: 'EV implicite = Métrique cible × Multiple médian du peer group\nForchette = [Q1 × Métrique ; Q3 × Métrique]',
          example:
            'Valorisation d\'Essilor par comps : Peer group = Alcon, CooperVision, Carl Zeiss. Médiane EV/EBITDA forward = 18x. EBITDA Essilor = 5,2 Md€. EV implicite = 5,2 × 18 = 93,6 Md€. Fourchette Q1-Q3 = [83 ; 104] Md€.',
          finnSays:
            'Les comps, c\'est comme comparer les prix au marché : tu regardes combien valent les tomates du voisin pour fixer le prix des tiennes. Mais assure-toi de comparer des tomates avec des tomates !',
        },
      },
      {
        id: 'precedent-transactions',
        title: 'Precedent Transactions',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'L\'analyse des transactions précédentes (Precedent Transactions Analysis ou « Precs ») valorise une entreprise en se basant sur les multiples payés lors d\'acquisitions récentes de sociétés comparables.',
          keyPoints: [
            'Les multiples de transaction incluent une prime de contrôle (20-40 % en moyenne)',
            'Rechercher des transactions récentes (< 3 ans) dans le même secteur',
            'Les multiples de transaction sont généralement supérieurs aux multiples boursiers',
            'La prime de contrôle reflète les synergies attendues et le pouvoir de décision',
            'Attention au contexte de marché : bull market vs bear market',
          ],
          explanation:
            'La méthode des transactions comparables utilise les multiples payés lors d\'opérations de M&A passées. Le principe : si un acquéreur a payé 12x l\'EBITDA pour acquérir une société comparable, c\'est une référence pour valoriser la cible. Les multiples de transaction sont supérieurs aux multiples boursiers pour deux raisons : (1) la prime de contrôle (~25-35 % en moyenne en Europe) rémunère le pouvoir de gestion et de restructuration, (2) les synergies attendues (réduction de coûts, cross-selling) que l\'acquéreur est prêt à payer partiellement. Pour constituer l\'échantillon, on recherche les transactions dans le même secteur, de taille comparable, dans une période récente (idéalement < 3 ans). Sources : Bloomberg, Mergermarket, Capital IQ. Il faut analyser le contexte de chaque deal : était-ce une vente aux enchères (prime plus élevée) ou une transaction de gré à gré ? Le marché était-il en haut de cycle ? Y avait-il des synergies spécifiques ? Les pièges : les transactions en bas de cycle sous-évaluent, les enchères compétitives surévaluent (« winner\'s curse »).',
          formula: 'EV implicite = Métrique cible × Multiple de transaction médian\nPrime de contrôle = (Prix offert - Cours non affecté) / Cours non affecté',
          example:
            'Valorisation d\'une société de logiciels par precs : Acquisition de Nuance par Microsoft (16x EV/Revenue), Figma par Adobe (27x, deal annulé), Citrix (15x). Médiane = 16x. Si la cible a un CA de 300 M€ : EV implicite = 4,8 Md€.',
          finnSays:
            'Les transactions précédentes, c\'est comme regarder les prix de vente des appartements dans ton quartier. Mais rappelle-toi : chaque deal a son histoire, ses synergies et son contexte !',
        },
      },
    ],
  },

  // ── UNIT 7 : Synthèse de Valorisation ──────────
  {
    id: 'valuation-synthesis',
    title: 'Synthèse de Valorisation',
    lessons: [
      {
        id: 'football-field',
        title: 'Football Field',
        xp: 200,
        duration: '25 min',
        content: {
          introduction:
            'Le Football Field est un graphique de synthèse qui présente les fourchettes de valorisation obtenues par chaque méthode (DCF, Comps, Precs, LBO). Il tire son nom de sa ressemblance avec un terrain de football américain.',
          keyPoints: [
            'Chaque méthode est représentée par une barre horizontale (min-médiane-max)',
            'Le DCF fournit généralement la fourchette la plus large',
            'Les Comps donnent la valeur de marché « standalone »',
            'Les Precs incluent la prime de contrôle',
            'La zone de chevauchement des fourchettes indique la valorisation la plus probable',
          ],
          explanation:
            'Le Football Field est l\'outil de présentation standard en M&A. Il affiche côte à côte les résultats de chaque méthode de valorisation sous forme de barres horizontales. L\'axe X représente la valeur (en prix par action ou en Enterprise Value). Chaque barre montre le 1er quartile, la médiane et le 3ème quartile de chaque méthode. Le DCF produit généralement la fourchette la plus large car il est le plus sensible aux hypothèses (WACC, taux de croissance terminal). Les Comps reflètent la valorisation de marché sans prime. Les Precs intègrent la prime de contrôle et sont donc décalés vers la droite. L\'analyse LBO (Leveraged Buyout) indique le prix maximum qu\'un fonds de PE serait prêt à payer pour atteindre un TRI cible (~20 %). La « zone de convergence » entre les différentes méthodes donne la fourchette de valorisation la plus robuste. En pratique, la valorisation retenue dans une offre se situe généralement dans la zone où DCF et Precs se chevauchent.',
          formula: 'Fourchette finale = Intersection des fourchettes DCF, Comps et Precs',
          example:
            'Football Field pour Worldline (M&A) : DCF = [45€ ; 75€], Comps = [38€ ; 52€], Precs = [55€ ; 80€], LBO = [42€ ; 58€]. Zone de convergence ≈ [45€ ; 58€]. L\'offre se situerait probablement autour de 50-55€/action.',
          finnSays:
            'Le Football Field, c\'est la photo de groupe des méthodes de valorisation. Quand tout le monde est d\'accord sur un prix, tu peux être plus confiant dans ta conclusion !',
        },
      },
      {
        id: 'normalization',
        title: 'Normalisation',
        xp: 200,
        duration: '25 min',
        content: {
          introduction:
            'La normalisation consiste à retraiter les données financières pour refléter la performance récurrente de l\'entreprise. Sans normalisation, les multiples et le DCF peuvent donner des résultats trompeurs.',
          keyPoints: [
            'Exclure les éléments exceptionnels (cessions, restructurations, litiges)',
            'Ajuster les loyers (IFRS 16) pour la comparabilité entre propriétaires et locataires',
            'Retraiter la rémunération du dirigeant dans les PME (souvent excessive ou insuffisante)',
            'Normaliser le cycle : utiliser un EBITDA mid-cycle pour les entreprises cycliques',
            'Ajuster les éléments non-cash récurrents (stock-based compensation)',
          ],
          explanation:
            'La normalisation est une étape critique souvent sous-estimée. Les états financiers bruts contiennent des éléments qui ne reflètent pas la performance récurrente : charges de restructuration, gains sur cessions d\'actifs, provisions exceptionnelles, impact d\'un changement de norme comptable. Il faut les identifier et les retraiter. Pour les entreprises cycliques (automobile, matières premières), il est essentiel d\'utiliser un EBITDA « mid-cycle » plutôt que le dernier EBITDA publié qui peut être en haut ou en bas de cycle. La stock-based compensation (SBC) est un sujet de débat : certains analystes l\'excluent de l\'EBITDA (elle est non-cash), d\'autres l\'incluent (elle représente un coût réel pour les actionnaires via la dilution). Post IFRS 16, les loyers opérationnels sont capitalisés au bilan, ce qui gonfle l\'EBITDA. Il faut s\'assurer que tous les peers sont traités de manière homogène. La normalisation du BFR est aussi importante : exclure les variations exceptionnelles et utiliser un BFR normatif en pourcentage du CA.',
          formula: 'EBITDA normalisé = EBITDA reporté ± Éléments non récurrents ± Ajustements pro forma\nMultiple ajusté = EV / EBITDA normalisé',
          example:
            'Renault (2023) : EBITDA reporté = 7,5 Md€ incluant +0,8 Md€ de gain sur cession de participations et -0,3 Md€ de restructuration. EBITDA normalisé = 7,5 - 0,8 + 0,3 = 7,0 Md€. L\'EV/EBITDA passe de 3,5x (reporté) à 3,7x (normalisé).',
          finnSays:
            'Normaliser, c\'est nettoyer les comptes pour voir la vraie performance. C\'est comme enlever le maquillage pour voir le vrai visage de l\'entreprise !',
        },
      },
      {
        id: 'sector-valuation',
        title: 'Valorisation sectorielle',
        xp: 200,
        duration: '30 min',
        content: {
          introduction:
            'Chaque secteur a ses propres métriques et multiples de valorisation. Utiliser les mauvaises métriques, c\'est comme mesurer un poisson avec un mètre à ruban : techniquement possible, mais inadapté.',
          keyPoints: [
            'Banques : P/B (Price-to-Book) et P/E sont les multiples clés, pas l\'EV/EBITDA',
            'Tech/SaaS : EV/Revenue, Rule of 40 (croissance + marge > 40 %)',
            'Immobilier : NAV (Net Asset Value), FFO (Funds From Operations)',
            'Télécoms : EV/EBITDA-CAPEX pour tenir compte de l\'intensité capitalistique',
            'Luxe & Pharma : EV/EBITDA avec des multiples élevés justifiés par le pricing power',
          ],
          explanation:
            'La valorisation sectorielle adapte les outils génériques aux spécificités de chaque industrie. Les banques et assurances ne s\'évaluent pas en EV/EBITDA car leur « dette » est leur matière première (les dépôts). On utilise le P/B (Price-to-Book : ratio entre la capitalisation boursière et les fonds propres comptables) et le P/E. Un P/B > 1 signifie que le marché valorise la banque au-dessus de ses fonds propres (elle crée de la valeur). Les foncières (REITs) s\'évaluent en NAV : on valorise chaque immeuble individuellement et on soustrait la dette. Le FFO (Funds From Operations) remplace le résultat net car il exclut les amortissements immobiliers non pertinents. Les sociétés SaaS s\'évaluent en EV/Revenue car elles sont souvent non profitables. La Rule of 40 dit qu\'une bonne société SaaS a un taux de croissance + marge EBITDA > 40 %. Les entreprises minières s\'évaluent en EV/EBITDA ou en EV/Réserves. L\'industrie pharma utilise un DCF ajusté de la probabilité de succès de chaque médicament en pipeline (risk-adjusted NPV ou rNPV).',
          formula: 'Banques : P/B = Market Cap / Book Value of Equity\nSaaS : Rule of 40 = Taux de croissance CA + Marge EBITDA ≥ 40 %\nREITs : NAV = Σ Valeur des actifs immobiliers - Dette nette',
          example:
            'BNP Paribas (2023) : P/B = 0,6x (décote sur fonds propres). ASML (semi-conducteurs) : EV/EBITDA = 30x. Vonovia (foncière) : valorisée sur sa NAV de 45 Md€ vs market cap de 28 Md€ = décote de 38 %. Trois secteurs, trois approches radicalement différentes.',
          finnSays:
            'Chaque secteur a son langage de valorisation. Les banques parlent P/B, la tech parle Revenue, l\'immobilier parle NAV. Apprends le vocabulaire avant d\'entrer dans la conversation !',
        },
      },
    ],
  },

  // ── UNIT 8 : Analyses Avancées ─────────────────
  {
    id: 'advanced-analysis',
    title: 'Analyses Avancées',
    lessons: [
      {
        id: 'sensitivity-analysis',
        title: 'Sensitivity Analysis',
        xp: 200,
        duration: '25 min',
        content: {
          introduction:
            'L\'analyse de sensibilité examine comment la valorisation varie en fonction des changements dans les hypothèses clés. C\'est l\'outil indispensable pour quantifier l\'incertitude d\'un DCF.',
          keyPoints: [
            'Identifier les 2-3 variables qui ont le plus d\'impact (WACC, g, marge)',
            'Construire un tableau à double entrée (sensitivity table)',
            'L\'axe vertical = WACC (ou taux d\'actualisation), l\'axe horizontal = taux de croissance terminal',
            'La valorisation centrale est au croisement des hypothèses de base',
            'La plage de variation doit être réaliste (±1-2 % pour le WACC)',
          ],
          explanation:
            'L\'analyse de sensibilité (ou « sensi ») est la meilleure amie de l\'analyste. Elle répond à la question : « que se passe-t-il si je me trompe ? ». La sensitivity table la plus classique croise le WACC (colonnes) et le taux de croissance terminal g (lignes). Chaque cellule affiche la valeur par action résultante. Par exemple, si le WACC passe de 9 % à 10 % et g de 2 % à 1,5 %, la valorisation peut chuter de 30 %. On peut aussi faire des sensibilités sur la marge EBITDA cible, le multiple de sortie, le taux d\'impôt, ou le taux de change. En pratique, les variables les plus impactantes sont toujours le WACC et le taux de croissance terminal, car la valeur terminale représente 60-80 % de l\'EV. Une bonne analyse de sensibilité permet de définir un « range » de valorisation et d\'identifier les hypothèses critiques qui méritent une due diligence approfondie. Elle est systématiquement incluse dans les pitch books des banques d\'investissement.',
          formula: 'ΔEV/Δvariable = Impact marginal d\'un changement d\'hypothèse\nSensitivity Table[i][j] = DCF(WACCi, gj)',
          example:
            'Sensibilité d\'un DCF de Stellantis :\n| WACC \\ g | 1,0 % | 1,5 % | 2,0 % |\n| 8,0 %    | 22 €  | 26 €  | 31 €  |\n| 9,0 %    | 17 €  | 19 €  | 22 €  |\n| 10,0 %   | 13 €  | 15 €  | 17 €  |\nLe cours actuel de 19 € est cohérent avec un WACC de 9 % et un g de 1,5 %.',
          finnSays:
            'L\'analyse de sensibilité, c\'est la météo de ta valorisation. Elle ne prédit pas le futur, mais elle te dit s\'il faut prendre un parapluie ou des lunettes de soleil !',
        },
      },
      {
        id: 'scenario-analysis',
        title: 'Scenario Analysis',
        xp: 200,
        duration: '25 min',
        content: {
          introduction:
            'L\'analyse de scénarios construit plusieurs visions cohérentes de l\'avenir (optimiste, base, pessimiste) et valorise l\'entreprise dans chacune. Contrairement à la sensibilité qui fait varier un paramètre à la fois, le scénario modifie tout le « narrative ».',
          keyPoints: [
            'Trois scénarios minimum : Bear (pessimiste), Base (central), Bull (optimiste)',
            'Chaque scénario a un narratif économique cohérent (pas juste ±X %)',
            'Le scénario Base reflète le consensus des analystes',
            'Pondérer les scénarios par leur probabilité pour obtenir une valeur attendue',
            'Les scénarios extrêmes testent la résilience de la thèse d\'investissement',
          ],
          explanation:
            'L\'analyse de scénarios va au-delà de la sensibilité en construisant des « histoires » cohérentes. Le scénario Bear pourrait être : récession économique, perte de parts de marché, compression des marges, hausse des taux. Le scénario Bull : accélération de la croissance, gains de parts de marché, expansion des marges, acquisitions relutives. Chaque scénario modifie simultanément toutes les hypothèses du modèle (croissance du CA, marges, CAPEX, BFR, WACC). La valorisation pondérée = P(Bear) × V(Bear) + P(Base) × V(Base) + P(Bull) × V(Bull). En pratique, les probabilités sont souvent 25 % / 50 % / 25 %. L\'analyse de scénarios est particulièrement utile pour les entreprises à fort levier opérationnel (coûts fixes élevés), les cycliques et les situations spéciales (restructuration, M&A). Un bon analyste teste aussi un scénario « catastrophe » (ex : perte d\'un client représentant 30 % du CA) pour vérifier que le downside est supportable.',
          formula: 'Valeur attendue = Σ P(scénario_i) × V(scénario_i)\nÉcart-type = √[Σ P(scénario_i) × (V(scénario_i) - V_attendue)²]',
          example:
            'Analyse de scénarios d\'Air France-KLM :\nBear (25 %) : Récession, kérosène à 120$/b → EV = 3 Md€ → 5 €/action\nBase (50 %) : Reprise modérée, kérosène à 85$/b → EV = 6 Md€ → 12 €/action\nBull (25 %) : Boom du tourisme, kérosène à 70$/b → EV = 9 Md€ → 18 €/action\nValeur attendue = 0,25×5 + 0,50×12 + 0,25×18 = 11,75 €/action.',
          finnSays:
            'L\'analyse de scénarios, c\'est comme avoir un plan A, B et C. Le plan A c\'est super, le plan C c\'est « oups ». Mais au moins tu es préparé dans tous les cas !',
        },
      },
      {
        id: 'sotp',
        title: 'SOTP',
        xp: 250,
        duration: '35 min',
        content: {
          introduction:
            'Le Sum-of-the-Parts (SOTP) valorise un conglomérat en évaluant chaque division séparément puis en les sommant. Il permet de détecter les « conglomerate discounts » et d\'identifier les spin-offs créateurs de valeur.',
          keyPoints: [
            'Chaque division est valorisée avec les multiples de son secteur spécifique',
            'La somme des parties est souvent supérieure à la valorisation du conglomérat coté',
            'Le « conglomerate discount » varie de 10 à 25 % selon les études',
            'Le SOTP est essentiel pour les entreprises diversifiées (Bouygues, Samsung, Vivendi)',
            'Un SOTP peut justifier un spin-off ou une restructuration',
          ],
          explanation:
            'Le SOTP part du principe qu\'un conglomérat est un portefeuille de divisions qui pourraient être cotées séparément. Chaque division est valorisée individuellement en utilisant les multiples de ses peers cotés « purs ». Par exemple, pour Bouygues : la division Telecom est comparée à Orange/SFR, la Construction à Vinci/Eiffage, TF1 aux médias cotés, et Colas aux services de construction. On somme les EV de chaque division, on ajoute les synergies du groupe (ou on les soustrait si elles sont négatives), et on applique le bridge EV → Equity au niveau consolidé. Le conglomerate discount (10-25 %) s\'explique par : (1) la complexité de gestion, (2) l\'allocation de capital sous-optimale, (3) le manque de transparence. Un SOTP supérieur au cours de bourse peut signaler une opportunité d\'investissement ou justifier un activiste réclamant un break-up. Le SOTP nécessite une information financière segmentée détaillée (segment reporting en IFRS 8).',
          formula: 'EV du groupe = Σ EV(division_i) - Coûts du siège + Synergies\nConglomerate Discount = (SOTP - Market Cap) / SOTP',
          example:
            'SOTP de Vivendi (avant split) :\n- UMG (musique) : 45 Md€ (comparé à Warner Music)\n- Canal+ (médias) : 8 Md€ (comparé à Sky/Netflix)\n- Havas (publicité) : 3 Md€ (comparé à WPP/Publicis)\n- Coûts siège : -1 Md€\nSOTP = 55 Md€. Market Cap = 42 Md€ → Décote de 24 %. Le spin-off d\'UMG a libéré cette valeur.',
          finnSays:
            'Le SOTP, c\'est comme estimer la valeur d\'un buffet en additionnant chaque plat. Parfois le buffet coûte moins cher que les plats individuels : c\'est le conglomerate discount. Un bon investisseur repère ces opportunités !',
        },
      },
    ],
  },

  // ── UNIT 9 : Cas Pratique ──────────────────────
  {
    id: 'case-study',
    title: 'Cas Pratique',
    lessons: [
      {
        id: 'lvmh-case',
        title: 'Cas pratique : Valoriser LVMH',
        xp: 300,
        duration: '45 min',
        content: {
          introduction:
            'Mettons en pratique tout ce que nous avons appris en valorisant LVMH, le leader mondial du luxe. Ce cas intègre l\'analyse financière, les méthodes de valorisation (DCF, Comps, SOTP) et la synthèse dans un Football Field.',
          keyPoints: [
            'LVMH est un conglomérat de luxe avec 6 divisions : Mode & Maroquinerie, Parfums, Montres, Vins & Spiritueux, Distribution, Autres',
            'La division Mode & Maroquinerie (Louis Vuitton, Dior) représente ~50 % du résultat opérationnel',
            'Le ROIC exceptionnel (~20 %) justifie des multiples élevés',
            'Le SOTP est pertinent car les divisions ont des profils très différents',
            'La valorisation croise DCF, Comps et SOTP pour un Football Field robuste',
          ],
          explanation:
            'Analyse financière : LVMH affiche un CA de ~86 Md€, un EBITDA de ~24 Md€ (marge ~28 %) et un FCF de ~12 Md€. La dette nette de ~12 Md€ représente 0,5x l\'EBITDA, une structure très conservatrice. Le ROIC de ~20 % est bien supérieur au WACC (~8 %), signe de création de valeur massive. DCF : On projette une croissance du CA de 7 % (mix volume/prix dans le luxe), convergeant vers 3 % en année 10. Marge EBITDA stable à 28 %. WACC = 8 % (β = 0,85, prime de risque = 5,5 %, Rf = 3 %, Kd = 3,5 %). Valeur terminale par Gordon Growth (g = 2,5 %). EV DCF ≈ 380-420 Md€. Comps : Peers = Hermès (24x EBITDA), Kering (10x), Richemont (14x). Médiane ajustée = 16x. EV Comps = 24 × 16 = 384 Md€. SOTP : Mode & Maroquinerie à 20x EBITDA (= 240 Md€), Parfums à 15x, Montres à 14x, Vins à 12x, Distribution (Sephora) à 14x. EV SOTP ≈ 400 Md€. Bridge : EV ~400 Md€ - dette nette 12 Md€ = Equity ~388 Md€ / 500 M actions = ~775 €/action.',
          formula: 'ROIC = NOPAT / Invested Capital\nEV (DCF) = Σ FCFF / (1+WACC)^t + TV / (1+WACC)^n\nEV (SOTP) = Σ EBITDA_division × Multiple_sectoriel',
          example:
            'Football Field LVMH (€/action) :\nDCF : [700€ ; 850€] (sensibilité WACC 7,5-8,5 %, g 2-3 %)\nComps : [680€ ; 800€] (peer group luxe)\nSOTP : [720€ ; 830€] (valorisation par division)\nZone de convergence : [720€ ; 830€]. Le cours actuel à ~750€ se situe en milieu de fourchette, cohérent avec une valorisation fair value.',
          finnSays:
            'LVMH c\'est la pièce maîtresse de la Bourse de Paris. Valoriser ce géant du luxe, c\'est l\'examen de passage de tout analyste financier. Tu y es presque, champion !',
        },
      },
      {
        id: 'final-exam',
        title: 'Examen final',
        xp: 300,
        duration: '45 min',
        content: {
          introduction:
            'Bienvenue à l\'examen final des Fondamentaux ! Cet examen couvre l\'ensemble des 23 leçons précédentes : états financiers, ratios, cash flow, DCF, multiples et synthèse de valorisation.',
          keyPoints: [
            'Maîtriser les trois états financiers et leurs interconnexions',
            'Savoir calculer et interpréter les ratios financiers clés',
            'Comprendre le DCF et ses composantes (FCFF, WACC, valeur terminale)',
            'Appliquer les méthodes de valorisation par les multiples (Comps et Precs)',
            'Synthétiser une valorisation dans un Football Field',
          ],
          explanation:
            'Cet examen final teste ta compréhension globale de l\'analyse financière et de la valorisation d\'entreprise. Les compétences acquises dans ce cours sont la base de tout travail en finance : analyse crédit, M&A, equity research, private equity, gestion d\'actifs. Tu dois être capable de : (1) Lire et analyser un bilan, un compte de résultat et un tableau de flux de trésorerie. (2) Calculer et interpréter les ratios de liquidité, rentabilité et endettement. (3) Comprendre le BFR et le Free Cash Flow. (4) Construire un DCF complet : projection des FCFF, calcul du WACC par le CAPM, estimation de la valeur terminale par Gordon Growth et Exit Multiple. (5) Réaliser une analyse par les comparables boursiers et les transactions précédentes. (6) Construire un bridge EV → Equity. (7) Réaliser des analyses de sensibilité et de scénarios. (8) Conduire un SOTP pour un conglomérat. (9) Présenter une synthèse de valorisation dans un Football Field. Ces compétences sont attendues dès le premier jour en banque d\'investissement et constituent le socle de tout professionnel de la finance.',
          formula: 'Récapitulatif des formules clés :\nEV = Σ FCFF/(1+WACC)^t + TV/(1+WACC)^n\nWACC = Ke × E/V + Kd × (1-t) × D/V\nKe = Rf + β × (Rm - Rf)\nTV = FCFFn+1 / (WACC - g)\nROCE = NOPAT / CE',
          example:
            'Mini-cas final : Société X a un EBITDA de 200 M€, croissance 5 %, WACC 9 %, dette nette 400 M€, 100 M d\'actions. Peers : médiane EV/EBITDA = 10x. EV Comps = 2 000 M€. Equity = 1 600 M€. Prix/action = 16 €. Si le marché cote 12 €, c\'est potentiellement sous-évalué de 25 %.',
          finnSays:
            'Bravo, tu as terminé les Fondamentaux ! Tu as maintenant les outils pour analyser n\'importe quelle entreprise. Mais rappelle-toi : la finance c\'est de la pratique. Continue à t\'entraîner sur des cas réels !',
        },
      },
    ],
  },
];
