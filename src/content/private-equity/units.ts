// ──────────────────────────────────────────────
//  FINA - Private Equity : Lessons (22)
// ──────────────────────────────────────────────

import type { Lesson } from '../types';

export const privateEquityLessons: Lesson[] = [
  // ── 1. Industrie PE ────────────────────────
  {
    id: 'pe-01',
    title: 'L\'industrie du Private Equity',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le Private Equity (PE) désigne l\'investissement en capital dans des entreprises non cotées. Avec plus de 8 000 Mds $ d\'actifs sous gestion dans le monde, c\'est une classe d\'actifs incontournable de la finance moderne.',
      keyPoints: [
        'Le PE couvre le buyout, le growth equity, le venture capital, le secondaire et l\'infrastructure',
        'Les plus grands fonds mondiaux : Blackstone, KKR, Apollo, Carlyle, CVC, EQT',
        'En France : Ardian, PAI Partners, Eurazeo, Tikehau, Apax Partners',
        'Le PE a historiquement surperformé les marchés cotés de 300-500 bps/an (net de frais)',
        'Le modèle repose sur l\'alignement d\'intérêts entre GP (gérant) et LP (investisseur)',
      ],
      explanation:
        'Le Private Equity est structuré autour de fonds à durée limitée (typiquement 10 ans + extensions). Le General Partner (GP) gère le fonds et prend les décisions d\'investissement. Les Limited Partners (LP) apportent le capital (90-99 %) et ont une responsabilité limitée à leur engagement. Le GP investit typiquement 1-5 % du fonds (commitment). Le modèle de rémunération « 2 and 20 » (2 % de management fee sur le capital engagé + 20 % de carried interest sur les profits) aligne les intérêts. Le cycle de vie d\'un fonds : fundraising (6-18 mois), période d\'investissement (3-5 ans), période de détention et création de valeur (3-7 ans par deal), désinvestissement et distributions.',
      example:
        'Ardian lève son fonds Buyout VIII à 8,5 Mds EUR. Le GP s\'engage à 2 % soit 170 M EUR. La management fee est de 1,75 % pendant la période d\'investissement, puis 1,5 % sur le capital investi. Le carried interest est de 20 % au-delà d\'un hurdle rate de 8 %. Durée du fonds : 10 ans + 2 ans d\'extension.',
      finnSays:
        'Le PE, c\'est l\'élite de la finance d\'entreprise. Tu achètes, tu transformes, tu revends. Simple en théorie, complexe en pratique !',
    },
  },

  // ── 2. Limited Partners ────────────────────
  {
    id: 'pe-02',
    title: 'Les Limited Partners (LPs)',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les Limited Partners sont les investisseurs institutionnels qui allouent du capital aux fonds de PE. Comprendre leurs contraintes et objectifs est essentiel pour le GP qui cherche à lever un fonds.',
      keyPoints: [
        'Principaux LPs : fonds de pension, assureurs, fonds souverains, endowments, family offices',
        'L\'allocation cible au PE est typiquement de 5-15 % du portefeuille total',
        'Les LPs évaluent le track record du GP sur les vintages précédents',
        'Le ILPA (Institutional Limited Partners Association) définit les best practices',
        'Le denominateur effect : quand les marchés cotés baissent, l\'allocation PE relative monte',
      ],
      explanation:
        'Les fonds de pension (CalPERS, CPP, ABP) sont les plus gros LPs mondiaux. Ils cherchent une prime d\'illiquidité de 300-500 bps par rapport aux marchés cotés pour justifier le blocage du capital pendant 10+ ans. Les endowments universitaires (Yale, Harvard) ont été pionniers de l\'allocation PE sous l\'influence de David Swensen (modèle de Yale). Les fonds souverains (GIC, ADIA, Norges) ont des horizons très longs et une tolérance élevée à l\'illiquidité. Les family offices peuvent aller jusqu\'à 30-40 % en PE. Le processus de due diligence d\'un LP sur un GP prend 3-6 mois et couvre : track record, équipe, processus d\'investissement, gouvernance, termes du fonds.',
      example:
        'Le fonds de pension néerlandais APG (590 Mds EUR d\'AUM) alloue 8 % au PE soit environ 47 Mds EUR. Il investit dans 40-50 GPs différents, avec des tickets de 200-500 M EUR par fonds. Il évalue les GPs sur le TRI net, le TVPI, le DPI, et la persistance des performances à travers les vintages.',
      finnSays:
        'Sans LPs, pas de PE ! Ce sont eux qui apportent le carburant. Un GP qui comprend ses LPs lève plus facilement et crée de meilleures relations.',
    },
  },

  // ── 3. Fundraising ─────────────────────────
  {
    id: 'pe-03',
    title: 'Le Fundraising',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le fundraising est le processus par lequel un GP lève du capital auprès des LPs pour constituer un nouveau fonds. C\'est une phase critique qui peut durer de 6 à 18 mois et déterminer la taille et la composition de la base d\'investisseurs.',
      keyPoints: [
        'Le PPM (Private Placement Memorandum) présente la stratégie et le track record',
        'Le LPA (Limited Partnership Agreement) est le contrat entre GP et LPs',
        'Le hard cap limite la taille maximale du fonds',
        'Les first close et final close jalonnent la levée de fonds',
        'Les termes clés : management fee, carried interest, hurdle rate, clawback',
      ],
      explanation:
        'Le GP prépare un PPM détaillant : l\'historique de la firme, le track record des fonds précédents (TRI brut/net, TVPI, DPI), la stratégie d\'investissement, l\'équipe, la gouvernance. Le placement agent (banque ou broker spécialisé) aide à identifier et contacter les LPs. Les négociations portent sur les termes du LPA : management fee (1,5-2 % standard), carried interest (20 %, parfois 25-30 % pour les top performers), hurdle rate (7-8 %), provision de clawback (le GP rend du carried si le fonds sous-performe globalement), key man clause (le fonds est suspendu si les fondateurs partent). Les re-ups (LPs existants qui réinvestissent) représentent typiquement 60-80 % du fundraising.',
      example:
        'CVC Capital Partners lève son Fund IX : hard cap 26 Mds EUR, premier closing à 15 Mds EUR en 6 mois, closing final à 26 Mds EUR en 12 mois. Management fee : 1,5 %, carried interest : 20 % au-delà d\'un hurdle de 8 %, clawback intégral. 75 % des LPs du Fund VIII réinvestissent.',
      finnSays:
        'Le fundraising, c\'est vendre une promesse basée sur le passé. Le track record est roi : pas de performance, pas de levée !',
    },
  },

  // ── 4. J-curve ─────────────────────────────
  {
    id: 'pe-04',
    title: 'La J-curve',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La J-curve décrit le profil de rendement typique d\'un fonds de PE : des rendements négatifs les premières années (appels de fonds, frais de gestion, investissements à valorisation initiale) suivis de performances positives quand les investissements mûrissent et les sorties commencent.',
      keyPoints: [
        'Années 1-3 : rendements négatifs (frais, appels de capital, pas encore de sorties)',
        'Années 3-5 : point d\'inflexion, premières réalisations et revalorisations',
        'Années 5-10 : distributions croissantes, TRI en hausse',
        'Le cash drag pénalise le TRI dans les premières années',
        'Un bon GP minimise la J-curve en déployant rapidement et en créant de la valeur tôt',
      ],
      explanation:
        'Au début de la vie du fonds, les appels de fonds et les frais de gestion créent des cash flows négatifs, tandis que les investissements sont valorisés à leur coût ou subissent des dépréciations initiales. Le TRI est mécaniquement négatif. À mesure que les participations prennent de la valeur (croissance opérationnelle, désendettement) et que les premières sorties se réalisent (avec des multiples de 2-3x), le TRI remonte et dépasse zéro. La profondeur et la durée de la J-curve dépendent de la stratégie : un fonds de growth equity aura une J-curve moins prononcée qu\'un fonds de LBO large-cap. Le vintage diversification (investir régulièrement dans plusieurs fonds) permet de lisser la J-curve au niveau du portefeuille.',
      formula: 'TRI du fonds = taux r tel que : Σ [CFt / (1+r)^t] = 0\noù CFt = appels (négatifs) et distributions (positifs)',
      example:
        'Fonds Buyout vintage 2018 (1 Md EUR) : Année 1 : -150 M EUR (appels), NAV = 80 M. Année 2 : -300 M, NAV = 350 M. Année 3 : -200 M, première distribution 100 M, NAV = 600 M. TRI passe de -12 % (Y1) à -5 % (Y2) à +8 % (Y3) à +18 % (Y5, après plus de distributions). La J-curve s\'aplatit vers l\'année 3.',
      finnSays:
        'La J-curve fait peur aux débutants, mais c\'est parfaitement normal ! C\'est le prix à payer avant de récolter les fruits du PE.',
    },
  },

  // ── 5. Deal sourcing ───────────────────────
  {
    id: 'pe-05',
    title: 'Le Deal sourcing',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le deal sourcing est le processus d\'identification et d\'origination des opportunités d\'investissement. Un fonds de buyout mid-cap examine typiquement 200-300 dossiers par an pour réaliser 3-5 acquisitions.',
      keyPoints: [
        'Les processus d\'enchères organisés par des banques M&A représentent 60-70 % des deals',
        'Le proprietary deal flow (deals bilatéraux) offre souvent de meilleures conditions',
        'Le deal funnel : screening → NDA → analyse préliminaire → IOI/NBO → due diligence → SPA',
        'Le thematic sourcing cible des secteurs ou des thèses d\'investissement spécifiques',
        'Les critères de screening : taille, secteur, géographie, profil de croissance, qualité du management',
      ],
      explanation:
        'Dans un processus d\'enchères (auction), une banque M&A (Goldman, Rothschild, Lazard) est mandatée par le vendeur pour organiser la vente. Elle envoie un teaser aux acquéreurs potentiels, puis un CIM (Confidential Information Memorandum) après signature d\'un NDA. Les acquéreurs intéressés soumettent une IOI (Indicative Offer), puis une NBO (Non-Binding Offer) après la due diligence préliminaire. Le shortlist (2-3 candidats) accède à la data room complète pour la due diligence confirmatory. Le processus propriétaire est plus rare mais souvent plus attractif : relations directes avec des familles, management, ou intermédiaires de niche. Le GP qui a le meilleur réseau et la meilleure connaissance sectorielle source les meilleurs deals.',
      example:
        'Un fonds mid-cap français examine 250 dossiers en 2024. Après screening, 80 passent en comité de pré-analyse. 25 font l\'objet d\'une IOI. 12 sont shortlistés. 8 entrent en due diligence approfondie. 4 arrivent en comité d\'investissement final. 3 deals sont conclus, pour un capital déployé de 450 M EUR.',
      finnSays:
        'Le sourcing, c\'est 80 % du job en PE. Voir les meilleurs deals avant les autres, c\'est l\'avantage compétitif numéro un !',
    },
  },

  // ── 6. Due Diligence ───────────────────────
  {
    id: 'pe-06',
    title: 'La Due Diligence',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'La due diligence (DD) est l\'investigation approfondie menée avant l\'acquisition. Elle couvre les aspects financiers, commerciaux, juridiques, fiscaux, environnementaux et opérationnels de la cible. Son coût peut atteindre 1-3 % de la valeur de la transaction.',
      keyPoints: [
        'DD financière : qualité des résultats, normalisation de l\'EBITDA, besoin en fonds de roulement, CAPEX',
        'DD commerciale (market due diligence) : marché, positionnement, avantages compétitifs, clients',
        'DD juridique : contrats clés, litiges, propriété intellectuelle, conformité',
        'DD fiscale : risques fiscaux, optimisation, structuration',
        'DD managériale : évaluation du leadership, plans de succession, rétention',
      ],
      explanation:
        'La DD financière, généralement menée par un Big Four (Deloitte, PwC, EY, KPMG), analyse en profondeur la qualité des bénéfices (Quality of Earnings, QoE). Elle ajuste l\'EBITDA reporté pour les éléments non récurrents, les changements de méthodes comptables, et les anomalies de BFR. Les red flags typiques : concentration client (> 20 % du CA avec un seul client), EBITDA ajusté très différent du reporté, BFR instable, CAPEX de maintenance sous-estimé. La DD commerciale, confiée à un cabinet de conseil stratégique (Bain, McKinsey, LEK), valide la thèse d\'investissement en analysant la dynamique du marché, la récurrence des revenus, et les risques de disruption. La VDD (Vendor Due Diligence), préparée par le vendeur, accélère le processus mais le GP doit la challenger.',
      example:
        'DD sur une entreprise de services B2B (EV 500 M EUR, 12x EBITDA). La DD financière révèle : EBITDA reporté 42 M EUR, ajustements de -3 M EUR (litige exceptionnel comptabilisé en opérationnel, CEO compensation above market). EBITDA normalisé : 39 M EUR. Multiple réel : 12,8x. La DD commerciale confirme un marché en croissance de 5 %/an, un taux de rétention client de 95 %, mais identifie un risque de disruption technologique à moyen terme.',
      finnSays:
        'La DD, c\'est le moment de vérité. Mieux vaut dépenser 3 M EUR en DD que perdre 300 M EUR sur un mauvais deal !',
    },
  },

  // ── 7. Valorisation PE ─────────────────────
  {
    id: 'pe-07',
    title: 'La valorisation en PE',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'La valorisation en Private Equity repose principalement sur les multiples d\'EBITDA, complétés par le DCF et les transactions comparables. L\'objectif est de déterminer un prix d\'entrée qui permet de générer un TRI cible de 20-25 % brut.',
      keyPoints: [
        'Le multiple EV/EBITDA est la métrique de valorisation dominante en PE',
        'Les multiples sectoriels varient de 6-8x (industrie) à 15-25x (tech/santé)',
        'Le LBO model back-solve : partir du TRI cible et remonter au prix d\'entrée max',
        'Les ajustements d\'EBITDA (run-rate, synergies) sont critiques et souvent contestés',
        'La valorisation intègre la structure de dette, le désendettement et le multiple de sortie',
      ],
      explanation:
        'En PE, la valorisation est indissociable de la structuration du deal. Le modèle LBO calcule le TRI en fonction du prix d\'entrée, du levier (dette/equity), du plan d\'affaires (croissance de l\'EBITDA), du désendettement (remboursement de la dette grâce au free cash flow), et du multiple de sortie. Les trois leviers de création de valeur sont : (1) la croissance de l\'EBITDA (revenue growth + amélioration des marges), (2) le désendettement (deleveraging), et (3) l\'expansion de multiple (vendre à un multiple supérieur au multiple d\'achat). Le DCF est utilisé en complément mais moins central qu\'en M&A coté, car les flux de trésorerie disponibles sont largement consacrés au service de la dette.',
      formula: 'EV = EBITDA × Multiple\nEquity value = EV - Dette nette\nTRI = [(Equity sortie / Equity entrée)^(1/n)] - 1\nMOIC = Equity sortie / Equity entrée',
      example:
        'Acquisition d\'une cible à 10x EBITDA (50 M EUR → EV = 500 M EUR). Dette : 300 M (6x), Equity : 200 M (4x). Plan sur 5 ans : EBITDA passe à 70 M EUR (+40 % de croissance), dette remboursée à 180 M EUR. Sortie à 10x : EV = 700 M, Equity = 520 M. MOIC = 520/200 = 2,6x. TRI = (2,6)^(1/5) - 1 ≈ 21 %.',
      finnSays:
        'En PE, la valorisation n\'est pas un exercice académique. C\'est un outil de décision : à quel prix le deal marche-t-il pour atteindre mon TRI cible ?',
    },
  },

  // ── 8. Structuration ───────────────────────
  {
    id: 'pe-08',
    title: 'La structuration d\'un LBO',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'Le LBO (Leveraged Buyout) consiste à acquérir une entreprise en utilisant un fort effet de levier. La dette d\'acquisition est remboursée par les cash flows de la cible. La structuration optimale du capital est la clé du rendement pour le sponsor PE.',
      keyPoints: [
        'La structure de dette typique : senior (3-4x EBITDA) + subordonnée/mezzanine (1-2x)',
        'Le ratio dette/equity détermine le levier et le TRI potentiel',
        'La dette senior secured a la priorité sur les actifs et les flux',
        'Le covenant package protège les prêteurs (leverage ratio, couverture d\'intérêts)',
        'Les unitranches simplifient la structure en combinant senior et mezzanine',
      ],
      explanation:
        'La structure classique d\'un LBO mid-cap comprend : (1) la dette senior (Term Loan A amortissable + Term Loan B bullet), financée par des banques ou des CLO, avec un spread de E+350-500 bps ; (2) la dette mezzanine ou second lien (12-15 % all-in, souvent avec des PIK ou des warrants) ; (3) l\'equity du sponsor (30-45 % du total). Le holding d\'acquisition (HoldCo) porte la dette et reçoit les dividendes de la cible (OpCo) pour servir la dette. La structuration fiscale est essentielle : l\'intégration fiscale permet de déduire les intérêts de la dette d\'acquisition du résultat de la cible. Les covenant-lite (cov-lite) ont gagné du terrain : moins de maintenance covenants, plus de flexibilité pour le sponsor.',
      formula: 'Levier total = Dette totale / EBITDA\nDSCR (Debt Service Coverage Ratio) = EBITDA / (Intérêts + Remboursement principal)\nCash sweep = % du FCF excédentaire affecté au remboursement anticipé',
      example:
        'LBO d\'une entreprise de services (EBITDA 40 M EUR, EV 360 M EUR = 9x). Structure : TLA 80 M (2x, E+375, amort 7 ans), TLB 100 M (2,5x, E+425, bullet 7 ans), Mezzanine 40 M (1x, 12 % PIK), Equity 140 M (3,5x). Levier total : 5,5x. DSCR initial : 40/(12+11,4) = 1,7x. Cash sweep 50 % au-delà du DSCR de 1,2x.',
      finnSays:
        'Le LBO, c\'est un art : trop de dette et tu étouffes la cible, pas assez et tu ne maximises pas le TRI. L\'équilibre est tout !',
    },
  },

  // ── 9. Management packages ─────────────────
  {
    id: 'pe-09',
    title: 'Les management packages',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le management package (MIP - Management Incentive Plan) aligne les intérêts du management avec ceux du fonds de PE. Le dirigeant co-investit et bénéficie d\'un mécanisme de ratchet qui amplifie son retour si les objectifs sont atteints.',
      keyPoints: [
        'Le sweet equity permet au management d\'investir dans des titres à rendement amplifié',
        'Le ratchet augmente la participation du management si le TRI/MOIC dépasse certains seuils',
        'Les BSA (bons de souscription d\'actions) et AGA (actions gratuites) sont les outils courants',
        'Le management investit typiquement 1-5 % de l\'equity, mais peut atteindre 15-20 % avec le ratchet',
        'Les conditions de vesting et de good/bad leaver protègent le sponsor',
      ],
      explanation:
        'Le management package type comprend : (1) un investissement en actions ordinaires (« hard equity ») aux mêmes conditions que le sponsor ; (2) un investissement en sweet equity (obligations convertibles, BSA) à un prix inférieur mais soumis à des conditions de performance. Le ratchet fonctionne par paliers : si le MOIC atteint 2x, le management passe de 5 % à 10 % de l\'equity ; si le MOIC atteint 3x, il passe à 15 %. Les clauses de good leaver (départ volontaire ou licenciement sans faute : rachat à la fair market value) et bad leaver (faute : rachat au prix d\'entrée ou au nominal) protègent les intérêts du sponsor. La fiscalité des management packages est un sujet sensible : l\'administration fiscale scrute la qualification en plus-values vs revenus.',
      example:
        'MIP dans un LBO mid-cap (Equity totale 100 M EUR). Le CEO investit 500 K EUR en actions ordinaires (0,5 %) + 200 K EUR en BSA. Avec le ratchet : si MOIC < 2x → CEO à 2,5 % ; si MOIC 2-3x → CEO à 7,5 % ; si MOIC > 3x → CEO à 12 %. Sur une sortie à MOIC 3x (Equity 300 M EUR), le CEO reçoit 12 % × 300 M = 36 M EUR pour un investissement de 700 K EUR, soit un MOIC personnel de 51x.',
      finnSays:
        'Le management package, c\'est le turbo du dirigeant en LBO. Quand le fonds gagne, le management gagne encore plus — c\'est l\'alignement d\'intérêts parfait !',
    },
  },

  // ── 10. Value creation ─────────────────────
  {
    id: 'pe-10',
    title: 'La création de valeur',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'La création de valeur est la raison d\'être du Private Equity. Elle se décompose en trois leviers : la croissance de l\'EBITDA, le désendettement (deleveraging), et l\'expansion du multiple de sortie. Les meilleurs GP créent de la valeur principalement par l\'opérationnel.',
      keyPoints: [
        'Levier 1 : Croissance de l\'EBITDA = revenue growth + amélioration de la marge',
        'Levier 2 : Deleveraging = remboursement de la dette grâce au FCF',
        'Levier 3 : Expansion de multiple = vendre plus cher qu\'on n\'a acheté (relatif)',
        'Le value bridge décompose la création de valeur entre ces trois leviers',
        'Les « 100 jours » post-closing définissent les priorités de transformation',
      ],
      explanation:
        'L\'analyse du value bridge est fondamentale. Sur un MOIC de 3x typique en buyout, la décomposition est souvent : EBITDA growth (~45 %), deleveraging (~35 %), multiple expansion (~20 %). Les GP les plus sophistiqués se concentrent sur la croissance opérationnelle : digitalisation, internationalisation, pricing power, excellence commerciale. Le plan des 100 jours post-acquisition définit les quick wins (optimisation des coûts, renégociation fournisseurs) et les projets structurants (ERP, organisation, stratégie M&A). Les operating partners (anciens dirigeants intégrés à l\'équipe du GP) apportent une expertise sectorielle et opérationnelle. L\'ESG est devenu un levier de création de valeur (réduction des coûts énergétiques, attractivité employeur, accès clients).',
      formula: 'MOIC = (EV_sortie - Dette_sortie) / Equity_entrée\nValue bridge : MOIC = f(ΔEBITDA, ΔMultiple, ΔDette nette)\nContribution EBITDA growth = (EBITDA_sortie - EBITDA_entrée) × Multiple_entrée / Equity_entrée',
      example:
        'Acquisition à EV 400 M, EBITDA 50 M (8x), dette 240 M, equity 160 M. Sortie après 5 ans : EBITDA 80 M, multiple 9x, EV 720 M, dette 120 M, equity 600 M. MOIC = 3,75x. Value bridge : EBITDA growth (+30 M × 8x = 240 M → 150 % de la valeur), deleveraging (120 M → 75 %), multiple expansion (+1x × 80 M = 80 M → 50 %). Total = 440 M de valeur créée.',
      finnSays:
        'En PE, les meilleurs deals ne sont pas ceux achetés au meilleur prix — ce sont ceux où la valeur opérationnelle a été créée par le travail du GP et du management !',
    },
  },

  // ── 11. Build-up ───────────────────────────
  {
    id: 'pe-11',
    title: 'La stratégie Build-up',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le build-up (ou buy-and-build) consiste à réaliser des acquisitions complémentaires (add-ons) autour d\'une plateforme initiale pour créer un leader sectoriel. C\'est la stratégie de création de valeur la plus populaire en PE mid-cap.',
      keyPoints: [
        'La plateforme est l\'acquisition initiale qui sert de base au build-up',
        'Les add-ons sont achetés à des multiples inférieurs (arbitrage de multiple)',
        'L\'intégration est le facteur clé de succès : synergies de revenus et de coûts',
        'Le multiple d\'entrée moyen des add-ons est 1-3x inférieur à celui de la plateforme',
        'Le build-up peut transformer un acteur régional en leader national/européen',
      ],
      explanation:
        'L\'arbitrage de multiple est le premier levier : si la plateforme est valorisée à 10x EBITDA et les add-ons sont achetés à 6-7x, chaque euro d\'EBITDA acquis crée immédiatement de la valeur (le marché valorise l\'ensemble au multiple de la plateforme, voire plus). Les synergies amplifient l\'effet : mutualisation des achats (3-5 % d\'économies), cross-selling, partage de best practices, rationalisation administrative. Les risques sont réels : complexité d\'intégration, choc culturel, dette d\'intégration cachée, management dilué. Les secteurs fragmentés sont les cibles idéales : services aux entreprises, santé, distribution spécialisée, IT services. Un build-up réussi peut doubler ou tripler l\'EBITDA en 3-5 ans.',
      example:
        'Build-up dans les services de propreté. Plateforme : EBITDA 15 M EUR, acquise à 9x = 135 M EUR. Année 2 : 3 add-ons (EBITDA total 8 M EUR) à 6x moyen = 48 M EUR. Année 4 : 2 add-ons (5 M EUR) à 6,5x = 32,5 M EUR. EBITDA combiné + synergies : 32 M EUR. Sortie à 10x : EV = 320 M EUR. MOIC equity > 3x grâce à l\'arbitrage de multiple et aux synergies.',
      finnSays:
        'Le build-up, c\'est le Lego du PE ! Tu assembles des petites briques pour construire un champion. L\'arbitrage de multiple, c\'est presque de l\'argent gratuit.',
    },
  },

  // ── 12. Levier opérationnel ────────────────
  {
    id: 'pe-12',
    title: 'L\'amélioration opérationnelle',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'L\'amélioration opérationnelle est au cœur de la création de valeur en PE. Elle vise à augmenter l\'EBITDA par la croissance du chiffre d\'affaires, l\'optimisation des coûts et l\'amélioration de l\'efficacité opérationnelle.',
      keyPoints: [
        'Le pricing power : augmenter les prix de 1-3 %/an sur des marchés à faible élasticité',
        'L\'optimisation des achats : renégociation fournisseurs, centralisation, volume discounts',
        'La digitalisation : automatisation des processus, ERP, CRM, data analytics',
        'L\'excellence commerciale : force de vente, cross-sell, upsell, expansion géographique',
        'Le lean management : réduction des gaspillages, amélioration des processus',
      ],
      explanation:
        'Un GP opérationnel de qualité dispose d\'une équipe d\'operating partners avec une expertise sectorielle et fonctionnelle. Les quick wins (6-12 premiers mois) incluent : renégociation des contrats fournisseurs clés (-3-5 % sur les achats), optimisation du BFR (réduction des délais clients, allongement des délais fournisseurs), rationalisation des dépenses générales. Les projets structurants (12-36 mois) incluent : déploiement d\'un ERP, refonte de l\'organisation commerciale, lancement sur de nouveaux marchés, développement de nouveaux produits. La marge d\'EBITDA peut s\'améliorer de 200-500 bps sur la durée de détention. Le KPI dashboard (tableau de bord mensuel) permet un suivi rapproché de la performance opérationnelle.',
      formula: 'Marge EBITDA = EBITDA / CA × 100\nImpact pricing = ΔPrix × Volume × (1 - élasticité)\nÉconomies achats = Base achats × % de réduction',
      example:
        'Entreprise de distribution spécialisée (CA 200 M EUR, EBITDA 24 M EUR, marge 12 %). Plan opérationnel sur 4 ans : pricing +2 %/an (+4 M EUR), optimisation achats -3 % (-3,6 M EUR sur base achats de 120 M), digitalisation (-2 M EUR de coûts), croissance organique +5 %/an (+40 M EUR de CA). EBITDA cible : 38 M EUR (marge 15,8 %). Amélioration de la marge : +380 bps.',
      finnSays:
        'L\'opérationnel, c\'est là où les meilleurs GP se distinguent. N\'importe qui peut mettre du levier, mais améliorer une entreprise, ça demande un vrai savoir-faire !',
    },
  },

  // ── 13. Expansion de multiples ─────────────
  {
    id: 'pe-13',
    title: 'L\'expansion de multiples',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'L\'expansion de multiple (multiple expansion) se produit lorsque le multiple de sortie est supérieur au multiple d\'entrée. C\'est un levier puissant de création de valeur, mais aussi le plus difficile à contrôler car il dépend des conditions de marché.',
      keyPoints: [
        'Le multiple d\'entrée moyen en buyout européen est de 9-12x EBITDA',
        'L\'expansion de multiple peut provenir d\'un repositionnement stratégique',
        'Le changement de catégorie (mid-cap → large-cap) justifie un re-rating',
        'La récurrence des revenus fait monter les multiples (SaaS, abonnement)',
        'Le risque de multiple compression (contraction) est le scénario à éviter',
      ],
      explanation:
        'L\'expansion de multiple peut être « méritée » (le business s\'est transformé et justifie un multiple plus élevé) ou « conjoncturelle » (les multiples de marché ont monté). Les facteurs qui justifient un re-rating : passage d\'un modèle transactionnel à récurrent (multiples SaaS vs services traditionnels : 15x vs 8x), croissance accélérée, internationalisation, réduction de la dépendance client. Le build-up est un driver classique : un acteur fragmenté à 6x devient un leader structuré à 10x. Les risques : la multiple compression en période de remontée des taux (corrélation négative multiples/taux) peut annuler les gains opérationnels. Les GP prudents modélisent le TRI avec un multiple de sortie = multiple d\'entrée (conservatif).',
      example:
        'Entreprise de logiciel on-premise acquise à 8x EBITDA. Le GP la transforme en modèle SaaS (ARR growth 30 %/an, gross margin 80 %). Au bout de 4 ans, 70 % des revenus sont récurrents. Le marché valorise désormais à 12x EBITDA (voire 5x ARR). Expansion de multiple : +4x, soit +50 % de la valeur de l\'equity créée.',
      finnSays:
        'L\'expansion de multiple, c\'est la cerise sur le gâteau. Ne construis jamais ton business plan dessus, mais réjouis-toi quand elle arrive !',
    },
  },

  // ── 14. Gouvernance ────────────────────────
  {
    id: 'pe-14',
    title: 'La gouvernance en PE',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La gouvernance d\'une entreprise sous PE est un levier de création de valeur souvent sous-estimé. Le fonds structure un conseil d\'administration actif, des comités spécialisés et un reporting rigoureux pour piloter la performance.',
      keyPoints: [
        'Le board comprend les représentants du GP, les dirigeants et des administrateurs indépendants',
        'Les comités clés : stratégie, audit, rémunération, M&A (pour les build-ups)',
        'Le reporting mensuel couvre le P&L, le bilan, le cash flow et les KPIs opérationnels',
        'Les board meetings sont typiquement mensuels (vs trimestriels pour les sociétés cotées)',
        'Le GP a des droits de veto sur les décisions stratégiques (CAPEX, M&A, recrutement clé)',
      ],
      explanation:
        'La gouvernance PE est plus active que la gouvernance cotée. Le GP nomme 2-3 administrateurs (souvent les deal partners + un operating partner) et siège à tous les comités. Le reporting mensuel inclut un tableau de bord détaillé : CA, EBITDA, cash flow, BFR, endettement, comparé au budget et au plan d\'affaires. Les réunions de board mensuelles permettent un pilotage fin avec des décisions rapides. Les droits de veto du pacte d\'actionnaires couvrent : les investissements > un certain seuil, les acquisitions, l\'embauche/licenciement des dirigeants clés, les distributions de dividendes, et l\'endettement additionnel. Cette gouvernance rapprochée est considérée comme l\'un des avantages structurels du PE par rapport aux marchés cotés.',
      example:
        'Entreprise sous LBO, board de 7 membres : 3 représentants du GP (deal partner, operating partner, principal), le CEO, le CFO, et 2 indépendants sectoriels. Réunion mensuelle de 3h : revue de la performance (30 min), projets stratégiques (60 min), M&A pipeline (30 min), RH et organisation (30 min), sujets divers (30 min). Le GP reçoit un flash report hebdomadaire sur les KPIs clés.',
      finnSays:
        'En PE, le board n\'est pas une chambre d\'enregistrement. C\'est un vrai outil de pilotage. La gouvernance active, c\'est un avantage structurel !',
    },
  },

  // ── 15. Monitoring ─────────────────────────
  {
    id: 'pe-15',
    title: 'Le monitoring des participations',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le monitoring est le suivi continu des participations du portefeuille. Il permet de détecter les problèmes tôt, de mesurer la performance par rapport au plan, et de préparer les sorties au bon moment.',
      keyPoints: [
        'Le reporting trimestriel aux LPs : NAV, TRI, TVPI, DPI, RVPI',
        'La valorisation des participations suit les guidelines de l\'IPEV (International Private Equity Valuation)',
        'Le traffic light system (vert/orange/rouge) priorise l\'attention du GP',
        'Les covenants bancaires sont suivis de près pour éviter les breaches',
        'Le benchmark vs le plan d\'affaires identifie les dérives',
      ],
      explanation:
        'Le GP valorise chaque participation trimestriellement selon les guidelines IPEV : multiples de comparables cotés (ajustés pour l\'illiquidité), transactions récentes, DCF. La NAV du fonds est la somme des fair market values des participations, nette de la dette du fonds et des frais. Le TVPI (Total Value to Paid-In) = (distributions + NAV résiduelle) / capital appelé. Le DPI (Distributions to Paid-In) = distributions réalisées / capital appelé. Le RVPI (Residual Value to Paid-In) = NAV résiduelle / capital appelé. Le GP surveille de près les ratios de covenants : un breach peut déclencher une renégociation coûteuse (amendment, waiver fee de 50-100 bps). Les situations de distress nécessitent une intervention rapide : restructuration de la dette, injection de capital, changement de management.',
      formula: 'TVPI = (Distributions cumulées + NAV) / Capital appelé\nDPI = Distributions cumulées / Capital appelé\nRVPI = NAV / Capital appelé\nTVPI = DPI + RVPI',
      example:
        'Fonds Buyout V (vintage 2019, 800 M EUR) au T4 2024. Capital appelé : 720 M EUR, distributions : 280 M EUR, NAV : 850 M EUR. TVPI = (280 + 850) / 720 = 1,57x. DPI = 280/720 = 0,39x. RVPI = 850/720 = 1,18x. TRI net : 14,2 %. Sur 6 participations : 3 vertes (en ligne ou au-dessus du plan), 2 oranges (légèrement en dessous), 1 rouge (covenant breach, plan de restructuration en cours).',
      finnSays:
        'Le monitoring, c\'est la vigie du navire. Détecte les problèmes tôt et tu pourras les corriger avant qu\'ils ne deviennent des catastrophes !',
    },
  },

  // ── 16. Trade sale ─────────────────────────
  {
    id: 'pe-16',
    title: 'La sortie par trade sale',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le trade sale (cession à un industriel) est la voie de sortie la plus courante en PE, représentant environ 50 % des exits. L\'acquéreur stratégique paie typiquement un premium grâce aux synergies qu\'il peut réaliser.',
      keyPoints: [
        'Le strategic premium : l\'industriel peut payer plus qu\'un fonds grâce aux synergies',
        'Le processus de vente est organisé par une banque M&A (mandat de vente)',
        'Les enchères compétitives (2-3 bidders en final) maximisent le prix',
        'Le locked-box vs completion accounts : deux mécanismes de prix différents',
        'Les W&I insurance (garanties de passif) remplacent de plus en plus les escrow',
      ],
      explanation:
        'Le processus de vente type dure 4-6 mois : préparation (VDD, CIM, data room), marketing (teaser, lancement), phase indicative (management presentations, IOI), phase engageante (DD confirmatory, NBO), négociation du SPA (Share Purchase Agreement), signing et closing. Le locked-box fixe le prix sur la base de comptes à une date antérieure, offrant de la certitude. Les completion accounts ajustent le prix en fonction du bilan au closing (cash, dette, BFR). Le gap entre signing et closing (1-3 mois pour les autorisations réglementaires) est couvert par des MAC clauses (Material Adverse Change). La W&I insurance (Warranty & Indemnity) est devenue standard : elle protège l\'acheteur contre les risques de déclarations inexactes, permettant au vendeur de distribuer immédiatement les proceeds.',
      example:
        'Vente d\'un leader des dispositifs médicaux (EBITDA 45 M EUR). Process organisé par Rothschild, 4 industriels en phase finale. Le vainqueur (groupe américain) offre 14x EBITDA = 630 M EUR, avec un premium de 15 % sur les offres concurrentes grâce à des synergies estimées à 10 M EUR/an. Mécanisme locked-box, W&I de 100 M EUR. Le fonds PE réalise un MOIC de 3,2x et un TRI brut de 28 % sur 4 ans de détention.',
      finnSays:
        'Le trade sale à un industriel, c\'est souvent le jackpot ! Les synergies justifient un premium que les financiers ne peuvent pas payer.',
    },
  },

  // ── 17. IPO exit ───────────────────────────
  {
    id: 'pe-17',
    title: 'La sortie par IPO',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'L\'introduction en bourse (IPO) est une voie de sortie prestigieuse mais plus complexe. Elle ne représente que 10-15 % des exits PE, mais peut offrir les meilleurs multiples dans les marchés haussiers. Le GP conserve souvent une participation significative après l\'IPO.',
      keyPoints: [
        'L\'IPO ne permet généralement qu\'un exit partiel initial (vente de 20-30 % du capital)',
        'Le lock-up de 180 jours empêche le GP de vendre immédiatement',
        'L\'IPO discount (10-15 %) compense les investisseurs pour le risque de nouveau coté',
        'Le dual-track process (préparation simultanée IPO + trade sale) maximise les options',
        'Le de-SPAC est une alternative plus rapide mais controversée',
      ],
      explanation:
        'Le processus IPO prend 6-12 mois : sélection des banques (ECM banks), due diligence, rédaction du prospectus (AMF ou équivalent), roadshow institutionnel (2-3 semaines), book building, pricing, cotation. Le GP vend typiquement 20-30 % à l\'IPO et se désengage progressivement par des ABB (Accelerated Book Building) dans les 12-24 mois suivants. Le flottant minimum est de 25 % sur Euronext. Les avantages : valorisation potentiellement élevée, sortie progressive, liquidité pour les co-investisseurs. Les inconvénients : coût élevé (3-5 % du montant levé), contraintes réglementaires (reporting, gouvernance cotée), risque de marché (fenêtre d\'IPO qui se ferme). Le dual-track prépare les deux options en parallèle : le GP choisit la plus attractive au dernier moment.',
      example:
        'IPO d\'une entreprise de technologie médicale (EBITDA 60 M EUR). Le GP détient 75 % du capital. IPO à une valorisation de 15x EBITDA = 900 M EUR. Le GP vend 25 % à l\'IPO (225 M EUR de proceeds). Après le lock-up de 6 mois, il réalise un ABB de 20 % (180 M EUR). Sortie complète en 18 mois. MOIC total : 3,8x. TRI : 32 % sur 5 ans.',
      finnSays:
        'L\'IPO, c\'est la consécration pour une entreprise PE. Mais attention : c\'est un exit lent et la fenêtre de marché peut se fermer !',
    },
  },

  // ── 18. Secondary ──────────────────────────
  {
    id: 'pe-18',
    title: 'Le marché secondaire',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le marché secondaire du PE permet aux LPs de revendre leurs parts de fonds avant la liquidation, et aux GPs de restructurer leurs portefeuilles (GP-led secondaries). Ce marché a explosé, dépassant 130 Mds $ de transactions en 2023.',
      keyPoints: [
        'LP secondaries : un LP vend sa participation dans un fonds à un autre investisseur',
        'GP-led secondaries (continuation vehicles) : le GP transfère des actifs dans un nouveau véhicule',
        'La décote LP typique est de 5-15 % par rapport à la dernière NAV',
        'Les acheteurs secondaires : Ardian, Lexington, Coller, HarbourVest',
        'Le strip sale : vente d\'un portefeuille de participations LP dans plusieurs fonds',
      ],
      explanation:
        'Les LP secondaries répondent à un besoin de liquidité des LPs (rééquilibrage de portefeuille, besoin de cash, changement de stratégie). L\'acheteur bénéficie d\'un portefeuille déjà constitué avec une visibilité sur les actifs (la J-curve est déjà passée). Les GP-led secondaries (continuation vehicles) ont connu une croissance explosive : le GP crée un nouveau véhicule qui rachète une ou plusieurs participations du fonds existant, permettant aux LPs de choisir entre le cash (à la NAV ou légèrement en dessous) et le roulement dans le nouveau véhicule. Un fairness opinion indépendant est requis pour gérer le conflit d\'intérêts (le GP est des deux côtés de la transaction). Les tender offers permettent aux LPs d\'exprimer le prix auquel ils sont prêts à vendre.',
      example:
        'GP-led secondary : un fonds de 2016 détient une participation à 250 M EUR (NAV) dans une entreprise de logiciels très performante. Le GP crée un continuation vehicle avec un nouvel investisseur lead (Ardian) qui investit 200 M EUR. Les LPs existants ont le choix : encaisser à 98 % de la NAV ou rouler dans le nouveau véhicule (60 % choisissent le cash, 40 % roulent). Le GP conserve sa participation et son carried, avec un horizon de 3-4 ans supplémentaires.',
      finnSays:
        'Le secondaire, c\'est la soupape de sécurité du PE. Il apporte la liquidité qui manquait à cette classe d\'actifs. Et pour les acheteurs, c\'est souvent une bonne affaire !',
    },
  },

  // ── 19. Dividend recap ─────────────────────
  {
    id: 'pe-19',
    title: 'Le dividend recapitalization',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le dividend recapitalization (dividend recap) consiste à lever de la dette additionnelle pour verser un dividende exceptionnel au sponsor PE. C\'est un moyen de cristalliser une partie du retour sans céder la participation.',
      keyPoints: [
        'Le recap permet de récupérer une partie du capital investi sans vendre',
        'Il améliore le TRI en accélérant les flux de retour (time value of money)',
        'Le risque : augmentation du levier qui peut fragiliser l\'entreprise',
        'Le marché des leveraged loans et high yield finance ces opérations',
        'Le recap est controversé : création de valeur pour le GP vs risque pour l\'entreprise',
      ],
      explanation:
        'Le dividend recap est possible quand l\'entreprise a suffisamment désendettée (deleveraging) et que les marchés de dette sont ouverts. Le GP lève de la dette additionnelle (souvent 1-2x EBITDA) et la distribue aux actionnaires sous forme de dividende exceptionnel. L\'impact sur le TRI est significatif : recevoir du cash tôt améliore le TRI grâce à la valeur temps de l\'argent. Par exemple, un MOIC de 3x sur 5 ans donne un TRI de 25 %, mais un MOIC de 3x dont 1x est reçu en année 2 (dividend recap) donne un TRI de 30 %+. Les critiques pointent le risque de re-leveraging excessif : l\'entreprise se retrouve avec plus de dette, moins de marge de manœuvre. Les agences de notation mettent souvent les émetteurs sous surveillance négative après un recap.',
      formula: 'Impact TRI du recap :\nSans recap : TRI = (3x)^(1/5) - 1 = 24,6 %\nAvec recap 1x en Y2 : TRI résolvant -1 + 1/(1+r)² + 2/(1+r)⁵ = 0 → TRI ≈ 31 %',
      example:
        'LBO réalisé en 2020 : equity 150 M EUR, EBITDA 40 M EUR, dette initiale 200 M EUR (5x). En 2023, EBITDA à 55 M EUR, dette remboursée à 140 M EUR (2,5x). Le GP lève 110 M EUR de dette additionnelle (leveraging à 4,5x) et distribue un dividende de 110 M EUR. Le GP a récupéré 73 % de son investissement sans vendre. TRI à ce stade : > 35 % grâce au timing du cash flow.',
      finnSays:
        'Le dividend recap, c\'est le money back avant la sortie. Ça booste le TRI, mais attention : trop de dette peut tuer le patient !',
    },
  },

  // ── 20. IRR, MOIC & DPI ────────────────────
  {
    id: 'pe-20',
    title: 'IRR, MOIC et DPI',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Les métriques de performance en PE sont spécifiques : le TRI (IRR), le MOIC (Multiple on Invested Capital) et le DPI (Distributions to Paid-In) sont les trois indicateurs que tout LP et GP doit maîtriser. Chacun raconte une partie différente de l\'histoire.',
      keyPoints: [
        'Le TRI (IRR) mesure le rendement annualisé pondéré par le temps',
        'Le MOIC mesure le multiple total de retour sur le capital investi',
        'Le DPI mesure les distributions effectives (cash-on-cash)',
        'Un TRI élevé avec un MOIC faible peut signifier un investissement court mais petit',
        'Les benchmarks : TRI net > 15 % (top quartile buyout), MOIC > 2x, DPI > 1x',
      ],
      explanation:
        'Le TRI est la métrique la plus utilisée mais peut être trompeuse : un petit deal vendu rapidement avec un gain modeste aura un TRI élevé mais peu d\'impact sur le fonds (le « IRR problem »). Le MOIC est plus intuitif : un MOIC de 2,5x signifie que chaque euro investi a rapporté 2,5 euros. Le DPI est le test ultime : c\'est l\'argent réellement distribué aux LPs, pas une valorisation sur papier. Un fonds peut afficher un TVPI de 2x mais un DPI de 0,5x si les sorties n\'ont pas eu lieu (unrealized value). Les LPs sophistiqués regardent le « DPI over time » pour évaluer la capacité du GP à transformer la NAV en distributions réelles. Le PME (Public Market Equivalent) compare le PE aux marchés cotés à risque ajusté : un Kaplan-Schoar PME > 1 signifie que le PE a surperformé.',
      formula: 'TRI : 0 = Σ CFt / (1 + TRI)^t\nMOIC = (Distributions + NAV résiduelle) / Capital investi\nDPI = Distributions cumulées / Capital investi\nKaplan-Schoar PME = Σ [Dist_t / Index_t] / Σ [Call_t / Index_t]',
      example:
        'Fonds Buyout VII (2017, 1,2 Md EUR). Au T4 2024 : capital investi 1,1 Md, distributions 950 M, NAV 880 M. MOIC = (950 + 880)/1 100 = 1,66x. DPI = 950/1 100 = 0,86x. RVPI = 880/1 100 = 0,80x. TRI net = 11,5 %. Benchmark top quartile (2017 vintage) : TRI 18 %, MOIC 2,0x. Ce fonds est dans le deuxième quartile.',
      finnSays:
        'TRI, MOIC, DPI : c\'est le trio magique du PE. Le TRI, c\'est la vitesse. Le MOIC, c\'est la distance. Le DPI, c\'est l\'arrivée. Les trois comptent !',
    },
  },

  // ── 21. Carried interest ───────────────────
  {
    id: 'pe-21',
    title: 'Le carried interest',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Le carried interest (carry) est la part des profits du fonds revenant au GP, typiquement 20 %. C\'est le mécanisme central d\'alignement d\'intérêts en PE et la principale source de rémunération des partners.',
      keyPoints: [
        'Le carry standard est de 20 % des profits au-delà du hurdle rate (7-8 %)',
        'Le hurdle rate (preferred return) assure que les LPs sont rémunérés en priorité',
        'Le catch-up (50-100 %) permet au GP de « rattraper » sa part une fois le hurdle atteint',
        'Le whole-fund carry (European waterfall) vs deal-by-deal (American waterfall)',
        'La clawback provision oblige le GP à rendre du carry si le fonds sous-performe globalement',
      ],
      explanation:
        'Le mécanisme de waterfall détermine l\'ordre de distribution : (1) retour du capital investi aux LPs, (2) preferred return (hurdle) aux LPs (8 % annualisé), (3) catch-up au GP (80-100 % des distributions suivantes jusqu\'à atteindre le ratio 80/20), (4) partage 80/20 (80 % LPs, 20 % GP). Le European waterfall (whole-fund) est plus protecteur pour les LPs : le carry n\'est payé que lorsque l\'ensemble du fonds a retourné le capital + hurdle. L\'American waterfall (deal-by-deal) permet au GP de recevoir du carry sur chaque deal profitable, même si le fonds global n\'a pas encore atteint le hurdle — d\'où l\'importance de la clawback. La fiscalité du carry varie : en France, il bénéficie d\'un régime fiscal avantageux (imposition comme plus-values) sous certaines conditions (investissement minimum du GP, durée de détention, ratios de performance).',
      formula: 'Carried interest = 20 % × max(0, Profits totaux - Hurdle cumulé)\nWhole-fund : Carry payé uniquement quand TVPI > (1 + hurdle)^n\nCatch-up = (Carry total dû - Carry déjà versé) / (1 - % carry)',
      example:
        'Fonds de 1 Md EUR, hurdle 8 %, carry 20 %, catch-up 100 %. Le fonds distribue 2 Md EUR en 5 ans. Étape 1 : retour du capital (1 Md). Étape 2 : hurdle 8 % × 5 ans ≈ 469 M EUR. Étape 3 : catch-up 100 % au GP → 117 M EUR (pour atteindre 20 % du profit total). Étape 4 : les 414 M EUR restants sont partagés 80/20. Carry total GP : 117 + 83 = 200 M EUR (= 20 % de 1 Md de profit). LPs reçoivent : 1 800 M EUR.',
      finnSays:
        'Le carry, c\'est le Graal du PE ! 20 % des profits, ça peut représenter des sommes colossales. Mais avec le hurdle et la clawback, il faut d\'abord performer pour les LPs.',
    },
  },

  // ── 22. Examen final ───────────────────────
  {
    id: 'pe-22',
    title: 'Examen final Private Equity',
    xp: 500,
    duration: '60 min',
    content: {
      introduction:
        'Cet examen final couvre l\'ensemble du cycle de vie du Private Equity : fundraising, deal sourcing, due diligence, structuration, création de valeur, monitoring et sortie. Il teste ta capacité à raisonner comme un professionnel du PE.',
      keyPoints: [
        'Fundraising et relations LP/GP : termes des fonds, alignement d\'intérêts',
        'Deal execution : sourcing, DD, valorisation, structuration LBO',
        'Création de valeur : opérationnel, build-up, expansion de multiples',
        'Métriques de performance : TRI, MOIC, DPI, value bridge',
        'Stratégies de sortie : trade sale, IPO, secondaire, dividend recap',
      ],
      explanation:
        'L\'examen combine des cas pratiques et des questions conceptuelles. Tu dois être capable de : (1) évaluer les termes d\'un fonds PE (management fee, carry, hurdle), (2) construire un modèle LBO simplifié et calculer le TRI/MOIC, (3) décomposer la création de valeur (value bridge), (4) identifier les red flags en due diligence, (5) comparer les différentes voies de sortie et leurs implications, (6) calculer les métriques de performance d\'un fonds (TVPI, DPI, TRI). Le PE est un monde de praticiens : les réponses doivent refléter le réalisme du terrain, pas seulement la théorie.',
      example:
        'Question type : Un fonds acquiert une cible à 9x EBITDA (EBITDA = 30 M EUR). Structure : 4x de dette senior, 1,5x de mezzanine, le reste en equity. En 5 ans, l\'EBITDA atteint 45 M EUR, la dette est remboursée à 2x EBITDA, et la sortie se fait à 10x. (a) Calculez l\'equity à l\'entrée et à la sortie. (b) Calculez le MOIC et le TRI. (c) Décomposez la création de valeur.',
      finnSays:
        'Tu maîtrises maintenant le PE de A à Z ! Du fundraising au carried interest, tu penses comme un investisseur en capital. Bravo, banker d\'élite !',
    },
  },
];
