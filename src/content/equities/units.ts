// ──────────────────────────────────────────────
//  FINA - Marchés Actions : Lessons (20)
// ──────────────────────────────────────────────

import type { Lesson } from '@/types/course';

export const equitiesLessons: Lesson[] = [
  // ── Unité 1 : Structure des marchés ──────────
  {
    id: 'eq-01',
    title: 'Fonctionnement des marchés actions',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les marchés actions sont des lieux d\'échange où s\'achètent et se vendent des parts de capital d\'entreprises cotées. Comprendre leur fonctionnement est le socle de toute activité d\'investissement.',
      keyPoints: [
        'Marché primaire (émission) vs marché secondaire (échange)',
        'Rôle des bourses : Euronext, NYSE, LSE, etc.',
        'Les acteurs : émetteurs, investisseurs, intermédiaires, régulateurs',
        'Mécanisme de cotation continue et fixing',
        'Clearing, settlement et rôle de la chambre de compensation',
      ],
      explanation:
        'Le marché primaire permet aux entreprises de lever des capitaux en émettant des actions pour la première fois (IPO) ou via des augmentations de capital. Le marché secondaire permet ensuite aux investisseurs de s\'échanger ces titres entre eux. Les bourses organisent cette rencontre entre acheteurs et vendeurs de manière transparente et réglementée. Euronext, par exemple, utilise un carnet d\'ordres central où les ordres d\'achat et de vente sont appariés automatiquement selon des règles de priorité prix-temps. Après l\'exécution, la chambre de compensation (comme LCH) garantit le bon dénouement de la transaction, tandis que le dépositaire central (Euroclear) assure le transfert de propriété.',
      example:
        'Lorsqu\'un investisseur passe un ordre d\'achat de 100 actions TotalEnergies à 55 €, l\'ordre est transmis au carnet d\'ordres d\'Euronext. S\'il existe un ordre de vente à 55 € ou moins, la transaction est exécutée. LCH.Clearnet devient la contrepartie centrale, et le règlement-livraison intervient en T+2.',
      finnSays:
        'Imagine le marché comme un grand bazar ultra organisé : chaque stand (la bourse) affiche les prix en temps réel, et un notaire invisible (la chambre de compensation) garantit que tout le monde paie et reçoit ses actions. Pas de triche possible !',
    },
  },
  {
    id: 'eq-02',
    title: 'Indices boursiers',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les indices boursiers sont des baromètres synthétiques qui résument la performance d\'un ensemble d\'actions. Ils servent de benchmark pour mesurer la performance des gérants et refléter la santé d\'un marché.',
      keyPoints: [
        'Pondération par capitalisation (CAC 40, S&P 500) vs pondération par les prix (Dow Jones)',
        'Free float et ajustement du flottant',
        'Indices sectoriels, thématiques et smart beta',
        'Rebalancement et effets d\'inclusion/exclusion',
        'Tracking difference et tracking error pour les ETF',
      ],
      explanation:
        'Un indice pondéré par la capitalisation accorde un poids proportionnel à la taille boursière de chaque composant. Le CAC 40 utilise la capitalisation flottante ajustée : seules les actions librement négociables comptent. Le S&P 500 couvre 500 grandes capitalisations américaines et représente environ 80 % de la capitalisation totale du marché US. À l\'opposé, le Dow Jones Industrial Average pondère par les prix : une action à 200 $ pèse quatre fois plus qu\'une action à 50 $, indépendamment de la taille de l\'entreprise. Les comités d\'indices procèdent à des révisions périodiques (trimestrielles pour le CAC 40) et les entrées/sorties génèrent des flux importants liés au rebalancement des fonds indiciels.',
      formula: 'Indice pondéré capitalisation = Σ(Pᵢ × Qᵢ) / Diviseur',
      finnSays:
        'Un indice, c\'est comme la moyenne de la classe : il te donne une idée générale, mais il peut cacher des élèves brillants et d\'autres en difficulté. Le CAC 40 n\'a que 40 élèves, mais ils représentent 80 % de la cour de récré !',
    },
  },
  {
    id: 'eq-03',
    title: 'Microstructure des marchés',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'La microstructure étudie les mécanismes internes de formation des prix sur les marchés financiers : le carnet d\'ordres, le bid-ask spread, la liquidité et l\'impact de marché.',
      keyPoints: [
        'Le carnet d\'ordres (order book) et la profondeur de marché',
        'Bid-ask spread : composantes et déterminants',
        'Liquidité : mesures (volume, turnover, Amihud ratio)',
        'Impact de marché et coûts de transaction implicites',
        'Market makers et haute fréquence (HFT)',
      ],
      explanation:
        'Le carnet d\'ordres centralise l\'ensemble des ordres d\'achat (bid) et de vente (ask) à chaque niveau de prix. Le spread bid-ask représente le coût immédiat d\'un aller-retour : il rémunère les fournisseurs de liquidité pour le risque d\'inventaire et le risque de sélection adverse. La sélection adverse survient quand un teneur de marché fait face à un trader informé qui possède une information supérieure. Les market makers HFT fournissent de la liquidité en échange de la capture du spread. L\'illiquidité se mesure par le ratio d\'Amihud : le rapport entre le rendement absolu et le volume en euros. Plus le ratio est élevé, plus le titre est illiquide.',
      formula: 'Amihud = (1/D) × Σ |Rₜ| / Volumeₜ',
      example:
        'Une action mid-cap affiche un bid à 24,80 € et un ask à 25,00 €. Le spread est de 0,20 € soit 0,80 %. Un investisseur institutionnel souhaitant acheter 50 000 actions devra probablement absorber plusieurs niveaux du carnet, générant un impact de marché additionnel estimé à 0,3-0,5 %.',
      finnSays:
        'Le spread, c\'est comme la marge du marchand : il achète à 24,80 € et revend immédiatement à 25 €. Plus le marché est liquide, plus le marchand est en concurrence et plus sa marge se réduit. C\'est la magie de la compétition !',
    },
  },
  {
    id: 'eq-04',
    title: 'Types d\'ordres',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Maîtriser les différents types d\'ordres est essentiel pour exécuter une stratégie d\'investissement de manière optimale tout en contrôlant les coûts et les risques d\'exécution.',
      keyPoints: [
        'Ordre au marché : exécution immédiate, prix incertain',
        'Ordre à cours limité : prix garanti, exécution incertaine',
        'Ordre stop (stop-loss et stop-limit)',
        'Ordres iceberg et ordres cachés',
        'Algorithmes d\'exécution : VWAP, TWAP, Implementation Shortfall',
      ],
      explanation:
        'L\'ordre au marché garantit l\'exécution mais pas le prix : il s\'exécute contre les meilleurs ordres disponibles dans le carnet. L\'ordre à cours limité fixe un prix maximal (achat) ou minimal (vente) : il ne s\'exécute que si le marché atteint ce niveau. L\'ordre stop-loss se déclenche quand le prix franchit un seuil, transformant alors l\'ordre en ordre au marché. Les ordres iceberg n\'affichent qu\'une fraction de la quantité totale pour limiter l\'impact de marché. Les algorithmes VWAP découpent un gros ordre en tranches exécutées tout au long de la journée, ciblant le prix moyen pondéré par les volumes.',
      example:
        'Un gérant souhaite acheter 200 000 actions Schneider Electric. Il utilise un algo VWAP sur la journée. L\'algorithme découpe l\'ordre en petites tranches de 500-2 000 actions et les exécute en suivant le profil historique de volume. Le prix moyen obtenu devrait être proche du VWAP de la journée.',
      finnSays:
        'L\'ordre au marché, c\'est comme crier "je prends !" au marché aux puces : tu es sûr d\'obtenir l\'objet, mais peut-être pas au meilleur prix. L\'ordre limité, c\'est "je prends si c\'est en dessous de 50 €". Plus subtil !',
    },
  },

  // ── Unité 2 : Analyse fondamentale ───────────
  {
    id: 'eq-05',
    title: 'Analyse fondamentale',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'L\'analyse fondamentale vise à déterminer la valeur intrinsèque d\'une action en étudiant les fondamentaux économiques et financiers de l\'entreprise, de son secteur et de la macroéconomie.',
      keyPoints: [
        'Valeur intrinsèque vs prix de marché : la notion de marge de sécurité',
        'Analyse des états financiers : compte de résultat, bilan, flux de trésorerie',
        'Ratios de profitabilité : ROE, ROIC, marge opérationnelle',
        'Ratios de solvabilité et structure financière',
        'Qualité du management et gouvernance',
      ],
      explanation:
        'L\'analyse fondamentale repose sur l\'idée que le prix de marché peut temporairement s\'éloigner de la valeur intrinsèque. L\'analyste étudie la capacité bénéficiaire de l\'entreprise, sa position concurrentielle (moat), la qualité de son bilan et les perspectives de croissance. Le ROE (Return on Equity) mesure la rentabilité des fonds propres : un ROE de 15 % signifie que l\'entreprise génère 15 € de bénéfice pour 100 € de capitaux propres. Le ROIC (Return on Invested Capital) est souvent préféré car il neutralise l\'effet de levier et mesure la vraie performance opérationnelle. La marge de sécurité de Benjamin Graham recommande d\'acheter avec une décote de 20-30 % par rapport à la valeur intrinsèque.',
      formula: 'ROE = Résultat net / Capitaux propres\nROIC = NOPAT / Capital investi',
      example:
        'LVMH affiche un ROE de 25 % et un ROIC de 18 %. Son moat repose sur ses marques iconiques (Louis Vuitton, Dior) et son pricing power. Si un analyste estime la valeur intrinsèque à 900 € et que le cours est à 720 €, la marge de sécurité est de 20 %.',
      finnSays:
        'L\'analyse fondamentale, c\'est comme évaluer une maison : tu regardes les fondations (le bilan), les revenus locatifs (les bénéfices), le quartier (le secteur). Le prix du marché ? C\'est juste ce que les gens sont prêts à payer aujourd\'hui !',
    },
  },
  {
    id: 'eq-06',
    title: 'Approches Top-down et Bottom-up',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Deux approches complémentaires structurent l\'analyse fondamentale : le top-down part de la macroéconomie pour identifier les secteurs porteurs, tandis que le bottom-up se concentre sur la sélection individuelle de titres.',
      keyPoints: [
        'Top-down : macroéconomie → secteurs → titres',
        'Bottom-up : sélection de titres indépendamment du contexte macro',
        'Avantages et limites de chaque approche',
        'Combinaison top-down / bottom-up en pratique',
        'Impact du cycle économique sur les allocations sectorielles',
      ],
      explanation:
        'L\'approche top-down commence par analyser l\'environnement macroéconomique global (croissance du PIB, inflation, taux d\'intérêt, politique monétaire), puis identifie les zones géographiques et secteurs les mieux positionnés, avant de sélectionner les meilleurs titres dans ces secteurs. L\'approche bottom-up, en revanche, se concentre sur les qualités intrinsèques de chaque entreprise : avantage compétitif, management, valorisation. Warren Buffett est l\'archétype de l\'investisseur bottom-up : il cherche des entreprises extraordinaires à des prix raisonnables, indépendamment du contexte macro. En pratique, les gérants combinent souvent les deux : un filtre macro top-down pour l\'allocation sectorielle, puis une sélection bottom-up pour le stock picking.',
      finnSays:
        'Le top-down, c\'est regarder la Terre depuis l\'espace puis zoomer. Le bottom-up, c\'est examiner chaque caillou à la loupe. Les meilleurs détectives utilisent les deux techniques !',
    },
  },
  {
    id: 'eq-07',
    title: 'Analyse sectorielle',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'L\'analyse sectorielle étudie les dynamiques compétitives, les barrières à l\'entrée et les facteurs de création de valeur propres à chaque industrie.',
      keyPoints: [
        'Classification GICS et ICB des secteurs',
        'Les 5 forces de Porter : pouvoir de négociation, menace de substitution, rivalité',
        'Cycle de vie sectoriel : émergence, croissance, maturité, déclin',
        'Metrics sectoriels spécifiques (ARPU, same-store sales, load factor...)',
        'Analyse comparative et peer group',
      ],
      explanation:
        'La classification GICS (Global Industry Classification Standard) structure le marché en 11 secteurs, 25 groupes d\'industries, 74 industries et 163 sous-industries. L\'analyse des 5 forces de Porter évalue l\'attractivité structurelle d\'un secteur. Un secteur avec de fortes barrières à l\'entrée, un faible pouvoir de négociation des clients et fournisseurs, et peu de substituts (comme le luxe) offre un potentiel de rentabilité élevé. Chaque secteur a ses propres indicateurs clés : l\'ARPU (Average Revenue Per User) pour les télécoms, le RevPAR pour l\'hôtellerie, le load factor pour les compagnies aériennes, le same-store sales pour la distribution.',
      example:
        'Le secteur du luxe européen (LVMH, Hermès, Kering) affiche des marges opérationnelles de 25-40 %, soutenues par un fort pricing power, des barrières à l\'entrée élevées (héritage de marque) et un faible pouvoir de négociation des clients. Les 5 forces de Porter y sont très favorables.',
      finnSays:
        'Analyser un secteur, c\'est comme étudier un écosystème : qui sont les prédateurs, les proies, les barrières naturelles ? Dans le luxe, les marques sont comme des forteresses imprenables. Dans les compagnies aériennes, c\'est la jungle !',
    },
  },
  {
    id: 'eq-08',
    title: 'Rotation sectorielle',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La rotation sectorielle est une stratégie qui ajuste l\'exposition aux différents secteurs en fonction de la phase du cycle économique pour surperformer le marché.',
      keyPoints: [
        'Les 4 phases du cycle : expansion, pic, contraction, creux',
        'Secteurs cycliques vs défensifs',
        'Early cyclicals, late cyclicals et counter-cyclicals',
        'Indicateurs avancés pour anticiper les rotations',
        'Momentum sectoriel et mean-reversion',
      ],
      explanation:
        'Le modèle de rotation sectorielle lie la performance relative des secteurs à la phase du cycle économique. En début d\'expansion, les secteurs cycliques précoces (consommation discrétionnaire, technologie, industrie) surperforment. En fin d\'expansion, les cycliques tardifs (énergie, matériaux) prennent le relais. En récession, les secteurs défensifs (santé, utilities, consommation de base) résistent mieux. Le modèle de l\'horloge d\'investissement (investment clock) combine croissance et inflation pour déterminer l\'allocation optimale. Les indicateurs avancés comme le PMI manufacturier, la courbe des taux et les permis de construire aident à anticiper les transitions.',
      example:
        'En 2020-2021, la reprise post-COVID a illustré une rotation textbook : d\'abord la tech et la consommation discrétionnaire (Amazon, LVMH), puis l\'industrie et les matériaux (ArcelorMittal), enfin l\'énergie (TotalEnergies) avec le rebond des matières premières.',
      finnSays:
        'La rotation sectorielle, c\'est comme changer de vêtements selon la saison. En hiver (récession), on met un manteau défensif (santé, utilities). Au printemps (reprise), on sort les habits de fête (tech, conso) !',
    },
  },
  {
    id: 'eq-09',
    title: 'Growth vs Value',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le débat Growth vs Value est l\'un des plus anciens en gestion d\'actifs. Les deux styles d\'investissement reposent sur des philosophies différentes et performent de manière alternée selon le contexte de marché.',
      keyPoints: [
        'Growth : entreprises à forte croissance, PER élevé, réinvestissement des profits',
        'Value : entreprises sous-évaluées, ratios faibles, dividendes élevés',
        'Premium value historique de Fama-French',
        'Cycles de surperformance Growth vs Value',
        'Quality factor et GARP (Growth At Reasonable Price)',
      ],
      explanation:
        'Les actions Growth sont des entreprises à forte croissance du chiffre d\'affaires et des bénéfices (souvent > 15 %/an). Elles se traitent à des multiples élevés (PER > 25) car le marché anticipe une croissance future importante. Les actions Value se traitent en dessous de leur valeur intrinsèque estimée (PER < 15, P/B < 1,5). Le modèle à trois facteurs de Fama-French a documenté un premium Value historique de ~3 %/an, mais ce premium s\'est fortement réduit depuis 2010 avec la surperformance de la tech. Le style GARP (Growth At Reasonable Price) cherche un compromis : des entreprises en croissance mais à des valorisations raisonnables (PEG ratio < 1).',
      formula: 'PEG = PER / Taux de croissance des bénéfices (%)',
      example:
        'En 2022, la remontée brutale des taux a provoqué une rotation massive de Growth vers Value. Le Nasdaq (Growth) a chuté de 33 % tandis que les indices Value n\'ont perdu que 5-10 %. Les taux élevés pénalisent les actions Growth car ils réduisent la valeur actuelle de leurs cash flows futurs lointains.',
      finnSays:
        'Growth, c\'est parier sur l\'avenir : "cette startup va dominer le monde". Value, c\'est acheter les soldes : "cette entreprise vaut plus que son prix". Les deux ont raison... à des moments différents !',
    },
  },
  {
    id: 'eq-10',
    title: 'Small caps vs Large caps',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La taille de capitalisation est un facteur de performance reconnu. Les small caps offrent historiquement un premium de rendement mais avec une volatilité et une illiquidité supérieures.',
      keyPoints: [
        'Classification : micro-cap, small-cap, mid-cap, large-cap, mega-cap',
        'Small cap premium historique et ses explications',
        'Risque de liquidité et coûts de transaction',
        'Couverture analyste et inefficience informationnelle',
        'Indices small cap : CAC Small, Russell 2000, MSCI Small Cap',
      ],
      explanation:
        'Les large caps (capitalisation > 10 Mds €) sont des entreprises matures, très suivies par les analystes et très liquides. Les small caps (200 M€ à 2 Mds €) sont moins couvertes, ce qui crée des opportunités pour les investisseurs capables de faire leur propre recherche. Le small cap premium historique (2-3 %/an aux US sur longue période) s\'explique par la prime de liquidité, le risque spécifique plus élevé et l\'inefficience informationnelle. En France, le CAC Small regroupe environ 200 petites valeurs et offre un terrain de chasse pour les stock pickers. Attention cependant : les small caps sous-performent fortement en période de stress de marché (flight to quality) et les coûts de transaction peuvent être significatifs.',
      finnSays:
        'Les small caps, c\'est comme dénicher un restaurant inconnu qui deviendra la prochaine étoilée Michelin. Tu peux trouver des pépites que personne ne regarde, mais parfois le restaurant ferme avant d\'avoir sa première étoile !',
    },
  },

  // ── Unité 3 : Valorisation ───────────────────
  {
    id: 'eq-11',
    title: 'Dividend Discount Model (DDM)',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Le DDM est le modèle fondateur de la valorisation des actions. Il postule que la valeur d\'une action est la somme actualisée de tous les dividendes futurs versés à l\'actionnaire.',
      keyPoints: [
        'Modèle de Gordon-Shapiro : croissance constante du dividende',
        'DDM à deux et trois phases de croissance',
        'Taux de croissance soutenable : g = ROE × (1 − payout)',
        'Sensibilité au taux d\'actualisation et au taux de croissance',
        'Limites : entreprises ne versant pas de dividendes',
      ],
      explanation:
        'Le modèle de Gordon-Shapiro simplifie en supposant une croissance constante g du dividende à l\'infini. La formule V₀ = D₁ / (r − g) est élégante mais très sensible : si r = 10 % et g = 5 %, V₀ = 20 × D₁, mais si g passe à 6 %, V₀ = 25 × D₁ soit +25 %. Le DDM multi-phases est plus réaliste : une phase de forte croissance (5-10 ans), une phase de transition, puis une phase de maturité avec un taux de croissance terminal proche du PIB nominal. Le taux de croissance soutenable g = ROE × (1 − payout) mesure le rythme auquel une entreprise peut croître en réinvestissant ses bénéfices non distribués.',
      formula: 'V₀ = D₁ / (r − g)\noù D₁ = dividende attendu, r = coût des fonds propres, g = taux de croissance',
      example:
        'Sanofi verse un dividende de 3,76 € par action, en croissance de 3 % par an. Avec un coût des fonds propres de 9 %, le modèle de Gordon donne : V₀ = 3,76 × 1,03 / (0,09 − 0,03) = 3,87 / 0,06 = 64,5 €.',
      finnSays:
        'Le DDM dit : "une action vaut la somme de tous les dividendes qu\'elle te versera, ramenés en euros d\'aujourd\'hui." Simple en théorie, mais il faut prévoir les dividendes jusqu\'à l\'infini. Même Sherlock Holmes aurait du mal !',
    },
  },
  {
    id: 'eq-12',
    title: 'Residual Income Model',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Le modèle de résultat résiduel (Residual Income Model) valorise une action en partant de la valeur comptable et en ajoutant la valeur créée au-delà du coût du capital.',
      keyPoints: [
        'Résultat résiduel = Résultat net − (Coût des FP × Capitaux propres)',
        'Lien avec le ROE : RI > 0 si ROE > coût des fonds propres',
        'Modèle de valorisation : V₀ = BV₀ + Σ RIₜ / (1+r)ᵗ',
        'Avantage par rapport au DDM : fonctionne sans dividendes',
        'Clean surplus relation et ajustements comptables',
      ],
      explanation:
        'Le résultat résiduel (RI) mesure la richesse créée au-delà de la rémunération minimale exigée par les actionnaires. Si une entreprise a des capitaux propres de 100 € par action, un ROE de 15 % et un coût des fonds propres de 10 %, elle génère un RI de (15 % − 10 %) × 100 = 5 € par action par an. La valeur de l\'action est alors la valeur comptable (100 €) plus la valeur actuelle de tous les RI futurs. Ce modèle est particulièrement adapté aux banques et aux entreprises qui ne versent pas de dividendes. La clean surplus relation exige que toutes les variations de capitaux propres passent par le compte de résultat (hors transactions avec les actionnaires).',
      formula: 'V₀ = BV₀ + Σ (ROEₜ − r) × BVₜ₋₁ / (1 + r)ᵗ',
      example:
        'BNP Paribas a des capitaux propres par action de 85 €, un ROE de 12 % et un coût des fonds propres de 10 %. Le RI annuel est (12 % − 10 %) × 85 = 1,70 €. Si ce RI persiste 10 ans puis converge vers zéro, la valeur estimée est environ 85 + 10,4 = 95,4 €.',
      finnSays:
        'Le Residual Income, c\'est dire : "ton entreprise vaut ses fonds propres PLUS la valeur de tout le profit excédentaire qu\'elle génère au-delà du minimum attendu." C\'est élégant car ça part du concret : la valeur comptable !',
    },
  },
  {
    id: 'eq-13',
    title: 'Valorisation relative (multiples)',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'La valorisation relative compare le prix d\'une action à ses pairs via des multiples financiers. C\'est l\'approche la plus utilisée en pratique par les analystes sell-side.',
      keyPoints: [
        'PER (Price/Earnings) : interprétation et limites',
        'EV/EBITDA : le multiple le plus utilisé en M&A',
        'P/B (Price/Book) : pertinent pour les financières et les cycliques',
        'EV/Sales : utilisé pour les entreprises non profitables',
        'Multiples forward vs trailing, ajustements et normalisation',
      ],
      explanation:
        'Le PER (Price/Earnings Ratio) rapporte le cours à son bénéfice par action. Un PER de 20 signifie que le marché paie 20 € pour 1 € de bénéfice, soit un rendement implicite de 5 %. L\'EV/EBITDA est préféré en M&A car il est indépendant de la structure financière : l\'Enterprise Value inclut la dette nette, et l\'EBITDA est un proxy du cash flow opérationnel avant investissements. Pour constituer un peer group pertinent, on sélectionne des entreprises comparables en termes de secteur, taille, géographie, croissance et profil de risque. Le multiple médian du peer group sert de benchmark, et les écarts s\'expliquent par des différences de croissance, de marge ou de risque.',
      formula: 'PER = Cours / BPA\nEV/EBITDA = (Capitalisation + Dette nette) / EBITDA',
      example:
        'Un analyste valorise Dassault Systèmes par comparaison avec ses pairs (SAP, Adobe, Autodesk). Le peer group se traite à un EV/EBITDA forward médian de 25x. En appliquant ce multiple à l\'EBITDA prévu de 2,8 Mds €, il obtient une EV de 70 Mds €. Après déduction de la dette nette, il calcule une capitalisation cible.',
      finnSays:
        'Les multiples, c\'est comme comparer le prix au mètre carré des appartements : un studio à Paris à 12 000 €/m² est-il cher ? Ça dépend du quartier (le peer group). Pareil pour les actions : un PER de 25 est normal dans la tech, excessif dans l\'automobile !',
    },
  },

  // ── Unité 4 : IPO et opérations ─────────────
  {
    id: 'eq-14',
    title: 'Introduction en Bourse (IPO)',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'L\'IPO (Initial Public Offering) est le processus par lequel une entreprise privée ouvre son capital au public en cotant ses actions sur un marché réglementé.',
      keyPoints: [
        'Motivations : levée de capitaux, liquidité, notoriété, monnaie d\'acquisition',
        'Acteurs clés : émetteur, banques chefs de file, avocats, auditeurs, AMF',
        'Processus : préparation (6-12 mois), marketing, pricing, allocation',
        'Document de base et prospectus (EU Prospectus Regulation)',
        'IPO discount et sous-évaluation initiale (underpricing)',
      ],
      explanation:
        'Le processus d\'IPO commence par la sélection d\'un syndicat bancaire dirigé par un ou plusieurs chefs de file (bookrunners). La banque prépare un equity story convaincante, rédige le prospectus et organise le roadshow auprès des investisseurs institutionnels. L\'underpricing moyen (rendement du premier jour) est de 10-15 % historiquement : il rémunère les investisseurs pour le risque d\'information et assure une bonne performance initiale. Les motifs d\'IPO sont multiples : financer la croissance, permettre aux actionnaires historiques de sortir, utiliser les actions comme monnaie d\'acquisition, ou accroître la visibilité de la marque. En France, l\'AMF vise le prospectus et vérifie la qualité de l\'information fournie.',
      example:
        'L\'IPO d\'Aramco en décembre 2019 a levé 25,6 Mds $ pour 1,5 % du capital, valorisant le groupe à 1 700 Mds $. C\'est la plus grande IPO de l\'histoire, avec un underpricing de 10 % le premier jour.',
      finnSays:
        'Une IPO, c\'est comme le jour de l\'inauguration d\'un restaurant : tout le monde veut goûter, les critiques sont là, et le chef a intérêt à assurer. L\'underpricing ? C\'est l\'amuse-bouche offert pour que les clients reviennent !',
    },
  },
  {
    id: 'eq-15',
    title: 'Book building et allocation',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le book building est le mécanisme par lequel les banques déterminent le prix d\'une IPO en collectant les intentions d\'achat des investisseurs institutionnels.',
      keyPoints: [
        'Fourchette indicative de prix et construction du livre d\'ordres',
        'Roadshow et investor education',
        'Critères d\'allocation : qualité de l\'investisseur, taille, horizon',
        'Greenshoe option (option de surallocation)',
        'Alternatives : cotation directe (direct listing) et SPAC',
      ],
      explanation:
        'Le processus de book building se déroule typiquement sur 2-3 semaines. Les banques fixent une fourchette indicative de prix (ex : 18-22 €) et organisent un roadshow où le management présente l\'equity story aux investisseurs. Les investisseurs soumettent des ordres en prix et quantité. Le bookrunner analyse le livre d\'ordres : le prix est fixé là où la demande est suffisamment robuste (typiquement 3-5x la sursouscription). L\'allocation favorise les investisseurs de qualité (long-only, fonds souverains) au détriment des hedge funds. L\'option greenshoe permet au syndicat de vendre 15 % d\'actions supplémentaires pour stabiliser le cours post-IPO. Les cotations directes (Spotify, Slack) et les SPAC offrent des alternatives au processus traditionnel.',
      example:
        'Pour l\'IPO d\'OVHcloud en 2021, la fourchette était de 18,50-20 €. Le livre d\'ordres a été sursouscrit 5x. Le prix a été fixé à 18,50 € (bas de fourchette en raison du contexte de marché). L\'option greenshoe a été exercée à 100 %.',
      finnSays:
        'Le book building, c\'est comme une vente aux enchères inversée : au lieu de monter les prix, la banque demande "à quel prix et combien vous en voulez ?" et choisit les meilleurs clients. Les investisseurs fidèles sont servis en premier !',
    },
  },
  {
    id: 'eq-16',
    title: 'Périodes de lock-up et stabilisation',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les périodes de lock-up empêchent les actionnaires historiques de vendre leurs titres immédiatement après l\'IPO, protégeant ainsi le cours des nouvelles actions.',
      keyPoints: [
        'Lock-up standard : 180 jours (6 mois) pour les insiders',
        'Lock-up pour le management et les fondateurs : souvent 12-24 mois',
        'Effet de l\'expiration du lock-up sur le cours (lock-up expiry)',
        'Mécanisme de stabilisation par le syndicat bancaire',
        'Augmentations de capital secondaires (follow-on offerings)',
      ],
      explanation:
        'Le lock-up est un engagement contractuel des actionnaires existants à ne pas vendre leurs actions pendant une période définie après l\'IPO. L\'objectif est de rassurer les nouveaux investisseurs en évitant une pression vendeuse massive. Les études montrent un rendement anormal négatif moyen de −1 à −3 % autour de l\'expiration du lock-up, reflétant l\'anticipation de nouvelles ventes. La stabilisation post-IPO est assurée par le bookrunner qui utilise l\'option greenshoe et peut acheter des actions sur le marché pour soutenir le cours. Après l\'IPO, l\'entreprise peut réaliser des follow-on offerings (augmentations de capital secondaires) pour lever des fonds supplémentaires ou permettre aux actionnaires de vendre.',
      example:
        'Lors de l\'IPO de Facebook en 2012, le cours a chuté de 38 $ à 18 $ en 3 mois. L\'expiration progressive des lock-ups a ajouté une pression vendeuse massive : 1,9 milliard d\'actions sont devenues vendables en plusieurs vagues.',
      finnSays:
        'Le lock-up, c\'est comme un contrat de mariage : les fondateurs promettent de ne pas fuir avec la caisse pendant 6 mois. Quand le lock-up expire, attention aux embouteillages à la sortie !',
    },
  },

  // ── Unité 5 : Equity Research ────────────────
  {
    id: 'eq-17',
    title: 'Métier d\'analyste equity research',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'L\'analyste equity research étudie en profondeur les entreprises cotées pour émettre des recommandations d\'investissement à destination des investisseurs institutionnels.',
      keyPoints: [
        'Sell-side vs buy-side research',
        'Indépendance de la recherche et réglementation MiFID II',
        'Recommandations : Buy, Hold, Sell et target price',
        'Modélisation financière et prévisions (estimates)',
        'Consensus et impact des révisions de bénéfices',
      ],
      explanation:
        'L\'analyste sell-side travaille pour une banque ou un broker et produit de la recherche distribuée aux clients (buy-side). Depuis MiFID II (2018), la recherche doit être tarifée séparément de l\'exécution (unbundling), ce qui a profondément restructuré l\'industrie. L\'analyste construit un modèle financier détaillé (P&L, bilan, cash flows sur 3-5 ans) et dérive un prix cible (target price) via des méthodes de valorisation (DCF, multiples). La recommandation (Buy si upside > 10 %, Hold si +/−10 %, Sell si downside > 10 %) est le signal opérationnel. Le consensus des analystes (IBES, Bloomberg) agrège les prévisions de BPA : les surprises positives ou négatives par rapport au consensus génèrent des mouvements de cours significatifs.',
      example:
        'Un analyste couvre Airbus et prévoit un BPA 2025 de 6,50 € contre un consensus à 6,20 €. Lors de la publication, Airbus annonce un BPA de 6,60 €. La surprise positive de +6,5 % par rapport au consensus provoque un bond du cours de 4 % le jour même.',
      finnSays:
        'L\'analyste equity research, c\'est le critique gastronomique de la finance : il goûte les bilans, note les entreprises et recommande les meilleures. Depuis MiFID II, les investisseurs doivent payer pour lire ses critiques. Fini le buffet gratuit !',
    },
  },
  {
    id: 'eq-18',
    title: 'Initiation de couverture',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'L\'initiation de couverture est le rapport fondateur d\'un analyste sur une nouvelle valeur. C\'est un document exhaustif qui pose les bases de l\'analyse et établit la première recommandation.',
      keyPoints: [
        'Structure d\'une note d\'initiation : thèse, modèle, valorisation, risques',
        'Investment thesis et catalyseurs',
        'Construction du modèle financier bottom-up',
        'Scénarios bull / base / bear et analyse de sensibilité',
        'Communication : morning note, flash note, sector update',
      ],
      explanation:
        'Une initiation de couverture comprend typiquement 40-80 pages. Elle commence par une synthèse de l\'investment thesis en 1-2 pages, suivie d\'une analyse approfondie du business model, de la position concurrentielle, des perspectives de croissance et des risques. Le modèle financier projette le P&L, le bilan et les cash flows sur 3-5 ans. La valorisation combine généralement un DCF et des multiples comparables. Les scénarios bull/base/bear quantifient l\'upside et le downside : le cas bull pourrait refléter une croissance supérieure ou une expansion des marges, tandis que le cas bear modélise une récession ou une perte de parts de marché. Les catalyseurs identifient les événements à court terme pouvant déclencher une revalorisation.',
      finnSays:
        'L\'initiation de couverture, c\'est comme le premier rapport d\'enquête du détective : on pose toutes les preuves sur la table, on identifie les suspects (les risques) et les alliés (les catalyseurs). Ensuite, on suit l\'affaire de près !',
    },
  },

  // ── Unité 6 : Synthèse et examen ────────────
  {
    id: 'eq-19',
    title: 'Cas pratique : analyse d\'une action',
    xp: 300,
    duration: '50 min',
    content: {
      introduction:
        'Mets en pratique l\'ensemble des concepts du cours en réalisant une analyse complète d\'une action cotée, de l\'analyse sectorielle à la recommandation finale.',
      keyPoints: [
        'Sélection du titre et analyse du secteur (5 forces de Porter)',
        'Analyse financière : croissance, marges, rentabilité, endettement',
        'Modélisation : P&L prévisionnel et cash flows sur 5 ans',
        'Valorisation : DCF + multiples comparables',
        'Synthèse : recommandation, target price, risques et catalyseurs',
      ],
      explanation:
        'Ce cas pratique te guide pas à pas dans l\'analyse d\'une grande capitalisation européenne. Tu commences par l\'analyse top-down (environnement macro et sectoriel), puis bottom-up (business model, avantage compétitif, qualité du management). L\'analyse financière couvre les 5 derniers exercices et identifie les tendances de croissance, de marge et de rentabilité. Le modèle prévisionnel projette le P&L, le bilan et les cash flows sur 5 ans, avec des hypothèses explicites et documentées. La valorisation combine un DCF (WACC, terminal value) et des multiples (PER, EV/EBITDA) appliqués au peer group. La note se conclut par une recommandation argumentée avec un target price à 12 mois.',
      example:
        'Analyse de Schneider Electric : leader mondial de la gestion de l\'énergie. Croissance organique de 8 %, marge EBITA ajustée de 17,5 %, ROIC de 14 %. DCF donne une valeur de 195 €, multiples 180 €. Target price : 190 €. Recommandation : Achat (upside 15 %).',
      finnSays:
        'C\'est le moment de jouer les détectives pour de vrai ! Tu as tous les outils : les indices boursiers, l\'analyse fondamentale, les multiples, le DDM. Montre-moi que tu peux résoudre l\'enquête et trouver le juste prix !',
    },
  },
  {
    id: 'eq-20',
    title: 'Examen final : Marchés Actions',
    xp: 400,
    duration: '45 min',
    content: {
      introduction:
        'L\'examen final évalue ta maîtrise complète des marchés actions : structure des marchés, analyse fondamentale, valorisation, IPO et equity research.',
      keyPoints: [
        'Synthèse des 5 unités du cours',
        'Questions de compréhension et de réflexion',
        'Calculs de valorisation (DDM, multiples, RI)',
        'Analyse de situations réelles de marché',
        'Capacité à formuler une recommandation argumentée',
      ],
      explanation:
        'Cet examen couvre l\'ensemble du programme Marchés Actions. Tu devras démontrer ta compréhension de la microstructure des marchés, ta capacité à analyser les fondamentaux d\'une entreprise, ta maîtrise des outils de valorisation et ta connaissance du processus d\'IPO et de l\'equity research. Les questions combinent théorie (expliquer le modèle de Gordon, décrire le book building) et pratique (calculer un PER implicite, analyser un carnet d\'ordres). La dernière partie te demande de formuler une recommandation complète sur un cas réel.',
      finnSays:
        'Dernier défi, détective ! Tu as exploré les marchés de fond en comble, analysé les bilans, décortiqué les IPO. Maintenant, prouve que tu mérites ton insigne d\'analyste. Je compte sur toi !',
    },
  },
];
