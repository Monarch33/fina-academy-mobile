// ──────────────────────────────────────────────
//  FINA - Macroéconomie : Lessons
// ──────────────────────────────────────────────

import type { Lesson } from '@/types/content';

export const macroLessons: Lesson[] = [
  // ─── Lesson 1 ───
  {
    id: 'macro-1',
    title: 'PIB & croissance',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le Produit Intérieur Brut (PIB) est la mesure la plus utilisée de l\'activité économique d\'un pays. Comprendre sa composition, son calcul et ses limites est fondamental pour analyser les marchés financiers.',
      keyPoints: [
        'Le PIB mesure la valeur totale des biens et services produits dans un pays sur une période',
        'Il se calcule par trois approches équivalentes : production, dépenses et revenus',
        'Le PIB nominal inclut l\'effet prix, le PIB réel corrige de l\'inflation (base fixe)',
        'Le taux de croissance du PIB est le principal indicateur de la santé économique',
      ],
      explanation:
        'Le PIB par les dépenses se décompose en : PIB = C + I + G + (X - M), où C est la consommation des ménages (~55 % en France), I l\'investissement (~23 %), G les dépenses publiques (~24 %) et (X-M) les exportations nettes (souvent négatives en France). La croissance du PIB réel mesure l\'augmentation du volume de production, en excluant l\'effet de la hausse des prix. Le déflateur du PIB convertit le nominal en réel : PIB réel = PIB nominal / Déflateur × 100. La croissance potentielle est la croissance de long terme soutenable sans générer d\'inflation, estimée à environ 1,2-1,5 % pour la France et la zone euro. L\'écart de production (output gap) mesure la différence entre le PIB effectif et le PIB potentiel. Un output gap négatif signale une économie en sous-capacité avec du chômage involontaire. Un output gap positif indique une surchauffe avec risque inflationniste. Les limites du PIB sont bien connues : il ne mesure pas le bien-être, ignore l\'économie informelle et les externalités environnementales, et peut être biaisé par les services publics (valorisés au coût). Des alternatives comme l\'IDH (Indice de Développement Humain) ou le PIB vert tentent de combler ces lacunes. Pour les marchés, c\'est la surprise par rapport aux attentes qui compte davantage que le niveau absolu du PIB.',
      formula: 'PIB = C + I + G + (X - M) ; Croissance réelle = (PIB_réel_t / PIB_réel_t-1 - 1) × 100',
      example:
        'La France a un PIB nominal de 2 800 Mds€ en 2024. Avec une inflation de 2,5 % et une croissance nominale de 3,5 %, la croissance réelle est d\'environ 1,0 %. Le consensus attendait 1,3 % : la surprise négative de -0,3 % fait baisser le CAC 40 de 1,2 % le jour de l\'annonce.',
      finnSays:
        'Le PIB, c\'est le tonnage de la flotte nationale ! Plus il est gros, plus le pays est productif. Mais attention, la qualité du chargement compte autant que la quantité.',
    },
  },
  // ─── Lesson 2 ───
  {
    id: 'macro-2',
    title: 'Inflation',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'L\'inflation est la hausse généralisée et durable du niveau des prix. C\'est la variable macroéconomique qui influence le plus directement la politique monétaire, les taux d\'intérêt et donc la valorisation de tous les actifs financiers.',
      keyPoints: [
        'L\'IPC (Indice des Prix à la Consommation) mesure l\'inflation headline, le core exclut énergie et alimentation',
        'L\'inflation par la demande (demand-pull) survient quand la demande excède l\'offre',
        'L\'inflation par les coûts (cost-push) est poussée par la hausse des coûts de production',
        'Les anticipations d\'inflation sont auto-réalisatrices et constituent l\'objectif clé des banques centrales',
      ],
      explanation:
        'L\'inflation se mesure principalement par l\'IPC (CPI en anglais), un panier de biens et services représentatif de la consommation d\'un ménage moyen. L\'IPC core (sous-jacent) exclut l\'alimentation et l\'énergie, trop volatiles, pour donner une image de la tendance de fond. Le HICP (Harmonised Index) est utilisé dans la zone euro pour les comparaisons. La BCE cible une inflation de 2 % à moyen terme. En dessous, c\'est le risque déflationniste (spirale négative : baisse des prix → report d\'achats → baisse de la demande → baisse des prix). Au-dessus, c\'est la perte de pouvoir d\'achat et le risque d\'emballement. La théorie quantitative de la monnaie (MV = PY, Fisher) relie la masse monétaire à l\'inflation : si la monnaie en circulation augmente plus vite que la production, les prix montent. Les anticipations d\'inflation sont cruciales car elles s\'intègrent dans les négociations salariales et les décisions de prix. On les mesure par les break-even inflation rates (écart entre obligations nominales et indexées) et les enquêtes (Michigan, SPF). L\'inflation a des effets redistributifs : elle pénalise les créanciers et les épargnants en cash, tandis qu\'elle avantage les débiteurs (leur dette réelle diminue). C\'est pourquoi les actions et l\'immobilier sont considérés comme des couvertures partielles contre l\'inflation.',
      formula: 'Taux d\'inflation = (IPC_t / IPC_t-1 - 1) × 100 ; Taux réel ≈ Taux nominal - Inflation (Fisher)',
      example:
        'En juin 2022, l\'inflation US atteint 9,1 % (headline) mais le core est à 5,9 %. La Fed accélère les hausses de taux (+75 bps en juin et juillet). Le S&P 500 chute de 23 % au 1er semestre 2022. Les break-even 10 ans passent de 2,5 % à 2,8 %, signalant des anticipations d\'inflation élevées.',
      finnSays:
        'L\'inflation, c\'est la marée qui monte : si tu ne surélèves pas ton bateau (tes rendements), l\'eau finit par le couler ! Un bon explorateur surveille toujours le niveau de l\'eau.',
    },
  },
  // ─── Lesson 3 ───
  {
    id: 'macro-3',
    title: 'Politique monétaire',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'La politique monétaire, menée par les banques centrales (BCE, Fed, BoJ), est l\'outil principal de régulation macroéconomique. En fixant les taux directeurs et en contrôlant la liquidité, elles influencent l\'ensemble des conditions financières.',
      keyPoints: [
        'Le taux directeur (fed funds rate, taux de refinancement BCE) est l\'outil conventionnel principal',
        'Une politique restrictive (hausse des taux) freine l\'inflation mais ralentit la croissance',
        'Une politique accommodante (baisse des taux) stimule l\'économie mais risque l\'inflation',
        'Le canal de transmission passe par les taux de marché, le crédit, le taux de change et les prix d\'actifs',
      ],
      explanation:
        'Les banques centrales ont généralement un double mandat (Fed : stabilité des prix et plein emploi) ou un mandat unique (BCE : stabilité des prix, inflation proche de 2 %). Le taux directeur est le taux auquel les banques commerciales empruntent auprès de la banque centrale. En le modifiant, la banque centrale influence toute la chaîne des taux : taux interbancaire (EONIA/€STR), taux des crédits aux entreprises et aux ménages, taux obligataires. La transmission se fait par quatre canaux principaux. Le canal des taux d\'intérêt : des taux bas réduisent le coût du crédit, stimulant l\'investissement et la consommation. Le canal du crédit : des conditions accommodantes augmentent la capacité de prêt des banques. Le canal du taux de change : des taux bas déprécient la monnaie, favorisant les exportations. Le canal des prix d\'actifs : des taux bas font monter les prix des actions et de l\'immobilier via l\'actualisation des flux futurs. La règle de Taylor formalise la réaction optimale de la banque centrale : i = r* + π + 0,5(π - π*) + 0,5(y - y*), où r* est le taux neutre, π l\'inflation, π* la cible et (y-y*) l\'output gap. Si l\'inflation est à 4 % avec une cible de 2 % et un output gap nul, le taux directeur optimal est d\'environ 5 %.',
      formula: 'Taylor : i = r* + π + 0,5 × (π - π*) + 0,5 × (y - y*)',
      example:
        'En mars 2022, la Fed relève ses taux de 0-0,25 % à 0,25-0,50 % face à une inflation de 8,5 %. Elle poursuit avec 10 hausses consécutives jusqu\'à 5,25-5,50 % en juillet 2023. Le marché obligataire chute (US 10Y passe de 1,5 % à 5 %), le S&P 500 perd 20 %, et le dollar se renforce de 15 %.',
      finnSays:
        'La banque centrale est le capitaine du port : elle contrôle le niveau de l\'eau (liquidité). Trop bas, les bateaux s\'échouent. Trop haut, le port déborde. L\'art est dans le dosage !',
    },
  },
  // ─── Lesson 4 ───
  {
    id: 'macro-4',
    title: 'Quantitative Easing',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le Quantitative Easing (QE) est une politique monétaire non conventionnelle par laquelle la banque centrale achète massivement des actifs financiers pour injecter de la liquidité quand les taux directeurs sont déjà à zéro.',
      keyPoints: [
        'Le QE intervient quand les taux atteignent le Zero Lower Bound (ZLB) et ne peuvent plus baisser',
        'La banque centrale achète principalement des obligations souveraines et parfois du crédit et des actions',
        'Le QE fait baisser les taux longs, compresse les primes de terme et pousse les investisseurs vers le risque',
        'Le Quantitative Tightening (QT) est le processus inverse de réduction du bilan',
      ],
      explanation:
        'Lorsque les taux directeurs atteignent zéro (ou deviennent négatifs comme en zone euro et au Japon), l\'outil conventionnel est épuisé. Le QE, utilisé massivement après 2008 et 2020, consiste pour la banque centrale à créer de la monnaie centrale pour acheter des actifs sur le marché secondaire. La Fed a acheté jusqu\'à 120 milliards de dollars de titres par mois en 2021. Son bilan est passé de 900 Mds$ en 2008 à 9 000 Mds$ en 2022. Les canaux de transmission du QE sont multiples. L\'effet de portefeuille : en absorbant les obligations souveraines, la banque centrale force les investisseurs à chercher du rendement dans des actifs plus risqués (corporate bonds, actions), comprimant les primes de risque. L\'effet de signal : le QE signale l\'engagement de la banque centrale à maintenir des conditions accommodantes longtemps. L\'effet de richesse : la hausse des prix d\'actifs enrichit les ménages et stimule la consommation. Les critiques du QE incluent : l\'augmentation des inégalités (les propriétaires d\'actifs profitent plus que les autres), le risque de bulles spéculatives, la dépendance des marchés à la liquidité banque centrale et la difficulté à normaliser le bilan sans perturber les marchés (taper tantrum de 2013).',
      example:
        'La BCE lance son PEPP (Pandemic Emergency Purchase Programme) en mars 2020, achetant 1 850 Mds€ d\'actifs. Le spread BTP-Bund passe de 280 bps à 120 bps. Le Stoxx 600 rebondit de 35 % en 6 mois. Quand la BCE annonce la fin du PEPP fin 2021, les spreads remontent progressivement.',
      finnSays:
        'Le QE, c\'est comme si le port ouvrait les vannes pour faire monter le niveau d\'eau. Tous les bateaux montent, mais certains ne flottent que grâce à la marée artificielle !',
    },
  },
  // ─── Lesson 5 ───
  {
    id: 'macro-5',
    title: 'Forward guidance',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le forward guidance est une communication de la banque centrale sur ses intentions futures de politique monétaire. En gérant les anticipations des marchés, la banque centrale influence les conditions financières sans même agir.',
      keyPoints: [
        'Le forward guidance date-based fixe un horizon temporel ("taux bas au moins jusqu\'en 2024")',
        'Le forward guidance state-based conditionne l\'action à des données ("tant que le chômage > 6,5 %")',
        'Le "dot plot" de la Fed est une forme de forward guidance montrant les projections de taux de chaque membre',
        'La crédibilité de la banque centrale est cruciale : un forward guidance non tenu détruit la confiance',
      ],
      explanation:
        'Le forward guidance repose sur l\'idée que les taux longs reflètent les anticipations de taux courts futurs (théorie des anticipations). Si la banque centrale s\'engage à maintenir ses taux bas longtemps, les taux à 2, 5 et 10 ans baissent immédiatement, stimulant l\'économie. La Fed a utilisé des formulations de plus en plus explicites. En 2008, un simple "pour une période prolongée". En 2011, une date précise : "au moins jusqu\'à mi-2013". En 2012, un seuil conditionnel : "tant que le chômage reste au-dessus de 6,5 % et l\'inflation en dessous de 2,5 %". Le dot plot, publié trimestriellement, montre les projections de taux de chaque membre du FOMC (sans les nommer). Il permet aux marchés d\'anticiper la trajectoire des taux. Cependant, les dots sont des projections, pas des engagements, et la divergence entre les dots et les futures de marché est fréquente. La BCE utilise également le forward guidance avec des formulations comme "les taux resteront à leurs niveaux actuels ou plus bas aussi longtemps que nécessaire". Le risque principal est la perte de crédibilité : si la banque centrale ne tient pas ses engagements (comme la Fed qualifiant l\'inflation de "transitoire" en 2021 avant de resserrer agressivement), les marchés cessent de croire le forward guidance futur.',
      example:
        'En mars 2021, le dot plot de la Fed indique 0 hausse de taux en 2022. En décembre 2021, les dots montrent 3 hausses en 2022. La réalité sera 7 hausses pour 425 bps. Le marché obligataire subit sa pire année en 40 ans (-13 % pour le Bloomberg Agg).',
      finnSays:
        'Le forward guidance, c\'est la météo annoncée par le capitaine du port. Si elle est fiable, les marins planifient. Si elle se trompe trop souvent, plus personne n\'écoute !',
    },
  },
  // ─── Lesson 6 ───
  {
    id: 'macro-6',
    title: 'Courbe des taux',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'La courbe des taux (yield curve) trace les rendements des obligations d\'État en fonction de leur maturité. C\'est l\'un des indicateurs les plus puissants du marché, reflétant les anticipations de croissance, d\'inflation et de politique monétaire.',
      keyPoints: [
        'Une courbe normale est croissante : les taux longs sont supérieurs aux taux courts (prime de terme positive)',
        'La théorie des anticipations relie les taux longs aux taux courts futurs anticipés',
        'La prime de terme compense l\'incertitude et la duration des maturités longues',
        'Le taux forward implicite extrait les anticipations de taux futurs à partir de la courbe actuelle',
      ],
      explanation:
        'La courbe des taux se construit à partir des rendements des obligations souveraines : Bunds allemands pour la zone euro, Treasuries pour les États-Unis. Elle présente typiquement trois formes : normale (croissante, pente 2-10Y de 100-200 bps), plate, ou inversée (taux courts > taux longs). La théorie des anticipations pures postule que le taux à n années est la moyenne géométrique des taux courts anticipés : (1+r_n)^n = (1+r_1)(1+f_2)(1+f_3)...(1+f_n), où f_i sont les taux forward implicites. Si les marchés anticipent des baisses de taux (récession), la courbe s\'inverse. En pratique, les taux longs incluent aussi une prime de terme (term premium) qui compense le risque de duration et la préférence pour la liquidité. Le modèle ACM (Adrian, Crump, Moench) décompose le taux 10 ans en taux court moyen anticipé et prime de terme. En 2023, la prime de terme du Treasury 10Y était négative (-50 bps), probablement en raison du QE résiduel. L\'extraction des taux forward est fondamentale : le taux forward 1 an dans 2 ans = [(1+r_3)³/(1+r_2)²] - 1. Ces forwards guident les anticipations de politique monétaire et les décisions d\'investissement obligataire.',
      formula: '(1+r_n)^n = Π(1+f_i) ; Forward f(t,T) = [(1+r_T)^T / (1+r_t)^t]^(1/(T-t)) - 1',
      example:
        'La courbe US en janvier 2024 : 2Y à 4,25 %, 5Y à 3,85 %, 10Y à 3,95 %, 30Y à 4,20 %. Le forward 1Y dans 1 an = [(1,0425)²/(1,0385)] - 1 = 4,65 %. Le marché anticipe un taux court de 4,65 % dans 1 an, en hausse par rapport au spot.',
      finnSays:
        'La courbe des taux est la carte marine du navigateur financier : elle te montre les courants futurs. Quand elle s\'inverse, c\'est le signal de tempête !',
    },
  },
  // ─── Lesson 7 ───
  {
    id: 'macro-7',
    title: 'Inversion de la courbe',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'L\'inversion de la courbe des taux -- quand les taux courts dépassent les taux longs -- est le signal de récession le plus fiable de l\'histoire financière. Elle a précédé chaque récession américaine depuis 1955, avec un seul faux signal.',
      keyPoints: [
        'L\'inversion du spread 2Y-10Y a prédit les 8 dernières récessions US avec un délai de 6-24 mois',
        'L\'inversion du spread 3M-10Y est considérée comme encore plus fiable par la Fed de New York',
        'L\'inversion reflète l\'anticipation de baisses de taux futures (récession → assouplissement monétaire)',
        'Le "dis-inversion" (re-pentification) survient souvent juste avant le début effectif de la récession',
      ],
      explanation:
        'Normalement, les taux longs sont supérieurs aux taux courts car les investisseurs exigent une prime pour le risque de duration et d\'inflation. L\'inversion survient quand les marchés anticipent un ralentissement économique si sévère que la banque centrale devra baisser drastiquement ses taux futurs. Mécaniquement, si la Fed est à 5 % (taux court) mais que le marché anticipe des baisses vers 3 % sur les 2 prochaines années, le taux 2 ans se situe autour de 4 %, en dessous du taux court. L\'indicateur favori est le spread 10Y-2Y : quand il devient négatif, la courbe est inversée. Entre juillet 2022 et octobre 2023, l\'inversion a atteint -108 bps, la plus profonde depuis 1981. La Fed de New York publie un modèle de probabilité de récession basé sur le spread 3M-10Y. Un spread de -100 bps correspond à une probabilité de récession de ~60 % dans les 12 mois. Il est crucial de comprendre que l\'inversion n\'est pas la cause de la récession mais un symptôme des anticipations. Cependant, elle peut aggraver les conditions via le canal du crédit : quand les taux courts dépassent les taux longs, les marges des banques se compriment (elles empruntent court et prêtent long), réduisant leur incitation à prêter.',
      formula: 'Spread = Taux 10Y - Taux 2Y ; P(récession) ≈ f(spread 3M-10Y)',
      example:
        'En avril 2022, le spread 2Y-10Y passe en négatif. La récession n\'arrive pas immédiatement (la croissance reste positive en 2023). Mais le signal reste actif. Historiquement, le délai médian entre l\'inversion et la récession est de 14 mois.',
      finnSays:
        'Quand la courbe s\'inverse, c\'est comme si les oiseaux marins volaient à l\'envers : la tempête approche ! Prépare tes provisions et renforce ton navire.',
    },
  },
  // ─── Lesson 8 ───
  {
    id: 'macro-8',
    title: 'Taux réels vs nominaux',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Distinguer les taux nominaux (affichés) des taux réels (corrigés de l\'inflation) est fondamental. Un taux nominal de 5 % avec une inflation de 4 % ne rapporte que 1 % en pouvoir d\'achat. Le taux réel est le vrai coût du capital.',
      keyPoints: [
        'Le taux réel = taux nominal - inflation anticipée (approximation de Fisher)',
        'Les TIPS (Treasury Inflation-Protected Securities) et OATi fournissent directement le taux réel de marché',
        'Le break-even inflation rate = taux nominal - taux réel (anticipation d\'inflation du marché)',
        'Les taux réels négatifs stimulent l\'économie en rendant l\'emprunt "gratuit" en termes réels',
      ],
      explanation:
        'L\'équation de Fisher relie les taux nominaux et réels : (1+i) = (1+r)(1+π), soit en approximation : r ≈ i - π, où i est le taux nominal, r le taux réel et π l\'inflation. Le taux réel est la variable économiquement pertinente car il mesure le coût d\'opportunité réel du capital. Quand les taux réels sont négatifs (comme entre 2020 et 2022, où le taux réel 10Y US a atteint -1,2 %), l\'argent emprunté rapporte plus que son coût après inflation, stimulant massivement l\'investissement et la prise de risque. Les TIPS (US) et OATi (France) sont des obligations dont le principal est indexé sur l\'inflation. Leur rendement est directement le taux réel de marché. Le break-even inflation (BEI) = rendement nominal - rendement TIPS : c\'est l\'inflation que le marché anticipe en moyenne sur la durée de l\'obligation. En mars 2024, le BEI 10Y US était de ~2,3 %, proche de la cible de la Fed. Le taux réel "neutre" (r-star ou r*) est le taux réel compatible avec le plein emploi et une inflation stable. Il est estimé entre 0,5 % et 1,5 % par la Fed de New York (modèle Laubach-Williams). Quand le taux réel effectif est au-dessus de r*, la politique monétaire est restrictive.',
      formula: 'r ≈ i - πᵉ (Fisher) ; BEI = Taux nominal - Taux TIPS ; r* ≈ 0,5-1,5 % (estimation)',
      example:
        'En octobre 2023 : Treasury 10Y nominal = 4,90 %, TIPS 10Y = 2,50 %. BEI = 2,40 % (anticipation d\'inflation du marché). Taux réel de 2,50 % très au-dessus de r* (~1 %) → politique monétaire très restrictive. Conditions favorables aux obligations.',
      finnSays:
        'Le taux nominal est le vent apparent, le taux réel est le vent réel. Seul le vent réel fait avancer ton bateau ! Ne te laisse pas tromper par les illusions.',
    },
  },
  // ─── Lesson 9 ───
  {
    id: 'macro-9',
    title: 'Marché des changes',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le marché des changes (Forex ou FX) est le plus grand marché financier du monde avec un volume quotidien de 7 500 milliards de dollars. Les taux de change influencent le commerce, l\'inflation importée et la compétitivité internationale.',
      keyPoints: [
        'Le taux de change est le prix d\'une devise en termes d\'une autre (EUR/USD = 1,10 signifie 1 € = 1,10 $)',
        'Les régimes de change vont du flottement pur (USD, EUR) au peg fixe (HKD, SAR)',
        'Les déterminants fondamentaux sont les différentiels de taux, d\'inflation et de croissance',
        'Le carry trade exploite les différentiels de taux : emprunter en devise à taux bas, investir en devise à taux élevé',
      ],
      explanation:
        'Le marché FX est décentralisé (OTC), fonctionnant 24h/24 via un réseau de banques, courtiers et plateformes électroniques. Les paires principales (majors) sont EUR/USD, USD/JPY, GBP/USD, USD/CHF. Le taux spot est le taux d\'échange immédiat, le taux forward intègre le différentiel de taux d\'intérêt entre les deux devises (parité couverte des taux d\'intérêt). À court terme, les flux de capitaux et les différentiels de taux dominent les mouvements. Quand la Fed monte ses taux et la BCE maintient les siens, le dollar se renforce (les capitaux affluent vers le rendement plus élevé). La parité non couverte des taux d\'intérêt (UIP) postule que le différentiel de taux est compensé par la dépréciation anticipée de la devise à taux élevé, rendant le carry trade non profitable en théorie. En pratique, l\'UIP est violée systématiquement : le carry trade génère des rendements positifs en moyenne mais subit des crashes violents lors des épisodes de risk-off (le yen et le franc suisse s\'apprécient brutalement comme valeurs refuges). Le taux de change réel effectif (REER) ajuste le taux nominal pour les différentiels d\'inflation et pondère par les partenaires commerciaux. Un REER élevé signale une perte de compétitivité.',
      formula: 'Forward F = S × (1+r_d) / (1+r_f) ; REER = Taux nominal × (P_domestique / P_étranger)',
      example:
        'EUR/USD passe de 1,22 (jan 2021) à 0,96 (sept 2022) car la Fed relève les taux bien avant la BCE. Le différentiel de taux 2Y passe de -60 bps à +200 bps en faveur du USD. L\'euro perd 21 % en 20 mois.',
      finnSays:
        'Le marché des changes est l\'océan mondial où toutes les devises naviguent. Le vent des taux d\'intérêt pousse les voiliers vers les ports les plus rémunérateurs !',
    },
  },
  // ─── Lesson 10 ───
  {
    id: 'macro-10',
    title: 'Parité de pouvoir d\'achat',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La parité de pouvoir d\'achat (PPP) postule que les taux de change doivent évoluer pour égaliser le prix des biens entre pays. C\'est un concept fondamental pour évaluer si une devise est sur- ou sous-évaluée à long terme.',
      keyPoints: [
        'La PPP absolue dit qu\'un panier de biens identique doit coûter le même prix partout (loi du prix unique)',
        'La PPP relative dit que la variation du taux de change reflète le différentiel d\'inflation',
        'L\'indice Big Mac de The Economist est une illustration populaire de la PPP',
        'La PPP fonctionne mal à court terme mais est un ancrage de long terme des taux de change',
      ],
      explanation:
        'La loi du prix unique, base de la PPP, affirme qu\'en l\'absence de barrières commerciales et de coûts de transport, un bien identique doit avoir le même prix partout une fois converti dans la même devise. Si un Big Mac coûte 5,69 $ aux US et 4,35 € en France, le taux PPP est 5,69/4,35 = 1,31 $/€. Si le taux de marché est 1,10, l\'euro est sous-évalué de 16 % selon le Big Mac Index. La PPP relative est plus nuancée : elle affirme que la variation du taux de change entre deux pays reflète leur différentiel d\'inflation. Si l\'inflation est de 3 % en zone euro et 5 % aux US, l\'euro devrait s\'apprécier d\'environ 2 % par an. Empiriquement, la PPP ne tient pas à court terme (les taux de change s\'en écartent pendant des années) mais fonctionne raisonnablement bien à très long terme (10-20 ans). Les écarts à la PPP s\'expliquent par : les biens non échangeables (services, immobilier), les barrières tarifaires, les coûts de transport, et l\'effet Balassa-Samuelson (les pays riches ont des prix plus élevés car leurs travailleurs sont plus productifs dans les secteurs échangeables, tirant les salaires et les prix des non-échangeables vers le haut).',
      formula: 'PPP absolue : S = P_d / P_f ; PPP relative : ΔS/S ≈ π_d - π_f',
      example:
        'En 2024, le Big Mac coûte 5,69 $ aux US, 5,35 CHF en Suisse (= 6,10 $). Le franc suisse est surévalué de 7 % selon la PPP Big Mac. En revanche, le yuan est sous-évalué de 40 % : un Big Mac ne coûte que 24 CNY (= 3,35 $).',
      finnSays:
        'La PPP dit qu\'un poisson devrait coûter le même prix dans tous les ports du monde. En pratique, c\'est plus cher à Monaco qu\'à Marseille, mais à long terme, les prix convergent !',
    },
  },
  // ─── Lesson 11 ───
  {
    id: 'macro-11',
    title: 'Balance des paiements',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La balance des paiements enregistre toutes les transactions économiques entre un pays et le reste du monde. Elle se compose du compte courant, du compte de capital et du compte financier, et son analyse révèle les déséquilibres structurels d\'une économie.',
      keyPoints: [
        'Le compte courant inclut les échanges de biens (balance commerciale), de services, de revenus et de transferts',
        'Le compte financier enregistre les flux de capitaux : IDE, investissements de portefeuille et autres',
        'Un déficit courant doit être financé par des entrées de capitaux (excédent du compte financier)',
        'Les déséquilibres persistants (ex. déficit US, excédent Chine) créent des tensions géopolitiques',
      ],
      explanation:
        'La balance des paiements est une comptabilité en partie double : la somme du compte courant, du compte de capital et du compte financier est théoriquement nulle (plus les erreurs et omissions). Le compte courant est le plus suivi. Un déficit signifie que le pays consomme plus qu\'il ne produit et doit s\'endetter auprès du reste du monde. Les États-Unis ont un déficit courant chronique (~3,5 % du PIB) financé par des entrées massives de capitaux étrangers (achats de Treasuries par la Chine, le Japon). L\'Allemagne a un excédent structurel (~6 % du PIB) reflétant sa compétitivité industrielle et sa faible consommation domestique. Les déséquilibres créent des problèmes. Pour les pays déficitaires : accumulation de dette extérieure, vulnérabilité aux sudden stops (arrêts brutaux de financement), dépréciation de la devise. Pour les pays excédentaires : accumulation de réserves de change, dépendance aux exportations, insuffisance de la demande intérieure. Le "global imbalances" debate oppose ceux qui voient les déséquilibres comme soutenables (les US fournissent des actifs sûrs au monde) et ceux qui les considèrent comme un risque systémique. Les ajustements passent par les taux de change (dépréciation pour les déficitaires) ou par les politiques internes (stimulus fiscal pour les excédentaires).',
      formula: 'Compte courant + Compte de capital + Compte financier + Erreurs = 0',
      example:
        'La balance commerciale française est déficitaire de 100 Mds€ en 2022, dont 50 Mds€ de déficit énergétique (pétrole, gaz). Ce déficit est financé par des entrées d\'IDE (40 Mds€) et d\'investissements de portefeuille (60 Mds€). La France emprunte au monde pour financer ses importations.',
      finnSays:
        'La balance des paiements, c\'est le livre de comptes du port : ce qui entre, ce qui sort, et qui paie la note. Un port qui importe plus qu\'il n\'exporte finit par devoir des faveurs !',
    },
  },
  // ─── Lesson 12 ───
  {
    id: 'macro-12',
    title: 'Cycles économiques',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Les cycles économiques sont des fluctuations récurrentes de l\'activité autour de sa tendance de long terme. Comprendre les phases du cycle -- expansion, pic, contraction, creux -- est essentiel pour le timing des investissements.',
      keyPoints: [
        'Le NBER (US) et le CEPR (Europe) sont les arbitres officiels des dates de récession',
        'Les quatre phases du cycle sont : reprise (early), expansion (mid), surchauffe (late), récession',
        'Chaque phase favorise des classes d\'actifs différentes (investment clock)',
        'Les cycles durent en moyenne 5-7 ans mais leur durée est très variable',
      ],
      explanation:
        'Le cycle économique est la succession de phases d\'expansion (PIB en hausse) et de contraction (PIB en baisse, techniquement 2 trimestres consécutifs de baisse pour une récession). Le NBER utilise une définition plus large incluant l\'emploi, la production industrielle, les ventes et les revenus réels. L\'investment clock de Merrill Lynch associe chaque phase à une classe d\'actifs : en reprise (croissance en hausse, inflation en baisse), privilégier les actions. En expansion (croissance et inflation en hausse), les matières premières. En surchauffe (croissance en baisse, inflation en hausse), le cash. En récession (croissance et inflation en baisse), les obligations. Les cycles ont des causes variées : choc de demande (bulle immobilière 2008), choc d\'offre (pétrole 1973), choc financier (resserrement du crédit), choc exogène (COVID 2020). Kitchin (3-5 ans, stocks), Juglar (7-11 ans, investissement), Kondratieff (40-60 ans, innovation technologique) décrivent des cycles de différentes fréquences. La théorie des Real Business Cycles (RBC) considère les cycles comme des réponses optimales à des chocs technologiques, tandis que les keynésiens insistent sur les rigidités de prix et les défaillances de coordination.',
      example:
        'Cycle 2009-2020 (le plus long de l\'histoire US) : reprise 2009-2012 (S&P +100 %), expansion 2012-2018 (S&P +80 %), late-cycle 2018-2020 (S&P +30 % avec volatilité accrue). COVID met fin au cycle en mars 2020 avec une récession de 2 mois (la plus courte).',
      finnSays:
        'Les cycles sont les saisons de l\'économie : printemps, été, automne, hiver. Un bon explorateur prépare son voyage en fonction de la saison, pas en espérant un été éternel !',
    },
  },
  // ─── Lesson 13 ───
  {
    id: 'macro-13',
    title: 'Indicateurs avancés',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les indicateurs avancés anticipent les points de retournement du cycle économique. Les PMI, la confiance des consommateurs, les permis de construire et les spreads de crédit sont parmi les plus suivis par les investisseurs.',
      keyPoints: [
        'Les indicateurs avancés précèdent le cycle de 3-12 mois (PMI, permis de construire, spread)',
        'Les indicateurs coïncidents évoluent avec le cycle (production industrielle, emploi)',
        'Les indicateurs retardés confirment les tendances passées (chômage, inflation core)',
        'Le LEI (Leading Economic Index) du Conference Board agrège 10 indicateurs avancés',
      ],
      explanation:
        'Les PMI (Purchasing Managers\' Index) sont les indicateurs les plus suivis au monde. Basés sur des enquêtes auprès des directeurs d\'achats, ils donnent une lecture instantanée de l\'activité. Un PMI > 50 signale une expansion, < 50 une contraction. Le PMI manufacturier a un lead de 2-3 mois sur la production industrielle et de 6-9 mois sur le PIB. Le PMI composite (manufacturier + services) est encore plus pertinent car les services représentent 70 % du PIB dans les pays développés. Les surprises économiques (Citi Economic Surprise Index) mesurent si les données sortent au-dessus ou en dessous du consensus. Elles sont fortement corrélées aux rendements actions à court terme. Les spreads de crédit (OAS high yield - Treasury) anticipent les récessions : un élargissement brutal signale un resserrement des conditions financières. L\'indice des conditions financières (Financial Conditions Index de Goldman Sachs ou Bloomberg) agrège les taux, les spreads, les actions et le dollar en un seul indicateur. Le LEI du Conference Board inclut les permis de construire, les heures travaillées dans le manufacturier, les nouvelles commandes, les anticipations des consommateurs et la courbe des taux. Dix mois consécutifs de baisse du LEI ont historiquement précédé chaque récession.',
      formula: 'PMI > 50 → expansion ; PMI < 50 → contraction ; LEI = Σ 10 composantes standardisées',
      example:
        'En septembre 2022, le PMI manufacturier US passe sous 50 (49,0). Les marchés chutent de 5 % en une semaine. Cependant, le PMI services reste à 56, et le marché du travail est robuste. La récession n\'arrive pas : la dichotomie manufacturing/services illustre les limites d\'un indicateur isolé.',
      finnSays:
        'Les indicateurs avancés sont les mouettes qui annoncent la terre avant qu\'on la voie. Le PMI est ma mouette préférée : fiable, rapide et visible de loin !',
    },
  },
  // ─── Lesson 14 ───
  {
    id: 'macro-14',
    title: 'Marchés émergents',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les marchés émergents (Chine, Inde, Brésil, Indonésie...) représentent 60 % du PIB mondial en PPP mais seulement 12 % de la capitalisation boursière mondiale. Leur potentiel de croissance élevé s\'accompagne de risques spécifiques.',
      keyPoints: [
        'Les émergents offrent une croissance du PIB de 4-6 % vs 1-2 % pour les développés',
        'Le risque pays inclut : instabilité politique, faiblesse institutionnelle, risque de change et de convertibilité',
        'Le taper tantrum de 2013 et la crise turque de 2018 illustrent la vulnérabilité au resserrement US',
        'La Chine représente ~30 % de l\'indice MSCI EM et domine la dynamique émergente',
      ],
      explanation:
        'La classification des marchés en développés, émergents et frontières est définie par MSCI et FTSE selon des critères de taille, liquidité et accessibilité. Le MSCI Emerging Markets inclut 24 pays dont la Chine (30 %), l\'Inde (15 %), Taïwan (15 %) et la Corée du Sud (12 %). Les avantages des émergents sont la croissance économique rapide (démographie favorable, rattrapage technologique, urbanisation), des valorisations souvent plus basses (P/E de 12x vs 20x pour les développés) et un effet de diversification (corrélation de 0,7 avec les marchés développés). Les risques sont considérables : le risque de change (une dépréciation de la devise locale efface les gains en monnaie forte), le risque souverain (défaut ou restructuration de la dette), le risque de gouvernance (corruption, absence d\'état de droit), la faible liquidité et le risque de contrôle des capitaux. La dépendance au dollar est un facteur clé : quand la Fed resserre sa politique monétaire, le dollar se renforce, les conditions de financement en dollar se durcissent pour les émergents endettés en USD, et les capitaux quittent les émergents vers les US. C\'est le "original sin" : de nombreux émergents doivent emprunter en devise forte car les investisseurs ne font pas confiance à leur devise.',
      example:
        'En 2013, Bernanke annonce la réduction du QE (taper tantrum). Le MSCI EM chute de 15 %, la roupie indienne perd 20 %, la livre turque 15 %, le real brésilien 12 %. Les "Fragile Five" (Turquie, Brésil, Inde, Afrique du Sud, Indonésie) sont les plus touchés à cause de leurs déficits courants.',
      finnSays:
        'Les marchés émergents sont les eaux tropicales de la finance : poissons abondants mais courants imprévisibles, pirates à l\'horizon et récifs cachés. Navigue avec prudence et une bonne carte !',
    },
  },
  // ─── Lesson 15 ───
  {
    id: 'macro-15',
    title: 'Crises financières : histoire',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Les crises financières sont une constante de l\'histoire économique. De la tulipomanie de 1637 à la crise des subprimes de 2008, elles suivent un schéma remarquablement similaire : euphorie, emballement du crédit, panique et restructuration.',
      keyPoints: [
        'Le modèle de Minsky décrit le cycle : Hedge Finance → Speculative Finance → Ponzi Finance → Moment Minsky',
        'Kindleberger (Manias, Panics, and Crashes) identifie 5 phases : déplacement, boom, euphorie, profit-taking, panique',
        'Le moral hazard (aléa moral) est le risque que le sauvetage des institutions encourage la prise de risque future',
        'Les crises ont des coûts colossaux : le PIB chute de 5-10 % et met 4-6 ans à se rétablir',
      ],
      explanation:
        'Hyman Minsky a formalisé l\'instabilité financière intrinsèque du capitalisme. En période de stabilité, la confiance augmente, les standards de prêt se relâchent et l\'endettement croît. Les emprunteurs passent de "hedge financing" (les revenus couvrent le capital et les intérêts) à "speculative financing" (les revenus couvrent les intérêts seulement) puis à "Ponzi financing" (les revenus ne couvrent ni le capital ni les intérêts, et l\'emprunteur compte sur la hausse de l\'actif). Le "Moment Minsky" survient quand la confiance s\'effondre et que les prix des actifs chutent, rendant le Ponzi financing insoutenable. Les grandes crises historiques illustrent ce schéma : la tulipomanie hollandaise (1637), le krach de la Compagnie des Mers du Sud (1720), la Grande Dépression (1929), la crise asiatique (1997), la bulle dot-com (2000), les subprimes (2008). Reinhart et Rogoff ("This Time Is Different") montrent que chaque crise est précédée d\'un boom du crédit et de l\'immobilier, et que les acteurs du marché croient toujours que "cette fois c\'est différent" grâce à de nouvelles innovations financières. Le coût moyen d\'une crise bancaire systémique est de 23 % du PIB en dette publique additionnelle et de 9 % du PIB en perte de production cumulée.',
      example:
        'La bulle dot-com : le Nasdaq passe de 1 000 (1995) à 5 000 (mars 2000), porté par la "nouvelle économie". Des entreprises sans revenus valent des milliards. Le moment Minsky arrive quand la réalité rattrape les valorisations. Le Nasdaq chute de 78 % jusqu\'en octobre 2002, détruisant 5 000 Mds$ de richesse.',
      finnSays:
        'Les crises reviennent toujours car les marins oublient les tempêtes passées. "Cette fois c\'est différent" est la phrase la plus dangereuse en finance. Étudie l\'histoire, marin !',
    },
  },
  // ─── Lesson 16 ───
  {
    id: 'macro-16',
    title: 'Crise de 2008',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'La crise financière de 2008 est la plus grave depuis la Grande Dépression. Née des subprimes américains, elle a dégénéré en crise bancaire systémique mondiale, entraînant la faillite de Lehman Brothers et une récession globale.',
      keyPoints: [
        'Les subprimes sont des prêts hypothécaires accordés à des emprunteurs fragiles avec des taux variables',
        'La titrisation (CDO, MBS) a dispersé le risque dans le système financier mondial, le rendant opaque',
        'La faillite de Lehman Brothers (15 septembre 2008) a déclenché une panique systémique',
        'Les réponses : TARP ($700 Mds), QE1 ($1 750 Mds), taux à 0 %, régulation Dodd-Frank',
      ],
      explanation:
        'La crise de 2008 a ses racines dans la bulle immobilière américaine. Des prêts hypothécaires (mortgages) ont été accordés massivement à des ménages non solvables (NINJA loans : No Income, No Job, No Assets), encouragés par des incitations perverses : les courtiers touchaient des commissions sans supporter le risque, qui était transféré via la titrisation. Les Mortgage-Backed Securities (MBS) regroupaient des milliers de prêts, et les Collateralized Debt Obligations (CDO) les restructuraient en tranches de risque. Les agences de notation attribuaient des AAA aux tranches senior de CDO adossés à des subprimes, sous-estimant massivement les corrélations de défaut. Quand les prix immobiliers baissent en 2006-2007, les défauts augmentent et les CDO s\'effondrent. Bear Stearns est sauvé en mars 2008. Lehman Brothers fait faillite le 15 septembre 2008, causant un gel total du marché interbancaire. Le TED spread (LIBOR - T-bill) atteint 450 bps. Le S&P 500 chute de 57 % entre octobre 2007 et mars 2009. Les réponses sans précédent (TARP, QE, nationalisation d\'AIG, garantie des money market funds) évitent l\'effondrement du système mais créent le problème du "too big to fail". La régulation post-crise (Bâle III, Dodd-Frank) renforce les exigences de capital, limite le trading propriétaire (règle Volcker) et crée les stress tests.',
      example:
        'Le CDO "Abacus" de Goldman Sachs : un CDO synthétique adossé à des subprimes, sélectionné par Paulson & Co. pour shorter. Les investisseurs (IKB, ABN Amro) perdent ~1 Md$, Paulson gagne ~1 Md$. Goldman paie une amende de 550 M$ à la SEC.',
      finnSays:
        'En 2008, les marins avaient oublié la règle d\'or : ne navigue jamais avec une cargaison que tu ne comprends pas ! Les CDO étaient des colis mystères remplis de dynamite.',
    },
  },
  // ─── Lesson 17 ───
  {
    id: 'macro-17',
    title: 'Crise de la dette européenne',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'La crise de la dette souveraine européenne (2010-2012) a menacé l\'existence même de la zone euro. La Grèce, le Portugal, l\'Irlande, l\'Espagne et l\'Italie ont fait face à une spirale dette-austérité qui a failli disloquer l\'union monétaire.',
      keyPoints: [
        'La crise révèle le "péché originel" de l\'euro : union monétaire sans union budgétaire',
        'La Grèce a subi deux restructurations de sa dette et un haircut de 53 % pour les créanciers privés (PSI)',
        'La Troïka (FMI, BCE, Commission) a imposé des programmes d\'austérité en échange de financements',
        'Le "Whatever it takes" de Draghi (juillet 2012) a stoppé la crise par la seule force des mots',
      ],
      explanation:
        'La crise commence en octobre 2009 quand le nouveau gouvernement grec révèle que le déficit budgétaire est de 12,7 % du PIB, pas 3,7 % comme annoncé. La dette atteint 130 % du PIB. Les taux grecs explosent (de 5 % à 40 % sur le 10 ans), fermant l\'accès au marché. Le premier plan de sauvetage (110 Mds€, mai 2010) est suivi d\'un second (130 Mds€, 2012) incluant un PSI (Private Sector Involvement) : les créanciers privés acceptent un haircut de 53 % sur la valeur nominale, la plus grande restructuration de dette souveraine de l\'histoire. La contagion touche l\'Irlande (bulle bancaire, dette passant de 25 % à 120 % du PIB), le Portugal, puis menace l\'Espagne et l\'Italie. Le spread BTP-Bund dépasse 550 bps en novembre 2011, mettant Berlusconi en difficulté. Le mécanisme de la doom loop : les banques détiennent la dette souveraine de leur pays, donc une crise souveraine affaiblit les banques, qui nécessitent un sauvetage étatique, aggravant la dette souveraine. Le tournant est le discours de Mario Draghi à Londres le 26 juillet 2012 : "Within our mandate, the ECB is ready to do whatever it takes to preserve the euro. And believe me, it will be enough." Les spreads se compriment immédiatement sans que le programme OMT (Outright Monetary Transactions) ne soit jamais activé.',
      example:
        'Un investisseur détenant 1 M€ de dette grecque en 2010 (taux 5 %) subit le PSI en mars 2012 : ses obligations sont échangées contre de nouvelles avec 53 % de haircut. Sa position vaut 470 000 €, avec des maturités allongées et des coupons réduits. Perte totale en valeur actualisée : ~75 %.',
      finnSays:
        'La crise euro a montré qu\'un équipage (zone euro) sans capitaine fiscal unique risque le naufrage. Le "Whatever it takes" de Draghi était le coup de barre qui a sauvé le navire !',
    },
  },
  // ─── Lesson 18 ───
  {
    id: 'macro-18',
    title: 'Crise COVID',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'La crise COVID-19 (2020) est unique dans l\'histoire économique : un choc exogène non financier provoquant la plus forte contraction du PIB mondial depuis la Seconde Guerre mondiale, suivie de la reprise la plus rapide grâce à une réponse monétaire et budgétaire sans précédent.',
      keyPoints: [
        'Le S&P 500 chute de 34 % en 23 jours (le crash le plus rapide de l\'histoire) puis rebondit complètement en 5 mois',
        'La Fed baisse les taux de 150 bps en deux semaines et lance un QE illimité',
        'Les stimuli budgétaires cumulés dépassent 10 000 Mds$ au niveau mondial (12 % du PIB mondial)',
        'L\'héritage : inflation élevée, dette record et accélération de la digitalisation',
      ],
      explanation:
        'Le 11 mars 2020, l\'OMS déclare la pandémie de COVID-19. Les confinements mondiaux arrêtent brutalement l\'activité économique. Le PIB mondial chute de 3,5 % en 2020 (la pire récession depuis 1945). Le marché du travail est ravagé : 20 millions d\'emplois perdus aux US en avril 2020, chômage à 14,7 %. La réponse est d\'une rapidité et d\'une ampleur inédites. La Fed agit le 15 mars 2020 : taux à 0 %, QE illimité (achat de Treasuries et MBS), facilités de crédit pour les entreprises (achat de corporate bonds et de municipals, une première). La BCE lance le PEPP de 1 850 Mds€. Le Congrès US vote le CARES Act (2 200 Mds$) incluant des chèques directs aux ménages (1 200 $ par personne), des allocations chômage majorées (600 $/semaine) et le PPP pour les PME. Au total, les US déploient ~5 000 Mds$ de stimulus budgétaire. Cette réponse massive sauve l\'économie mais plante les graines de l\'inflation de 2022-2023. L\'excès de monnaie (M2 US +27 % en 2020-2021), les goulots d\'étranglement supply chain, et la reprise brutale de la demande génèrent la plus forte inflation depuis 40 ans (9,1 % en juin 2022 aux US).',
      example:
        'Un investisseur qui vend paniqué le 23 mars 2020 (S&P à 2 237) et rachète le 1er janvier 2021 (S&P à 3 756) manque un rebond de 68 %. Celui qui reste investi termine 2020 à +16 %. Celui qui achète au creux fait +68 % en 9 mois. La leçon : ne pas vendre dans la panique.',
      finnSays:
        'Le COVID a été un tsunami : violent mais court. Les navires qui ont gardé le cap ont retrouvé des eaux calmes en quelques mois. Ceux qui ont abandonné le navire l\'ont regretté !',
    },
  },
  // ─── Lesson 19 ───
  {
    id: 'macro-19',
    title: 'Politique budgétaire',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La politique budgétaire utilise les dépenses publiques et la fiscalité pour influencer l\'activité économique. Contrairement à la politique monétaire gérée par une banque centrale indépendante, elle est décidée par les gouvernements et sujette aux contraintes politiques.',
      keyPoints: [
        'Le multiplicateur budgétaire mesure l\'impact d\'1 € de dépense publique sur le PIB',
        'En récession, le multiplicateur est élevé (1,5-2x) ; en expansion, il est faible (0,5-0,8x)',
        'Les stabilisateurs automatiques (allocations chômage, impôts progressifs) agissent sans décision politique',
        'L\'austérité en période de récession est contre-productive (paradoxe de l\'épargne keynésien)',
      ],
      explanation:
        'La politique budgétaire expansionniste (augmentation des dépenses ou baisse des impôts) stimule l\'économie par le multiplicateur keynésien. Si le gouvernement dépense 1 Md€ en infrastructure et que le multiplicateur est de 1,5, le PIB augmente de 1,5 Md€ grâce à l\'effet d\'entraînement : les salaires versés aux ouvriers sont dépensés en consommation, créant des revenus pour d\'autres entreprises. Le multiplicateur dépend de l\'état du cycle (plus élevé en récession quand les ressources sont sous-utilisées), du type de dépense (les transferts aux ménages à faible revenu ont un multiplicateur élevé car ils sont intégralement consommés) et du degré d\'ouverture de l\'économie (une partie de la dépense fuit vers les importations). Les stabilisateurs automatiques représentent environ 2-3 % du PIB dans les pays développés. En récession, les recettes fiscales baissent mécaniquement et les dépenses sociales augmentent, soutenant la demande sans action délibérée. Le débat austérité vs stimulus a dominé la politique économique européenne après 2010. L\'austérité pro-cyclique imposée à la Grèce a entraîné une chute du PIB de 25 %, tandis que le stimulus américain (Obama, puis Trump, puis Biden) a permis une reprise plus rapide. Le consensus académique actuel (Blanchard, Summers) est que l\'austérité en récession est destructrice et que la dette publique est soutenable tant que le taux d\'intérêt reste inférieur au taux de croissance (r < g).',
      formula: 'Multiplicateur K = ΔPIB / ΔG ; K simple = 1 / (1 - c(1-t) + m) ; Soutenabilité : r < g',
      example:
        'L\'American Rescue Plan de Biden (1 900 Mds$, mars 2021) a un multiplicateur estimé de 1,3. Impact sur le PIB : +2 500 Mds$ sur 2 ans, soit +5 % de PIB cumulé. Le chômage passe de 6,2 % à 3,5 % en 18 mois. Contrepartie : inflation de 9 %.',
      finnSays:
        'La politique budgétaire, c\'est le vent que le gouvernement peut créer pour pousser les bateaux. Trop de vent en été crée des tempêtes. Pas assez en hiver laisse la flotte immobilisée !',
    },
  },
  // ─── Lesson 20 ───
  {
    id: 'macro-20',
    title: 'Dette souveraine',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'La dette souveraine est l\'endettement des États, financé par l\'émission d\'obligations (OAT en France, Bunds en Allemagne, Treasuries aux US). Son niveau, sa trajectoire et sa soutenabilité sont au coeur des débats macroéconomiques contemporains.',
      keyPoints: [
        'Le ratio dette/PIB est l\'indicateur de référence : 110 % en France, 120 % en US, 260 % au Japon',
        'La dynamique de la dette dépend de (r - g) × d + déficit primaire, où r est le taux, g la croissance, d la dette',
        'Les agences de notation (S&P, Moody\'s, Fitch) évaluent le risque souverain de AAA à D',
        'Le risque de défaut souverain se mesure par les CDS spreads et les rendements obligataires',
      ],
      explanation:
        'La soutenabilité de la dette souveraine dépend fondamentalement de la comparaison entre le taux d\'intérêt payé sur la dette (r) et le taux de croissance nominale du PIB (g). Si r < g, le ratio dette/PIB peut se stabiliser même avec un déficit primaire modéré, car la croissance "dilue" la dette existante. C\'est la situation qui a prévalu pour la plupart des pays développés entre 2010 et 2022 grâce aux taux ultra-bas. Si r > g, le ratio dette/PIB ne peut se stabiliser qu\'avec un excédent primaire. La dynamique s\'exprime : Δ(dette/PIB) = (r - g) × (dette/PIB) + déficit primaire. Avec une dette de 110 % du PIB, r=4 % et g=3 %, l\'effet boule de neige ajoute 1,1 point de PIB de dette chaque année, imposant un excédent primaire de 1,1 % pour stabiliser le ratio. Les pays souverains émettant dans leur propre devise (US, Japon, UK) disposent d\'un avantage : la banque centrale peut théoriquement monétiser la dette (QE). Les pays de la zone euro n\'ont pas cette option individuellement, ce qui les rend plus vulnérables. Le Japon avec 260 % de dette/PIB reste stable car 90 % de sa dette est détenue domestiquement et la BoJ en possède 50 %. La France, avec un spread OAT-Bund de 50-80 bps, paie une prime modeste par rapport à l\'Allemagne.',
      formula: 'Δ(d/Y) = (r - g) × (d/Y) + déficit primaire ; Stabilisation : excédent primaire = (r - g) × d/Y',
      example:
        'La France en 2024 : dette/PIB = 112 %, taux moyen de la dette = 1,8 % (stock), croissance nominale = 3,5 %. Effet (r-g) = -1,7 % × 112 % = -1,9 % (favorable). Mais le déficit primaire est de 3,5 %, donc la dette augmente de 1,6 point par an. Si les taux remontent à 3,5 %, l\'effet (r-g) s\'annule et le déficit primaire drive la hausse.',
      finnSays:
        'La dette souveraine, c\'est la quille du navire national : solide et invisible quand tout va bien, mais si elle se fissure, c\'est tout le bateau qui coule. Surveille le ratio r-g comme la météo !',
    },
  },
  // ─── Lesson 21 ───
  {
    id: 'macro-21',
    title: 'Cas Cycle économique',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'Ce cas pratique intègre les concepts macroéconomiques pour analyser un cycle complet : identifier la phase actuelle, interpréter les indicateurs, comprendre la réponse de politique monétaire et budgétaire, et positionner un portefeuille en conséquence.',
      keyPoints: [
        'L\'analyse macro suit un cadre structuré : croissance → inflation → politique monétaire → marchés',
        'Les indicateurs doivent être lus ensemble, pas isolément (le "tableau de bord" macro)',
        'Le positionnement d\'investissement doit être cohérent avec le diagnostic cyclique',
        'Les surprises macro sont la source principale de volatilité à court terme',
      ],
      explanation:
        'Analysons le cycle américain 2022-2024. Situation initiale (début 2022) : PIB en forte croissance (+5,9 % en 2021), inflation à 7,5 % et en accélération, chômage à 3,8 % (en dessous du NAIRU). Diagnostic : late-cycle avec surchauffe inflationniste. La Fed est en retard (taux à 0 % alors que Taylor prescrit 6 %). Phase de resserrement (2022-2023) : la Fed relève les taux de 525 bps en 16 mois, le rythme le plus rapide depuis Volcker. Le dollar s\'apprécie de 15 %, le S&P 500 chute de 20 %, le marché obligataire vit sa pire année. L\'inversion de courbe (2Y-10Y) signale une récession. Crise bancaire mini (mars 2023) : SVB, Signature, First Republic font faillite à cause du risque de taux. La Fed crée le BTFP (Bank Term Funding Program) pour stabiliser le système. Soft landing ? (2024) : l\'inflation redescend vers 3 %, le chômage reste bas (~3,7 %), la croissance ralentit sans s\'effondrer. Le débat porte sur le "last mile" de désinflation. Positionnement : en début de cycle de baisse des taux, surpondérer la duration obligataire et les actions de qualité. Sous-pondérer le cash dont le rendement va baisser.',
      example:
        'Un gérant qui surpondère les obligations longues en octobre 2023 (UST 10Y à 5 %) réalise +15 % en 3 mois quand les taux retombent à 3,9 % en décembre 2023. L\'analyse macro correcte (pic de taux, désinflation) a guidé la décision.',
      finnSays:
        'Analyser un cycle, c\'est lire la carte, observer le ciel et sentir le vent pour décider où naviguer. Toutes les données racontent une histoire : c\'est à toi de l\'interpréter, explorateur !',
    },
  },
  // ─── Lesson 22 ───
  {
    id: 'macro-22',
    title: 'Examen final',
    xp: 300,
    duration: '60 min',
    content: {
      introduction:
        'Cet examen final couvre l\'intégralité du cours de Macroéconomie : PIB, inflation, politique monétaire, courbe des taux, marché FX, cycles, crises et politique budgétaire. Prépare-toi à démontrer ta vision globale de l\'économie.',
      keyPoints: [
        'Maîtriser les mécanismes de transmission de la politique monétaire et leurs effets sur les marchés',
        'Interpréter la courbe des taux, les indicateurs avancés et les conditions financières',
        'Analyser les crises passées et les facteurs de vulnérabilité actuels',
        'Construire un positionnement d\'investissement cohérent avec un diagnostic macroéconomique',
      ],
      explanation:
        'La macroéconomie financière est l\'art de comprendre les forces qui animent les marchés au niveau global. Le PIB, l\'inflation et l\'emploi forment le triptyque fondamental que les banques centrales cherchent à stabiliser via la politique monétaire. Les taux directeurs, le QE et le forward guidance sont les outils conventionnels et non conventionnels qui influencent l\'ensemble des conditions financières. La courbe des taux synthétise les anticipations du marché sur la croissance et l\'inflation futures. Son inversion est le signal d\'alerte le plus fiable d\'une récession imminente. Le marché des changes reflète les différentiels de politique monétaire et la PPP fournit un ancrage de long terme pour les valorisations des devises. Les cycles économiques sont inévitables et chaque phase requiert un positionnement d\'investissement adapté. Les crises -- qu\'elles soient bancaires (2008), souveraines (2010-2012) ou pandémiques (2020) -- suivent des schémas récurrents documentés par Kindleberger et Minsky. La politique budgétaire complète la politique monétaire, avec des multiplicateurs qui varient selon le cycle. La soutenabilité de la dette souveraine est le grand défi des décennies à venir dans un monde de taux normalisés.',
      example:
        'Question d\'examen type : Le PMI tombe à 48, l\'inflation core est à 2,8 %, la courbe des taux s\'inverse de -50 bps, le chômage remonte à 4,5 %. Analysez la situation macro, anticipez la réaction de la Fed et recommandez un positionnement de portefeuille avec justification.',
      finnSays:
        'Tu as exploré tous les océans de la macroéconomie ! Du PIB aux crises, des banques centrales aux taux de change, tu as la vision globale du navigateur accompli. L\'explorateur Finn te salue, capitaine !',
    },
  },
];
