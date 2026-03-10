import type { Lesson } from '../types';

export const corporateLessons: Lesson[] = [
  {
    id: 'corp-1',
    title: 'Le marché du M&A',
    xp: 100,
    duration: '12 min',
    content: {
      introduction:
        "Les fusions-acquisitions (M&A) représentent l'un des marchés les plus dynamiques de la finance d'entreprise. Chaque année, des milliers de milliards de dollars de transactions sont réalisées dans le monde. Ce marché structure la croissance externe des entreprises et mobilise banquiers, avocats et consultants.",
      keyPoints: [
        "Le marché du M&A se divise en deux grandes catégories : les fusions (merger), où deux entités se combinent, et les acquisitions, où une entreprise en rachète une autre.",
        "Les vagues de M&A sont cycliques et corrélées aux conditions macroéconomiques : taux bas, liquidité abondante et confiance des dirigeants alimentent les deals.",
        "Les principaux acteurs sont les banques d'investissement (conseil), les fonds de private equity (acheteurs), les cabinets d'avocats et les Big Four (due diligence).",
        "Les motivations incluent les synergies de coûts et de revenus, la diversification géographique, l'acquisition de technologie et l'élimination de concurrents."
      ],
      explanation:
        "Le marché mondial du M&A représente entre 3 000 et 5 000 milliards de dollars par an selon les cycles. On distingue les transactions stratégiques (entre industriels) des transactions financières (menées par des fonds). Les deals stratégiques visent généralement des synergies opérationnelles, tandis que les fonds recherchent un retour financier via l'effet de levier.\n\nLes transactions se classent aussi par taille : les mega-deals (>10 Md$), le mid-market (100 M$ à 1 Md$) et le small-cap (<100 M$). Chaque segment a ses spécificités en termes de processus, de valorisation et d'acteurs impliqués.\n\nLe processus de M&A suit des étapes standardisées : origination (sourcing du deal), exécution (valorisation, négociation, due diligence) et closing (signature et intégration). Les banques d'investissement jouent un rôle central en conseillant soit l'acheteur (buy-side) soit le vendeur (sell-side).\n\nLes multiples de transaction varient selon le secteur : la tech se négocie souvent à 15-25x l'EBITDA, l'industrie à 6-10x, et la distribution à 5-8x. La prime de contrôle, c'est-à-dire le supplément payé par rapport au cours de bourse, oscille généralement entre 20% et 40%.\n\nLes régulateurs (autorités antitrust) jouent un rôle crucial : toute transaction significative doit obtenir leur approbation, ce qui peut prendre plusieurs mois et parfois bloquer un deal.",
      example:
        "En 2022, Microsoft a annoncé l'acquisition d'Activision Blizzard pour 68,7 Md$ — l'une des plus grandes transactions tech de l'histoire. La prime offerte était d'environ 45% par rapport au cours pré-annonce. Le deal a été scrutiné par les régulateurs (FTC, Commission européenne) pendant plus d'un an avant approbation.",
      finnSays:
        "Le M&A, c'est le Super Bowl de la finance : des enjeux énormes, beaucoup de préparation, et parfois des retournements de dernière minute !",
    },
  },
  {
    id: 'corp-2',
    title: 'Processus Buy-Side',
    xp: 100,
    duration: '14 min',
    content: {
      introduction:
        "Le processus buy-side décrit les étapes suivies par un acquéreur potentiel pour identifier, évaluer et conclure une acquisition. C'est un parcours méthodique qui peut durer de 3 à 12 mois. La banque conseil buy-side accompagne l'acheteur à chaque étape pour maximiser ses chances de succès.",
      keyPoints: [
        "Le screening consiste à identifier les cibles potentielles selon des critères stratégiques : taille, géographie, secteur, rentabilité et complémentarité avec l'acquéreur.",
        "L'approche de la cible se fait via une lettre d'intention non-engageante (IOI) suivie d'une offre ferme (binding offer) après la due diligence.",
        "La valorisation buy-side intègre les synergies potentielles, ce qui justifie de payer une prime par rapport à la valeur standalone de la cible.",
        "La négociation porte sur le prix mais aussi sur les garanties (reps & warranties), les conditions suspensives et les mécanismes d'ajustement de prix (earn-out, locked box)."
      ],
      explanation:
        "Le processus buy-side commence par la définition de la stratégie d'acquisition : l'acquéreur identifie les critères clés (secteur, taille, géographie, synergies attendues). La banque conseil prépare ensuite une long list de cibles potentielles, réduite progressivement en short list.\n\nL'approche peut être proactive (l'acheteur contacte directement la cible) ou réactive (réponse à un processus de vente). Dans le cas proactif, la discrétion est essentielle pour éviter les fuites qui pourraient faire monter le cours de la cible.\n\nUne fois l'intérêt confirmé, l'acquéreur signe un NDA et reçoit un mémorandum d'information (IM). Il soumet ensuite une Indication of Interest (IOI) non-engageante avec une fourchette de prix. Si retenu, il accède à la data room pour la due diligence approfondie.\n\nLa due diligence buy-side couvre les aspects financiers, juridiques, fiscaux, opérationnels et ESG. Le résultat alimente le modèle de valorisation et la négociation du SPA (Share Purchase Agreement).\n\nL'offre finale (binding offer) inclut le prix, la structure de la transaction (cash, actions, mixte), les conditions suspensives (antitrust, financement) et les garanties. La négociation du SPA peut durer plusieurs semaines. Le closing intervient après la levée de toutes les conditions suspensives.\n\nLe rôle de la banque buy-side est de maximiser la valeur pour l'acquéreur : obtenir le prix le plus bas possible, structurer le financement et anticiper les risques.",
      formula: 'Prix d\'acquisition = Valeur standalone + Synergies estimées − Décote de risque d\'intégration',
      example:
        "Un groupe agroalimentaire français souhaite acquérir un concurrent espagnol. Sa banque conseil identifie 15 cibles, réduit à 3 après screening. Après 6 mois de process, l'acquéreur offre 8x EBITDA (500 M€) incluant 50 M€ de synergies de coûts. La négociation aboutit à un prix final de 480 M€ avec un earn-out de 30 M€ lié à la rétention des clients clés.",
      finnSays:
        "En buy-side, la patience est reine. Le meilleur deal est celui que tu ne surpayes pas — même si ça veut dire laisser passer.",
    },
  },
  {
    id: 'corp-3',
    title: 'Processus Sell-Side',
    xp: 100,
    duration: '14 min',
    content: {
      introduction:
        "Le processus sell-side est orchestré par la banque conseil du vendeur pour maximiser le prix de cession. Il s'agit d'un processus compétitif et structuré qui met en concurrence plusieurs acquéreurs potentiels. La qualité de l'exécution sell-side peut faire varier le prix de 20% à 30%.",
      keyPoints: [
        "Le processus dual-track combine une mise en vente privée et une introduction en bourse, permettant au vendeur de choisir la meilleure option.",
        "Le teaser anonyme est le premier document envoyé aux acquéreurs potentiels : il présente la cible sans la nommer pour susciter l'intérêt.",
        "La data room virtuelle (VDR) contient tous les documents nécessaires à la due diligence : comptes, contrats, données RH, propriété intellectuelle.",
        "Le processus en deux tours (indicative puis binding) permet de maximiser la tension concurrentielle entre les enchérisseurs."
      ],
      explanation:
        "Le processus sell-side classique se déroule en plusieurs phases. D'abord, la phase de préparation (4-8 semaines) : la banque conseil rédige un Information Memorandum (IM) détaillé, prépare le modèle financier, identifie les acquéreurs potentiels et structure la data room.\n\nEnsuite vient la phase de marketing (4-6 semaines) : envoi du teaser anonyme à 50-100 acquéreurs potentiels, signature des NDA avec les intéressés, distribution de l'IM et organisation de management presentations.\n\nLe premier tour (3-4 semaines) recueille les offres indicatives (IOI). La banque sélectionne 3 à 5 candidats pour le second tour. Ces candidats accèdent à la data room complète et rencontrent le management de la cible.\n\nLe second tour (4-6 semaines) aboutit aux offres fermes (binding offers) accompagnées d'un markup du SPA. La banque négocie ensuite avec le candidat préféré pour finaliser les termes.\n\nLa qualité du processus sell-side repose sur la tension concurrentielle : plus il y a d'enchérisseurs crédibles, plus le prix monte. La banque gère le calendrier pour maintenir la pression et éviter que les candidats ne se retirent.\n\nLe vendor due diligence (VDD) est une pratique courante : le vendeur mandate ses propres auditeurs pour produire des rapports de due diligence, accélérant le processus et contrôlant le narratif.\n\nLes honoraires sell-side sont généralement un pourcentage du prix de transaction (1-3% pour les gros deals, 3-5% pour le mid-market) avec un success fee au closing.",
      example:
        "Une famille actionnaire d'une entreprise de logistique mandate Goldman Sachs pour vendre sa participation de 80%. Le teaser est envoyé à 60 acquéreurs (30 industriels, 30 fonds PE). 25 signent le NDA, 12 soumettent une IOI. 4 sont sélectionnés pour le second tour. L'offre gagnante (un fonds PE) propose 11x EBITDA, soit 30% au-dessus de l'IOI la plus basse.",
      finnSays:
        "En sell-side, ton job c'est de créer un FOMO géant chez les acheteurs. Plus ils ont peur de rater le deal, plus ils paient cher !",
    },
  },
  {
    id: 'corp-4',
    title: 'Due diligence',
    xp: 100,
    duration: '15 min',
    content: {
      introduction:
        "La due diligence est l'investigation approfondie menée par l'acquéreur avant de finaliser une transaction. Elle vise à confirmer la valeur de la cible, identifier les risques cachés et alimenter la négociation du prix. C'est une étape critique qui mobilise des dizaines d'experts pendant plusieurs semaines.",
      keyPoints: [
        "La due diligence financière analyse la qualité des résultats : normalisation de l'EBITDA, quality of earnings, BFR normatif, capex de maintenance vs croissance.",
        "La due diligence juridique examine les contrats clés, les litiges en cours, la propriété intellectuelle et la conformité réglementaire.",
        "La due diligence opérationnelle évalue la robustesse du modèle économique, les processus, la technologie et les ressources humaines clés.",
        "Les red flags courants incluent : concentration client excessive, dépendance à un dirigeant, litiges non provisionnés et manipulation du BFR."
      ],
      explanation:
        "La due diligence se décline en plusieurs workstreams menés en parallèle. La due diligence financière, confiée aux Big Four, est la plus critique. Elle analyse la quality of earnings (QoE) : l'EBITDA reporté est-il récurrent et soutenable ? Les ajustements courants incluent les éléments exceptionnels, les changements de méthode comptable et les transactions avec parties liées.\n\nLe BFR (besoin en fonds de roulement) normatif est un enjeu majeur : il détermine le mécanisme d'ajustement de prix au closing. Si le BFR au closing est inférieur au BFR normatif, le prix est réduit d'autant.\n\nLa due diligence fiscale identifie les risques de redressement et optimise la structure d'acquisition (asset deal vs share deal, utilisation des déficits reportables).\n\nLa due diligence juridique passe en revue tous les contrats matériels : contrats clients (clauses de changement de contrôle), baux, contrats de travail des dirigeants clés, licences et brevets.\n\nLa due diligence commerciale, souvent menée par des consultants stratégiques, valide le plan d'affaires : taille du marché, positionnement concurrentiel, tendances et risques de disruption.\n\nLa due diligence ESG prend une importance croissante : risques environnementaux (pollution, carbone), sociaux (conditions de travail) et de gouvernance (anti-corruption).\n\nLes résultats de la due diligence alimentent directement le SPA : les risques identifiés se traduisent en garanties spécifiques (indemnités) ou en ajustements de prix.",
      example:
        "Lors de la due diligence d'un fabricant industriel, les auditeurs découvrent que 35% du CA provient d'un seul client dont le contrat expire dans 18 mois. L'EBITDA reporté de 20 M€ est ajusté à 17 M€ après normalisation. L'acquéreur négocie un earn-out de 3 M€ conditionné au renouvellement du contrat et une garantie spécifique sur un litige environnemental non provisionné de 2 M€.",
      finnSays:
        "La due diligence, c'est comme vérifier sous le capot avant d'acheter une voiture. Sauf que la voiture coûte 500 millions !",
    },
  },
  {
    id: 'corp-5',
    title: 'Accretion / Dilution',
    xp: 120,
    duration: '13 min',
    content: {
      introduction:
        "L'analyse accretion/dilution mesure l'impact d'une acquisition sur le bénéfice par action (BPA) de l'acquéreur. Si le BPA augmente post-deal, l'opération est dite « accretive » ; s'il diminue, elle est « dilutive ». C'est un test clé pour les acquisitions financées en actions.",
      keyPoints: [
        "Une acquisition est accretive si le rendement des bénéfices de la cible (E/P) est supérieur au coût de financement de l'acquéreur.",
        "Le financement en dette est généralement plus accretif que le financement en actions grâce au bouclier fiscal des intérêts.",
        "Les synergies nettes d'impôts améliorent l'accretion en augmentant le résultat combiné pro forma.",
        "Les analystes regardent l'accretion/dilution à 1 an et à 3 ans : un deal dilutif à court terme peut devenir accretif avec la réalisation des synergies."
      ],
      explanation:
        "L'analyse accretion/dilution est un outil fondamental en M&A. Elle compare le BPA standalone de l'acquéreur avec le BPA pro forma post-acquisition. Le calcul dépend du mode de financement : 100% cash (dette), 100% actions, ou mixte.\n\nEn financement dette : le résultat net de la cible s'ajoute au résultat de l'acquéreur, mais on soustrait les intérêts après impôts sur la dette levée. Le deal est accretif si le résultat net de la cible > intérêts nets d'impôts.\n\nEn financement actions : le résultat net de la cible s'ajoute au numérateur, mais le nombre d'actions augmente au dénominateur. Le deal est accretif si le P/E de la cible (prix payé / résultat) est inférieur au P/E de l'acquéreur.\n\nLes ajustements incluent : amortissement du goodwill et des actifs incorporels réévalués (PPA — Purchase Price Allocation), synergies nettes d'impôts, coûts de transaction et coûts d'intégration.\n\nAttention : l'accretion/dilution n'est pas un indicateur de création de valeur. Un deal peut être accretif mais détruire de la valeur si le prix payé excède la valeur intrinsèque de la cible avec synergies. Inversement, un deal dilutif à court terme peut créer beaucoup de valeur à long terme.\n\nLes PDG sont néanmoins très sensibles à cet indicateur car le marché sanctionne les deals dilutifs. C'est pourquoi les banquiers structurent souvent le financement pour minimiser la dilution.",
      formula: 'BPA pro forma = (Résultat acquéreur + Résultat cible − Intérêts nets + Synergies nettes) / (Actions acquéreur + Actions nouvelles émises)',
      example:
        "Acquéreur : BPA = 5 €, P/E = 20x, 100 M actions. Cible : résultat net = 80 M€, prix = 1 200 M€ (P/E de 15x). Financement 100% actions : 1 200 M€ / 100 € par action = 12 M nouvelles actions. BPA pro forma = (500 + 80) / (100 + 12) = 5,18 €. Accretion de +3,6% car le P/E payé (15x) est inférieur au P/E de l'acquéreur (20x).",
      finnSays:
        "Règle d'or : si tu achètes moins cher que ton propre P/E, c'est accretif. Mais ne confonds jamais accretion et création de valeur !",
    },
  },
  {
    id: 'corp-6',
    title: 'Synergies',
    xp: 100,
    duration: '12 min',
    content: {
      introduction:
        "Les synergies sont les gains de valeur attendus de la combinaison de deux entreprises. Elles justifient la prime payée par l'acquéreur et constituent le cœur de la thèse d'investissement en M&A. Les synergies se divisent en synergies de coûts et synergies de revenus.",
      keyPoints: [
        "Les synergies de coûts (réduction de doublons, économies d'échelle, optimisation achats) sont les plus fiables et les plus rapides à réaliser, généralement sous 2-3 ans.",
        "Les synergies de revenus (cross-selling, accès à de nouveaux marchés, complémentarité produits) sont plus incertaines et prennent plus de temps à matérialiser.",
        "La règle empirique dit que l'acquéreur partage environ 30% des synergies avec les actionnaires de la cible via la prime, et conserve 70%.",
        "Les coûts d'intégration (plans sociaux, harmonisation IT, rebranding) peuvent absorber 1 à 2 ans de synergies et sont souvent sous-estimés."
      ],
      explanation:
        "L'estimation des synergies est un exercice délicat qui requiert une analyse bottom-up détaillée. Les synergies de coûts se quantifient en identifiant les postes de doublons : sièges sociaux, fonctions support (finance, RH, IT), forces commerciales superposées et achats consolidés.\n\nLes synergies d'achats résultent du pouvoir de négociation accru : un volume combiné supérieur permet d'obtenir de meilleures conditions fournisseurs. En règle générale, on estime 2-5% d'économies sur les achats combinés.\n\nLes synergies de revenus sont plus complexes : le cross-selling (vente des produits de A aux clients de B et vice versa) nécessite une intégration commerciale réussie. Le track record montre que seulement 50-60% des synergies de revenus annoncées se matérialisent.\n\nLe phénomène de « synergy leakage » décrit la perte de valeur pendant l'intégration : départ de talents clés, perte de clients perturbés par le changement, conflits culturels. Les études montrent que 50-70% des M&A ne créent pas la valeur escomptée, principalement à cause d'une surestimation des synergies et d'une sous-estimation des coûts d'intégration.\n\nLa valorisation des synergies se fait en actualisant les cash flows incrémentaux. Si les synergies annuelles nettes sont de 50 M€ et le WACC de 10%, la valeur des synergies est de 500 M€. L'acquéreur ne devrait théoriquement pas payer plus que cette valeur en prime.",
      formula: 'Valeur des synergies = Synergies annuelles nettes d\'impôts / WACC\nPrime maximale justifiée ≤ Valeur des synergies',
      example:
        "Fusion de deux banques régionales. Synergies de coûts identifiées : fermeture de 100 agences en doublon (30 M€/an), mutualisation de l'IT (15 M€/an), réduction du siège (10 M€/an). Synergies de revenus : cross-selling assurance (8 M€/an). Total brut : 63 M€/an. Après impôts (25%) : 47 M€/an. Coûts d'intégration : 90 M€ sur 2 ans. Synergies pleinement réalisées en année 3.",
      finnSays:
        "Les synergies, c'est comme les régimes : tout le monde en promet, mais peu les réalisent vraiment. Sois conservateur dans tes estimations !",
    },
  },
  {
    id: 'corp-7',
    title: 'Le LBO : principes',
    xp: 120,
    duration: '15 min',
    content: {
      introduction:
        "Le Leveraged Buyout (LBO) est l'acquisition d'une entreprise financée majoritairement par de la dette. Le fonds de private equity apporte 30-50% en fonds propres et emprunte le reste. Les cash flows de la cible servent à rembourser la dette, créant un effet de levier sur le rendement des fonds propres.",
      keyPoints: [
        "Les trois leviers de création de valeur en LBO sont : le remboursement de la dette (deleveraging), la croissance de l'EBITDA et l'expansion du multiple de sortie.",
        "Une cible LBO idéale a des cash flows stables et prévisibles, un faible besoin en capex, une position de marché dominante et un potentiel d'amélioration opérationnelle.",
        "Le levier financier amplifie les rendements : si la cible performe bien, le TRI du fonds est élevé ; si elle performe mal, les fonds propres peuvent être totalement perdus.",
        "La durée de détention typique est de 4-6 ans, avec un TRI cible de 20-25% et un multiple de 2-3x la mise initiale."
      ],
      explanation:
        "Le LBO repose sur un principe simple : utiliser l'argent des autres (la dette) pour maximiser le rendement des fonds propres. Si une entreprise est achetée 1 000 M€ avec 400 M€ de fonds propres et 600 M€ de dette, et revendue 1 300 M€ après avoir remboursé 200 M€ de dette, le fonds récupère 1 300 − 400 = 900 M€, soit 2,25x sa mise.\n\nLes trois moteurs de rendement en LBO sont complémentaires. Le deleveraging est le plus mécanique : chaque euro de dette remboursé augmente la valeur des fonds propres d'un euro. La croissance de l'EBITDA, qu'elle soit organique ou via des acquisitions bolt-on, augmente la valeur d'entreprise. L'expansion du multiple (acheter à 8x et revendre à 10x) est le plus aléatoire mais peut être significatif.\n\nLe ratio dette/EBITDA typique en LBO est de 4-6x au moment de l'acquisition. La dette se structure en plusieurs tranches : dette senior (la moins risquée, taux le plus bas), dette mezzanine (subordonnée, taux plus élevé) et parfois des obligations high yield.\n\nLes fonds de PE ajoutent de la valeur opérationnelle : optimisation des coûts, professionnalisation du management, stratégie de build-up (acquisitions complémentaires), digitalisation. Les meilleures performances LBO combinent effet de levier et transformation opérationnelle.\n\nLes risques principaux sont : l'incapacité à rembourser la dette (covenant breach, défaut), la détérioration de l'EBITDA et l'impossibilité de sortir (absence d'acquéreurs ou IPO impossible).",
      formula: 'TRI LBO ≈ Multiple d\'investissement^(1/n) − 1\noù Multiple = Equity value sortie / Equity investi, n = durée en années',
      example:
        "Un fonds PE achète une entreprise à 8x EBITDA (EBITDA = 50 M€, EV = 400 M€). Financement : 160 M€ equity + 240 M€ dette. Après 5 ans : EBITDA = 65 M€, sortie à 9x (EV = 585 M€), dette restante = 120 M€. Equity value sortie = 585 − 120 = 465 M€. Multiple = 465/160 = 2,9x. TRI = 2,9^(1/5) − 1 ≈ 24%.",
      finnSays:
        "Le LBO, c'est comme acheter un immeuble avec un crédit : tu mets 30% d'apport, le locataire rembourse le prêt, et à la revente, tout le gain est pour toi !",
    },
  },
  {
    id: 'corp-8',
    title: 'Sources & Uses',
    xp: 100,
    duration: '11 min',
    content: {
      introduction:
        "Le tableau Sources & Uses est le point de départ de tout modèle LBO. Il détaille d'un côté les sources de financement (equity, dette senior, mezzanine) et de l'autre les emplois (prix d'acquisition, frais de transaction, refinancement de dette existante). Les deux côtés doivent être parfaitement équilibrés.",
      keyPoints: [
        "Les sources incluent : l'equity du sponsor (30-50%), la dette senior (terme A, B, C et revolving), la dette mezzanine ou subordonnée, et éventuellement le rollover du management.",
        "Les uses incluent : le prix d'acquisition (equity value), le refinancement de la dette existante, les frais de transaction (banques, avocats, DD) et le cash au bilan cible.",
        "Le ratio d'endettement (dette totale / EBITDA) est la métrique clé : il détermine la capacité d'emprunt et le risque financier de la transaction.",
        "Le management rollover (5-15% de l'equity) aligne les intérêts du management avec ceux du fonds et est un signal positif pour les prêteurs."
      ],
      explanation:
        "Le tableau Sources & Uses se construit en partant de l'Enterprise Value de la cible. L'Enterprise Value détermine le prix total à financer. On déduit ensuite le cash excédentaire au bilan et on ajoute la dette nette existante à refinancer pour obtenir le besoin total de financement.\n\nCôté Uses : le prix d'acquisition (equity value aux actionnaires vendeurs), le remboursement de la dette existante, les frais de transaction (typiquement 2-5% de l'EV selon la taille : advisory fees, legal fees, due diligence, arrangement fees pour la dette), et un montant de cash minimum au bilan post-closing.\n\nCôté Sources : la dette senior se calibre en fonction de la capacité de remboursement de la cible, mesurée par le ratio dette/EBITDA (4-6x) et le ratio de couverture des intérêts (EBITDA/intérêts > 2x). La dette mezzanine comble l'écart entre dette senior et equity. L'equity du sponsor est le résidu.\n\nLe revolving credit facility (RCF) est une ligne de crédit non tirée à la clôture mais disponible pour les besoins de trésorerie opérationnels. Elle n'apparaît pas dans les Uses mais figure dans les Sources comme capacité additionnelle.\n\nLa structure optimale minimise l'equity du sponsor (pour maximiser le rendement) tout en maintenant des ratios de levier acceptables pour les prêteurs. Un levier trop élevé augmente le risque de défaut et renchérit le coût de la dette.",
      formula: 'Total Sources = Total Uses\nEquity = Total Uses − Dette Senior − Mezzanine − Cash au bilan\nLevier = Dette totale / EBITDA',
      example:
        "Acquisition d'une entreprise : EV = 500 M€, dette existante = 80 M€, cash = 20 M€, equity value = 440 M€. Uses : equity value 440 M€ + refinancement dette 80 M€ + frais 25 M€ = 545 M€, moins cash 20 M€ = 525 M€. Sources : dette senior 300 M€ (6x EBITDA de 50 M€) + mezzanine 50 M€ + equity sponsor 175 M€ = 525 M€.",
      finnSays:
        "Sources & Uses, c'est la première slide que le partner regarde. Si ça ne balance pas, c'est retour à la case départ !",
    },
  },
  {
    id: 'corp-9',
    title: 'Modélisation LBO',
    xp: 150,
    duration: '18 min',
    content: {
      introduction:
        "La modélisation LBO est l'exercice central du private equity. Le modèle projette les cash flows de la cible sur 5-7 ans pour simuler le remboursement de la dette et calculer le rendement pour le fonds. C'est un outil de décision et de négociation incontournable.",
      keyPoints: [
        "Le modèle LBO suit une structure standard : hypothèses opérationnelles → compte de résultat → BFR et capex → free cash flow → tableau de dette (cash sweep) → rendements (TRI et multiple).",
        "Les hypothèses clés sont la croissance du CA, la marge d'EBITDA, le capex en % du CA, la variation du BFR et les conditions de la dette (taux, maturité, amortissement).",
        "L'analyse de sensibilité teste l'impact des variations de l'EBITDA de sortie, du multiple de sortie et du levier sur le TRI et le multiple.",
        "Le cas de base vise un TRI de 20-25% ; le downside case doit montrer que le remboursement de la dette reste possible même en scénario défavorable."
      ],
      explanation:
        "La construction d'un modèle LBO suit une logique séquentielle. On commence par les hypothèses opérationnelles : croissance du chiffre d'affaires (3-5% organique typiquement), évolution des marges, capex de maintenance vs croissance, et dynamique du BFR.\n\nLe compte de résultat projeté génère l'EBITDA, à partir duquel on calcule le free cash flow disponible pour le service de la dette : EBITDA − impôts cash − capex − variation BFR − intérêts = free cash flow to debt.\n\nLe tableau de dette (debt schedule) est le cœur du modèle. Il trace chaque tranche de dette : solde d'ouverture, tirages, amortissements contractuels, remboursements anticipés (cash sweep) et solde de clôture. Les intérêts sont calculés sur le solde moyen.\n\nLe cash sweep est un mécanisme clé : l'excédent de trésorerie après amortissement contractuel est affecté au remboursement anticipé de la dette, par ordre de priorité (waterfall). Cela accélère le deleveraging.\n\nLes rendements se calculent à la sortie : EV de sortie (EBITDA année n × multiple de sortie) − dette nette résiduelle = equity value de sortie. Le TRI se déduit du ratio equity sortie / equity investi et de la durée.\n\nLes tables de sensibilité croisent typiquement : EBITDA de sortie × multiple de sortie, ou multiple d'entrée × levier. Elles permettent d'identifier les seuils de rentabilité et les risques de perte en capital.",
      formula: 'FCF to Debt = EBITDA − Impôts cash − Capex − ΔBFR − Intérêts\nEquity Value sortie = EBITDA sortie × Multiple sortie − Dette nette résiduelle\nTRI = (Equity sortie / Equity investi)^(1/n) − 1',
      example:
        "Modèle LBO simplifié sur 5 ans. Entrée : EBITDA 30 M€, EV = 210 M€ (7x), equity 90 M€, dette 120 M€. Année 5 : EBITDA projeté 40 M€, cumul FCF to debt 75 M€, dette résiduelle 45 M€. Sortie à 8x : EV = 320 M€, equity = 275 M€. Multiple = 3,1x, TRI = 25%.",
      finnSays:
        "Le modèle LBO, c'est ton meilleur allié en entretien PE. Maîtrise-le les yeux fermés et tu auras une longueur d'avance !",
    },
  },
  {
    id: 'corp-10',
    title: 'Structure de dette',
    xp: 120,
    duration: '14 min',
    content: {
      introduction:
        "La structure de dette en LBO comprend plusieurs tranches hiérarchisées par priorité de remboursement et niveau de risque. Chaque tranche a ses propres caractéristiques : taux, maturité, amortissement et covenants. La structuration optimale est un équilibre entre maximisation du levier et soutenabilité du service de la dette.",
      keyPoints: [
        "La dette senior (Term Loan A/B/C) est la tranche prioritaire : elle est remboursée en premier, a le taux le plus bas (EURIBOR + 300-500 bps) et bénéficie de sûretés sur les actifs.",
        "La dette mezzanine est subordonnée à la senior : taux plus élevé (10-14%), souvent avec un PIK (Payment In Kind) où les intérêts sont capitalisés plutôt que payés cash.",
        "Les covenants financiers (dette/EBITDA, couverture des intérêts, capex max) sont des garde-fous imposés par les prêteurs pour protéger leur investissement.",
        "Le marché « unitranche » combine senior et mezzanine en une seule tranche, simplifiant la structure mais à un coût moyen plus élevé."
      ],
      explanation:
        "La structure de dette en LBO suit une hiérarchie stricte appelée « waterfall ». En cas de défaut, les créanciers senior sont remboursés en priorité, puis les mezzanines, puis les actionnaires. Cette subordination justifie les différences de taux.\n\nLa dette senior se décompose en : Term Loan A (amortissable sur 5-7 ans, remboursé linéairement), Term Loan B (bullet ou avec amortissement minimal, maturité 6-8 ans, remboursé à la sortie) et le Revolving Credit Facility (RCF, ligne de crédit renouvelable pour le BFR).\n\nLa dette mezzanine se situe entre senior et equity. Son taux élevé compense le risque de subordination. Le PIK toggle permet de capitaliser les intérêts quand le cash flow est insuffisant, au prix d'une augmentation de la dette. Certaines mezzanines incluent des warrants (equity kicker) donnant accès au capital.\n\nLes obligations high yield (HY bonds) sont une alternative à la dette bancaire pour les gros LBO. Elles sont émises sur les marchés de capitaux, n'ont pas d'amortissement (bullet) et offrent des covenants plus souples (covenant-lite).\n\nLes covenants de maintenance testent les ratios financiers à chaque trimestre : si le ratio dette/EBITDA dépasse le seuil (ex : 5,5x), le sponsor doit injecter de l'equity ou renégocier. Les covenants incurrence ne testent les ratios que lors de nouvelles opérations (dette additionnelle, dividendes).\n\nLe ratio de couverture du service de la dette (DSCR = FCF / service de la dette) doit rester supérieur à 1,0x minimum, idéalement 1,2-1,5x.",
      formula: 'Coût moyen de la dette = Σ (Taux tranche i × Montant tranche i) / Dette totale\nDSCR = Free Cash Flow / (Amortissement dette + Intérêts)\nLevier = Dette nette / EBITDA',
      example:
        "Structure de dette pour un LBO de 400 M€ (EBITDA 60 M€, levier 4,5x = 270 M€) : Term Loan A = 100 M€ (EURIBOR+350 bps, amorti sur 7 ans), Term Loan B = 120 M€ (EURIBOR+450 bps, bullet 8 ans), Mezzanine = 50 M€ (12% dont 5% PIK, bullet 9 ans), RCF = 30 M€ non tiré. Equity sponsor = 130 M€. Coût moyen de la dette ≈ 6,5%.",
      finnSays:
        "Senior, mezzanine, PIK... c'est comme les étages d'un immeuble. En cas d'inondation, c'est le rez-de-chaussée (equity) qui est noyé en premier !",
    },
  },
  {
    id: 'corp-11',
    title: 'Cash Sweep',
    xp: 120,
    duration: '12 min',
    content: {
      introduction:
        "Le cash sweep est un mécanisme de remboursement anticipé obligatoire de la dette en LBO. Lorsque l'entreprise génère un excédent de trésorerie au-delà du service contractuel de la dette, tout ou partie de cet excédent est automatiquement affecté au remboursement de la dette. Il accélère le deleveraging et améliore le rendement pour le sponsor.",
      keyPoints: [
        "Le taux de cash sweep est typiquement de 50-75% de l'excédent de trésorerie (excess cash flow), laissant un matelas de sécurité à l'entreprise.",
        "Le cash sweep s'applique par ordre de priorité : d'abord la dette senior (Term Loan A, puis B), puis la mezzanine.",
        "Un cash sweep élevé accélère le deleveraging mais réduit la flexibilité de l'entreprise pour investir dans la croissance.",
        "Les step-downs réduisent le taux de cash sweep quand le levier diminue (ex : 75% si levier > 4x, 50% si levier entre 3-4x, 25% si levier < 3x)."
      ],
      explanation:
        "Le mécanisme de cash sweep est fondamental dans la modélisation LBO. L'excess cash flow se calcule généralement comme : EBITDA − intérêts cash − impôts cash − capex − variation du BFR − amortissement contractuel de la dette − dépenses exceptionnelles autorisées.\n\nLe taux de cash sweep (sweep rate) détermine la part de cet excédent affectée au remboursement anticipé. Un sweep de 75% signifie que 75% de l'excess cash flow va au remboursement de la dette, et 25% reste dans l'entreprise.\n\nDans le modèle LBO, le cash sweep est calculé après l'amortissement contractuel. La séquence est : (1) paiement des intérêts, (2) amortissement contractuel, (3) calcul de l'excess cash flow, (4) application du sweep rate, (5) remboursement anticipé par ordre de priorité.\n\nLes step-downs sont des mécanismes incitatifs : à mesure que le levier diminue, l'entreprise conserve une part plus importante de ses cash flows, lui permettant d'investir davantage. C'est un compromis entre protection des créanciers et flexibilité opérationnelle.\n\nDu point de vue du sponsor, un cash sweep élevé réduit la dette plus vite et augmente l'equity value à la sortie. Cependant, il limite la capacité de l'entreprise à réaliser des acquisitions bolt-on ou à investir dans des projets de croissance. Les meilleurs deals LBO trouvent l'équilibre entre remboursement de dette et croissance.\n\nLe cash sweep peut être modélisé avec un MIN : remboursement = MIN(excess cash flow × sweep rate, dette outstanding). Quand la dette est intégralement remboursée, le cash s'accumule au bilan.",
      formula: 'Excess Cash Flow = EBITDA − Intérêts − Impôts − Capex − ΔBFR − Amortissement contractuel\nRemboursement anticipé = MIN(Excess CF × Sweep Rate, Encours dette)',
      example:
        "EBITDA = 50 M€, intérêts = 12 M€, impôts = 8 M€, capex = 7 M€, ΔBFR = 3 M€, amortissement contractuel = 10 M€. Excess CF = 50 − 12 − 8 − 7 − 3 − 10 = 10 M€. Avec un sweep rate de 75% : remboursement anticipé = 7,5 M€. Total remboursement dette année 1 = 10 + 7,5 = 17,5 M€.",
      finnSays:
        "Le cash sweep, c'est l'aspirateur à cash du LBO. Plus il aspire vite, plus le sponsor est content !",
    },
  },
  {
    id: 'corp-12',
    title: 'LBO Returns',
    xp: 120,
    duration: '13 min',
    content: {
      introduction:
        "L'analyse des rendements LBO décompose les sources de création de valeur pour le fonds de private equity. Comprendre d'où vient le rendement est essentiel pour évaluer la qualité d'un investissement et la compétence du gérant. Les trois leviers fondamentaux sont le deleveraging, la croissance de l'EBITDA et l'expansion du multiple.",
      keyPoints: [
        "Le TRI (Taux de Rendement Interne) mesure le rendement annualisé, tandis que le MOIC (Multiple on Invested Capital) mesure le rendement absolu. Un bon LBO cible TRI > 20% et MOIC > 2,5x.",
        "Le deleveraging contribue mécaniquement au rendement : chaque euro de dette remboursé augmente la valeur des fonds propres.",
        "La croissance de l'EBITDA est le levier le plus qualitatif : elle reflète l'amélioration opérationnelle réelle de l'entreprise.",
        "L'expansion du multiple (acheter bas, revendre haut) est le levier le plus aléatoire et dépend des conditions de marché à la sortie."
      ],
      explanation:
        "La décomposition des rendements LBO (returns attribution) est un outil analytique clé. Elle décompose le MOIC total en trois composantes multiplicatives.\n\nDeleveraging : La réduction de la dette augmente l'equity value même si l'EV reste constante. Si un LBO est fait à 400 M€ EV avec 160 M€ d'equity et 240 M€ de dette, et que 100 M€ de dette sont remboursés, l'equity passe à 260 M€ (1,6x) sans aucune croissance.\n\nCroissance de l'EBITDA : Si l'EBITDA passe de 50 à 65 M€ (+30%), l'EV augmente proportionnellement au multiple maintenu constant. C'est le levier le plus « sain » car il reflète une vraie amélioration business.\n\nExpansion du multiple : Acheter à 8x et revendre à 10x amplifie le rendement. Mais c'est risqué : le multiple de sortie dépend des conditions de marché, de l'appétit des acheteurs et du cycle économique.\n\nLe TRI est sensible à la durée : un MOIC de 2,5x en 3 ans donne un TRI de 36%, mais en 6 ans seulement 16%. C'est pourquoi les fonds cherchent à sortir rapidement tout en maximisant le multiple.\n\nLes voies de sortie classiques sont : la vente à un industriel (strategic exit), la vente à un autre fonds (secondary buyout), l'introduction en bourse (IPO) ou le recapitalization dividend (distribution financée par de la dette additionnelle).\n\nUn recapitalization dividend permet de récupérer une partie de la mise avant la sortie finale, améliorant le TRI sans vendre l'entreprise.",
      formula: 'MOIC = Equity sortie / Equity investi\nTRI = MOIC^(1/n) − 1\nMOIC ≈ (1 + Deleveraging) × (1 + Croissance EBITDA) × (1 + Δ Multiple)',
      example:
        "LBO entrée : EV 400 M€ à 8x (EBITDA 50 M€), equity 160 M€, dette 240 M€. Sortie 5 ans plus tard : EBITDA 65 M€ à 9x = EV 585 M€, dette résiduelle 100 M€, equity 485 M€. MOIC = 485/160 = 3,0x. TRI = 3,0^(1/5) − 1 = 24,6%. Attribution : deleveraging +0,9x, croissance EBITDA +1,2x, expansion multiple +0,9x.",
      finnSays:
        "Un TRI de 25%, c'est bien. Mais comprendre d'où il vient, c'est encore mieux. Le deleveraging, c'est mécanique ; la croissance, c'est le talent du gérant !",
    },
  },
  {
    id: 'corp-13',
    title: 'Capital optimale',
    xp: 100,
    duration: '14 min',
    content: {
      introduction:
        "La structure du capital optimale est la combinaison de dette et de fonds propres qui minimise le coût moyen pondéré du capital (WACC) et maximise la valeur de l'entreprise. C'est une question centrale de la finance d'entreprise qui a donné lieu à des décennies de recherche académique et de pratique.",
      keyPoints: [
        "Le WACC est minimisé à un niveau d'endettement optimal : au-delà, les coûts de détresse financière surpassent les avantages fiscaux de la dette.",
        "La dette est moins chère que les fonds propres grâce au bouclier fiscal (tax shield) : les intérêts sont déductibles fiscalement, pas les dividendes.",
        "Le coût des fonds propres augmente avec le levier (effet décrit par Modigliani-Miller) : les actionnaires exigent une prime de risque plus élevée.",
        "En pratique, le ratio d'endettement optimal varie selon le secteur : stable et asset-heavy (utilités, immobilier) = plus de dette ; volatile et asset-light (tech, biotech) = moins de dette."
      ],
      explanation:
        "Le WACC se calcule comme la moyenne pondérée du coût de la dette après impôts et du coût des fonds propres : WACC = (D/V) × kd × (1−t) + (E/V) × ke. L'objectif est de trouver le ratio D/V qui minimise le WACC.\n\nAu départ, augmenter la dette réduit le WACC car la dette est moins chère (bouclier fiscal). Mais à mesure que le levier augmente, le risque de défaut s'accroît : le coût de la dette monte (spread de crédit), le coût des fonds propres monte (bêta relevé), et les coûts indirects de détresse financière apparaissent.\n\nLes coûts de détresse financière incluent : les frais juridiques de restructuration, la perte de clients et fournisseurs inquiets, le départ de talents clés, le sous-investissement (debt overhang) et la perte d'opportunités stratégiques.\n\nEn pratique, les entreprises déterminent leur structure cible en observant les comparables sectoriels, en maintenant une notation de crédit cible (BBB+ est le seuil investment grade le plus courant) et en conservant une flexibilité financière suffisante.\n\nLes agences de notation (S&P, Moody's, Fitch) jouent un rôle important : elles assignent un rating qui impacte directement le coût de la dette. Perdre le statut investment grade augmente significativement les coûts de financement.\n\nLe concept de « financial flexibility » est crucial : les entreprises maintiennent une capacité d'emprunt non utilisée (headroom) pour saisir des opportunités d'acquisition ou résister aux crises.",
      formula: 'WACC = (E/V) × ke + (D/V) × kd × (1 − t)\noù V = E + D, ke = coût des fonds propres, kd = coût de la dette, t = taux d\'imposition',
      example:
        "Entreprise avec E = 600 M€, D = 400 M€, ke = 10%, kd = 5%, t = 25%. WACC = (600/1000)×10% + (400/1000)×5%×0,75 = 6% + 1,5% = 7,5%. Si elle passe à D = 600 M€ : ke monte à 12%, kd monte à 6%. WACC = (400/1000)×12% + (600/1000)×6%×0,75 = 4,8% + 2,7% = 7,5%. Au-delà, les coûts de détresse dominent et le WACC augmente.",
      finnSays:
        "La structure du capital, c'est comme le sel en cuisine. Pas assez de dette, c'est fade ; trop, c'est immangeable. Il faut trouver le juste dosage !",
    },
  },
  {
    id: 'corp-14',
    title: 'Modigliani-Miller',
    xp: 120,
    duration: '15 min',
    content: {
      introduction:
        "Le théorème de Modigliani-Miller (1958) est la pierre angulaire de la finance d'entreprise moderne. Dans un monde parfait (sans impôts, sans coûts de faillite, sans asymétrie d'information), la structure du capital est neutre : la valeur de l'entreprise ne dépend pas de son financement. Ce résultat contre-intuitif a valu le prix Nobel à ses auteurs.",
      keyPoints: [
        "Proposition I (sans impôts) : la valeur de l'entreprise est indépendante de sa structure du capital. V_L = V_U. Seuls les actifs génèrent de la valeur, pas le financement.",
        "Proposition II (sans impôts) : le coût des fonds propres augmente linéairement avec le levier : ke = k0 + (k0 − kd) × D/E, compensant exactement l'avantage de la dette moins chère.",
        "Avec impôts (1963) : la dette crée de la valeur grâce au bouclier fiscal. V_L = V_U + t × D. Plus l'entreprise s'endette, plus elle a de valeur — mais ce résultat ignore les coûts de faillite.",
        "MM est un modèle de référence : on part du monde parfait de MM et on ajoute les imperfections (impôts, coûts de faillite, asymétrie d'information) pour comprendre le monde réel."
      ],
      explanation:
        "Modigliani et Miller ont révolutionné la finance en démontrant que, sous hypothèses de marchés parfaits, la structure du capital est non pertinente. L'intuition est qu'un investisseur peut répliquer n'importe quel effet de levier dans son propre portefeuille (homemade leverage) : il n'a donc pas besoin que l'entreprise le fasse pour lui.\n\nLa Proposition I sans impôts repose sur un argument d'arbitrage : si deux entreprises identiques avaient des valeurs différentes simplement à cause de leur structure de capital, les investisseurs pourraient acheter la moins chère et vendre la plus chère, réalisant un profit sans risque. L'arbitrage élimine toute différence de valeur.\n\nLa Proposition II montre que le WACC est constant quel que soit le levier : quand l'entreprise s'endette davantage, le coût de l'equity augmente exactement pour compenser l'introduction de dette moins chère. Le WACC reste donc inchangé.\n\nL'introduction des impôts en 1963 change la donne : les intérêts étant déductibles, la dette crée un bouclier fiscal (tax shield) dont la valeur actualisée est t × D. Ce résultat impliquerait que les entreprises devraient s'endetter à 100% — ce qu'on n'observe évidemment pas dans la réalité.\n\nC'est l'écart entre la théorie MM et la réalité qui a motivé les développements ultérieurs : la trade-off theory (qui ajoute les coûts de faillite) et la pecking order theory (qui ajoute l'asymétrie d'information). MM n'est pas une description de la réalité, mais un cadre conceptuel qui identifie les conditions sous lesquelles la structure du capital importe.",
      formula: 'MM sans impôts : V_L = V_U, ke = k0 + (k0 − kd) × D/E\nMM avec impôts : V_L = V_U + t × D, ke = k0 + (k0 − kd) × (1 − t) × D/E',
      example:
        "Entreprise non endettée : V_U = 1 000 M€, k0 = 10%. Elle s'endette à 400 M€ au taux de 5%, impôts à 25%. MM avec impôts : V_L = 1 000 + 0,25 × 400 = 1 100 M€. Equity = 1 100 − 400 = 700 M€. ke = 10% + (10% − 5%) × 0,75 × (400/700) = 12,14%. WACC = (700/1100)×12,14% + (400/1100)×5%×0,75 = 7,72% + 1,36% = 9,09%, inférieur aux 10% initial grâce au tax shield.",
      finnSays:
        "Modigliani-Miller, c'est la physique quantique de la finance : un modèle théorique parfait qui t'aide à comprendre pourquoi le monde réel est imparfait !",
    },
  },
  {
    id: 'corp-15',
    title: 'Trade-off theory',
    xp: 100,
    duration: '12 min',
    content: {
      introduction:
        "La trade-off theory explique la structure du capital comme un arbitrage entre les avantages fiscaux de la dette et les coûts de détresse financière. L'entreprise s'endette jusqu'au point où le bénéfice marginal du tax shield égale le coût marginal de la détresse. Ce modèle prédit un ratio d'endettement cible optimal.",
      keyPoints: [
        "L'avantage fiscal de la dette (tax shield) augmente linéairement avec l'endettement : chaque euro d'intérêt déductible réduit l'impôt de t × intérêts.",
        "Les coûts de détresse financière augmentent de façon convexe avec le levier : faibles au début, ils explosent à mesure que le risque de défaut s'accroît.",
        "Le ratio d'endettement optimal se situe au point où les courbes marginales se croisent. Il varie par secteur : 20-30% pour la tech, 50-70% pour les utilités.",
        "La trade-off theory prédit un « target leverage » : les entreprises ajustent progressivement leur structure vers cette cible, ce qu'on observe empiriquement."
      ],
      explanation:
        "La trade-off theory, développée par Kraus et Litzenberger (1973), enrichit le cadre de MM en intégrant les coûts de faillite. La valeur de l'entreprise endettée devient : V_L = V_U + PV(tax shield) − PV(coûts de détresse).\n\nLes coûts de détresse financière se divisent en coûts directs et indirects. Les coûts directs sont les frais juridiques et administratifs de faillite (2-5% de la valeur des actifs). Les coûts indirects sont bien plus importants (10-20% de la valeur) : perte de clients (qui craignent la disparition du fournisseur), perte de fournisseurs (qui resserrent les conditions), perte de talents (qui quittent un navire en difficulté), sous-investissement et perte d'opportunités.\n\nLe debt overhang est un coût indirect majeur : quand l'entreprise est trop endettée, les actionnaires refusent d'investir dans des projets à VAN positive car les bénéfices iraient principalement aux créanciers. Ce sous-investissement détruit de la valeur.\n\nL'asset substitution est un autre problème : les actionnaires d'une entreprise fortement endettée sont incités à prendre des risques excessifs car ils bénéficient de l'upside (via l'equity) mais les créanciers supportent le downside.\n\nEmpirique : les entreprises à actifs tangibles (immobilier, industrie) s'endettent davantage car leurs actifs conservent de la valeur en cas de liquidation. Les entreprises à actifs intangibles (tech, pharma) s'endettent moins car leurs actifs (brevets, capital humain) perdent beaucoup de valeur en détresse.",
      formula: 'V_L = V_U + PV(Tax Shield) − PV(Coûts de détresse financière)\nRatio optimal : bénéfice marginal tax shield = coût marginal détresse',
      example:
        "Comparaison sectorielle : un opérateur télécom (actifs tangibles, cash flows stables) a un ratio D/E de 1,5 (60% de dette). Une startup biotech (pas de revenus, actifs intangibles) n'a aucune dette. La trade-off theory explique parfaitement cette différence : l'opérateur bénéficie pleinement du tax shield avec un risque de détresse limité, tandis que la biotech n'a rien à gagner de l'endettement.",
      finnSays:
        "La trade-off theory, c'est simple : la dette est un médicament. À petite dose, elle soigne (tax shield). En overdose, elle tue (détresse financière) !",
    },
  },
  {
    id: 'corp-16',
    title: 'Pecking order',
    xp: 100,
    duration: '12 min',
    content: {
      introduction:
        "La théorie du pecking order (Myers et Majluf, 1984) propose que les entreprises financent leurs investissements selon un ordre hiérarchique : d'abord l'autofinancement, puis la dette, et en dernier recours les actions. Cette hiérarchie s'explique par l'asymétrie d'information entre dirigeants et investisseurs.",
      keyPoints: [
        "Les dirigeants connaissent mieux la valeur de l'entreprise que le marché : émettre des actions signale que le titre est surévalué, ce qui fait baisser le cours.",
        "L'autofinancement (bénéfices non distribués) est le mode préféré car il n'envoie aucun signal négatif et n'engendre aucun coût d'émission.",
        "La dette est préférée aux actions car elle est moins sensible à l'information : la valeur d'une obligation dépend peu de la valeur intrinsèque de l'entreprise.",
        "Contrairement à la trade-off theory, le pecking order ne prédit pas de ratio d'endettement cible : le levier est le résultat cumulé des besoins de financement passés."
      ],
      explanation:
        "La théorie du pecking order repose sur le concept d'adverse selection. Quand une entreprise annonce une émission d'actions, le marché interprète cela comme un signal négatif : les dirigeants pensent que l'action est surévaluée, sinon ils préféreraient s'endetter. En moyenne, les cours baissent de 2-3% à l'annonce d'une augmentation de capital.\n\nMyers et Majluf formalisent ce raisonnement : si les dirigeants agissent dans l'intérêt des actionnaires existants, ils émettent des actions uniquement quand le titre est surévalué. Les investisseurs rationnels anticipent ce comportement et réagissent négativement.\n\nLa dette est moins sensible à cette asymétrie car les créanciers sont protégés par la priorité de remboursement et les covenants. Le signal envoyé par l'émission de dette est moins négatif, voire positif (confiance dans la capacité de remboursement).\n\nLe pecking order explique pourquoi les entreprises très rentables ont souvent peu de dette : elles génèrent suffisamment de cash flow pour financer leurs investissements en interne. À l'inverse, les entreprises en forte croissance avec peu de profits recourent davantage à l'émission d'actions.\n\nEmpirique : les études montrent que le pecking order explique bien le comportement à court terme des entreprises (choix entre dette et equity pour un besoin ponctuel) tandis que la trade-off theory explique mieux les tendances à long terme (convergence vers un ratio cible).\n\nLes deux théories sont complémentaires et non contradictoires : en pratique, les entreprises suivent un pecking order tout en gardant en tête un ratio d'endettement cible.",
      example:
        "Apple en 2023 : avec plus de 100 Md$ de cash, l'entreprise finance ses investissements et rachats d'actions par autofinancement. Elle émet de la dette non pas par besoin mais pour optimiser sa structure (cash piégé à l'étranger, tax optimization). C'est un exemple parfait du pecking order : l'autofinancement d'abord, la dette ensuite, jamais d'émission d'actions.",
      finnSays:
        "Le pecking order, c'est comme payer au restaurant : tu préfères payer cash, puis par carte, et en dernier recours tu demandes à un inconnu de payer pour toi !",
    },
  },
  {
    id: 'corp-17',
    title: 'Dividendes',
    xp: 100,
    duration: '12 min',
    content: {
      introduction:
        "La politique de dividendes détermine la part des bénéfices distribuée aux actionnaires versus réinvestie dans l'entreprise. C'est une décision stratégique qui signale la confiance du management et impacte la valorisation. Le dividende est un engagement implicite que les entreprises hésitent à réduire.",
      keyPoints: [
        "Le taux de distribution (payout ratio) est le ratio dividendes/résultat net. Il varie de 0% (croissance) à 80%+ (entreprises matures). La moyenne du CAC 40 est environ 50%.",
        "La signalisation : une hausse du dividende signale la confiance du management dans les résultats futurs. Une baisse est perçue très négativement par le marché (−5% en moyenne).",
        "L'irrelevance de MM s'applique aussi aux dividendes : dans un monde parfait, la politique de dividendes est neutre car l'actionnaire peut créer son propre dividende en vendant des actions.",
        "En pratique, les impôts et les préférences des investisseurs rendent la politique de dividendes pertinente : certains investisseurs (fonds de pension, retraités) ont une préférence pour le revenu régulier."
      ],
      explanation:
        "La politique de dividendes implique un arbitrage entre distribution et rétention des bénéfices. Distribuer trop réduit les ressources disponibles pour l'investissement. Distribuer trop peu frustre les actionnaires en quête de rendement.\n\nLe « dividend smoothing » de Lintner (1956) montre que les entreprises ajustent leurs dividendes progressivement vers un ratio cible. Elles augmentent le dividende seulement quand elles sont confiantes que le nouveau niveau est soutenable. Le dividende est « sticky » : les entreprises préfèrent ne pas augmenter plutôt que de devoir couper plus tard.\n\nLe rendement du dividende (dividend yield = dividende / cours) est un indicateur de valorisation. Un yield élevé peut signifier un titre sous-évalué (opportunité) ou un dividende menacé (piège de rendement ou « value trap »).\n\nLes dividendes exceptionnels (special dividends) sont utilisés pour distribuer un excédent de cash ponctuel sans créer d'attente de récurrence. Ils sont fréquents après une cession d'activité ou une année exceptionnelle.\n\nLe « bird in the hand » theory (Gordon, 1963) argue que les investisseurs préfèrent un dividende certain aujourd'hui à une plus-value incertaine demain. Les entreprises à dividendes élevés auraient donc un coût du capital plus bas.\n\nLe traitement fiscal des dividendes varie selon les juridictions. En France, les dividendes sont soumis au PFU (prélèvement forfaitaire unique) de 30% ou au barème progressif. Aux États-Unis, les qualified dividends bénéficient d'un taux préférentiel.",
      formula: 'Payout ratio = Dividendes / Résultat net\nDividend yield = Dividende par action / Cours de l\'action\nTaux de rétention = 1 − Payout ratio\nCroissance soutenable = ROE × Taux de rétention',
      example:
        "Total Energies verse un dividende de 3,01 € par action en 2023, pour un résultat net par action de 8,50 €. Payout ratio = 35%. Dividend yield = 3,01/55 = 5,5%. Le groupe complète sa distribution par des rachats d'actions de 7 Md€, portant le retour total aux actionnaires à ~40% de la market cap.",
      finnSays:
        "Un dividende, c'est une promesse. Et en finance comme en amour, les promesses non tenues font très mal au cours de bourse !",
    },
  },
  {
    id: 'corp-18',
    title: "Rachats d'actions",
    xp: 100,
    duration: '12 min',
    content: {
      introduction:
        "Le rachat d'actions (share buyback) est un mécanisme par lequel une entreprise rachète ses propres titres sur le marché pour les annuler. C'est devenu le principal mode de distribution aux actionnaires, devant les dividendes, en particulier aux États-Unis. Il offre plus de flexibilité et d'avantages fiscaux que le dividende.",
      keyPoints: [
        "Le rachat réduit le nombre d'actions en circulation, augmentant mécaniquement le BPA (bénéfice par action) et le cours théorique.",
        "Contrairement au dividende, le rachat est discrétionnaire et non récurrent : l'entreprise peut l'arrêter sans envoyer de signal négatif.",
        "Le rachat est fiscalement avantageux dans de nombreuses juridictions : l'actionnaire ne paie des impôts que s'il vend ses titres (taxation des plus-values différée).",
        "Le risque est que le management rachète des actions quand le titre est surévalué, détruisant de la valeur. Les études montrent un biais pro-cyclique."
      ],
      explanation:
        "Les rachats d'actions se font généralement via un programme de rachat autorisé par l'AG (plafond de 10% du capital en France). L'entreprise achète ses titres sur le marché ouvert au cours du moment, puis les annule pour réduire le nombre d'actions.\n\nL'impact sur le BPA : si une entreprise avec un résultat de 100 M€ et 100 M d'actions (BPA = 1 €) rachète et annule 10 M d'actions, le BPA passe à 100/90 = 1,11 €, soit +11%. Mais attention : cet argent aurait pu être investi dans des projets à VAN positive.\n\nLa signalisation : un rachat d'actions signale que le management estime le titre sous-évalué. Les études montrent un rendement excédentaire moyen de +3% autour de l'annonce d'un programme de rachat.\n\nLe débat « buybacks vs investissement » est intense : les critiques arguent que les rachats privilégient le court terme au détriment de l'investissement productif. Les défenseurs répondent que retourner du cash aux actionnaires quand l'entreprise n'a pas de projets rentables est une bonne allocation du capital.\n\nL'accretion mécanique du BPA via les rachats peut masquer une stagnation des bénéfices. Les analystes regardent de plus en plus le résultat net total plutôt que le BPA pour évaluer la performance réelle.\n\nEn France, les rachats représentent environ 30% du retour aux actionnaires des entreprises du CAC 40. Aux États-Unis, les buybacks du S&P 500 dépassent les dividendes depuis les années 2000, atteignant plus de 800 Md$ par an.",
      formula: "BPA post-rachat = Résultat net / (Actions − Actions rachetées)\nCoût implicite = Cash utilisé / Actions rachetées = Prix moyen d'achat\nCréation de valeur si : Prix de rachat < Valeur intrinsèque par action",
      example:
        "Apple rachète pour 90 Md$ d'actions en 2023, réduisant son nombre d'actions de 15,9 Md à 15,5 Md. Avec un résultat net de 97 Md$, le BPA passe de 6,10 $ à 6,26 $ (+2,6%) grâce au seul effet du rachat. Depuis 2012, Apple a racheté plus de 600 Md$ d'actions, réduisant son nombre de titres de 26 Md à 15,5 Md (−40%).",
      finnSays:
        "Le rachat d'actions, c'est comme la liposuccion financière : ça réduit le nombre de parts du gâteau, donc chaque part est plus grosse. Mais le gâteau ne change pas de taille !",
    },
  },
  {
    id: 'corp-19',
    title: 'Augmentation de capital',
    xp: 100,
    duration: '13 min',
    content: {
      introduction:
        "L'augmentation de capital est l'émission de nouvelles actions par une entreprise pour lever des fonds propres. C'est une opération de financement majeure qui dilue les actionnaires existants mais renforce le bilan. Elle est utilisée pour financer la croissance, des acquisitions ou pour rétablir une situation financière dégradée.",
      keyPoints: [
        "Les droits préférentiels de souscription (DPS) protègent les actionnaires existants contre la dilution en leur donnant la priorité pour souscrire aux nouvelles actions.",
        "La décote d'émission (15-30% en moyenne) incite les investisseurs à souscrire malgré le signal négatif. Plus la décote est élevée, plus la dilution est importante.",
        "L'annonce d'une augmentation de capital fait baisser le cours de 2-3% en moyenne, conformément à la théorie du pecking order (signal de surévaluation).",
        "Les augmentations de capital « rescue » (pour éviter la faillite) sont les plus dilutives et les plus destructrices de valeur pour les actionnaires existants."
      ],
      explanation:
        "L'augmentation de capital peut prendre plusieurs formes. L'émission avec DPS (le plus courant en Europe) donne à chaque actionnaire un droit de souscrire proportionnellement à sa participation. Le DPS est négociable en bourse, permettant aux actionnaires qui ne souscrivent pas de compenser partiellement leur dilution.\n\nL'augmentation réservée (sans DPS) est destinée à un ou plusieurs investisseurs spécifiques. Elle nécessite l'approbation de l'AG à la majorité qualifiée (2/3) et une décote maximale de 10% par rapport au cours moyen pondéré des 20 dernières séances.\n\nLe calcul de la dilution : si une entreprise a 100 M actions à 50 € (capitalisation 5 Md€) et émet 20 M actions à 40 € (levée de 800 M€), la capitalisation post-opération est 5,8 Md€ pour 120 M actions, soit un cours théorique de 48,3 €. La dilution est de (50 − 48,3) / 50 = 3,3%.\n\nLe TERP (Theoretical Ex-Rights Price) est le cours théorique après détachement des DPS : TERP = (capitalisation ancienne + montant levé) / nombre total d'actions post-opération.\n\nLes situations typiques d'augmentation de capital : financement d'acquisition (l'acquéreur paie tout ou partie en actions), croissance organique (investissements lourds), restructuration financière (conversion de dette en equity), et entrée d'un partenaire stratégique.\n\nLe rôle des banques (underwriting) est crucial : elles garantissent le placement des actions, portant le risque si la demande est insuffisante. Les fees d'underwriting représentent 2-5% du montant levé.",
      formula: 'TERP = (N_ancien × P_ancien + N_nouveau × P_émission) / (N_ancien + N_nouveau)\nValeur du DPS = P_ancien − TERP\nDilution = (P_ancien − TERP) / P_ancien',
      example:
        "Renault annonce une augmentation de capital de 1,2 Md€. Actions existantes : 300 M à 30 €. Nouvelles actions : 50 M à 24 € (décote de 20%). TERP = (300×30 + 50×24) / 350 = 10 200 / 350 = 29,14 €. DPS = 30 − 29,14 = 0,86 € par action. Ratio : 1 action nouvelle pour 6 anciennes. Dilution = 2,9%.",
      finnSays:
        "L'augmentation de capital, c'est inviter de nouveaux convives à table. Le repas est meilleur (plus de cash), mais chaque part est plus petite !",
    },
  },
  {
    id: 'corp-20',
    title: 'Restructuring',
    xp: 120,
    duration: '15 min',
    content: {
      introduction:
        "Le restructuring financier intervient quand une entreprise ne peut plus honorer ses obligations financières. Il vise à rétablir la viabilité en restructurant la dette, les opérations et parfois l'actionnariat. C'est un domaine spécialisé qui mobilise des banquiers, avocats et consultants en situation de crise.",
      keyPoints: [
        "Les solutions amiables (mandat ad hoc, conciliation en France ; out-of-court restructuring) sont préférées car plus rapides, moins coûteuses et plus discrètes que les procédures judiciaires.",
        "La restructuration de dette inclut : extension de maturité, réduction du taux d'intérêt, conversion de dette en equity (debt-for-equity swap) et hair-cut (abandon partiel de créance).",
        "Le Chapter 11 américain (redressement judiciaire) et la sauvegarde française permettent à l'entreprise de continuer à opérer pendant la restructuration.",
        "Le DIP financing (Debtor-in-Possession) fournit de la liquidité pendant la procédure, avec une priorité de remboursement (superpriority) sur toute la dette existante."
      ],
      explanation:
        "Le processus de restructuring commence par l'identification de la détresse financière : violation de covenants, incapacité à rembourser une échéance, cash burn excessif. L'entreprise mandate un conseil en restructuring (Houlihan Lokey, PJT, Rothschild) pour analyser la situation et proposer des options.\n\nLe business plan restructuré est le document central : il projette les cash flows réalistes et détermine la dette soutenable. La différence entre la dette actuelle et la dette soutenable est le montant à restructurer.\n\nLes techniques de restructuration de dette sont graduelles. Le re-profiling (extension de maturité, baisse de taux) est le moins douloureux. Le debt-for-equity swap convertit une partie de la dette en actions, transférant le contrôle des actionnaires vers les créanciers. Le hair-cut implique un abandon pur et simple de créance.\n\nLes négociations entre classes de créanciers sont complexes : les créanciers senior veulent préserver leur rang, les mezzanines négocient leur conversion, et les actionnaires risquent d'être totalement dilués (wipe-out). Le principe de priorité absolue (absolute priority rule) dicte que les créanciers senior doivent être intégralement remboursés avant que les juniors reçoivent quoi que ce soit.\n\nLes restructurations opérationnelles accompagnent souvent le volet financier : cession d'actifs non stratégiques, réduction des effectifs, renégociation des contrats fournisseurs et recentrage sur le cœur de métier.\n\nLa valeur de l'entreprise en restructuring est souvent analysée via le « fulcrum security » : la tranche de dette qui se retrouve à cheval entre les créanciers intégralement remboursés et ceux qui subissent une perte.",
      example:
        "Restructuration d'une chaîne de restaurants (dette 300 M€, EBITDA 20 M€, levier insoutenable de 15x). Plan : dette soutenable estimée à 100 M€ (5x). Hair-cut de 50% sur la dette mezzanine (−60 M€), conversion de 100 M€ de dette senior en equity (créanciers deviennent actionnaires à 80%), extension de 3 ans sur les 140 M€ de dette senior restante. Actionnaires existants dilués à 5%.",
      finnSays:
        "Le restructuring, c'est la salle d'urgence de la finance. L'objectif numéro un : stabiliser le patient avant de penser au traitement de long terme !",
    },
  },
  {
    id: 'corp-21',
    title: 'Distressed debt',
    xp: 120,
    duration: '13 min',
    content: {
      introduction:
        "L'investissement en distressed debt consiste à racheter la dette d'entreprises en difficulté financière à un prix décoté (souvent 20-60 cents par dollar) pour réaliser un profit lors de la restructuration ou du redressement. C'est une stratégie alternative qui requiert une expertise juridique et financière pointue.",
      keyPoints: [
        "La dette distressed se négocie en dessous de 70% de sa valeur nominale, ou avec un spread supérieur à 1 000 bps au-dessus du taux sans risque.",
        "La stratégie « loan-to-own » vise à acquérir la dette pour prendre le contrôle de l'entreprise via une conversion debt-for-equity lors de la restructuration.",
        "L'analyse de la « recovery value » (valeur de recouvrement) est centrale : combien chaque classe de créancier récupérera-t-elle en cas de restructuration ou liquidation ?",
        "Les fonds distressed (Oaktree, Apollo, Cerberus) achètent quand la panique est maximale et que les détenteurs institutionnels sont forcés de vendre (forced sellers)."
      ],
      explanation:
        "L'investissement en distressed debt exploite les inefficiences de marché créées par les situations de crise. Quand une entreprise approche du défaut, ses créanciers institutionnels (banques, fonds obligataires) sont souvent contraints de vendre : les régulations (Bâle III pour les banques) et les mandats de gestion interdisent de détenir des actifs en dessous d'un certain rating.\n\nCes ventes forcées (fire sales) créent des opportunités pour les fonds spécialisés qui peuvent analyser la complexité de la situation et avoir la patience d'attendre le dénouement. Le profit provient de l'écart entre le prix d'achat décoté et la valeur de recouvrement après restructuration.\n\nL'analyse du fulcrum security est essentielle : c'est la tranche de dette qui ne sera que partiellement remboursée (la charnière entre les créanciers totalement remboursés et ceux qui perdent tout). Le fulcrum security est la classe qui obtient le contrôle de l'entreprise post-restructuration.\n\nExemple : si l'EV post-restructuration est 500 M€ et la dette senior = 300 M€, mezzanine = 250 M€, la senior est remboursée intégralement, la mezzanine est le fulcrum (200/250 = 80% de recovery). Acheter la mezzanine à 40 cents offre un upside de 2x.\n\nLes stratégies distressed incluent : trading (acheter bas, revendre quand la situation se clarifie), loan-to-own (prendre le contrôle), DIP lending (prêter en procédure collective avec superpriority), et claims trading (acheter les créances commerciales décotées).\n\nLe cycle de distressed est contra-cyclique : les meilleures vintages d'investissement distressed correspondent aux récessions (2001, 2008-2009, 2020).",
      example:
        "En 2020, un fonds distressed achète la dette senior d'une compagnie aérienne à 45 cents/dollar (450 M$ pour 1 Md$ de nominal). La compagnie entre en Chapter 11. Le plan de restructuration valorise l'entreprise à 800 M$ : la dette senior (1 Md$ nominal) est convertie en 100% de l'equity. Le fonds détient 45% de la nouvelle entreprise (450/1000). Quand l'entreprise est revendue 1,2 Md$ en 2023, le fonds récupère 540 M$, soit un MOIC de 1,2x en 3 ans.",
      finnSays:
        "Le distressed debt, c'est acheter des billets d'avion pendant une tempête. Tout le monde a peur, mais celui qui garde son calme voyage pour pas cher !",
    },
  },
  {
    id: 'corp-22',
    title: 'Spin-offs',
    xp: 100,
    duration: '12 min',
    content: {
      introduction:
        "Un spin-off est la séparation d'une division d'entreprise en une entité indépendante cotée en bourse. Les actions de la nouvelle entité sont distribuées aux actionnaires existants. Le spin-off vise à libérer de la valeur cachée en permettant à chaque entité d'être valorisée séparément selon ses propres fondamentaux.",
      keyPoints: [
        "Le « conglomerate discount » justifie les spin-offs : les marchés sous-évaluent les conglomérats diversifiés car ils sont difficiles à analyser et manquent de focus stratégique.",
        "Les spin-offs surperforment le marché : les études montrent un rendement excédentaire de 15-20% sur les 2-3 ans suivant la séparation.",
        "Le spin-off est généralement exempt d'impôts pour les actionnaires (tax-free distribution) contrairement à une cession classique.",
        "La nouvelle entité bénéficie d'un management dédié, d'une stratégie focalisée et d'une rémunération alignée sur sa propre performance."
      ],
      explanation:
        "Le conglomerate discount est le phénomène par lequel un conglomérat est valorisé moins que la somme de ses parties (Sum-of-the-Parts ou SOTP). Ce discount, typiquement de 10-20%, s'explique par : la complexité de l'analyse (les analystes couvrent un secteur, pas un conglomérat), la dilution de la gestion (le management ne peut exceller partout), les subventions croisées inefficientes (une division rentable finance une division sous-performante) et le manque de transparence.\n\nLe spin-off élimine ces problèmes en créant deux pure plays, chacun valorisé selon ses propres multiples sectoriels. Par exemple, un conglomérat industriel avec une division tech à forte croissance : en conglomérat, tout est valorisé à 10x EBITDA. Après spin-off, l'industrie est valorisée à 8x et la tech à 20x, augmentant la valeur totale.\n\nLe processus de spin-off prend 6-18 mois : annonce stratégique, création juridique de la nouvelle entité, transfert des actifs et passifs (carve-out financier), obtention des autorisations réglementaires, constitution du management et du conseil d'administration, roadshow, puis distribution des actions.\n\nLes Reverse Morris Trust combinent spin-off et fusion : l'entité séparée est immédiatement fusionnée avec un acquéreur, permettant une cession tax-free.\n\nLes risques incluent : la perte d'économies d'échelle, les coûts de séparation (IT, fonctions support), les dissynergies opérationnelles et la vulnérabilité accrue de la petite entité face aux pressions concurrentielles ou à une OPA hostile.",
      example:
        "En 2021, General Electric annonce la séparation en trois entités : GE Aerospace, GE HealthCare et GE Vernova (énergie). L'objectif : éliminer le conglomerate discount qui pesait sur le titre depuis 20 ans. GE HealthCare est spin-offée en janvier 2023 et GE Vernova en avril 2024. L'action GE a triplé entre l'annonce et la finalisation, validant la thèse de valeur cachée.",
      finnSays:
        "Le spin-off, c'est comme libérer un oiseau en cage : parfois, les divisions volent bien plus haut quand elles sont indépendantes !",
    },
  },
  {
    id: 'corp-23',
    title: 'IPO Process',
    xp: 120,
    duration: '15 min',
    content: {
      introduction:
        "L'introduction en bourse (IPO — Initial Public Offering) est le processus par lequel une entreprise privée offre ses actions au public pour la première fois. C'est une étape transformante qui apporte du capital, de la liquidité pour les actionnaires existants et une visibilité accrue, mais impose des obligations de transparence et de gouvernance.",
      keyPoints: [
        "Le processus d'IPO dure 6-12 mois et implique des banques d'investissement (bookrunners), des avocats, des auditeurs et des autorités de marché (AMF, SEC).",
        "Le book-building détermine le prix : les banques sondent les investisseurs institutionnels pour construire un carnet d'ordres et fixer le prix dans une fourchette indicative.",
        "L'underpricing (décote de 10-15% en moyenne) assure le succès du placement et génère un rendement positif le premier jour, attirant les investisseurs.",
        "Le lock-up period (90-180 jours) interdit aux actionnaires existants et au management de vendre leurs titres immédiatement après l'IPO."
      ],
      explanation:
        "Le processus d'IPO se décompose en plusieurs phases. La phase de préparation (3-6 mois) comprend le choix des banques (beauty contest), la restructuration juridique et comptable, l'audit des comptes sur 3 ans, la rédaction du prospectus (document d'enregistrement) et l'obtention du visa de l'autorité de marché.\n\nLe prospectus (S-1 aux États-Unis, Document d'Enregistrement Universel en France) est le document clé : il décrit l'entreprise, ses risques, sa stratégie, ses comptes et les conditions de l'offre. Sa rédaction est un exercice d'équilibre entre attractivité commerciale et exhaustivité juridique.\n\nLe roadshow (2-3 semaines) est la tournée de présentation auprès des investisseurs institutionnels (fonds, assureurs, souverains). Le CEO et le CFO présentent l'equity story et répondent aux questions. C'est un moment crucial qui détermine la demande.\n\nLe book-building agrège les ordres des investisseurs : chaque investisseur indique le nombre de titres souhaités et le prix maximum qu'il est prêt à payer. La demande est généralement 3-10x supérieure à l'offre pour une IPO réussie.\n\nLe pricing intervient la veille du premier jour de cotation : les banques fixent le prix final dans (ou parfois au-dessus de) la fourchette indicative, en fonction de la qualité du carnet d'ordres.\n\nLes frais d'IPO sont significatifs : underwriting fees (3-7% du montant levé, dont 60% au lead bookrunner), frais juridiques, frais d'audit et frais de communication. Le coût total peut atteindre 10% du montant levé pour les petites IPO.\n\nLa greenshoe (option de surallocation de 15%) permet aux banques de vendre plus de titres si la demande est forte, stabilisant le cours post-IPO.",
      formula: 'Valorisation IPO = Prix par action × Nombre total d\'actions post-IPO\nDilution = Nouvelles actions / (Anciennes + Nouvelles)\nUnderpricing = (Cours J1 − Prix IPO) / Prix IPO',
      example:
        "IPO d'une fintech française. Valorisation visée : 2 Md€. Émission de 20% du capital (nouvelles actions + cession par les fondateurs). Fourchette indicative : 18-22 €. Roadshow sursouscrit 5x. Pricing à 21 €. Montant levé : 400 M€. Premier jour : cours à 24,5 € (+17%). Greenshoe exercée intégralement (+60 M€). Fees banques : 4% = 18,4 M€.",
      finnSays:
        "L'IPO, c'est le bal de promo de la finance : tu te prépares pendant des mois, tu veux impressionner tout le monde, et le lendemain tu réalises que c'est le début d'une nouvelle vie avec beaucoup plus de devoirs !",
    },
  },
  {
    id: 'corp-24',
    title: 'SPAC',
    xp: 100,
    duration: '12 min',
    content: {
      introduction:
        "Un SPAC (Special Purpose Acquisition Company) est une société-coquille cotée en bourse sans activité opérationnelle, créée dans le seul but d'acquérir une entreprise privée dans un délai de 18-24 mois. Le SPAC offre une voie alternative à l'IPO traditionnelle, avec plus de rapidité et de certitude sur la valorisation.",
      keyPoints: [
        "Le SPAC lève des fonds via une IPO classique, place le cash dans un trust et dispose de 18-24 mois pour identifier et acquérir une cible (le « de-SPAC »).",
        "Les fondateurs du SPAC (sponsors) reçoivent 20% du capital gratuitement (« promote »), ce qui dilue fortement les investisseurs de l'IPO.",
        "L'investisseur SPAC bénéficie d'une protection : s'il n'approuve pas l'acquisition proposée, il peut récupérer son investissement initial (droit de rédemption).",
        "Le boom des SPAC en 2020-2021 (>600 IPO SPAC aux USA, 160 Md$ levés) a été suivi d'un effondrement en 2022-2023 suite aux mauvaises performances post-merger."
      ],
      explanation:
        "Le mécanisme du SPAC se déroule en deux phases. Phase 1 — IPO du SPAC : le sponsor (généralement un professionnel du PE ou un entrepreneur renommé) lève des fonds auprès d'investisseurs. Les unités émises combinent une action et un warrant (droit d'acheter une action supplémentaire à un prix fixe). Le cash est placé en trust (obligations d'État).\n\nPhase 2 — De-SPAC : le sponsor identifie une cible, négocie l'acquisition et la soumet au vote des actionnaires. Si approuvé, la cible fusionne avec le SPAC et devient cotée. Si rejeté ou si aucune cible n'est trouvée dans le délai, le SPAC est liquidé et le cash retourné aux investisseurs.\n\nLes avantages pour la cible : processus plus rapide (3-5 mois vs 6-12 pour une IPO), certitude sur la valorisation (négociée directement avec le sponsor), possibilité de partager des projections financières (interdit dans une IPO classique) et flexibilité de structure.\n\nLes inconvénients : la dilution liée au promote (20%) et aux warrants est massive. Le cash effectivement disponible pour la cible peut être nettement inférieur au montant levé si de nombreux actionnaires exercent leur droit de rédemption.\n\nLe « SPAC arbitrage » est une stratégie de hedge fund : acheter des unités SPAC pré-deal à un prix proche de la valeur du trust (10 $), bénéficier de la protection du floor, et vendre le warrant gratuitement. C'est un investissement quasi sans risque.\n\nLes performances post-de-SPAC ont été décevantes : en moyenne, les actions perdent 30-50% dans l'année suivant le merger. Cela a conduit la SEC à renforcer la réglementation et refroidi l'enthousiasme du marché.",
      example:
        "Lucid Motors a fusionné avec le SPAC Churchill Capital Corp IV en 2021. Le SPAC avait levé 2 Md$ à 10$/action. L'annonce du merger a fait monter le cours à 60$ (+500%). Mais la réalité opérationnelle a rattrapé l'euphorie : le cours est tombé sous 5$ en 2023, illustrant les risques de valorisation excessive via SPAC.",
      finnSays:
        "Le SPAC, c'est acheter un billet de loterie avec une garantie de remboursement. Le problème, c'est quand tout le monde se prend pour un gagnant !",
    },
  },
  {
    id: 'corp-25',
    title: 'Joint Ventures',
    xp: 100,
    duration: '11 min',
    content: {
      introduction:
        "Une joint venture (JV) est une entité créée par deux ou plusieurs entreprises pour mener un projet commun tout en restant indépendantes. C'est une alternative à l'acquisition complète qui permet de partager les risques, les coûts et les compétences. Les JV sont particulièrement fréquentes dans l'énergie, l'automobile et les marchés émergents.",
      keyPoints: [
        "La JV combine les forces des partenaires : l'un apporte la technologie, l'autre l'accès au marché local, le troisième le capital — chacun contribue selon son avantage comparatif.",
        "Le pacte d'actionnaires (shareholders' agreement) est le document clé : il définit la gouvernance, les droits de veto, la politique de dividendes et les mécanismes de sortie.",
        "Les clauses de sortie (tag-along, drag-along, put/call options, Russian roulette) sont essentielles pour gérer les désaccords entre partenaires.",
        "Le principal risque est le désalignement des intérêts entre partenaires, qui peut paralyser la prise de décision (deadlock)."
      ],
      explanation:
        "Les JV se structurent typiquement en 50/50 ou avec un actionnaire majoritaire (51/49, 60/40). Le choix dépend de la contribution relative de chaque partenaire et des contraintes réglementaires locales (certains pays imposent un partenaire local majoritaire).\n\nLa gouvernance est le sujet le plus sensible. Dans une JV 50/50, les décisions stratégiques (investissements majeurs, budget, nominations clés) nécessitent l'unanimité, créant un risque de deadlock. Les mécanismes de résolution incluent : escalation au niveau des CEO, médiation, et in fine les clauses de sortie.\n\nLa clause « Russian roulette » est un mécanisme élégant de résolution de deadlock : un partenaire propose un prix, et l'autre doit soit acheter la part du premier à ce prix, soit vendre la sienne. Cela incite à proposer un prix juste.\n\nLa valorisation d'une JV pour la comptabilité des partenaires dépend du pourcentage de détention : consolidation intégrale (>50%), mise en équivalence (20-50%) ou simple placement (<20%).\n\nLes JV sont particulièrement utilisées pour : pénétrer un marché étranger (accès au réseau local), développer une nouvelle technologie (partage des coûts de R&D), exploiter des ressources naturelles (partage des risques d'exploration) et construire de grandes infrastructures.\n\nLe taux d'échec des JV est élevé (50-60% se terminent dans les 5 ans) principalement pour des raisons de désalignement stratégique, de conflits culturels et de changement de direction chez l'un des partenaires.",
      example:
        "Stellantis (ex-PSA) et Samsung SDI ont créé une JV 50/50 en 2023 pour construire une usine de batteries en Indiana (investissement de 3,2 Md$). Stellantis apporte les besoins en batteries pour ses véhicules électriques et le terrain, Samsung SDI apporte la technologie lithium-ion et le savoir-faire manufacturier. La JV fournira 33 GWh/an de batteries à partir de 2025.",
      finnSays:
        "La JV, c'est comme un mariage de raison en finance : ça marche tant que les deux partenaires y trouvent leur compte. Prévois le divorce dans le contrat de mariage !",
    },
  },
  {
    id: 'corp-26',
    title: 'Cas LBO PME',
    xp: 150,
    duration: '18 min',
    content: {
      introduction:
        "Ce cas pratique modélise un LBO sur une PME industrielle française. Vous suivrez le processus complet : sélection de la cible, structuration du financement, modélisation des cash flows et calcul des rendements. Ce cas illustre les spécificités du LBO mid-market : relation avec le dirigeant, dette bancaire (pas de high yield) et importance du management package.",
      keyPoints: [
        "La PME cible (« MetalPro ») fabrique des pièces métalliques de précision : CA 40 M€, EBITDA 8 M€ (marge 20%), croissance stable de 3-4%/an, faible capex.",
        "Le dirigeant-fondateur (62 ans) souhaite transmettre son entreprise tout en assurant la pérennité. Il conserve 10% du capital (rollover) et reste 2 ans pour la transition.",
        "Le financement combine dette senior bancaire (4x EBITDA = 32 M€) et equity sponsor (24 M€). Pas de mezzanine pour simplifier la structure.",
        "Le plan de création de valeur repose sur : professionnalisation de la gestion, acquisitions bolt-on dans le secteur, et amélioration de la marge opérationnelle."
      ],
      explanation:
        "Étape 1 — Valorisation d'entrée : MetalPro est valorisée à 7x EBITDA = 56 M€. Avec une dette nette de 5 M€, l'equity value est de 51 M€. Le fondateur vend 90% de ses parts.\n\nÉtape 2 — Sources & Uses : Uses = equity value 51 M€ + refinancement dette existante 5 M€ + frais de transaction 2,5 M€ = 58,5 M€. Moins cash excédentaire 2,5 M€ = 56 M€. Sources = dette senior 32 M€ (Term Loan 25 M€ amorti sur 7 ans + RCF 7 M€) + equity sponsor 24 M€ = 56 M€. Le rollover du fondateur (10% de 51 M€ = 5,1 M€) fait partie de l'equity.\n\nÉtape 3 — Projections : croissance CA +4%/an, marge EBITDA de 20% à 22% (optimisation achats), capex 2% du CA, BFR stable. Free cash flow année 1 = 8 M€ − 2,4 M€ intérêts − 1,6 M€ impôts − 0,8 M€ capex − 0,3 M€ ΔBFR − 3,6 M€ amortissement dette = −0,7 M€ (breakeven). Années 2-5 : FCF positif et croissant.\n\nÉtape 4 — Sortie à 5 ans : EBITDA projeté 10,5 M€ (croissance + amélioration marge + 1 acquisition bolt-on à 1 M€ d'EBITDA). Sortie à 7,5x = EV 78,7 M€. Dette résiduelle 14 M€. Equity value = 64,7 M€.\n\nÉtape 5 — Rendements : equity investi par le sponsor = 18,9 M€ (24 M€ − 5,1 M€ rollover). Equity sortie sponsor (90%) = 58,2 M€. MOIC = 3,1x. TRI = 25%. Le fondateur récupère 6,5 M€ sur son rollover de 5,1 M€ (1,3x) plus le prix de vente initial.\n\nLe management package (5% du capital en BSA/AGA) aligne les intérêts du nouveau DG avec le fonds. Si les objectifs sont dépassés, le ratchet peut monter à 10%.",
      formula: 'EV entrée = EBITDA × Multiple entrée = 8 × 7 = 56 M€\nEV sortie = EBITDA sortie × Multiple sortie = 10,5 × 7,5 = 78,7 M€\nMOIC = (EV sortie − Dette résiduelle) × %sponsor / Equity investi sponsor',
      example:
        "Décomposition du rendement : MOIC de 3,1x sur 5 ans. Contribution du deleveraging : 18 M€ de dette remboursée = +0,95x. Croissance organique EBITDA : +2 M€ × 7x = +0,74x. Acquisition bolt-on : +1 M€ × 7x = +0,37x. Expansion multiple (7x → 7,5x) : +0,04x. Total = 3,1x.",
      finnSays:
        "Le LBO PME, c'est l'école du PE : des deals à taille humaine où tu apprends tout, de la négociation avec le fondateur à la gestion de la dette bancaire !",
    },
  },
  {
    id: 'corp-27',
    title: 'Cas M&A cross-border',
    xp: 150,
    duration: '18 min',
    content: {
      introduction:
        "Ce cas pratique analyse une acquisition cross-border : un groupe industriel français acquiert un concurrent américain. Les M&A internationales ajoutent des couches de complexité : change, différences réglementaires, fiscalité internationale, intégration culturelle et risque politique. Ce cas couvre la valorisation, le financement multi-devises et les enjeux d'intégration.",
      keyPoints: [
        "La cible américaine (« US TechParts ») a un CA de 200 M$ et un EBITDA de 40 M$. L'acquéreur français (« FR Indus ») veut renforcer sa présence aux États-Unis.",
        "La valorisation combine DCF en dollars (WACC américain) et multiples de transaction comparables. Le taux de change EUR/USD impacte directement le coût pour l'acquéreur.",
        "Le financement est structuré en multi-devises : dette en USD pour matcher les cash flows de la cible (natural hedge) et equity en EUR.",
        "Les enjeux fiscaux incluent le rapatriement des profits, les prix de transfert, la convention fiscale France-USA et l'optimisation de la structure holding."
      ],
      explanation:
        "Étape 1 — Rationale stratégique : FR Indus (CA 500 M€, EBITDA 80 M€) acquiert US TechParts pour : accéder au marché nord-américain (40% du marché mondial), acquérir une technologie complémentaire, et réaliser des synergies d'achats (30 M$ combinés avec les fournisseurs US). L'acquisition est transformante (la cible représente 35% du CA pro forma).\n\nÉtape 2 — Valorisation : DCF en USD avec WACC de 9% (beta US, prime de risque US, dette en USD) donne une EV de 420 M$. Les comparables transactionnels donnent 9-11x EBITDA. Offre à 10x = 400 M$. Au taux EUR/USD de 1,10, cela représente 364 M€.\n\nÉtape 3 — Financement : dette USD 250 M$ (Term Loan B, 6x EBITDA cible), dette EUR 50 M€ (tirage sur les lignes existantes), augmentation de capital 200 M€ (décote 15%, 50 M nouvelles actions). Le financement en USD crée un natural hedge : les cash flows USD de la cible remboursent la dette USD.\n\nÉtape 4 — Analyse accretion/dilution : BPA FR Indus standalone = 3,20 €. Pro forma intégrant US TechParts (résultat net 28 M$ = 25,5 M€ au taux de 1,10) et les coûts de dette : BPA pro forma = (160 + 25,5 − 12) / (50 + 50) = 1,73 €. Dilutif de −46% ! Mais avec synergies pleinement réalisées (15 M$/an après impôts) : BPA = 1,87 €. Toujours dilutif mais l'acquisition est stratégiquement transformante.\n\nÉtape 5 — Intégration : les risques majeurs sont la rétention des talents US (management packages nécessaires), l'harmonisation des systèmes IT (budget 20 M$ sur 3 ans), et le choc culturel (FR Indus est centralisé, US TechParts est décentralisé).",
      example:
        "Calendrier du deal : mois 1-2 (approche et NDA), mois 3-4 (due diligence et valorisation), mois 5 (offre binding à 400 M$), mois 6-9 (négociation SPA, approbation antitrust CFIUS et Commission européenne), mois 10 (augmentation de capital et syndication dette), mois 11 (closing). Coûts de transaction : 15 M$ (advisory 8 M$, legal 4 M$, DD 3 M$).",
      finnSays:
        "Le M&A cross-border, c'est jouer aux échecs en 3D : tu gères le deal, le change, la régulation et la culture — tout en même temps !",
    },
  },
  {
    id: 'corp-28',
    title: 'Examen final',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        "Cet examen final couvre l'ensemble du programme de Corporate Finance : M&A (processus, valorisation, synergies), LBO (structure, modélisation, rendements), structure du capital (théories, politique de distribution) et opérations spéciales (restructuring, spin-offs, IPO). Préparez-vous à mobiliser toutes vos connaissances dans des cas intégrés.",
      keyPoints: [
        "Maîtrisez les processus M&A buy-side et sell-side : étapes, documents clés, rôle de chaque intervenant et mécanismes de prix (earn-out, locked box, completion accounts).",
        "Soyez capable de construire un modèle LBO de bout en bout : sources & uses, projections, cash sweep, rendements et analyse de sensibilité.",
        "Comprenez les théories de structure du capital (MM, trade-off, pecking order) et leur application pratique dans les décisions de financement des entreprises.",
        "Sachez analyser les opérations spéciales : restructuring (fulcrum security, recovery analysis), spin-offs (conglomerate discount), IPO (book-building, pricing) et SPAC."
      ],
      explanation:
        "L'examen final intègre les concepts du cours dans des cas transversaux. Vous serez évalué sur votre capacité à raisonner de manière structurée et à appliquer les outils de corporate finance dans des situations réelles.\n\nThème 1 — M&A et valorisation : analysez un processus sell-side complet, de la préparation de l'IM au closing. Calculez la valeur des synergies et la prime maximale justifiable. Évaluez l'impact accretion/dilution pour un acquéreur coté.\n\nThème 2 — LBO et dette : construisez un Sources & Uses, projetez les cash flows sur 5 ans avec cash sweep, et calculez le TRI et le MOIC. Analysez la structure de dette optimale et les risques de covenant breach.\n\nThème 3 — Structure du capital : appliquez le théorème de MM pour calculer le WACC à différents niveaux de levier. Identifiez la structure optimale selon la trade-off theory. Expliquez le choix de financement d'une entreprise selon le pecking order.\n\nThème 4 — Opérations spéciales : analysez un cas de restructuring (identification du fulcrum security, plan de restructuration, recovery par classe de créancier). Évaluez l'opportunité d'un spin-off (calcul du conglomerate discount, SOTP). Décrivez le processus d'IPO et calculez l'underpricing.\n\nConseils pour l'examen : structurez vos réponses (hypothèses → calculs → conclusion), vérifiez la cohérence de vos résultats (un TRI LBO de 50% ou un WACC de 1% sont des red flags), et n'oubliez pas les aspects qualitatifs (risques, gouvernance, aspects humains).",
      example:
        "Question type : « Un fonds PE envisage le LBO d'une chaîne de cliniques vétérinaires (EBITDA 15 M€). Le levier maximum est 5x. Le fonds cible un TRI de 22% sur 5 ans. (a) Calculez le prix maximum d'acquisition. (b) Structurez le Sources & Uses. (c) Identifiez les risques principaux. (d) Proposez une stratégie de sortie. » Réponse attendue : calcul complet avec analyse de sensibilité et discussion qualitative.",
      finnSays:
        "L'examen final, c'est ton moment de briller ! Rappelle-toi : en Corporate Finance, le diable est dans les détails, mais la vision d'ensemble fait la différence.",
    },
  },
];
