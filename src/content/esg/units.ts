// ──────────────────────────────────────────────
//  FINA - Finance Durable & ESG : Lessons
// ──────────────────────────────────────────────

import type { Lesson } from '../types';

export const esgLessons: Lesson[] = [
  // ─── Leçon 1 : Introduction ESG ──────────────
  {
    id: 'esg-1',
    title: 'Introduction ESG',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'investissement ESG intègre des critères Environnementaux, Sociaux et de Gouvernance dans les décisions financières. Né dans les années 2000, ce mouvement représente aujourd\'hui plus de 35 000 milliards de dollars d\'actifs sous gestion dans le monde.',
      keyPoints: [
        'ESG = Environnement, Social, Gouvernance',
        'Origine : Principes pour l\'Investissement Responsable (PRI) de l\'ONU en 2006',
        'Plus de 35 000 Md$ d\'actifs intègrent des critères ESG',
        'Double matérialité : impact financier ET impact sur la société',
      ],
      explanation:
        'L\'approche ESG repose sur l\'idée que les facteurs extra-financiers influencent la performance à long terme. Le pilier E couvre le changement climatique, la biodiversité et la pollution. Le pilier S concerne les droits humains, les conditions de travail et la diversité. Le pilier G porte sur la gouvernance d\'entreprise, la rémunération des dirigeants et l\'éthique. Les investisseurs ESG cherchent à réduire les risques tout en générant un impact positif.',
      example:
        'Un fonds ESG exclut les entreprises du charbon (E), vérifie les politiques de diversité (S) et analyse l\'indépendance du conseil d\'administration (G) avant d\'investir.',
      finnSays:
        'L\'ESG, c\'est comme un check-up complet : on regarde la santé financière ET la santé éthique de l\'entreprise !',
    },
  },

  // ─── Leçon 2 : E, S, G ──────────────────────
  {
    id: 'esg-2',
    title: 'E, S, G : les trois piliers',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Chaque lettre de l\'acronyme ESG recouvre des enjeux spécifiques que les analystes évaluent à l\'aide d\'indicateurs quantitatifs et qualitatifs.',
      keyPoints: [
        'E : émissions CO₂, consommation d\'eau, gestion des déchets, biodiversité',
        'S : santé-sécurité, diversité, chaîne d\'approvisionnement, communautés',
        'G : indépendance du CA, rémunération, anti-corruption, droits des actionnaires',
        'Chaque pilier comporte des indicateurs mesurables (KPI)',
      ],
      explanation:
        'Le pilier Environnemental mesure l\'empreinte carbone (scope 1, 2, 3), la consommation de ressources et les stratégies de transition climatique. Le pilier Social évalue le capital humain (turnover, formation, écart salarial), la sécurité des produits et l\'impact communautaire. Le pilier Gouvernance analyse la structure du conseil, la transparence fiscale, le lobbying et la protection des lanceurs d\'alerte. Les agences de notation pondèrent ces critères selon le secteur d\'activité.',
      example:
        'Pour une entreprise pétrolière, le pilier E pèse ~50% de la note ESG. Pour une banque, le pilier G domine (~40%). Pour un distributeur, le pilier S (chaîne d\'approvisionnement) est central.',
      finnSays:
        'Le E, le S et le G ne pèsent pas pareil selon le secteur. Un pétrolier sera jugé surtout sur l\'environnement, une banque sur la gouvernance !',
    },
  },

  // ─── Leçon 3 : Ratings ESG ──────────────────
  {
    id: 'esg-3',
    title: 'Ratings ESG',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les agences de notation ESG évaluent les entreprises sur leurs pratiques extra-financières. MSCI, Sustainalytics, ISS et Moody\'s ESG sont les principaux fournisseurs de ratings.',
      keyPoints: [
        'MSCI ESG : échelle AAA à CCC, leader mondial',
        'Sustainalytics : mesure du risque ESG non géré (0 = négligeable, 40+ = sévère)',
        'Faible corrélation entre agences (~0.5 vs ~0.9 pour le crédit)',
        'Biais méthodologiques : taille, secteur, transparence',
      ],
      explanation:
        'Contrairement aux notations de crédit, les ratings ESG divergent fortement entre agences. MSCI utilise une approche best-in-class sectorielle, Sustainalytics mesure le risque résiduel non géré, et ISS se concentre sur la gouvernance. Cette divergence s\'explique par des différences de périmètre (quels indicateurs), de mesure (comment les évaluer) et de pondération (quel poids leur donner). Les investisseurs doivent comprendre la méthodologie avant d\'utiliser un rating.',
      example:
        'Tesla : noté AA par MSCI (innovation véhicules électriques) mais risque élevé chez Sustainalytics (gouvernance controversée, conditions de travail). Un même titre peut donc être « bon » ou « mauvais » ESG selon l\'agence.',
      finnSays:
        'Les notes ESG, c\'est comme les critiques de restaurants : chaque guide a ses propres critères. Il faut toujours regarder la méthodologie !',
    },
  },

  // ─── Leçon 4 : Intégration ESG ──────────────
  {
    id: 'esg-4',
    title: 'Intégration ESG dans l\'analyse',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'intégration ESG consiste à incorporer systématiquement les facteurs extra-financiers dans l\'analyse fondamentale et la valorisation des actifs.',
      keyPoints: [
        'Ajustement du WACC : prime de risque ESG dans le coût du capital',
        'Ajustement des cash-flows : coûts carbone, amendes réglementaires',
        'Screening négatif (exclusion) vs positif (sélection)',
        'Engagement actionnarial : dialogue et vote en assemblée',
      ],
      explanation:
        'L\'intégration ESG va au-delà du simple filtrage. L\'analyste ajuste le DCF en intégrant le coût du carbone dans les charges futures, en modifiant le taux d\'actualisation pour refléter les risques ESG, ou en retraitant les revenus exposés à des activités controversées. L\'engagement actionnarial est une approche complémentaire : l\'investisseur dialogue avec le management pour améliorer les pratiques ESG, et utilise ses droits de vote pour influencer la stratégie.',
      formula: 'WACC ajusté = WACC classique + Prime ESG (typiquement 0,5% à 2%)',
      example:
        'Un analyste valorise une cimenterie. Il ajoute un coût carbone de 80€/tonne aux projections (taxe carbone EU ETS) et augmente le WACC de 1% pour le risque de transition, réduisant la valorisation de ~15%.',
      finnSays:
        'Intégrer l\'ESG dans un DCF, c\'est prévoir les factures que l\'entreprise n\'a pas encore reçues mais qui arrivent à coup sûr !',
    },
  },

  // ─── Leçon 5 : Green Bonds ──────────────────
  {
    id: 'esg-5',
    title: 'Green Bonds',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les obligations vertes (green bonds) financent exclusivement des projets à bénéfice environnemental. Le marché a dépassé 500 milliards de dollars d\'émissions annuelles.',
      keyPoints: [
        'Green Bond Principles (GBP) de l\'ICMA : 4 piliers',
        'Use of Proceeds : énergie renouvelable, efficacité énergétique, transport propre',
        'Greenium : prime verte de 2 à 10 bps en moyenne',
        'EU Green Bond Standard : label européen depuis 2024',
      ],
      explanation:
        'Les Green Bond Principles imposent quatre exigences : utilisation des fonds pour des projets verts, processus de sélection transparent, gestion séparée des fonds et reporting d\'impact annuel. Le greenium est le spread négatif par rapport à une obligation classique du même émetteur, reflétant la demande excédentaire des investisseurs ESG. Le EU Green Bond Standard exige que 100% des fonds soient alignés sur la taxonomie européenne, avec un audit externe obligatoire.',
      formula: 'Greenium = Spread obligation classique − Spread green bond (même émetteur)',
      example:
        'La République française émet une OAT verte 2044. Le greenium est de ~5 bps : l\'OAT verte se traite à OAT+25 bps contre OAT+30 bps pour une obligation conventionnelle comparable.',
      finnSays:
        'Un green bond, c\'est une obligation qui promet de ne financer que des projets écolos. Et les investisseurs acceptent même un rendement un peu plus bas pour ça !',
    },
  },

  // ─── Leçon 6 : Social Bonds ─────────────────
  {
    id: 'esg-6',
    title: 'Social Bonds',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Les obligations sociales financent des projets à impact social positif : logement abordable, accès aux soins, éducation, emploi. Le marché a explosé après le Covid-19.',
      keyPoints: [
        'Social Bond Principles (SBP) de l\'ICMA',
        'Populations cibles : revenus modestes, chômeurs, migrants, handicapés',
        'Boom Covid-19 : l\'UE a émis 100 Md€ de social bonds pour SURE',
        'Sustainability bonds : combinent objectifs verts ET sociaux',
      ],
      explanation:
        'Les social bonds suivent un cadre similaire aux green bonds. Les projets éligibles incluent l\'infrastructure de santé, le logement social, la microfinance et la sécurité alimentaire. Le programme SURE (Support to mitigate Unemployment Risks in an Emergency) de l\'UE a été le plus grand programme de social bonds au monde. Les sustainability bonds (obligations durables) combinent les objectifs E et S, offrant plus de flexibilité aux émetteurs.',
      example:
        'L\'Unédic émet un social bond de 4 Md€ pour financer l\'assurance chômage en France. Les fonds servent directement à payer les allocations des demandeurs d\'emploi.',
      finnSays:
        'Les social bonds prouvent que la finance peut aussi soigner la société. Pendant le Covid, ils ont financé des millions d\'emplois en Europe !',
    },
  },

  // ─── Leçon 7 : Sustainability-Linked Loans ──
  {
    id: 'esg-7',
    title: 'Sustainability-Linked Loans',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Les sustainability-linked loans (SLL) sont des prêts dont le taux d\'intérêt varie en fonction de l\'atteinte d\'objectifs ESG prédéfinis (KPI).',
      keyPoints: [
        'Sustainability-Linked Loan Principles (SLLP) de la LMA',
        'KPI : réduction CO₂, diversité, taux d\'accidents, recyclage',
        'Mécanisme : step-up / step-down de la marge (±5 à 25 bps)',
        'Pas de contrainte sur l\'utilisation des fonds (general purpose)',
      ],
      explanation:
        'Contrairement aux green bonds, les SLL ne contraignent pas l\'utilisation des fonds : l\'emprunteur peut financer n\'importe quelle activité. En revanche, il s\'engage sur des Sustainability Performance Targets (SPT), par exemple réduire ses émissions de 30% d\'ici 2030. Si le KPI est atteint, la marge diminue (step-down) ; sinon, elle augmente (step-up). Les SPT doivent être ambitieux, mesurables et vérifiés par un auditeur externe.',
      formula: 'Marge ajustée = Marge initiale ± Step (selon atteinte du SPT)',
      example:
        'Danone signe un SLL de 2 Md€. Si l\'entreprise réduit ses émissions scope 1+2 de 30% et augmente la part de recyclage à 50%, la marge baisse de 15 bps. Sinon, elle augmente de 10 bps.',
      finnSays:
        'Le SLL, c\'est un prêt avec bonus-malus écologique : tu pollues moins, tu paies moins d\'intérêts. Simple et efficace !',
    },
  },

  // ─── Leçon 8 : Taxonomie Européenne ─────────
  {
    id: 'esg-8',
    title: 'Taxonomie Européenne',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La taxonomie européenne est un système de classification qui définit quelles activités économiques sont « durables » sur le plan environnemental. C\'est la colonne vertébrale du Green Deal.',
      keyPoints: [
        '6 objectifs environnementaux : climat, eau, économie circulaire, pollution, biodiversité, adaptation',
        'Contribution substantielle à au moins 1 objectif',
        'DNSH (Do No Significant Harm) : ne pas nuire aux autres objectifs',
        'Minimum safeguards : respect des droits humains et conventions OCDE',
      ],
      explanation:
        'Pour être « alignée taxonomie », une activité doit remplir trois conditions : contribuer substantiellement à au moins un des six objectifs environnementaux, ne pas causer de préjudice significatif aux cinq autres (principe DNSH), et respecter les garanties minimales sociales. Les entreprises doivent publier leur part de chiffre d\'affaires, CapEx et OpEx alignée. Les seuils techniques sont définis pour chaque secteur (ex : émissions < 100g CO₂/kWh pour la production d\'électricité).',
      example:
        'Une centrale éolienne : contribution substantielle à l\'objectif climat, DNSH vérifié (étude d\'impact biodiversité), minimum safeguards OK → 100% du CA est aligné taxonomie.',
      finnSays:
        'La taxonomie, c\'est le dictionnaire officiel du vert en Europe. Si ton activité n\'y figure pas, tu ne peux pas te dire « durable » !',
    },
  },

  // ─── Leçon 9 : SFDR ─────────────────────────
  {
    id: 'esg-9',
    title: 'SFDR : Sustainable Finance Disclosure',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le règlement SFDR impose aux acteurs financiers européens de classer leurs fonds selon leur degré d\'intégration ESG : Article 6, 8 ou 9.',
      keyPoints: [
        'Article 6 : pas de caractéristique ESG promue (fonds classique)',
        'Article 8 (« vert clair ») : promeut des caractéristiques E/S',
        'Article 9 (« vert foncé ») : objectif d\'investissement durable',
        'PAI (Principal Adverse Impacts) : 14 indicateurs obligatoires',
      ],
      explanation:
        'SFDR (Sustainable Finance Disclosure Regulation) est un règlement européen entré en vigueur en mars 2021. Les fonds Article 8 doivent promouvoir des caractéristiques environnementales ou sociales et publier comment elles sont atteintes. Les fonds Article 9 ont un objectif d\'investissement durable mesurable (ex : réduire les émissions de 50%). Les gérants doivent aussi déclarer s\'ils considèrent les « Principal Adverse Impacts » (PAI), comme les émissions de GES, la biodiversité ou l\'écart de rémunération.',
      example:
        'Un fonds Article 9 « Climate Transition » investit uniquement dans des entreprises dont le plan de transition est aligné sur un scénario 1.5°C. Il publie chaque année l\'empreinte carbone du portefeuille et sa trajectoire.',
      finnSays:
        'Article 6, 8 ou 9, c\'est le code couleur de la finance verte en Europe. Article 9, c\'est le top du top : chaque euro doit avoir un impact mesurable !',
    },
  },

  // ─── Leçon 10 : CSRD ────────────────────────
  {
    id: 'esg-10',
    title: 'CSRD : Reporting de durabilité',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La Corporate Sustainability Reporting Directive (CSRD) oblige les entreprises européennes à publier un reporting de durabilité détaillé et audité selon les normes ESRS.',
      keyPoints: [
        'Remplace la NFRD : périmètre élargi à ~50 000 entreprises',
        'Normes ESRS (European Sustainability Reporting Standards)',
        'Double matérialité : impact financier ET impact sur l\'environnement/société',
        'Audit obligatoire par un tiers (assurance limitée puis raisonnable)',
      ],
      explanation:
        'La CSRD est entrée en application en 2024 pour les grandes entreprises cotées, puis s\'étend progressivement. Les normes ESRS couvrent des thématiques transversales (stratégie, gouvernance) et thématiques (climat, pollution, employés, communautés). Le principe de double matérialité impose de reporter à la fois sur les risques ESG qui affectent la performance financière (matérialité financière) et sur les impacts de l\'entreprise sur l\'environnement et la société (matérialité d\'impact). Le reporting est intégré au rapport de gestion et audité.',
      example:
        'Total Energies publie sous CSRD : émissions scope 1/2/3 (5 MtCO₂), plan de transition, biodiversité sur les sites, politique diversité (35% de femmes cadres), et lobbying climat. L\'auditeur vérifie la fiabilité des données.',
      finnSays:
        'La CSRD, c\'est le bilan comptable version planète. Chaque entreprise doit rendre des comptes sur son impact, pas seulement ses profits !',
    },
  },

  // ─── Leçon 11 : Impact Investing ────────────
  {
    id: 'esg-11',
    title: 'Impact Investing',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'investissement d\'impact vise intentionnellement un impact social ou environnemental mesurable, tout en recherchant un rendement financier. C\'est l\'étape la plus engagée de l\'investissement responsable.',
      keyPoints: [
        'Intentionnalité : l\'impact est un objectif explicite, pas un co-bénéfice',
        'Additionnalité : l\'investissement doit créer un impact qui n\'existerait pas autrement',
        'Mesurabilité : indicateurs IRIS+ du GIIN, ODD de l\'ONU',
        'Spectre de rendement : de concessionnel (< marché) à market-rate',
      ],
      explanation:
        'L\'impact investing se distingue de l\'ESG classique par trois critères : l\'intentionnalité (l\'investisseur cherche activement un impact), l\'additionnalité (le capital est nécessaire au projet) et la mesurabilité (l\'impact est quantifié et suivi). Le GIIN (Global Impact Investing Network) estime le marché à 1 164 milliards de dollars. Les secteurs privilégiés sont la microfinance, l\'énergie renouvelable, le logement abordable et la santé dans les pays émergents.',
      example:
        'Un fonds d\'impact investit 50 M€ dans des centrales solaires au Sénégal. Impact mesuré : 200 000 personnes connectées à l\'électricité, 45 000 tonnes de CO₂ évitées/an. Rendement cible : 8% net.',
      finnSays:
        'L\'impact investing, c\'est vouloir ET le rendement ET l\'impact. Ce n\'est pas de la philanthropie : chaque euro investi doit travailler deux fois !',
    },
  },

  // ─── Leçon 12 : Best-in-Class ───────────────
  {
    id: 'esg-12',
    title: 'Approche Best-in-Class',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'La stratégie best-in-class sélectionne les meilleures entreprises de chaque secteur sur les critères ESG, sans exclure de secteur a priori. C\'est l\'approche dominante en gestion ESG.',
      keyPoints: [
        'Sélection des leaders ESG dans chaque secteur',
        'Pas d\'exclusion sectorielle : même les secteurs controversés sont représentés',
        'Encourage l\'amélioration continue des pratiques',
        'Approche privilégiée en Europe (>50% des encours ISR)',
      ],
      explanation:
        'L\'approche best-in-class repose sur la comparaison intra-sectorielle. Plutôt que d\'exclure le secteur pétrolier, on sélectionne TotalEnergies si sa note ESG est supérieure à celle d\'ExxonMobil. L\'avantage est de maintenir une diversification sectorielle tout en favorisant les meilleures pratiques. La critique est qu\'on peut investir dans des secteurs polluants. L\'approche best-in-universe (comparaison inter-sectorielle) est plus stricte mais crée des biais sectoriels importants.',
      example:
        'Un fonds best-in-class investit dans les 30% les mieux notés ESG de chaque secteur GICS. Résultat : le fonds inclut des pétroliers (les meilleurs du secteur) mais exclut les retardataires de tous les secteurs.',
      finnSays:
        'Best-in-class, c\'est comme choisir le meilleur élève de chaque classe. Même la classe turbulente a son premier de la classe !',
    },
  },

  // ─── Leçon 13 : TCFD ────────────────────────
  {
    id: 'esg-13',
    title: 'TCFD : Reporting Climat',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La Task Force on Climate-related Financial Disclosures (TCFD) fournit un cadre de reporting sur les risques et opportunités liés au climat. Ses recommandations sont devenues obligatoires dans de nombreuses juridictions.',
      keyPoints: [
        '4 piliers : Gouvernance, Stratégie, Gestion des risques, Métriques & cibles',
        'Analyse de scénarios : 1.5°C, 2°C, >3°C',
        'Risques physiques (événements extrêmes) vs risques de transition (réglementation, techno)',
        'Intégré dans la CSRD/ESRS et l\'ISSB (IFRS S2)',
      ],
      explanation:
        'La TCFD distingue les risques physiques (inondations, sécheresses, montée des eaux) et les risques de transition (taxe carbone, obsolescence technologique, changement de comportement). L\'analyse de scénarios oblige les entreprises à évaluer leur résilience dans différents mondes possibles. Un scénario 1.5°C implique une taxe carbone élevée (risque de transition élevé), tandis qu\'un scénario 3°C implique des événements climatiques sévères (risque physique élevé). Les recommandations TCFD ont été intégrées dans les standards ISSB et ESRS.',
      example:
        'BNP Paribas publie une analyse TCFD : dans un scénario 2°C, les pertes de crédit sur le portefeuille pétrole/gaz augmentent de 30%, mais les revenus de financement d\'énergies renouvelables triplent d\'ici 2030.',
      finnSays:
        'La TCFD, c\'est le stress test climatique des entreprises. On simule le futur pour voir qui est prêt et qui ne l\'est pas !',
    },
  },

  // ─── Leçon 14 : Cas Fonds ESG ──────────────
  {
    id: 'esg-14',
    title: 'Cas Pratique : Construire un Fonds ESG',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Appliquons l\'ensemble des concepts ESG à la construction d\'un fonds actions européennes Article 9 SFDR, avec une approche best-in-class et un objectif de décarbonation.',
      keyPoints: [
        'Univers de départ : 600 actions européennes (STOXX Europe 600)',
        'Filtres : exclusions normatives + best-in-class + alignement taxonomie > 20%',
        'Objectif Article 9 : réduction de l\'intensité carbone de 7% par an',
        'Reporting : PAI, alignement taxonomie, empreinte carbone, ODD',
      ],
      explanation:
        'Étape 1 : Exclusions normatives (armes controversées, tabac, charbon > 5% CA) → 540 titres. Étape 2 : Best-in-class, on garde les 50% les mieux notés ESG par secteur → 270 titres. Étape 3 : Filtre taxonomie, on exige > 20% de CA aligné → 150 titres. Étape 4 : Optimisation du portefeuille pour minimiser l\'empreinte carbone tout en limitant le tracking error à 3% vs STOXX 600. Étape 5 : Engagement actionnarial sur les 20 plus gros émetteurs du portefeuille. Le portefeuille final contient ~80 titres avec une intensité carbone 50% inférieure au benchmark.',
      formula: 'Intensité carbone = Σ (poids_i × émissions_i / CA_i) en tCO₂/M€ CA',
      example:
        'Le fonds final : 80 titres, intensité carbone de 75 tCO₂/M€ (vs 150 pour le STOXX 600), 35% d\'alignement taxonomie, tracking error de 2.8%. Top positions : Schneider Electric, Vestas, ASML, Neste.',
      finnSays:
        'Construire un fonds ESG, c\'est comme cuisiner un plat étoilé : il faut les bons ingrédients, les bonnes proportions et un contrôle qualité permanent !',
    },
  },
];
