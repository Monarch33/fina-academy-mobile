// ──────────────────────────────────────────────
//  FINA - Comptabilité IFRS : Lessons
// ──────────────────────────────────────────────

import type { Lesson } from '@/types/content';

export const accountingLessons: Lesson[] = [
  // ─── Lesson 1 ───
  {
    id: 'accounting-1',
    title: 'IFRS vs US GAAP',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les normes IFRS (International Financial Reporting Standards) et US GAAP (Generally Accepted Accounting Principles) sont les deux référentiels comptables dominants dans le monde. Comprendre leurs différences est essentiel pour analyser des entreprises de juridictions différentes.',
      keyPoints: [
        'Les IFRS sont utilisées dans plus de 140 pays, les US GAAP principalement aux États-Unis',
        'Les IFRS sont fondées sur des principes (principles-based), les US GAAP sur des règles (rules-based)',
        'Le conceptual framework IFRS privilégie la substance économique sur la forme juridique',
        'La convergence IFRS/US GAAP a progressé mais des différences majeures subsistent',
      ],
      explanation:
        'Les IFRS sont publiées par l\'IASB (International Accounting Standards Board) basé à Londres. L\'Union européenne les a adoptées en 2005 pour les comptes consolidés des sociétés cotées. Les US GAAP sont émis par le FASB (Financial Accounting Standards Board). Les différences principales se situent dans le traitement des stocks (LIFO autorisé en US GAAP mais interdit en IFRS), la comptabilisation des frais de développement (capitalisation possible en IFRS via IAS 38, passage en charges en US GAAP sauf logiciels), le goodwill (amortissement interdit en IFRS avec test d\'impairment annuel vs amortissement optionnel récent en US GAAP pour les sociétés non cotées). Le cadre conceptuel IFRS définit les caractéristiques qualitatives de l\'information financière : pertinence, fidélité de représentation, comparabilité, vérifiabilité, rapidité et compréhensibilité. Les états financiers comprennent le bilan (statement of financial position), le compte de résultat et l\'état du résultat global (OCI), le tableau de flux de trésorerie, l\'état de variation des capitaux propres et les notes annexes. L\'approche principles-based des IFRS laisse davantage de latitude au jugement professionnel, ce qui peut améliorer la pertinence mais réduire la comparabilité. L\'approche rules-based des US GAAP offre plus de précision mais peut conduire à une comptabilité formelle éloignée de la réalité économique.',
      example:
        'Airbus (IFRS) capitalise 2,1 Mds€ de frais de développement au bilan. Boeing (US GAAP) passe ces coûts en charges immédiatement. En comparant les deux, il faut retraiter : ajouter les frais de R&D capitalisés aux charges d\'Airbus ou capitaliser ceux de Boeing pour une comparaison à méthode identique.',
      finnSays:
        'IFRS et US GAAP sont deux langues comptables : le français et l\'anglais de la finance. Pour être un bon professeur, il faut maîtriser les deux et savoir traduire !',
    },
  },
  // ─── Lesson 2 ───
  {
    id: 'accounting-2',
    title: 'Immobilisations',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les immobilisations corporelles (IAS 16) et incorporelles (IAS 38) représentent souvent la plus grande partie du bilan. Leur comptabilisation initiale, leur amortissement et leur dépréciation impactent significativement les résultats et les ratios financiers.',
      keyPoints: [
        'IAS 16 permet le modèle du coût ou le modèle de la réévaluation pour les immobilisations corporelles',
        'L\'amortissement répartit le coût d\'un actif sur sa durée d\'utilité (linéaire, dégressif, unités de production)',
        'IAS 38 impose des critères stricts pour capitaliser un actif incorporel (identifiabilité, contrôle, avantages futurs)',
        'Le test d\'impairment (IAS 36) compare la valeur comptable à la valeur recouvrable',
      ],
      explanation:
        'Une immobilisation corporelle est comptabilisée au coût d\'acquisition incluant le prix d\'achat, les frais directement attribuables (transport, installation) et l\'estimation des coûts de démantèlement. Après la comptabilisation initiale, l\'entreprise choisit entre le modèle du coût (coût diminué des amortissements et dépréciations cumulés) et le modèle de la réévaluation (juste valeur diminuée des amortissements ultérieurs). La réévaluation est rare en pratique car elle génère une charge d\'amortissement plus élevée et une complexité de gestion. L\'amortissement commence quand l\'actif est prêt à être utilisé et reflète le rythme de consommation des avantages économiques. L\'approche par composants est obligatoire en IFRS : chaque composant significatif d\'un actif avec une durée d\'utilité différente est amorti séparément. Par exemple, un avion est décomposé en cellule (25 ans), moteurs (10 ans) et aménagements intérieurs (7 ans). Les immobilisations incorporelles (brevets, marques, logiciels, relations clients) ne sont capitalisées que si elles répondent à la définition d\'IAS 38 : identifiabilité, contrôle par l\'entité et avantages économiques futurs probables. Les frais de recherche sont toujours en charges. Les frais de développement sont capitalisés si 6 critères sont remplis (faisabilité technique, intention d\'achever, capacité d\'utiliser/vendre, génération de revenus probables, ressources disponibles, mesure fiable des coûts).',
      formula: 'Amort. linéaire = (Coût - Valeur résiduelle) / Durée d\'utilité ; Valeur nette comptable = Coût - Amort. cumulé - Dépréciation',
      example:
        'Une machine coûte 500 000 €, durée d\'utilité 10 ans, valeur résiduelle 50 000 €. Amortissement linéaire annuel = (500 000 - 50 000) / 10 = 45 000 €. Après 3 ans : VNC = 500 000 - 135 000 = 365 000 €. Si la valeur recouvrable tombe à 300 000 €, une dépréciation de 65 000 € est comptabilisée.',
      finnSays:
        'Les immobilisations sont les gros équipements du navire : mât, coque, voiles. L\'amortissement reflète leur usure progressive. Un bon professeur sait que la coque dure plus longtemps que les voiles !',
    },
  },
  // ─── Lesson 3 ───
  {
    id: 'accounting-3',
    title: 'Goodwill',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Le goodwill est la différence entre le prix payé lors d\'une acquisition et la juste valeur des actifs nets identifiables acquis. C\'est l\'un des postes les plus controversés du bilan, représentant souvent 30-50 % des actifs totaux des grandes entreprises.',
      keyPoints: [
        'Le goodwill n\'est comptabilisé que lors d\'un regroupement d\'entreprises (IFRS 3)',
        'Il n\'est pas amorti en IFRS mais soumis à un test d\'impairment annuel (IAS 36)',
        'Le test d\'impairment compare la valeur comptable de l\'UGT à sa valeur recouvrable',
        'Un impairment de goodwill est irréversible et signale souvent une acquisition ratée',
      ],
      explanation:
        'Lors d\'une acquisition, IFRS 3 impose d\'identifier et d\'évaluer à la juste valeur tous les actifs et passifs identifiables de la cible, y compris les incorporels non comptabilisés (marques, brevets, relations clients, carnet de commandes). Le goodwill est le résidu : Prix d\'acquisition - Juste valeur des actifs nets identifiables. Il représente les synergies attendues, la workforce, le potentiel de croissance non capturable autrement. Le test d\'impairment annuel (IAS 36) exige d\'allouer le goodwill à des Unités Génératrices de Trésorerie (UGT), qui sont les plus petits groupes d\'actifs générant des flux de trésorerie indépendants. La valeur recouvrable d\'une UGT est le maximum entre la juste valeur diminuée des coûts de cession et la valeur d\'utilité (DCF des flux futurs). Si la valeur recouvrable est inférieure à la valeur comptable (incluant le goodwill), une dépréciation est comptabilisée, imputée d\'abord sur le goodwill. Les hypothèses clés du test (taux d\'actualisation, taux de croissance terminal, projections de flux) laissent une marge de manoeuvre significative au management. Des études montrent que les impairments de goodwill arrivent souvent 3-5 ans trop tard par rapport à la destruction de valeur réelle. En 2022, Meta a enregistré un impairment de son goodwill Reality Labs, reconnaissant que le metaverse n\'atteignait pas les objectifs.',
      formula: 'Goodwill = Prix d\'achat - JV des actifs nets identifiables ; Impairment si VNC(UGT) > max(JV - coûts, Valeur d\'utilité)',
      example:
        'Sanofi acquiert Genzyme pour 20 Mds€. La JV des actifs nets identifiables (brevets, stocks, équipements - dettes) est de 12 Mds€. Le goodwill est de 8 Mds€, représentant les synergies et le pipeline R&D. 5 ans après, un médicament clé échoue en phase III. Le test d\'impairment génère une dépréciation de 3 Mds€.',
      finnSays:
        'Le goodwill, c\'est le prix du rêve dans une acquisition : la part que tu paies au-delà de ce que tu peux toucher. Si le rêve tourne au cauchemar, c\'est l\'impairment qui te réveille !',
    },
  },
  // ─── Lesson 4 ───
  {
    id: 'accounting-4',
    title: 'IFRS 16 Leases',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'IFRS 16, entrée en vigueur en 2019, a révolutionné la comptabilisation des contrats de location en éliminant la distinction entre location simple et location-financement pour les preneurs. Tous les baux significatifs sont désormais au bilan.',
      keyPoints: [
        'Le preneur comptabilise un droit d\'utilisation (actif) et une dette de location (passif) pour tout bail > 12 mois',
        'L\'impact est majeur pour les secteurs à forte intensité locative : distribution, transport aérien, hôtellerie',
        'L\'EBITDA augmente mécaniquement car la charge de loyer est remplacée par amortissement + intérêts',
        'La dette financière augmente, dégradant les ratios d\'endettement (dette/EBITDA, gearing)',
      ],
      explanation:
        'Avant IFRS 16, les contrats de location simple (operating leases) n\'apparaissaient pas au bilan : seule la charge de loyer transitait par le compte de résultat. Ce traitement hors bilan permettait aux entreprises de masquer des engagements considérables (Air France avait 8 Mds€ de baux hors bilan). IFRS 16 impose au preneur de reconnaître un actif "droit d\'utilisation" (right-of-use asset) et un passif "dette de location" (lease liability) pour la quasi-totalité des contrats de location. Le droit d\'utilisation est amorti linéairement sur la durée du bail, et la dette de location est remboursée comme un emprunt (intérêts + principal). Les exceptions sont les baux de courte durée (<12 mois) et les baux de faible valeur (<5 000 $). L\'impact sur les états financiers est significatif. Le bilan gonfle des deux côtés (actif et passif). L\'EBITDA augmente car l\'ancien loyer (charge opérationnelle) est remplacé par un amortissement (sous l\'EBITDA) et des intérêts (charge financière). Le résultat net est peu impacté sur la durée du bail mais le profil temporel change : la charge est plus élevée en début de bail (front-loading) car les intérêts portent sur un capital plus élevé. Les analystes doivent ajuster leurs modèles : les multiples EV/EBITDA baissent mécaniquement, les ratios d\'endettement se dégradent, le free cash flow opérationnel augmente.',
      formula: 'Droit d\'utilisation = VA des paiements de loyers ; Dette de location = VA des paiements futurs ; VA = Σ Loyer_t / (1+r)^t',
      example:
        'Une chaîne de restaurants loue 200 restaurants pour 50 000 €/an chacun sur 10 ans. Avant IFRS 16 : charge de loyer annuelle de 10 M€, rien au bilan. Après IFRS 16 : actif de ~80 M€ (droit d\'utilisation) et dette de ~80 M€ (VA des loyers à 5 %). L\'EBITDA augmente de 10 M€ mais la dette financière augmente de 80 M€.',
      finnSays:
        'IFRS 16 a sorti les loyers du placard ! Avant, les bateaux en leasing étaient invisibles dans les comptes du port. Maintenant, tout le monde voit la taille réelle de la flotte et ses dettes.',
    },
  },
  // ─── Lesson 5 ───
  {
    id: 'accounting-5',
    title: 'IFRS 15 Revenue',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'IFRS 15 (Produits des activités ordinaires tirés de contrats avec des clients) a unifié la comptabilisation du chiffre d\'affaires en un modèle unique en 5 étapes. Cette norme impacte particulièrement les secteurs technologie, construction, télécom et licences.',
      keyPoints: [
        'Le modèle en 5 étapes : identifier le contrat, les obligations de performance, le prix, l\'allocation et la reconnaissance',
        'Le revenu est reconnu quand l\'obligation de performance est satisfaite (transfert du contrôle)',
        'La distinction principal vs agent détermine si le revenu est brut ou net',
        'Les coûts d\'obtention de contrats (commissions) peuvent être capitalisés et amortis',
      ],
      explanation:
        'IFRS 15 remplace les anciennes normes IAS 18 (Revenue) et IAS 11 (Construction contracts) par un modèle unique. Étape 1 : identifier le contrat avec un client (accord entre les parties, droits et obligations identifiés, prix déterminable, recouvrement probable). Étape 2 : identifier les obligations de performance distinctes dans le contrat. Un bien ou service est distinct s\'il peut être utilisé seul ou avec d\'autres ressources facilement disponibles. Étape 3 : déterminer le prix de transaction, incluant les contreparties variables (rabais, pénalités, bonus), les composantes de financement significatives et les contreparties payées au client. Étape 4 : allouer le prix aux obligations de performance sur la base de leurs prix de vente autonomes relatifs. Étape 5 : reconnaître le revenu quand (ou au fur et à mesure que) l\'entité satisfait une obligation de performance. Le transfert peut être "à un moment donné" (vente d\'un bien) ou "progressivement" (construction, SaaS). La reconnaissance progressive requiert l\'un des trois critères : le client reçoit et consomme simultanément, l\'entité crée un actif que le client contrôle au fur et à mesure, ou l\'actif n\'a pas d\'utilisation alternative pour l\'entité et elle a un droit exécutoire au paiement. Ces critères ont des impacts majeurs sur le profil de revenus des entreprises tech (SaaS vs licence perpétuelle) et construction (pourcentage d\'avancement).',
      formula: 'Revenu alloué_i = Prix total × (Prix autonome_i / Σ Prix autonome_j)',
      example:
        'Un opérateur télécom vend un forfait 2 ans à 30 €/mois + smartphone (valeur 600 €) pour 1 € d\'avance. Total contrat = 721 €. Prix autonomes : téléphone 600 €, forfait 360 €. Allocation : téléphone = 721 × 600/960 = 450 €, forfait = 721 × 360/960 = 271 €. Le revenu du téléphone (450 €) est reconnu à la livraison, le forfait (271 €) sur 24 mois.',
      finnSays:
        'IFRS 15 demande : as-tu vraiment livré ce que tu as promis ? Le revenu se reconnaît quand le client a le contrôle, pas quand la facture est émise. Pas de triche dans mes comptes !',
    },
  },
  // ─── Lesson 6 ───
  {
    id: 'accounting-6',
    title: 'Provisions',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les provisions (IAS 37) sont des passifs dont l\'échéance ou le montant sont incertains. Elles couvrent les litiges, les garanties, les restructurations et les obligations environnementales. Leur comptabilisation requiert un jugement significatif.',
      keyPoints: [
        'Une provision est comptabilisée si : obligation actuelle, sortie de ressources probable et montant estimable',
        'Les passifs éventuels (contingent liabilities) sont divulgués en notes mais pas comptabilisés au bilan',
        'Les provisions sont évaluées à la meilleure estimation de la dépense nécessaire pour éteindre l\'obligation',
        'Les provisions de restructuration ne sont comptabilisées que si un plan détaillé et annoncé existe',
      ],
      explanation:
        'IAS 37 établit les critères stricts de comptabilisation des provisions. Trois conditions cumulatives : il existe une obligation actuelle (juridique ou implicite) résultant d\'un événement passé, il est probable (>50 %) qu\'une sortie de ressources sera nécessaire pour éteindre l\'obligation, et le montant peut être estimé de manière fiable. Si la probabilité est entre 5 % et 50 %, il s\'agit d\'un passif éventuel à divulguer en notes annexes mais pas à comptabiliser. Si la probabilité est infime (<5 %), aucune divulgation n\'est nécessaire. L\'évaluation de la provision est la meilleure estimation du montant nécessaire. Pour un événement unique (litige), c\'est le scénario le plus probable. Pour une population d\'événements (garanties), c\'est la valeur espérée (pondération par probabilités). Les provisions à long terme doivent être actualisées. L\'effet du passage du temps (unwinding) est comptabilisé en charges financières. Les provisions pour restructuration ne sont comptabilisées que si l\'entreprise a un plan formel et détaillé identifiant les activités concernées, les lieux, le nombre d\'employés, les dépenses et le calendrier, ET qu\'elle a créé une attente valide chez les personnes concernées. Les provisions sont un terrain de jeu pour le earnings management : surestimer en année de pertes (big bath) et reprendre les excédents en année de hausse pour lisser les résultats.',
      formula: 'Provision = Σ (Montant_i × Probabilité_i) ; VA si long terme : Provision actualisée = P / (1+r)^n',
      example:
        'Un laboratoire pharmaceutique fait face à 500 plaintes pour effets secondaires. Sur la base de litiges similaires, l\'estimation est : 60 % de chances de perdre avec un dommage moyen de 200 000 €. Provision = 500 × 60 % × 200 000 € = 60 M€. Ce montant apparaît au passif du bilan et en charge au compte de résultat.',
      finnSays:
        'Les provisions sont les réserves d\'urgence du navire : tu espères ne jamais les utiliser, mais tu dois les avoir. Un bon professeur comptabilise le risque avant qu\'il ne se matérialise !',
    },
  },
  // ─── Lesson 7 ───
  {
    id: 'accounting-7',
    title: 'IFRS 9 Instruments financiers',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'IFRS 9 régit la classification, l\'évaluation et la dépréciation des instruments financiers. Elle a remplacé IAS 39 en introduisant le modèle des pertes de crédit attendues (ECL), un changement majeur pour les banques et les entreprises.',
      keyPoints: [
        'La classification dépend du modèle économique (détention/vente) et des caractéristiques des flux (SPPI test)',
        'Trois catégories : coût amorti, juste valeur par OCI, juste valeur par résultat',
        'Le modèle ECL (Expected Credit Losses) anticipe les pertes plutôt que d\'attendre leur survenance',
        'La comptabilité de couverture (hedge accounting) est simplifiée par rapport à IAS 39',
      ],
      explanation:
        'IFRS 9 classe les actifs financiers en fonction de deux critères. Le test du modèle économique : l\'actif est-il détenu pour collecter les flux contractuels (hold to collect), pour collecter et vendre (hold to collect and sell), ou pour trader ? Le test SPPI (Solely Payments of Principal and Interest) : les flux contractuels sont-ils uniquement des paiements de principal et d\'intérêts sur le principal restant dû ? Un prêt classique à taux fixe passe le test SPPI. Un instrument convertible ne le passe pas. Si hold to collect + SPPI → coût amorti. Si hold to collect and sell + SPPI → juste valeur par OCI (JVOCI). Si trading ou échec SPPI → juste valeur par résultat (JVPR). Le modèle de dépréciation ECL est la grande nouveauté. Sous IAS 39, les pertes n\'étaient comptabilisées qu\'après un événement de défaut (incurred loss model), ce qui retardait la reconnaissance des pertes. IFRS 9 exige de provisionner dès l\'origination du prêt en trois stages. Stage 1 : ECL à 12 mois pour les actifs sains. Stage 2 : ECL sur toute la durée pour les actifs dont le risque de crédit a significativement augmenté. Stage 3 : ECL sur toute la durée pour les actifs en défaut. Ce modèle forward-looking intègre des scénarios macroéconomiques pondérés par probabilité.',
      formula: 'ECL = PD × LGD × EAD ; Coût amorti = Valeur initiale - remboursements + intérêts effectifs - dépréciations',
      example:
        'Une banque accorde un prêt de 1 M€ à 5 ans. À l\'origination (Stage 1), PD à 12 mois = 1 %, LGD = 40 %, EAD = 1 M€. ECL = 4 000 €. Après 2 ans, la note de l\'emprunteur se dégrade (Stage 2). PD lifetime = 8 %. ECL = 8 % × 40 % × 800 000 € = 25 600 €. La provision augmente de 21 600 € en charge.',
      finnSays:
        'IFRS 9 dit : prévois la tempête avant qu\'elle n\'arrive ! Le modèle ECL anticipe les pertes plutôt que d\'attendre le naufrage. C\'est la sagesse du marin prudent.',
    },
  },
  // ─── Lesson 8 ───
  {
    id: 'accounting-8',
    title: 'Impôts différés',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Les impôts différés (IAS 12) résultent des différences temporelles entre le résultat comptable et le résultat fiscal. Ils sont essentiels pour comprendre le taux d\'imposition effectif et les flux de trésorerie futurs d\'une entreprise.',
      keyPoints: [
        'Un actif d\'impôt différé naît quand la charge fiscale actuelle excède la charge comptable (impôt payé d\'avance)',
        'Un passif d\'impôt différé naît quand la charge comptable excède la charge fiscale (impôt à payer plus tard)',
        'Les différences temporelles sont dues aux écarts d\'amortissement, de provisions et de réévaluations',
        'Les actifs d\'impôt différé ne sont reconnus que si des bénéfices futurs sont probables',
      ],
      explanation:
        'Les entreprises tiennent deux comptabilités parallèles : la comptabilité financière (IFRS) et la comptabilité fiscale (Code général des impôts). Les différences entre les deux créent des décalages temporels. Par exemple, un amortissement fiscal accéléré (sur 5 ans) vs un amortissement comptable linéaire (sur 10 ans) : les premières années, l\'entreprise déduit plus fiscalement qu\'en comptabilité, payant moins d\'impôts aujourd\'hui mais plus demain → passif d\'impôt différé. Inversement, une provision comptable non déductible fiscalement avant sa réalisation crée un actif d\'impôt différé. La méthode bilancielle (balance sheet liability method) d\'IAS 12 compare les valeurs comptables et fiscales de chaque actif et passif. La différence multipliée par le taux d\'impôt donne l\'impôt différé. Les actifs d\'impôt différé (DTA) sur les déficits reportables sont particulièrement importants : une entreprise avec 100 M€ de pertes fiscales reportables et un taux d\'IS de 25 % peut reconnaître un DTA de 25 M€ si elle anticipe des bénéfices futurs suffisants. Cependant, la reconnaissance du DTA est soumise à un test de probabilité : si les bénéfices futurs sont insuffisants, le DTA doit être dévalorisé. Le taux d\'imposition effectif (TIE) diffère souvent du taux nominal à cause des impôts différés, des charges non déductibles et des crédits d\'impôt.',
      formula: 'Impôt différé = (Valeur comptable - Base fiscale) × Taux d\'IS ; TIE = Charge d\'impôt totale / Résultat avant impôt',
      example:
        'Un équipement coûte 1 M€. Amortissement comptable : 10 ans linéaire (VNC = 800 000 € après 2 ans). Amortissement fiscal : 5 ans (base fiscale = 600 000 € après 2 ans). Différence = 200 000 €. Passif d\'impôt différé = 200 000 × 25 % = 50 000 €. Les années suivantes, la différence se résorbe et le passif diminue.',
      finnSays:
        'Les impôts différés sont des promesses d\'impôts : à payer demain (passif) ou déjà payés d\'avance (actif). Un bon professeur sait que l\'administration fiscale finit toujours par récupérer son dû !',
    },
  },
  // ─── Lesson 9 ───
  {
    id: 'accounting-9',
    title: 'Consolidation : principes',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'La consolidation comptable permet de présenter les comptes d\'un groupe comme s\'il s\'agissait d\'une seule entité. Les règles de périmètre, de méthode et d\'élimination sont au coeur de la compréhension des états financiers des grands groupes.',
      keyPoints: [
        'L\'intégration globale s\'applique aux filiales (contrôle exclusif, généralement >50 % des droits de vote)',
        'La mise en équivalence s\'applique aux entreprises associées (influence notable, 20-50 %)',
        'IFRS 10 définit le contrôle par le pouvoir, l\'exposition aux rendements variables et la capacité d\'influencer',
        'Les opérations intragroupes (ventes, prêts, dividendes) sont éliminées en consolidation',
      ],
      explanation:
        'La consolidation repose sur la notion de contrôle définie par IFRS 10. Un investisseur contrôle une entité quand il détient le pouvoir sur l\'entité (droits de vote, accords contractuels), qu\'il est exposé à des rendements variables (dividendes, plus-values, économies de synergies) et qu\'il a la capacité d\'utiliser son pouvoir pour influencer ces rendements. Le contrôle de fait est possible avec moins de 50 % si les autres actionnaires sont dispersés. Les méthodes de consolidation sont : l\'intégration globale (filiales contrôlées : reprise de 100 % des actifs, passifs, produits et charges avec mention des intérêts minoritaires), la mise en équivalence (entreprises associées : une ligne au bilan pour la quote-part des capitaux propres et une ligne au résultat pour la quote-part du résultat). L\'ancienne proportionnelle (pour les co-entreprises) a été supprimée par IFRS 11, remplacée par la mise en équivalence. Les éliminations intragroupes assurent que les transactions entre entités du groupe ne gonflent pas artificiellement les comptes consolidés. Les ventes intragroupes, les dividendes remontés, les prêts et les marges internes sur stocks sont éliminés. Le périmètre de consolidation est un enjeu majeur : les SPV (Special Purpose Vehicles) et entités structurées doivent être consolidées si elles sont contrôlées, ce qui a été un point faible majeur avant la crise de 2008.',
      example:
        'Un groupe détient 80 % de la filiale A (CA = 200 M€, résultat = 30 M€) et 30 % de l\'associée B (CA = 150 M€, résultat = 20 M€). En consolidation : le CA du groupe inclut 200 M€ de A (intégrale) mais 0 € de B (MEE). Le résultat inclut 30 M€ de A (dont 6 M€ en intérêts minoritaires = 20 % × 30) et 6 M€ de B (quote-part = 30 % × 20).',
      finnSays:
        'La consolidation, c\'est l\'art de réunir toute la flotte en un seul registre. Chaque navire (filiale) entre dans les comptes du port (groupe). Les échanges entre navires ne comptent pas : c\'est de la famille !',
    },
  },
  // ─── Lesson 10 ───
  {
    id: 'accounting-10',
    title: 'Intégration globale',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'L\'intégration globale est la méthode de consolidation des filiales. Elle consiste à reprendre 100 % des actifs, passifs, produits et charges de la filiale dans les comptes du groupe, en isolant la part des actionnaires minoritaires.',
      keyPoints: [
        'Les actifs et passifs de la filiale sont repris à 100 % même si le groupe ne détient que 51 %',
        'Les intérêts minoritaires (NCI) représentent la part du résultat et des capitaux propres revenant aux actionnaires extérieurs',
        'L\'écart d\'acquisition (goodwill) est déterminé à la date de prise de contrôle',
        'Les NCI peuvent être évalués à la juste valeur (full goodwill) ou à la quote-part des actifs nets (partial goodwill)',
      ],
      explanation:
        'Le processus d\'intégration globale suit des étapes précises. Premièrement, réévaluer les actifs et passifs de la filiale à leur juste valeur à la date d\'acquisition (Purchase Price Allocation - PPA). Les écarts de réévaluation sont enregistrés et leur amortissement impacte le résultat consolidé. Deuxièmement, déterminer le goodwill : prix d\'acquisition + juste valeur des NCI - juste valeur des actifs nets identifiables. Troisièmement, additionner ligne par ligne tous les postes du bilan et du compte de résultat de la filiale à ceux de la mère. Quatrièmement, éliminer les opérations intragroupes et les résultats internes non réalisés. Cinquièmement, présenter les NCI séparément au bilan (dans les capitaux propres) et au compte de résultat (part du résultat revenant aux minoritaires). Un point subtil : l\'acquisition de NCI supplémentaires (augmentation du pourcentage de détention sans changement de contrôle) est traitée comme une transaction entre actionnaires, en capitaux propres, sans impact sur le goodwill ni sur le résultat. En revanche, la perte de contrôle entraîne la déconsolidation complète et la comptabilisation d\'un résultat de cession. La participation résiduelle est alors remesurée à la juste valeur, ce qui peut générer un gain ou une perte significatif.',
      formula: 'Goodwill = Prix d\'achat + JV(NCI) - JV(Actifs nets identifiables) ; NCI au bilan = % minoritaires × CP de la filiale post-acquisition',
      example:
        'Le groupe acquiert 70 % de la filiale pour 700 M€. JV des actifs nets identifiables = 900 M€. JV des NCI (30 %) = 270 M€ (méthode full goodwill). Goodwill = 700 + 270 - 900 = 70 M€. Les NCI au bilan à la date d\'acquisition sont de 270 M€. Si la filiale fait 100 M€ de résultat en année 1, les NCI au résultat = 30 M€.',
      finnSays:
        'L\'intégration globale, c\'est prendre tout le navire dans tes comptes, même si 30 % de l\'équipage appartient à un autre armateur. Mais tu inscris leur part séparément : les minoritaires ont leurs droits !',
    },
  },
  // ─── Lesson 11 ───
  {
    id: 'accounting-11',
    title: 'Mise en équivalence',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La mise en équivalence (MEE) est la méthode de consolidation des entreprises associées (influence notable, 20-50 %) et des co-entreprises (IFRS 11). Elle se traduit par une seule ligne au bilan et une seule ligne au résultat.',
      keyPoints: [
        'L\'influence notable est présumée à partir de 20 % des droits de vote',
        'Au bilan, la participation est initialement au coût d\'acquisition, puis ajustée de la quote-part des résultats',
        'Au résultat, la quote-part du résultat net de l\'associée apparaît sous le résultat opérationnel',
        'Le goodwill inclus dans la valeur MEE n\'est pas présenté séparément mais soumis au test d\'impairment global',
      ],
      explanation:
        'La mise en équivalence diffère fondamentalement de l\'intégration globale : elle ne reprend aucun actif ni passif individuel de l\'associée. Au lieu de cela, une seule ligne au bilan ("Participations dans les entreprises associées") reflète le coût initial + quote-part des résultats cumulés - dividendes reçus - dépréciations. Si le groupe acquiert 25 % d\'une société pour 250 M€ alors que 25 % des capitaux propres valent 200 M€, l\'écart de 50 M€ contient le goodwill (non amorti mais soumis à impairment) et les écarts de réévaluation (amortis sur la durée de vie des actifs sous-jacents). Au compte de résultat, la quote-part du résultat de l\'associée (25 % × résultat net) est présentée en une seule ligne, généralement sous le résultat opérationnel. Cette ligne est "nette" d\'impôt car l\'associée paie ses propres impôts. Les dividendes reçus de l\'associée ne sont pas des revenus mais une réduction de la valeur de la participation (analogie avec le remboursement d\'un capital). Si l\'associée subit des pertes importantes, la valeur MEE peut tomber à zéro. L\'investisseur cesse alors de comptabiliser sa quote-part des pertes sauf s\'il a des obligations légales ou implicites supplémentaires.',
      formula: 'Valeur MEE = Coût initial + Σ(quote-part résultats) - Σ(dividendes reçus) - Dépréciations',
      example:
        'Le groupe détient 35 % de l\'associée, acquis pour 350 M€. Année 1 : l\'associée fait 100 M€ de résultat net → quote-part = 35 M€. Dividendes reçus = 14 M€ (35 % × 40 M€ distribués). Valeur MEE = 350 + 35 - 14 = 371 M€. Le résultat consolidé inclut +35 M€ en ligne MEE.',
      finnSays:
        'La mise en équivalence, c\'est avoir un navire allié dans la flotte : tu comptes ta part de ses victoires et défaites, mais tu ne prends pas son gouvernail. Influence, pas contrôle !',
    },
  },
  // ─── Lesson 12 ───
  {
    id: 'accounting-12',
    title: 'Conversion des devises',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les groupes internationaux ont des filiales opérant en devises différentes. IAS 21 définit les règles de conversion des états financiers en devise étrangère, avec des effets significatifs sur les capitaux propres consolidés.',
      keyPoints: [
        'La monnaie fonctionnelle est la devise de l\'environnement économique principal de l\'entité',
        'La monnaie de présentation est celle dans laquelle les comptes consolidés sont présentés',
        'Les actifs et passifs sont convertis au cours de clôture, les produits et charges au cours moyen',
        'Les écarts de conversion sont comptabilisés en OCI (Other Comprehensive Income), pas en résultat',
      ],
      explanation:
        'IAS 21 distingue deux situations. Les transactions en devise étrangère dans les comptes individuels : un achat en USD par une société française est enregistré au cours du jour de la transaction. À la clôture, les éléments monétaires (créances, dettes) sont réévalués au cours de clôture et les écarts passent en résultat. Les éléments non monétaires restent au cours historique. La conversion des états financiers des filiales étrangères pour la consolidation : le bilan est converti au cours de clôture (closing rate), le compte de résultat au cours moyen de la période (average rate). L\'écart résultant (car le bilan et le résultat ne sont pas convertis au même cours) est enregistré en "Écart de conversion" (translation reserve) dans les capitaux propres, via l\'OCI. Cet écart n\'impacte pas le résultat net mais peut être considérable. Par exemple, pour un groupe français avec 40 % de ses actifs aux US, une dépréciation de l\'euro de 10 % fait augmenter les actifs consolidés en euros et génère un écart de conversion positif en capitaux propres. L\'écart de conversion cumulé est recyclé en résultat (reclassé de l\'OCI au P&L) uniquement lors de la cession ou la perte de contrôle de la filiale étrangère.',
      formula: 'Bilan : Cours de clôture ; Résultat : Cours moyen ; Écart = ΔBilan - ΔRésultat converti → OCI',
      example:
        'Une filiale US a des actifs nets de 1 000 M$ et un résultat de 100 M$. EUR/USD passe de 1,10 (ouverture) à 1,05 (clôture), cours moyen 1,08. Actifs nets en € = 1 000/1,05 = 952 M€. Résultat en € = 100/1,08 = 92,6 M€. L\'écart de conversion positif reflète la force du dollar vs l\'euro.',
      finnSays:
        'Convertir les devises en consolidation, c\'est comme traduire les journaux de bord de navires étrangers dans ta langue. Le sens général est préservé, mais il y a toujours des nuances perdues (ou gagnées) en traduction !',
    },
  },
  // ─── Lesson 13 ───
  {
    id: 'accounting-13',
    title: 'Tableau de flux indirect',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le tableau de flux de trésorerie (IAS 7) est le troisième état financier fondamental. La méthode indirecte, la plus utilisée, part du résultat net et ajuste les éléments non cash pour réconcilier avec la variation de trésorerie.',
      keyPoints: [
        'Les flux sont classés en trois catégories : opérationnels, d\'investissement et de financement',
        'La méthode indirecte ajoute au résultat les charges non décaissées (amortissements, provisions) et retranche les produits non encaissés',
        'La variation du BFR capture le décalage entre comptabilité d\'engagement et flux de trésorerie',
        'Le free cash flow = flux opérationnel - CAPEX est la mesure clé de la capacité d\'autofinancement',
      ],
      explanation:
        'Le tableau de flux de trésorerie réconcilie la variation de trésorerie entre l\'ouverture et la clôture de l\'exercice. La méthode indirecte commence par le résultat net. On ajoute les charges non décaissées (amortissements, dépréciations, provisions dotées) et on retranche les produits non encaissés (reprises de provisions, plus-values de cession). Ensuite, on ajuste pour la variation du Besoin en Fonds de Roulement (BFR) : une augmentation des créances clients réduit le flux (l\'entreprise a comptabilisé un revenu mais pas encore encaissé), une augmentation des dettes fournisseurs l\'augmente (la charge est comptabilisée mais pas encore payée). Les flux d\'investissement comprennent les acquisitions d\'immobilisations (CAPEX), les acquisitions de filiales (net de trésorerie acquise) et les cessions. Les flux de financement incluent les augmentations de capital, les emprunts et remboursements, et les dividendes versés. Le free cash flow (FCF) n\'est pas une ligne officielle d\'IAS 7 mais est universellement utilisé : FCF = Flux opérationnel - CAPEX de maintenance. Il mesure le cash généré après maintien de l\'outil de production, disponible pour rembourser la dette, verser des dividendes ou investir. Le FCF yield (FCF / capitalisation) est un multiple de valorisation populaire.',
      formula: 'Flux opérationnel = Résultat net + Amort. + Provisions - Δ BFR ; FCF = Flux opérationnel - CAPEX',
      example:
        'Résultat net = 150 M€. Amortissements = 60 M€. Provisions = +10 M€. Δ BFR = +20 M€ (augmentation). Flux opérationnel = 150 + 60 + 10 - 20 = 200 M€. CAPEX = -80 M€. FCF = 120 M€. Dividendes = -50 M€, remboursement dette = -30 M€. Δ Trésorerie = +40 M€.',
      finnSays:
        'Le résultat net, c\'est le trésor sur la carte. Le flux de trésorerie, c\'est le trésor dans le coffre. La méthode indirecte te montre le chemin de l\'un à l\'autre !',
    },
  },
  // ─── Lesson 14 ───
  {
    id: 'accounting-14',
    title: 'Tableau de flux direct',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La méthode directe du tableau de flux de trésorerie présente les flux opérationnels par nature d\'encaissement et décaissement. Plus intuitive que la méthode indirecte, elle est cependant plus rare car plus coûteuse à produire.',
      keyPoints: [
        'La méthode directe montre les encaissements clients et les décaissements fournisseurs, salariés et impôts',
        'IAS 7 encourage la méthode directe mais les deux sont autorisées',
        'Moins de 5 % des entreprises utilisent la méthode directe en pratique',
        'Les flux d\'investissement et de financement sont identiques dans les deux méthodes',
      ],
      explanation:
        'La méthode directe présente les flux opérationnels comme suit : encaissements reçus des clients, moins décaissements versés aux fournisseurs, moins salaires et charges sociales versés, moins impôts payés, moins autres charges opérationnelles décaissées. Elle est considérée comme plus informative par l\'IASB car elle montre les flux bruts plutôt qu\'un ajustement du résultat. Cependant, elle nécessite un suivi analytique détaillé des flux de trésorerie par nature, ce qui est coûteux pour les systèmes d\'information comptables. En pratique, les entreprises qui utilisent la méthode directe ajoutent souvent une réconciliation avec la méthode indirecte en annexe. La comparaison entre les deux méthodes pour la même entreprise est instructive. Les encaissements clients (méthode directe) = CA - Δ créances clients (méthode indirecte). Les décaissements fournisseurs (méthode directe) = Achats + Δ stocks - Δ dettes fournisseurs (méthode indirecte). Le résultat final (flux opérationnel net) est identique dans les deux cas : seule la présentation diffère. Les US GAAP autorisent également les deux méthodes mais requièrent une réconciliation avec le résultat net si la méthode directe est utilisée. En Australie, la méthode directe est obligatoire (AASB 107), ce qui en fait une exception mondiale.',
      formula: 'Flux op. direct = Encaissements clients - Décaissements fournisseurs - Salaires - Impôts - Autres',
      example:
        'Encaissements clients = 980 M€ (CA 1 000 M€ - Δ créances +20 M€). Décaissements fournisseurs = -520 M€. Salaires versés = -200 M€. Impôts payés = -45 M€. Autres décaissements = -15 M€. Flux opérationnel direct = 200 M€. Identique à la méthode indirecte.',
      finnSays:
        'La méthode directe montre l\'argent qui entre et sort du coffre du bateau, billet par billet. C\'est plus clair mais ça demande de compter chaque pièce. La plupart des capitaines préfèrent la méthode indirecte, plus rapide !',
    },
  },
  // ─── Lesson 15 ───
  {
    id: 'accounting-15',
    title: 'Notes annexes',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les notes annexes (notes to the financial statements) sont une partie intégrante des états financiers. Elles fournissent les informations détaillées nécessaires à la compréhension des chiffres présentés dans les états primaires.',
      keyPoints: [
        'Les notes contiennent les méthodes comptables, les détails des postes significatifs et les engagements hors bilan',
        'IAS 1 exige une note sur les jugements et estimations significatifs du management',
        'Les notes sur les instruments financiers (IFRS 7) détaillent les risques et les justes valeurs',
        'Les événements postérieurs à la clôture (IAS 10) peuvent modifier les états financiers',
      ],
      explanation:
        'Les notes annexes représentent souvent 100 à 200 pages du rapport annuel d\'un grand groupe, contre 4-6 pages pour les états primaires. Elles sont organisées en sections standardisées. Les méthodes comptables significatives décrivent les choix de l\'entreprise (modèle du coût vs réévaluation, méthode d\'amortissement, politique de capitalisation des frais de développement). Les détails des postes du bilan et du résultat ventilent les montants agrégés (décomposition du chiffre d\'affaires par segment, détail des immobilisations par catégorie, échéancier de la dette). Les informations sectorielles (IFRS 8) ventilent les revenus, résultats et actifs par segment opérationnel tel que vu par le management (management approach). Les engagements hors bilan (lettres de confort, garanties données, contrats de location non comptabilisés sous IFRS 16) sont divulgués. Les parties liées (IAS 24) incluent les transactions avec les dirigeants, les actionnaires principaux et les entités associées. Les événements postérieurs à la clôture (IAS 10) distinguent les événements ajustatifs (qui modifient les états financiers, comme un litige résolu confirmant un montant) et les événements non ajustatifs (qui sont divulgués mais ne changent pas les chiffres, comme une acquisition postérieure). L\'analyste financier doit lire les notes avec attention car elles révèlent des risques non apparents dans les états primaires.',
      example:
        'Dans les notes de LVMH, on découvre : 2,8 Mds€ de contrats de couverture de change, 1,2 Md€ d\'engagements de retraite non provisionnés, un litige fiscal de 500 M€ classé en passif éventuel (non provisionné), et que 30 % du CA provient de la Chine (concentration géographique).',
      finnSays:
        'Les notes annexes sont la petite écriture du contrat maritime. La plupart des gens ne les lisent pas, mais c\'est là que se cachent les icebergs ! Un bon professeur lit toujours les notes.',
    },
  },
  // ─── Lesson 16 ───
  {
    id: 'accounting-16',
    title: 'Earnings quality',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'La qualité des résultats (earnings quality) mesure à quel point le résultat comptable reflète la performance économique réelle de l\'entreprise. Un résultat de haute qualité est récurrent, basé sur le cash, et ne résulte pas de manipulations comptables.',
      keyPoints: [
        'La qualité se mesure par la persistance (récurrence), la prédictibilité et la relation au cash flow',
        'Le ratio accruals = (Résultat net - CFO) / Actifs mesure les composantes non cash du résultat',
        'Des accruals élevés signalent un résultat de moindre qualité qui tend à se reverser',
        'La stratégie accruals anomaly génère des rendements en shortant les entreprises à hauts accruals',
      ],
      explanation:
        'Le résultat comptable se décompose en une composante cash (flux opérationnel, CFO) et une composante accruals (éléments comptabilisés mais pas encore encaissés/décaissés). Les accruals incluent les variations de BFR, les amortissements, les provisions et les charges à payer. Un résultat majoritairement composé de cash est de haute qualité car le cash est objectif et difficilement manipulable. Un résultat dominé par les accruals est de moindre qualité car les accruals sont soumis au jugement et aux estimations du management. Sloan (1996) a montré que le marché ne distingue pas suffisamment ces deux composantes : les entreprises à hauts accruals voient leur résultat se reverser (diminuer) dans les périodes suivantes, mais le marché ne l\'anticipe pas, créant une anomalie de pricing. Les indicateurs de qualité incluent : le ratio CFO/Résultat net (plus il est élevé, meilleure est la qualité), le Beneish M-Score (8 variables pour détecter la manipulation), l\'écart entre résultat et flux de trésorerie sur plusieurs années. Les signaux d\'alerte incluent : une croissance du CA supérieure à celle du CFO, des changements de méthodes comptables, un résultat soutenu par des éléments non récurrents (cessions, reprises de provisions) et des capitalisations agressives de charges.',
      formula: 'Accruals = Résultat net - CFO ; Ratio accruals = Accruals / Actifs moyens ; Beneish M > -1,78 → manipulation probable',
      example:
        'Entreprise A : Résultat = 100 M€, CFO = 120 M€ → accruals négatifs de -20 M€ (haute qualité). Entreprise B : Résultat = 100 M€, CFO = 40 M€ → accruals de +60 M€ (qualité médiocre). B a probablement des créances douteuses, des stocks invendus ou des provisions insuffisantes.',
      finnSays:
        'En comptabilité comme en cuisine, la qualité des ingrédients fait le plat. Un résultat en cash, c\'est du poisson frais. Un résultat en accruals, c\'est de la conserve : comestible mais suspect si c\'est la majorité du menu !',
    },
  },
  // ─── Lesson 17 ───
  {
    id: 'accounting-17',
    title: 'Off-balance sheet',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les éléments hors bilan (off-balance sheet) sont des engagements, risques et actifs qui n\'apparaissent pas dans les états financiers principaux. Leur compréhension est cruciale car ils peuvent représenter des risques considérables non visibles à première lecture.',
      keyPoints: [
        'Les engagements hors bilan incluent les garanties données, les lettres de crédit et les engagements d\'achat',
        'Les SPV (Special Purpose Vehicles) étaient historiquement utilisés pour maintenir des dettes hors bilan',
        'IFRS 16 a réduit le hors bilan locatif mais des éléments importants restent en notes',
        'L\'affaire Enron est l\'exemple paradigmatique de l\'abus du hors bilan',
      ],
      explanation:
        'Le hors bilan comprend tous les engagements et expositions qui ne remplissent pas les critères de comptabilisation au bilan (soit parce que le montant ou la probabilité sont insuffisants, soit parce que la norme spécifique le permet). Les principales catégories sont : les garanties données (cautions, garanties de performance), les engagements de financement irrévocables (lignes de crédit non tirées), les passifs éventuels (litiges avec une probabilité entre 5 % et 50 %), les obligations d\'achat (contrats take-or-pay dans l\'énergie), et les engagements opérationnels résultant d\'exemptions IFRS 16 (baux courts et de faible valeur). Avant IFRS 10 et la consolidation obligatoire des entités structurées, les SPV permettaient de transférer des actifs et des dettes hors du bilan consolidé. Enron avait créé plus de 3 000 SPV pour masquer des dettes et gonfler ses profits. La crise de 2008 a révélé que les banques avaient des expositions massives via des SIV (Structured Investment Vehicles) hors bilan, dont les pertes ont dû être rapatriées in extremis. Aujourd\'hui, les normes sont plus strictes mais le hors bilan reste une réalité. Un analyste doit systématiquement vérifier les notes annexes sur les engagements hors bilan, les passifs éventuels et les garanties données pour obtenir une image complète des risques de l\'entreprise.',
      example:
        'EDF a ~90 Mds€ d\'engagements hors bilan incluant les coûts futurs de démantèlement nucléaire non encore provisionnés, les contrats d\'achat d\'uranium long terme et les garanties données aux filiales. Ces engagements dépassent la capitalisation boursière de l\'entreprise.',
      finnSays:
        'Le hors bilan, c\'est la partie immergée de l\'iceberg. Ce que tu ne vois pas dans les comptes peut couler ton navire. Un professeur avisé regarde toujours sous la surface de l\'eau !',
    },
  },
  // ─── Lesson 18 ───
  {
    id: 'accounting-18',
    title: 'Red flags comptables',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Les red flags comptables sont des signaux d\'alerte qui suggèrent une possible manipulation des comptes, une détérioration de la qualité des résultats ou un risque de fraude. Savoir les identifier est une compétence essentielle pour tout analyste financier.',
      keyPoints: [
        'L\'écart croissant entre résultat et cash flow est le red flag numéro un',
        'Les changements de méthodes comptables sans justification économique sont suspects',
        'Une croissance des créances clients supérieure à celle du CA signale un revenu agressif',
        'Le Beneish M-Score et l\'Altman Z-Score sont des outils quantitatifs de détection',
      ],
      explanation:
        'Les red flags se regroupent en plusieurs catégories. Red flags de revenus : reconnaissance anticipée du CA (channel stuffing : pousser des stocks vers les distributeurs en fin de trimestre), bill-and-hold (facturer sans livrer), swap d\'actifs comptabilisé comme du CA. Red flags de charges : capitalisation excessive de charges ordinaires (WorldCom a capitalisé 3,8 Mds$ de charges opérationnelles), amortissements insuffisants (durées d\'utilité trop longues), provisions sous-estimées. Red flags de bilan : croissance des stocks plus rapide que le CA (obsolescence potentielle), créances clients en hausse (risque d\'impayés), dette off-balance sheet croissante. Red flags de gouvernance : auditeur qui change fréquemment, transactions avec des parties liées opaques, rémunération variable indexée sur des métriques comptables manipulables. Le Beneish M-Score utilise 8 variables (DSRI - Days Sales in Receivables Index, GMI - Gross Margin Index, AQI - Asset Quality Index, SGI - Sales Growth Index, DEPI - Depreciation Index, SGAI - SGA Expense Index, TATA - Total Accruals to Total Assets, LVGI - Leverage Index). Un M-Score > -1,78 indique une probabilité élevée de manipulation. Beneish a correctement identifié Enron comme manipulateur un an avant le scandale.',
      formula: 'M-Score = -4,84 + 0,92×DSRI + 0,528×GMI + 0,404×AQI + 0,892×SGI + 0,115×DEPI - 0,172×SGAI + 4,679×TATA - 0,327×LVGI',
      example:
        'Wirecard (2020) présentait plusieurs red flags : cash au bilan sur des comptes fiduciaires invérifiables (1,9 Md€ fantômes), croissance du CA supérieure à celle des flux, transactions opaques avec des tiers en Asie, changements de commissaires aux comptes partiels. Le M-Score calculé rétrospectivement était largement au-dessus de -1,78.',
      finnSays:
        'Les red flags sont les pavillons de pirates à l\'horizon : certains sont des bluffs, mais tu ferais mieux de les prendre au sérieux. Un bon professeur sait lire les signaux de danger dans les comptes !',
    },
  },
  // ─── Lesson 19 ───
  {
    id: 'accounting-19',
    title: 'Cas Retraitement',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'Ce cas pratique met en application les compétences de retraitement comptable : ajuster les comptes IFRS pour obtenir une image fidèle de la performance économique et permettre la comparabilité entre entreprises utilisant des méthodes différentes.',
      keyPoints: [
        'Les retraitements de location (IFRS 16) ajustent la dette et l\'EBITDA pour la comparabilité',
        'Les retraitements de R&D capitalisée permettent la comparaison entre IFRS et US GAAP',
        'Le goodwill peut être amorti fictivement pour comparer avec des entreprises ayant moins d\'acquisitions',
        'Les retraitements de provisions et de charges non récurrentes normalisent le résultat',
      ],
      explanation:
        'Analysons deux entreprises du même secteur. L\'entreprise A (IFRS) capitalise 200 M€ de R&D, a 500 M€ de droits d\'utilisation IFRS 16, un goodwill de 2 Mds€ et des provisions de restructuration de 150 M€. L\'entreprise B (US GAAP) passe toute la R&D en charges, a des operating leases comptabilisés en charges (50 M€/an), un goodwill de 500 M€ et pas de provisions de restructuration. Pour comparer : Retraitement R&D : retraiter A en passant la R&D en charges (+200 M€ de charges, -200 M€ d\'actifs, -50 M€ d\'impôt différé) ou capitaliser celle de B. Retraitement leasing : avant IFRS 16, on ajoutait les baux capitalisés au bilan des entreprises US pour homogénéiser (facteur 8x les loyers annuels comme approximation de la dette de location). Retraitement goodwill : si on veut comparer avec une entreprise japonaise qui amortit le goodwill, on peut amortir fictivement le goodwill sur 10-20 ans. Retraitement provisions non récurrentes : normaliser le résultat en excluant les provisions de restructuration exceptionnelles. Le résultat ajusté (adjusted earnings) est le point de départ de la valorisation. Les multiples (P/E, EV/EBITDA) doivent être calculés sur des bases ajustées comparables.',
      example:
        'A a un EBITDA reporté de 800 M€ et B de 600 M€. Après retraitement : A EBITDA ajusté = 800 - 200 (R&D) + 50 (loyer de B pour comparer) = 650 M€. B ajusté = 600 + 50 (R&D capitalisée fictive) = 650 M€. Les deux sont finalement équivalents ! Avant retraitement, A semblait 33 % supérieur.',
      finnSays:
        'Le retraitement comptable, c\'est remettre tous les navires de la flotte sur la même carte, avec la même échelle. Sinon, tu compares un galion à un canot en pensant qu\'ils font la même taille !',
    },
  },
  // ─── Lesson 20 ───
  {
    id: 'accounting-20',
    title: 'Examen final',
    xp: 300,
    duration: '60 min',
    content: {
      introduction:
        'Cet examen final couvre l\'ensemble du cours Comptabilité IFRS : normes clés, consolidation, instruments financiers, qualité des résultats et retraitements. Prépare-toi à démontrer ta maîtrise complète du référentiel IFRS.',
      keyPoints: [
        'Maîtriser les normes clés : IFRS 3 (regroupements), IFRS 9 (instruments), IFRS 15 (revenus), IFRS 16 (leases)',
        'Comprendre les mécanismes de consolidation et l\'impact sur les états financiers',
        'Évaluer la qualité des résultats et identifier les red flags comptables',
        'Réaliser des retraitements pour comparer des entreprises sous référentiels différents',
      ],
      explanation:
        'La comptabilité IFRS est le langage universel de la finance. Maîtriser ce langage te permet de lire, interpréter et critiquer les états financiers de toute entreprise cotée dans le monde. Les normes fondamentales que nous avons étudiées -- IAS 16 (immobilisations), IAS 36 (impairment), IAS 37 (provisions), IAS 12 (impôts différés), IFRS 3 (regroupements d\'entreprises), IFRS 9 (instruments financiers), IFRS 15 (revenus), IFRS 16 (leases) -- forment le socle de connaissances de tout analyste financier. La consolidation (IFRS 10, IAS 28) te permet de comprendre comment les grands groupes structurent leurs comptes et comment les intérêts minoritaires, le goodwill et les éliminations intragroupes impactent les agrégats. Le tableau de flux de trésorerie (IAS 7) reste l\'état financier le plus difficile à manipuler et donc le plus fiable. La qualité des résultats et la détection de fraude (Beneish M-Score, analyse des accruals, red flags) te protègent contre les mauvaises surprises. Enfin, les retraitements comptables sont l\'outil indispensable de la comparabilité : aucune analyse financière sérieuse ne peut se faire sans harmoniser les méthodes entre les entreprises comparées.',
      example:
        'Question d\'examen type : Une entreprise acquiert 60 % d\'une cible pour 600 M€. La JV des actifs nets identifiables est de 800 M€. La cible a des baux de 50 M€/an sur 8 ans et capitalise 30 M€/an de R&D. Calculez le goodwill, l\'impact d\'IFRS 16, les NCI, et identifiez les red flags potentiels dans le profil accruals de la cible.',
      finnSays:
        'Tu as maîtrisé le langage IFRS, la grammaire des comptes et la lecture critique des états financiers. Le professeur Finn est fier : tu es prêt à enseigner à ton tour ! Maintenant, va décrypter les comptes du monde réel.',
    },
  },
];
