// ──────────────────────────────────────────────
//  FINA - Venture Capital : Lessons (18)
// ──────────────────────────────────────────────

import type { Lesson } from '../types';

export const ventureCapitalLessons: Lesson[] = [
  // ── 1. Écosystème VC ───────────────────────
  {
    id: 'vc-01',
    title: 'L\'écosystème du Venture Capital',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le Venture Capital (VC) finance les startups innovantes à fort potentiel de croissance. Avec plus de 400 Mds $ investis annuellement dans le monde, le VC est le moteur de l\'innovation technologique et le berceau des entreprises qui transforment nos vies.',
      keyPoints: [
        'Le VC investit en equity dans des startups en échange d\'une participation minoritaire',
        'Les plus grands fonds VC : Sequoia, a16z, Accel, Lightspeed, Index Ventures, Balderton',
        'En France : Partech, Eurazeo Venture, Elaia, Idinvest (Eurazeo), Breega',
        'La loi de puissance (power law) : 1-2 deals sur 10 génèrent l\'essentiel du retour',
        'Le modèle VC repose sur la recherche de « home runs » (rendements 10x+)',
      ],
      explanation:
        'L\'écosystème VC comprend : les fondateurs (entrepreneurs), les investisseurs (business angels, fonds VC, corporate ventures), les accélérateurs (Y Combinator, Station F), les avocats spécialisés, et les banques d\'affaires tech. Le VC se distingue du PE par : (1) l\'investissement minoritaire (vs majoritaire en PE), (2) le focus sur la croissance (vs la rentabilité en PE), (3) le risque très élevé (taux d\'échec > 60 %), (4) le profil de rendement power law (vs rendements plus réguliers en PE). Le VC est un jeu d\'outliers : les rendements d\'un fonds dépendent de 1-2 investissements exceptionnels. Sequoia a investi dans Apple, Google, WhatsApp, Airbnb : chacun de ces deals a retourné le fonds plusieurs fois. La taille du marché adressable (TAM) est le critère numéro un.',
      example:
        'Sequoia Capital investit 60 M $ dans WhatsApp en Series B (2013) pour environ 15 % de la société. Facebook acquiert WhatsApp pour 19 Mds $ en 2014. La part de Sequoia vaut environ 3 Mds $ : un retour de 50x sur un seul deal. Ce seul investissement a retourné l\'intégralité du fonds plusieurs fois.',
      finnSays:
        'Le VC, c\'est chercher l\'aiguille dans la botte de foin. Mais quand tu la trouves, c\'est une aiguille en or massif ! La power law est tout.',
    },
  },

  // ── 2. Seed → Series C ─────────────────────
  {
    id: 'vc-02',
    title: 'Du Seed au Series C',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le financement d\'une startup suit des étapes (rounds) successives, chacune correspondant à un stade de développement et à un profil de risque. Du pre-seed au Series C et au-delà, chaque round a ses caractéristiques propres.',
      keyPoints: [
        'Pre-seed (50-500 K EUR) : idée + équipe, financé par les fondateurs, FFF et business angels',
        'Seed (500 K - 3 M EUR) : MVP + premiers clients, fonds early-stage',
        'Series A (3-15 M EUR) : product-market fit prouvé, metrics solides',
        'Series B (15-50 M EUR) : scale-up, expansion commerciale, internationalisation',
        'Series C+ (50-200 M EUR+) : leadership de marché, préparation exit (IPO/M&A)',
      ],
      explanation:
        'Chaque round correspond à des milestones précis. Le pre-seed finance la validation de l\'idée et la constitution de l\'équipe. Le seed finance le développement du MVP (Minimum Viable Product) et les premiers tests marché. La Series A intervient après la preuve du product-market fit (PMF) : la startup a des clients payants, un taux de rétention solide, et une unit economics prometteuse. La Series B finance le passage à l\'échelle : recrutement massif, expansion géographique, investissement marketing. La Series C+ prépare la domination du marché ou l\'exit. La valorisation typique croît de 3-5x entre chaque round. Le taux de mortalité diminue à chaque étape : ~60 % des startups seed échouent, ~30 % des Series A, ~15 % des Series B.',
      formula: 'Valorisation post-money = Valorisation pre-money + Montant levé\nDilution du fondateur = Montant levé / Valorisation post-money\nRunway (mois) = Trésorerie / Burn rate mensuel',
      example:
        'Parcours de Doctolib : Pre-seed 2013 (FFF, 100 K EUR, valo 500 K). Seed 2014 (1 M EUR, valo pre-money 4 M). Series A 2015 (6 M EUR, valo 30 M, Accel lead). Series B 2017 (26 M EUR, valo 150 M). Series C 2019 (150 M EUR, valo 1 Md+). Le fondateur passe de 100 % à environ 15-20 % du capital au Series C, mais sa part vaut désormais 150-200 M EUR.',
      finnSays:
        'Chaque round est un chapitre de l\'histoire de ta startup. Pas de product-market fit ? Pas de Series A. Pas de scale ? Pas de Series B. Simple comme bonjour !',
    },
  },

  // ── 3. Term sheet ──────────────────────────
  {
    id: 'vc-03',
    title: 'Le Term Sheet',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'Le term sheet est le document non contraignant qui résume les conditions clés d\'un investissement VC. C\'est le point de départ de la négociation entre fondateurs et investisseurs. Comprendre chaque clause est essentiel pour protéger tes intérêts.',
      keyPoints: [
        'Les clauses économiques : valorisation, liquidation preferences, anti-dilution, participation',
        'Les clauses de gouvernance : board seats, droits de veto, protective provisions',
        'Les clauses de sortie : drag-along, tag-along, droit de première offre (ROFR)',
        'Les clauses de protection : pro-rata rights, information rights, founder vesting',
        'Le term sheet est généralement non contraignant sauf l\'exclusivité et la confidentialité',
      ],
      explanation:
        'Le term sheet de Brad Feld et Jason Mendelson (Venture Deals) est la référence. Les clauses les plus critiques sont : (1) la valorisation pre-money (détermine la dilution), (2) les liquidation preferences (qui est payé en premier et combien en cas de sortie), (3) les protective provisions (droit de veto de l\'investisseur sur certaines décisions : levée de fonds, vente, dette, changement de business), (4) le board composition (le fondateur garde-t-il le contrôle du board ?). Le « no-shop clause » (exclusivité) empêche le fondateur de négocier avec d\'autres investisseurs pendant 30-60 jours. Les fondateurs expérimentés se concentrent sur la valorisation et les liquidation preferences, car ce sont les clauses qui impactent le plus le payout final.',
      example:
        'Term sheet type pour une Series A de 8 M EUR : Pre-money valuation 24 M EUR, post-money 32 M EUR (25 % de dilution). Liquidation preference : 1x non-participating. Anti-dilution : broad-based weighted average. Board : 2 fondateurs, 1 investisseur lead, 1 indépendant. Pro-rata rights pour tous les investisseurs. Founder vesting : 4 ans, cliff 1 an. No-shop : 45 jours.',
      finnSays:
        'Le term sheet, c\'est le contrat de mariage entre fondateur et investisseur. Lis chaque ligne, négocie ce qui compte, et fais-toi accompagner par un bon avocat !',
    },
  },

  // ── 4. Pre/Post-money ──────────────────────
  {
    id: 'vc-04',
    title: 'Pre-money et Post-money',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les valorisations pre-money et post-money sont les concepts fondamentaux de la négociation VC. La pre-money est la valorisation de la société avant l\'investissement ; la post-money est la valorisation après. La différence est exactement le montant investi.',
      keyPoints: [
        'Post-money = Pre-money + Montant investi',
        'La dilution du fondateur = Montant investi / Post-money',
        'Le prix par action = Pre-money / Nombre d\'actions existantes',
        'L\'option pool est souvent créé avant le round (inclus dans la pre-money, dilue les fondateurs)',
        'Les convertibles (SAFE, notes) ont une conversion qui impacte la pre-money effective',
      ],
      explanation:
        'La mécanique est simple mais les pièges sont nombreux. Le plus courant : l\'option pool shuffle. L\'investisseur demande que le pool d\'options (typiquement 10-15 % du capital) soit créé AVANT le round, donc inclus dans la pre-money. Cela dilue uniquement les fondateurs et actionnaires existants, pas l\'investisseur. Exemple : pre-money annoncée de 20 M EUR avec un option pool de 15 %, la pre-money « effective » (avant le pool) est de 17 M EUR. La valorisation post-money par action est utilisée dans les rounds ultérieurs pour déterminer si l\'action monte (up round), reste stable (flat round) ou baisse (down round). Le prix par action est plus pertinent que la valorisation totale pour évaluer la création de valeur.',
      formula: 'Post-money = Pre-money + Investissement\n% investisseur = Investissement / Post-money\nPrix/action = Pre-money / Actions fully diluted\nPre-money effective = Pre-money affichée - Option pool',
      example:
        'Series A : Pre-money 20 M EUR, round de 5 M EUR. Post-money = 25 M EUR. L\'investisseur obtient 5/25 = 20 %. Mais si un option pool de 10 % (2,5 M EUR) est créé pre-money, la pre-money effective est 17,5 M EUR. Le fondateur (80 % avant le round) se retrouve à 80 % × (17,5/25) = 56 % au lieu de 64 % sans option pool. L\'investisseur a 20 % dans les deux cas.',
      finnSays:
        'Pre-money, post-money, option pool shuffle... Les maths sont simples, mais l\'impact sur ta dilution est énorme. Fais tes calculs AVANT de signer !',
    },
  },

  // ── 5. Dilution & cap table ────────────────
  {
    id: 'vc-05',
    title: 'Dilution et cap table',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'La cap table (tableau de capitalisation) est le registre de tous les actionnaires d\'une startup et de leurs participations. Comprendre la dilution à chaque round est crucial pour les fondateurs qui veulent garder le contrôle et maximiser leur payout à la sortie.',
      keyPoints: [
        'La dilution typique par round est de 15-25 % (optimal : 15-20 %)',
        'Le fully diluted share count inclut les options, BSA, BSPCE et convertibles',
        'Après Seed + A + B + C, le fondateur détient typiquement 15-25 % (en France)',
        'Les BSPCE (France) sont le mécanisme d\'intéressement des salariés le plus utilisé',
        'La cap table doit rester « propre » : pas trop d\'investisseurs, pas de dead equity',
      ],
      explanation:
        'La dilution est inévitable mais doit être maîtrisée. La règle des 20 % : ne pas céder plus de 20 % par round. Un fondateur qui lève Seed (20 %), Series A (20 %), Series B (15 %), Series C (12 %) se retrouve à environ 100 % × 0,80 × 0,80 × 0,85 × 0,88 = 48 % avant le pool d\'options. Avec un pool de 10-12 %, sa part tombe à ~38-42 %. Le concept de fully diluted est essentiel : il inclut toutes les actions émises + toutes celles qui pourraient être émises (options, BSA, BSPCE, convertibles SAFE/notes). La dead equity (parts détenues par des co-fondateurs partis ou des investisseurs inactifs) est un red flag pour les investisseurs. Le vesting protège contre ce problème. Les outils comme Carta, Capdesk ou Ledgy automatisent la gestion de la cap table.',
      formula: '% fondateur après n rounds = Πᵢ (1 - dilutionᵢ)\nFully diluted = Actions émises + Options/BSA/BSPCE en circulation + Convertibles\nPart économique = Actions détenues / Fully diluted share count',
      example:
        'Cap table après Series B :\n- Fondateurs : 45 % (dont CEO 30 %, CTO 15 %)\n- Seed investors (BA + fonds) : 12 %\n- Series A (Partech lead) : 18 %\n- Series B (Index Ventures lead) : 15 %\n- BSPCE pool (employés) : 10 %\nTotal : 100 % fully diluted. Le CEO a 30 % sur une valo post-money de 100 M EUR, soit une part de 30 M EUR.',
      finnSays:
        'La cap table, c\'est ta carte d\'identité financière. Garde-la propre, maîtrise ta dilution, et surtout : ne donne jamais plus de 20 % par round !',
    },
  },

  // ── 6. Preferred vs Common ─────────────────
  {
    id: 'vc-06',
    title: 'Actions préférentielles vs ordinaires',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'En VC, les investisseurs reçoivent des actions de préférence (preferred shares) qui leur donnent des droits économiques et de gouvernance supérieurs aux actions ordinaires (common shares) détenues par les fondateurs et les salariés.',
      keyPoints: [
        'Les preferred shares ont une liquidation preference : paiement prioritaire en cas de sortie',
        'Les preferred ont des droits de vote renforcés et des protective provisions',
        'Les common shares sont détenues par les fondateurs, les salariés (via BSPCE/options)',
        'La conversion : les preferred peuvent se convertir en common (typiquement à ratio 1:1)',
        'Le prix des preferred est supérieur au prix des common (2-3x en moyenne) pour les besoins 409A',
      ],
      explanation:
        'La distinction preferred vs common est fondamentale pour comprendre les payoffs en cas de sortie. Scénario de sortie à 100 M EUR avec un investisseur qui a mis 20 M EUR pour 25 % en preferred (1x non-participating) : Option A — l\'investisseur exerce sa liquidation preference : il reçoit 20 M EUR (son investissement), les 80 M restants sont répartis entre les common (fondateurs 75 % = 60 M). Option B — l\'investisseur convertit en common : il reçoit 25 % × 100 M = 25 M EUR. L\'investisseur choisit le maximum : ici, il convertit (25 M > 20 M). Mais si la sortie était à 50 M EUR : liquidation pref = 20 M > conversion 25 % × 50 = 12,5 M. Il prend la pref. Les preferred protègent l\'investisseur en cas de sortie basse.',
      example:
        'Startup vendue à 40 M EUR. Investisseur Series A : 10 M EUR pour 30 % en preferred (1x non-participating). Fondateurs : 70 % en common. L\'investisseur compare : liquidation pref = 10 M EUR, puis les 30 M restants sont répartis au prorata des common. Conversion = 30 % × 40 M = 12 M EUR. L\'investisseur convertit (12 M > 10 M). Le fondateur reçoit 70 % × 40 M = 28 M EUR.',
      finnSays:
        'Preferred vs common, c\'est le cœur de la mécanique VC. L\'investisseur a un filet de sécurité (la pref), le fondateur a l\'upside. Comprends bien qui est payé quoi, et quand !',
    },
  },

  // ── 7. Liquidation preferences ─────────────
  {
    id: 'vc-07',
    title: 'Les liquidation preferences',
    xp: 250,
    duration: '50 min',
    content: {
      introduction:
        'Les liquidation preferences déterminent l\'ordre et le montant de distribution des proceeds en cas de liquidation, vente ou changement de contrôle. C\'est la clause la plus impactante du term sheet et la plus mal comprise par les fondateurs.',
      keyPoints: [
        '1x non-participating : standard et « founder-friendly », l\'investisseur récupère 1x sa mise OU sa part au prorata',
        '1x participating : l\'investisseur récupère 1x sa mise ET sa part au prorata du restant (double dip)',
        'Le multiple (1x, 2x, 3x) détermine combien l\'investisseur récupère en priorité',
        'Les prefs sont empilées (stacked) : le dernier investisseur (Series C) est payé en premier',
        'Le participating cap limite le participating à un multiple maximum (ex : 3x)',
      ],
      explanation:
        'La liquidation preference de 1x non-participating est le standard de marché et le plus favorable aux fondateurs. Le 1x participating (aussi appelé « double dip ») donne un avantage significatif à l\'investisseur : il récupère d\'abord son investissement, puis participe au prorata sur le reliquat. Exemple extrême : investisseur met 10 M pour 50 %, 1x participating. Sortie à 30 M. L\'investisseur récupère : 10 M (pref) + 50 % × 20 M (participation) = 20 M, soit 67 % des proceeds au lieu de 50 %. Le fondateur ne reçoit que 10 M (33 %). Les multiples supérieurs à 1x (2x, 3x) sont réservés aux situations difficiles (down rounds, bridge rounds) et sont très défavorables aux fondateurs. Le waterfall d\'une sortie avec plusieurs tranches de preferred est un exercice complexe : chaque tranche a sa propre séniorité.',
      formula: 'Non-participating : Payout = max(Multiple × Investissement, % ownership × Exit)\nParticipating : Payout = Multiple × Investissement + % ownership × (Exit - Total prefs)\nParticipating capped : min(Participating payout, Cap × Investissement)',
      example:
        'Sortie à 60 M EUR. Series A : 5 M pour 20 %, 1x participating. Series B : 15 M pour 25 %, 1x non-participating. Waterfall (pari passu) : (1) Series B pref : 15 M. (2) Series A pref : 5 M. Restant : 40 M. (3) Series A participe : 20 % × 40 M = 8 M. Series B convertit : 25 % × 60 M = 15 M (= sa pref, neutre). Total Series A : 13 M (2,6x). Fondateurs (55 %) : 55 % × 40 M = 22 M + 15 M restants distribués au prorata. Exercice complexe mais crucial.',
      finnSays:
        'Les liquidation preferences, c\'est le nerf de la guerre en VC. Un 1x non-participating, c\'est OK. Un 2x participating, c\'est un hold-up ! Négocie comme si ta vie en dépendait.',
    },
  },

  // ── 8. Anti-dilution ───────────────────────
  {
    id: 'vc-08',
    title: 'Les protections anti-dilution',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Les clauses anti-dilution protègent les investisseurs en cas de down round (round à une valorisation inférieure au round précédent). Elles ajustent le prix de conversion des preferred shares à la baisse, diluant davantage les fondateurs.',
      keyPoints: [
        'Le full ratchet ajuste le prix de conversion au prix du nouveau round (le plus agressif)',
        'Le broad-based weighted average est le standard de marché (plus équilibré)',
        'Le narrow-based weighted average est intermédiaire (moins favorable aux fondateurs)',
        'L\'anti-dilution ne s\'applique qu\'en cas de down round',
        'Le pay-to-play peut annuler l\'anti-dilution si l\'investisseur ne participe pas au nouveau round',
      ],
      explanation:
        'Le full ratchet est le mécanisme le plus agressif : si un investisseur Series A a acheté à 10 EUR/action et qu\'un down round se fait à 5 EUR/action, le prix de conversion du Series A est ajusté de 10 EUR à 5 EUR. L\'investisseur reçoit le double d\'actions, diluant massivement les fondateurs. Le broad-based weighted average est plus équilibré : il calcule un prix de conversion moyen pondéré qui tient compte du montant et du prix du nouveau round. La formule aboutit à un prix entre l\'ancien prix et le prix du down round. Le pay-to-play est un mécanisme qui oblige l\'investisseur à participer au nouveau round pour conserver ses protections anti-dilution : s\'il ne participe pas, ses preferred shares se convertissent en common.',
      formula: 'Broad-based weighted average :\nNew Price = Old Price × [(A + B) / (A + C)]\noù A = actions fully diluted avant le round\nB = montant levé / Old Price (actions à l\'ancien prix)\nC = montant levé / New Price (actions réellement émises)',
      example:
        'Series A à 10 EUR/action (1 M actions émises). Down round Series B à 5 EUR/action (500 K actions pour 2,5 M EUR). Full ratchet : prix ajusté à 5 EUR, le Series A reçoit 2 M d\'actions au lieu d\'1 M. Broad-based weighted average : New Price = 10 × (10M + 2,5M) / (10M + 5M) = 10 × 12,5/15 = 8,33 EUR. Le fondateur est moins dilué avec le weighted average.',
      finnSays:
        'L\'anti-dilution, c\'est l\'airbag de l\'investisseur en cas de crash (down round). Le full ratchet est un airbag qui écrase le conducteur — préfère le weighted average !',
    },
  },

  // ── 9. Vesting & cliff ─────────────────────
  {
    id: 'vc-09',
    title: 'Vesting et cliff',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le vesting est le mécanisme par lequel les fondateurs et les salariés « gagnent » progressivement leurs actions ou options sur une période définie. Le cliff est la période minimale avant que le premier lot d\'actions ne soit acquis.',
      keyPoints: [
        'Le vesting standard : 4 ans avec cliff de 1 an, puis mensuel ou trimestriel',
        'Le cliff protège contre les départs précoces (0 action si départ avant 1 an)',
        'Le reverse vesting s\'applique aux fondateurs : ils possèdent les actions mais les « regagnent » dans le temps',
        'L\'accélération (single/double trigger) en cas de changement de contrôle',
        'Les BSPCE en France : vesting + exercice possible après la période d\'acquisition',
      ],
      explanation:
        'Pour un salarié avec un vesting standard (4 ans, cliff 1 an, mensuel ensuite) : rien les 12 premiers mois, puis 25 % à la fin du cliff, puis 1/48 par mois supplémentaire. Le reverse vesting des fondateurs fonctionne différemment : le fondateur possède déjà toutes ses actions, mais si il quitte avant la fin du vesting, la société peut racheter les actions non vestées à leur valeur nominale (quasi gratuitement). L\'accélération single trigger signifie que 100 % des actions vestent immédiatement en cas d\'acquisition de la société. Le double trigger exige deux événements : (1) acquisition et (2) licenciement du salarié dans les 12 mois suivants. Le double trigger est plus courant et plus acceptable pour les acquéreurs. Les BSPCE français offrent un avantage fiscal majeur : imposition à 12,8 % (PFU) + 17,2 % de prélèvements sociaux pour les gains.',
      example:
        'CTO d\'une startup avec 50 000 BSPCE, vesting 4 ans, cliff 1 an, mensuel ensuite. Prix d\'exercice : 1 EUR. Après 2,5 ans : 50 000 × (30/48) = 31 250 BSPCE vestés. Si la startup est vendue à un prix/action de 20 EUR : gain = 31 250 × (20 - 1) = 593 750 EUR, imposé à 30 % (PFU + PS) = 178 125 EUR d\'impôts. Net : 415 625 EUR.',
      finnSays:
        'Le vesting protège tout le monde : les fondateurs entre eux, les investisseurs contre les départs, et les salariés qui restent. C\'est la base d\'un cap table sain !',
    },
  },

  // ── 10. SAFE ───────────────────────────────
  {
    id: 'vc-10',
    title: 'Le SAFE',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Le SAFE (Simple Agreement for Future Equity), créé par Y Combinator en 2013, est un instrument de financement qui donne le droit d\'obtenir des actions lors d\'un futur round de financement. Il a largement remplacé les convertible notes en early-stage.',
      keyPoints: [
        'Le SAFE n\'est pas de la dette : pas d\'intérêt, pas de maturité, pas de remboursement',
        'Le valuation cap fixe la valorisation maximale de conversion (protège l\'investisseur)',
        'Le discount (typiquement 15-25 %) réduit le prix de conversion par rapport au prochain round',
        'Le MFN (Most Favored Nation) donne le droit aux meilleurs termes des SAFEs ultérieurs',
        'Le post-money SAFE (standard YC depuis 2018) définit la dilution exacte de l\'investisseur',
      ],
      explanation:
        'Le SAFE a simplifié le financement early-stage en éliminant la négociation de termes complexes. Le post-money SAFE (version actuelle de YC) est calculé sur la valorisation post-money du cap : si le cap est 10 M EUR et l\'investissement est 1 M EUR, l\'investisseur aura 10 % à la conversion. L\'avantage vs la convertible note : pas d\'intérêt qui court, pas de date de maturité qui crée une pression, pas de négociation de note purchase agreement complexe. Le piège : empiler trop de SAFEs avec des caps différents crée une dilution cachée pour le fondateur. Le « SAFE stack » peut surprendre à la conversion lors du round pricé. Recommandation : ne pas dépasser 20-25 % de dilution totale en SAFEs avant le round pricé.',
      formula: 'Avec cap uniquement :\nPrix conversion = min(Cap / Fully diluted, Prix du round)\nAvec discount uniquement :\nPrix conversion = Prix du round × (1 - Discount)\nAvec cap + discount :\nPrix conversion = min(Cap / Fully diluted, Prix du round × (1 - Discount))',
      example:
        'Fondateur lève 500 K EUR via un post-money SAFE avec un cap de 5 M EUR. L\'investisseur SAFE détiendra 10 % à la conversion (500K/5M). Lors de la Series A (pre-money 15 M EUR, round de 5 M EUR), le SAFE convertit au prix implicite du cap : 5 M / actions fully diluted. Si le prix du round est plus élevé que le prix du cap, l\'investisseur SAFE a un meilleur prix — c\'est la protection du cap.',
      finnSays:
        'Le SAFE a démocratisé le financement des startups. Simple, rapide, et pas de négociation éternelle. Mais attention au SAFE stack : la dilution cachée est le piège numéro un !',
    },
  },

  // ── 11. DD startup ─────────────────────────
  {
    id: 'vc-11',
    title: 'La due diligence startup',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'La due diligence VC est très différente de la DD en PE. L\'absence de revenus significatifs et l\'incertitude du marché obligent l\'investisseur à évaluer le potentiel plutôt que la performance. L\'équipe, le marché et le produit sont les trois piliers de l\'analyse.',
      keyPoints: [
        'L\'évaluation de l\'équipe est le critère #1 : fondateurs, complémentarité, track record',
        'Le marché : TAM (Total Addressable Market), SAM, SOM, timing, dynamique',
        'Le produit : différenciation technique, barrières à l\'entrée, moat',
        'La traction : métriques de croissance, rétention, NPS, pipeline',
        'Les références : appels aux clients, anciens employeurs, co-fondateurs précédents',
      ],
      explanation:
        'En early-stage, 90 % de la décision repose sur l\'équipe et le marché. L\'investisseur VC fait typiquement 10-20 reference calls pour évaluer les fondateurs : anciens collègues, managers, co-fondateurs, clients early adopters. Les red flags : fondateur solo sur un projet complexe, équipe 100 % business sans CTO, historique de conflits entre co-fondateurs, marché trop petit (< 1 Md EUR de TAM), absence de différenciation technique. La DD technique (code review, architecture, scalabilité) est de plus en plus importante pour les rounds Series A+. La DD financière se résume souvent au modèle financier, au burn rate, et à la cohérence des projections. Les projections sont prises avec un grain de sel : l\'investisseur se concentre sur les hypothèses sous-jacentes plutôt que sur les chiffres eux-mêmes.',
      example:
        'DD Series A d\'une startup SaaS B2B (ARR 2 M EUR, croissance 3x YoY). L\'investisseur vérifie : 15 reference calls (fondateurs, clients, ex-employés). TAM validé à 5 Mds EUR (étude Gartner). Produit : avantage technique confirmé par 2 CTOs indépendants. Traction : 50 clients, NPS 72, churn < 5 %/an, NDR 125 %. Red flag identifié : dépendance à AWS pour une fonctionnalité clé. Décision : investir, avec un plan de migration technique.',
      finnSays:
        'En VC, la DD c\'est surtout du « people diligence ». Un marché moyen avec une équipe exceptionnelle bat un marché exceptionnel avec une équipe moyenne. Toujours.',
    },
  },

  // ── 12. Unit economics ─────────────────────
  {
    id: 'vc-12',
    title: 'Les unit economics',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Les unit economics mesurent la rentabilité unitaire d\'un business model. Le ratio LTV/CAC (Lifetime Value / Customer Acquisition Cost) est la métrique reine qui détermine si le modèle est viable et scalable.',
      keyPoints: [
        'CAC (Customer Acquisition Cost) = Dépenses marketing & sales / Nombre de clients acquis',
        'LTV (Lifetime Value) = ARPU × Marge brute × Durée de vie client',
        'Le ratio LTV/CAC doit être > 3x pour un modèle viable',
        'Le payback period (temps pour récupérer le CAC) devrait être < 12-18 mois',
        'La contribution margin (marge unitaire) doit être positive pour chaque unité vendue',
      ],
      explanation:
        'Les unit economics répondent à la question fondamentale : chaque client acquis rapporte-t-il plus qu\'il ne coûte ? Le CAC inclut tous les coûts d\'acquisition : marketing (paid, organic), vente (SDR, AE, SE), onboarding. Le LTV projette les revenus futurs du client sur sa durée de vie, pondérés par la marge brute. Un ratio LTV/CAC de 3x signifie que chaque euro investi en acquisition rapporte 3 euros de marge. Le payback period est le temps pour récupérer le CAC : < 12 mois pour un SaaS, < 6 mois pour un marketplace. Les fonds VC décomposent les unit economics par cohorte (mois d\'acquisition), par canal (paid vs organic), et par segment (enterprise vs SMB). La dégradation des unit economics avec la croissance (augmentation du CAC pour aller au-delà des early adopters) est un risque clé.',
      formula: 'CAC = (Dépenses Sales + Marketing) / Nouveaux clients\nLTV = ARPU × Marge brute × (1 / Taux de churn)\nLTV/CAC ratio (target > 3x)\nPayback = CAC / (ARPU mensuel × Marge brute)\nContribution margin = Revenue - COGS - Variable costs par unité',
      example:
        'SaaS B2B : ARPU mensuel 500 EUR, marge brute 80 %, churn mensuel 2 %. LTV = 500 × 0,80 / 0,02 = 20 000 EUR. CAC (paid) = 5 000 EUR. LTV/CAC = 4x (bon). Payback = 5 000 / (500 × 0,80) = 12,5 mois (acceptable). Mais le CAC organic est de 1 000 EUR → LTV/CAC organic = 20x. L\'enjeu est de maximiser la part d\'organic dans le mix d\'acquisition.',
      finnSays:
        'LTV/CAC > 3x, payback < 12 mois : si tu coches ces deux cases, ton modèle est une machine à cash. Sinon, revois ta stratégie d\'acquisition avant de scaler !',
    },
  },

  // ── 13. SaaS metrics ───────────────────────
  {
    id: 'vc-13',
    title: 'Les métriques SaaS',
    xp: 250,
    duration: '45 min',
    content: {
      introduction:
        'Le SaaS (Software as a Service) est le modèle dominant en venture capital. Ses métriques spécifiques — ARR, NDR, churn, rule of 40 — sont le langage universel de l\'évaluation des startups logicielles.',
      keyPoints: [
        'ARR (Annual Recurring Revenue) : le revenu récurrent annualisé, la métrique reine',
        'MRR (Monthly Recurring Revenue) : l\'ARR divisé par 12, suivi mensuellement',
        'NDR (Net Dollar Retention) : expansion - churn = > 100 % signifie croissance sans nouveaux clients',
        'Gross churn vs Net churn : le gross ignore l\'expansion, le net l\'inclut',
        'Rule of 40 : Croissance (%) + Marge EBITDA (%) doit être > 40 %',
      ],
      explanation:
        'L\'ARR est la mesure de taille d\'un SaaS. Les seuils clés : 1 M EUR (milestone Series A), 10 M EUR (Series B), 50-100 M EUR (pré-IPO). Le NDR (Net Dollar Retention) mesure la capacité à générer plus de revenus des clients existants. Un NDR > 120 % signifie que l\'expansion (upsell, cross-sell) compense largement le churn : la base installée croît de 20 %/an sans acquérir un seul nouveau client. Les meilleurs SaaS B2B ont un NDR > 130 % (Snowflake : 158 %, Datadog : 130 %). La Rule of 40 (David Skok) est le test de qualité : une startup à 60 % de croissance et -15 % de marge EBITDA score 45 (> 40, OK). La valorisation SaaS se fait en multiple d\'ARR : 5-10x pour un SaaS médian, 15-30x pour les top performers (forte croissance + NDR élevé).',
      formula: 'ARR = MRR × 12\nNDR = (ARR début + Expansion - Contraction - Churn) / ARR début × 100\nGross Churn Rate = ARR perdu / ARR début × 100\nRule of 40 = Revenue Growth % + EBITDA Margin %\nMagic Number = Net New ARR / S&M spend du trimestre précédent',
      example:
        'SaaS B2B au 31 déc : ARR début d\'année 10 M EUR. New ARR (nouveaux clients) : 4 M. Expansion (upsell) : 2,5 M. Contraction (downsell) : 0,5 M. Churn : 1 M. ARR fin = 15 M. Croissance ARR = 50 %. NDR = (10 + 2,5 - 0,5 - 1) / 10 = 110 %. Gross churn = 1/10 = 10 %. Rule of 40 : 50 % croissance + (-20 %) marge = 30 (en dessous de 40, besoin d\'améliorer la rentabilité).',
      finnSays:
        'ARR, NDR, Rule of 40 : c\'est le tableau de bord de tout SaaS. Un NDR > 120 % est une machine à croissance. En dessous de 100 %, c\'est un seau percé !',
    },
  },

  // ── 14. Board et gouvernance VC ────────────
  {
    id: 'vc-14',
    title: 'Le Board en VC',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Le board (conseil d\'administration) d\'une startup évolue à chaque round de financement. Sa composition, son fonctionnement et l\'équilibre du pouvoir entre fondateurs et investisseurs sont des enjeux stratégiques majeurs.',
      keyPoints: [
        'Seed/Pre-seed : pas de board formel ou board minimaliste (2 fondateurs)',
        'Series A : board de 3-5 membres (2 fondateurs + 1 investisseur lead ± 1 indépendant)',
        'Series B+ : board de 5-7 membres (2 fondateurs + 2 investisseurs + 1-2 indépendants)',
        'L\'investisseur lead obtient généralement un board seat et des observer rights pour les suiveurs',
        'Le fondateur doit garder le contrôle du board aussi longtemps que possible',
      ],
      explanation:
        'Le board VC a un rôle différent du board PE : il est plus stratégique et moins opérationnel. Les investisseurs VC apportent leur réseau, leur expertise (recrutement, go-to-market, fundraising), et une perspective extérieure. Les protective provisions donnent à l\'investisseur un droit de veto sur certaines décisions même sans contrôle du board : lever des fonds, vendre la société, changer les statuts, émettre des actions, prendre de la dette au-delà d\'un seuil. Le conflit potentiel entre fondateurs et investisseurs porte souvent sur le timing de la sortie, les nouvelles levées de fonds (dilution), et la rémunération du management. Les board meetings sont typiquement trimestriels en Series A, et incluent un board deck structuré : métriques clés, update produit, pipeline commercial, trésorerie, hiring, stratégie.',
      example:
        'Board post-Series B : 5 membres — CEO (fondateur), CTO (fondateur), Partner Partech (Series A lead, siège depuis 2 ans), Partner Index Ventures (Series B lead), 1 indépendant (ancien CEO d\'un SaaS coté, recruté par le board). Partech a aussi des observer rights. Board meetings : trimestriels, 3h, avec un board deck de 30-40 slides envoyé 48h avant.',
      finnSays:
        'Le board, c\'est ton conseil de guerre. Choisis tes investisseurs comme tu choisirais tes alliés : pour leur valeur ajoutée, pas juste pour leur chèque !',
    },
  },

  // ── 15. Bridge rounds ──────────────────────
  {
    id: 'vc-15',
    title: 'Les bridge rounds',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Un bridge round (tour de pont) est un financement temporaire destiné à « tenir » la startup jusqu\'au prochain round majeur. Il peut être un signe de force (bridge vers un gros round) ou de faiblesse (l\'entreprise a du mal à lever).',
      keyPoints: [
        'Le bridge est typiquement fait en convertible notes ou SAFEs',
        'Le montant est plus faible qu\'un round classique (6-12 mois de runway)',
        'Les investisseurs existants sont souvent les financiers du bridge (insiders)',
        'Un bridge « de force » prépare un round plus important dans de meilleures conditions',
        'Un bridge « de faiblesse » signale des difficultés (miss de métriques, marché fermé)',
      ],
      explanation:
        'Le bridge de force intervient quand la startup est en bonne trajectoire mais veut atteindre un milestone clé (ARR 1 M, product-market fit confirmé) avant de lever un round pricé à une meilleure valorisation. Les investisseurs existants y participent volontiers avec un discount de 10-20 % sur le prochain round. Le bridge de faiblesse est plus problématique : la startup n\'a pas atteint ses objectifs et les nouveaux investisseurs ne suivent pas. Les insiders sont alors confrontés au dilemme : investir plus dans un actif risqué (« throwing good money after bad ») ou laisser la startup mourir (et perdre l\'investissement existant). Les termes du bridge en situation de faiblesse sont plus durs : discount élevé (25-30 %), cap très bas, warrants supplémentaires, voire liquidation preference 2x.',
      example:
        'Startup SaaS post-Series A (ARR 800 K EUR, target ARR pour Series B : 2 M EUR). Runway restant : 4 mois. Le fondateur lève un bridge de 1,5 M EUR auprès des investisseurs Series A via une convertible note : discount 15 %, cap à 30 M EUR (vs valo Series A de 20 M EUR), maturité 18 mois. Objectif : atteindre 2 M EUR d\'ARR dans 12 mois pour lever une Series B à 40-50 M EUR de valo.',
      finnSays:
        'Le bridge, c\'est le sprint final avant le prochain ravitaillement. Bien géré, il propulse ta valo. Mal géré, c\'est le début de la fin !',
    },
  },

  // ── 16. Down rounds ────────────────────────
  {
    id: 'vc-16',
    title: 'Les down rounds',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Un down round est une levée de fonds à une valorisation inférieure au round précédent. C\'est un événement douloureux pour les fondateurs et les investisseurs existants, avec des conséquences financières et psychologiques significatives.',
      keyPoints: [
        'Un down round dilue massivement les fondateurs (anti-dilution + prix bas)',
        'Il déclenche les clauses anti-dilution des preferred (ajustement du prix de conversion)',
        'Le moral de l\'équipe est impacté (BSPCE/options sous l\'eau = sans valeur)',
        'Le signal négatif peut compliquer les recrutements et les relations commerciales',
        'Le « pay-to-play » force les investisseurs existants à participer ou perdre leurs droits',
      ],
      explanation:
        'En 2022-2023, après l\'euphorie de 2021, de nombreuses startups tech ont subi des down rounds (Stripe : valo passée de 95 Mds à 50 Mds $, Klarna : de 46 Mds à 6,7 Mds). Les conséquences : (1) les clauses anti-dilution (broad-based weighted average) ajustent le prix des preferred existants, diluant les fondateurs ; (2) les BSPCE/options exercées à un prix supérieur à la nouvelle valo sont « underwater » (sans valeur — mais attention, l\'employé a quand même payé le prix d\'exercice) ; (3) le repricing des options (nouveau strike price plus bas) peut rétablir l\'incentive mais crée des complications comptables et fiscales. Pour le fondateur, la stratégie de survie inclut : (1) accepter la réalité de marché, (2) négocier un reset du management package, (3) prouver la path to profitability, (4) utiliser le pay-to-play pour aligner les investisseurs.',
      example:
        'Startup valorisée 100 M EUR en Series B (2021), EBITDA négatif -8 M EUR. Marché fermé en 2022, besoin de cash. Down round Series C à 40 M EUR (-60 %). Anti-dilution (BBWA) : le prix de conversion du Series B passe de 50 EUR à 35 EUR/action. Le fondateur passe de 30 % à 18 % du capital. Les BSPCE à 50 EUR sont underwater. Le board négocie un repricing des options à 20 EUR et un nouveau pool de 8 % pour retenir les talents clés.',
      finnSays:
        'Un down round, c\'est un coup dur mais pas la fin du monde. Les meilleures entreprises peuvent rebondir : Facebook a subi un down round en 2009 avant de devenir un géant. L\'essentiel, c\'est la path to profitability !',
    },
  },

  // ── 17. Sorties VC ─────────────────────────
  {
    id: 'vc-17',
    title: 'Les sorties en VC',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'La sortie (exit) est le moment où l\'investisseur VC monétise sa participation. Les trois voies principales sont l\'acquisition (M&A), l\'IPO et le secondary sale. La qualité des exits détermine la performance du fonds et la capacité du GP à lever le suivant.',
      keyPoints: [
        'M&A (acquisition) : 80-90 % des exits VC, valorisation typique 3-10x le dernier round',
        'IPO : 5-10 % des exits, réservé aux startups à très forte croissance (ARR > 100 M EUR)',
        'Secondary (vente de parts à d\'autres investisseurs) : en forte croissance',
        'Le time to exit moyen en VC est de 7-10 ans',
        'La distribution de rendements suit une power law : 1-2 exits portent le fonds',
      ],
      explanation:
        'L\'acquisition est la voie de sortie la plus fréquente. Les acquéreurs sont des grandes techs (Google, Microsoft, Salesforce), des corporates en transformation digitale, ou des fonds de PE/growth equity. Le multiple de sortie dépend du secteur et de la croissance : un SaaS à 50 % de croissance peut se vendre 10-15x ARR. L\'IPO est réservée aux « outliers » : forte croissance, large marché, path to profitability clair. Le processus IPO VC est similaire au PE mais avec des enjeux spécifiques : dual-class shares (le fondateur garde le contrôle post-IPO), lock-up de 180 jours, volatilité élevée post-IPO. Le secondary sale (vente de parts sur des plateformes comme Forge, Nasdaq Private Market, ou à des fonds de secondary) permet de distribuer plus tôt. Le write-off (perte totale) concerne 30-50 % des investissements d\'un fonds VC.',
      formula: 'Retour du fonds = Σ (Multiple_i × Montant investi_i) pour chaque exit\nPower law : les top 10 % des deals génèrent > 80 % du retour total\nDistribution target : chaque deal doit pouvoir retourner le fonds (fund returner)',
      example:
        'Fonds VC early-stage (100 M EUR, 25 investissements de 4 M EUR en moyenne). Résultats après 10 ans : 8 write-offs (0x = 0), 8 retours faibles (0,5-2x = 40 M), 5 retours corrects (3-5x = 70 M), 3 bons retours (5-10x = 90 M), 1 home run (30x = 120 M). Total : 320 M EUR. MOIC fonds = 3,2x, TRI brut ≈ 12 %. Le home run à 30x représente 37 % du retour total.',
      finnSays:
        'En VC, la sortie c\'est la consécration — ou le constat d\'échec. Un seul home run peut sauver un fonds entier. C\'est pour ça qu\'on cherche des fusées, pas des tortues !',
    },
  },

  // ── 18. Cas Term sheet ─────────────────────
  {
    id: 'vc-18',
    title: 'Cas pratique : Négociation d\'un term sheet',
    xp: 300,
    duration: '55 min',
    content: {
      introduction:
        'Ce cas pratique simule la négociation complète d\'un term sheet entre un fondateur et un fonds VC pour une Series A. Tu analyses chaque clause, calcules la dilution, et construis les scénarios de sortie pour optimiser le deal.',
      keyPoints: [
        'Analyser la valorisation pre-money et l\'impact de l\'option pool shuffle',
        'Évaluer les liquidation preferences et leurs conséquences sur le waterfall de sortie',
        'Calculer la dilution du fondateur après le round',
        'Comprendre les implications des clauses de gouvernance (board, protective provisions)',
        'Construire les scénarios de sortie (bull, base, bear) et le payout pour chaque partie',
      ],
      explanation:
        'La startup FintechFlow (SaaS B2B pour la trésorerie d\'entreprise) a 18 mois d\'existence, 1,5 M EUR d\'ARR (croissance 3x YoY), 30 clients enterprise, NDR 135 %, burn rate 200 K EUR/mois, 8 mois de runway. Le fondateur (CEO, 65 % du capital) cherche à lever 10 M EUR en Series A. Deux term sheets arrivent : (A) Partech : pre-money 30 M EUR, 1x non-participating, BBWA anti-dilution, board 2+1+1, option pool 12 % post-money. (B) Fonds US : pre-money 25 M EUR, 1x participating capped at 3x, full ratchet anti-dilution, board 2+1+2 (2 investisseurs), option pool 15 % pre-money. L\'analyse montre que le term sheet A est nettement plus favorable malgré une valo plus haute : la pre-money effective du term sheet B est plus basse (25 M - 15 % pool = 21,25 M effective), le participating + full ratchet réduit significativement le payout du fondateur en cas de sortie moyenne.',
      example:
        'Scénario de sortie à 200 M EUR avec le term sheet A : Fondateur (53 % post-round) → 53 % × 200 M = 106 M EUR. Investisseur Series A : max(10 M pref, 25 % × 200 M) = 50 M EUR. Seeds (10 %) : 20 M. Pool (12 %) : 24 M.\nAvec le term sheet B (participating capped 3x) : Investisseur récupère 10 M pref + 28,6 % × (200 M - 10 M) = 10 + 54,3 = 64,3 M EUR (capped à 3x × 10 M = 30 M → le cap s\'applique). L\'investisseur prend le max(64,3 M non-capped, 30 M capped) — avec un cap à 3x, le payout est limité à 30 M si la formule participating est cappée. Le calcul précis dépend des termes exacts du cap.',
      finnSays:
        'La négociation du term sheet, c\'est le moment le plus important de ta vie de fondateur (après le product-market fit). Chaque clause compte, chaque pourcentage compte. Prépare-toi comme un athlète avant les Jeux Olympiques !',
    },
  },
];
