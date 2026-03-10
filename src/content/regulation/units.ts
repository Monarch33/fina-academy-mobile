// ──────────────────────────────────────────────
//  FINA - Réglementation : Lessons
// ──────────────────────────────────────────────

import type { Lesson } from '../types';

export const regulationLessons: Lesson[] = [
  // ─── Leçon 1 : Système Bancaire ─────────────
  {
    id: 'reg-1',
    title: 'Le Système Bancaire',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le système bancaire est le pilier du système financier. Banques commerciales, banques d\'investissement et banques universelles remplissent des fonctions complémentaires dans l\'économie.',
      keyPoints: [
        'Banque commerciale : collecte des dépôts, octroi de crédits',
        'Banque d\'investissement : conseil M&A, émission de titres, trading',
        'Banque universelle : modèle européen combinant les deux activités',
        'Transformation de maturité : emprunter court, prêter long',
      ],
      explanation:
        'Les banques assurent la transformation de maturité (dépôts à court terme → crédits à long terme), la transformation de risque (mutualisation) et la création monétaire (les crédits font les dépôts). Le modèle universel européen (BNP Paribas, Deutsche Bank) combine banque de détail et banque d\'investissement. Aux États-Unis, le Glass-Steagall Act (1933) séparait ces activités, mais le Gramm-Leach-Bliley Act (1999) a mis fin à cette séparation, contribuant à la crise de 2008.',
      example:
        'BNP Paribas, banque universelle : 800 Md€ de crédits (retail), 50 Md€ de revenus CIB (corporate & investment banking), bilan total de 2 600 Md€.',
      finnSays:
        'La banque, c\'est le cœur du système financier : elle pompe l\'épargne et la redistribue en crédits dans toute l\'économie !',
    },
  },

  // ─── Leçon 2 : Banques Centrales ────────────
  {
    id: 'reg-2',
    title: 'Les Banques Centrales',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les banques centrales (BCE, Fed, BoE) sont les gardiennes de la stabilité monétaire et financière. Elles fixent les taux directeurs et supervisent le système bancaire.',
      keyPoints: [
        'BCE : stabilité des prix (cible 2% d\'inflation), supervision bancaire (MSU)',
        'Fed : double mandat (stabilité des prix + plein emploi)',
        'Taux directeurs : principal outil de politique monétaire',
        'Prêteur en dernier ressort : garantie de liquidité en temps de crise',
      ],
      explanation:
        'La BCE fixe trois taux directeurs : le taux de refinancement (MRO), le taux de facilité de dépôt et le taux de facilité de prêt marginal. Depuis 2014, la BCE est aussi superviseur bancaire via le Mécanisme de Surveillance Unique (MSU) pour les banques systémiques de la zone euro. En cas de crise, les banques centrales agissent comme prêteur en dernier ressort et peuvent utiliser des outils non conventionnels (quantitative easing, TLTRO).',
      example:
        'En 2022-2023, la BCE a relevé le taux de dépôt de -0.5% à 4% en 14 mois pour combattre l\'inflation, la hausse la plus rapide de son histoire.',
      finnSays:
        'La banque centrale, c\'est le thermostat de l\'économie : elle monte les taux quand ça chauffe et les baisse quand ça refroidit !',
    },
  },

  // ─── Leçon 3 : Bâle I ──────────────────────
  {
    id: 'reg-3',
    title: 'Bâle I : les fondations',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'L\'accord de Bâle I (1988) a introduit le premier ratio de fonds propres bancaires : le ratio Cooke. Il a posé les bases de la réglementation prudentielle internationale.',
      keyPoints: [
        'Ratio Cooke : fonds propres ≥ 8% des actifs pondérés par le risque',
        'Pondérations simples : 0% (États OCDE), 20% (banques), 50% (hypothèques), 100% (entreprises)',
        'Tier 1 (noyau dur) + Tier 2 (complémentaire) = fonds propres réglementaires',
        'Limites : pas de risque de marché, pondérations trop grossières',
      ],
      explanation:
        'Bâle I a été le premier accord international à imposer un niveau minimum de capital aux banques. Le ratio Cooke exige que les fonds propres (Tier 1 + Tier 2) représentent au moins 8% des actifs pondérés par les risques de crédit. Les pondérations sont forfaitaires : un crédit à la Grèce (OCDE) pèse 0% tandis qu\'un crédit à Apple pèse 100%, indépendamment de la qualité de crédit réelle. Cette simplification excessive a conduit à Bâle II.',
      formula: 'Ratio Cooke = Fonds propres (T1 + T2) / RWA ≥ 8%',
      example:
        'Une banque a 10 Md€ de fonds propres. Avec 100 Md€ de crédits entreprises (pondération 100%) et 50 Md€ de prêts immobiliers (50%), ses RWA = 125 Md€. Ratio = 10/125 = 8.0%, pile la limite.',
      finnSays:
        'Bâle I, c\'est la première règle du jeu bancaire : pas assez de capital, pas le droit de jouer. Simple mais efficace !',
    },
  },

  // ─── Leçon 4 : Bâle II ─────────────────────
  {
    id: 'reg-4',
    title: 'Bâle II : les trois piliers',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Bâle II (2004) a introduit une architecture en trois piliers : exigences minimales de capital, processus de surveillance et discipline de marché. Il a affiné la mesure des risques.',
      keyPoints: [
        'Pilier 1 : exigences minimales (crédit + marché + opérationnel)',
        'Pilier 2 : surveillance prudentielle (SREP), coussin Pilier 2',
        'Pilier 3 : transparence et publication d\'informations',
        'Approche standard vs IRB (Internal Ratings-Based) pour le risque de crédit',
      ],
      explanation:
        'Le pilier 1 ajoute le risque opérationnel et permet aux banques d\'utiliser leurs modèles internes (approche IRB) pour calculer les RWA de crédit. En IRB, la banque estime la probabilité de défaut (PD), la perte en cas de défaut (LGD) et l\'exposition au défaut (EAD). Le pilier 2 donne au superviseur le pouvoir d\'imposer des exigences supplémentaires via le SREP (Supervisory Review and Evaluation Process). Le pilier 3 oblige les banques à publier leurs expositions et ratios.',
      formula: 'RWA crédit (IRB) = f(PD, LGD, EAD, Maturité) selon la formule de Vasicek',
      example:
        'Sous Bâle I, un crédit à Apple et un crédit à une PME en difficulté ont la même pondération (100%). Sous Bâle II en IRB, Apple (PD=0.05%) pèse ~20% et la PME (PD=5%) pèse ~150% des RWA.',
      finnSays:
        'Bâle II a rendu la réglementation plus intelligente : on ne met plus tout le monde dans le même sac, chaque risque a son propre poids !',
    },
  },

  // ─── Leçon 5 : Bâle III - Fonds Propres ────
  {
    id: 'reg-5',
    title: 'Bâle III : Fonds propres',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Après la crise de 2008, Bâle III (2010) a considérablement renforcé les exigences de fonds propres. Le CET1, la forme la plus pure de capital, est devenu la référence centrale.',
      keyPoints: [
        'CET1 (Common Equity Tier 1) ≥ 4.5% des RWA',
        'Tier 1 ≥ 6%, Total Capital ≥ 8%',
        'Coussins : conservation (2.5%), contracyclique (0-2.5%), systémique (1-3.5%)',
        'CET1 effectif pour une G-SIB : souvent > 10%',
      ],
      explanation:
        'Bâle III a redéfini la qualité du capital en exigeant que le CET1 (actions ordinaires + réserves) constitue le socle des fonds propres. Les instruments hybrides (obligations convertibles) sont relégués en AT1 ou Tier 2. Le coussin de conservation (2.5%) empêche les distributions quand les ratios sont bas. Le coussin contracyclique (fixé par la banque centrale nationale) monte en période d\'euphorie creditice. Le coussin G-SIB (1% à 3.5%) s\'applique aux banques systémiques mondiales (JPMorgan, HSBC, BNP Paribas).',
      formula: 'CET1 ratio = CET1 / RWA ≥ 4.5% + 2.5% (conservation) + 0-2.5% (contracyclique) + 0-3.5% (G-SIB)',
      example:
        'BNP Paribas (G-SIB, coussin 1.5%) doit avoir un CET1 ≥ 4.5% + 2.5% + 1% (contracyclique FR) + 1.5% = 9.5%. Son CET1 réel est de 13.2%, soit un excédent de 3.7 points.',
      finnSays:
        'Bâle III, c\'est la réponse à la crise de 2008 : plus de capital, de meilleure qualité, et des coussins pour absorber les chocs !',
    },
  },

  // ─── Leçon 6 : LCR et NSFR ─────────────────
  {
    id: 'reg-6',
    title: 'LCR et NSFR : Ratios de liquidité',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Bâle III a introduit deux ratios de liquidité pour éviter les crises de liquidité bancaire : le LCR (court terme) et le NSFR (long terme).',
      keyPoints: [
        'LCR : résister à 30 jours de stress de liquidité (≥ 100%)',
        'HQLA : actifs liquides de haute qualité (cash, obligations d\'État)',
        'NSFR : adéquation du financement stable sur 1 an (≥ 100%)',
        'Nouvelle exigence post-2008 : avant, aucun ratio de liquidité réglementaire',
      ],
      explanation:
        'Le LCR (Liquidity Coverage Ratio) exige que les HQLA (High Quality Liquid Assets) couvrent au moins 100% des sorties nettes de trésorerie sur 30 jours de stress. Les HQLA de niveau 1 (cash, obligations souveraines) sont comptés à 100%. Le NSFR (Net Stable Funding Ratio) vérifie que le financement stable disponible (ASF) couvre le financement stable requis (RSF) sur un horizon d\'un an. Les dépôts retail (stables) ont un facteur ASF de 90-95%, les financements wholesale court terme de 0-50%.',
      formula: 'LCR = HQLA / Sorties nettes 30 jours ≥ 100%\nNSFR = ASF / RSF ≥ 100%',
      example:
        'Société Générale : HQLA = 220 Md€, sorties nettes 30j = 180 Md€ → LCR = 122%. La banque peut survivre 37 jours de crise de liquidité sans aucun refinancement.',
      finnSays:
        'Le LCR, c\'est la réserve d\'eau potable de la banque : assez de liquide pour tenir 30 jours si plus personne ne veut te prêter !',
    },
  },

  // ─── Leçon 7 : Ratio de Levier ─────────────
  {
    id: 'reg-7',
    title: 'Ratio de Levier',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Le ratio de levier (leverage ratio) est un filet de sécurité non pondéré par les risques. Il empêche les banques d\'accumuler un bilan excessif, même si les RWA semblent faibles.',
      keyPoints: [
        'Leverage ratio = Tier 1 / Exposition totale ≥ 3%',
        'Exposition totale : bilan + hors-bilan + dérivés (sans pondération)',
        'G-SIB : supplément de 50% du coussin G-SIB',
        'Complément aux ratios RWA : pas de manipulation possible via les modèles',
      ],
      explanation:
        'Avant 2008, certaines banques avaient des ratios CET1 confortables mais un levier excessif (bilan 40-50x les fonds propres). Le leverage ratio empêche cette situation en ignorant les pondérations de risque. L\'exposition totale inclut les actifs au bilan, les engagements hors-bilan (lignes de crédit non tirées), les dérivés (mesure d\'exposition SA-CCR) et les opérations de financement de titres (repo). Ce ratio est un backstop : il ne devrait normalement pas être la contrainte active.',
      formula: 'Leverage ratio = Tier 1 / Exposition totale ≥ 3% (+ 50% × G-SIB buffer)',
      example:
        'Deutsche Bank avant 2008 : CET1 ratio de 8% (OK) mais levier de 50x (bilan de 2 000 Md€ pour 40 Md€ de fonds propres). Le leverage ratio aurait été de 2%, en dessous du minimum de 3%.',
      finnSays:
        'Le leverage ratio, c\'est le frein à main de la réglementation : même si tes modèles disent que tout va bien, tu ne peux pas empiler les actifs à l\'infini !',
    },
  },

  // ─── Leçon 8 : TLAC et MREL ────────────────
  {
    id: 'reg-8',
    title: 'TLAC et MREL',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le TLAC (Total Loss-Absorbing Capacity) et le MREL (Minimum Requirement for own funds and Eligible Liabilities) garantissent qu\'une banque peut être résolue sans utiliser l\'argent des contribuables.',
      keyPoints: [
        'TLAC : G-SIBs uniquement, ≥ 18% RWA + 6.75% levier',
        'MREL : toutes les banques européennes, fixé par le SRB',
        'Bail-in : conversion ou annulation de la dette en cas de résolution',
        'Hiérarchie : actionnaires → AT1 → Tier 2 → Senior non-preferred → Senior preferred',
      ],
      explanation:
        'Après le sauvetage des banques par les États en 2008-2012, le régulateur a imposé le bail-in : ce sont les créanciers (pas les contribuables) qui absorbent les pertes. Le TLAC/MREL exige que les banques émettent suffisamment de dette « bail-inable ». En cas de résolution, les pertes sont absorbées dans l\'ordre de subordination : d\'abord les actionnaires, puis les AT1 (comme le write-down de Credit Suisse), puis le Tier 2, puis la dette senior non-preferred. Les dépôts garantis (<100k€) sont toujours protégés.',
      example:
        'Credit Suisse (2023) : les 16 Md CHF d\'AT1 ont été annulés (write-down à zéro) pour absorber les pertes, tandis que les actionnaires ont reçu 0.76 CHF/action via la fusion avec UBS.',
      finnSays:
        'TLAC et MREL, c\'est la fin du « too big to fail ». Si la banque coule, ce sont ses créanciers qui paient, pas les contribuables !',
    },
  },

  // ─── Leçon 9 : Stress Tests ────────────────
  {
    id: 'reg-9',
    title: 'Stress Tests Bancaires',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les stress tests évaluent la résistance des banques à des scénarios macroéconomiques adverses. L\'EBA (Europe) et la Fed (États-Unis) les conduisent régulièrement.',
      keyPoints: [
        'Scénario adverse : récession -6% PIB, chômage +5pts, chute immobilier -30%',
        'Impact mesuré sur CET1, P&L, provisions, RWA',
        'EBA : exercice biennal, résultats publiés banque par banque',
        'Fed CCAR : conditionne les distributions de dividendes',
      ],
      explanation:
        'Les stress tests simulent un choc macroéconomique sévère sur 3 ans. La banque applique le scénario adverse à son portefeuille et mesure l\'impact sur ses pertes de crédit, ses revenus de marché et ses ratios de capital. Si le CET1 tombe en dessous du seuil minimal dans le scénario adverse, le superviseur peut imposer des restrictions de distribution ou exiger un plan de recapitalisation. Les stress tests sont devenus l\'outil central de la supervision post-2008.',
      example:
        'Stress test EBA 2023, scénario adverse : PIB zone euro -6%, chômage 12%, immobilier -25%. Impact moyen : CET1 passe de 15.2% à 10.4% (-4.8 pts). Aucune banque ne tombe sous le minimum.',
      finnSays:
        'Le stress test, c\'est le crash test de la banque : on simule le pire scénario pour vérifier que le capital tient le choc !',
    },
  },

  // ─── Leçon 10 : MiFID II - Investisseurs ──
  {
    id: 'reg-10',
    title: 'MiFID II : Protection des investisseurs',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'MiFID II (Markets in Financial Instruments Directive, 2018) renforce la protection des investisseurs avec des règles strictes de conseil, de transparence des coûts et d\'adéquation des produits.',
      keyPoints: [
        'Catégorisation : retail, professionnel, contrepartie éligible',
        'Test d\'adéquation (suitability) et test de caractère approprié (appropriateness)',
        'Transparence des coûts : ex-ante et ex-post, tous frais inclus',
        'Product governance : marché cible positif et négatif',
      ],
      explanation:
        'MiFID II impose aux intermédiaires financiers de catégoriser leurs clients et d\'adapter le niveau de protection. Un client retail bénéficie de la protection maximale : test d\'adéquation (objectifs, horizon, tolérance au risque), transparence totale des coûts (frais de gestion, frais de transaction, commissions de rétrocession) et possibilité de se rétracter. Le product governance oblige les fabricants de produits à définir un marché cible et les distributeurs à vérifier la cohérence avec le profil du client.',
      example:
        'Un client retail veut acheter un produit structuré complexe. La banque doit réaliser un test d\'adéquation, lui communiquer que les frais totaux sont de 3.2%/an (dont 1% de rétrocession au distributeur) et vérifier que le produit correspond à son profil.',
      finnSays:
        'MiFID II protège l\'investisseur individuel : plus de frais cachés, plus de produits inadaptés. Le client doit savoir exactement ce qu\'il paie !',
    },
  },

  // ─── Leçon 11 : MiFID II - Marchés ────────
  {
    id: 'reg-11',
    title: 'MiFID II : Transparence des marchés',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'MiFID II a transformé la structure des marchés européens en imposant la transparence pré- et post-trade, en encadrant le trading algorithmique et en créant de nouvelles catégories de plateformes.',
      keyPoints: [
        'Transparence pré-trade : obligation d\'afficher les prix (carnets d\'ordres)',
        'Transparence post-trade : publication des transactions dans les 15 minutes',
        'OTF (Organised Trading Facility) : nouvelle catégorie de plateforme',
        'Trading algorithmique : obligations de contrôle et de notification',
      ],
      explanation:
        'MiFID II distingue les marchés réglementés (Euronext), les MTF (Multilateral Trading Facilities) et les OTF pour les instruments non-equity. La règle de transparence pré-trade impose de publier les meilleurs prix bid/ask (avec des waivers pour les gros ordres). La transparence post-trade rend toutes les transactions visibles. Le dark trading est limité par le Double Volume Cap : un titre ne peut être échangé en dark pool que si le volume dark ne dépasse pas 4% sur une plateforme ou 8% en agrégé.',
      example:
        'Un fonds veut vendre 10 M€ d\'actions Total. Si le volume est > 650 000€ (Large In Scale), il peut utiliser un waiver de transparence pré-trade pour éviter l\'impact de marché.',
      finnSays:
        'MiFID II éclaire les marchés : chaque transaction doit être visible. Fini les échanges dans l\'ombre !',
    },
  },

  // ─── Leçon 12 : AIFM ──────────────────────
  {
    id: 'reg-12',
    title: 'Directive AIFM',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'La directive AIFM (Alternative Investment Fund Managers, 2011) réglemente les gérants de fonds alternatifs : hedge funds, private equity, fonds immobiliers et fonds de dette.',
      keyPoints: [
        'Agrément obligatoire pour les gérants > 100 M€ (avec levier) ou > 500 M€',
        'Dépositaire indépendant obligatoire',
        'Reporting annuel et transparence pour les investisseurs',
        'Passeport européen : commercialisation dans toute l\'UE avec un seul agrément',
      ],
      explanation:
        'Avant AIFMD, les hedge funds et fonds de PE n\'étaient quasiment pas réglementés en Europe. La directive impose un agrément auprès du régulateur national, la désignation d\'un dépositaire indépendant (garde des actifs, contrôle des NAV), des politiques de gestion des risques et de liquidité, et un reporting régulier (levier, profil de risque, stratégie). Le passeport européen permet à un gérant agréé au Luxembourg de commercialiser ses fonds dans toute l\'UE sans agrément local supplémentaire.',
      example:
        'Un gérant de hedge fund à Londres gère 2 Md€. Sous AIFMD, il doit obtenir un agrément FCA, nommer BNP Paribas comme dépositaire, et reporter son levier trimestriellement (300% gross, 120% net).',
      finnSays:
        'AIFMD a mis les fonds alternatifs sous les projecteurs : agrément, dépositaire, transparence. Plus de zones grises !',
    },
  },

  // ─── Leçon 13 : EMIR ──────────────────────
  {
    id: 'reg-13',
    title: 'EMIR : Réglementation des dérivés',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'EMIR (European Market Infrastructure Regulation, 2012) réglemente les dérivés OTC en imposant la compensation centrale, le reporting des transactions et la gestion des risques bilatéraux.',
      keyPoints: [
        'Compensation centrale obligatoire pour les dérivés standardisés (IRS, CDS index)',
        'Reporting de toutes les transactions dérivées aux trade repositories',
        'Marges bilatérales obligatoires pour les dérivés non compensés (VM + IM)',
        'CCP (Central Counterparty) : LCH, Eurex, ICE Clear',
      ],
      explanation:
        'Avant 2008, la majorité des dérivés OTC étaient échangés bilatéralement sans transparence ni collatéral systématique. La faillite de Lehman Brothers a révélé les risques de contagion. EMIR impose la compensation centrale (la CCP s\'interpose entre acheteur et vendeur), le reporting au trade repository (DTCC, REGIS-TR), et des exigences de marges bilatérales (variation margin quotidienne + initial margin pour les gros participants) pour les dérivés non compensés.',
      formula: 'Initial Margin (ISDA SIMM) = Σ Sensibilités × Poids de risque, avec netting et corrélations',
      example:
        'Un swap de taux 100 M€ 10 ans : compensé via LCH, la CCP exige une initial margin de ~2 M€ et appelle la variation margin quotidiennement en fonction du mark-to-market.',
      finnSays:
        'EMIR, c\'est le gendarme des dérivés : chaque swap doit être déclaré, compensé et collatéralisé. Plus de risque caché dans les tuyaux !',
    },
  },

  // ─── Leçon 14 : AML / KYC ────────────────
  {
    id: 'reg-14',
    title: 'AML et KYC',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La lutte anti-blanchiment (AML) et la connaissance du client (KYC) sont des obligations fondamentales de conformité bancaire, renforcées par les directives européennes successives.',
      keyPoints: [
        'KYC : identification, vérification d\'identité, bénéficiaire effectif',
        'AML : détection des transactions suspectes, déclaration de soupçon (Tracfin)',
        '6ème directive AML (AMLD6) : harmonisation européenne',
        'AMLA : création d\'une autorité européenne anti-blanchiment (2025)',
      ],
      explanation:
        'Le processus KYC comporte trois étapes : l\'identification du client (CDD - Customer Due Diligence), la vérification du bénéficiaire effectif (UBO - Ultimate Beneficial Owner) et le screening contre les listes de sanctions et de PEP (Personnes Politiquement Exposées). Le monitoring AML analyse les transactions en continu pour détecter les schémas de blanchiment : structuration (fractionnement sous les seuils), layering (transactions complexes pour brouiller l\'origine) et intégration (réintroduction des fonds dans l\'économie légale).',
      example:
        'ING a payé 775 M€ d\'amende en 2018 aux Pays-Bas pour défaillances AML/KYC : absence de vérification des bénéficiaires effectifs et monitoring insuffisant des transactions suspectes.',
      finnSays:
        'KYC, c\'est vérifier l\'identité de tes clients. AML, c\'est s\'assurer que leur argent est propre. Des amendes de centaines de millions attendent ceux qui négligent !',
    },
  },

  // ─── Leçon 15 : Market Abuse ──────────────
  {
    id: 'reg-15',
    title: 'Abus de Marché (MAR)',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Le règlement MAR (Market Abuse Regulation, 2016) interdit le délit d\'initié, la manipulation de marché et la divulgation illicite d\'informations privilégiées.',
      keyPoints: [
        'Délit d\'initié : utiliser une information privilégiée pour trader',
        'Manipulation de marché : influence artificielle sur les cours',
        'Obligation de déclaration des opérations des dirigeants (PDMR)',
        'Sanctions : jusqu\'à 5 M€ ou 3x le profit réalisé (personnes physiques)',
      ],
      explanation:
        'Une information privilégiée est précise, non publique et susceptible d\'influencer significativement le cours. MAR interdit son utilisation (trading), sa transmission (tipping) et sa divulgation (sauf dans le cadre normal de l\'emploi). Les émetteurs doivent publier les informations privilégiées dès que possible (sauf report autorisé) et tenir des listes d\'initiés. La surveillance de marché utilise des algorithmes de détection des patterns suspects (volumes anormaux avant une annonce, ordres manipulatoires type layering/spoofing).',
      example:
        'Un analyste d\'une banque conseil apprend qu\'une OPA va être lancée. S\'il achète des actions ou informe un ami, il commet un délit d\'initié passible de sanctions pénales et administratives.',
      finnSays:
        'MAR, c\'est la règle numéro un des marchés : si tu sais quelque chose que les autres ne savent pas, tu ne trades pas. Point final.',
    },
  },

  // ─── Leçon 16 : Sanctions ─────────────────
  {
    id: 'reg-16',
    title: 'Régime des Sanctions',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Les sanctions internationales (UE, OFAC, ONU) sont des restrictions financières et commerciales visant des pays, entités ou individus. Les banques doivent filtrer toutes leurs transactions.',
      keyPoints: [
        'Sanctions UE : embargo, gel des avoirs, restrictions sectorielles',
        'OFAC (États-Unis) : portée extraterritoriale via le dollar',
        'Screening obligatoire : chaque transaction, chaque client, chaque bénéficiaire',
        'Sanctions secondaires : risque pour les banques non-US traitant en USD',
      ],
      explanation:
        'Les banques doivent filtrer leurs clients et transactions contre les listes de sanctions (UE, OFAC, ONU). Le screening couvre les noms des parties, les pays impliqués et les biens échangés. La complexité vient de la superposition des régimes (UE + US + ONU), des sanctions secondaires américaines (une banque européenne peut être sanctionnée par l\'OFAC pour une transaction en dollars avec l\'Iran) et de la mise à jour constante des listes. Les amendes sont colossales.',
      example:
        'BNP Paribas a payé 8.9 Md$ en 2014, la plus grosse amende bancaire de l\'histoire, pour avoir traité des transactions en dollars avec le Soudan, Cuba et l\'Iran en violation des sanctions OFAC.',
      finnSays:
        'Les sanctions, c\'est le sujet le plus risqué en compliance : une seule transaction interdite peut coûter des milliards. On ne rigole pas avec l\'OFAC !',
    },
  },

  // ─── Leçon 17 : Cas Ratios ────────────────
  {
    id: 'reg-17',
    title: 'Cas Pratique : Calcul des Ratios Prudentiels',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Calculons les principaux ratios réglementaires d\'une banque fictive pour vérifier sa conformité avec Bâle III.',
      keyPoints: [
        'Calculer CET1, Tier 1 et Total Capital ratios',
        'Vérifier LCR et leverage ratio',
        'Identifier les contraintes actives',
        'Évaluer le coussin de distribution (MDA)',
      ],
      explanation:
        'Données : CET1 = 45 Md€, AT1 = 8 Md€, Tier 2 = 12 Md€, RWA = 350 Md€, HQLA = 120 Md€, sorties nettes 30j = 95 Md€, exposition levier = 1 200 Md€. G-SIB buffer = 1.5%. Calcul : CET1 ratio = 45/350 = 12.86%. Tier 1 = 53/350 = 15.14%. Total Capital = 65/350 = 18.57%. LCR = 120/95 = 126%. Leverage = 53/1200 = 4.42%. Minimum CET1 requis = 4.5% + 2.5% + 1% + 1.5% = 9.5%. Tous les ratios sont au-dessus des minimums. MDA (Maximum Distributable Amount) : le coussin au-dessus du minimum est de 3.36 points, permettant des distributions intégrales.',
      formula: 'MDA trigger = CET1 requis (incluant tous les coussins)\nSi CET1 ratio > MDA trigger : distributions libres',
      example:
        'Notre banque : CET1 12.86% vs 9.5% requis → excédent de 3.36 pts (11.8 Md€). LCR 126% vs 100% → excédent de 24.6 Md€ de HQLA. Leverage 4.42% vs 3.75% (G-SIB) → OK. Conclusion : banque bien capitalisée.',
      finnSays:
        'Vérifier les ratios prudentiels, c\'est comme checker le tableau de bord d\'un avion avant le décollage : chaque jauge doit être dans le vert !',
    },
  },

  // ─── Leçon 18 : Examen Final ──────────────
  {
    id: 'reg-18',
    title: 'Examen Final : Réglementation',
    xp: 200,
    duration: '45 min',
    content: {
      introduction:
        'Cet examen final couvre l\'ensemble du cadre réglementaire financier : de Bâle I à Bâle III, MiFID II, EMIR, AML/KYC et les sanctions. Testez vos connaissances.',
      keyPoints: [
        'Maîtriser l\'évolution de Bâle I à Bâle III et les ratios clés',
        'Comprendre la protection des investisseurs (MiFID II) et la transparence des marchés',
        'Connaître les obligations AML/KYC et le régime des sanctions',
        'Savoir calculer et interpréter CET1, LCR, leverage ratio, TLAC/MREL',
      ],
      explanation:
        'La réglementation financière est un écosystème interconnecté. Bâle III assure la solidité des banques (capital, liquidité, levier). MiFID II protège les investisseurs et organise les marchés. EMIR sécurise les dérivés. AIFMD encadre les fonds alternatifs. AML/KYC combat le blanchiment. MAR sanctionne les abus de marché. La BRRD et le TLAC/MREL permettent la résolution ordonnée des banques. L\'enjeu pour les professionnels est de naviguer dans cet environnement complexe tout en servant les clients efficacement.',
      example:
        'Synthèse des ratios clés à retenir : CET1 ≥ 4.5% (+ coussins), LCR ≥ 100%, NSFR ≥ 100%, Leverage ≥ 3%, TLAC ≥ 18% RWA. Pour MiFID II : test d\'adéquation, transparence des coûts, product governance.',
      finnSays:
        'La réglementation, c\'est le cadre qui permet au système financier de fonctionner en toute sécurité. Sans règles, c\'est le Far West. Et on a vu ce que ça donne en 2008 !',
    },
  },
];
